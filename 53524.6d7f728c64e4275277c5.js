"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[53524],{53524:(J,a,o)=>{o.r(a),o.d(a,{PortalsModule:()=>U});var c=o(12057),d=o(33982),m=o(29851),i=o(3497),p=o(55908),u=o(97541),t=o(74788),r=o(88331),g=o(37159),T=o(57068),h=o(72872),v=o(76189),Z=o(34880);function f(n,s){1&n&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t._uU(2," Hello Taiga UI "),t._UZ(3,"tui-svg",5),t.qZA(),t.qZA())}let x=(()=>{class n{constructor(e){this.customPortalService=e,this.templates=[]}addTemplate(e){this.templates.push(this.customPortalService.addTemplate(e))}removeTemplate(){const e=this.templates.pop();e&&this.customPortalService.removeTemplate(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-portals-example-1"]],decls:6,vars:0,consts:[["tuiButton","","size","s","icon","tuiIconPlus","type","button",3,"click"],["tuiButton","","size","s","appearance","secondary","icon","tuiIconTrash","type","button",1,"tui-space_left-3",3,"click"],["someTemplate",""],[1,"template"],[1,"greeting"],["src","tuiIconHeartLarge",1,"icon"]],template:function(e,l){if(1&e){const M=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){t.CHM(M);const E=t.MAs(5);return l.addTemplate(E)}),t._uU(1," Add\n"),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){return l.removeTemplate()}),t._uU(3," Remove\n"),t.qZA(),t.YNc(4,f,4,0,"ng-template",null,2,t.W1O)}},directives:[v.v,Z.P],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.template[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem #0000001f;padding:.5rem;margin:.5rem;border-radius:.25rem;animation:tuiFadeIn var(--tui-duration) var(--tui-duration);animation-fill-mode:backwards;background:var(--tui-support-01);font:var(--tui-font-text-m)}.icon[_ngcontent-%COMP%]{color:var(--tui-support-10)}"],changeDetection:0}),n})();var P=o(76349);function y(n,s){if(1&n&&(t.TgZ(0,"p"),t._uU(1," You can easily create your custom portals by extending our abstract classes and put your own portal-host on any layer "),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-portals-example-1"),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("content",e.example1)}}function A(n,s){if(1&n&&(t.TgZ(0,"ol",4),t.TgZ(1,"li"),t.TgZ(2,"p"),t._uU(3," Create your own portal service by extending "),t.TgZ(4,"code"),t._uU(5,"AbstractTuiPortalService"),t.qZA(),t.qZA(),t._UZ(6,"tui-doc-code",5),t.qZA(),t.TgZ(7,"li"),t.TgZ(8,"p"),t._uU(9," Create your own portal host by extending "),t.TgZ(10,"code"),t._uU(11,"AbstractTuiPortalHost"),t.qZA(),t.qZA(),t._UZ(12,"tui-doc-code",6),t.qZA(),t.TgZ(13,"li"),t.TgZ(14,"p"),t._uU(15,"Put the created portal host on a desired layer"),t.qZA(),t._UZ(16,"tui-doc-code",7),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(6),t.Q6J("code",e.service),t.xp6(6),t.Q6J("code",e.host),t.xp6(4),t.Q6J("code",e.insert)}}let C=(()=>{class n{constructor(){this.host=o.e(8425).then(o.t.bind(o,8425,17)),this.service=o.e(46303).then(o.t.bind(o,46303,17)),this.insert=o.e(41663).then(o.t.bind(o,41663,17)),this.example1={TypeScript:o.e(9839).then(o.t.bind(o,9839,17)),HTML:o.e(91068).then(o.t.bind(o,91068,17)),LESS:o.e(19649).then(o.t.bind(o,60344,17)),"portal/custom-portal.service.ts":o.e(36648).then(o.t.bind(o,36648,17)),"portal/custom-host.component.ts":o.e(36703).then(o.t.bind(o,36703,17)),"portal/custom-host.template.html":o.e(6298).then(o.t.bind(o,21065,17)),"portal/custom-host.module.ts":o.e(19111).then(o.t.bind(o,19111,17)),"portal/custom-host.style.less":o.e(87553).then(o.t.bind(o,87553,17))}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["portals"]],decls:3,vars:0,consts:[["header","Portals"],["pageTab",""],["pageTab","Setup"],["id","custom-portals","heading","Custom portals",3,"content"],[1,"b-demo-steps"],["filename","my-service.ts",3,"code"],["filename","my-host.component.ts",3,"code"],["filename","app.template.html",3,"code"]],template:function(e,l){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,y,4,1,"ng-template",1),t.YNc(2,A,17,3,"ng-template",2),t.qZA())},directives:[r.q,g.n,T.f,x,P.c],encapsulation:2,changeDetection:0}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,u.T,i.TuiButtonModule,p.TuiAvatarModule,m.fV,i.TuiSvgModule,d.Bz.forChild((0,m.Ve)(C))]]}),n})()}}]);