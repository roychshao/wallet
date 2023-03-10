import express from "express";
import auth from "../middleware/auth.js";
import { insert_debtor_response, insert_debtor_record_response, delete_debtor_record_response, update_debtor_response, delete_debtor_response } from '../middleware/debtor.js';
import { get_all_debtors, get_debtor_records, insert_debtor, insert_debtor_record, delete_debtor_record, update_debtor, delete_debtor } from "../controllers/debtor.js";
import { get_debtor_records_check, insert_debtor_check, update_debtor_check, delete_debtor_check } from "../object/debtor.js";

const router = express.Router();

router.get("/", auth, get_all_debtors);
router.get("/debtor_records", [auth, get_debtor_records_check], get_debtor_records);
router.post("/create", [auth, insert_debtor_check], insert_debtor, insert_debtor_response);
//router.post("/insert_record", auth, insert_debtor_record, insert_debtor_record_response);
//router.post("/delete_record", auth, delete_debtor_record, delete_debtor_record_response);
router.post("/edit", [auth, update_debtor_check], update_debtor, update_debtor_response);
router.post("/delete", [auth, delete_debtor_check], delete_debtor, delete_debtor_response);

export default router;
