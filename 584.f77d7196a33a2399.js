"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[584],{1584:(O,u,t)=>{t.r(u),t.d(u,{CircuitsModule:()=>z});var d=t(9808),g=t(1083),p=t(520),l=t(7423),C=t(8966),i=t(773),m=t(4140),a=t(8505),o=t(262),f=t(2843),c=t(4004),n=t(5e3),M=t(2313),P=t(4813),x=t(2340);let v=(()=>{class r{constructor(e){this._http=e}getCircuits(){const e=(new Date).getFullYear();return this._http.get(`${x.N.api}/${e}/circuits.json`).pipe((0,P.j)("MRData","CircuitTable","Circuits"))}}return r.\u0275fac=function(e){return new(e||r)(n.LFG(p.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})();var y=t(1566),Y=t(9765);function D(r,s){if(1&r&&n._UZ(0,"app-card",5),2&r){const e=s.$implicit;n.Q6J("type","circuit")("data",e)}}function b(r,s){if(1&r&&(n.TgZ(0,"section",3),n.YNc(1,D,1,2,"app-card",4),n.qZA()),2&r){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.circuits)}}function S(r,s){1&r&&n._UZ(0,"mat-spinner")}let F=(()=>{class r{constructor(e,h,E){this._title=e,this._circuitsService=h,this._cdr=E,this.isLoading=!1,this.currentYear=(new Date).getFullYear().toString(),this.circuits=[],this._title.setTitle("Formula 1 | Circuits")}ngOnInit(){this.getCircuits()}ngOnDestroy(){this._circuitsSub$&&this._circuitsSub$.unsubscribe()}getCircuits(){this.isLoading=!0,this._circuitsSub$=this._circuitsService.getCircuits().pipe((0,c.U)(e=>this.circuits=e),(0,a.b)(()=>this.isLoading=!1),(0,a.b)(()=>this._cdr.markForCheck()),(0,o.K)(e=>(console.error(e),(0,f._)(e)))).subscribe()}}return r.\u0275fac=function(e){return new(e||r)(n.Y36(M.Dx),n.Y36(v),n.Y36(n.sBO))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-circuits"]],decls:4,vars:3,consts:[["title","circuits"],["class","grid",4,"ngIf"],[4,"ngIf"],[1,"grid"],[3,"type","data",4,"ngFor","ngForOf"],[3,"type","data"]],template:function(e,h){1&e&&(n.TgZ(0,"app-page-header",0),n._uU(1),n.qZA(),n.YNc(2,b,2,1,"section",1),n.YNc(3,S,1,0,"mat-spinner",2)),2&e&&(n.xp6(1),n.Oqu(h.currentYear),n.xp6(1),n.Q6J("ngIf",!h.isLoading),n.xp6(1),n.Q6J("ngIf",h.isLoading))},directives:[y.q,d.O5,d.sg,Y.A,i.$g],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#1f1f27;border:1px solid #363643;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:4px}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:-2px!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:3rem}"],changeDetection:0}),r})();var T=t(6659);const _=[{path:"",component:F}];let z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({providers:[v,T.KC],imports:[[d.ez,g.Bz.forChild(_),p.JF,m.$n,m.dT,l.ot,C.Is,i.Cq],g.Bz]}),r})()},7190:(O,u,t)=>{t.d(u,{P:()=>C});var d=t(4813),g=t(2340),p=t(5e3),l=t(520);let C=(()=>{class i{constructor(a){this._http=a,this._currentYear=(new Date).getFullYear().toString()}getData(a=this._currentYear){return this._http.get(`${g.N.api}/${a}/drivers.json`).pipe((0,d.j)("MRData","DriverTable","Drivers"))}}return i.\u0275fac=function(a){return new(a||i)(p.LFG(l.eN))},i.\u0275prov=p.Yz7({token:i,factory:i.\u0275fac}),i})()},6659:(O,u,t)=>{t.d(u,{Az:()=>a,P6:()=>l.P,KC:()=>p});var d=t(1135),g=t(5e3);let p=(()=>{class o{constructor(){this._currentYear=(new Date).getFullYear().toString(),this._year=new d.X(this._currentYear),this.year$=this._year.asObservable()}yearHandler(c){this._year.next(c)}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac}),o})();var l=t(7190),C=t(4813),i=t(2340),m=t(520);let a=(()=>{class o{constructor(c){this._http=c,this._currentYear=(new Date).getFullYear().toString()}getData(c=this._currentYear){return this._http.get(`${i.N.api}/${c}/constructors.json`).pipe((0,C.j)("MRData","ConstructorTable","Constructors"))}}return o.\u0275fac=function(c){return new(c||o)(g.LFG(m.eN))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac}),o})()}}]);