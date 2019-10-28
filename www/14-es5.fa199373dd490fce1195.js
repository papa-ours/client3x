(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Tpnh:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("mrSG"),o=u("RBpw"),i=u("ZZ/e"),s=function(){function n(n,l,u,e){this.route=n,this.router=l,this.choiceService=u,this.toastController=e,this.numberOfChoices=3,this.numberOfBlocks=1}return n.prototype.ngOnInit=function(){var n=this;this.route.params.subscribe((function(l){n.key=l.key}))},n.prototype.goToGameSelection=function(){this.router.navigateByUrl("game-selection").catch((function(n){console.error(n.message)}))},n.prototype.showMessage=function(n){return t.b(this,void 0,void 0,(function(){return t.e(this,(function(l){switch(l.label){case 0:return[4,this.toastController.create({header:n,duration:3e3,position:"top",buttons:[{text:"OK",role:"cancel"}]})];case 1:return l.sent().present(),[2]}}))}))},n.prototype.sendParameters=function(){var n=this;this.choiceService.sendParameters(this.key,this.numberOfChoices,this.numberOfBlocks).subscribe((function(l){"string"==typeof l?n.showMessage(l):n.goToPlayPage()}))},n.prototype.goToPlayPage=function(){this.router.navigateByUrl("play/"+this.key).catch((function(n){console.error(n.message)}))},n}(),r=function(){return function(){}}(),b=u("pMnS"),a=u("oBZk"),c=u("gIcY"),h=u("ZYCi"),g=e.rb({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{position:relative;left:1%;width:98%}ion-input[_ngcontent-%COMP%]{font-size:18px}"]],data:{}});function d(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,52,"ion-content",[],null,null,null,a.z,a.j)),e.sb(1,49152,null,0,i.r,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,50,"ion-grid",[["fixed",""]],null,null,null,a.A,a.k)),e.sb(3,49152,null,0,i.x,[e.h,e.k,e.z],{fixed:[0,"fixed"]},null),(n()(),e.tb(4,0,null,0,48,"ion-row",[],null,null,null,a.F,a.p)),e.sb(5,49152,null,0,i.gb,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,1,"ion-col",[["size-lg","3"],["size-md","2"],["size-sm","1"],["size-xl","4"],["size-xs","0"]],null,null,null,a.y,a.i)),e.sb(7,49152,null,0,i.q,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,42,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xl","4"],["size-xs","12"]],null,null,null,a.y,a.i)),e.sb(9,49152,null,0,i.q,[e.h,e.k,e.z],null,null),(n()(),e.tb(10,0,null,0,40,"ion-card",[],null,null,null,a.x,a.d)),e.sb(11,49152,null,0,i.j,[e.h,e.k,e.z],null,null),(n()(),e.tb(12,0,null,0,9,"ion-card-header",[],null,null,null,a.u,a.f)),e.sb(13,49152,null,0,i.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(14,0,null,0,1,"ion-icon",[["name","close"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.goToGameSelection()&&e),e}),a.B,a.l)),e.sb(15,49152,null,0,i.z,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(16,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.v,a.g)),e.sb(17,49152,null,0,i.m,[e.h,e.k,e.z],null,null),(n()(),e.Lb(-1,0,["Choose your"])),(n()(),e.tb(19,0,null,0,2,"ion-card-title",[],null,null,null,a.w,a.h)),e.sb(20,49152,null,0,i.n,[e.h,e.k,e.z],null,null),(n()(),e.Lb(-1,0,["Parameters"])),(n()(),e.tb(22,0,null,0,28,"ion-card-content",[],null,null,null,a.t,a.e)),e.sb(23,49152,null,0,i.k,[e.h,e.k,e.z],null,null),(n()(),e.tb(24,0,null,0,11,"ion-item",[],null,null,null,a.D,a.n)),e.sb(25,49152,null,0,i.E,[e.h,e.k,e.z],null,null),(n()(),e.tb(26,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.E,a.o)),e.sb(27,49152,null,0,i.K,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Lb(-1,0,["Number of choices :"])),(n()(),e.tb(29,0,null,0,6,"ion-input",[["min","1"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.Fb(n,30)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Fb(n,30)._handleIonChange(u.target)&&t),"ngModelChange"===l&&(t=!1!==(o.numberOfChoices=u)&&t),t}),a.C,a.m)),e.sb(30,16384,null,0,i.Fb,[e.k],null,null),e.Ib(1024,null,c.c,(function(n){return[n]}),[i.Fb]),e.sb(32,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.d,null,[c.h]),e.sb(34,16384,null,0,c.e,[[4,c.d]],null,null),e.sb(35,49152,null,0,i.D,[e.h,e.k,e.z],{min:[0,"min"],type:[1,"type"]},null),(n()(),e.tb(36,0,null,0,11,"ion-item",[],null,null,null,a.D,a.n)),e.sb(37,49152,null,0,i.E,[e.h,e.k,e.z],null,null),(n()(),e.tb(38,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.E,a.o)),e.sb(39,49152,null,0,i.K,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Lb(-1,0,["Number of blocks :"])),(n()(),e.tb(41,0,null,0,6,"ion-input",[["min","0"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.Fb(n,42)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Fb(n,42)._handleIonChange(u.target)&&t),"ngModelChange"===l&&(t=!1!==(o.numberOfBlocks=u)&&t),t}),a.C,a.m)),e.sb(42,16384,null,0,i.Fb,[e.k],null,null),e.Ib(1024,null,c.c,(function(n){return[n]}),[i.Fb]),e.sb(44,671744,null,0,c.h,[[8,null],[8,null],[8,null],[6,c.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,c.d,null,[c.h]),e.sb(46,16384,null,0,c.e,[[4,c.d]],null,null),e.sb(47,49152,null,0,i.D,[e.h,e.k,e.z],{max:[0,"max"],min:[1,"min"],type:[2,"type"]},null),(n()(),e.tb(48,0,null,0,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.sendParameters()&&e),e}),a.r,a.b)),e.sb(49,49152,null,0,i.h,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Lb(-1,0,[" OK "])),(n()(),e.tb(51,0,null,0,1,"ion-col",[["size-lg","3"],["size-md","2"],["size-sm","1"],["size-xl","4"],["size-xs","0"]],null,null,null,a.y,a.i)),e.sb(52,49152,null,0,i.q,[e.h,e.k,e.z],null,null)],(function(n,l){var u=l.component;n(l,3,0,""),n(l,15,0,"close"),n(l,27,0,"floating"),n(l,32,0,u.numberOfChoices),n(l,35,0,"1","number"),n(l,39,0,"floating"),n(l,44,0,u.numberOfBlocks),n(l,47,0,e.xb(1,"",u.numberOfChoices-1,""),"0","number"),n(l,49,0,"success")}),(function(n,l){n(l,29,0,e.Fb(l,34).ngClassUntouched,e.Fb(l,34).ngClassTouched,e.Fb(l,34).ngClassPristine,e.Fb(l,34).ngClassDirty,e.Fb(l,34).ngClassValid,e.Fb(l,34).ngClassInvalid,e.Fb(l,34).ngClassPending),n(l,41,0,e.Fb(l,46).ngClassUntouched,e.Fb(l,46).ngClassTouched,e.Fb(l,46).ngClassPristine,e.Fb(l,46).ngClassDirty,e.Fb(l,46).ngClassValid,e.Fb(l,46).ngClassInvalid,e.Fb(l,46).ngClassPending)}))}function m(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"app-parameters",[],null,null,null,d,g)),e.sb(1,114688,null,0,s,[h.a,h.m,o.a,i.Jb],null,null)],(function(n,l){n(l,1,0)}),null)}var p=e.pb("app-parameters",s,m,{},{},[]),f=u("Ip0R");u.d(l,"ParametersPageModuleNgFactory",(function(){return C}));var C=e.qb(r,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[b.a,p]],[3,e.j],e.x]),e.Db(4608,f.m,f.l,[e.u,[2,f.u]]),e.Db(4608,c.j,c.j,[]),e.Db(4608,i.a,i.a,[e.z,e.g]),e.Db(4608,i.Db,i.Db,[i.a,e.j,e.q]),e.Db(4608,i.Hb,i.Hb,[i.a,e.j,e.q]),e.Db(1073742336,f.b,f.b,[]),e.Db(1073742336,c.i,c.i,[]),e.Db(1073742336,c.b,c.b,[]),e.Db(1073742336,i.Bb,i.Bb,[]),e.Db(1073742336,h.n,h.n,[[2,h.s],[2,h.m]]),e.Db(1073742336,r,r,[]),e.Db(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);