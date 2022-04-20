//NODE MODULES
import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import dotenv from "dotenv";
import GoogleStrategy from "passport-google-oauth20";
import crypto from"crypto";

//DB CALLER
import db_caller from "../db_interact/db_caller.js";

const router = express.Router();
const secret = "GDSC_WALLET";

// create a sha-256 hasher
const sha256Hasher = crypto.createHmac("sha256", secret);

dotenv.config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const CLIENT_URL = process.env.CLIENT_URL;

//設定passport
passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/oauth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try{
          const user_email = profile.email;

          //使用email hash出 使用者id
          const user_id = sha256Hasher.update(user_email);

          //const user_id="'user_7552f100-eba2-44e1-bc7f-7a1690fd4913"; //測試用假資料

          //確認此使用者是否已經存在WALLET的DB
          const user_exist = await db_caller.authenticate(user_id);          
          
          if(user_exist){
              return done(null, 
                {
                    test:"hello",
                    profile:{...profile,user_id:user_id}
                });
            }
            else{
                return done(null, "user not exist in db");
            }
      }
      catch(err){

        //寫到紀錄檔，尚未實作
        console.log('err :', err);

        //把error throw出來，express預設會接住err並自動回傳400,
        throw err
      }
    }
  )
);

//設定passport
passport.serializeUser(function (user, done) {
  done(null, user);
});

//設定passport
passport.deserializeUser(function (user, done) {
  done(null, user);
});

//GOOGLE OAUTH LOGIN
router.get(
    "/google/login",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );

//GOOGLE OAUTH CALLBACK HANDLER
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/oauth/google/success",
    failureRedirect: "/oauth/google/failure",
  }
  )
);

//GOOGLE OAUTH SUCCESS CALLBACK
router.get("/google/success", isLoggedIn, (req, res) => {

  //製作jwt
  const { email , user_id } = req.user.profile;
  const token = jwt.sign( { user_id: user_id }, secret, { expiresIn: "1h" } );

  res.header('Authorization', token);
  res.redirect("http://localhost:3000")
});

//GOOGLE OAUTH FAILURE CALLBACK
router.get("/google/failure", (req, res) => {
    res.send("Failed to authenticate..");
});

//GOOGLE OAUTH SUCCESS MIDDLEWARE
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

//登出 (暫時不用)
router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Goodbye!");
});

export default router;