(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73720],{73720:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiCalendarMonthModule:()=>N});var o=n(12057),a=n(33982),i=n(73961),u=n(74950),r=n(58770),l=n(58196),c=n(74788),m=n(43560),d=n(93525),p=n(66596),h=n(33772),s=n(33313);let y=(()=>{class e{constructor(){this.value=null,this.hoveredMonth=null}onMonthClick(e){this.value=e}onMonthHovered(e){this.hoveredMonth=e}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-calendar-month-example-1"]],decls:5,vars:3,consts:[[3,"value","monthClick","hoveredItemChange"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-calendar-month",0),c.NdJ("monthClick",(function(e){return t.onMonthClick(e)}))("hoveredItemChange",(function(e){return t.onMonthHovered(e)})),c.qZA(),c.TgZ(1,"p"),c._uU(2),c.qZA(),c.TgZ(3,"p"),c._uU(4),c.qZA()),2&e&&(c.Q6J("value",t.value),c.xp6(2),c.hij("Selected month: ",t.value,""),c.xp6(2),c.hij("Hovered month: ",t.hoveredMonth,""))},directives:[s.o],encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{constructor(){this.value=null,this.max=new l.TuiMonth(2021,7),this.min=new l.TuiMonth(2019,7)}onMonthClick(e){null!==this.value&&this.value.isSingleMonth?this.value=l.TuiMonthRange.sort(this.value.from,e):this.value=new l.TuiMonthRange(e,e)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-calendar-month-example-2"]],decls:3,vars:4,consts:[[3,"value","min","max","monthClick"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-calendar-month",0),c.NdJ("monthClick",(function(e){return t.onMonthClick(e)})),c.qZA(),c.TgZ(1,"p"),c._uU(2),c.qZA()),2&e&&(c.Q6J("value",t.value)("min",t.min)("max",t.max),c.xp6(2),c.hij("Selected range: ",t.value,""))},directives:[s.o],encapsulation:2,changeDetection:0}),e})();var T=n(10977),M=n(51192),x=n(60404),P=n(83074);function V(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1," Month picker component. If you want a textfield, see "),c.TgZ(2,"a",2),c._uU(3," InputMonthRange "),c.qZA(),c.qZA(),c.TgZ(4,"tui-doc-example",3),c._UZ(5,"tui-calendar-month-example-1"),c.qZA(),c.TgZ(6,"tui-doc-example",4),c._UZ(7,"tui-calendar-month-example-2"),c.qZA()),2&e){const e=c.oxw();c.xp6(4),c.Q6J("content",e.example1),c.xp6(2),c.Q6J("content",e.example2)}}function f(e,t){1&e&&(c.TgZ(0,"div"),c._uU(1,"A handler that gets a month and returns true if it is disabled."),c.qZA(),c.TgZ(2,"strong"),c._uU(3,"Must be a pure function"),c.qZA())}function Z(e,t){1&e&&c._uU(0," Maximal month ")}function v(e,t){1&e&&c._uU(0," Minimal month ")}function C(e,t){1&e&&c._uU(0," A single month or a range of months ")}function A(e,t){1&e&&c._uU(0," Current year ")}function _(e,t){1&e&&c._uU(0," Selected month ")}function w(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo"),c.TgZ(1,"tui-calendar-month",5),c.NdJ("monthClick",(function(t){return c.CHM(e),c.oxw().onMonthClick(t)})),c.qZA(),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,f,4,0,"ng-template",6),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().disabledItemHandler=t})),c.YNc(4,Z,1,0,"ng-template",7),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().max=t})),c.YNc(5,v,1,0,"ng-template",8),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().min=t})),c.YNc(6,C,1,0,"ng-template",9),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().value=t})),c.YNc(7,A,1,0,"ng-template",10),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().year=t})),c.YNc(8,_,1,0,"ng-template",11),c.qZA()}if(2&e){const e=c.oxw();c.xp6(1),c.Q6J("disabledItemHandler",e.disabledItemHandler)("min",e.min)("max",e.max)("year",e.year)("value",e.value),c.xp6(2),c.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c.xp6(1),c.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c.xp6(1),c.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c.xp6(1),c.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value),c.xp6(1),c.Q6J("documentationPropertyValues",e.yearVariants)("documentationPropertyValue",e.year)}}function b(e,t){if(1&e&&(c.TgZ(0,"ol",12),c.TgZ(1,"li"),c.TgZ(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiCalendarMonthModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",13),c.qZA(),c.TgZ(8,"li"),c.TgZ(9,"p"),c._uU(10,"Add to the template:"),c.qZA(),c._UZ(11,"tui-doc-code",14),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule),c.xp6(4),c.Q6J("code",e.exampleHtml)}}let H=(()=>{class e{constructor(e){this.alerts=e,this.exampleModule=n.e(1697).then(n.t.bind(n,1697,17)),this.exampleHtml=n.e(79434).then(n.t.bind(n,79434,17)),this.example1={TypeScript:n.e(89300).then(n.t.bind(n,89300,17)),HTML:n.e(73106).then(n.t.bind(n,73106,17))},this.example2={TypeScript:n.e(87945).then(n.t.bind(n,87945,17)),HTML:n.e(50584).then(n.t.bind(n,50584,17))},this.minVariants=[l.TUI_FIRST_DAY,new l.TuiMonth(2019,2),new l.TuiMonth(2007,0)],this.maxVariants=[l.TUI_LAST_DAY,new l.TuiMonth(2020,2),new l.TuiMonth(2023,0),new l.TuiMonth(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[l.ALWAYS_FALSE_HANDLER,({month:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[l.TuiDay.currentLocal(),new l.TuiMonthRange(l.TuiDay.currentLocal(),l.TuiDay.currentLocal().append({month:3})),new l.TuiMonth(2007,2)],this.value=null,this.yearVariants=[l.TuiDay.currentLocal(),new l.TuiYear(2007)],this.year=this.yearVariants[0]}onMonthClick(e){this.alerts.open(String(e)).subscribe()}}return e.ɵfac=function(t){return new(t||e)(c.Y36(u.TuiAlertService))},e.ɵcmp=c.Xpm({type:e,selectors:[["example-tui-calendar-month"]],decls:4,vars:0,consts:[["header","CalendarMonth","package","KIT","type","components"],["pageTab",""],["tuiLink","","routerLink","/components/input-month-range"],["id","base","heading","Basic",3,"content"],["id","range","heading","Range",3,"content"],[3,"disabledItemHandler","min","max","year","value","monthClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","year","documentationPropertyMode","input-output","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","monthClick","documentationPropertyMode","output","documentationPropertyType","TuiMonth"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,V,8,2,"ng-template",1),c.YNc(2,w,9,15,"ng-template",1),c.YNc(3,b,12,2,"ng-template",1),c.qZA())},directives:[m.q,d.n,p.V,a.yS,h.f,y,g,T.F,s.o,M.z,x.B,P.c],encapsulation:2,changeDetection:0}),e})(),N=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[o.ez,a.Bz,u.TuiLinkModule,r.TuiCalendarMonthModule,i.fV,a.Bz.forChild((0,i.Ve)(H))]]}),e})()}}]);