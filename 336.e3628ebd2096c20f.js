"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[336],{1336:(f,l,o)=>{o.r(l),o.d(l,{HomeModule:()=>L});var a=o(6895),m=o(1635),g=o(529),c=o(8505),r=o(262),s=o(2843),d=o(4004),n=o(4650),u=o(2340),_=o(4813);let C=(()=>{class t{constructor(e){this._http=e}getTopDrivers(){return this._http.get(`${u.N.api}/current/driverStandings.json?limit=3&offset=0`).pipe((0,_.j)("MRData","StandingsTable","StandingsLists"))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(g.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})(),M=(()=>{class t{constructor(e){this._http=e}getTopConstructors(){return this._http.get(`${u.N.api}/current/constructorStandings.json?limit=3&offset=0`).pipe((0,_.j)("MRData","StandingsTable","StandingsLists"))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(g.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();var P=o(5384),O=o(4859);let x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-placement"]],inputs:{position:"position",points:"points",name:"name"},decls:7,vars:3,consts:[[1,"name"],[1,"points"]],template:function(e,p){1&e&&(n.TgZ(0,"p")(1,"span"),n._uU(2),n.qZA(),n.TgZ(3,"span",0),n._uU(4),n.qZA()(),n.TgZ(5,"span",1),n._uU(6),n.qZA()),2&e&&(n.xp6(2),n.Oqu(p.position),n.xp6(2),n.Oqu(p.name),n.xp6(2),n.hij("",p.points,"pts"))},styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#2a2a35;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.img-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:flex-start;padding:.8rem 1rem;margin-bottom:1.5rem;background:#2a2a35;border-left:2px solid #e10600;border-right:2px solid #e10600}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}.info[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}[_nghost-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:1rem;color:#fff;background:#2a2a35}[_nghost-%COMP%]:not(:last-of-type){margin-bottom:1rem}[_nghost-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{font-weight:700;padding-right:1rem}.name[_ngcontent-%COMP%]{font-weight:700;padding-left:1rem;border-left:1px solid #e10600}.points[_ngcontent-%COMP%]{display:inline-block;font-size:.8rem;text-align:center;min-width:70px;padding:.3rem 0;background:#1f1f27;border-radius:20px}@media (min-width: 960px){[_nghost-%COMP%]{padding:1rem}}"]}),t})();var h=o(6945);function b(t,i){if(1&t&&(n._UZ(0,"app-placement",7),n.ALo(1,"ordinal")),2&t){const e=i.$implicit,p=i.index;n.hYB("name","",e.Driver.givenName," ",e.Driver.familyName,""),n.Q6J("position",n.lcZ(1,4,p+1))("points",e.points)}}function v(t,i){if(1&t&&(n.ynx(0),n.YNc(1,b,2,6,"app-placement",6),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.topDrivers)}}function w(t,i){1&t&&n._UZ(0,"app-loader")}function y(t,i){if(1&t&&(n._UZ(0,"app-placement",7),n.ALo(1,"ordinal")),2&t){const e=i.$implicit;n.Q6J("position",n.lcZ(1,3,i.index+1))("points",e.points)("name",e.Constructor.name)}}function S(t,i){if(1&t&&(n.ynx(0),n.YNc(1,y,2,5,"app-placement",6),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.topConstructors)}}function D(t,i){1&t&&n._UZ(0,"app-loader")}const T=function(){return{year:"2022"}};let Z=(()=>{class t{constructor(e,p,z){this._topDriversService=e,this._topConstructorsService=p,this._cdr=z,this.isDriverStatsLoading=!0,this.isConstructorStatsLoading=!0,this.topDrivers=[],this.topConstructors=[]}ngOnInit(){this._topDriversSub$=this._topDriversService.getTopDrivers().pipe((0,c.b)(()=>this.isDriverStatsLoading=!1),(0,d.U)(e=>this.topDrivers=e[0].DriverStandings),(0,c.b)(()=>this._cdr.markForCheck()),(0,r.K)(e=>(console.error(e),(0,s._)(e)))).subscribe(),this._topConstructorsSub$=this._topConstructorsService.getTopConstructors().pipe((0,c.b)(()=>this.isConstructorStatsLoading=!1),(0,d.U)(e=>this.topConstructors=e[0].ConstructorStandings),(0,c.b)(()=>this._cdr.markForCheck()),(0,r.K)(e=>(console.error(e),(0,s._)(e)))).subscribe()}ngOnDestroy(){this._topDriversSub$&&this._topDriversSub$.unsubscribe(),this._topConstructorsSub$&&this._topDriversSub$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(C),n.Y36(M),n.Y36(n.sBO))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:20,vars:6,consts:[[1,"img-container"],["src","assets/images/formula_one_cover.jpg","alt",""],[1,"intro"],[1,"placements"],[4,"ngIf"],["routerLink","/standings","mat-raised-button","","color","primary",3,"queryParams"],[3,"position","points","name",4,"ngFor","ngForOf"],[3,"position","points","name"]],template:function(e,p){1&e&&(n.TgZ(0,"section")(1,"div",0),n._UZ(2,"img",1),n.TgZ(3,"div",2)(4,"h1"),n._uU(5,"Formula 1"),n.qZA(),n.TgZ(6,"p"),n._uU(7,"Standings, races, schedule and much more"),n.qZA()()(),n.TgZ(8,"h2"),n._uU(9,"DRIVER STANDINGS"),n.qZA(),n.TgZ(10,"div",3),n.YNc(11,v,2,1,"ng-container",4),n.YNc(12,w,1,0,"app-loader",4),n.qZA(),n.TgZ(13,"h2"),n._uU(14,"CONSTRUCTOR STANDINGS"),n.qZA(),n.TgZ(15,"div",3),n.YNc(16,S,2,1,"ng-container",4),n.YNc(17,D,1,0,"app-loader",4),n.qZA(),n.TgZ(18,"a",5),n._uU(19,"Full Standings"),n.qZA()()),2&e&&(n.xp6(11),n.Q6J("ngIf",!p.isDriverStatsLoading),n.xp6(1),n.Q6J("ngIf",p.isDriverStatsLoading),n.xp6(4),n.Q6J("ngIf",!p.isConstructorStatsLoading),n.xp6(1),n.Q6J("ngIf",p.isConstructorStatsLoading),n.xp6(1),n.Q6J("queryParams",n.DdM(5,T)))},dependencies:[a.sg,a.O5,m.yS,P.R,O.zs,x,h.fV],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#2a2a35;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.img-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:flex-start;padding:.8rem 1rem;margin-bottom:1.5rem;background:#2a2a35;border-left:2px solid #e10600;border-right:2px solid #e10600}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}.info[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.img-container[_ngcontent-%COMP%]{height:180px;position:relative;margin-bottom:2rem}.intro[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;color:#e10600;background:rgba(0,0,0,.6);z-index:2}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}h2[_ngcontent-%COMP%]{font-size:1.2rem!important;text-align:center;padding:1rem 0;margin-bottom:1rem;border:1px solid #2a2a35}.placements[_ngcontent-%COMP%]{margin-bottom:3rem}a[_ngcontent-%COMP%]{display:block;width:120px;margin:auto}@media (min-width: 700px){.img-container[_ngcontent-%COMP%]{height:200px}}@media (min-width: 768px){.intro[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:1.1rem}}@media (min-width: 1024px){.img-container[_ngcontent-%COMP%]{height:250px}.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1.5rem}}@media (min-width: 1280px){.img-container[_ngcontent-%COMP%]{height:300px}}"],changeDetection:0}),t})();var j=o(7098);const N=[{path:"",title:"F1",component:Z,pathMatch:"full"}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[C,M],imports:[g.JF,a.ez,m.Bz.forChild(N),j.q,O.ot,h.JO]}),t})()},5384:(f,l,o)=>{o.d(l,{R:()=>m});var a=o(4650);let m=(()=>{class g{}return g.\u0275fac=function(r){return new(r||g)},g.\u0275cmp=a.Xpm({type:g,selectors:[["app-loader"]],decls:7,vars:0,consts:[[1,"loader"]],template:function(r,s){1&r&&(a.TgZ(0,"div",0),a._UZ(1,"div")(2,"div")(3,"div")(4,"div"),a.qZA(),a.TgZ(5,"span"),a._uU(6,"Loading..."),a.qZA())},styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#2a2a35;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.img-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:flex-start;padding:.8rem 1rem;margin-bottom:1.5rem;background:#2a2a35;border-left:2px solid #e10600;border-right:2px solid #e10600}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}.info[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}[_nghost-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;padding-top:2rem}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{animation:fadeIn;animation-duration:.9s;animation-iteration-count:infinite;animation-direction:alternate-reverse}.loader[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;margin-bottom:1.5rem;width:100%}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:17px;height:17px;background:#e10600;border-radius:100%}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-of-type){margin-left:1rem}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.3s}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.6s}.loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){animation-delay:.9s}span[_ngcontent-%COMP%]{font-size:1rem;color:#fff;letter-spacing:.1rem;animation-delay:1.6s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]}),g})()},7098:(f,l,o)=>{o.d(l,{q:()=>g});var a=o(6895),m=o(4650);let g=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=m.oAB({type:c}),c.\u0275inj=m.cJS({imports:[a.ez]}),c})()},4813:(f,l,o)=>{o.d(l,{j:()=>m});var a=o(4004);function m(...g){const c=g.length;if(0===c)throw new Error("list of properties cannot be empty.");return(0,a.U)(r=>{let s=r;for(let d=0;d<c;d++){const n=s?.[g[d]];if(!(typeof n<"u"))return;s=n}return s})}},6945:(f,l,o)=>{o.d(l,{JO:()=>g,fV:()=>m});var a=o(4650);let m=(()=>{class r{constructor(){this.ordinalVal=["th","st","nd","rd","th","th","th","th","th","th"]}transform(d,n){if(!d)return"";if(d>9&&d<20)return d+this.ordinalVal[0];const u=+String(d).slice(-1);return d+this.ordinalVal[u]}}return r.\u0275fac=function(d){return new(d||r)},r.\u0275pipe=a.Yjl({name:"ordinal",type:r,pure:!0}),r})(),g=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({}),r})()}}]);