import{d as et,e as tt,f as nt,g as it,j as he}from"./chunk-GLLS3MSI.js";import{b as Lt,c as _e,f as Pt,g as Vt}from"./chunk-ETKU6MTR.js";import{a as Ot,b as Ft}from"./chunk-TBIZZBIC.js";import{c as P,d as ee,e as te}from"./chunk-LJJHOFN5.js";import{c as be,d as K,f as B,g as ve,h as J,i as Oe,j as Fe}from"./chunk-36JN3LZY.js";import{a as St,b as It,c as Et}from"./chunk-VTNNE4O4.js";import{a as Tt,b as Dt,c as Mt,d as X,e as z}from"./chunk-5LC32MW2.js";import"./chunk-G5XSCZYA.js";import{b as ot,c as O,e as rt,f as at,i as st,j as lt,l as pt,m as ct,o as dt,q as mt}from"./chunk-EFBFIAY5.js";import{Aa as xt,Ba as kt,E as ye,I as ht,P as Ee,U as yt,V as gt,Y as Le,i as G,k as me,ka as bt,l as Je,m as ue,n as L,na as ge,oa as T,r as fe,ra as vt,sa as Y,u as se,ua as W,v as ut,wa as _t,xa as Ct,ya as wt,z as ft}from"./chunk-GLO2RZQ3.js";import{$ as f,$a as w,$b as ce,Ab as oe,B as je,Bb as M,Db as h,Eb as c,Fb as q,Gb as Q,Hb as I,Ib as re,Ja as Re,Jb as x,Ka as s,Kb as k,N as Me,Q as j,Qb as pe,R as N,Rb as Z,Sb as y,Tb as E,Ub as Ye,V as _,Wa as C,Xa as R,Zb as $,_ as u,_a as H,a as ie,aa as Ne,ac as ae,bb as A,c as Te,cb as He,da as Ie,gc as We,ha as g,jb as qe,kb as F,kc as Xe,la as V,lb as b,mb as v,nc as U,ob as Qe,oc as Ke,pb as Ze,q as De,qb as $e,rb as p,sb as a,tb as l,ub as m,uc as S,vc as de,y as Be,yb as Ue,zb as Ge}from"./chunk-ZTPKSPIT.js";var zt=`
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
`;var Xt=["header"],Kt=["footer"],Jt=["content"],en=["closeicon"],tn=["headless"],nn=["container"],on=["closeButton"],rn=["*"],an=(t,i)=>({transform:t,transition:i}),sn=t=>({value:"visible",params:t});function ln(t,i){t&1&&oe(0)}function pn(t,i){if(t&1&&w(0,ln,1,0,"ng-container",4),t&2){let e=c(2);p("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function cn(t,i){t&1&&oe(0)}function dn(t,i){if(t&1&&(a(0,"div"),y(1),l()),t&2){let e=c(3);Z(e.cx("title")),s(),E(e.header)}}function mn(t,i){t&1&&(Ne(),m(0,"svg",11)),t&2&&F("data-pc-section","closeicon")}function un(t,i){}function fn(t,i){t&1&&w(0,un,0,0,"ng-template")}function hn(t,i){if(t&1&&w(0,mn,1,1,"svg",10)(1,fn,1,0,null,4),t&2){let e=c(4);p("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),s(),p("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function yn(t,i){if(t&1){let e=M();a(0,"p-button",9),h("onClick",function(o){u(e);let r=c(3);return f(r.close(o))})("keydown.enter",function(o){u(e);let r=c(3);return f(r.close(o))}),w(1,hn,2,2,"ng-template",null,1,We),l()}if(t&2){let e=c(3);p("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps),qe("ariaLabel",e.ariaCloseLabel),F("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function gn(t,i){t&1&&oe(0)}function bn(t,i){t&1&&oe(0)}function vn(t,i){if(t&1&&(Ue(0),a(1,"div",5),w(2,bn,1,0,"ng-container",4),l(),Ge()),t&2){let e=c(3);s(),p("ngClass",e.cx("footer")),F("data-pc-section","footer"),s(),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function _n(t,i){if(t&1&&(a(0,"div",5),w(1,cn,1,0,"ng-container",4)(2,dn,2,3,"div",6)(3,yn,3,5,"p-button",7),l(),a(4,"div",5),Q(5),w(6,gn,1,0,"ng-container",4),l(),w(7,vn,3,3,"ng-container",8)),t&2){let e=c(2);p("ngClass",e.cx("header")),F("data-pc-section","header"),s(),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),p("ngIf",e.header),s(),p("ngIf",e.showCloseIcon&&e.closable),s(),p("ngClass",e.cx("content")),F("data-pc-section","content"),s(2),p("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),s(),p("ngIf",e.footerTemplate||e._footerTemplate)}}function Cn(t,i){if(t&1){let e=M();a(0,"div",3,0),h("@panelState.start",function(o){u(e);let r=c();return f(r.onAnimationStart(o))})("@panelState.done",function(o){u(e);let r=c();return f(r.onAnimationEnd(o))})("keydown",function(o){u(e);let r=c();return f(r.onKeyDown(o))}),b(2,pn,1,1,"ng-container")(3,_n,8,9),l()}if(t&2){let e=c();pe(e.style),Z(e.cn(e.cx("root"),e.styleClass)),p("@panelState",ce(11,sn,ae(8,an,e.transformOptions,e.transitionOptions))),F("data-pc-name","sidebar")("data-pc-section","root"),s(2),v(e.headlessTemplate||e._headlessTemplate?2:3)}}var wn=`
    ${zt}

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
`,xn={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},At=(()=>{class t extends Y{name="drawer";theme=wn;classes=xn;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var kn=Oe([B({transform:"{{transform}}",opacity:0}),K("{{transition}}")]),Sn=Oe([K("{{transition}}",B({transform:"{{transform}}",opacity:0}))]),Bt="translate3d(-100%, 0px, 0px)",Tn=(()=>{class t extends W{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=Bt}header;maskStyle;closable=!0;onShow=new A;onHide=new A;visibleChange=new A;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=Bt;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=_(At);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&P.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,o=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(Le(this.mask,"style",this.getMaskStyle()),Le(this.mask,"style",`z-index: ${o}`),se(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&_t())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(ut(this.mask,"p-overlay-mask-enter"),se(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Ct(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),P.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&ye(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===P.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&P.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275cmp=C({type:t,selectors:[["p-drawer"]],contentQueries:function(n,o,r){if(n&1&&(I(r,Xt,4),I(r,Kt,4),I(r,Jt,4),I(r,en,4),I(r,tn,4),I(r,ge,4)),n&2){let d;x(d=k())&&(o.headerTemplate=d.first),x(d=k())&&(o.footerTemplate=d.first),x(d=k())&&(o.contentTemplate=d.first),x(d=k())&&(o.closeIconTemplate=d.first),x(d=k())&&(o.headlessTemplate=d.first),x(d=k())&&(o.templates=d)}},viewQuery:function(n,o){if(n&1&&(re(nn,5),re(on,5)),n&2){let r;x(r=k())&&(o.containerViewChild=r.first),x(r=k())&&(o.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",S],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",S],baseZIndex:[2,"baseZIndex","baseZIndex",de],modal:[2,"modal","modal",S],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",S],showCloseIcon:[2,"showCloseIcon","showCloseIcon",S],closeOnEscape:[2,"closeOnEscape","closeOnEscape",S],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",S]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[$([At]),H],ngContentSelectors:rn,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,o){n&1&&(q(),w(0,Cn,4,13,"div",2)),n&2&&p("ngIf",o.visible)},dependencies:[L,G,me,ue,X,St,T],encapsulation:2,data:{animation:[be("panelState",[J("void => visible",[Fe(kn)]),J("visible => void",[Fe(Sn)])])]},changeDetection:0})}return t})(),jt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=N({imports:[Tn,T,T]})}return t})();var Ce={name:"Pedro Portillo",workstation:"Desarrollador Frontend",img:"datos/avatar.jpg"},Nt={name:"HC-Tech",img:""};function Rt(t,i){let n=!i?.manualCleanup?i?.injector?.get(Ie)??_(Ie):null,o=Dn(i?.equal),r;i?.requireSync?r=g({kind:0},{equal:o}):r=g({kind:1,value:i?.initialValue},{equal:o});let d,le=t.subscribe({next:D=>r.set({kind:1,value:D}),error:D=>{r.set({kind:2,error:D}),d?.()},complete:()=>{d?.()}});if(i?.requireSync&&r().kind===0)throw new Me(601,!1);return d=n?.onDestroy(le.unsubscribe.bind(le)),Xe(()=>{let D=r();switch(D.kind){case 1:return D.value;case 2:throw D.error;case 0:throw new Me(601,!1)}},{equal:i?.equal})}function Dn(t=Object.is){return(i,e)=>i.kind===1&&e.kind===1&&t(i.value,e.value)}function In(t,i){if(t&1&&(a(0,"div",6)(1,"p",22),y(2),l(),a(3,"p",23),y(4),l()()),t&2){let e=c();s(2),E(e.company().companyName),s(2),E(e.company().userName)}}function En(t,i){t&1&&(a(0,"p",11),y(1,"Empleados"),l())}function Ln(t,i){t&1&&(a(0,"p",11),y(1,"Turnos"),l())}function On(t,i){t&1&&(a(0,"p",11),y(1,"Horarios"),l())}function Fn(t,i){t&1&&(a(0,"p",11),y(1,"Calendario"),l())}function Pn(t,i){t&1&&(a(0,"p",11),y(1,"Tramites"),l())}function Vn(t,i){t&1&&(a(0,"p",11),y(1,"Reportes"),l())}var we=class t{router=_(nt);expanded=g(!0);company;route=Rt(this.router.events.pipe(Be(i=>i instanceof et),De(i=>i.urlAfterRedirects.split("/")),De(i=>i[i.length-1])),{initialValue:""});constructor(){let{name:i}=Ce,{name:e,img:n}=Nt;this.company=g({userName:i,companyName:e,img:"datos/hc_tech.png"})}toggleMenu=()=>this.expanded.update(i=>!i);getSeverity(i){return this.route()===i?"primary":"contrast"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-sidebar"]],decls:27,vars:23,consts:[[1,"aside",3,"ngClass"],[1,"toogle-btn",3,"click"],[1,"pi","pi-angle-double-left","icon","primary-icon","text-2xl",3,"ngClass"],[1,"flex","flex-column","py-3","px-3"],[1,"flex","gap-1","w-full","gap-2","justify-center"],["size","large","shape","circle",3,"image","ngClass"],[1,"mr-auto"],[1,"divider"],[1,"w-full","flex","flex-column","gap-4"],["routerLink","/panel/employees","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-users"],["pButtonLabel",""],["routerLink","/panel/shifts","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-book","text-xl"],["routerLink","/panel/schedules","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-clock","text-xl"],["routerLink","/panel/calendar","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-calendar-clock","text-xl"],["routerLink","/panel/procedures","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-copy","text-xl"],["routerLink","/panel/reports","pButton","",1,"w-full","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-chart-line","text-xl"],[1,"text-lg","text-white","font-bold"],[1,"text-sm","t-gray"]],template:function(e,n){e&1&&(a(0,"aside",0)(1,"div",1),h("click",function(){return n.toggleMenu()}),m(2,"i",2),l(),a(3,"div",3)(4,"div",4),m(5,"p-avatar",5),b(6,In,5,2,"div",6),l(),m(7,"div",7),a(8,"div",8)(9,"a",9),m(10,"i",10),b(11,En,2,0,"p",11),l(),a(12,"a",12),m(13,"i",13),b(14,Ln,2,0,"p",11),l(),a(15,"a",14),m(16,"i",15),b(17,On,2,0,"p",11),l(),a(18,"a",16),m(19,"i",17),b(20,Fn,2,0,"p",11),l(),a(21,"a",18),m(22,"i",19),b(23,Pn,2,0,"p",11),l(),a(24,"a",20),m(25,"i",21),b(26,Vn,2,0,"p",11),l()()()()),e&2&&(p("ngClass",n.expanded()?"expanded-aside":"short-aside"),s(2),p("ngClass",n.expanded()?"pi-angle-double-left":"pi-angle-double-right"),s(3),p("image",n.company().img)("ngClass",n.expanded()?"mr-2":"m-auto"),s(),v(n.expanded()?6:-1),s(3),p("severity",n.getSeverity("employees"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),s(2),v(n.expanded()?11:-1),s(),p("severity",n.getSeverity("shifts"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),s(2),v(n.expanded()?14:-1),s(),p("severity",n.getSeverity("schedules"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),s(2),v(n.expanded()?17:-1),s(),p("severity",n.getSeverity("calendar"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),s(2),v(n.expanded()?20:-1),s(),p("severity",n.getSeverity("procedures"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),s(2),v(n.expanded()?23:-1),s(),p("severity",n.getSeverity("reports"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),s(2),v(n.expanded()?26:-1))},dependencies:[L,G,te,ee,_e,z,Mt,Tt,Dt,he,it],styles:[".aside[_ngcontent-%COMP%]{position:relative;height:100dvh;background-color:var(--bg_primary)}.short-aside[_ngcontent-%COMP%]{width:5dvw}.expanded-aside[_ngcontent-%COMP%]{width:14dvw}.toogle-btn[_ngcontent-%COMP%]{position:absolute;top:30px;right:-10px}.btn[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%]{width:85%}.divider[_ngcontent-%COMP%]{height:1px;margin:20px auto 50px;background-color:var(--light-gray)}"]})};var zn=["*"],An=`
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
`,Bn={root:"p-overlaybadge"},Qt=(()=>{class t extends Y{name="overlaybadge";theme=An;classes=Bn;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),jn=(()=>{class t extends W{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(e){this._size=e,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=_(Qt);constructor(){super()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",S],size:"size"},features:[$([Qt]),H],ngContentSelectors:zn,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(n,o){n&1&&(q(),a(0,"div",0),Q(1),m(2,"p-badge",1),l()),n&2&&(s(2),pe(o.style),p("styleClass",o.styleClass)("badgeSize",o.badgeSize)("severity",o.severity)("value",o.value)("badgeDisabled",o.badgeDisabled))},dependencies:[L,kt,xt,T],encapsulation:2,changeDetection:0})}return t})(),Zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=N({imports:[jn,T,T]})}return t})();var Nn=["content"],Rn=["*"],Hn=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),qn=(t,i)=>({value:t,params:i}),Qn=t=>({closeCallback:t});function Zn(t,i){}function $n(t,i){t&1&&w(0,Zn,0,0,"ng-template")}function Un(t,i){if(t&1){let e=M();a(0,"div",1),h("click",function(o){u(e);let r=c();return f(r.onOverlayClick(o))})("@animation.start",function(o){u(e);let r=c();return f(r.onAnimationStart(o))})("@animation.done",function(o){u(e);let r=c();return f(r.onAnimationEnd(o))}),a(1,"div",2),h("click",function(o){u(e);let r=c();return f(r.onContentClick(o))})("mousedown",function(o){u(e);let r=c();return f(r.onContentClick(o))}),Q(2),w(3,$n,1,0,null,3),l()()}if(t&2){let e=c();Z(e.cn(e.cx("root"),e.styleClass)),p("ngStyle",e.style)("@animation",ae(14,qn,e.overlayVisible?"open":"close",ae(11,Hn,e.showTransitionOptions,e.hideTransitionOptions))),F("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),s(),Z(e.cx("content")),s(2),p("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ce(17,Qn,e.onCloseClick.bind(e)))}}var Gn=`
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

`,Yn={root:"p-popover p-component",content:"p-popover-content"},$t=(()=>{class t extends Y{name="popover";theme=Gn;classes=Yn;static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})(),ze=(()=>{class t extends W{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new A;onHide=new A;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=_($t);zone=_(He);overlayService=_(bt);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(fe(this.platformId)&&!this.documentClickListener){let e=yt()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,n)&&(this.destroyCallback=()=>{this.show(null,n||e.currentTarget||e.target)}),this.hide()):this.show(e,n))}show(e,n){n&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=n||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let n=e.target;this.selfClick=e.offsetX<n.clientWidth&&e.offsetY<n.clientHeight}hasTargetChanged(e,n){return this.target!=null&&this.target!==(n||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):ye(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&P.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),ft(this.container,this.target,!1);let e=Ee(this.container),n=Ee(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;e.left<n.left&&(r=n.left-e.left-parseFloat(o)*2),this.container?.style.setProperty(vt("popover.arrow.left").name,`${r}px`),e.top<n.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),se(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&P.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=ht(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!gt()&&this.hide()}bindDocumentResizeListener(){if(fe(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){fe(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new wt(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&P.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=V(t)))(o||t)}})();static \u0275cmp=C({type:t,selectors:[["p-popover"]],contentQueries:function(n,o,r){if(n&1&&(I(r,Nn,4),I(r,ge,4)),n&2){let d;x(d=k())&&(o.contentTemplate=d.first),x(d=k())&&(o.templates=d)}},hostBindings:function(n,o){n&1&&h("keydown.escape",function(d){return o.onEscapeKeydown(d)},Re)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",S],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",S],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",de],focusOnShow:[2,"focusOnShow","focusOnShow",S],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[$([$t]),H],ngContentSelectors:Rn,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&(q(),w(0,Un,4,19,"div",0)),n&2&&p("ngIf",o.render)},dependencies:[L,me,ue,Je,T],encapsulation:2,data:{animation:[be("animation",[ve("void",B({transform:"scaleY(0.8)",opacity:0})),ve("close",B({opacity:0})),ve("open",B({transform:"translateY(0)",opacity:1})),J("void => open",K("{{showTransitionParams}}")),J("open => close",K("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),Ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=R({type:t});static \u0275inj=N({imports:[ze,T,T]})}return t})();var Xn=["op"];function Kn(t,i){if(t&1&&(a(0,"p",5),y(1),l()),t&2){let e=c();s(),E(e.notifications().length)}}function Jn(t,i){if(t&1&&(a(0,"p",12),y(1),l()),t&2){let e=i.$implicit;s(),Ye(" ",e.description," ")}}function ei(t,i){t&1&&(a(0,"span",13),y(1,"No hay notificaciones"),l())}var xe=class t{op;companyAction=U();notifications=g([{id:1,description:"asd"},{id:2,description:"asdasd"}]);user=g(Ce);title=g("Empleados");toggle(i){this.op.toggle(i)}openCompanyForm(){this.companyAction.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-header"]],viewQuery:function(e,n){if(e&1&&re(Xn,5),e&2){let o;x(o=k())&&(n.op=o.first)}},outputs:{companyAction:"companyAction"},decls:19,vars:7,consts:[["op",""],[1,"header","w-full","flex","align-items-center","gap-3","px-3","py-2"],[1,"text-3xl","flex-grow-1","text-center"],["label","Administraci\xF3n",3,"onClick"],[1,"pi","pi-bell","icon","notify-icon","text-xl",3,"click","ngClass"],[1,"badge","text-center"],[1,"card","flex","gap-2","h-fit"],["size","large","shape","circle",1,"mr-2",3,"image"],[1,"flex-col","text-center","m-auto"],[1,"text-xl","font-bold"],[1,"text-sm","t-gray"],[1,"flex","flex-column","gap-4"],[1,"font-medium","block","mb-2","w-16rem"],[1,"font-medium","block","mb-2"]],template:function(e,n){if(e&1){let o=M();a(0,"header",1)(1,"p",2),y(2),l(),a(3,"p-button",3),h("onClick",function(){return u(o),f(n.openCompanyForm())}),l(),a(4,"i",4),h("click",function(d){return u(o),f(n.toggle(d))}),b(5,Kn,2,1,"p",5),l(),a(6,"div",6),m(7,"p-avatar",7),a(8,"div",8)(9,"p",9),y(10),l(),a(11,"p",10),y(12),l()()(),a(13,"p-popover",null,0)(15,"div",11),Ze(16,Jn,2,1,"p",12,Qe,!1,ei,2,0,"span",13),l()()()}e&2&&(s(2),E(n.title()),s(2),p("ngClass",n.notifications().length>0?"primary-icon":"secundary-icon"),s(),v(n.notifications().length>0?5:-1),s(2),p("image",n.user().img),s(3),E(n.user().name),s(2),E(n.user().workstation),s(4),$e(n.notifications()))},dependencies:[L,G,z,X,te,ee,Ut,ze,Zt],styles:[".header[_ngcontent-%COMP%]{justify-content:space-around;border:1px solid var(--gray)}.notify-icon[_ngcontent-%COMP%]{padding:8px 6px;position:relative}.badge[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-8px;background-color:var(--red);width:16px;height:16px;font-size:small;border-radius:10px;line-height:16px;font-weight:700}"]})};var Gt={id:"",name:"",web_page:"",address:"",company_name:"",fundation_year:new Date,email:"",phone_number:0,image:""};function ti(t,i){if(t&1&&m(0,"p-avatar",6),t&2){let e=c();p("image",e.currentCompany().image)}}function ni(t,i){t&1&&m(0,"p-avatar",7)}var ke=class t{companies=Ke.required();close=U();pushCompany=U();deleteyCompany=U();fb=_(dt);currentCompany=g(Gt);labelAction=g("Seleccionar");companyForm;constructor(){this.companyForm=this.fb.group({id:[""],image:[""],name:["",[O.required]],web_page:["",[O.required]],address:["",[O.required]],company_name:["",[O.required]],fundation_year:[void 0,[O.required]],email:["",[O.required,O.email]],phone_number:[void 0,[O.required,O.pattern(/^\w{11,13}$/)]]}),this.companyForm.valueChanges.pipe(je(300)).subscribe({next:i=>{if(typeof i.name=="object"){this.labelAction.set("Seleccionar"),this.currentCompany.set(i.name);let e=i.name,{image:o}=e,r=Te(e,["image"]);this.companyForm.patchValue(ie({},r),{emitEvent:!1})}else{this.labelAction.set("Guardar");let n=i,{image:o}=n,r=Te(n,["image"]);this.currentCompany.update(d=>ie(ie({},d),r))}}})}loadFile(i){let n=i.target.files?.[0],o=new FileReader;o.onload=()=>this.companyForm.controls.image.setValue(o.result),o.readAsDataURL(n)}submit(){this.companyForm.invalid||this.pushCompany.emit(this.currentCompany())}delete(){this.deleteyCompany.emit(this.currentCompany().id)}closeForm(){this.close.emit()}includesCompany(){return this.companies().some(i=>i.id===this.currentCompany().id)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-company"]],inputs:{companies:[1,"companies"]},outputs:{close:"close",pushCompany:"pushCompany",deleteyCompany:"deleteyCompany"},decls:25,vars:8,consts:[[1,"flex","justify-content-center","align-items-center","curtain","absolute","left-0","top-0","w-screen","h-screen","z-1"],[1,"flex","flex-column","w-5","h-auto","bg-white","z-2","py-1","px-3"],[1,"mx-2","my-3"],[1,"w-full","flex"],[1,"relative","w-fit","h-fit","px-1"],["type","file","id","file-input","accept","image/*",2,"display","none",3,"change"],["size","xlarge","shape","circle",1,"mx-auto",3,"image"],["icon","pi pi-user","size","xlarge","shape","circle",1,"mx-auto"],["for","file-input"],[1,"text-xs","p-1","pi","pi-pencil","absolute","bottom-0","right-0","bg-light-gray","border-circle"],["action","",1,"flex","flex-column","gap-2","px-3","w-full",3,"formGroup"],["size","small","formControlName","name","optionLabel","name","placeholder","Compa\xF1ia",1,"w-full",3,"options","editable"],["pSize","small","pInputText","","formControlName","web_page","type","text","placeholder","P\xE1gina web",1,"w-full"],["pSize","small","pInputText","","formControlName","address","type","text","placeholder","Direcci\xF3n",1,"w-full"],["pSize","small","pInputText","","formControlName","company_name","type","text","placeholder","Raz\xF3n social",1,"w-full"],[1,"w-full","flex","gap-1"],["size","small","fluid","","formControlName","fundation_year","placeholder","A\xF1o fundaci\xF3n",1,"w-4",3,"iconDisplay","showIcon"],["pSize","small","pInputText","","formControlName","email","type","email","placeholder","Email",1,"w-8"],["pSize","small","pInputText","","formControlName","id","type","text","placeholder","CUIT",1,"w-4"],["pSize","small","pInputText","","formControlName","phone_number","type","number","placeholder","Tel\xE9fono",1,"w-8"],[1,"flex","my-3","justify-content-end","gap-3"],["size","small","severity","danger","label","Eliminar",3,"onClick","disabled"],["size","small","severity","danger","outlined","","label","Cancelar",3,"onClick"],["size","small","severity","primary",3,"onClick","label"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1),m(2,"p-divider",2),a(3,"div",3)(4,"div",4)(5,"input",5),h("change",function(r){return n.loadFile(r)}),l(),b(6,ti,1,1,"p-avatar",6)(7,ni,1,0,"p-avatar",7),a(8,"label",8),m(9,"i",9),l()(),a(10,"form",10),m(11,"p-select",11)(12,"input",12)(13,"input",13)(14,"input",14),a(15,"div",15),m(16,"p-datepicker",16)(17,"input",17),l(),a(18,"div",15),m(19,"input",18)(20,"input",19),l(),a(21,"div",20)(22,"p-button",21),h("onClick",function(){return n.delete()}),l(),a(23,"p-button",22),h("onClick",function(){return n.closeForm()}),l(),a(24,"p-button",23),h("onClick",function(){return n.submit()}),l()()()()()()),e&2&&(s(6),v(n.currentCompany().image?6:7),s(4),p("formGroup",n.companyForm),s(),p("options",n.companies())("editable",!0),s(5),p("iconDisplay","input")("showIcon",!0),s(6),p("disabled",!n.includesCompany()),s(2),p("label",n.labelAction()))},dependencies:[_e,Lt,z,X,Ft,Ot,te,ee,Vt,Pt,Et,It,mt,st,ot,lt,rt,at,pt,ct],encapsulation:2})};function ii(){let t=["Tech","Eco","Agro","Bio","Global","Digital","Smart","Nova","Innova","Blue","Green","Urban","Next","Vision","Prime"],i=["Solutions","Systems","Group","Labs","Corp","Works","Soft","Industries","Consulting","Enterprises","Services","Networks","Holdings"],e=["S.A.","S.R.L.","S.A.S.","C.A.","Ltda."],n=t[Math.floor(Math.random()*t.length)]+i[Math.floor(Math.random()*i.length)],o=`${n} ${e[Math.floor(Math.random()*e.length)]}`;return{name:n,company_name:o}}function oi(t=!0){let i=["Calle","Avenida","Bulevar"],e=["San Mart\xEDn","Belgrano","Libertador","Espa\xF1a","C\xF3rdoba","Junio"],n=i[Math.floor(Math.random()*i.length)],o=e[Math.floor(Math.random()*e.length)],r=t?Math.floor(Math.random()*4800)+100:"";return`${n} ${o} ${r}`.trim()}function ri(){let t=new Date,i=t.getFullYear()-60,e=t.getFullYear()-10,n=Math.floor(Math.random()*(e-i+1))+i;return new Date(n,Math.floor(Math.random()*12),Math.floor(Math.random()*28)+1)}var Se="0123456789",ai=()=>"##-########-#".replace(/[#]/g,()=>Se[Math.floor(Math.random()*Se.length)]);function Yt(t){let i=[],e=["com","com.ar","net","org"],n=["info","contacto","ventas","soporte"];for(let o=0;o<t;o++){let{name:r,company_name:d}=ii(),le=e[Math.floor(Math.random()*e.length)],D=`${r.replace(" ","").toLowerCase()}.${le}`,Wt=parseInt("549XX########".replace(/[X#]/g,()=>Se[Math.floor(Math.random()*Se.length)]));i.push({id:ai(),name:r,company_name:d,web_page:`https://www.${D}`,address:oi(!0),fundation_year:ri(),email:`${n[Math.floor(Math.random()*n.length)]}@${D}`,phone_number:Wt,image:"https://store-images.s-microsoft.com/image/apps.20966.13599037783181022.b05b7adf-6b7a-44ae-9a70-9dc9370ea7e6.4cd88c60-6ff1-4b0f-aed6-8e2efa5629c1"})}return i}function si(t,i){if(t&1){let e=M();a(0,"app-company",6),h("close",function(){u(e);let o=c();return f(o.toggleCompanyForm(!1))})("pushCompany",function(o){u(e);let r=c();return f(r.entryCompany(o))})("deleteyCompany",function(o){u(e);let r=c();return f(r.deleteCompany(o))})("close",function(){u(e);let o=c();return f(o.toggleCompanyForm(!1))}),l()}if(t&2){let e=c();p("companies",e.companies())}}var Ae=class t{visible=!1;companyForm=g(!1);companies=g(Yt(2));toggleCompanyForm(i){this.companyForm.set(i)}entryCompany(i){this.companies().some(e=>e.id===i.id)?this.companies.update(e=>e.map(n=>n.id===i.id?i:n)):this.companies.update(e=>[...e,i]),this.companyForm.set(!1)}deleteCompany(i){this.companies.update(e=>e.filter(n=>n.id!==i)),this.companyForm.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-home-panel"]],decls:8,vars:1,consts:[["routerContainer",""],[1,"flex","h-full"],[1,"flex","flex-column","h-screen","min-h-0","w-full"],[1,"flex-shrink-0",3,"companyAction"],[1,"flex","flex-grow-1","min-h-0","w-full"],[3,"companies"],[3,"close","pushCompany","deleteyCompany","companies"]],template:function(e,n){if(e&1){let o=M();a(0,"main",1),m(1,"app-sidebar"),a(2,"div",2)(3,"app-header",3),h("companyAction",function(){return u(o),f(n.toggleCompanyForm(!0))}),l(),a(4,"div",4,0),m(6,"router-outlet"),l()()(),b(7,si,1,1,"app-company",5)}e&2&&(s(7),v(n.companyForm()?7:-1))},dependencies:[jt,he,tt,z,we,xe,ke],encapsulation:2})};export{Ae as default};
