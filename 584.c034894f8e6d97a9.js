"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[584],{1584:(_,a,i)=>{i.r(a),i.d(a,{CircuitsModule:()=>z});var c=i(9808),s=i(1083),g=i(520),u=i(7423),C=i(8966),d=i(773),p=i(4140),m=i(8505),f=i(262),O=i(2843),h=i(4004),t=i(5e3),M=i(2313),P=i(4813),x=i(2340);let l=(()=>{class n{constructor(e){this._http=e}getCircuits(){const e=(new Date).getFullYear();return this._http.get(`${x.N.api}/${e}/circuits.json`).pipe((0,P.j)("MRData","CircuitTable","Circuits"))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var v=i(1566),b=i(9765);function y(n,r){if(1&n&&t._UZ(0,"app-card",5),2&n){const e=r.$implicit;t.Q6J("type","circuit")("data",e)}}function w(n,r){if(1&n&&(t.TgZ(0,"section",3),t.YNc(1,y,1,2,"app-card",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.circuits)}}function F(n,r){1&n&&t._UZ(0,"mat-spinner")}const Y=[{path:"",component:(()=>{class n{constructor(e,o,S){this._title=e,this._circuitsService=o,this._cdr=S,this.isLoading=!1,this.currentYear=(new Date).getFullYear().toString(),this.circuits=[],this._title.setTitle("Formula 1 | Circuits")}ngOnInit(){this.getCircuits()}ngOnDestroy(){this._circuitsSub$&&this._circuitsSub$.unsubscribe()}getCircuits(){this.isLoading=!0,this._circuitsSub$=this._circuitsService.getCircuits().pipe((0,h.U)(e=>this.circuits=e),(0,m.b)(()=>this.isLoading=!1),(0,m.b)(()=>this._cdr.markForCheck()),(0,f.K)(e=>(console.error(e),(0,O._)(e)))).subscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.Dx),t.Y36(l),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-circuits"]],decls:4,vars:3,consts:[["title","circuits"],["class","grid",4,"ngIf"],[4,"ngIf"],[1,"grid"],[3,"type","data",4,"ngFor","ngForOf"],[3,"type","data"]],template:function(e,o){1&e&&(t.TgZ(0,"app-page-header",0),t._uU(1),t.qZA(),t.YNc(2,w,2,1,"section",1),t.YNc(3,F,1,0,"mat-spinner",2)),2&e&&(t.xp6(1),t.Oqu(o.currentYear),t.xp6(1),t.Q6J("ngIf",!o.isLoading),t.xp6(1),t.Q6J("ngIf",o.isLoading))},directives:[v.q,c.O5,c.sg,b.A,d.$g],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:0 0 2.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_constructors[_ngcontent-%COMP%]{width:30px;height:30px}.grid.constructors-drivers[_ngcontent-%COMP%]   .img-container_drivers[_ngcontent-%COMP%]{width:45px;height:45px}.grid.constructors-drivers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#2a2a35;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;padding:8px 16px;background:#1f1f27;border:1px solid #363643;border-radius:0}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding:12px 0}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:4px}.card[_ngcontent-%COMP%]   .mat-card-subtitle.race-subtitle[_ngcontent-%COMP%]{top:-2px!important;left:7px;width:70px!important;height:auto!important;color:#e10600!important;background:transparent!important;border-radius:unset!important}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:0 0 3rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.pad[_ngcontent-%COMP%]{padding:0 0 4rem}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:3rem}"],changeDetection:0}),n})()}];let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[l],imports:[[c.ez,s.Bz.forChild(Y),g.JF,p.$n,p.dT,u.ot,C.Is,d.Cq],s.Bz]}),n})()}}]);