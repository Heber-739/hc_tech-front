import{c as Ze,d as qe,e as Ue,f as $e,h as le}from"./chunk-MX27XYVL.js";import{a as at,c as j,d as fe,e as he}from"./chunk-MKQJD2UQ.js";import{c as me,d as W,f as U,g as ue,h as K,i as ke,j as Se}from"./chunk-36JN3LZY.js";import{Ba as st,C as de,Ca as lt,Da as dt,Ea as pe,F as We,Fa as G,L as Ce,Q as Ke,R as Xe,U as xe,fa as Je,i as Y,ia as ce,ja as C,k as re,l as Qe,m as ae,ma as et,n as S,na as H,pa as N,r as se,ra as tt,sa as nt,ta as it,u as ne,v as Ye,va as ot,wa as rt,z as Ge}from"./chunk-YQM2NDZD.js";import{$ as v,$a as D,Aa as a,Eb as $,Fb as L,Gb as u,Hb as O,Ib as Re,Ma as g,Mb as R,N as _e,Na as P,Ob as ie,Pa as F,Pb as te,Q as z,Qa as y,R as B,Sa as Z,Ta as je,Tb as He,V as f,Xb as Ne,_ as h,_a as ze,aa as Oe,ab as x,bb as k,cb as Be,da as we,db as Pe,eb as Fe,fb as d,fc as w,gb as s,gc as oe,ha as M,hb as l,ib as m,la as T,mb as Ve,nb as Ae,ob as J,pb as q,q as be,rb as I,sb as p,tb as V,ub as A,vb as E,wb as ee,xb as b,y as Ee,yb as _,za as Le}from"./chunk-GL3BLS3A.js";var ct=`
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
`;var kt=["header"],St=["footer"],Tt=["content"],Dt=["closeicon"],It=["headless"],Mt=["container"],Et=["closeButton"],Ot=["*"],Lt=(t,o)=>({transform:t,transition:o}),jt=t=>({value:"visible",params:t});function zt(t,o){t&1&&J(0)}function Bt(t,o){if(t&1&&y(0,zt,1,0,"ng-container",4),t&2){let e=p(2);d("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Pt(t,o){t&1&&J(0)}function Ft(t,o){if(t&1&&(s(0,"div"),u(1),l()),t&2){let e=p(3);L(e.cx("title")),a(),O(e.header)}}function Vt(t,o){t&1&&(Oe(),m(0,"svg",11)),t&2&&D("data-pc-section","closeicon")}function At(t,o){}function Rt(t,o){t&1&&y(0,At,0,0,"ng-template")}function Ht(t,o){if(t&1&&y(0,Vt,1,1,"svg",10)(1,Rt,1,0,null,4),t&2){let e=p(4);d("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),a(),d("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Nt(t,o){if(t&1){let e=q();s(0,"p-button",9),I("onClick",function(i){h(e);let r=p(3);return v(r.close(i))})("keydown.enter",function(i){h(e);let r=p(3);return v(r.close(i))}),y(1,Ht,2,2,"ng-template",null,1,He),l()}if(t&2){let e=p(3);d("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps),ze("ariaLabel",e.ariaCloseLabel),D("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Qt(t,o){t&1&&J(0)}function Zt(t,o){t&1&&J(0)}function qt(t,o){if(t&1&&(Ve(0),s(1,"div",5),y(2,Zt,1,0,"ng-container",4),l(),Ae()),t&2){let e=p(3);a(),d("ngClass",e.cx("footer")),D("data-pc-section","footer"),a(),d("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function Ut(t,o){if(t&1&&(s(0,"div",5),y(1,Pt,1,0,"ng-container",4)(2,Ft,2,3,"div",6)(3,Nt,3,5,"p-button",7),l(),s(4,"div",5),A(5),y(6,Qt,1,0,"ng-container",4),l(),y(7,qt,3,3,"ng-container",8)),t&2){let e=p(2);d("ngClass",e.cx("header")),D("data-pc-section","header"),a(),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),a(),d("ngIf",e.header),a(),d("ngIf",e.showCloseIcon&&e.closable),a(),d("ngClass",e.cx("content")),D("data-pc-section","content"),a(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),a(),d("ngIf",e.footerTemplate||e._footerTemplate)}}function $t(t,o){if(t&1){let e=q();s(0,"div",3,0),I("@panelState.start",function(i){h(e);let r=p();return v(r.onAnimationStart(i))})("@panelState.done",function(i){h(e);let r=p();return v(r.onAnimationEnd(i))})("keydown",function(i){h(e);let r=p();return v(r.onKeyDown(i))}),x(2,Bt,1,1,"ng-container")(3,Ut,8,9),l()}if(t&2){let e=p();$(e.style),L(e.cn(e.cx("root"),e.styleClass)),d("@panelState",ie(11,jt,te(8,Lt,e.transformOptions,e.transitionOptions))),D("data-pc-name","sidebar")("data-pc-section","root"),a(2),k(e.headlessTemplate||e._headlessTemplate?2:3)}}var Yt=`
    ${ct}

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
`,Gt={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},pt=(()=>{class t extends H{name="drawer";theme=Yt;classes=Gt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var Wt=ke([U({transform:"{{transform}}",opacity:0}),W("{{transition}}")]),Kt=ke([W("{{transition}}",U({transform:"{{transform}}",opacity:0}))]),mt="translate3d(-100%, 0px, 0px)",Xt=(()=>{class t extends N{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??!1}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e===!0?this.transformOptions="none":this.transformOptions=mt}header;maskStyle;closable=!0;onShow=new Z;onHide=new Z;visibleChange=new Z;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions=mt;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=f(pt);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container?.setAttribute(this.attrSelector,""),this.autoZIndex&&j.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),n=e.length,i=n==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[n-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.mask&&(xe(this.mask,"style",this.getMaskStyle()),xe(this.mask,"style",`z-index: ${i}`),ne(this.mask,this.cx("mask"))),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&tt())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,n])=>`${e}: ${n}`).join("; "):""}disableModality(){this.mask&&(Ye(this.mask,"p-overlay-mask-enter"),ne(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&nt(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),j.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"&&this.container?this.renderer.appendChild(this.document.body,this.container):this.container&&de(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===j.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&j.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["p-drawer"]],contentQueries:function(n,i,r){if(n&1&&(E(r,kt,4),E(r,St,4),E(r,Tt,4),E(r,Dt,4),E(r,It,4),E(r,ce,4)),n&2){let c;b(c=_())&&(i.headerTemplate=c.first),b(c=_())&&(i.footerTemplate=c.first),b(c=_())&&(i.contentTemplate=c.first),b(c=_())&&(i.closeIconTemplate=c.first),b(c=_())&&(i.headlessTemplate=c.first),b(c=_())&&(i.templates=c)}},viewQuery:function(n,i){if(n&1&&(ee(Mt,5),ee(Et,5)),n&2){let r;b(r=_())&&(i.containerViewChild=r.first),b(r=_())&&(i.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",w],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",w],baseZIndex:[2,"baseZIndex","baseZIndex",oe],modal:[2,"modal","modal",w],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",w],showCloseIcon:[2,"showCloseIcon","showCloseIcon",w],closeOnEscape:[2,"closeOnEscape","closeOnEscape",w],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",w]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[R([pt]),F],ngContentSelectors:Ot,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(n,i){n&1&&(V(),y(0,$t,4,13,"div",2)),n&2&&d("ngIf",i.visible)},dependencies:[S,Y,re,ae,pe,at,C],encapsulation:2,data:{animation:[me("panelState",[K("void => visible",[Se(Wt)]),K("visible => void",[Se(Kt)])])]},changeDetection:0})}return t})(),ut=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[Xt,C,C]})}return t})();var ve={name:"Pedro Portillo",rol:"Supervisor",img:"datos/avatar.jpg"},ft={name:"HC-Tech",img:""};var ht=`
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
`;var Jt=["*"],en={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},tn={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},vt=(()=>{class t extends H{name="divider";theme=ht;classes=tn;inlineStyles=en;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})();var nn=(()=>{class t extends N{styleClass;layout="horizontal";type="solid";align;_componentStyle=f(vt);static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(n,i){n&2&&(D("aria-orientation",i.layout),$(i.sx("root")),L(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[R([vt]),F],ngContentSelectors:Jt,decls:2,vars:2,template:function(n,i){n&1&&(V(),s(0,"div"),A(1),l()),n&2&&L(i.cx("content"))},dependencies:[S,C],encapsulation:2,changeDetection:0})}return t})(),gt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[nn]})}return t})();function yt(t,o){let n=!o?.manualCleanup?o?.injector?.get(we)??f(we):null,i=on(o?.equal),r;o?.requireSync?r=M({kind:0},{equal:i}):r=M({kind:1,value:o?.initialValue},{equal:i});let c,Me=t.subscribe({next:Q=>r.set({kind:1,value:Q}),error:Q=>{r.set({kind:2,error:Q}),c?.()},complete:()=>{c?.()}});if(o?.requireSync&&r().kind===0)throw new _e(601,!1);return c=n?.onDestroy(Me.unsubscribe.bind(Me)),Ne(()=>{let Q=r();switch(Q.kind){case 1:return Q.value;case 2:throw Q.error;case 0:throw new _e(601,!1)}},{equal:o?.equal})}function on(t=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&t(o.value,e.value)}function ln(t,o){if(t&1&&(s(0,"div",6)(1,"p",22),u(2),l(),s(3,"p",23),u(4),l()()),t&2){let e=p();a(2),O(e.company().companyName),a(2),O(e.company().userName)}}function dn(t,o){t&1&&(s(0,"p",11),u(1,"Empleados"),l())}function cn(t,o){t&1&&(s(0,"p",11),u(1,"Turnos"),l())}function pn(t,o){t&1&&(s(0,"p",11),u(1,"Horarios"),l())}function mn(t,o){t&1&&(s(0,"p",11),u(1,"Calendario"),l())}function un(t,o){t&1&&(s(0,"p",11),u(1,"Tramites"),l())}function fn(t,o){t&1&&(s(0,"p",11),u(1,"Reportes"),l())}var ge=class t{router=f(Ue);expanded=M(!0);company;route=yt(this.router.events.pipe(Ee(o=>o instanceof Ze),be(o=>o.urlAfterRedirects.split("/")),be(o=>o[o.length-1])),{initialValue:""});constructor(){let{name:o}=ve,{name:e,img:n}=ft;this.company=M({userName:o,companyName:e,img:"datos/hc_tech.png"})}toggleMenu=()=>this.expanded.update(o=>!o);getSeverity(o){return this.route()===o?"primary":"contrast"}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-sidebar"]],decls:27,vars:23,consts:[[1,"aside",3,"ngClass"],[1,"toogle-btn",3,"click"],[1,"pi","pi-angle-double-left","icon","primary-icon","text-2xl",3,"ngClass"],[1,"flex","flex-column","py-3","px-3"],[1,"flex","gap-1","w-full","gap-2","justify-center"],["size","large","shape","circle",3,"image","ngClass"],[1,"mr-auto"],[1,"divider"],[1,"w-full","flex","flex-column","gap-4"],["routerLink","/panel/employees","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-users"],["pButtonLabel",""],["routerLink","/panel/shifts","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-book","text-xl"],["routerLink","/panel/schedules","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-clock","text-xl"],["routerLink","/panel/calendar","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-calendar-clock","text-xl"],["routerLink","/panel/procedures","pButton","",1,"w-full","justify-content-start","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-copy","text-xl"],["routerLink","/panel/reports","pButton","",1,"w-full","border-round-sm",3,"severity","ngClass"],["pButtonIcon","",1,"pi","pi-chart-line","text-xl"],[1,"text-xl","text-white","bold"],[1,"t-gray"]],template:function(e,n){e&1&&(s(0,"aside",0)(1,"div",1),I("click",function(){return n.toggleMenu()}),m(2,"i",2),l(),s(3,"div",3)(4,"div",4),m(5,"p-avatar",5),x(6,ln,5,2,"div",6),l(),m(7,"div",7),s(8,"div",8)(9,"a",9),m(10,"i",10),x(11,dn,2,0,"p",11),l(),s(12,"a",12),m(13,"i",13),x(14,cn,2,0,"p",11),l(),s(15,"a",14),m(16,"i",15),x(17,pn,2,0,"p",11),l(),s(18,"a",16),m(19,"i",17),x(20,mn,2,0,"p",11),l(),s(21,"a",18),m(22,"i",19),x(23,un,2,0,"p",11),l(),s(24,"a",20),m(25,"i",21),x(26,fn,2,0,"p",11),l()()()()),e&2&&(d("ngClass",n.expanded()?"expanded-aside":"short-aside"),a(2),d("ngClass",n.expanded()?"pi-angle-double-left":"pi-angle-double-right"),a(3),d("image",n.company().img)("ngClass",n.expanded()?"mr-2":"m-auto"),a(),k(n.expanded()?6:-1),a(3),d("severity",n.getSeverity("employees"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),k(n.expanded()?11:-1),a(),d("severity",n.getSeverity("shifts"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),k(n.expanded()?14:-1),a(),d("severity",n.getSeverity("schedules"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),k(n.expanded()?17:-1),a(),d("severity",n.getSeverity("calendar"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),k(n.expanded()?20:-1),a(),d("severity",n.getSeverity("procedures"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),k(n.expanded()?23:-1),a(),d("severity",n.getSeverity("reports"))("ngClass",n.expanded()?"justify-content-start":"justify-content-center"),a(2),k(n.expanded()?26:-1))},dependencies:[S,Y,he,fe,gt,G,dt,st,lt,le,$e],styles:[".aside[_ngcontent-%COMP%]{position:relative;height:100vh;background-color:var(--bg_primary)}.short-aside[_ngcontent-%COMP%]{width:5dvw}.expanded-aside[_ngcontent-%COMP%]{width:15dvw}.toogle-btn[_ngcontent-%COMP%]{position:absolute;top:30px;right:-10px}.btn[_ngcontent-%COMP%], .divider[_ngcontent-%COMP%]{width:85%}.divider[_ngcontent-%COMP%]{height:1px;margin:20px auto 50px;background-color:var(--light-gray)}"]})};var hn=["*"],vn=`
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
`,gn={root:"p-overlaybadge"},_t=(()=>{class t extends H{name="overlaybadge";theme=vn;classes=gn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),yn=(()=>{class t extends N{styleClass;style;badgeSize;severity;value;badgeDisabled=!1;set size(e){this._size=e,!this.badgeSize&&this.size&&console.log("size property is deprecated and will removed in v18, use badgeSize instead.")}get size(){return this._size}_size;_componentStyle=f(_t);constructor(){super()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=g({type:t,selectors:[["p-overlayBadge"],["p-overlay-badge"],["p-overlaybadge"]],inputs:{styleClass:"styleClass",style:"style",badgeSize:"badgeSize",severity:"severity",value:"value",badgeDisabled:[2,"badgeDisabled","badgeDisabled",w],size:"size"},features:[R([_t]),F],ngContentSelectors:hn,decls:3,vars:7,consts:[[1,"p-overlaybadge"],[3,"styleClass","badgeSize","severity","value","badgeDisabled"]],template:function(n,i){n&1&&(V(),s(0,"div",0),A(1),m(2,"p-badge",1),l()),n&2&&(a(2),$(i.style),d("styleClass",i.styleClass)("badgeSize",i.badgeSize)("severity",i.severity)("value",i.value)("badgeDisabled",i.badgeDisabled))},dependencies:[S,rt,ot,C],encapsulation:2,changeDetection:0})}return t})(),wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[yn,C,C]})}return t})();var bn=["content"],_n=["*"],wn=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Cn=(t,o)=>({value:t,params:o}),xn=t=>({closeCallback:t});function kn(t,o){}function Sn(t,o){t&1&&y(0,kn,0,0,"ng-template")}function Tn(t,o){if(t&1){let e=q();s(0,"div",1),I("click",function(i){h(e);let r=p();return v(r.onOverlayClick(i))})("@animation.start",function(i){h(e);let r=p();return v(r.onAnimationStart(i))})("@animation.done",function(i){h(e);let r=p();return v(r.onAnimationEnd(i))}),s(1,"div",2),I("click",function(i){h(e);let r=p();return v(r.onContentClick(i))})("mousedown",function(i){h(e);let r=p();return v(r.onContentClick(i))}),A(2),y(3,Sn,1,0,null,3),l()()}if(t&2){let e=p();L(e.cn(e.cx("root"),e.styleClass)),d("ngStyle",e.style)("@animation",te(14,Cn,e.overlayVisible?"open":"close",te(11,wn,e.showTransitionOptions,e.hideTransitionOptions))),D("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),a(),L(e.cx("content")),a(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",ie(17,xn,e.onCloseClick.bind(e)))}}var Dn=`
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

`,In={root:"p-popover p-component",content:"p-popover-content"},Ct=(()=>{class t extends H{name="popover";theme=Dn;classes=In;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=z({token:t,factory:t.\u0275fac})}return t})(),De=(()=>{class t extends N{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new Z;onHide=new Z;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=f(Ct);zone=f(je);overlayService=f(Je);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(se(this.platformId)&&!this.documentClickListener){let e=Ke()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,e,i=>{this.dismissable&&(!this.container?.contains(i.target)&&this.target!==i.target&&!this.target.contains(i.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,n){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,n)&&(this.destroyCallback=()=>{this.show(null,n||e.currentTarget||e.target)}),this.hide()):this.show(e,n))}show(e,n){n&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=n||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let n=e.target;this.selfClick=e.offsetX<n.clientWidth&&e.offsetY<n.clientHeight}hasTargetChanged(e,n){return this.target!=null&&this.target!==(n||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):de(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&j.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Ge(this.container,this.target,!1);let e=Ce(this.container),n=Ce(this.target),i=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;e.left<n.left&&(r=n.left-e.left-parseFloat(i)*2),this.container?.style.setProperty(et("popover.arrow.left").name,`${r}px`),e.top<n.top&&(this.container?.setAttribute("data-p-popover-flipped","true"),ne(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=n=>{this.container&&this.container.contains(n.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&j.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=We(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!Xe()&&this.hide()}bindDocumentResizeListener(){if(se(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){se(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new it(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&j.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=g({type:t,selectors:[["p-popover"]],contentQueries:function(n,i,r){if(n&1&&(E(r,bn,4),E(r,ce,4)),n&2){let c;b(c=_())&&(i.contentTemplate=c.first),b(c=_())&&(i.templates=c)}},hostBindings:function(n,i){n&1&&I("keydown.escape",function(c){return i.onEscapeKeydown(c)},Le)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",w],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",w],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",oe],focusOnShow:[2,"focusOnShow","focusOnShow",w],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[R([Ct]),F],ngContentSelectors:_n,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(V(),y(0,Tn,4,19,"div",0)),n&2&&d("ngIf",i.render)},dependencies:[S,re,ae,Qe,C],encapsulation:2,data:{animation:[me("animation",[ue("void",U({transform:"scaleY(0.8)",opacity:0})),ue("close",U({opacity:0})),ue("open",U({transform:"translateY(0)",opacity:1})),K("void => open",W("{{showTransitionParams}}")),K("open => close",W("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[De,C,C]})}return t})();var En=["op"];function On(t,o){if(t&1&&(s(0,"p",5),u(1),l()),t&2){let e=p();a(),O(e.notifications().length)}}function Ln(t,o){if(t&1&&(s(0,"p",12),u(1),l()),t&2){let e=o.$implicit;a(),Re(" ",e.description," ")}}function jn(t,o){t&1&&(s(0,"span",13),u(1,"No hay notificaciones"),l())}var ye=class t{op;notifications=M([{id:1,description:"asd"},{id:2,description:"asdasd"}]);user=M(ve);title=M("Empleados");toggle(o){this.op.toggle(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-header"]],viewQuery:function(e,n){if(e&1&&ee(En,5),e&2){let i;b(i=_())&&(n.op=i.first)}},decls:19,vars:7,consts:[["op",""],[1,"header","w-full","flex","align-items-center","gap-3"],[1,"text-4xl","flex-grow-1","text-center"],["label","Administraci\xF3n"],[1,"pi","pi-bell","icon","notify-icon","text-2xl",3,"click","ngClass"],[1,"badge","text-center"],[1,"card","flex","gap-2","h-fit"],["size","xlarge","shape","circle",1,"mr-2",3,"image"],[1,"flex-col","text-center","m-auto"],[1,"text-xl","bold"],[1,"t-gray"],[1,"flex","flex-column","gap-4"],[1,"font-medium","block","mb-2","w-16rem"],[1,"font-medium","block","mb-2"]],template:function(e,n){if(e&1){let i=q();s(0,"header",1)(1,"p",2),u(2),l(),m(3,"p-button",3),s(4,"i",4),I("click",function(c){return h(i),v(n.toggle(c))}),x(5,On,2,1,"p",5),l(),s(6,"div",6),m(7,"p-avatar",7),s(8,"div",8)(9,"p",9),u(10),l(),s(11,"p",10),u(12),l()()(),s(13,"p-popover",null,0)(15,"div",11),Pe(16,Ln,2,1,"p",12,Be,!1,jn,2,0,"span",13),l()()()}e&2&&(a(2),O(n.title()),a(2),d("ngClass",n.notifications().length>0?"primary-icon":"secundary-icon"),a(),k(n.notifications().length>0?5:-1),a(2),d("image",n.user().img),a(3),O(n.user().name),a(2),O(n.user().rol),a(4),Fe(n.notifications()))},dependencies:[S,Y,G,pe,he,fe,xt,De,wt],styles:[".header[_ngcontent-%COMP%]{height:75px;padding:15px;justify-content:space-around;border:1px solid var(--gray)}.notify-icon[_ngcontent-%COMP%]{padding:8px 6px;position:relative}.badge[_ngcontent-%COMP%]{position:absolute;top:-8px;right:-8px;background-color:var(--red);width:16px;height:16px;font-size:small;border-radius:10px;line-height:16px;font-weight:700}"]})};var Ie=class t{visible=!1;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-home-panel"]],decls:5,vars:0,consts:[[1,"flex"],[1,"w-full","h-full","flex","flex-column"]],template:function(e,n){e&1&&(s(0,"main",0),m(1,"app-sidebar"),s(2,"div",1),m(3,"app-header")(4,"router-outlet"),l()())},dependencies:[ut,le,qe,G,ge,ye],encapsulation:2})};export{Ie as default};
