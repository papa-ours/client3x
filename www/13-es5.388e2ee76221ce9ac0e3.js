(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1E6Z":function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),u=t("HfhE"),e=function(){function n(n,l){this.gameService=n,this.router=l}return n.prototype.ngOnInit=function(){var n=this;this.gameService.getGames().subscribe((function(l){n.games=l}))},n.prototype.selectGame=function(n){this.router.navigateByUrl("players-creation/"+n).catch((function(n){console.error(n.message)}))},n}(),i=function(){return function(){}}(),r=t("pMnS"),a=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),c=o.rb({encapsulation:0,styles:[["li[_ngcontent-%COMP%]{list-style:none;padding:10px;cursor:pointer;border-radius:8px;-webkit-transition:-webkit-transform .4s ease-out;transition:-webkit-transform .4s ease-out;transition:transform .4s ease-out;transition:transform .4s ease-out,-webkit-transform .4s ease-out}li[_ngcontent-%COMP%]:hover{background:var(--ion-color-primary-tint);-webkit-transform:scale(1.04);transform:scale(1.04)}li[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%]{color:var(--ion-color-light)}li[_ngcontent-%COMP%]:hover   .max[_ngcontent-%COMP%]{color:var(--ion-color-light-shade)}li[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-weight:600;margin-bottom:4px}li[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%]{color:var(--ion-color-dark-shade);font-weight:500;margin-top:4px}"]],data:{}});function s(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,1,"h3",[["class","name"]],null,null,null,null,null)),(n()(),o.Lb(2,null,["",""])),(n()(),o.tb(3,0,null,null,1,"h6",[["class","max"]],null,null,null,null,null)),(n()(),o.Lb(4,null,[""," players max."]))],null,(function(n,l){var t=l.component;n(l,2,0,t.name),n(l,4,0,t.maxPlayers)}))}var b=t("oBZk"),m=t("ZZ/e"),g=t("Ip0R"),p=t("ZYCi"),d=o.rb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{overflow:visible;border-radius:8px}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{background:var(--ion-color-primary-shade);border-radius:8px 8px 0 0}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{margin-top:0;font-size:26px;font-weight:600;padding:2px;color:var(--ion-color-light)}ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{color:var(--ion-color-primary-contrast)}"]],data:{}});function f(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"app-game",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.selectGame(n.context.$implicit.name)&&o),o}),s,c)),o.sb(1,114688,null,0,a,[],{name:[0,"name"],maxPlayers:[1,"maxPlayers"]},null)],(function(n,l){n(l,1,0,l.context.$implicit.name,l.context.$implicit.maxPlayers)}),null)}function h(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,23,"ion-content",[],null,null,null,b.z,b.j)),o.sb(1,49152,null,0,m.r,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,21,"ion-grid",[["fixed",""]],null,null,null,b.A,b.k)),o.sb(3,49152,null,0,m.x,[o.h,o.k,o.z],{fixed:[0,"fixed"]},null),(n()(),o.tb(4,0,null,0,19,"ion-row",[],null,null,null,b.F,b.p)),o.sb(5,49152,null,0,m.gb,[o.h,o.k,o.z],null,null),(n()(),o.tb(6,0,null,0,1,"ion-col",[["size-lg","3"],["size-md","2"],["size-sm","1"],["size-xl","4"],["size-xs","0"]],null,null,null,b.y,b.i)),o.sb(7,49152,null,0,m.q,[o.h,o.k,o.z],null,null),(n()(),o.tb(8,0,null,0,13,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xl","4"],["size-xs","12"]],null,null,null,b.y,b.i)),o.sb(9,49152,null,0,m.q,[o.h,o.k,o.z],null,null),(n()(),o.tb(10,0,null,0,11,"ion-card",[],null,null,null,b.x,b.d)),o.sb(11,49152,null,0,m.j,[o.h,o.k,o.z],null,null),(n()(),o.tb(12,0,null,0,7,"ion-card-header",[],null,null,null,b.u,b.f)),o.sb(13,49152,null,0,m.l,[o.h,o.k,o.z],null,null),(n()(),o.tb(14,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.v,b.g)),o.sb(15,49152,null,0,m.m,[o.h,o.k,o.z],null,null),(n()(),o.Lb(-1,0,["Select a"])),(n()(),o.tb(17,0,null,0,2,"ion-card-title",[],null,null,null,b.w,b.h)),o.sb(18,49152,null,0,m.n,[o.h,o.k,o.z],null,null),(n()(),o.Lb(-1,0,["Game"])),(n()(),o.ib(16777216,null,0,1,null,f)),o.sb(21,278528,null,0,g.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(n()(),o.tb(22,0,null,0,1,"ion-col",[["size-lg","3"],["size-md","2"],["size-sm","1"],["size-xl","4"],["size-xs","0"]],null,null,null,b.y,b.i)),o.sb(23,49152,null,0,m.q,[o.h,o.k,o.z],null,null)],(function(n,l){var t=l.component;n(l,3,0,""),n(l,21,0,t.games)}),null)}function x(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"app-game-selection",[],null,null,null,h,d)),o.sb(1,114688,null,0,e,[u.a,p.m],null,null)],(function(n,l){n(l,1,0)}),null)}var z=o.pb("app-game-selection",e,x,{},{},[]),k=t("gIcY"),v=t("t/Na");t.d(l,"GameSelectionPageModuleNgFactory",(function(){return O}));var O=o.qb(i,[],(function(n){return o.Cb([o.Db(512,o.j,o.bb,[[8,[r.a,z]],[3,o.j],o.x]),o.Db(4608,g.m,g.l,[o.u,[2,g.u]]),o.Db(4608,k.j,k.j,[]),o.Db(4608,m.a,m.a,[o.z,o.g]),o.Db(4608,m.Db,m.Db,[m.a,o.j,o.q]),o.Db(4608,m.Hb,m.Hb,[m.a,o.j,o.q]),o.Db(4608,u.a,u.a,[v.c]),o.Db(1073742336,g.b,g.b,[]),o.Db(1073742336,k.i,k.i,[]),o.Db(1073742336,k.b,k.b,[]),o.Db(1073742336,m.Bb,m.Bb,[]),o.Db(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),o.Db(1073742336,i,i,[]),o.Db(1024,p.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);