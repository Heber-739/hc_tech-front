import{c as Ze,d as qe,e as Ue,f as $e,h as le}from"./chunk-6LRPYTMY.js";import{a as at,c as O,d as fe,e as he,g as ct}from"./chunk-H2CYOBL5.js";import{c as me,d as G,f as z,g as ue,h as W,i as ke,j as Se}from"./chunk-36JN3LZY.js";import{Aa as ot,Ba as rt,E as de,Ga as st,Ha as lt,I as We,Ia as dt,Ja as pe,Ka as Y,P as Ce,U as Ke,V as Xe,Y as xe,i as q,k as re,ka as Je,l as Qe,m as ae,n as M,na as ce,oa as k,r as se,ra as et,sa as U,u as ee,ua as $,v as Ye,wa as tt,xa as nt,ya as it,z as Ge}from"./chunk-XCJYIUFR.js";import{$ as h,$a as E,Aa as a,Eb as ne,Fb as Q,Gb as u,Hb as I,Ib as Ae,Ma as w,N as _e,Na as R,Nb as Z,Pa as A,Pb as ie,Q as V,Qa as g,Qb as J,R as F,Sa as j,Ta as Pe,Ub as He,V as _,Yb as Ne,_ as f,_a as je,aa as Oe,ab as C,bb as x,cb as Be,da as we,db as ze,eb as Ve,fb as d,gb as s,gc as y,ha as T,hb as l,hc as oe,ib as m,la as L,mb as Fe,nb as Re,ob as K,pb as B,q as ye,rb as S,sb as p,tb as H,ub as N,vb as D,wb as X,xb as v,y as Ee,yb as b,za as Le}from"./chunk-5K566BYR.js";var pt=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Ct=["header"],xt=["footer"],kt=["content"],St=["closeicon"],Tt=["headless"],Dt=["container"],It=["closeButton"],Mt=["*"],Et=(t,o)=>({transform:t,transition:o}),Ot=t=>({value:"visible",params:t});function Lt(t,o){t&1&&K(0)}function Pt(t,o){if(t&1&&g(0,Lt,1,0,"ng-container",4),t&2){let e=p(2);d("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function jt(t,o){t&1&&K(0)}function Bt(t,o){if(t&1&&(s(0,"div"),u(1),l()),t&2){let e=p(3);Q(e.cx("title")),a(),I(e.header)}}function zt(t,o){t&1&&(Oe(),m(0,"svg",11)),t&2&&E("data-pc-section","closeicon")}function Vt(t,o){}function Ft(t,o){t&1&&g(0,Vt,0,0,"ng-template")}function Rt(t,o){if(t&1&&g(0,zt,1,1,"svg",10)(1,Ft,1,0,null,4),t&2){let e=p(4);d("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),a(),d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function At(t,o){if(t&1){let e=B();s(0,"p-button",9),S("onClick",function(i){f(e);let r=p(3);return h(r.close(i))})("keydown.enter",function(i){f(e);let r=p(3);return h(r.close(i))}),g(1,Rt,2,2,"ng-template",null,1,He),l()}if(t&2){let e=p(3);d("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps),je("ariaLabel",e.ariaCloseLabel),E("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Ht(t,o){t&1&&K(0)}function Nt(t,o){t&1&&K(0)}function Qt(t,o){if(t&1&&(Fe(0),s(1,"div",5),g(2,Nt,1,0,"ng-container",4),l(),Re()),t&2){let e=p(3);a(),d("ngClass",e.cx("footer")),E("data-pc-section","footer"),a(),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Zt(t,o){if(t&1&&(s(0,"div",5),g(1,jt,1,0,"ng-container",4)(2,Bt,2,3,"div",6)(3,At,3,5,"p-button",7),l(),s(4,"div",5),N(5),g(6,Ht,1,0,"ng-container",4),l(),g(7,Qt,3,3,"ng-container",8)),t&2){let e=p(2);d("ngClass",e.cx("header")),E("data-pc-section","header"),a(),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),d("ngIf",e.header),a(),d("ngIf",e.showCloseIcon&&e.closable),a(),d("ngClass",e.cx("content")),E("data-pc-section","content"),a(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),a(),d("ngIf",e.footerTemplate||e._footerTemplate)}}function qt(t,o){if(t&1){let e=B();s(0,"div",3,0),S("@panelState.start",function(i){f(e);let r=p();return h(r.onAnimationStart(i))})("@panelState.done",function(i){f(e);let r=p();return h(r.onAnimationEnd(i))})("keydown",function(i){f(e);let r=p();return h(r.onKeyDown(i))}),C(2,Pt,1,1,"ng-container")(3,Zt,8,9),l()}if(t&2){let e=p();ne(e.style),Q(e.cn(e.cx("root"),e.styleClass)),d("@panelState",ie(11,Ot,J(8,Et,e.transformOptions,e.transitionOptions))),E("data-pc-name","sidebar")("data-pc-section","root"),a(2),x(e.headlessTemplate||e._headlessTemplate?2:3)}}var Ut=`
    ${pt}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,$t={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},mt=(()=>{class t extends U{name="drawer";theme=Ut;classes=$t;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Yt=ke([z({transform:"{{transform}}",opacity:0}),G("{{transition}}")]),Gt=ke([G("{{transition}}",z({transform:"{{transform}}",opacity:0}))]),ut="translate3d(-100%, 0px, 0px)",Wt=(()=>{class t extends ${appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=ut}header;maskStyle;closable=!0;onShow=new j;onHide=new j;visibleChange=new j;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=ut;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=_(mt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&O.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(xe(this.mask,"style",this.getMaskStyle()),xe(this.mask,"style",`z-index: ${i}`),ee(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&tt())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Ye(this.mask,"p-overlay-mask-enter"),ee(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&nt(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),O.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&de(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===O.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&O.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,r){if(n&1&&(D(r,Ct,4),D(r,xt,4),D(r,kt,4),D(r,St,4),D(r,Tt,4),D(r,ce,4)),n&2){let c;v(c=b())&&(i.headerTemplate=c.first),v(c=b())&&(i.footerTemplate=c.first),v(c=b())&&(i.contentTemplate=c.first),v(c=b())&&(i.closeIconTemplate=c.first),v(c=b())&&(i.headlessTemplate=c.first),v(c=b())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(X(Dt,5),X(It,5)),n&2){let r;v(r=b())&&(i.containerViewChild=r.first),v(r=b())&&(i.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",y],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",oe],modal:[2,"modal","modal",y],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",y],showCloseIcon:[2,"showCloseIcon","showCloseIcon",y],closeOnEscape:[2,"closeOnEscape","closeOnEscape",y],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",y]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Z([mt]),A],ngContentSelectors:Mt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(H(),g(0,qt,4,13,"div",2)),n&2&&d("ngIf",i.visible)},dependencies:[M,q,re,ae,pe,at,k],encapsulation:2,data:{animation:[me("panelState",[W("void => visible",[Se(Yt)]),W("visible => void",[Se(Gt)])])]},changeDetection:0})}return t})(),ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=F({imports:[Wt,k,k]})}return t})();var ge={name:"Pedro Portillo",workstation:"Desarrollador Frontend",img:"datos/avatar.jpg"},ht={name:"HC-Tech",img:""};function gt(t,o){let n=!o?.manualCleanup?o?.injector?.get(we)??_(we):null,i=Kt(o?.equal),r;o?.requireSync?r=T({kind:0},{equal:i}):r=T({kind:1,value:o?.initialValue},{equal:i});let c,Me=t.subscribe({next:P=>r.set({kind:1,value:P}),error:P=>{r.set({kind:2,error:P}),c?.()},complete:()=>{c?.()}});if(o?.requireSync&&r().kind===0)throw new _e(601,!1);return c=n?.onDestroy(Me.unsubscribe.bind(Me)),Ne(()=>{let P=r();switch(P.kind){case 1:return P.value;case 2:throw P.error;case 0:throw new _e(601,!1)}},{equal:o?.equal})}function Kt(t=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&t(o.value,e.value)}function tn(t,o){if(t&1&&(s(0,"div",6)(1,"p",22),u(2),l(),s(3,"p",23),u(4),l()()),t&2){let e=p();a(2),I(e.company().companyName),a(2),I(e.company().userName)}}function nn(t,o){t&1&&(s(0,"p",11),u(1,"Empleados"),l())}function on(t,o){t&1&&(s(0,"p",11),u(1,"Turnos"),l())}function rn(t,o){t&1&&(s(0,"p",11),u(1,"Horarios"),l())}function an(t,o){t&1&&(s(0,"p",11),u(1,"Calendario"),l())}function sn(t,o){t&1&&(s(0,"p",11),u(1,"Tramites"),l())}function ln(t,o){t&1&&(s(0,"p",11),u(1,"Reportes"),l())}var ve=class t{router=_(Ue);expanded=T(!0);company;route=gt(this.router.events.pipe(Ee(o=>o instanceof Ze),ye(o=>o.urlAfterRedirects.split("/")),ye(o=>o[o.length-1])),{initialValue:""});constructor(){let{name:o}=ge,{name:e,img:n}=ht;this.company=T({userName:o,companyName:e,img:"datos/hc_tech.png"})}toggleMenu=()=>this.expanded.update(o=>!o);getSeverity(o){return this.route()===o?"primary":"contrast"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-sidebar"]],decls:27,vars:23,consts:[[1,"aside",3,"ngClass"],[1,"toogle-btn",3,"click"],[1,"pi","pi-angle-double-left","icon","primary-icon","text-2xl",3,"ngClass"],[1,"flex","flex-column","py-3","px-3"],[1,"flex","gap-1","w-full","gap-2","justify-center"],["size","large","shape","circle",3,"image","ngClass"],[1,"mr-auto"],[1,"divider"],[1,"w-full","flex","flex-column","gap-4"],["routerLink","/panel/employees","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-users"],["pButtonLabel",""],["routerLink","/panel/shifts","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-book","text-xl"],["routerLink","/panel/schedules","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-clock","text-xl"],["routerLink","/panel/calendar","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-calendar-clock","text-xl"],["routerLink","/panel/procedures","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-copy","text-xl"],["routerLink","/panel/reports","pButton","",1,"w-full","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-chart-line","text-xl"],[1,"text-xl","text-white","font-bold"],[1,"t-gray"]],template:function(e,n){e&1&&(s(0,"aside",0)(1,"div",1),S("click",function(){return n.toggleMenu()}),m(2,"i",2),l(),s(3,"div",3)(4,"div",4),m(5,"p-avatar",5),C(6,tn,5,2,"div",6),l(),m(7,"div",7),s(8,"div",8)(9,"a",9),m(10,"i",10),C(11,nn,2,0,"p",11),l(),s(12,"a",12),m(13,"i",13),C(14,on,2,0,"p",11),l(),s(15,"a",14),m(16,"i",15),C(17,rn,2,0,"p",11),l(),s(18,"a",16),m(19,"i",17),C(20,an,2,0,"p",11),l(),s(21,"a",18),m(22,"i",19),C(23,sn,2,0,"p",11),l(),s(24,"a",20),m(25,"i",21),C(26,ln,2,0,"p",11),l()()()()),e&2&&(d("ngClass",n.expanded()?"expanded-aside":"short-aside"),a(2),d("ngClass",n.expanded()?"pi-angle-double-left":"pi-angle-double-right"),a(3),d("image",n.company().img)("ngClass",n.expanded()?"mr-2":"m-auto"),a(),x(n.expanded()?6:-1),a(3),d("severity",n.getSeverity("employees"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),x(n.expanded()?11:-1),a(),d("severity",n.getSeverity("shifts"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),x(n.expanded()?14:-1),a(),d("severity",n.getSeverity("schedules"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),x(n.expanded()?17:-1),a(),d("severity",n.getSeverity("calendar"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),x(n.expanded()?20:-1),a(),d("severity",n.getSeverity("procedures"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),x(n.expanded()?23:-1),a(),d("severity",n.getSeverity("reports"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),x(n.expanded()?26:-1))},dependencies:[M,q,he,fe,ct,Y,dt,st,lt,le,$e],styles:[".aside[_ngcontent-%COMP%]{position:relative;height:100vh;background-color:var(--bg_primary)}.short-aside[_ngcontent-%COMP%]{width:5dvw}.expanded-aside[_ngcontent-%COMP%]{width:15dvw}.toogle-btn[_ngcontent-%COMP%]{position:absolute;top:30px;right:-10px}.btn[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%]{width:85%}.divider[_ngcontent-%COMP%]{height:1px;margin:20px auto 50px;background-color:var(--light-gray)}"]})};var dn=["*"],cn=`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: dt('overlaybadge.outline.width');
    outline-style: solid;
    outline-color: dt('overlaybadge.outline.color');
}
`,pn={root:"p-overlaybadge"},bt=(()=>{class t extends U{name="overlaybadge";theme=cn;classes=pn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),mn=(()=>{class t extends ${styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(e){this._size=e,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=_(bt);constructor(){super()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",y],size:"size"},features:[Z([bt]),A],ngContentSelectors:dn,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(n,i){n&1&&(H(),s(0,"div",0),N(1),m(2,"p-badge",1),l()),n&2&&(a(2),ne(i.style),d("styleClass",i.styleClass)("badgeSize",i.badgeSize)("severity",i.severity)("value",i.value)("badgeDisabled",i.badgeDisabled))},dependencies:[M,rt,ot,k],encapsulation:2,changeDetection:0})}return t})(),yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=F({imports:[mn,k,k]})}return t})();var un=["content"],fn=["*"],hn=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),gn=(t,o)=>({value:t,params:o}),vn=t=>({closeCallback:t});function bn(t,o){}function yn(t,o){t&1&&g(0,bn,0,0,"ng-template")}function _n(t,o){if(t&1){let e=B();s(0,"div",1),S("click",function(i){f(e);let r=p();return h(r.onOverlayClick(i))})("@animation.start",function(i){f(e);let r=p();return h(r.onAnimationStart(i))})("@animation.done",function(i){f(e);let r=p();return h(r.onAnimationEnd(i))}),s(1,"div",2),S("click",function(i){f(e);let r=p();return h(r.onContentClick(i))})("mousedown",function(i){f(e);let r=p();return h(r.onContentClick(i))}),N(2),g(3,yn,1,0,null,3),l()()}if(t&2){let e=p();Q(e.cn(e.cx("root"),e.styleClass)),d("ngStyle",e.style)("@animation",J(14,gn,e.overlayVisible?"open":"close",J(11,hn,e.showTransitionOptions,e.hideTransitionOptions))),E("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),a(),Q(e.cx("content")),a(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ie(17,vn,e.onCloseClick.bind(e)))}}var wn=`
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`,Cn={root:"p-popover p-component",content:"p-popover-content"},_t=(()=>{class t extends U{name="popover";theme=wn;classes=Cn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),De=(()=>{class t extends ${ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new j;onHide=new j;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=_(_t);zone=_(Pe);overlayService=_(Je);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(se(this.platformId)&&!this.documentClickListener){let e=Ke()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{this.dismissable&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,n)&&(this.destroyCallback=()=>{this.show(null,n||e.currentTarget||e.target)}),this.hide()):this.show(e,n))}show(e,n){n&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=n||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let n=e.target;this.selfClick=e.offsetX<n.clientWidth&&e.offsetY<n.clientHeight}hasTargetChanged(e,n){return this.target!=null&&this.target!==(n||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):de(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&O.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Ge(this.container,this.target,!1);let e=Ce(this.container),n=Ce(this.target),i=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;e.left<n.left&&(r=n.left-e.left-parseFloat(i)*2),this.container?.style.setProperty(et("popover.arrow.left").name,`${r}px`),e.top<n.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),ee(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&O.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=We(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Xe()&&this.hide()}bindDocumentResizeListener(){if(se(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){se(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new it(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&O.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=L(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-popover"]],contentQueries:function(n,i,r){if(n&1&&(D(r,un,4),D(r,ce,4)),n&2){let c;v(c=b())&&(i.contentTemplate=c.first),v(c=b())&&(i.templates=c)}},hostBindings:function(n,i){n&1&&S("keydown.escape",function(c){return i.onEscapeKeydown(c)},Le)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",y],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",y],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",oe],focusOnShow:[2,"focusOnShow","focusOnShow",y],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[Z([_t]),A],ngContentSelectors:fn,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(H(),g(0,_n,4,19,"div",0)),n&2&&d("ngIf",i.render)},dependencies:[M,re,ae,Qe,k],encapsulation:2,data:{animation:[me("animation",[ue("void",z({transform:"scaleY(0.8)",opacity:0})),ue("close",z({opacity:0})),ue("open",z({transform:"translateY(0)",opacity:1})),W("void => open",G("{{showTransitionParams}}")),W("open => close",G("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=F({imports:[De,k,k]})}return t})();var kn=["op"];function Sn(t,o){if(t&1&&(s(0,"p",5),u(1),l()),t&2){let e=p();a(),I(e.notifications().length)}}function Tn(t,o){if(t&1&&(s(0,"p",12),u(1),l()),t&2){let e=o.$implicit;a(),Ae(" ",e.description," ")}}function Dn(t,o){t&1&&(s(0,"span",13),u(1,"No hay notificaciones"),l())}var be=class t{op;notifications=T([{id:1,description:"asd"},{id:2,description:"asdasd"}]);user=T(ge);title=T("Empleados");toggle(o){this.op.toggle(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-header"]],viewQuery:function(e,n){if(e&1&&X(kn,5),e&2){let i;v(i=b())&&(n.op=i.first)}},decls:19,vars:7,consts:[["op",""],[1,"header","w-full","flex","align-items-center","gap-3"],[1,"text-4xl","flex-grow-1","text-center"],["label","Administraci\xF3n"],[1,"pi","pi-bell","icon","notify-icon","text-2xl",3,"click","ngClass"],[1,"badge","text-center"],[1,"card","flex","gap-2","h-fit"],["size","xlarge","shape","circle",1,"mr-2",3,"image"],[1,"flex-col","text-center","m-auto"],[1,"text-xl","font-bold"],[1,"t-gray"],[1,"flex","flex-column","gap-4"],[1,"font-medium","block","mb-2","w-16rem"],[1,"font-medium","block","mb-2"]],template:function(e,n){if(e&1){let i=B();s(0,"header",1)(1,"p",2),u(2),l(),m(3,"p-button",3),s(4,"i",4),S("click",function(c){return f(i),h(n.toggle(c))}),C(5,Sn,2,1,"p",5),l(),s(6,"div",6),m(7,"p-avatar",7),s(8,"div",8)(9,"p",9),u(10),l(),s(11,"p",10),u(12),l()()(),s(13,"p-popover",null,0)(15,"div",11),ze(16,Tn,2,1,"p",12,Be,!1,Dn,2,0,"span",13),l()()()}e&2&&(a(2),I(n.title()),a(2),d("ngClass",n.notifications().length>0?"primary-icon":"secundary-icon"),a(),x(n.notifications().length>0?5:-1),a(2),d("image",n.user().img),a(3),I(n.user().name),a(2),I(n.user().workstation),a(4),Ve(n.notifications()))},dependencies:[M,q,Y,pe,he,fe,wt,De,yt],styles:[".header[_ngcontent-%COMP%]{height:75px;padding:15px;justify-content:space-around;border:1px solid var(--gray)}.notify-icon[_ngcontent-%COMP%]{padding:8px 6px;position:relative}.badge[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-8px;background-color:var(--red);width:16px;height:16px;font-size:small;border-radius:10px;line-height:16px;font-weight:700}"]})};var Ie=class t{visible=!1;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-home-panel"]],decls:5,vars:0,consts:[[1,"flex"],[1,"w-full","h-full","flex","flex-column"]],template:function(e,n){e&1&&(s(0,"main",0),m(1,"app-sidebar"),s(2,"div",1),m(3,"app-header")(4,"router-outlet"),l()())},dependencies:[ft,le,qe,Y,ve,be],encapsulation:2})};export{Ie as default};
