(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{mPyO:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputTagModule",(function(){return qe}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),r=n("SVIu"),l=n("Qq0t"),d=n("dvRg"),u=n("Piem"),c=n("kZht"),p=n("l4xa"),s=n("LusI"),m=n("K/iL"),g=n("OZlg"),f=n("e0eB"),h=n("iyc4"),y=n("p/Ap"),b=n("gEyt");let x=(()=>{class e{constructor(){this.control=new o.FormControl([])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-1"]],decls:4,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275text"](1," I'm a "),c["\u0275\u0275elementStart"](2,"i"),c["\u0275\u0275text"](3,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("formControl",t.control)},directives:[y.a,b.b,o.NgControlStatus,o.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var C=n("ZTXN"),T=n("ROBh"),V=n("TLy2"),P=n("jIqt"),S=n("BwBJ"),v=n("fP8s"),w=n("OWJi");function E(e,t){if(1&e&&(c["\u0275\u0275element"](0,"tui-data-list-wrapper",2),c["\u0275\u0275pipe"](1,"async")),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("items",c["\u0275\u0275pipeBind1"](1,1,e.items$))}}const M=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"];let L=(()=>{class e{constructor(){this.search$=new C.a,this.value=[],this.items$=this.search$.pipe(Object(V.a)(e=>this.serverRequest(e).pipe(Object(P.a)(null))),Object(P.a)(M))}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=M.filter(t=>t.toLowerCase().includes(e.toLowerCase()));return Object(T.a)(t).pipe(Object(S.a)(1e3*Math.random()+500))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-2"]],decls:3,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e}))("searchChange",(function(e){return t.onSearchChange(e)})),c["\u0275\u0275text"](1," Choose your Pythons' "),c["\u0275\u0275template"](2,E,2,3,"tui-data-list-wrapper",1),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[y.a,b.b,o.NgControlStatus,o.NgModel,v.a,w.a],pipes:[a.b],encapsulation:2,changeDetection:0}),e})();var O=n("2wTY"),D=n("eB8V");let H=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue:new o.FormControl(["I","love","Angular"])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-3"]],decls:13,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue",1,"tui-space_top-2",3,"tuiTextfieldCleaner"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"tui-input-tag",1),c["\u0275\u0275text"](2," I'm a "),c["\u0275\u0275elementStart"](3,"i"),c["\u0275\u0275text"](4,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-input-tag",2),c["\u0275\u0275text"](6," I'm a "),c["\u0275\u0275elementStart"](7,"i"),c["\u0275\u0275text"](8,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"tui-input-tag",3),c["\u0275\u0275text"](10," I'm a "),c["\u0275\u0275elementStart"](11,"i"),c["\u0275\u0275text"](12,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("tuiTextfieldCleaner",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,y.a,o.NgControlStatus,o.FormControlName,O.b,b.b,D.b],encapsulation:2,changeDetection:0}),e})();var I=n("D57K"),A=n("6doR"),N=n("cVyY"),$=n("xcN3"),z=n("DkUU");function _(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"button",5),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275property"]("value",e),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e," ")}}function F(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-data-list"),c["\u0275\u0275template"](1,_,2,2,"button",4),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.filtered)}}function G(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,F,2,1,"tui-data-list",3),c["\u0275\u0275elementContainerEnd"]())}const R=function(){return[]},B=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function q(e){return!/\d/.test(e)}let j=(()=>{class e{constructor(){var e;this.search="",this.tagValidator=q,this.control=new o.FormControl([],(e=q,({value:t})=>(t?t.filter(e):p.v).length>0?{tags:new p.fc("Some tags are invalid")}:null))}get filtered(){return this.filterBy(this.search,this.control.value)}filterBy(e,t){return B.filter(n=>Object(p.I)(n,e)&&!t.includes(n))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-4"]],decls:8,vars:12,consts:[[1,"b-form",3,"formControl","tuiTextfieldLabelOutside","tagValidator","search","searchChange"],[4,"ngIf"],[3,"formControl","error"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275text"](1,"In this sample, tags with digits are invalid"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-input-tag",0),c["\u0275\u0275listener"]("searchChange",(function(e){return t.search=e})),c["\u0275\u0275text"](3," Try it "),c["\u0275\u0275template"](4,G,2,0,"ng-container",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-error",2),c["\u0275\u0275pipe"](6,"async"),c["\u0275\u0275pipe"](7,"tuiFieldError")),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("formControl",t.control)("tuiTextfieldLabelOutside",!0)("tagValidator",t.tagValidator)("search",t.search),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",t.filtered.length),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formControl",t.control)("error",c["\u0275\u0275pipeBind1"](6,7,c["\u0275\u0275pipeBind1"](7,9,c["\u0275\u0275pureFunction0"](11,R)))))},directives:[y.a,o.NgControlStatus,o.FormControlDirective,b.b,a.t,A.a,v.a,N.a,a.s,$.a],pipes:[a.b,z.a],encapsulation:2,changeDetection:0}),Object(I.b)([p.ud],e.prototype,"filterBy",null),e})();var k=n("RlDx");let J=(()=>{class e{constructor(){this.value=["\u06af\u0631\u0627\u0647\u0627\u0645 \u0686\u067e\u0645\u0646","\u062c\u0627\u0646 \u06a9\u0644\u06cc\u0632"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-5"]],decls:1,vars:3,consts:[["icon","tuiIconSearchLarge","iconAlign","left","tuiHintContent","\u0645\u0648\u0646\u062a\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[y.a,k.a,D.b,b.b,o.NgControlStatus,o.NgModel],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),e})(),K=(()=>{class e{constructor(){this.value=["not","unique","tags, with","custom","separator","separator"],this.customSeparator=";"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-6"]],decls:1,vars:5,consts:[["icon","tuiIconSearchLarge","iconAlign","left",1,"input",3,"uniqueTags","separator","tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("uniqueTags",!1)("separator",t.customSeparator)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[y.a,D.b,b.b,o.NgControlStatus,o.NgModel],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),e})(),U=(()=>{class e{constructor(){this.value=["Use","space","button"],this.customSeparator=/[\s,]/}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-7"]],decls:1,vars:3,consts:[[1,"b-form",3,"separator","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("separator",t.customSeparator)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[y.a,b.b,o.NgControlStatus,o.NgModel],encapsulation:2,changeDetection:0}),e})();var Z,W=n("EPR0"),Q=n("yHor"),Y=n("zGJC"),X=n("FSyC"),ee=n("SUM+"),te=n("pQcr"),ne=n("KzL3"),ae=n("yZWP"),oe=n("u8jZ");Z=$localize`:␟afcbf8b99d1a559f2d4d82b878687bf91c4dc49b␟682295232355881622:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputTag${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input several tags with autocomplete and list in dropdown. `;const ie=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],re=["heading",$localize`:␟1abaa1c3acfb9987cf9a1c84422e8baef7af845e␟989459206984870037:Async items loading`],le=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],de=["heading",$localize`:␟9f773bc90c4bb84c592f2ed4763f1dbc3320e7e3␟3176539569174538377:Custom validation`],ue=["heading",$localize`:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`],ce=["heading",$localize`:␟0d231f5447e6c607e870e25fa79277b55c41c3dd␟4936688169379716572:Custom separator`],pe=["heading",$localize`:␟732faab5edc3c0659d1ad673424d45f843542394␟2465031901930244222:No spaces inside tags`];function se(e,t){1&e&&(c["\u0275\u0275text"](0," Use power of RegExp to forbid spaces inside tags via property "),c["\u0275\u0275elementStart"](1,"code"),c["\u0275\u0275text"](2,"[separator]"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](3," . "))}function me(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275i18nStart"](1,Z),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](4,ie),c["\u0275\u0275element"](5,"tui-input-tag-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](7,re),c["\u0275\u0275element"](8,"tui-input-tag-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"tui-doc-example",5),c["\u0275\u0275i18nAttributes"](10,le),c["\u0275\u0275element"](11,"tui-input-tag-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"tui-doc-example",6),c["\u0275\u0275i18nAttributes"](13,de),c["\u0275\u0275element"](14,"tui-input-tag-example-4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"tui-doc-example",7),c["\u0275\u0275i18nAttributes"](16,ue),c["\u0275\u0275element"](17,"tui-input-tag-example-5"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"tui-doc-example",8),c["\u0275\u0275i18nAttributes"](19,ce),c["\u0275\u0275element"](20,"tui-input-tag-example-6"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"tui-doc-example",9),c["\u0275\u0275i18nAttributes"](22,pe),c["\u0275\u0275template"](23,se,4,0,"ng-template",null,10,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275element"](25,"tui-input-tag-example-7"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275reference"](24),t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example3),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example4),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example5),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example6),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",t.example7)("description",e)}}function ge(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-input-tag",25),c["\u0275\u0275listener"]("searchChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"](2).search=t})),c["\u0275\u0275text"](1," Please enter Pythons' names "),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275property"]("formControl",e.control)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldMaxLength",e.maxLength)("tuiTextfieldSize",e.size)("focusable",e.focusable)("disabledItemHandler",e.disabledItemHandler)("editable",e.editable)("expandable",e.expandable)("uniqueTags",e.uniqueTags)("separator",e.separator)("icon",e.icon)("iconAlign",e.iconAlign)("readOnly",e.readOnly)("allowSpaces",e.allowSpaces)("tagValidator",e.tagValidator)("inputHidden",e.inputHidden)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("pseudoInvalid",e.pseudoInvalid)("search",e.search)}}var fe,he,ye,be,xe,Ce,Te,Ve,Pe,Se,ve,we;function Ee(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,fe),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function Me(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,he),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function Le(e,t){1&e&&(c["\u0275\u0275text"](0," Allow spaces inside tag. "),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275text"](2,"In next major release spaces are always allowed by default."),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"p"),c["\u0275\u0275elementStart"](4,"strong"),c["\u0275\u0275text"](5," Use property "),c["\u0275\u0275elementStart"](6,"code"),c["\u0275\u0275text"](7,"[separator]"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](8," to forbid spaces. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"p"),c["\u0275\u0275text"](10," See this "),c["\u0275\u0275elementStart"](11,"a",26),c["\u0275\u0275text"](12," example "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](13," . "),c["\u0275\u0275elementEnd"]())}function Oe(e,t){1&e&&c["\u0275\u0275i18n"](0,ye)}function De(e,t){1&e&&c["\u0275\u0275text"](0," Ability to enter unique or non-unique tags ")}function He(e,t){1&e&&c["\u0275\u0275i18n"](0,be)}function Ie(e,t){1&e&&c["\u0275\u0275i18n"](0,xe)}function Ae(e,t){1&e&&c["\u0275\u0275i18n"](0,Ce)}function Ne(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,Te),c["\u0275\u0275elementStart"](1,"a",27),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"]())}function $e(e,t){1&e&&c["\u0275\u0275i18n"](0,Ve)}function ze(e,t){1&e&&c["\u0275\u0275i18n"](0,Pe)}function _e(e,t){1&e&&c["\u0275\u0275i18n"](0,Se)}function Fe(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo",11),c["\u0275\u0275template"](1,ge,2,31,"ng-template"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,Ee,2,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t})),c["\u0275\u0275template"](4,Me,2,0,"ng-template",13),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().search=t})),c["\u0275\u0275template"](5,Le,14,0,"ng-template",14),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().allowSpaces=t})),c["\u0275\u0275template"](6,Oe,1,0,"ng-template",15),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t})),c["\u0275\u0275template"](7,De,1,0,"ng-template",16),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().uniqueTags=t})),c["\u0275\u0275template"](8,He,1,0,"ng-template",17),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().editable=t})),c["\u0275\u0275template"](9,Ie,1,0,"ng-template",18),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().expandable=t})),c["\u0275\u0275template"](10,Ae,1,0,"ng-template",19),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().separator=t})),c["\u0275\u0275template"](11,Ne,3,0,"ng-template",20),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().icon=t})),c["\u0275\u0275template"](12,$e,1,0,"ng-template",21),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().iconAlign=t})),c["\u0275\u0275template"](13,ze,1,0,"ng-template",22),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().inputHidden=t})),c["\u0275\u0275template"](14,_e,1,0,"ng-template",23),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tagValidator=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](15,"inherited-documentation",24)}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("control",e.control),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.search),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.allowSpaces),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.uniqueTags),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.editable),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.expandable),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.separatorVariants)("documentationPropertyValue",e.separator),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.iconAlignVariants)("documentationPropertyValue",e.iconAlign),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.inputHidden),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.tagValidatorVariants)("documentationPropertyValue",e.tagValidator),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("dropdown",!0)}}function Ge(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",28),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,ve),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",29),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,we),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",30),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}fe=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,he=$localize`:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,ye=$localize`:␟602d2ca3dd3d6bd61166eb562cbc5a7d3ba64eb6␟7890132259542012587: Handler for deactivation some tags `,be=$localize`:␟6287011b40da302e14ccffef5a614afb7cc7e283␟6978135358566748527: Tags are editable `,xe=$localize`:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `,Ce=$localize`:␟30f5c50c55cc36d40d8bfec07bf28cee6bb9f1b5␟5475543650697092168: String or RegExp to separate tags `,Te=$localize`:␟acedafda2219bad0373461a93b48a42684d1c408␟4275468601899207994: An icon. It can be stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:SvgService${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:`,Ve=$localize`:␟ad56fc4e1a9650890c372aa93c2c426f8467baab␟561630626973828969: Icon align `,Pe=$localize`:␟6ce45bd4a1fda17e0ac98d65053d1109077c6d83␟1436849720143811983: Hide input field. For example, to prevent adding new tags `,Se=$localize`:␟24fc826e9f6d1737ab827b2db51272e81e476b65␟3924647870684137368: A function that cheks that tag is valid `,ve=$localize`:␟a48b1b6fe4f1a0418758cda1de24c138cf8d5ad5␟8882593062505514869: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputTagModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,we=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Re=(()=>{class e extends s.a{constructor(){super(...arguments),this.exampleModule=n.e(940).then(n.bind(null,"yu1w")),this.exampleHtml=n.e(941).then(n.bind(null,"dZCK")),this.example1={TypeScript:n.e(925).then(n.bind(null,"VkTb")),HTML:n.e(924).then(n.bind(null,"GNEQ"))},this.example2={TypeScript:n.e(927).then(n.bind(null,"8Nn5")),HTML:n.e(926).then(n.bind(null,"YB8m"))},this.example3={TypeScript:n.e(929).then(n.bind(null,"6HS9")),HTML:n.e(928).then(n.bind(null,"CzmI"))},this.example4={TypeScript:n.e(931).then(n.bind(null,"BzCj")),HTML:n.e(930).then(n.bind(null,"1htj"))},this.example5={TypeScript:n.e(934).then(n.bind(null,"CV0D")),HTML:n.e(932).then(n.bind(null,"nM3V")),LESS:n.e(933).then(n.bind(null,"ryxD"))},this.example6={TypeScript:n.e(937).then(n.bind(null,"BKfe")),HTML:n.e(935).then(n.bind(null,"ZLmI")),LESS:n.e(936).then(n.bind(null,"TyVE"))},this.example7={TypeScript:n.e(939).then(n.bind(null,"LwwJ")),HTML:n.e(938).then(n.bind(null,"SCK1"))},this.control=new o.FormControl(["John Cleese","Eric Idle","Michael Palin"],o.Validators.required),this.editable=!0,this.expandable=!0,this.allowSpaces=!0,this.uniqueTags=!0,this.separatorVariants=[",",";",/[\d]/,/[\s,]/],this.separator=this.separatorVariants[0],this.iconVariants=["tuiIconSearchLarge"],this.icon="",this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.maxLengthVariants=[10,20],this.maxLength=null,this.search="",this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[this.sizeVariants.length-1],this.tagValidatorVariants=[p.b,e=>"test"===e,e=>"mail"!==e],this.tagValidator=this.tagValidatorVariants[0],this.inputHidden=!1,this.disabledItemHandlerVariants=[p.a,e=>"T"===String(e)[0]],this.disabledItemHandler=this.disabledItemHandlerVariants[0]}}return e.\u0275fac=function(t){return Be(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-input-tag"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputTag","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","validation",3,"content",6,"heading"],["id","rtl",3,"content",6,"heading"],["id","separator",3,"content",6,"heading"],["id","no-spaces-inside-tags",3,"content","description",6,"heading"],["forbidSpacesDescription",""],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","allowSpaces","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","uniqueTags","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string | RegExp",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","inputHidden","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tagValidator","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldMaxLength","tuiTextfieldSize","focusable","disabledItemHandler","editable","expandable","uniqueTags","separator","icon","iconAlign","readOnly","allowSpaces","tagValidator","inputHidden","pseudoHovered","pseudoPressed","pseudoFocused","pseudoInvalid","search","searchChange"],["tuiLink","","routerLink","/components/input-tag","fragment","no-spaces-inside-tags"],["tuiLink","","routerLink","/services/svg-service"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,me,26,8,"ng-template",1),c["\u0275\u0275template"](2,Fe,16,20,"ng-template",1),c["\u0275\u0275template"](3,Ge,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[g.a,f.a,h.a,x,L,H,j,J,K,U,W.a,Q.a,Y.a,X.a,y.a,o.NgControlStatus,o.FormControlDirective,ee.a,k.a,D.b,te.b,b.b,ne.b,O.b,ae.a,i.e,oe.a],encapsulation:2,changeDetection:0}),e})();const Be=c["\u0275\u0275getInheritedFactory"](Re);let qe=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.FormsModule,o.ReactiveFormsModule,u.a,l.gb,d.K,l.Bb,d.lb,l.ob,d.P,l.mb,l.bc,l.wb,r.m,i.f.forChild(Object(r.u)(Re))]]}),e})()}}]);