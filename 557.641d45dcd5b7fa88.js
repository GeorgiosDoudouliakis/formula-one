"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[557],{557:(E,m,r)=>{r.r(m),r.d(m,{ConstructorsModule:()=>S});var a=r(6895),f=r(1635),C=r(529),g=r(8505),b=r(3900),h=r(262),x=r(2843),l=r(4004),_=r(2722),s=r(5412),Z=r(9045),t=r(4650),O=r(4813),M=r(2340);let d=(()=>{class o{constructor(n){this._http=n}getConstructorDetails(n){return this._http.get(`${M.N.api}/constructors/${n}.json`).pipe((0,O.j)("MRData","ConstructorTable","Constructors"),(0,l.U)(c=>c[0]))}getConstructors(n){return this._http.get(`${M.N.api}/${n}/constructors.json`).pipe((0,O.j)("MRData","ConstructorTable","Constructors"))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var p=r(4859),v=r(1572);function T(o,e){if(1&o&&(t.ynx(0),t.TgZ(1,"h1",2),t._uU(2),t.qZA(),t.TgZ(3,"div",3)(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"a",4),t._uU(7,"Wikipedia"),t.qZA()(),t.TgZ(8,"div",5)(9,"button",6),t._uU(10,"Close"),t.qZA()(),t.BQk()),2&o){const n=t.oxw();t.xp6(2),t.Oqu(n.f1Constructor.name),t.xp6(3),t.hij("Nationality: ",n.f1Constructor.nationality,""),t.xp6(1),t.Q6J("href",n.f1Constructor.url,t.LSH)}}function w(o,e){1&o&&t._UZ(0,"mat-spinner",7)}let Y=(()=>{class o extends Z.R{constructor(n,c){super(),this.data=n,this._constructorsService=c,this.f1Constructor={},this.loading=!0}ngOnInit(){this._constructorsService.getConstructorDetails(this.data.id).pipe((0,l.U)(n=>this.f1Constructor=n),(0,g.b)(()=>this.loading=!1),(0,h.K)(n=>(this.loading=!1,(0,x._)(n))),(0,_.R)(this.destroy$)).subscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.WI),t.Y36(d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-constructor-details"]],features:[t.qOj],decls:2,vars:2,consts:[[4,"ngIf"],["color","primary",4,"ngIf"],["mat-dialog-title",""],["mat-dialog-content",""],["target","_blank","rel","noopener",3,"href"],["mat-dialog-actions","","align","center"],["mat-flat-button","","color","accent","mat-dialog-close",""],["color","primary"]],template:function(n,c){1&n&&(t.YNc(0,T,11,3,"ng-container",0),t.YNc(1,w,1,0,"mat-spinner",1)),2&n&&(t.Q6J("ngIf",!c.loading),t.xp6(1),t.Q6J("ngIf",c.loading))},dependencies:[a.O5,p.lW,s.ZT,s.uh,s.xY,s.H8,v.Ou],styles:["h1[_ngcontent-%COMP%]{text-align:center;padding:1rem 0;margin-bottom:.5rem;color:#e10600}.mat-dialog-content[_ngcontent-%COMP%]{padding:0 2rem}.mat-dialog-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;font-size:1rem;text-align:center;margin-bottom:.8rem}a[_ngcontent-%COMP%]{text-decoration:underline;color:#1f1f27}"]}),o})();var U=r(8043),P=r(605),y=r(2802),I=r(1671);function N(o,e){if(1&o&&t._UZ(0,"img",12),2&o){const n=t.oxw().$implicit;t.MGl("src","assets/images/",n.constructorId,".png",t.LSH),t.Q6J("alt",n.name+" logo")}}function j(o,e){1&o&&t._UZ(0,"img",13)}function D(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"article",6),t.NdJ("click",function(){const u=t.CHM(n).$implicit,$=t.oxw(3);return t.KtG($.openDetails(u.constructorId))}),t.TgZ(1,"section",7)(2,"div",8),t.YNc(3,N,1,2,"img",9),t.YNc(4,j,1,0,"ng-template",null,10,t.W1O),t.qZA(),t.TgZ(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"button",11),t._uU(9,"More"),t.qZA()()}if(2&o){const n=e.$implicit,c=t.MAs(5),i=t.oxw(3);t.xp6(3),t.Q6J("ngIf",i.imageExists(n))("ngIfElse",c),t.xp6(4),t.Oqu(n.name)}}function F(o,e){if(1&o&&(t.TgZ(0,"section",4),t.YNc(1,D,10,3,"article",5),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.data)}}function J(o,e){1&o&&(t.TgZ(0,"p",14),t._uU(1,"No data found"),t.qZA())}function A(o,e){if(1&o&&(t.ynx(0),t.YNc(1,F,2,1,"section",2),t.YNc(2,J,2,0,"p",3),t.BQk()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.data.length>0),t.xp6(1),t.Q6J("ngIf",0===n.data.length)}}function Q(o,e){1&o&&t._UZ(0,"app-loader")}const z=[{path:"",title:"F1 | Constructors",component:(()=>{class o extends U.Z{constructor(n,c,i,u){super(n,c,i),this.dialog=n,this.route=c,this.cdr=i,this._constructorsService=u}openDetails(n){this.dialog.open(Y,{data:{id:n},minWidth:"330px",minHeight:"240px"})}imageExists(n){return"alphatauri"===n?.constructorId||"alfa"===n?.constructorId||"alpine"===n?.constructorId||"aston_martin"===n?.constructorId||"ferrari"===n?.constructorId||"haas"===n?.constructorId||"mclaren"===n?.constructorId||"mercedes"===n?.constructorId||"red_bull"===n?.constructorId||"williams"===n?.constructorId}getDataByYear(){this.route.queryParams.pipe((0,g.b)(()=>this.loading=!0),(0,b.w)(n=>(this.selectedYear=n.year,this._constructorsService.getConstructors(this.selectedYear))),(0,l.U)(n=>this.data=n),(0,g.b)(()=>this.loading=!1),(0,g.b)(()=>this.cdr.markForCheck()),(0,h.K)(n=>(this.loading=!1,this.cdr.markForCheck(),(0,x._)(n))),(0,_.R)(this.destroy$)).subscribe()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.uw),t.Y36(f.gz),t.Y36(t.sBO),t.Y36(d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-constructors"]],features:[t.qOj],decls:5,vars:3,consts:[["title","constructors"],[4,"ngIf"],["class","grid constructors-drivers",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"grid","constructors-drivers"],["class","box",3,"click",4,"ngFor","ngForOf"],[1,"box",3,"click"],[1,"image-name-container"],[1,"img-container_constructors"],["width","30","height","30",3,"src","alt",4,"ngIf","ngIfElse"],["noImage",""],["mat-stroked-button","","color","accent"],["width","30","height","30",3,"src","alt"],["src","assets/images/no_image_available.jpg","alt","","width","30","height","30"],[1,"no-data"]],template:function(n,c){1&n&&(t._UZ(0,"app-season-filter"),t.TgZ(1,"app-page-header",0),t._uU(2),t.qZA(),t.YNc(3,A,3,2,"ng-container",1),t.YNc(4,Q,1,0,"app-loader",1)),2&n&&(t.xp6(2),t.hij(" ",c.selectedYear,"\n"),t.xp6(1),t.Q6J("ngIf",!c.loading),t.xp6(1),t.Q6J("ngIf",c.loading))},dependencies:[a.sg,a.O5,P.R,y.q,I.b,p.lW],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:2rem 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#f7f7f7;border-radius:0;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#1f1f27;cursor:pointer}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#f7f7f7;border-right:1px solid #e10600;border-bottom:1px solid #e10600;border-radius:0;box-shadow:none}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{color:#1f1f27;padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-8px;right:-15px;width:35px;height:35px;color:#fff;background:#1f1f27}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.img-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.no-data[_ngcontent-%COMP%]{font-size:1.1rem;text-align:center}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}.info[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}"],changeDetection:0}),o})()}];let S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[d],imports:[a.ez,f.Bz.forChild(z),C.JF,P.R,y.q,I.b,p.ot,s.Is,v.Cq]}),o})()}}]);