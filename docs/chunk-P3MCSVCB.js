import{B as ge,C as g,E as it,F as N,H,I as rt,J as ot,K as at,L as st,M as lt,N as dt,O as ct,P as pt,Q as ut,R as ve,S as ee,a as $,b as J,c as $e,d as ue,e as S,f as me,i as Ue,j as Ye,k as Ge,l as Ke,n as fe,o as oe,p as We,q as Xe,r as he,s as Je,t as Me,u as et,v as tt,w as Ee,y as nt}from"./chunk-PSFAJOVE.js";import{c as ae,d as K,f as U,g as se,h as W,i as ye,j as be}from"./chunk-36JN3LZY.js";import{$ as Te,$a as Re,Ab as T,Bb as m,Cb as L,Db as Ze,Eb as R,Fb as ce,Gb as ie,Ha as f,Hb as re,Ia as B,K as Ie,Ka as D,La as h,Lb as Qe,M as z,N as A,Na as q,Oa as Be,R as v,Tb as k,Ub as pe,Va as Fe,W as y,Wa as x,X as b,Xa as M,Y as de,Ya as E,Za as Ve,_a as je,ab as d,bb as s,cb as l,da as P,db as u,gb as Ne,ha as _,hb as He,ib as qe,jb as te,kb as Z,mb as I,nb as p,ob as F,pb as V,q as Se,qb as j,rb as ne,sa as Ae,sb as w,tb as C,ua as Pe,va as a,w as ze,wb as De,zb as X}from"./chunk-I6SUKWQ3.js";var Lt=["data-p-icon","times"],mt=(()=>{class e extends dt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["","data-p-icon","times"]],features:[D],attrs:Lt,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(de(),Ne(0,"path",0))},encapsulation:2})}return e})();function zt(){let e=[],r=(o,c)=>{let G=e.length>0?e[e.length-1]:{key:o,value:c},O=G.value+(G.key===o?0:c)+2;return e.push({key:o,value:O}),O},t=o=>{e=e.filter(c=>c.value!==o)},n=()=>e.length>0?e[e.length-1].value:0,i=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:i,set:(o,c,G)=>{c&&(c.style.zIndex=String(r(o,G)))},clear:o=>{o&&(t(i(o)),o.style.zIndex="")},getCurrent:()=>n(),generateZIndex:r,revertZIndex:t}}var Q=zt();var ft=`
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
`;var At=["header"],Pt=["footer"],Bt=["content"],Ft=["closeicon"],Vt=["headless"],jt=["container"],Rt=["closeButton"],Nt=["*"],Ht=(e,r)=>({transform:e,transition:r}),qt=e=>({value:"visible",params:e});function Zt(e,r){e&1&&te(0)}function Qt(e,r){if(e&1&&h(0,Zt,1,0,"ng-container",4),e&2){let t=p(2);d("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)}}function $t(e,r){e&1&&te(0)}function Ut(e,r){if(e&1&&(s(0,"div"),m(1),l()),e&2){let t=p(3);T(t.cx("title")),a(),L(t.header)}}function Yt(e,r){e&1&&(de(),u(0,"svg",11)),e&2&&x("data-pc-section","closeicon")}function Gt(e,r){}function Kt(e,r){e&1&&h(0,Gt,0,0,"ng-template")}function Wt(e,r){if(e&1&&h(0,Yt,1,1,"svg",10)(1,Kt,1,0,null,4),e&2){let t=p(4);d("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),a(),d("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function Xt(e,r){if(e&1){let t=Z();s(0,"p-button",9),I("onClick",function(i){y(t);let o=p(3);return b(o.close(i))})("keydown.enter",function(i){y(t);let o=p(3);return b(o.close(i))}),h(1,Wt,2,2,"ng-template",null,1,re),l()}if(e&2){let t=p(3);d("ngClass",t.cx("pcCloseButton"))("buttonProps",t.closeButtonProps),Fe("ariaLabel",t.ariaCloseLabel),x("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Jt(e,r){e&1&&te(0)}function en(e,r){e&1&&te(0)}function tn(e,r){if(e&1&&(He(0),s(1,"div",5),h(2,en,1,0,"ng-container",4),l(),qe()),e&2){let t=p(3);a(),d("ngClass",t.cx("footer")),x("data-pc-section","footer"),a(),d("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}function nn(e,r){if(e&1&&(s(0,"div",5),h(1,$t,1,0,"ng-container",4)(2,Ut,2,3,"div",6)(3,Xt,3,5,"p-button",7),l(),s(4,"div",5),V(5),h(6,Jt,1,0,"ng-container",4),l(),h(7,tn,3,3,"ng-container",8)),e&2){let t=p(2);d("ngClass",t.cx("header")),x("data-pc-section","header"),a(),d("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),a(),d("ngIf",t.header),a(),d("ngIf",t.showCloseIcon&&t.closable),a(),d("ngClass",t.cx("content")),x("data-pc-section","content"),a(2),d("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),a(),d("ngIf",t.footerTemplate||t._footerTemplate)}}function rn(e,r){if(e&1){let t=Z();s(0,"div",3,0),I("@panelState.start",function(i){y(t);let o=p();return b(o.onAnimationStart(i))})("@panelState.done",function(i){y(t);let o=p();return b(o.onAnimationEnd(i))})("keydown",function(i){y(t);let o=p();return b(o.onKeyDown(i))}),M(2,Qt,1,1,"ng-container")(3,nn,8,9),l()}if(e&2){let t=p();X(t.style),T(t.cn(t.cx("root"),t.styleClass)),d("@panelState",ce(11,qt,ie(8,Ht,t.transformOptions,t.transitionOptions))),x("data-pc-name","sidebar")("data-pc-section","root"),a(2),E(t.headlessTemplate||t._headlessTemplate?2:3)}}var on=`
    ${ft}

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
`,an={mask:({instance:e})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":e.modal},{"p-drawer-full":e.fullScreen}],root:({instance:e})=>["p-drawer p-component",{"p-drawer-full":e.fullScreen,"p-drawer-open":e.visible},`p-drawer-${e.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ht=(()=>{class e extends N{name="drawer";theme=on;classes=an;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var sn=ye([U({transform:"{{transform}}",opacity:0}),K("{{transition}}")]),ln=ye([K("{{transition}}",U({transform:"{{transform}}",opacity:0}))]),gt="translate3d(-100%, 0px, 0px)",dn=(()=>{class e extends H{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(t){this._visible=t}get position(){return this._position}set position(t){if(this._position=t,t==="full"){this.transformOptions="none";return}switch(t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t===!0?this.transformOptions="none":this.transformOptions=gt}header;maskStyle;closable=!0;onShow=new q;onHide=new q;visibleChange=new q;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=gt;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=v(ht);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onKeyDown(t){t.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&Q.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(t=!0){t&&this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){let t=this.document.querySelectorAll(".p-drawer-open"),n=t.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(t[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(Ee(this.mask,"style",this.getMaskStyle()),Ee(this.mask,"style",`z-index: ${i}`),oe(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.dismissible&&this.close(o)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&rt())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([t,n])=>`${t}: ${n}`).join("; "):""}disableModality(){this.mask&&(We(this.mask,"p-overlay-mask-enter"),oe(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&ot(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(t){switch(t.toState){case"void":this.hide(!1),Q.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&he(this.appendTo,this.container))}bindDocumentEscapeListener(){let t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(t,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===Q.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Q.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-drawer"]],contentQueries:function(n,i,o){if(n&1&&(j(o,At,4),j(o,Pt,4),j(o,Bt,4),j(o,Ft,4),j(o,Vt,4),j(o,ge,4)),n&2){let c;w(c=C())&&(i.headerTemplate=c.first),w(c=C())&&(i.footerTemplate=c.first),w(c=C())&&(i.contentTemplate=c.first),w(c=C())&&(i.closeIconTemplate=c.first),w(c=C())&&(i.headlessTemplate=c.first),w(c=C())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(ne(jt,5),ne(Rt,5)),n&2){let o;w(o=C())&&(i.containerViewChild=o.first),w(o=C())&&(i.closeButtonViewChild=o.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",k],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",pe],modal:[2,"modal","modal",k],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",k],showCloseIcon:[2,"showCloseIcon","showCloseIcon",k],closeOnEscape:[2,"closeOnEscape","closeOnEscape",k],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",k]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[R([ht]),D],ngContentSelectors:Nt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(F(),h(0,rn,4,13,"div",2)),n&2&&d("ngIf",i.visible)},dependencies:[S,$,J,ue,ve,mt,g],encapsulation:2,data:{animation:[ae("panelState",[W("void => visible",[be(sn)]),W("visible => void",[be(ln)])])]},changeDetection:0})}return e})(),vt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=A({imports:[dn,g,g]})}return e})();var yt=`
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
`;var cn=["*"];function pn(e,r){if(e&1&&(s(0,"span"),m(1),l()),e&2){let t=p();T(t.cx("label")),a(),L(t.label)}}function un(e,r){if(e&1&&u(0,"span",4),e&2){let t=p(2);T(t.icon),d("ngClass",t.cx("icon"))}}function mn(e,r){if(e&1&&h(0,un,1,3,"span",3),e&2){let t=p(),n=De(5);d("ngIf",t.icon)("ngIfElse",n)}}function fn(e,r){if(e&1){let t=Z();s(0,"img",6),I("error",function(i){y(t);let o=p(2);return b(o.imageError(i))}),l()}if(e&2){let t=p(2);d("src",t.image,Ae),x("aria-label",t.ariaLabel)}}function hn(e,r){if(e&1&&h(0,fn,1,2,"img",5),e&2){let t=p();d("ngIf",t.image)}}var gn={root:({instance:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},bt=(()=>{class e extends N{name="avatar";theme=yt;classes=gn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var le=(()=>{class e extends H{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new q;_componentStyle=v(bt);imageError(t){this.onImageError.emit(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,i){n&2&&(x("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),T(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[R([bt]),D],ngContentSelectors:cn,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,i){if(n&1&&(F(),V(0),h(1,pn,2,3,"span",2)(2,mn,1,2,"ng-template",null,0,re)(4,hn,1,1,"ng-template",null,1,re)),n&2){let o=De(3);a(),d("ngIf",i.label)("ngIfElse",o)}},dependencies:[S,$,J,g],encapsulation:2,changeDetection:0})}return e})(),xe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=A({imports:[le,g,g]})}return e})();var we={name:"Pedro Portillo",rol:"Supervisor",img:"datos/avatar.jpg"},xt={name:"HC-Tech",img:""};var wt=`
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
`;var vn=["*"],yn={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},bn={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},Ct=(()=>{class e extends N{name="divider";theme=wt;classes=bn;inlineStyles=yn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var _n=(()=>{class e extends H{styleClass;layout="horizontal";type="solid";align;_componentStyle=v(Ct);static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(n,i){n&2&&(x("aria-orientation",i.layout),X(i.sx("root")),T(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[R([Ct]),D],ngContentSelectors:vn,decls:2,vars:2,template:function(n,i){n&1&&(F(),s(0,"div"),V(1),l()),n&2&&T(i.cx("content"))},dependencies:[S,g],encapsulation:2,changeDetection:0})}return e})(),kt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=A({imports:[_n]})}return e})();function St(e,r){let n=!r?.manualCleanup?r?.injector?.get(Te)??v(Te):null,i=xn(r?.equal),o;r?.requireSync?o=P({kind:0},{equal:i}):o=P({kind:1,value:r?.initialValue},{equal:i});let c,G=e.subscribe({next:O=>o.set({kind:1,value:O}),error:O=>{o.set({kind:2,error:O}),c?.()},complete:()=>{c?.()}});if(r?.requireSync&&o().kind===0)throw new Ie(601,!1);return c=n?.onDestroy(G.unsubscribe.bind(G)),Qe(()=>{let O=o();switch(O.kind){case 1:return O.value;case 2:throw O.error;case 0:throw new Ie(601,!1)}},{equal:r?.equal})}function xn(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}function kn(e,r){if(e&1&&(s(0,"div",6)(1,"p",22),m(2),l(),s(3,"p",23),m(4),l()()),e&2){let t=p();a(2),L(t.company().companyName),a(2),L(t.company().userName)}}function Sn(e,r){e&1&&(s(0,"p",11),m(1,"Empleados"),l())}function In(e,r){e&1&&(s(0,"p",11),m(1,"Turnos"),l())}function Tn(e,r){e&1&&(s(0,"p",11),m(1,"Horarios"),l())}function Dn(e,r){e&1&&(s(0,"p",11),m(1,"Calendario"),l())}function Mn(e,r){e&1&&(s(0,"p",11),m(1,"Tramites"),l())}function En(e,r){e&1&&(s(0,"p",11),m(1,"Reportes"),l())}var Ce=class e{router=v(Ge);expanded=P(!0);company;route=St(this.router.events.pipe(ze(r=>r instanceof Ue),Se(r=>r.url.split("/")),Se(r=>r[r.length-1])),{initialValue:""});constructor(){let{name:r}=we,{name:t,img:n}=xt;this.company=P({userName:r,companyName:t,img:"datos/hc_tech.png"})}toggleMenu=()=>this.expanded.update(r=>!r);getSeverity(r){return this.route()===r?"primary":"contrast"}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-sidebar"]],decls:27,vars:23,consts:[[1,"aside",3,"ngClass"],[1,"toogle-btn",3,"click"],[1,"pi","pi-angle-double-left","icon","primary-icon","text-2xl",3,"ngClass"],[1,"flex","flex-column","py-3","px-3"],[1,"flex","gap-1","w-full","gap-2","justify-center"],["size","large","shape","circle",3,"image","ngClass"],[1,"mr-auto"],[1,"divider"],[1,"w-full","flex","flex-column","gap-4"],["routerLink","/panel/empleados","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-users","text-xl"],["pButtonLabel","",1,"text-xl"],["routerLink","/panel/turnos","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-book","text-xl"],["routerLink","/panel/horarios","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-clock","text-xl"],["routerLink","/panel/calendario","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-calendar-clock","text-xl"],["routerLink","/panel/tramites","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-copy","text-xl"],["routerLink","/panel/reportes","pButton","",1,"w-full","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-chart-line","text-xl"],[1,"text-xl","text-white","bold"],[1,"t-gray"]],template:function(t,n){t&1&&(s(0,"aside",0)(1,"div",1),I("click",function(){return n.toggleMenu()}),u(2,"i",2),l(),s(3,"div",3)(4,"div",4),u(5,"p-avatar",5),M(6,kn,5,2,"div",6),l(),u(7,"div",7),s(8,"div",8)(9,"a",9),u(10,"i",10),M(11,Sn,2,0,"p",11),l(),s(12,"a",12),u(13,"i",13),M(14,In,2,0,"p",11),l(),s(15,"a",14),u(16,"i",15),M(17,Tn,2,0,"p",11),l(),s(18,"a",16),u(19,"i",17),M(20,Dn,2,0,"p",11),l(),s(21,"a",18),u(22,"i",19),M(23,Mn,2,0,"p",11),l(),s(24,"a",20),u(25,"i",21),M(26,En,2,0,"p",11),l()()()()),t&2&&(d("ngClass",n.expanded()?"expanded-aside":"short-aside"),a(2),d("ngClass",n.expanded()?"pi-angle-double-left":"pi-angle-double-right"),a(3),d("image",n.company().img)("ngClass",n.expanded()?"mr-2":"m-auto"),a(),E(n.expanded()?6:-1),a(3),d("severity",n.getSeverity("empleados"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),E(n.expanded()?11:-1),a(),d("severity",n.getSeverity("turnos"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),E(n.expanded()?14:-1),a(),d("severity",n.getSeverity("horarios"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),E(n.expanded()?17:-1),a(),d("severity",n.getSeverity("calendario"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),E(n.expanded()?20:-1),a(),d("severity",n.getSeverity("tramites"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),E(n.expanded()?23:-1),a(),d("severity",n.getSeverity("reportes"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),E(n.expanded()?26:-1))},dependencies:[S,$,xe,le,kt,ee,ut,ct,pt,fe,Ke],styles:[".aside[_ngcontent-%COMP%]{position:relative;height:100vh;background-color:var(--bg_primary)}.short-aside[_ngcontent-%COMP%]{width:5dvw}.expanded-aside[_ngcontent-%COMP%]{width:15dvw}.toogle-btn[_ngcontent-%COMP%]{position:absolute;top:30px;right:-10px}.btn[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%]{width:85%}.divider[_ngcontent-%COMP%]{height:1px;margin:20px auto 50px;background-color:var(--light-gray)}"]})};var Ln=["*"],On=`
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
`,zn={root:"p-overlaybadge"},Tt=(()=>{class e extends N{name="overlaybadge";theme=On;classes=zn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})(),An=(()=>{class e extends H{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(t){this._size=t,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=v(Tt);constructor(){super()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",k],size:"size"},features:[R([Tt]),D],ngContentSelectors:Ln,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(n,i){n&1&&(F(),s(0,"div",0),V(1),u(2,"p-badge",1),l()),n&2&&(a(2),X(i.style),d("styleClass",i.styleClass)("badgeSize",i.badgeSize)("severity",i.severity)("value",i.value)("badgeDisabled",i.badgeDisabled))},dependencies:[S,lt,st,g],encapsulation:2,changeDetection:0})}return e})(),Dt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=A({imports:[An,g,g]})}return e})();var Pn=["content"],Bn=["*"],Fn=(e,r)=>({showTransitionParams:e,hideTransitionParams:r}),Vn=(e,r)=>({value:e,params:r}),jn=e=>({closeCallback:e});function Rn(e,r){}function Nn(e,r){e&1&&h(0,Rn,0,0,"ng-template")}function Hn(e,r){if(e&1){let t=Z();s(0,"div",1),I("click",function(i){y(t);let o=p();return b(o.onOverlayClick(i))})("@animation.start",function(i){y(t);let o=p();return b(o.onAnimationStart(i))})("@animation.done",function(i){y(t);let o=p();return b(o.onAnimationEnd(i))}),s(1,"div",2),I("click",function(i){y(t);let o=p();return b(o.onContentClick(i))})("mousedown",function(i){y(t);let o=p();return b(o.onContentClick(i))}),V(2),h(3,Nn,1,0,null,3),l()()}if(e&2){let t=p();T(t.cn(t.cx("root"),t.styleClass)),d("ngStyle",t.style)("@animation",ie(14,Vn,t.overlayVisible?"open":"close",ie(11,Fn,t.showTransitionOptions,t.hideTransitionOptions))),x("aria-modal",t.overlayVisible)("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),a(),T(t.cx("content")),a(2),d("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",ce(17,jn,t.onCloseClick.bind(t)))}}var qn=`
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

`,Zn={root:"p-popover p-component",content:"p-popover-content"},Mt=(()=>{class e extends N{name="popover";theme=qn;classes=Zn;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})(),Le=(()=>{class e extends H{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new q;onHide=new q;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=v(Mt);zone=v(Be);overlayService=v(nt);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}bindDocumentClickListener(){if(me(this.platformId)&&!this.documentClickListener){let t=et()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,i=>{this.dismissable&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,n)&&(this.destroyCallback=()=>{this.show(null,n||t.currentTarget||t.target)}),this.hide()):this.show(t,n))}show(t,n){n&&t&&t.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=n||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(t){let n=t.target;this.selfClick=t.offsetX<n.clientWidth&&t.offsetY<n.clientHeight}hasTargetChanged(t,n){return this.target!=null&&this.target!==(n||t.currentTarget||t.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):he(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&Q.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Xe(this.container,this.target,!1);let t=Me(this.container),n=Me(this.target),i=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),o=0;t.left<n.left&&(o=n.left-t.left-parseFloat(i)*2),this.container?.style.setProperty(it("popover.arrow.left").name,`${o}px`),t.top<n.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),oe(this.container,"p-popover-flipped"))}onAnimationStart(t){t.toState==="open"&&(this.container=t.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&Q.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let t=Je(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(t){this.hide(),t.preventDefault()}onEscapeKeydown(t){this.hide()}onWindowResize(){this.overlayVisible&&!tt()&&this.hide()}bindDocumentResizeListener(){if(me(this.platformId)&&!this.documentResizeListener){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){me(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new at(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&Q.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=f({type:e,selectors:[["p-popover"]],contentQueries:function(n,i,o){if(n&1&&(j(o,Pn,4),j(o,ge,4)),n&2){let c;w(c=C())&&(i.contentTemplate=c.first),w(c=C())&&(i.templates=c)}},hostBindings:function(n,i){n&1&&I("keydown.escape",function(c){return i.onEscapeKeydown(c)},Pe)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",k],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",k],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",pe],focusOnShow:[2,"focusOnShow","focusOnShow",k],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[R([Mt]),D],ngContentSelectors:Bn,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(F(),h(0,Hn,4,19,"div",0)),n&2&&d("ngIf",i.render)},dependencies:[S,J,ue,$e,g],encapsulation:2,data:{animation:[ae("animation",[se("void",U({transform:"scaleY(0.8)",opacity:0})),se("close",U({opacity:0})),se("open",U({transform:"translateY(0)",opacity:1})),W("void => open",K("{{showTransitionParams}}")),W("open => close",K("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),Et=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=B({type:e});static \u0275inj=A({imports:[Le,g,g]})}return e})();var $n=["op"];function Un(e,r){if(e&1&&(s(0,"p",5),m(1),l()),e&2){let t=p();a(),L(t.notifications().length)}}function Yn(e,r){if(e&1&&(s(0,"p",12),m(1),l()),e&2){let t=r.$implicit;a(),Ze(" ",t.description," ")}}function Gn(e,r){e&1&&(s(0,"span",13),m(1,"No hay notificaciones"),l())}var ke=class e{op;notifications=P([{id:1,description:"asd"},{id:2,description:"asdasd"}]);user=P(we);title=P("Empleados");toggle(r){this.op.toggle(r)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-header"]],viewQuery:function(t,n){if(t&1&&ne($n,5),t&2){let i;w(i=C())&&(n.op=i.first)}},decls:19,vars:7,consts:[["op",""],[1,"header","w-full","flex","align-items-center","gap-3"],[1,"text-4xl","flex-grow-1","text-center"],["label","Administraci\xF3n"],[1,"pi","pi-bell","icon","notify-icon","text-2xl",3,"click","ngClass"],[1,"badge","text-center"],[1,"card","flex","gap-2","h-fit"],["size","xlarge","shape","circle",1,"mr-2",3,"image"],[1,"flex-col","text-center","m-auto"],[1,"text-xl","bold"],[1,"t-gray"],[1,"flex","flex-column","gap-4"],[1,"font-medium","block","mb-2","w-16rem"],[1,"font-medium","block","mb-2"]],template:function(t,n){if(t&1){let i=Z();s(0,"header",1)(1,"p",2),m(2),l(),u(3,"p-button",3),s(4,"i",4),I("click",function(c){return y(i),b(n.toggle(c))}),M(5,Un,2,1,"p",5),l(),s(6,"div",6),u(7,"p-avatar",7),s(8,"div",8)(9,"p",9),m(10),l(),s(11,"p",10),m(12),l()()(),s(13,"p-popover",null,0)(15,"div",11),je(16,Yn,2,1,"p",12,Ve,!1,Gn,2,0,"span",13),l()()()}t&2&&(a(2),L(n.title()),a(2),d("ngClass",n.notifications().length>0?"primary-icon":"secundary-icon"),a(),E(n.notifications().length>0?5:-1),a(2),d("image",n.user().img),a(3),L(n.user().name),a(2),L(n.user().rol),a(4),Re(n.notifications()))},dependencies:[S,$,ee,ve,xe,le,Et,Le,Dt],styles:[".header[_ngcontent-%COMP%]{height:75px;padding:15px;justify-content:space-around;border:1px solid var(--gray)}.notify-icon[_ngcontent-%COMP%]{padding:8px 6px;position:relative}.badge[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-8px;background-color:var(--red);width:16px;height:16px;font-size:small;border-radius:10px;line-height:16px;font-weight:700}"]})};var Oe=class e{visible=!1;static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-home-panel"]],decls:5,vars:0,consts:[[1,"flex"],[1,"w-full","flex","flex-column"]],template:function(t,n){t&1&&(s(0,"main",0),u(1,"app-sidebar"),s(2,"div",1),u(3,"app-header")(4,"router-outlet"),l()())},dependencies:[vt,fe,Ye,ee,Ce,ke],encapsulation:2})};export{Oe as default};
