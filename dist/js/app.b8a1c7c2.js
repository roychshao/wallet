(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],v=0,u=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1),n("v-bottom-navigation",{attrs:{app:"",grow:""},model:{value:e.route,callback:function(t){e.route=t},expression:"route"}},[n("v-btn",{attrs:{value:"Home",to:"/"}},[n("span",[e._v("記帳")]),n("v-icon",[e._v("mdi-file-document-edit")])],1),n("v-btn",{attrs:{value:"Search",to:"/search"}},[n("span",[e._v("查帳")]),n("v-icon",[e._v("mdi-magnify")])],1),n("v-btn",{attrs:{value:"Chart",to:"/chart"}},[n("span",[e._v("圖表")]),n("v-icon",[e._v("mdi-chart-pie")])],1),n("v-btn",{attrs:{value:"Receipt",to:"/receipt"}},[n("span",[e._v("發票")]),n("v-icon",[e._v("mdi-barcode-scan")])],1)],1)],1)],1)},r=[],i={name:"App",data:function(){return{route:"Home"}},mounted:function(){},methods:{},computed:{}},s=i,l=(n("034f"),n("2877")),c=n("6544"),d=n.n(c),v=n("7496"),u=n("b81c"),p=n("8336"),m=n("a523"),f=n("132d"),h=n("f6c4"),b=Object(l["a"])(s,o,r,!1,null,null,null),x=b.exports;d()(b,{VApp:v["a"],VBottomNavigation:u["a"],VBtn:p["a"],VContainer:m["a"],VIcon:f["a"],VMain:h["a"]});var y=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",{attrs:{disabled:e.disabled,multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.open;return[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[e._v(" "+e._s(e.trip.name)+" ")]),n("v-col",{staticClass:"text--secondary",attrs:{cols:"8"}},[n("v-fade-transition",{attrs:{"leave-absolute":""}},[a?n("span",{key:"0"}):n("span",{key:"1"},[e._v(" "+e._s(e.trip.name)+" ")])])],1)],1)]}}])}),n("v-expansion-panel-content",[n("v-text-field",{attrs:{placeholder:"Caribbean Cruise"},model:{value:e.trip.name,callback:function(t){e.$set(e.trip,"name",t)},expression:"trip.name"}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.open;return[n("v-row",{attrs:{"no-gutters":""}},[a?n("v-col",{attrs:{cols:"4"}}):n("v-col",{attrs:{cols:"4"}},[e._v(" "+e._s(e.trip.name)+" ")]),n("v-col",{staticClass:"text--secondary",attrs:{cols:"8"}},[n("v-fade-transition",{attrs:{"leave-absolute":""}},[a?n("span",{key:"0"}):null!=e.trip.location?n("span",{key:"1"},[n("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[e._v(" "+e._s(e.trip.location)+" ")])],1):e._e()])],1)],1)]}}])}),n("v-expansion-panel-content",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"5"}},[n("v-expansion-panel-content",[n("v-text-field",{attrs:{placeholder:"Caribbean Cruise"},model:{value:e.trip.name,callback:function(t){e.$set(e.trip,"name",t)},expression:"trip.name"}})],1),n("v-select",{attrs:{items:e.locations,label:"選擇項目類型",chips:"",flat:"",solo:""},model:{value:e.trip.location,callback:function(t){e.$set(e.trip,"location",t)},expression:"trip.location"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"secondary"}},[e._v(" 取消 ")]),n("v-btn",{attrs:{text:"",color:"primary"}},[e._v(" 儲存 ")])],1)],1)],1)],1)},_=[],k={data:function(){return{date:null,trip:{name:"新增項目",location:null,start:null,end:null},locations:["早餐","午餐","晚餐","衣物","車費","日用品","其他"]}}},V=k,w=n("99d9"),I=n("cc20"),C=n("62ad"),T=n("cd55"),O=n("49e2"),D=n("c865"),E=n("0393"),j=n("0789"),S=n("0fd9"),$=n("b974"),P=n("2fa4"),M=n("8654"),A=Object(l["a"])(V,g,_,!1,null,null,null),F=A.exports;d()(A,{VBtn:p["a"],VCardActions:w["a"],VChip:I["a"],VCol:C["a"],VExpansionPanel:T["a"],VExpansionPanelContent:O["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:E["a"],VFadeTransition:j["c"],VRow:S["a"],VSelect:$["a"],VSpacer:P["a"],VTextField:M["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:e.setToday}},[e._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-left ")])],1),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v(" mdi-chevron-right ")])],1),e.$refs.calendar?n("v-toolbar-title",[e._v(" "+e._s(e.$refs.calendar.title)+" ")]):e._e(),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",o,!1),a),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),n("v-icon",{attrs:{right:""}},[e._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-pencil")])],1),n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-dots-vertical")])],1)],1),n("v-card-text",[n("span",{domProps:{innerHTML:e._s(e.selectedEvent.details)}},[e._v("tester")])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)],1)},B=[],H={data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"]}},mounted:function(){this.$refs.calendar.checkChange()},methods:{viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,o=function(){t.selectedEvent=a,t.selectedElement=n.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return t.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return o()}))}))):o(),n.stopPropagation()},updateRange:function(e){for(var t=e.start,n=e.end,a=[],o=new Date("".concat(t.date,"T00:00:00")),r=new Date("".concat(n.date,"T23:59:59")),i=(r.getTime()-o.getTime())/864e5,s=this.rnd(i,i+20),l=0;l<s;l++){var c=0===this.rnd(0,3),d=this.rnd(o.getTime(),r.getTime()),v=new Date(d-d%9e5),u=9e5*this.rnd(2,c?288:8),p=new Date(v.getTime()+u);a.push({name:this.names[this.rnd(0,this.names.length-1)],start:v,end:p,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!c})}this.events=a},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e}}},L=H,q=n("a4f6"),z=n("b0af"),G=n("8860"),J=n("da13"),N=n("5d23"),W=n("e449"),K=n("8dd9"),Q=n("71d9"),U=n("2a7f"),X=Object(l["a"])(L,R,B,!1,null,null,null),Y=X.exports;d()(X,{VBtn:p["a"],VCalendar:q["a"],VCard:z["a"],VCardActions:w["a"],VCardText:w["b"],VCol:C["a"],VIcon:f["a"],VList:G["a"],VListItem:J["a"],VListItemTitle:N["b"],VMenu:W["a"],VRow:S["a"],VSheet:K["a"],VSpacer:P["a"],VToolbar:Q["a"],VToolbarTitle:U["a"]});var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"prices"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("記帳清單")]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),a),[e._v(" 新增項目 ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"名稱"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"價格"},model:{value:e.editedItem.prices,callback:function(t){e.$set(e.editedItem,"prices",t)},expression:"editedItem.prices"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"敘述"},model:{value:e.editedItem.desc,callback:function(t){e.$set(e.editedItem,"desc",t)},expression:"editedItem.desc"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" 取消 ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" 儲存 ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"font-weight-bold"},[e._v("確定要刪除此項目嗎？")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("取消")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("確定")]),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}])})},ee=[],te=(n("d3b7"),n("159b"),n("a434"),{data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"項目",align:"start",sortable:!1,value:"name"},{text:"價格",value:"prices"},{text:"描述",align:"start",sortable:!1,value:"desc"},{text:"動作",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",prices:0,desc:""},defaultItem:{name:"",prices:0,desc:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},totalItem:function(){var e=0;return this.items.forEach((function(t){e+=parseFloat(t.price)*parseFloat(t.quantity)})),e}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{name:"吐司夾蛋",prices:159,desc:""},{name:"冰紅茶",prices:237,desc:"好喝"},{name:"英文講義",prices:262,desc:"for英文通識"},{name:"立可帶",prices:305,desc:""},{name:"泡麵",prices:356,desc:""},{name:"公車費",prices:375,desc:""},{name:"活動保證金",prices:392,desc:"社團：GDSC"},{name:"便當",prices:408,desc:""}]},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}}),ne=te,ae=n("8fea"),oe=n("169a"),re=n("ce7e"),ie=Object(l["a"])(ne,Z,ee,!1,null,null,null),se=ie.exports;d()(ie,{VBtn:p["a"],VCard:z["a"],VCardActions:w["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:C["a"],VContainer:m["a"],VDataTable:ae["a"],VDialog:oe["a"],VDivider:re["a"],VIcon:f["a"],VRow:S["a"],VSpacer:P["a"],VTextField:M["a"],VToolbar:Q["a"],VToolbarTitle:U["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vc-donut",{attrs:{sections:[{value:35},{value:20},{value:10},{value:35}],thickness:100}})},ce=[],de={data:function(){return{sections:[{label:"Red section",value:25,color:"#47ede8"},{label:"Green section",value:50,color:"#a8ffe1"},{label:"Blue section",value:25,color:"#a3f7ff"}],thickness:100}}},ve=de,ue=Object(l["a"])(ve,le,ce,!1,null,null,null),pe=ue.exports;a["a"].use(y["a"]);var me=[{path:"/",name:"Home",component:F},{path:"/search",name:"Search",component:Y},{path:"/chart",name:"Chart",component:se},{path:"/receipt",name:"Receipt",component:pe}],fe=new y["a"]({mode:"history",base:"/",routes:me}),he=fe,be=n("2f62"),xe=n("b4b3"),ye=n.n(xe);n("3a93");a["a"].use(ye.a),a["a"].use(be["a"]);var ge=new be["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_e=n("f309");a["a"].use(_e["a"]);var ke=new _e["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:he,store:ge,vuetify:ke,render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b8a1c7c2.js.map