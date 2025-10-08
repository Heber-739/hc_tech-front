import{Da as X,i as Q,k as W,n as S,oa as y,sa as T,ua as L}from"./chunk-XCJYIUFR.js";import{$ as V,$a as _,Aa as O,Bb as N,Eb as H,Fb as f,Gb as K,Hb as J,Ma as u,Na as M,Nb as F,Pa as m,Q as D,Qa as A,R as E,Sa as Z,Ub as k,V as z,_ as P,a as B,aa as q,fb as g,gb as I,hb as C,ib as $,la as d,lb as U,pb as G,rb as Y,sb as p,tb as b,ub as w,xa as R}from"./chunk-5K566BYR.js";var at=["data-p-icon","times"],_t=(()=>{class n extends X{static \u0275fac=(()=>{let e;return function(a){return(e||(e=d(n)))(a||n)}})();static \u0275cmp=u({type:n,selectors:[["","data-p-icon","times"]],features:[m],attrs:at,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(r,a){r&1&&(q(),U(0,"path",0))},encapsulation:2})}return n})();var tt=class n{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,r){return r?this.resolveFieldData(t,r)===this.resolveFieldData(e,r):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var r=Array.isArray(t),a=Array.isArray(e),i,o,s;if(r&&a){if(o=t.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!this.equalsByValue(t[i],e[i]))return!1;return!0}if(r!=a)return!1;var l=this.isDate(t),v=this.isDate(e);if(l!=v)return!1;if(l&&v)return t.getTime()==e.getTime();var h=t instanceof RegExp,x=e instanceof RegExp;if(h!=x)return!1;if(h&&x)return t.toString()==e.toString();var c=Object.keys(t);if(o=c.length,o!==Object.keys(e).length)return!1;for(i=o;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[i]))return!1;for(i=o;i--!==0;)if(s=c[i],!this.equalsByValue(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let r=e.split("."),a=t;for(let i=0,o=r.length;i<o;++i){if(a==null)return null;a=a[r[i]]}return a}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,r){let a;t&&e!==r&&(r>=t.length&&(r%=t.length,e%=t.length),t.splice(r,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,r,a){if(r.length>0){let i=!1;for(let o=0;o<r.length;o++)if(this.findIndexInList(r[o],a)>e){r.splice(o,0,t),i=!0;break}i||r.push(t)}else r.push(t)}static findIndexInList(t,e){let r=-1;if(e){for(let a=0;a<e.length;a++)if(e[a]==t){r=a;break}}return r}static contains(t,e){if(t!=null&&e&&e.length){for(let r of e)if(this.equals(t,r))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,r,a=1){let i=-1,o=this.isEmpty(t),s=this.isEmpty(e);return o&&s?i=0:o?i=a:s?i=-a:typeof t=="string"&&typeof e=="string"?i=t.localeCompare(e,r,{numeric:!0}):i=t<e?-1:t>e?1:0,i}static sort(t,e,r=1,a,i=1){let o=n.compare(t,e,a,r),s=r;return(n.isEmpty(t)||n.isEmpty(e))&&(s=i===1?r:i),s*o}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return B(B({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let r=-1;if(this.isNotEmpty(t))try{r=t.findLastIndex(e)}catch{r=t.lastIndexOf([...t].reverse().find(e))}return r}static findLast(t,e){let r;if(this.isNotEmpty(t))try{r=t.findLast(e)}catch{r=[...t].reverse().find(e)}return r}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var r=Array.isArray(t),a=Array.isArray(e),i,o,s;if(r&&a){if(o=t.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!this.deepEquals(t[i],e[i]))return!1;return!0}if(r!=a)return!1;var l=t instanceof Date,v=e instanceof Date;if(l!=v)return!1;if(l&&v)return t.getTime()==e.getTime();var h=t instanceof RegExp,x=e instanceof RegExp;if(h!=x)return!1;if(h&&x)return t.toString()==e.toString();var c=Object.keys(t);if(o=c.length,o!==Object.keys(e).length)return!1;for(i=o;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[i]))return!1;for(i=o;i--!==0;)if(s=c[i],!this.deepEquals(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}static isString(t,e=!0){return typeof t=="string"&&(e||t!=="")}};function ot(){let n=[],t=(i,o)=>{let s=n.length>0?n[n.length-1]:{key:i,value:o},l=s.value+(s.key===i?0:o)+2;return n.push({key:i,value:l}),l},e=i=>{n=n.filter(o=>o.value!==i)},r=()=>n.length>0?n[n.length-1].value:0,a=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:a,set:(i,o,s)=>{o&&(o.style.zIndex=String(t(i,s)))},clear:i=>{i&&(e(a(i)),i.style.zIndex="")},getCurrent:()=>r(),generateZIndex:t,revertZIndex:e}}var Rt=ot();var et=`
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
`;var st=["*"];function lt(n,t){if(n&1&&(I(0,"span"),K(1),C()),n&2){let e=p();f(e.cx("label")),O(),J(e.label)}}function dt(n,t){if(n&1&&$(0,"span",4),n&2){let e=p(2);f(e.icon),g("ngClass",e.cx("icon"))}}function ct(n,t){if(n&1&&A(0,dt,1,3,"span",3),n&2){let e=p(),r=N(5);g("ngIf",e.icon)("ngIfElse",r)}}function pt(n,t){if(n&1){let e=G();I(0,"img",6),Y("error",function(a){P(e);let i=p(2);return V(i.imageError(a))}),C()}if(n&2){let e=p(2);g("src",e.image,R),_("aria-label",e.ariaLabel)}}function ft(n,t){if(n&1&&A(0,pt,1,2,"img",5),n&2){let e=p();g("ngIf",e.image)}}var ut={root:({instance:n})=>["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},nt=(()=>{class n extends T{name="avatar";theme=et;classes=ut;static \u0275fac=(()=>{let e;return function(a){return(e||(e=d(n)))(a||n)}})();static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var mt=(()=>{class n extends L{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new Z;_componentStyle=z(nt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=d(n)))(a||n)}})();static \u0275cmp=u({type:n,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(r,a){r&2&&(_("data-pc-name","avatar")("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledBy),f(a.cn(a.cx("root"),a.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[F([nt]),m],ngContentSelectors:st,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(r,a){if(r&1&&(b(),w(0),A(1,lt,2,3,"span",2)(2,ct,1,2,"ng-template",null,0,k)(4,ft,1,1,"ng-template",null,1,k)),r&2){let i=N(3);O(),g("ngIf",a.label)("ngIfElse",i)}},dependencies:[S,Q,W,y],encapsulation:2,changeDetection:0})}return n})(),ae=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=M({type:n});static \u0275inj=E({imports:[mt,y,y]})}return n})();var rt=`
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
`;var gt=["*"],yt={root:({instance:n})=>({justifyContent:n.layout==="horizontal"?n.align==="center"||n.align==null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align==null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null})},vt={root:({instance:n})=>["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}],content:"p-divider-content"},it=(()=>{class n extends T{name="divider";theme=rt;classes=vt;inlineStyles=yt;static \u0275fac=(()=>{let e;return function(a){return(e||(e=d(n)))(a||n)}})();static \u0275prov=D({token:n,factory:n.\u0275fac})}return n})();var ht=(()=>{class n extends L{styleClass;layout="horizontal";type="solid";align;_componentStyle=z(it);static \u0275fac=(()=>{let e;return function(a){return(e||(e=d(n)))(a||n)}})();static \u0275cmp=u({type:n,selectors:[["p-divider"]],hostAttrs:["data-pc-name","divider","role","separator"],hostVars:5,hostBindings:function(r,a){r&2&&(_("aria-orientation",a.layout),H(a.sx("root")),f(a.cn(a.cx("root"),a.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[F([it]),m],ngContentSelectors:gt,decls:2,vars:2,template:function(r,a){r&1&&(b(),I(0,"div"),w(1),C()),r&2&&f(a.cx("content"))},dependencies:[S,y],encapsulation:2,changeDetection:0})}return n})(),_e=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=M({type:n});static \u0275inj=E({imports:[ht]})}return n})();export{_t as a,tt as b,Rt as c,mt as d,ae as e,ht as f,_e as g};
