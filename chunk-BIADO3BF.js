import{c as Ue,d as $e,e as Ye,f as Ge,h as ce}from"./chunk-NX3Q7G4J.js";import{a as lt,c as Z}from"./chunk-M6YKJNUI.js";import{c as fe,d as X,f as $,g as he,h as J,i as Ie,j as De}from"./chunk-36JN3LZY.js";import{Aa as ue,Ba as K,C as pe,E as Xe,K as Se,O as Je,P as et,S as Te,ba as tt,ea as me,fa as h,i as q,ia as nt,ja as R,k as W,l as qe,la as N,m as le,n as S,na as it,oa as ot,pa as rt,r as de,ra as at,sa as st,u as oe,v as We,xa as dt,ya as ct,z as Ke,za as pt}from"./chunk-PIWCS7JX.js";import{$a as Ve,Bb as G,Cb as I,Db as u,Eb as E,Fb as Qe,Ja as b,Jb as A,Ka as j,L as xe,Lb as ae,Ma as B,Mb as ne,Na as f,O as L,P as O,Pa as H,Pb as ie,Qa as Pe,T as v,Tb as Ze,Xa as Fe,Y as g,Ya as w,Z as y,Za as D,_ as ze,_a as M,ab as Ae,ac as k,ba as Ce,bb as Re,bc as se,cb as d,db as s,eb as l,fa as z,fb as m,ja as _,jb as Ne,kb as He,lb as ee,mb as Q,ob as T,pb as c,q as we,qb as P,rb as F,sb as V,tb as te,ua as je,ub as x,vb as C,wa as Be,x as Oe,xa as a,yb as ke}from"./chunk-VW7GKL7F.js";var mt=`
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
`;var Mt=["header"],Et=["footer"],Lt=["content"],Ot=["closeicon"],zt=["headless"],jt=["container"],Bt=["closeButton"],Pt=["*"],Ft=(t,o)=>({transform:t,transition:o}),Vt=t=>({value:"visible",params:t});function At(t,o){t&1&&ee(0)}function Rt(t,o){if(t&1&&f(0,At,1,0,"ng-container",4),t&2){let e=c(2);d("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Nt(t,o){t&1&&ee(0)}function Ht(t,o){if(t&1&&(s(0,"div"),u(1),l()),t&2){let e=c(3);I(e.cx("title")),a(),E(e.header)}}function Qt(t,o){t&1&&(ze(),m(0,"svg",11)),t&2&&w("data-pc-section","closeicon")}function Zt(t,o){}function qt(t,o){t&1&&f(0,Zt,0,0,"ng-template")}function Ut(t,o){if(t&1&&f(0,Qt,1,1,"svg",10)(1,qt,1,0,null,4),t&2){let e=c(4);d("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),a(),d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function $t(t,o){if(t&1){let e=Q();s(0,"p-button",9),T("onClick",function(i){g(e);let r=c(3);return y(r.close(i))})("keydown.enter",function(i){g(e);let r=c(3);return y(r.close(i))}),f(1,Ut,2,2,"ng-template",null,1,ie),l()}if(t&2){let e=c(3);d("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps),Fe("ariaLabel",e.ariaCloseLabel),w("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Yt(t,o){t&1&&ee(0)}function Gt(t,o){t&1&&ee(0)}function Wt(t,o){if(t&1&&(Ne(0),s(1,"div",5),f(2,Gt,1,0,"ng-container",4),l(),He()),t&2){let e=c(3);a(),d("ngClass",e.cx("footer")),w("data-pc-section","footer"),a(),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Kt(t,o){if(t&1&&(s(0,"div",5),f(1,Nt,1,0,"ng-container",4)(2,Ht,2,3,"div",6)(3,$t,3,5,"p-button",7),l(),s(4,"div",5),F(5),f(6,Yt,1,0,"ng-container",4),l(),f(7,Wt,3,3,"ng-container",8)),t&2){let e=c(2);d("ngClass",e.cx("header")),w("data-pc-section","header"),a(),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),d("ngIf",e.header),a(),d("ngIf",e.showCloseIcon&&e.closable),a(),d("ngClass",e.cx("content")),w("data-pc-section","content"),a(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),a(),d("ngIf",e.footerTemplate||e._footerTemplate)}}function Xt(t,o){if(t&1){let e=Q();s(0,"div",3,0),T("@panelState.start",function(i){g(e);let r=c();return y(r.onAnimationStart(i))})("@panelState.done",function(i){g(e);let r=c();return y(r.onAnimationEnd(i))})("keydown",function(i){g(e);let r=c();return y(r.onKeyDown(i))}),D(2,Rt,1,1,"ng-container")(3,Kt,8,9),l()}if(t&2){let e=c();G(e.style),I(e.cn(e.cx("root"),e.styleClass)),d("@panelState",ae(11,Vt,ne(8,Ft,e.transformOptions,e.transitionOptions))),w("data-pc-name","sidebar")("data-pc-section","root"),a(2),M(e.headlessTemplate||e._headlessTemplate?2:3)}}var Jt=`
    ${mt}

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
`,en={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ut=(()=>{class t extends R{name="drawer";theme=Jt;classes=en;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var tn=Ie([$({transform:"{{transform}}",opacity:0}),X("{{transition}}")]),nn=Ie([X("{{transition}}",$({transform:"{{transform}}",opacity:0}))]),ft="translate3d(-100%, 0px, 0px)",on=(()=>{class t extends N{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=ft}header;maskStyle;closable=!0;onShow=new H;onHide=new H;visibleChange=new H;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=ft;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=v(ut);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&Z.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(Te(this.mask,"style",this.getMaskStyle()),Te(this.mask,"style",`z-index: ${i}`),oe(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&it())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(We(this.mask,"p-overlay-mask-enter"),oe(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&ot(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),Z.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&pe(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===Z.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Z.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,r){if(n&1&&(V(r,Mt,4),V(r,Et,4),V(r,Lt,4),V(r,Ot,4),V(r,zt,4),V(r,me,4)),n&2){let p;x(p=C())&&(i.headerTemplate=p.first),x(p=C())&&(i.footerTemplate=p.first),x(p=C())&&(i.contentTemplate=p.first),x(p=C())&&(i.closeIconTemplate=p.first),x(p=C())&&(i.headlessTemplate=p.first),x(p=C())&&(i.templates=p)}},viewQuery:function(n,i){if(n&1&&(te(jt,5),te(Bt,5)),n&2){let r;x(r=C())&&(i.containerViewChild=r.first),x(r=C())&&(i.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",k],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",se],modal:[2,"modal","modal",k],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",k],showCloseIcon:[2,"showCloseIcon","showCloseIcon",k],closeOnEscape:[2,"closeOnEscape","closeOnEscape",k],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",k]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[A([ut]),B],ngContentSelectors:Pt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(P(),f(0,Xt,4,13,"div",2)),n&2&&d("ngIf",i.visible)},dependencies:[S,q,W,le,ue,lt,h],encapsulation:2,data:{animation:[fe("panelState",[J("void => visible",[De(tn)]),J("visible => void",[De(nn)])])]},changeDetection:0})}return t})(),ht=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=O({imports:[on,h,h]})}return t})();var vt=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var rn=["*"];function an(t,o){if(t&1&&(s(0,"span"),u(1),l()),t&2){let e=c();I(e.cx("label")),a(),E(e.label)}}function sn(t,o){if(t&1&&m(0,"span",4),t&2){let e=c(2);I(e.icon),d("ngClass",e.cx("icon"))}}function ln(t,o){if(t&1&&f(0,sn,1,3,"span",3),t&2){let e=c(),n=ke(5);d("ngIf",e.icon)("ngIfElse",n)}}function dn(t,o){if(t&1){let e=Q();s(0,"img",6),T("error",function(i){g(e);let r=c(2);return y(r.imageError(i))}),l()}if(t&2){let e=c(2);d("src",e.image,je),w("aria-label",e.ariaLabel)}}function cn(t,o){if(t&1&&f(0,dn,1,2,"img",5),t&2){let e=c();d("ngIf",e.image)}}var pn={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},gt=(()=>{class t extends R{name="avatar";theme=vt;classes=pn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var re=(()=>{class t extends N{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new H;_componentStyle=v(gt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,i){n&2&&(w("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),I(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[A([gt]),B],ngContentSelectors:rn,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,i){if(n&1&&(P(),F(0),f(1,an,2,3,"span",2)(2,ln,1,2,"ng-template",null,0,ie)(4,cn,1,1,"ng-template",null,1,ie)),n&2){let r=ke(3);a(),d("ngIf",i.label)("ngIfElse",r)}},dependencies:[S,q,W,h],encapsulation:2,changeDetection:0})}return t})(),ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=O({imports:[re,h,h]})}return t})();var ye={name:"Pedro Portillo",rol:"Supervisor",img:"datos/avatar.jpg"},bt={name:"HC-Tech",img:""};var _t=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var mn=["*"],un={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},fn={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},wt=(()=>{class t extends R{name="divider";theme=_t;classes=fn;inlineStyles=un;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var hn=(()=>{class t extends N{styleClass;layout="horizontal";type="solid";align;_componentStyle=v(wt);static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(n,i){n&2&&(w("aria-orientation",i.layout),G(i.sx("root")),I(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[A([wt]),B],ngContentSelectors:mn,decls:2,vars:2,template:function(n,i){n&1&&(P(),s(0,"div"),F(1),l()),n&2&&I(i.cx("content"))},dependencies:[S,h],encapsulation:2,changeDetection:0})}return t})(),xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=O({imports:[hn]})}return t})();function Ct(t,o){let n=!o?.manualCleanup?o?.injector?.get(Ce)??v(Ce):null,i=vn(o?.equal),r;o?.requireSync?r=z({kind:0},{equal:i}):r=z({kind:1,value:o?.initialValue},{equal:i});let p,Le=t.subscribe({next:U=>r.set({kind:1,value:U}),error:U=>{r.set({kind:2,error:U}),p?.()},complete:()=>{p?.()}});if(o?.requireSync&&r().kind===0)throw new xe(601,!1);return p=n?.onDestroy(Le.unsubscribe.bind(Le)),Ze(()=>{let U=r();switch(U.kind){case 1:return U.value;case 2:throw U.error;case 0:throw new xe(601,!1)}},{equal:o?.equal})}function vn(t=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&t(o.value,e.value)}function bn(t,o){if(t&1&&(s(0,"div",6)(1,"p",22),u(2),l(),s(3,"p",23),u(4),l()()),t&2){let e=c();a(2),E(e.company().companyName),a(2),E(e.company().userName)}}function _n(t,o){t&1&&(s(0,"p",11),u(1,"Empleados"),l())}function wn(t,o){t&1&&(s(0,"p",11),u(1,"Turnos"),l())}function xn(t,o){t&1&&(s(0,"p",11),u(1,"Horarios"),l())}function Cn(t,o){t&1&&(s(0,"p",11),u(1,"Calendario"),l())}function kn(t,o){t&1&&(s(0,"p",11),u(1,"Tramites"),l())}function Sn(t,o){t&1&&(s(0,"p",11),u(1,"Reportes"),l())}var be=class t{router=v(Ye);expanded=z(!0);company;route=Ct(this.router.events.pipe(Oe(o=>o instanceof Ue),we(o=>o.urlAfterRedirects.split("/")),we(o=>o[o.length-1])),{initialValue:""});constructor(){let{name:o}=ye,{name:e,img:n}=bt;this.company=z({userName:o,companyName:e,img:"datos/hc_tech.png"})}toggleMenu=()=>this.expanded.update(o=>!o);getSeverity(o){return this.route()===o?"primary":"contrast"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-sidebar"]],decls:27,vars:23,consts:[[1,"aside",3,"ngClass"],[1,"toogle-btn",3,"click"],[1,"pi","pi-angle-double-left","icon","primary-icon","text-2xl",3,"ngClass"],[1,"flex","flex-column","py-3","px-3"],[1,"flex","gap-1","w-full","gap-2","justify-center"],["size","large","shape","circle",3,"image","ngClass"],[1,"mr-auto"],[1,"divider"],[1,"w-full","flex","flex-column","gap-4"],["routerLink","/panel/empleados","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-users"],["pButtonLabel",""],["routerLink","/panel/turnos","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-book","text-xl"],["routerLink","/panel/horarios","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-clock","text-xl"],["routerLink","/panel/calendario","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-calendar-clock","text-xl"],["routerLink","/panel/tramites","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-copy","text-xl"],["routerLink","/panel/reportes","pButton","",1,"w-full","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-chart-line","text-xl"],[1,"text-xl","text-white","bold"],[1,"t-gray"]],template:function(e,n){e&1&&(s(0,"aside",0)(1,"div",1),T("click",function(){return n.toggleMenu()}),m(2,"i",2),l(),s(3,"div",3)(4,"div",4),m(5,"p-avatar",5),D(6,bn,5,2,"div",6),l(),m(7,"div",7),s(8,"div",8)(9,"a",9),m(10,"i",10),D(11,_n,2,0,"p",11),l(),s(12,"a",12),m(13,"i",13),D(14,wn,2,0,"p",11),l(),s(15,"a",14),m(16,"i",15),D(17,xn,2,0,"p",11),l(),s(18,"a",16),m(19,"i",17),D(20,Cn,2,0,"p",11),l(),s(21,"a",18),m(22,"i",19),D(23,kn,2,0,"p",11),l(),s(24,"a",20),m(25,"i",21),D(26,Sn,2,0,"p",11),l()()()()),e&2&&(d("ngClass",n.expanded()?"expanded-aside":"short-aside"),a(2),d("ngClass",n.expanded()?"pi-angle-double-left":"pi-angle-double-right"),a(3),d("image",n.company().img)("ngClass",n.expanded()?"mr-2":"m-auto"),a(),M(n.expanded()?6:-1),a(3),d("severity",n.getSeverity("empleados"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),M(n.expanded()?11:-1),a(),d("severity",n.getSeverity("turnos"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),M(n.expanded()?14:-1),a(),d("severity",n.getSeverity("horarios"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),M(n.expanded()?17:-1),a(),d("severity",n.getSeverity("calendario"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),M(n.expanded()?20:-1),a(),d("severity",n.getSeverity("tramites"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),M(n.expanded()?23:-1),a(),d("severity",n.getSeverity("reportes"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),M(n.expanded()?26:-1))},dependencies:[S,q,ge,re,xt,K,pt,dt,ct,ce,Ge],styles:[".aside[_ngcontent-%COMP%]{position:relative;height:100vh;background-color:var(--bg_primary)}.short-aside[_ngcontent-%COMP%]{width:5dvw}.expanded-aside[_ngcontent-%COMP%]{width:15dvw}.toogle-btn[_ngcontent-%COMP%]{position:absolute;top:30px;right:-10px}.btn[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%]{width:85%}.divider[_ngcontent-%COMP%]{height:1px;margin:20px auto 50px;background-color:var(--light-gray)}"]})};var Tn=["*"],In=`
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
`,Dn={root:"p-overlaybadge"},St=(()=>{class t extends R{name="overlaybadge";theme=In;classes=Dn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),Mn=(()=>{class t extends N{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(e){this._size=e,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=v(St);constructor(){super()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",k],size:"size"},features:[A([St]),B],ngContentSelectors:Tn,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(n,i){n&1&&(P(),s(0,"div",0),F(1),m(2,"p-badge",1),l()),n&2&&(a(2),G(i.style),d("styleClass",i.styleClass)("badgeSize",i.badgeSize)("severity",i.severity)("value",i.value)("badgeDisabled",i.badgeDisabled))},dependencies:[S,st,at,h],encapsulation:2,changeDetection:0})}return t})(),Tt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=O({imports:[Mn,h,h]})}return t})();var En=["content"],Ln=["*"],On=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),zn=(t,o)=>({value:t,params:o}),jn=t=>({closeCallback:t});function Bn(t,o){}function Pn(t,o){t&1&&f(0,Bn,0,0,"ng-template")}function Fn(t,o){if(t&1){let e=Q();s(0,"div",1),T("click",function(i){g(e);let r=c();return y(r.onOverlayClick(i))})("@animation.start",function(i){g(e);let r=c();return y(r.onAnimationStart(i))})("@animation.done",function(i){g(e);let r=c();return y(r.onAnimationEnd(i))}),s(1,"div",2),T("click",function(i){g(e);let r=c();return y(r.onContentClick(i))})("mousedown",function(i){g(e);let r=c();return y(r.onContentClick(i))}),F(2),f(3,Pn,1,0,null,3),l()()}if(t&2){let e=c();I(e.cn(e.cx("root"),e.styleClass)),d("ngStyle",e.style)("@animation",ne(14,zn,e.overlayVisible?"open":"close",ne(11,On,e.showTransitionOptions,e.hideTransitionOptions))),w("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),a(),I(e.cx("content")),a(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ae(17,jn,e.onCloseClick.bind(e)))}}var Vn=`
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

`,An={root:"p-popover p-component",content:"p-popover-content"},It=(()=>{class t extends R{name="popover";theme=Vn;classes=An;static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),Me=(()=>{class t extends N{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new H;onHide=new H;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=v(It);zone=v(Pe);overlayService=v(tt);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(de(this.platformId)&&!this.documentClickListener){let e=Je()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{this.dismissable&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,n)&&(this.destroyCallback=()=>{this.show(null,n||e.currentTarget||e.target)}),this.hide()):this.show(e,n))}show(e,n){n&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=n||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let n=e.target;this.selfClick=e.offsetX<n.clientWidth&&e.offsetY<n.clientHeight}hasTargetChanged(e,n){return this.target!=null&&this.target!==(n||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):pe(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&Z.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Ke(this.container,this.target,!1);let e=Se(this.container),n=Se(this.target),i=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;e.left<n.left&&(r=n.left-e.left-parseFloat(i)*2),this.container?.style.setProperty(nt("popover.arrow.left").name,`${r}px`),e.top<n.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),oe(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&Z.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=Xe(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!et()&&this.hide()}bindDocumentResizeListener(){if(de(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){de(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new rt(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&Z.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=_(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["p-popover"]],contentQueries:function(n,i,r){if(n&1&&(V(r,En,4),V(r,me,4)),n&2){let p;x(p=C())&&(i.contentTemplate=p.first),x(p=C())&&(i.templates=p)}},hostBindings:function(n,i){n&1&&T("keydown.escape",function(p){return i.onEscapeKeydown(p)},Be)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",k],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",k],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",se],focusOnShow:[2,"focusOnShow","focusOnShow",k],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[A([It]),B],ngContentSelectors:Ln,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(P(),f(0,Fn,4,19,"div",0)),n&2&&d("ngIf",i.render)},dependencies:[S,W,le,qe,h],encapsulation:2,data:{animation:[fe("animation",[he("void",$({transform:"scaleY(0.8)",opacity:0})),he("close",$({opacity:0})),he("open",$({transform:"translateY(0)",opacity:1})),J("void => open",X("{{showTransitionParams}}")),J("open => close",X("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),Dt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=j({type:t});static \u0275inj=O({imports:[Me,h,h]})}return t})();var Nn=["op"];function Hn(t,o){if(t&1&&(s(0,"p",5),u(1),l()),t&2){let e=c();a(),E(e.notifications().length)}}function Qn(t,o){if(t&1&&(s(0,"p",12),u(1),l()),t&2){let e=o.$implicit;a(),Qe(" ",e.description," ")}}function Zn(t,o){t&1&&(s(0,"span",13),u(1,"No hay notificaciones"),l())}var _e=class t{op;notifications=z([{id:1,description:"asd"},{id:2,description:"asdasd"}]);user=z(ye);title=z("Empleados");toggle(o){this.op.toggle(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-header"]],viewQuery:function(e,n){if(e&1&&te(Nn,5),e&2){let i;x(i=C())&&(n.op=i.first)}},decls:19,vars:7,consts:[["op",""],[1,"header","w-full","flex","align-items-center","gap-3"],[1,"text-4xl","flex-grow-1","text-center"],["label","Administraci\xF3n"],[1,"pi","pi-bell","icon","notify-icon","text-2xl",3,"click","ngClass"],[1,"badge","text-center"],[1,"card","flex","gap-2","h-fit"],["size","xlarge","shape","circle",1,"mr-2",3,"image"],[1,"flex-col","text-center","m-auto"],[1,"text-xl","bold"],[1,"t-gray"],[1,"flex","flex-column","gap-4"],[1,"font-medium","block","mb-2","w-16rem"],[1,"font-medium","block","mb-2"]],template:function(e,n){if(e&1){let i=Q();s(0,"header",1)(1,"p",2),u(2),l(),m(3,"p-button",3),s(4,"i",4),T("click",function(p){return g(i),y(n.toggle(p))}),D(5,Hn,2,1,"p",5),l(),s(6,"div",6),m(7,"p-avatar",7),s(8,"div",8)(9,"p",9),u(10),l(),s(11,"p",10),u(12),l()()(),s(13,"p-popover",null,0)(15,"div",11),Ae(16,Qn,2,1,"p",12,Ve,!1,Zn,2,0,"span",13),l()()()}e&2&&(a(2),E(n.title()),a(2),d("ngClass",n.notifications().length>0?"primary-icon":"secundary-icon"),a(),M(n.notifications().length>0?5:-1),a(2),d("image",n.user().img),a(3),E(n.user().name),a(2),E(n.user().rol),a(4),Re(n.notifications()))},dependencies:[S,q,K,ue,ge,re,Dt,Me,Tt],styles:[".header[_ngcontent-%COMP%]{height:75px;padding:15px;justify-content:space-around;border:1px solid var(--gray)}.notify-icon[_ngcontent-%COMP%]{padding:8px 6px;position:relative}.badge[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-8px;background-color:var(--red);width:16px;height:16px;font-size:small;border-radius:10px;line-height:16px;font-weight:700}"]})};var Ee=class t{visible=!1;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-home-panel"]],decls:5,vars:0,consts:[[1,"flex"],[1,"w-full","flex","flex-column"]],template:function(e,n){e&1&&(s(0,"main",0),m(1,"app-sidebar"),s(2,"div",1),m(3,"app-header")(4,"router-outlet"),l()())},dependencies:[ht,ce,$e,K,be,_e],encapsulation:2})};export{Ee as default};
