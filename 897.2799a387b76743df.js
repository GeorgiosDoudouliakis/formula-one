"use strict";(self.webpackChunkformula_one=self.webpackChunkformula_one||[]).push([[897],{1048:(f,l,a)=>{a.d(l,{D:()=>O});var t=a(5e3),p=a(1083),d=a(6364),g=a(9808),m=a(3874);const _=function(i,s){return{width:i,height:s}};function C(i,s){if(1&i&&(t.TgZ(0,"div",7),t._UZ(1,"img",8),t.qZA()),2&i){const r=t.oxw().$implicit,e=t.oxw();t.Q6J("ngStyle",t.WLB(3,_,"drivers"===e.type?"45px":"30px","drivers"===e.type?"45px":"30px")),t.xp6(1),t.MGl("src","assets/images/","drivers"===e.type?r.driverId:r.constructorId,".png",t.LSH),t.Q6J("alt",("constructors"===e.type?r.name:r.familyName)+("drivers"===e.type?" photo":" logo"))}}function u(i,s){if(1&i){const r=t.EpF();t.TgZ(0,"article",4),t.NdJ("click",function(){const n=t.CHM(r).$implicit;return t.oxw().navigateTo(n)}),t.TgZ(1,"section",5),t.YNc(2,C,2,6,"div",6),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"mat-icon"),t._uU(6,"keyboard_arrow_right"),t.qZA(),t.qZA()}if(2&i){const r=s.$implicit,e=t.oxw();t.xp6(2),t.Q6J("ngIf","2021"===e.year),t.xp6(1),t.Udp("margin-left","2021"===e.year?"1rem":"0"),t.xp6(1),t.hij(" ","constructors"===e.type?r.name:r.givenName+" "+r.familyName," ")}}let O=(()=>{class i{constructor(r,e){this.router=r,this.yearHandlerService=e}ngOnInit(){this.yearSub$=this.yearHandlerService.year$.subscribe(r=>this.year=r)}ngOnDestroy(){var r;null===(r=this.yearSub$)||void 0===r||r.unsubscribe()}navigateTo(r){"drivers"===this.type?this.router.navigate(["/drivers",r.driverId]):"constructors"===this.type&&this.router.navigate(["/constructors",r.constructorId])}}return i.\u0275fac=function(r){return new(r||i)(t.Y36(p.F0),t.Y36(d.K))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-constructors-drivers"]],inputs:{type:"type",data$:"data$"},decls:6,vars:4,consts:[[1,"max-width","pad"],[1,"constructors-drivers-circuits-header"],[1,"grid","constructors-drivers"],["class","box",3,"click",4,"ngFor","ngForOf"],[1,"box",3,"click"],[1,"image-name-container"],["class","img-container",3,"ngStyle",4,"ngIf"],[1,"img-container",3,"ngStyle"],[3,"src","alt"]],template:function(r,e){1&r&&(t.TgZ(0,"section",0),t.TgZ(1,"h2",1),t._uU(2),t.qZA(),t.TgZ(3,"section",2),t.YNc(4,u,7,4,"article",3),t.ALo(5,"async"),t.qZA(),t.qZA()),2&r&&(t.xp6(2),t.hij("","drivers"===e.type?"Drivers":"Constructors"," List"),t.xp6(2),t.Q6J("ngForOf",t.lcZ(5,2,e.data$)))},directives:[g.sg,g.O5,g.PC,m.Hw],pipes:[g.Ov],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#3d3d3d;border-radius:4px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;background:#303030;position:relative}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:1px solid #3d3d3d}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:100%}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1024px){h2[_ngcontent-%COMP%]{font-size:1.7rem}h2.constructors-drivers-circuits-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}}@media (min-width: 1280px){h2[_ngcontent-%COMP%]{font-size:2rem}}"],changeDetection:0}),i})()},5481:(f,l,a)=>{a.d(l,{u:()=>r});var t=a(5e3),p=a(6364),d=a(9808),g=a(6923),m=a(9560);let _=(()=>{class e{constructor(n){this.cd=n}ngAfterViewChecked(){this.chartOption={xAxis:{type:"category",data:this.xAxisData,axisLine:{show:!0},axisLabel:{rotate:90,color:"#888",inside:!0}},yAxis:{type:"value",axisLine:{show:!0},axisLabel:{color:"white"},minorTick:{show:!0},splitLine:{lineStyle:{color:"#444"}},axisPointer:{show:!0,type:"line",snap:!0,label:{show:!0,precision:2,formatter:function(n){return n.value.toString()}},lineStyle:{color:"#666"}}},series:[{data:this.yAxisData,type:"line",lineStyle:{color:"#d43535"}}]},this.cd.detectChanges()}get xAxisData(){let n=[];return this.results.forEach(o=>n.push(o.Circuit.circuitName)),n}get yAxisData(){let n=[];return this.results.forEach(o=>{"driver"===this.type?n.push(+o.Results[0].points):"constructor"===this.type&&n.push(o.Results.reduce((M,P)=>+M+ +P.points,0))}),n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-statistics"]],inputs:{type:"type",results:"results"},decls:1,vars:1,consts:[["echarts","",1,"chart",3,"options"]],template:function(n,o){1&n&&t._UZ(0,"div",0),2&n&&t.Q6J("options",o.chartOption)},directives:[m._w],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#3d3d3d;border-radius:4px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;background:#303030;position:relative}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:1px solid #3d3d3d}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:100%}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1024px){h2[_ngcontent-%COMP%]{font-size:1.7rem}h2.constructors-drivers-circuits-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}}@media (min-width: 1280px){h2[_ngcontent-%COMP%]{font-size:2rem}}.chart[_ngcontent-%COMP%]{height:800px}"]}),e})();const C=function(e,c){return{width:e,height:c}};function u(e,c){if(1&e&&(t.TgZ(0,"div",12),t._UZ(1,"img",13),t.qZA()),2&e){const n=t.oxw();t.Q6J("ngStyle",t.WLB(3,C,"driver"===n.type?"45px":"30px","driver"===n.type?"45px":"30px")),t.xp6(1),t.MGl("src","assets/images/","driver"===n.type?null==n.details?null:n.details.driverId:null==n.details?null:n.details.constructorId,".png",t.LSH),t.Q6J("alt",("driver"===n.type?null==n.details?null:n.details.driverId:null==n.details?null:n.details.constructorId)+("driver"===n.type?" photo":" logo"))}}function O(e,c){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Date of birth: ",t.lcZ(2,1,null==n.details?null:n.details.dateOfBirth),"")}}function i(e,c){if(1&e&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Number: ",null==n.details?null:n.details.permanentNumber,"")}}function s(e,c){if(1&e&&(t.ynx(0),t._UZ(1,"app-card",14),t.BQk()),2&e){const n=c.$implicit,o=t.oxw();t.xp6(1),t.Q6J("type",o.type)("data",n)}}let r=(()=>{class e{constructor(n){this.yearHandlerService=n}ngOnInit(){this.yearSub$=this.yearHandlerService.year$.subscribe(n=>this.year=n)}ngOnDestroy(){var n;null===(n=this.yearSub$)||void 0===n||n.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-driver-constructor"]],inputs:{type:"type",details:"details",results:"results"},decls:21,vars:12,consts:[[1,"max-width","pad"],[1,"details-header"],[1,"details"],[1,"image-name-container","driver-constructor"],["class","img-container",3,"ngStyle",4,"ngIf"],[1,"details-name"],[4,"ngIf"],["target","_blank",3,"href"],[1,"results-header"],[1,"grid"],[4,"ngFor","ngForOf"],[3,"type","results"],[1,"img-container",3,"ngStyle"],[3,"src","alt"],[3,"type","data"]],template:function(n,o){1&n&&(t.TgZ(0,"article",0),t.TgZ(1,"h2",1),t._uU(2),t.qZA(),t.TgZ(3,"section",2),t.TgZ(4,"section",3),t.YNc(5,u,2,6,"div",4),t.TgZ(6,"h3",5),t._uU(7),t.qZA(),t.qZA(),t.YNc(8,O,3,3,"p",6),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.YNc(11,i,2,1,"p",6),t.TgZ(12,"a",7),t._uU(13,"Wikipedia"),t.qZA(),t.qZA(),t.TgZ(14,"h3",8),t._uU(15,"CIRCUIT RESULTS"),t.qZA(),t.TgZ(16,"section",9),t.YNc(17,s,2,2,"ng-container",10),t.qZA(),t.TgZ(18,"h3"),t._uU(19,"STATISTICS (points/circuit)"),t.qZA(),t._UZ(20,"app-statistics",11),t.qZA()),2&n&&(t.xp6(2),t.hij("","driver"===o.type?"Driver":"Constructor"," Details"),t.xp6(3),t.Q6J("ngIf","2021"===o.year),t.xp6(1),t.Udp("margin-left","2021"===o.year?"1rem":"0"),t.xp6(1),t.hij(" ","constructor"===o.type?null==o.details?null:o.details.name:(null==o.details?null:o.details.givenName)+" "+(null==o.details?null:o.details.familyName)," "),t.xp6(1),t.Q6J("ngIf","driver"===o.type),t.xp6(2),t.hij("Nationality: ",null==o.details?null:o.details.nationality,""),t.xp6(1),t.Q6J("ngIf","driver"===o.type),t.xp6(1),t.Q6J("href",null==o.details?null:o.details.url,t.LSH),t.xp6(5),t.Q6J("ngForOf",o.results),t.xp6(3),t.Q6J("type",o.type)("results",o.results))},directives:[d.O5,d.PC,d.sg,g.A,_],pipes:[d.uU],styles:[".max-width[_ngcontent-%COMP%]{width:90%;max-width:1280px;margin:auto}.pad[_ngcontent-%COMP%]{padding:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-auto-rows:auto}.grid.constructors-drivers[_ngcontent-%COMP%]{gap:20px}.box[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:.5rem;background:#3d3d3d;border-radius:4px;border-right:1px solid #ff4d48;border-bottom:1px solid #ff4d48;color:#fff;cursor:pointer;transition:.4s ease-in-out}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.box[_ngcontent-%COMP%]:hover{transform:translate(10px)}.details-name[_ngcontent-%COMP%]{padding-left:.5rem;margin-bottom:0;border-left:2px solid #e10600}.details[_ngcontent-%COMP%]{margin-bottom:2rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.5rem}.results-header[_ngcontent-%COMP%]{margin-bottom:2rem}.results-header[_ngcontent-%COMP%] + .grid[_ngcontent-%COMP%]{gap:60px 20px;margin-bottom:5rem}.card[_ngcontent-%COMP%]{height:100%}.card[_ngcontent-%COMP%] > .mat-card[_ngcontent-%COMP%]{height:100%;background:#303030;position:relative}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{display:initial}.card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:1px solid #3d3d3d}.card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;position:absolute;top:-10px;right:-10px;width:30px;height:30px;color:#fff;background:#e10600;border-radius:100%}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.3rem}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:.9rem;margin-top:.3rem}.image-name-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center}.image-name-container.driver-constructor[_ngcontent-%COMP%]{margin-bottom:1rem}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}@media (min-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 1024px){.pad[_ngcontent-%COMP%]{padding:2rem 0}.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}.box[_ngcontent-%COMP%]{padding:.8rem}.box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.details-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type){margin-bottom:.8rem}}@media (min-width: 1280px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{list-style-type:none}a[_ngcontent-%COMP%]{text-decoration:none}@media (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:1.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}}@media (min-width: 1024px){h2[_ngcontent-%COMP%]{font-size:1.7rem}h2.constructors-drivers-circuits-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}}@media (min-width: 1280px){h2[_ngcontent-%COMP%]{font-size:2rem}}h3[_ngcontent-%COMP%]{padding:.5rem;background:#3d3d3d;border-radius:4px}.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{margin-bottom:.5rem}a[_ngcontent-%COMP%]{font-size:.9rem;color:#fff;text-decoration:underline}@media (min-width: 768px){a[_ngcontent-%COMP%]{font-size:1rem}}"]}),e})()}}]);