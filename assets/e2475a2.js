(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{627:function(t,n,o){"use strict";o(251);var r=o(252);n.a=Object(r.a)("flex")},650:function(t,n,o){"use strict";o(251);var r=o(252);n.a=Object(r.a)("layout")},808:function(t,n,o){"use strict";o.r(n);var r=o(3),e=(o(20),{data:function(){return{admission:null,endrequest:{},date:(new Date).toISOString().substr(0,10)}},methods:{_get_admission_by_id:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$api.$get("admissions/".concat(t.$route.params.id,"/")).then((function(n){t.admission=n})).catch((function(t){console.log(t)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},_end_this_admission:function(){this.$store.dispatch("end_patient_admission",{serviceId:this.admission.serviceId,admissionId:this.admission.id,bedId:this.admission.bedId,endDateTime:this.date})}},created:function(){this._get_admission_by_id()},computed:{}}),c=o(34),l=o(47),d=o.n(l),v=o(143),m=o(231),_=o(87),h=o(569),f=o(235),w=o(627),C=o(124),k=o(650),I=o(233),V=o(570),y=o(562),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[null!=t.admission?o("div",{staticClass:"breadcrumb  "},[o("router-link",{attrs:{to:"/"}},[t._v("Dashboard")]),t._v(" "),o("router-link",{attrs:{to:"/patients"}},[t._v("Patients")]),t._v(" "),o("router-link",{staticClass:"active",attrs:{to:"/admission/"+this.$route.params.id}},[t._v("Admission ("+t._s(this.$route.params.id)+")")])],1):t._e(),t._v(" "),null==t.admission?o("v-progress-circular",{attrs:{size:"34",color:"gray"}}):o("v-card",{staticClass:"pa-3"},[o("v-card-title",[o("p",[t._v("Admission No. "+t._s(this.$route.params.id))]),t._v(" "),o("v-spacer"),t._v(" "),t.admission.isActive?o("v-btn",{staticClass:"ml-1",attrs:{color:"primary"},on:{click:t._end_this_admission}},[o("v-icon",{attrs:{left:""}},[t._v("\n          mdi-reorder-horizontal\n        ")]),t._v("\n        End this admission")],1):t._e(),t._v(" "),t.admission.isActive?o("v-btn",{staticClass:"ml-1",attrs:{color:"primary",to:"/admission/"+this.$route.params.id+"/visit"}},[o("v-icon",{attrs:{left:""}},[t._v("\n          mdi-tag-plus\n        ")]),t._v("\n        Visit admission")],1):t._e(),t._v(" "),o("v-btn",{staticClass:"ml-1",attrs:{color:"primary",to:"/admission/"+this.$route.params.id+"/visits"}},[o("v-icon",{attrs:{left:""}},[t._v("\n          mdi-eye\n        ")]),t._v("\n        Admission Visits")],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[null!==t.admission?o("div",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Admission ID.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.id)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Start Date.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.startDate)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  End Date.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.endDate)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Is Active.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.isActive)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Ward ID.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.wardId)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Ward Name.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.wardName)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Bed ID.\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.bedId)+"\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-black"},[t._v("\n                  Bed Name\n                ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"font-weight-normal"},[t._v("\n                  "+t._s(t.admission.bedIdentifier)+"\n                ")])])],1)],1)],1)],1):o("div",[o("div",{attrs:{height:"500",flat:""}},[o("v-layout",{attrs:{"align-center":"","justify-center":"",column:"","fill-height":""}},[o("v-flex",{attrs:{row:"","align-center":""}},[o("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}})],1)],1)],1)])])],1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardText:_.c,VCardTitle:_.d,VCol:h.a,VDivider:f.a,VFlex:w.a,VIcon:C.a,VLayout:k.a,VProgressCircular:I.a,VRow:V.a,VSpacer:y.a})}}]);