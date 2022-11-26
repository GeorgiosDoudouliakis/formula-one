"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[248],{3248:(A,m,r)=>{r.r(m),r.d(m,{ConstructorsModule:()=>E});var a=r(6895),d=r(1635),f=r(529),P=r(8945),y=r(2956),b=r(2056),I=r(7098),w=r(6828),i=r(8505),C=r(3900),h=r(262),x=r(2843),v=r(4004),T=r(8043),t=r(4650),g=r(4813),l=r(2340);let p=(()=>{class o{constructor(n){this._http=n}getConstructorDetails(n){return this._http.get(`${l.N.api}/constructors/${n}.json`).pipe((0,g.j)("MRData","ConstructorTable","Constructors"))}getConstructorResults(n){return this._http.get(`${l.N.api}/constructors/${n}/results.json`).pipe((0,g.j)("MRData","RaceTable","Races"))}getConstructors(n){return this._http.get(`${l.N.api}/${n}/constructors.json`).pipe((0,g.j)("MRData","ConstructorTable","Constructors"))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var Z=r(4404),M=r(8161),O=r(7392),_=r(5384);function Y(o,e){if(1&o&&t._UZ(0,"img",9),2&o){const n=t.oxw().$implicit;t.MGl("src","assets/images/",n.constructorId,".png",t.LSH),t.Q6J("alt",n.name+" logo")}}function j(o,e){1&o&&t._UZ(0,"img",10)}function F(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"article",4),t.NdJ("click",function(){const u=t.CHM(n).$implicit,L=t.oxw(2);return t.KtG(L.router.navigate(["/constructors",u.constructorId]))}),t.TgZ(1,"section",5)(2,"div",6),t.YNc(3,Y,1,2,"img",7),t.YNc(4,j,1,0,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"mat-icon"),t._uU(9,"keyboard_arrow_right"),t.qZA()()}if(2&o){const n=e.$implicit,s=t.MAs(5),c=t.oxw(2);t.xp6(3),t.Q6J("ngIf",c.imageExists(n))("ngIfElse",s),t.xp6(4),t.Oqu(n.name)}}function S(o,e){if(1&o&&(t.ynx(0),t.TgZ(1,"section",2),t.YNc(2,F,10,3,"article",3),t.qZA(),t.BQk()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.data)}}function $(o,e){1&o&&t._UZ(0,"app-loader")}let D=(()=>{class o extends T.Z{constructor(n,s,c,u){super(n,s,c),this.router=n,this._route=s,this._cdr=c,this._constructorsService=u,this.loading=!1}getDataByYear(){this._dataSub$=this._route.queryParams.pipe((0,i.b)(()=>this.loading=!0),(0,C.w)(n=>this._constructorsService.getConstructors(n.year)),(0,v.U)(n=>this.data=n),(0,i.b)(()=>this.loading=!1),(0,i.b)(()=>this._cdr.markForCheck()),(0,h.K)(n=>(console.error(n),(0,x._)(n)))).subscribe()}imageExists(n){return"alphatauri"===n?.constructorId||"alfa"===n?.constructorId||"alpine"===n?.constructorId||"aston_martin"===n?.constructorId||"ferrari"===n?.constructorId||"haas"===n?.constructorId||"mclaren"===n?.constructorId||"mercedes"===n?.constructorId||"red_bull"===n?.constructorId||"williams"===n?.constructorId}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(t.sBO),t.Y36(p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-constructors"]],features:[t.qOj],decls:4,vars:2,consts:[["title","constructors"],[4,"ngIf"],[1,"grid","constructors-drivers"],["class","box",3,"click",4,"ngFor","ngForOf"],[1,"box",3,"click"],[1,"image-name-container"],[1,"img-container_constructors"],["width","30","height","30",3,"src","alt",4,"ngIf","ngIfElse"],["noImage",""],["width","30","height","30",3,"src","alt"],["src","assets/images/no_image_available.jpg","alt","","width","30","height","30"]],template:function(n,s){1&n&&(t._UZ(0,"app-season-filter")(1,"app-page-header",0),t.YNc(2,S,3,1,"ng-container",1),t.YNc(3,$,1,0,"app-loader",1)),2&n&&(t.xp6(2),t.Q6J("ngIf",!s.loading),t.xp6(1),t.Q6J("ngIf",s.loading))},dependencies:[a.sg,a.O5,Z.b,M.q,O.Hw,_.R],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#f2f2f2;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#1f1f27;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#f2f2f2;border-radius:0;box-shadow:none}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{color:#1f1f27;padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-8px;right:-10px;width:35px;height:30px;color:#fff;background:#e10600}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.img-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:flex-start;padding:.8rem 1rem;margin-bottom:1.5rem;background:#f2f2f2;border-left:2px solid #e10600;border-right:2px solid #e10600}.info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:.5rem}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}.info[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}"],changeDetection:0}),o})();var J=r(4128),N=r(101);function U(o,e){if(1&o&&t._UZ(0,"app-driver-constructor",3),2&o){const n=t.oxw();t.Q6J("type","constructor")("details",n.details)("results",n.results)}}function Q(o,e){1&o&&t._UZ(0,"app-loader",4)}const R=[{path:"",title:"F1 | Constructors",component:D},{path:":id",title:w.w,component:(()=>{class o{constructor(n,s,c){this._constructorsService=n,this._route=s,this._cdr=c,this.isLoading=!1,this.results=[]}ngOnInit(){this._getConstructorDetails()}ngOnDestroy(){this._detailsSub$&&this._detailsSub$.unsubscribe()}_getConstructorDetails(){this._detailsSub$=this._route.params.pipe((0,i.b)(()=>this.isLoading=!0),(0,C.w)(n=>(0,J.D)([this._constructorsService.getConstructorDetails(n.id),this._constructorsService.getConstructorResults(n.id)])),(0,i.b)(()=>this.isLoading=!1),(0,v.U)(n=>{this.details=n[0][0],this.results=n[1]}),(0,i.b)(()=>this._cdr.markForCheck()),(0,h.K)(n=>(console.error(n),(0,x._)(n)))).subscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p),t.Y36(d.gz),t.Y36(t.sBO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-constructor"]],decls:3,vars:2,consts:[["title","constructor"],[3,"type","details","results",4,"ngIf"],["class","driver-constructor",4,"ngIf"],[3,"type","details","results"],[1,"driver-constructor"]],template:function(n,s){1&n&&(t._UZ(0,"app-page-header",0),t.YNc(1,U,1,3,"app-driver-constructor",1),t.YNc(2,Q,1,0,"app-loader",2)),2&n&&(t.xp6(1),t.Q6J("ngIf",!s.isLoading),t.xp6(1),t.Q6J("ngIf",s.isLoading))},dependencies:[a.O5,M.q,N.u,_.R],changeDetection:0}),o})()}];let E=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[p],imports:[a.ez,d.Bz.forChild(R),P.Q,f.JF,y.$,b.k,O.Ps,I.q]}),o})()}}]);