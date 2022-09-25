"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[667],{8043:(M,C,e)=>{e.d(C,{Z:()=>g});var t=e(8505),d=e(3900),m=e(262),_=e(2843),h=e(4004),c=e(5e3);let g=(()=>{class s{constructor(i,f,a,p){this.router=i,this._dataService=f,this._route=a,this._cdr=p,this.loading=!1}ngOnInit(){this._dataSub$=this._route.queryParams.pipe((0,t.b)(()=>this.loading=!0),(0,d.w)(i=>this._dataService.getData(i.year)),(0,h.U)(i=>this.data=i),(0,t.b)(()=>this.loading=!1),(0,t.b)(()=>this._cdr.markForCheck()),(0,m.K)(i=>(console.error(i),(0,_._)(i)))).subscribe()}ngOnDestroy(){this._dataSub$&&this._dataSub$.unsubscribe()}}return s.\u0275fac=function(i){c.$Z()},s.\u0275dir=c.lG2({type:s}),s})()},6469:(M,C,e)=>{e.d(C,{u:()=>H});var t=e(5e3),d=e(9808),m=e(5245),_=e(9765),h=e(6373),c=e(9560);let g=(()=>{class o{constructor(n){this.graphService=n}ngOnChanges(){this.chartOption=this.graphService.graphOptions(this.xAxisData,this.yAxisData)}get xAxisData(){let n=[];return this.results.forEach(r=>n.push(r.Circuit.circuitName)),n}get yAxisData(){let n=[];return this.results.forEach(r=>{"driver"===this.type?n.push(+r.Results[0].points):"constructor"===this.type&&n.push(r.Results.reduce((O,P)=>+O+ +P.points,0))}),n}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(h.h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-statistics"]],inputs:{type:"type",results:"results"},features:[t.TTD],decls:1,vars:1,consts:[["echarts","",1,"chart",3,"options"]],template:function(n,r){1&n&&t._UZ(0,"div",0),2&n&&t.Q6J("options",r.chartOption)},directives:[c._w],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#1f1f27;border:1px solid #363643;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:4px}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:-2px!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.chart[_ngcontent-%COMP%]{height:800px}"],changeDetection:0}),o})();function s(o,l){if(1&o&&t._UZ(0,"img",12),2&o){const n=t.oxw();t.MGl("src","assets/images/","driver"===n.type?n.details&&n.details.driverId:n.details&&n.details.constructorId,".png",t.LSH),t.Q6J("alt",("driver"===n.type?n.details&&n.details.driverId:n.details&&n.details.constructorId)+("driver"===n.type?" photo":" logo"))}}function u(o,l){1&o&&t._UZ(0,"img",13)}function i(o,l){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij("Date of birth: ",t.lcZ(2,1,n.details&&n.details.dateOfBirth),"")}}function f(o,l){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij("Number: ",n.details&&n.details.permanentNumber,"")}}function a(o,l){1&o&&(t.TgZ(0,"p",14),t.TgZ(1,"mat-icon"),t._uU(2,"info"),t.qZA(),t._uU(3,"Results represents a constructor's drivers stats as a whole "),t.qZA())}function p(o,l){if(1&o&&(t.ynx(0),t._UZ(1,"app-card",15),t.BQk()),2&o){const n=l.$implicit,r=t.oxw();t.xp6(1),t.Q6J("type",r.type)("data",n)}}const v=function(o,l){return{width:o,height:l}};let H=(()=>{class o{constructor(){}get imageExists(){var n,r,O,P,x,b,y,w,D,I,E,T,A,Z,S,U,j,z,L,R,F,B,W,K,Y,N,J,$,Q,k,G;return"driver"===this.type?"alonso"===(null===(n=this.details)||void 0===n?void 0:n.driverId)||"bottas"===(null===(r=this.details)||void 0===r?void 0:r.driverId)||"gasly"===(null===(O=this.details)||void 0===O?void 0:O.driverId)||"giovinazzi"===(null===(P=this.details)||void 0===P?void 0:P.driverId)||"hamilton"===(null===(x=this.details)||void 0===x?void 0:x.driverId)||"kubica"===(null===(b=this.details)||void 0===b?void 0:b.driverId)||"latifi"===(null===(y=this.details)||void 0===y?void 0:y.driverId)||"leclerc"===(null===(w=this.details)||void 0===w?void 0:w.driverId)||"mazepin"===(null===(D=this.details)||void 0===D?void 0:D.driverId)||"norris"===(null===(I=this.details)||void 0===I?void 0:I.driverId)||"ocon"===(null===(E=this.details)||void 0===E?void 0:E.driverId)||"perez"===(null===(T=this.details)||void 0===T?void 0:T.driverId)||"raikkonen"===(null===(A=this.details)||void 0===A?void 0:A.driverId)||"ricciardo"===(null===(Z=this.details)||void 0===Z?void 0:Z.driverId)||"russell"===(null===(S=this.details)||void 0===S?void 0:S.driverId)||"sainz"===(null===(U=this.details)||void 0===U?void 0:U.driverId)||"mick_schumacher"===(null===(j=this.details)||void 0===j?void 0:j.driverId)||"stroll"===(null===(z=this.details)||void 0===z?void 0:z.driverId)||"tsunoda"===(null===(L=this.details)||void 0===L?void 0:L.driverId)||"max_verstappen"===(null===(R=this.details)||void 0===R?void 0:R.driverId)||"vettel"===(null===(F=this.details)||void 0===F?void 0:F.driverId):"alphatauri"===(null===(B=this.details)||void 0===B?void 0:B.constructorId)||"alfa"===(null===(W=this.details)||void 0===W?void 0:W.constructorId)||"alpine"===(null===(K=this.details)||void 0===K?void 0:K.constructorId)||"aston_martin"===(null===(Y=this.details)||void 0===Y?void 0:Y.constructorId)||"ferrari"===(null===(N=this.details)||void 0===N?void 0:N.constructorId)||"haas"===(null===(J=this.details)||void 0===J?void 0:J.constructorId)||"mclaren"===(null===($=this.details)||void 0===$?void 0:$.constructorId)||"mercedes"===(null===(Q=this.details)||void 0===Q?void 0:Q.constructorId)||"red_bull"===(null===(k=this.details)||void 0===k?void 0:k.constructorId)||"williams"===(null===(G=this.details)||void 0===G?void 0:G.constructorId)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-driver-constructor"]],inputs:{type:"type",details:"details",results:"results"},decls:23,vars:15,consts:[[1,"details"],[1,"image-name-container","driver-constructor"],[1,"img-container",3,"ngStyle"],["width","45","height","45",3,"src","alt",4,"ngIf","ngIfElse"],["noImage",""],[4,"ngIf"],["target","_blank",3,"href"],["class","constructor-info",4,"ngIf"],[1,"results-header"],[1,"grid"],[4,"ngFor","ngForOf"],[3,"type","results"],["width","45","height","45",3,"src","alt"],["src","assets/images/no_image_available.jpg","alt","","width","45","height","45"],[1,"constructor-info"],[3,"type","data"]],template:function(n,r){if(1&n&&(t.TgZ(0,"article"),t.TgZ(1,"section",0),t.TgZ(2,"section",1),t.TgZ(3,"div",2),t.YNc(4,s,1,2,"img",3),t.YNc(5,u,1,0,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(7,"h3"),t._uU(8),t.qZA(),t.qZA(),t.YNc(9,i,3,3,"p",5),t.TgZ(10,"p"),t._uU(11),t.qZA(),t.YNc(12,f,2,1,"p",5),t.TgZ(13,"a",6),t._uU(14,"Wikipedia"),t.qZA(),t.qZA(),t.YNc(15,a,4,0,"p",7),t.TgZ(16,"h4",8),t._uU(17,"CIRCUIT RESULTS"),t.qZA(),t.TgZ(18,"section",9),t.YNc(19,p,2,2,"ng-container",10),t.qZA(),t.TgZ(20,"h4"),t._uU(21,"STATISTICS (points/circuit)"),t.qZA(),t._UZ(22,"app-statistics",11),t.qZA()),2&n){const O=t.MAs(6);t.xp6(3),t.Q6J("ngStyle",t.WLB(12,v,"driver"===r.type?"45px":"30px","driver"===r.type?"45px":"30px")),t.xp6(1),t.Q6J("ngIf",r.imageExists)("ngIfElse",O),t.xp6(4),t.hij(" ","constructor"===r.type?r.details&&r.details.name:r.details&&r.details.givenName+" "+r.details.familyName," "),t.xp6(1),t.Q6J("ngIf","driver"===r.type),t.xp6(2),t.hij("Nationality: ",r.details&&r.details.nationality,""),t.xp6(1),t.Q6J("ngIf","driver"===r.type),t.xp6(1),t.Q6J("href",r.details&&r.details.url,t.LSH),t.xp6(2),t.Q6J("ngIf","constructor"===r.type),t.xp6(4),t.Q6J("ngForOf",r.results),t.xp6(3),t.Q6J("type",r.type)("results",r.results)}},directives:[d.PC,d.O5,m.Hw,d.sg,_.A,g],pipes:[d.uU],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#1f1f27;border:1px solid #363643;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:4px}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:-2px!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h3[_ngcontent-%COMP%]{margin-left:1rem;margin-bottom:0;border-left:2px solid #e10600}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{padding:.5rem;background:#2a2a35;min-width:150px}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{margin-bottom:.5rem}.constructor-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;margin-bottom:1rem;color:#62c4ed}.constructor-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}a[_ngcontent-%COMP%]{font-size:.9rem;color:#fff;text-decoration:underline}@media (min-width: 450px){.constructor-info[_ngcontent-%COMP%]{align-items:center}}@media (min-width: 768px){.constructor-info[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-size:1rem}}"]}),o})()},9413:(M,C,e)=>{e.d(C,{b:()=>u});var t=e(5e3),d=e(3075),m=e(1083),_=e(7322),h=e(4107),c=e(9808),g=e(508);function s(i,f){if(1&i&&(t.TgZ(0,"mat-option",3),t._uU(1),t.qZA()),2&i){const a=f.$implicit;t.Q6J("value",a),t.xp6(1),t.hij(" ",a," ")}}let u=(()=>{class i{constructor(a,p,v){this._fb=a,this._router=p,this._route=v,this._currentYear=(new Date).getFullYear()}ngOnInit(){this.yearControl=this._fb.control(this._currentYear.toString()),this._queryParamsSub$=this._route.queryParams.subscribe(a=>this.yearControl.setValue(a.year)),this._yearControlChangesSub$=this.yearControl.valueChanges.subscribe(a=>this._router.navigate(["./"],{queryParams:{year:a},relativeTo:this._route}))}ngOnDestroy(){this._queryParamsSub$&&this._queryParamsSub$.unsubscribe(),this._yearControlChangesSub$&&this._yearControlChangesSub$.unsubscribe()}get years(){let a=[];for(let p=1950;p<=this._currentYear;p++)a.push(p.toString());return a.reverse()}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(d.qu),t.Y36(m.F0),t.Y36(m.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-season-filter"]],decls:6,vars:2,consts:[["appearance","standard"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(a,p){1&a&&(t.TgZ(0,"section"),t.TgZ(1,"mat-form-field",0),t.TgZ(2,"mat-label"),t._uU(3,"Year"),t.qZA(),t.TgZ(4,"mat-select",1),t.YNc(5,s,2,2,"mat-option",2),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(4),t.Q6J("formControl",p.yearControl),t.xp6(1),t.Q6J("ngForOf",p.years))},directives:[_.KE,_.hX,h.gD,d.JJ,d.oH,c.sg,g.ey],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#1f1f27;border:1px solid #363643;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:4px}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:-2px!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}section[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;margin-bottom:1rem}.mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),i})()},7190:(M,C,e)=>{e.d(C,{P:()=>h});var t=e(4813),d=e(2340),m=e(5e3),_=e(520);let h=(()=>{class c{constructor(s){this._http=s}getData(s){return this._http.get(`${d.N.api}/${s}/drivers.json`).pipe((0,t.j)("MRData","DriverTable","Drivers"))}}return c.\u0275fac=function(s){return new(s||c)(m.LFG(_.eN))},c.\u0275prov=m.Yz7({token:c,factory:c.\u0275fac}),c})()},1392:(M,C,e)=>{e.d(C,{A:()=>c,P:()=>t.P});var t=e(7190),d=e(4813),m=e(2340),_=e(5e3),h=e(520);let c=(()=>{class g{constructor(u){this._http=u}getData(u){return this._http.get(`${m.N.api}/${u}/constructors.json`).pipe((0,d.j)("MRData","ConstructorTable","Constructors"))}}return g.\u0275fac=function(u){return new(u||g)(_.LFG(h.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac}),g})()}}]);