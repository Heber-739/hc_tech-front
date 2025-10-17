import{Ea as W,i as b,k as H,o as K,pa as x,ta as J,va as Q}from"./chunk-ARXZC3YG.js";import{$ as F,$a as y,Cb as R,Gb as Z,Hb as p,Ia as N,Ib as $,Jb as U,La as C,Qb as w,R as M,S as T,Ub as _,Vb as k,W as S,Wb as G,Xa as h,Ya as P,a as I,aa as L,ab as v,ac as Y,ba as O,cb as B,kc as z,lb as E,ma as g,sb as d,tb as A,ub as D,vb as V,yb as q}from"./chunk-UA4XOS2Z.js";var X=class r{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),a=Array.isArray(e),i,s,o;if(n&&a){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!this.equalsByValue(t[i],e[i]))return!1;return!0}if(n!=a)return!1;var l=this.isDate(t),f=this.isDate(e);if(l!=f)return!1;if(l&&f)return t.getTime()==e.getTime();var u=t instanceof RegExp,m=e instanceof RegExp;if(u!=m)return!1;if(u&&m)return t.toString()==e.toString();var c=Object.keys(t);if(s=c.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[i]))return!1;for(i=s;i--!==0;)if(o=c[i],!this.equalsByValue(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let n=e.split("."),a=t;for(let i=0,s=n.length;i<s;++i){if(a==null)return null;a=a[n[i]]}return a}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,n){let a;t&&e!==n&&(n>=t.length&&(n%=t.length,e%=t.length),t.splice(n,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,n,a){if(n.length>0){let i=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],a)>e){n.splice(s,0,t),i=!0;break}i||n.push(t)}else n.push(t)}static findIndexInList(t,e){let n=-1;if(e){for(let a=0;a<e.length;a++)if(e[a]==t){n=a;break}}return n}static contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,n,a=1){let i=-1,s=this.isEmpty(t),o=this.isEmpty(e);return s&&o?i=0:s?i=a:o?i=-a:typeof t=="string"&&typeof e=="string"?i=t.localeCompare(e,n,{numeric:!0}):i=t<e?-1:t>e?1:0,i}static sort(t,e,n=1,a,i=1){let s=r.compare(t,e,a,n),o=n;return(r.isEmpty(t)||r.isEmpty(e))&&(o=i===1?n:i),o*s}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return I(I({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}static findLast(t,e){let n;if(this.isNotEmpty(t))try{n=t.findLast(e)}catch{n=[...t].reverse().find(e)}return n}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),a=Array.isArray(e),i,s,o;if(n&&a){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!this.deepEquals(t[i],e[i]))return!1;return!0}if(n!=a)return!1;var l=t instanceof Date,f=e instanceof Date;if(l!=f)return!1;if(l&&f)return t.getTime()==e.getTime();var u=t instanceof RegExp,m=e instanceof RegExp;if(u!=m)return!1;if(u&&m)return t.toString()==e.toString();var c=Object.keys(t);if(s=c.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[i]))return!1;for(i=s;i--!==0;)if(o=c[i],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}static isString(t,e=!0){return typeof t=="string"&&(e||t!=="")}};function et(){let r=[],t=(i,s)=>{let o=r.length>0?r[r.length-1]:{key:i,value:s},l=o.value+(o.key===i?0:s)+2;return r.push({key:i,value:l}),l},e=i=>{r=r.filter(s=>s.value!==i)},n=()=>r.length>0?r[r.length-1].value:0,a=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:a,set:(i,s,o)=>{s&&(s.style.zIndex=String(t(i,o)))},clear:i=>{i&&(e(a(i)),i.style.zIndex="")},getCurrent:()=>n(),generateZIndex:t,revertZIndex:e}}var Ft=et();var j=`
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
`;var rt=["*"];function it(r,t){if(r&1&&(A(0,"span"),k(1),D()),r&2){let e=p();_(e.cx("label")),C(),G(e.label)}}function at(r,t){if(r&1&&V(0,"span",4),r&2){let e=p(2);_(e.icon),d("ngClass",e.cx("icon"))}}function st(r,t){if(r&1&&v(0,at,1,3,"span",3),r&2){let e=p(),n=w(5);d("ngIf",e.icon)("ngIfElse",n)}}function ot(r,t){if(r&1){let e=R();A(0,"img",6),Z("error",function(a){F(e);let i=p(2);return L(i.imageError(a))}),D()}if(r&2){let e=p(2);d("src",e.image,N),E("aria-label",e.ariaLabel)}}function lt(r,t){if(r&1&&v(0,ot,1,2,"img",5),r&2){let e=p();d("ngIf",e.image)}}var ct={root:({instance:r})=>["p-avatar p-component",{"p-avatar-image":r.image!=null,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},tt=(()=>{class r extends J{name="avatar";theme=j;classes=ct;static \u0275fac=(()=>{let e;return function(a){return(e||(e=g(r)))(a||r)}})();static \u0275prov=M({token:r,factory:r.\u0275fac})}return r})();var pt=(()=>{class r extends Q{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new B;_componentStyle=S(tt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=g(r)))(a||r)}})();static \u0275cmp=h({type:r,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,a){n&2&&(E("data-pc-name","avatar")("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledBy),_(a.cn(a.cx("root"),a.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[Y([tt]),y],ngContentSelectors:rt,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,a){if(n&1&&($(),U(0),v(1,it,2,3,"span",2)(2,st,1,2,"ng-template",null,0,z)(4,lt,1,1,"ng-template",null,1,z)),n&2){let i=w(3);C(),d("ngIf",a.label)("ngIfElse",i)}},dependencies:[K,b,H,x],encapsulation:2,changeDetection:0})}return r})(),Jt=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=P({type:r});static \u0275inj=T({imports:[pt,x,x]})}return r})();var dt=["data-p-icon","chevron-down"],Xt=(()=>{class r extends W{static \u0275fac=(()=>{let e;return function(a){return(e||(e=g(r)))(a||r)}})();static \u0275cmp=h({type:r,selectors:[["","data-p-icon","chevron-down"]],features:[y],attrs:dt,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,a){n&1&&(O(),q(0,"path",0))},encapsulation:2})}return r})();export{Xt as a,X as b,Ft as c,pt as d,Jt as e};
