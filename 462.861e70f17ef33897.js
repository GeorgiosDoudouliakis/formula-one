"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[462],{462:(L,v,n)=>{n.r(v),n.d(v,{DriversModule:()=>B});var d=n(6895),c=n(1635),f=n(529),_=n(8945),P=n(2956),I=n(2056),y=n(7098),b=n(6828),h=n(7392),a=n(8505),u=n(3900),x=n(262),C=n(2843),M=n(4004),w=n(8043),r=n(4650),g=n(4813),l=n(2340);let p=(()=>{class e{constructor(t){this._http=t}getDriverDetails(t){return this._http.get(`${l.N.api}/drivers/${t}.json`).pipe((0,g.j)("MRData","DriverTable","Drivers"))}getDriverResults(t){return this._http.get(`${l.N.api}/drivers/${t}/results.json`).pipe((0,g.j)("MRData","RaceTable","Races"))}getDrivers(t){return this._http.get(`${l.N.api}/${t}/drivers.json`).pipe((0,g.j)("MRData","DriverTable","Drivers"))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(f.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();var T=n(4404),O=n(8161),D=n(5384);function Z(e,i){if(1&e&&r._UZ(0,"img",9),2&e){const t=r.oxw().$implicit;r.MGl("src","assets/images/",t.driverId,".png",r.LSH),r.Q6J("alt",t.familyName+" photo")}}function Y(e,i){1&e&&r._UZ(0,"img",10)}function z(e,i){if(1&e){const t=r.EpF();r.TgZ(0,"article",4),r.NdJ("click",function(){const m=r.CHM(t).$implicit,E=r.oxw(2);return r.KtG(E.router.navigate(["/drivers",m.driverId]))}),r.TgZ(1,"section",5)(2,"div",6),r.YNc(3,Z,1,2,"img",7),r.YNc(4,Y,1,0,"ng-template",null,8,r.W1O),r.qZA(),r.TgZ(6,"span"),r._uU(7),r.qZA()(),r.TgZ(8,"mat-icon"),r._uU(9,"keyboard_arrow_right"),r.qZA()()}if(2&e){const t=i.$implicit,o=r.MAs(5),s=r.oxw(2);r.xp6(3),r.Q6J("ngIf",s.imageExists(t))("ngIfElse",o),r.xp6(4),r.Oqu(t.givenName+" "+t.familyName)}}function N(e,i){if(1&e&&(r.ynx(0),r.TgZ(1,"section",2),r.YNc(2,z,10,3,"article",3),r.qZA(),r.BQk()),2&e){const t=r.oxw();r.xp6(2),r.Q6J("ngForOf",t.data)}}function j(e,i){1&e&&r._UZ(0,"app-loader")}let F=(()=>{class e extends w.Z{constructor(t,o,s,m){super(t,o,s),this.router=t,this._route=o,this._cdr=s,this._driversService=m,this.loading=!1}getDataByYear(){this._dataSub$=this._route.queryParams.pipe((0,a.b)(()=>this.loading=!0),(0,u.w)(t=>this._driversService.getDrivers(t.year)),(0,M.U)(t=>this.data=t),(0,a.b)(()=>this.loading=!1),(0,a.b)(()=>this._cdr.markForCheck()),(0,x.K)(t=>(console.error(t),(0,C._)(t)))).subscribe()}imageExists(t){return"alonso"===t?.driverId||"bottas"===t?.driverId||"gasly"===t?.driverId||"giovinazzi"===t?.driverId||"hamilton"===t?.driverId||"kubica"===t?.driverId||"latifi"===t?.driverId||"leclerc"===t?.driverId||"mazepin"===t?.driverId||"norris"===t?.driverId||"ocon"===t?.driverId||"perez"===t?.driverId||"raikkonen"===t?.driverId||"ricciardo"===t?.driverId||"russell"===t?.driverId||"sainz"===t?.driverId||"mick_schumacher"===t?.driverId||"stroll"===t?.driverId||"tsunoda"===t?.driverId||"max_verstappen"===t?.driverId||"vettel"===t?.driverId}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.F0),r.Y36(c.gz),r.Y36(r.sBO),r.Y36(p))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-drivers"]],features:[r.qOj],decls:4,vars:2,consts:[["title","drivers"],[4,"ngIf"],[1,"grid","constructors-drivers"],["class","box",3,"click",4,"ngFor","ngForOf"],[1,"box",3,"click"],[1,"image-name-container"],[1,"img-container_drivers"],["width","45","height","45",3,"src","alt",4,"ngIf","ngIfElse"],["noImage",""],["width","45","height","45",3,"src","alt"],["src","assets/images/no_image_available.jpg","alt","","width","45","height","45"]],template:function(t,o){1&t&&(r._UZ(0,"app-season-filter")(1,"app-page-header",0),r.YNc(2,N,3,1,"ng-container",1),r.YNc(3,j,1,0,"app-loader",1)),2&t&&(r.xp6(2),r.Q6J("ngIf",!o.loading),r.xp6(1),r.Q6J("ngIf",o.loading))},dependencies:[d.sg,d.O5,T.b,O.q,h.Hw,D.R],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:2rem 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#f7f7f7;border-radius:0 0 10px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#1f1f27;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#f7f7f7;border-right:1px solid #e10600;border-bottom:1px solid #e10600;border-radius:0 0 10px;box-shadow:none}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{color:#1f1f27;padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-8px;right:-15px;width:35px;height:30px;color:#fff;background:#1f1f27}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.img-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:flex-start;padding:.8rem 1rem;margin-bottom:1.5rem;background:#f7f7f7;border-left:2px solid #e10600;border-right:2px solid #e10600}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}.info[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}"],changeDetection:0}),e})();var S=n(4128),$=n(101);function J(e,i){if(1&e&&r._UZ(0,"app-driver-constructor",3),2&e){const t=r.oxw();r.Q6J("type","driver")("details",t.details)("results",t.results)}}function U(e,i){1&e&&r._UZ(0,"app-loader",4)}const R=[{path:"",title:"F1 | Drivers",component:F},{path:":id",title:b.w,component:(()=>{class e{constructor(t,o,s){this._driversService=t,this._route=o,this._cdr=s,this.isLoading=!1,this.results=[]}ngOnInit(){this._getDriverDetails()}ngOnDestroy(){this._detailsSub$&&this._detailsSub$.unsubscribe()}_getDriverDetails(){this._detailsSub$=this._route.params.pipe((0,a.b)(()=>this.isLoading=!0),(0,u.w)(t=>(0,S.D)([this._driversService.getDriverDetails(t.id),this._driversService.getDriverResults(t.id)])),(0,a.b)(()=>this.isLoading=!1),(0,M.U)(t=>{this.details=t[0][0],this.results=t[1]}),(0,a.b)(()=>this._cdr.markForCheck()),(0,x.K)(t=>(console.error(t),(0,C._)(t)))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(p),r.Y36(c.gz),r.Y36(r.sBO))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-driver"]],decls:3,vars:2,consts:[["title","driver"],[3,"type","details","results",4,"ngIf"],["class","driver-constructor",4,"ngIf"],[3,"type","details","results"],[1,"driver-constructor"]],template:function(t,o){1&t&&(r._UZ(0,"app-page-header",0),r.YNc(1,J,1,3,"app-driver-constructor",1),r.YNc(2,U,1,0,"app-loader",2)),2&t&&(r.xp6(1),r.Q6J("ngIf",!o.isLoading),r.xp6(1),r.Q6J("ngIf",o.isLoading))},dependencies:[d.O5,O.q,$.u,D.R],changeDetection:0}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[p],imports:[d.ez,f.JF,c.Bz.forChild(R),_.Q,P.$,I.k,h.Ps,y.q,c.Bz]}),e})()}}]);