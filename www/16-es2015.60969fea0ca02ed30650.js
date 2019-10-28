(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"5kYI":function(n,l,o){"use strict";o.r(l);var i=o("8Y7J"),t=o("mrSG"),e=o("RBpw"),u=o("ZZ/e");class r{constructor(){}ngOnInit(){}pick(n){n.blocked||(this.pickedChoice=n)}}class c{constructor(n,l,o,i){this.route=n,this.router=l,this.choiceService=o,this.toastController=i,this.pickingPhase=!1}ngOnInit(){this.route.params.subscribe(n=>{this.key=n.key,this.getNextTurn()})}getNextTurn(){return t.b(this,void 0,void 0,(function*(){this.turn=yield this.choiceService.getNextTurn(this.key).toPromise(),this.turn||this.getResults()}))}getResults(){return t.b(this,void 0,void 0,(function*(){this.results=yield this.choiceService.getResults(this.key).toPromise()}))}blocked(){return this.turn.choices.filter(n=>n.blocked).map(n=>n.name)}goToGameSelection(){this.router.navigateByUrl("game-selection").catch(n=>{console.error(n.message)})}pickingMessage(){return"Pick a choice"}blockingMessage(){return"Block "+this.turn.numberOfBlocks+(1===this.turn.numberOfBlocks?" choice":" choices")+" to "+this.turn.picking}showMessage(n){return t.b(this,void 0,void 0,(function*(){(yield this.toastController.create({header:n,duration:3e3,position:"top",buttons:[{text:"OK",role:"cancel"}]})).present()}))}blockChoices(){return t.b(this,void 0,void 0,(function*(){if(this.blocked().length!==this.turn.numberOfBlocks)throw Error("You must block exactly "+this.turn.numberOfBlocks+" choices");yield this.choiceService.block(this.key,this.blocked()).toPromise()}))}getPlayerChoices(){return t.b(this,void 0,void 0,(function*(){const n=yield this.choiceService.getPlayerChoices(this.key,this.turn.picking).toPromise();void 0!==n&&(this.turn.choices=n)}))}pickChoice(){return t.b(this,void 0,void 0,(function*(){yield this.choiceService.pick(this.key,this.turn.picking,this.pickingComponent.pickedChoice.name).toPromise()}))}submit(){return t.b(this,void 0,void 0,(function*(){try{this.pickingPhase?(yield this.pickChoice(),yield this.getNextTurn(),this.pickingPhase=!1):(yield this.blockChoices(),yield this.getPlayerChoices(),this.pickingPhase=!0)}catch(n){this.showMessage(n.message)}}))}}class s{}var a=o("pMnS"),b=o("SVse");class h{constructor(){}ngOnInit(){}blocked(){return this.choices.filter(n=>n.blocked)}toggle(n){const l=this.blocked();if(!this.choices[n].blocked&&l.length>=this.numberOfBlocks){const n=this.choices.findIndex(n=>n.name===l[0].name);this.choices[n].blocked=!1}this.choices[n].blocked=!this.choices[n].blocked}}var k=i.pb({encapsulation:0,styles:[["li[_ngcontent-%COMP%]{list-style:none;padding:10px;cursor:pointer;border-radius:8px;-webkit-transition:-webkit-transform .4s ease-out;transition:-webkit-transform .4s ease-out;transition:transform .4s ease-out;transition:transform .4s ease-out,-webkit-transform .4s ease-out;color:var(--ion-color-dark);font-weight:600;margin-bottom:4px}li[_ngcontent-%COMP%]:hover{color:var(--ion-color-light);background:var(--ion-color-primary-tint);-webkit-transform:scale(1.04);transform:scale(1.04)}li.blocked[_ngcontent-%COMP%]{background:var(--ion-color-danger)}"]],data:{}});function g(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,4,"li",[],null,[[null,"click"]],(function(n,l,o){var i=!0;return"click"===l&&(i=!1!==n.component.toggle(n.context.index)&&i),i}),null,null)),i.Gb(512,null,b.r,b.s,[i.q,i.r,i.k,i.B]),i.qb(2,278528,null,0,b.i,[b.r],{ngClass:[0,"ngClass"]},null),i.Fb(3,{blocked:0}),(n()(),i.Jb(4,null,[" ","\n"]))],(function(n,l){var o=n(l,3,0,l.context.$implicit.blocked);n(l,2,0,o)}),(function(n,l){n(l,4,0,l.context.$implicit.name)}))}function d(n){return i.Lb(0,[(n()(),i.gb(16777216,null,null,1,null,g)),i.qb(1,278528,null,0,b.j,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,1,0,l.component.choices)}),null)}var p=i.pb({encapsulation:0,styles:[["li[_ngcontent-%COMP%]{list-style:none;padding:10px;border-radius:8px;-webkit-transition:-webkit-transform .4s ease-out;transition:-webkit-transform .4s ease-out;transition:transform .4s ease-out;transition:transform .4s ease-out,-webkit-transform .4s ease-out;color:var(--ion-color-dark);font-weight:600;margin-bottom:4px;cursor:pointer}li.blocked[_ngcontent-%COMP%]{cursor:not-allowed;background:var(--ion-color-danger)}li[_ngcontent-%COMP%]:hover:not(.blocked){color:var(--ion-color-light);background:var(--ion-color-primary-tint);-webkit-transform:scale(1.04);transform:scale(1.04)}li.picked[_ngcontent-%COMP%]{background:var(--ion-color-success);color:var(--ion-color-light-shade)}"]],data:{}});function m(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,4,"li",[],null,[[null,"click"]],(function(n,l,o){var i=!0;return"click"===l&&(i=!1!==n.component.pick(n.context.$implicit)&&i),i}),null,null)),i.Gb(512,null,b.r,b.s,[i.q,i.r,i.k,i.B]),i.qb(2,278528,null,0,b.i,[b.r],{ngClass:[0,"ngClass"]},null),i.Fb(3,{blocked:0,picked:1}),(n()(),i.Jb(4,null,[" ","\n"]))],(function(n,l){var o=l.component,i=n(l,3,0,l.context.$implicit.blocked,o.pickedChoice&&l.context.$implicit.name===o.pickedChoice.name);n(l,2,0,i)}),(function(n,l){n(l,4,0,l.context.$implicit.name)}))}function f(n){return i.Lb(0,[(n()(),i.gb(16777216,null,null,1,null,m)),i.qb(1,278528,null,0,b.j,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,1,0,l.component.choices)}),null)}var x=o("oBZk"),v=o("iInd"),q=i.pb({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{position:relative;left:1%;width:98%}ion-input[_ngcontent-%COMP%]{font-size:18px}ion-card-content[_ngcontent-%COMP%]{padding-top:10px}li[_ngcontent-%COMP%]{list-style:none;padding:10px;cursor:pointer;border-radius:8px;-webkit-transition:-webkit-transform .4s ease-out;transition:-webkit-transform .4s ease-out;transition:transform .4s ease-out;transition:transform .4s ease-out,-webkit-transform .4s ease-out;color:var(--ion-color-dark);font-weight:600;margin-bottom:4px}li[_ngcontent-%COMP%]:hover{color:var(--ion-color-light);background:var(--ion-color-primary-tint);-webkit-transform:scale(1.04);transform:scale(1.04)}"]],data:{}});function y(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,1,"app-blocking",[],null,null,null,d,k)),i.qb(1,114688,null,0,h,[],{choices:[0,"choices"],numberOfBlocks:[1,"numberOfBlocks"]},null)],(function(n,l){var o=l.component;n(l,1,0,o.turn.choices,o.turn.numberOfBlocks)}),null)}function w(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,1,"app-picking",[],null,null,null,f,p)),i.qb(1,114688,[[1,4]],0,r,[],{choices:[0,"choices"]},null)],(function(n,l){n(l,1,0,l.component.turn.choices)}),null)}function P(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,20,"ion-card",[],null,null,null,x.x,x.d)),i.qb(1,49152,null,0,u.j,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,9,"ion-card-header",[],null,null,null,x.u,x.f)),i.qb(3,49152,null,0,u.l,[i.h,i.k,i.x],null,null),(n()(),i.rb(4,0,null,0,1,"ion-icon",[["name","close"]],null,[[null,"click"]],(function(n,l,o){var i=!0;return"click"===l&&(i=!1!==n.component.goToGameSelection()&&i),i}),x.B,x.l)),i.qb(5,49152,null,0,u.z,[i.h,i.k,i.x],{name:[0,"name"]},null),(n()(),i.rb(6,0,null,0,2,"ion-card-title",[],null,null,null,x.w,x.h)),i.qb(7,49152,null,0,u.n,[i.h,i.k,i.x],null,null),(n()(),i.Jb(8,0,["",""])),(n()(),i.rb(9,0,null,0,2,"ion-card-subtitle",[],null,null,null,x.v,x.g)),i.qb(10,49152,null,0,u.m,[i.h,i.k,i.x],null,null),(n()(),i.Jb(11,0,["",""])),(n()(),i.rb(12,0,null,0,8,"ion-card-content",[],null,null,null,x.t,x.e)),i.qb(13,49152,null,0,u.k,[i.h,i.k,i.x],null,null),(n()(),i.gb(16777216,null,0,1,null,y)),i.qb(15,16384,null,0,b.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.gb(16777216,null,0,1,null,w)),i.qb(17,16384,null,0,b.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.rb(18,0,null,0,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(n,l,o){var i=!0;return"click"===l&&(i=!1!==n.component.submit()&&i),i}),x.r,x.b)),i.qb(19,49152,null,0,u.h,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Jb(-1,0,[" OK "]))],(function(n,l){var o=l.component;n(l,5,0,"close"),n(l,15,0,!o.pickingPhase),n(l,17,0,o.pickingPhase),n(l,19,0,"success")}),(function(n,l){var o=l.component;n(l,8,0,o.pickingPhase?o.turn.picking:o.turn.blocking),n(l,11,0,o.pickingPhase?o.pickingMessage():o.blockingMessage())}))}function C(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,7,"ion-item",[],null,null,null,x.D,x.n)),i.qb(1,49152,null,0,u.E,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,2,"ion-label",[["position","fixed"],["slot","start"]],null,null,null,x.E,x.o)),i.qb(3,49152,null,0,u.K,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Jb(4,0,["",""])),(n()(),i.rb(5,0,null,0,2,"ion-label",[["position","fixed"],["slot","start"]],null,null,null,x.E,x.o)),i.qb(6,49152,null,0,u.K,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Jb(7,0,["",""]))],(function(n,l){n(l,3,0,"fixed"),n(l,6,0,"fixed")}),(function(n,l){n(l,4,0,l.context.$implicit.key),n(l,7,0,l.context.$implicit.value)}))}function B(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,19,"ion-card",[],null,null,null,x.x,x.d)),i.qb(1,49152,null,0,u.j,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,9,"ion-card-header",[],null,null,null,x.u,x.f)),i.qb(3,49152,null,0,u.l,[i.h,i.k,i.x],null,null),(n()(),i.rb(4,0,null,0,1,"ion-icon",[["name","close"]],null,[[null,"click"]],(function(n,l,o){var i=!0;return"click"===l&&(i=!1!==n.component.goToGameSelection()&&i),i}),x.B,x.l)),i.qb(5,49152,null,0,u.z,[i.h,i.k,i.x],{name:[0,"name"]},null),(n()(),i.rb(6,0,null,0,2,"ion-card-title",[],null,null,null,x.w,x.h)),i.qb(7,49152,null,0,u.n,[i.h,i.k,i.x],null,null),(n()(),i.Jb(-1,0,["Picks"])),(n()(),i.rb(9,0,null,0,2,"ion-card-subtitle",[],null,null,null,x.v,x.g)),i.qb(10,49152,null,0,u.m,[i.h,i.k,i.x],null,null),(n()(),i.Jb(-1,0,["Choices are locked in"])),(n()(),i.rb(12,0,null,0,7,"ion-card-content",[],null,null,null,x.t,x.e)),i.qb(13,49152,null,0,u.k,[i.h,i.k,i.x],null,null),(n()(),i.gb(16777216,null,0,2,null,C)),i.qb(15,278528,null,0,b.j,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),i.Eb(0,b.e,[i.r]),(n()(),i.rb(17,0,null,0,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(n,l,o){var i=!0;return"click"===l&&(i=!1!==n.component.goToGameSelection()&&i),i}),x.r,x.b)),i.qb(18,49152,null,0,u.h,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Jb(-1,0,[" REPLAY "]))],(function(n,l){var o=l.component;n(l,5,0,"close"),n(l,15,0,i.Kb(l,15,0,i.Db(l,16).transform(o.results))),n(l,18,0,"success")}),null)}function O(n){return i.Lb(0,[i.Hb(671088640,1,{pickingComponent:0}),(n()(),i.rb(1,0,null,null,15,"ion-content",[],null,null,null,x.z,x.j)),i.qb(2,49152,null,0,u.r,[i.h,i.k,i.x],null,null),(n()(),i.rb(3,0,null,0,13,"ion-grid",[["fixed",""]],null,null,null,x.A,x.k)),i.qb(4,49152,null,0,u.x,[i.h,i.k,i.x],{fixed:[0,"fixed"]},null),(n()(),i.rb(5,0,null,0,11,"ion-row",[],null,null,null,x.F,x.p)),i.qb(6,49152,null,0,u.gb,[i.h,i.k,i.x],null,null),(n()(),i.rb(7,0,null,0,1,"ion-col",[["size-lg","3"],["size-md","2"],["size-sm","1"],["size-xl","4"],["size-xs","0"]],null,null,null,x.y,x.i)),i.qb(8,49152,null,0,u.q,[i.h,i.k,i.x],null,null),(n()(),i.rb(9,0,null,0,5,"ion-col",[["size-lg","6"],["size-md","8"],["size-sm","10"],["size-xl","4"],["size-xs","12"]],null,null,null,x.y,x.i)),i.qb(10,49152,null,0,u.q,[i.h,i.k,i.x],null,null),(n()(),i.gb(16777216,null,0,1,null,P)),i.qb(12,16384,null,0,b.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.gb(16777216,null,0,1,null,B)),i.qb(14,16384,null,0,b.k,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i.rb(15,0,null,0,1,"ion-col",[["size-lg","3"],["size-md","2"],["size-sm","1"],["size-xl","4"],["size-xs","0"]],null,null,null,x.y,x.i)),i.qb(16,49152,null,0,u.q,[i.h,i.k,i.x],null,null)],(function(n,l){var o=l.component;n(l,4,0,""),n(l,12,0,o.turn),n(l,14,0,o.results)}),null)}function M(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,1,"app-play",[],null,null,null,O,q)),i.qb(1,114688,null,0,c,[v.a,v.m,e.a,u.Jb],null,null)],(function(n,l){n(l,1,0)}),null)}var J=i.nb("app-play",c,M,{},{},[]),z=o("s7LF");o.d(l,"PlayPageModuleNgFactory",(function(){return I}));var I=i.ob(s,[],(function(n){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[a.a,J]],[3,i.j],i.v]),i.Bb(4608,b.m,b.l,[i.s,[2,b.u]]),i.Bb(4608,z.j,z.j,[]),i.Bb(4608,u.a,u.a,[i.x,i.g]),i.Bb(4608,u.Db,u.Db,[u.a,i.j,i.p]),i.Bb(4608,u.Hb,u.Hb,[u.a,i.j,i.p]),i.Bb(1073742336,b.b,b.b,[]),i.Bb(1073742336,z.i,z.i,[]),i.Bb(1073742336,z.b,z.b,[]),i.Bb(1073742336,u.Bb,u.Bb,[]),i.Bb(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),i.Bb(1073742336,s,s,[]),i.Bb(1024,v.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);