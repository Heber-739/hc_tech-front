import{i as b,ja as x,k as H,n as K,na as J,pa as Q,ya as W}from"./chunk-YQM2NDZD.js";import{$ as F,$a as E,Aa as C,Bb as w,Fb as _,Gb as k,Hb as G,Ma as y,Mb as Y,Na as P,Pa as h,Q as T,Qa as v,R as M,Sa as B,Tb as z,V as L,_ as S,a as I,aa as O,fb as d,gb as A,hb as D,ib as V,la as g,lb as q,pb as R,rb as Z,sb as p,tb as $,ub as U,xa as N}from"./chunk-GL3BLS3A.js";var nt=["data-p-icon","times"],ut=(()=>{class r extends W{static \u0275fac=(()=>{let e;return function(a){return(e||(e=g(r)))(a||r)}})();static \u0275cmp=y({type:r,selectors:[["","data-p-icon","times"]],features:[h],attrs:nt,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,a){n&1&&(O(),q(0,"path",0))},encapsulation:2})}return r})();var X=class r{static isArray(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}static isObject(t,e=!0){return typeof t=="object"&&!Array.isArray(t)&&t!=null&&(e||Object.keys(t).length!==0)}static equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.equalsByValue(t,e)}static equalsByValue(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),a=Array.isArray(e),i,s,o;if(n&&a){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!this.equalsByValue(t[i],e[i]))return!1;return!0}if(n!=a)return!1;var l=this.isDate(t),f=this.isDate(e);if(l!=f)return!1;if(l&&f)return t.getTime()==e.getTime();var u=t instanceof RegExp,m=e instanceof RegExp;if(u!=m)return!1;if(u&&m)return t.toString()==e.toString();var c=Object.keys(t);if(s=c.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[i]))return!1;for(i=s;i--!==0;)if(o=c[i],!this.equalsByValue(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}static resolveFieldData(t,e){if(t&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")==-1)return t[e];{let n=e.split("."),a=t;for(let i=0,s=n.length;i<s;++i){if(a==null)return null;a=a[n[i]]}return a}}else return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,e,n){let a;t&&e!==n&&(n>=t.length&&(n%=t.length,e%=t.length),t.splice(n,0,t.splice(e,1)[0]))}static insertIntoOrderedArray(t,e,n,a){if(n.length>0){let i=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],a)>e){n.splice(s,0,t),i=!0;break}i||n.push(t)}else n.push(t)}static findIndexInList(t,e){let n=-1;if(e){for(let a=0;a<e.length;a++)if(e[a]==t){n=a;break}}return n}static contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1}static removeAccents(t){return t&&(t=t.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),t}static isDate(t){return Object.prototype.toString.call(t)==="[object Date]"}static isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!this.isDate(t)&&typeof t=="object"&&Object.keys(t).length===0}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,e,n,a=1){let i=-1,s=this.isEmpty(t),o=this.isEmpty(e);return s&&o?i=0:s?i=a:o?i=-a:typeof t=="string"&&typeof e=="string"?i=t.localeCompare(e,n,{numeric:!0}):i=t<e?-1:t>e?1:0,i}static sort(t,e,n=1,a,i=1){let s=r.compare(t,e,a,n),o=n;return(r.isEmpty(t)||r.isEmpty(e))&&(o=i===1?n:i),o*s}static merge(t,e){if(!(t==null&&e==null)){{if((t==null||typeof t=="object")&&(e==null||typeof e=="object"))return I(I({},t||{}),e||{});if((t==null||typeof t=="string")&&(e==null||typeof e=="string"))return[t||"",e||""].join(" ")}return e||t}}static isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}static getItemValue(t,...e){return this.isFunction(t)?t(...e):t}static findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}static findLast(t,e){let n;if(this.isNotEmpty(t))try{n=t.findLast(e)}catch{n=[...t].reverse().find(e)}return n}static deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),a=Array.isArray(e),i,s,o;if(n&&a){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!this.deepEquals(t[i],e[i]))return!1;return!0}if(n!=a)return!1;var l=t instanceof Date,f=e instanceof Date;if(l!=f)return!1;if(l&&f)return t.getTime()==e.getTime();var u=t instanceof RegExp,m=e instanceof RegExp;if(u!=m)return!1;if(u&&m)return t.toString()==e.toString();var c=Object.keys(t);if(s=c.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,c[i]))return!1;for(i=s;i--!==0;)if(o=c[i],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}static minifyCSS(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(t){return this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}static isString(t,e=!0){return typeof t=="string"&&(e||t!=="")}};function rt(){let r=[],t=(i,s)=>{let o=r.length>0?r[r.length-1]:{key:i,value:s},l=o.value+(o.key===i?0:s)+2;return r.push({key:i,value:l}),l},e=i=>{r=r.filter(s=>s.value!==i)},n=()=>r.length>0?r[r.length-1].value:0,a=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:a,set:(i,s,o)=>{s&&(s.style.zIndex=String(t(i,o)))},clear:i=>{i&&(e(a(i)),i.style.zIndex="")},getCurrent:()=>n(),generateZIndex:t,revertZIndex:e}}var Nt=rt();var j=`
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
`;var it=["*"];function at(r,t){if(r&1&&(A(0,"span"),k(1),D()),r&2){let e=p();_(e.cx("label")),C(),G(e.label)}}function st(r,t){if(r&1&&V(0,"span",4),r&2){let e=p(2);_(e.icon),d("ngClass",e.cx("icon"))}}function ot(r,t){if(r&1&&v(0,st,1,3,"span",3),r&2){let e=p(),n=w(5);d("ngIf",e.icon)("ngIfElse",n)}}function lt(r,t){if(r&1){let e=R();A(0,"img",6),Z("error",function(a){S(e);let i=p(2);return F(i.imageError(a))}),D()}if(r&2){let e=p(2);d("src",e.image,N),E("aria-label",e.ariaLabel)}}function ct(r,t){if(r&1&&v(0,lt,1,2,"img",5),r&2){let e=p();d("ngIf",e.image)}}var pt={root:({instance:r})=>["p-avatar p-component",{"p-avatar-image":r.image!=null,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},tt=(()=>{class r extends J{name="avatar";theme=j;classes=pt;static \u0275fac=(()=>{let e;return function(a){return(e||(e=g(r)))(a||r)}})();static \u0275prov=T({token:r,factory:r.\u0275fac})}return r})();var dt=(()=>{class r extends Q{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new B;_componentStyle=L(tt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=g(r)))(a||r)}})();static \u0275cmp=y({type:r,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(n,a){n&2&&(E("data-pc-name","avatar")("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledBy),_(a.cn(a.cx("root"),a.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[Y([tt]),h],ngContentSelectors:it,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(n,a){if(n&1&&($(),U(0),v(1,at,2,3,"span",2)(2,ot,1,2,"ng-template",null,0,z)(4,ct,1,1,"ng-template",null,1,z)),n&2){let i=w(3);C(),d("ngIf",a.label)("ngIfElse",i)}},dependencies:[K,b,H,x],encapsulation:2,changeDetection:0})}return r})(),Xt=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=P({type:r});static \u0275inj=M({imports:[dt,x,x]})}return r})();export{ut as a,X as b,Nt as c,dt as d,Xt as e};
