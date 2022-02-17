"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[713],{7713:(w,m,r)=>{r.r(m),r.d(m,{HomeModule:()=>nt});var p=r(9808),d=r(1083),_=r(2835),t=r(5e3),f=r(2313),l=r(6408),g=r(6364),u=r(2368);let v=(()=>{class e{constructor(n){this.yearHandlerService=n,this.optionHandler=new t.vpe,this.option="Driver",this.checked=!1}ngOnInit(){this.yearSub$=this.yearHandlerService.year$.subscribe(n=>{this.checked=!1,this.option="Driver",this.optionHandler.emit(this.option)})}ngOnDestroy(){var n;null===(n=this.yearSub$)||void 0===n||n.unsubscribe()}onOptionChange(n){this.checked=n.checked,this.option=n.checked?"Constructor":"Driver",this.optionHandler.emit(this.option)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-toggle"]],outputs:{optionHandler:"optionHandler"},decls:6,vars:1,consts:[[1,"max-width","pad"],[1,"driver-standings"],["color","primary",3,"checked","change"],[1,"constructor-standings"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0),t.TgZ(1,"span",1),t._uU(2,"Driver"),t.qZA(),t.TgZ(3,"mat-slide-toggle",2),t.NdJ("change",function(s){return i.onOptionChange(s)}),t.qZA(),t.TgZ(4,"span",3),t._uU(5,"Constructor"),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.Q6J("checked",i.checked))},directives:[u.Rr],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-radius:4px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;background:#1f1f27;position:relative}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:1px solid #2a2a35}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:100%}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:0!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1024px){h2[_ngcontent-%COMP%]{font-size:1.7rem}h2.constructors-drivers-circuits-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}}@media (min-width: 1280px){h2[_ngcontent-%COMP%]{font-size:2rem}}section[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center}.max-width[_ngcontent-%COMP%]{margin:0 auto 1rem}span[_ngcontent-%COMP%]{font-size:1rem;color:#fff}.driver-standings[_ngcontent-%COMP%]{margin-right:1rem}.constructor-standings[_ngcontent-%COMP%]{margin-left:1rem}@media (min-width: 600px){section[_ngcontent-%COMP%]{justify-content:flex-end}}"]}),e})();var C=r(4847),c=r(4999),O=r(3900),M=r(2340),P=r(4813),y=r(520);let x=(()=>{class e{constructor(n){this.http=n}getDriverStandings(n="2021"){return this.http.get(`${M.N.api}/${n}/driverStandings.json?limit=400&offset=0`).pipe((0,P.j)("MRData","StandingsTable","StandingsLists"))}getConstructorStandings(n="2021"){return this.http.get(`${M.N.api}/${n}/constructorStandings.json?limit=400&offset=0`).pipe((0,P.j)("MRData","StandingsTable","StandingsLists"))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(y.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var b=r(7322),T=r(7531),h=r(3075),Z=r(773);function D(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Position"),t.qZA())}function S(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij("",null==n?null:n.position," ")}}function N(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Name"),t.qZA())}function z(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.AsE("",null==n||null==n.Driver?null:n.Driver.givenName," ",null==n||null==n.Driver?null:n.Driver.familyName,"")}}function A(e,o){1&e&&(t.ynx(0,20),t.YNc(1,N,2,0,"th",8),t.YNc(2,z,2,2,"td",9),t.BQk())}function H(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Nationality"),t.qZA())}function Y(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(null==n||null==n.Constructor?null:n.Constructor.nationality)}}function k(e,o){1&e&&(t.ynx(0,21),t.YNc(1,H,2,0,"th",8),t.YNc(2,Y,2,1,"td",9),t.BQk())}function U(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Constructor"),t.qZA())}function j(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu((null==n?null:n.Constructors)&&(null==n||null==n.Constructors[0]?null:n.Constructors[0].name))}}function Q(e,o){1&e&&(t.ynx(0,22),t.YNc(1,U,2,0,"th",8),t.YNc(2,j,2,1,"td",9),t.BQk())}function $(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Constructor"),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(null==n||null==n.Constructor?null:n.Constructor.name)}}function I(e,o){1&e&&(t.ynx(0,22),t.YNc(1,$,2,0,"th",8),t.YNc(2,J,2,1,"td",9),t.BQk())}function L(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Points"),t.qZA())}function F(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(null==n?null:n.points)}}function q(e,o){1&e&&(t.TgZ(0,"th",18),t._uU(1,"Wins"),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",19),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(null==n?null:n.wins)}}function E(e,o){1&e&&t._UZ(0,"tr",23)}function R(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"tr",24),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw(2).showDetails(s)}),t.qZA()}}function V(e,o){if(1&e&&(t.TgZ(0,"tr",25),t.TgZ(1,"td",26),t._uU(2),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.hij('No data matching the filter "',n.filterValue,'"')}}function X(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",3),t.TgZ(2,"mat-label"),t._uU(3,"Filter"),t.qZA(),t.TgZ(4,"input",4),t.NdJ("keyup",function(a){return t.CHM(n),t.oxw().applyFilter(a)})("ngModelChange",function(a){return t.CHM(n),t.oxw().filterValue=a}),t.qZA(),t.qZA(),t.TgZ(5,"section",5),t.TgZ(6,"table",6),t.ynx(7,7),t.YNc(8,D,2,0,"th",8),t.YNc(9,S,2,1,"td",9),t.BQk(),t.YNc(10,A,3,0,"ng-container",10),t.YNc(11,k,3,0,"ng-container",11),t.YNc(12,Q,3,0,"ng-container",12),t.YNc(13,I,3,0,"ng-container",12),t.ynx(14,13),t.YNc(15,L,2,0,"th",8),t.YNc(16,F,2,1,"td",9),t.BQk(),t.ynx(17,14),t.YNc(18,q,2,0,"th",8),t.YNc(19,B,2,1,"td",9),t.BQk(),t.YNc(20,E,1,0,"tr",15),t.YNc(21,R,1,0,"tr",16),t.YNc(22,V,3,1,"tr",17),t.qZA(),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngModel",n.filterValue),t.xp6(2),t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("ngIf","Driver"===n.option),t.xp6(1),t.Q6J("ngIf","Constructor"===n.option),t.xp6(1),t.Q6J("ngIf","Driver"===n.option),t.xp6(1),t.Q6J("ngIf","Constructor"===n.option),t.xp6(7),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}function G(e,o){1&e&&t._UZ(0,"mat-spinner")}function K(e,o){1&e&&(t.TgZ(0,"p",27),t._uU(1,"NO DATA FOUND"),t.qZA())}let W=(()=>{class e{constructor(n,i,a){this.yearHandlerService=n,this.driverConstructorStandingsService=i,this.router=a,this.isLoading=!1,this.filterValue="",this.displayedColumns=[],this.data=[]}ngOnChanges(){this.isLoading=!1,this.displayedColumns=[],this.data=[],this.dataSource=new c.by,this.filterValue="",this.tableDataSource()}ngOnInit(){}ngAfterViewChecked(){this.displayedColumns="Driver"===this.option?["position","name","constructor","points","wins"]:["position","constructor","nationality","points","wins"],this.dataSource.filterPredicate=(n,i)=>this.predicate(n,i),this.dataSource.sortingDataAccessor=(n,i)=>this.dataAccessor(n,i),this.dataSource.sort=this.sort}ngOnDestroy(){var n;null===(n=this.standingsSub$)||void 0===n||n.unsubscribe()}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}showDetails(n){"Driver"===this.option?this.router.navigate(["/drivers",n.Driver.driverId]):"Constructor"===this.option&&this.router.navigate(["/constructors",n.Constructor.constructorId])}tableDataSource(){"Driver"===this.option?(this.isLoading=!0,this.standingsSub$=this.yearHandlerService.year$.pipe((0,O.w)(n=>this.driverConstructorStandingsService.getDriverStandings(n))).subscribe({next:n=>{this.isLoading=!1,n[0]&&(this.data=n[0].DriverStandings,this.dataSource=new c.by(this.data))},error:n=>this.isLoading=!1,complete:()=>this.isLoading=!1})):"Constructor"===this.option&&(this.isLoading=!0,this.standingsSub$=this.yearHandlerService.year$.pipe((0,O.w)(n=>this.driverConstructorStandingsService.getConstructorStandings(n))).subscribe({next:n=>{this.isLoading=!1,n[0]&&(this.data=n[0].ConstructorStandings,this.dataSource=new c.by(this.data))},error:n=>this.isLoading=!1,complete:()=>this.isLoading=!1}))}predicate(n,i){let a=[n.position,n.points,n.wins];return"Driver"===this.option?a=[...a,n.Driver.givenName+" "+n.Driver.familyName,n.Constructors[0].name]:"Constructor"===this.option&&(a=[...a,n.Constructor.name,n.Constructor.nationality]),a.toString().toLowerCase().includes(i)}dataAccessor(n,i){if(this.data&&"Driver"===this.option)switch(i){case"name":return n.Driver.givenName+" "+n.Driver.familyName;case"constructor":return n.Constructors[0].name;default:return+n[i]}else if(this.data&&"Constructor"===this.option)switch(i){case"constructor":return n.Constructor.name;case"nationality":return n.Constructor.nationality;default:return+n[i]}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.K),t.Y36(x),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table"]],viewQuery:function(n,i){if(1&n&&t.Gf(C.YE,5),2&n){let a;t.iGM(a=t.CRH())&&(i.sort=a.first)}},inputs:{option:"option"},features:[t.TTD],decls:4,vars:3,consts:[[1,"max-width","table"],[4,"ngIf"],["class","no-data",4,"ngIf"],["appearance","standard"],["matInput","","placeholder","Search...","autocomplete","off",3,"ngModel","keyup","ngModelChange"],[1,"mat-elevation-z8","table-container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name",4,"ngIf"],["matColumnDef","nationality",4,"ngIf"],["matColumnDef","constructor",4,"ngIf"],["matColumnDef","points"],["matColumnDef","wins"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["matColumnDef","name"],["matColumnDef","nationality"],["matColumnDef","constructor"],["mat-header-row",""],["mat-row","",3,"click"],[1,"mat-row"],["colspan","4",1,"mat-cell"],[1,"no-data"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0),t.YNc(1,X,23,8,"ng-container",1),t.YNc(2,G,1,0,"mat-spinner",1),t.YNc(3,K,2,0,"p",2),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",!i.isLoading&&i.dataSource.data.length>0),t.xp6(1),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading&&0===i.dataSource.data.length))},directives:[p.O5,b.KE,b.hX,T.Nt,h.Fj,h.JJ,h.On,c.BZ,C.YE,c.w1,c.fO,c.ge,C.nU,c.Dz,c.ev,c.as,c.XQ,c.nj,c.Gk,c.Ee,Z.$g],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-radius:4px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;background:#1f1f27;position:relative}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:1px solid #2a2a35}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:100%}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:0!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1024px){h2[_ngcontent-%COMP%]{font-size:1.7rem}h2.constructors-drivers-circuits-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}}@media (min-width: 1280px){h2[_ngcontent-%COMP%]{font-size:2rem}}.table[_ngcontent-%COMP%]{padding-bottom:1rem}  .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:0}.mat-form-field[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]{overflow-y:auto}.mat-table[_ngcontent-%COMP%]{width:100%;background:#2a2a35}th[_ngcontent-%COMP%]{font-size:1rem}input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]::placeholder, th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{color:#fff}tr[_ngcontent-%COMP%]{cursor:pointer;transition:.4s ease-in-out}tr[_ngcontent-%COMP%]:hover{background:#141419}.mat-spinner[_ngcontent-%COMP%]{margin:3rem auto 0}.no-data[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:.5rem 0;background:#2a2a35}@media (min-width: 1024px){.table[_ngcontent-%COMP%]{padding-bottom:2rem}}"]}),e})();const tt=[{path:"",component:(()=>{class e{constructor(n,i){this.title=n,this.seasonFilterVisibilityHandlerService=i,this.option="Driver",this.title.setTitle("Formula 1")}ngOnInit(){this.seasonFilterVisibilityHandlerService.seasonFilterVisibilityHandler(!0)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.Dx),t.Y36(l._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:6,vars:2,consts:[[3,"optionHandler"],[1,"max-width"],[3,"option"]],template:function(n,i){1&n&&(t.TgZ(0,"app-toggle",0),t.NdJ("optionHandler",function(s){return i.option=s}),t.qZA(),t.TgZ(1,"h2",1),t._uU(2),t.qZA(),t.TgZ(3,"p",1),t._uU(4,"Click on each row to show more details"),t.qZA(),t._UZ(5,"app-table",2)),2&n&&(t.xp6(2),t.hij("",i.option," Standings"),t.xp6(3),t.Q6J("option",i.option))},directives:[v,W],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-radius:4px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;background:#1f1f27;position:relative}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:1px solid #2a2a35}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:100%}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:0!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1024px){h2[_ngcontent-%COMP%]{font-size:1.7rem}h2.constructors-drivers-circuits-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}}@media (min-width: 1280px){h2[_ngcontent-%COMP%]{font-size:2rem}}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-bottom:1rem!important}p[_ngcontent-%COMP%]{font-size:.9rem}@media (min-width: 768px){p[_ngcontent-%COMP%]{font-size:1rem}}"]}),e})()}];let nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[x],imports:[[p.ez,d.Bz.forChild(tt),_.m],d.Bz]}),e})()},4813:(w,m,r)=>{r.d(m,{j:()=>d});var p=r(4004);function d(..._){const t=_.length;if(0===t)throw new Error("list of properties cannot be empty.");return(0,p.U)(f=>{let l=f;for(let g=0;g<t;g++){const u=null==l?void 0:l[_[g]];if(void 0===u)return;l=u}return l})}}}]);