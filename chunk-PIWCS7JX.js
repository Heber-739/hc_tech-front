import{$ as At,Aa as Le,Ab as at,Ca as De,Cb as j,Da as M,Db as lt,Eb as ut,Fa as it,Ja as B,Jb as R,Ka as V,L as wt,La as A,Lb as Nt,M as _t,Ma as F,Na as ge,O as b,P as z,Pa as ot,Qa as fn,R as he,S as ee,Sb as xt,T as h,Tb as Mt,U as dn,Ua as hn,Ub as Me,Wb as X,Xb as Pt,Ya as le,Yb as ct,Zb as vn,_ as nt,_b as Sn,a as C,aa as x,ac as w,b as Et,bc as kt,cb as T,db as Ft,eb as Tt,fa as se,fb as Oe,gb as It,hb as Lt,i as be,ia as Ie,ib as Ot,ja as v,jb as rt,kb as st,la as ae,lb as gn,nb as mn,ob as bn,pa as ye,pb as W,qb as te,rb as ne,sb as Re,ub as Ne,vb as xe,wb as Rt,xa as O,xb as yn,ya as pn,zb as Dn}from"./chunk-VW7GKL7F.js";var wn=null;function dt(){return wn}function Vi(t){wn??=t}var Bt=class{},Pe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>h(_n),providedIn:"platform"})}return t})(),Wi=new he(""),_n=(()=>{class t extends Pe{_location;_history;_doc=h(x);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return dt().getBaseHref(this._doc)}onPopState(e){let n=dt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=dt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function pt(t,o){return t?o?t.endsWith("/")?o.startsWith("/")?t+o.slice(1):t+o:o.startsWith("/")?t+o:`${t}/${o}`:t:o}function Cn(t){let o=t.search(/#|\?|$/);return t[o-1]==="/"?t.slice(0,o-1)+t.slice(o):t}function G(t){return t&&t[0]!=="?"?`?${t}`:t}var ve=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:()=>h(An),providedIn:"root"})}return t})(),ft=new he(""),An=(()=>{class t extends ve{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??h(x).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return pt(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+G(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+G(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+G(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(ee(Pe),ee(ft,8))};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fn=(()=>{class t{_subject=new be;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Yi(Cn(En(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+G(n))}normalize(e){return t.stripTrailingSlash(Ki(this._basePath,En(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+G(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+G(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=G;static joinWithSlash=pt;static stripTrailingSlash=Cn;static \u0275fac=function(n){return new(n||t)(ee(ve))};static \u0275prov=b({token:t,factory:()=>Gi(),providedIn:"root"})}return t})();function Gi(){return new Fn(ee(ve))}function Ki(t,o){if(!t||!o.startsWith(t))return o;let e=o.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:o}function En(t){return t.replace(/\/index.html$/,"")}function Yi(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Zi=(()=>{class t extends ve{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=pt(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,i,r){let s=this.prepareExternalUrl(i+G(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,r){let s=this.prepareExternalUrl(i+G(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(ee(Pe),ee(ft,8))};static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var $t=/\s+/,Tn=[],qi=(()=>{class t{_ngEl;_renderer;initialClasses=Tn;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split($t):Tn}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split($t):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split($t).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(M(ae),M(De))};static \u0275dir=A({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var ht=class{$implicit;ngForOf;index;count;constructor(o,e,n,i){this.$implicit=o,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},On=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,r,s)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new ht(i.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),In(a,i)}});for(let i=0,r=n.length;i<r;i++){let a=n.get(i).context;a.index=i,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let r=n.get(i.currentIndex);In(r,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(M(it),M(Le),M(vn))};static \u0275dir=A({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function In(t,o){t.context.$implicit=o.item}var Ht=(()=>{class t{_viewContainer;_context=new gt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ln(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ln(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(M(it),M(Le))};static \u0275dir=A({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),gt=class{$implicit=null;ngIf=null};function Ln(t,o){if(t&&!t.createEmbeddedView)throw new wt(2020,!1)}var Ut=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,i){this._ngEl=e,this._differs=n,this._renderer=i}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[i,r]=e.split("."),s=i.indexOf("-")===-1?void 0:pn.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,i,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(M(ae),M(Sn),M(De))};static \u0275dir=A({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),jt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(M(it))};static \u0275dir=A({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ie]})}return t})();var Q=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=V({type:t});static \u0275inj=z({})}return t})();function Xi(t,o){o=encodeURIComponent(o);for(let e of t.split(";")){let n=e.indexOf("="),[i,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===o)return decodeURIComponent(r)}return null}var zt=class{};var Ji="browser",eo="server";function mt(t){return t===Ji}function Rn(t){return t===eo}var Js=(()=>{class t{static \u0275prov=b({token:t,providedIn:"root",factory:()=>new Vt(h(x),window)})}return t})(),Vt=class{document;window;offset=()=>[0,0];constructor(o,e){this.document=o,this.window=e}setOffset(o){Array.isArray(o)?this.offset=()=>o:this.offset=o}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(o,e){this.window.scrollTo(Et(C({},e),{left:o[0],top:o[1]}))}scrollToAnchor(o,e){let n=to(this.document,o);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(o){try{this.window.history.scrollRestoration=o}catch{console.warn(_t(2400,!1))}}scrollToElement(o,e){let n=o.getBoundingClientRect(),i=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(Et(C({},e),{left:i-s[0],top:r-s[1]}))}};function to(t,o){let e=t.getElementById(o)||t.getElementsByName(o)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let s=r.getElementById(o)||r.querySelector(`[name="${o}"]`);if(s)return s}i=n.nextNode()}}return null}function Se(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Se(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Nn(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function ie(t,o){if(t&&o){let e=n=>{Nn(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function io(){return window.innerWidth-document.documentElement.offsetWidth}function xn(t){typeof t=="string"?ie(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,io()+"px"),ie(document.body,t?.className||"p-overflow-hidden"))}function ue(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Mn(t){typeof t=="string"?ue(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),ue(document.body,t?.className||"p-overflow-hidden"))}function bt(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function oo(t){let o={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display=n,t.style.visibility=e}return o}function ro(){let t=window,o=document,e=o.documentElement,n=o.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:r}}function Wt(t){return t?Math.abs(t.scrollLeft):0}function so(){let t=document.documentElement;return(window.pageXOffset||Wt(t))-(t.clientLeft||0)}function ao(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function lo(t){return t?getComputedStyle(t).direction==="rtl":!1}function sa(t,o,e=!0){var n,i,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:oo(t),l=a.height,u=a.width,c=o.offsetHeight,f=o.offsetWidth,d=o.getBoundingClientRect(),p=ao(),g=so(),m=ro(),y,E,_="top";d.top+c+l>m.height?(y=d.top+p-l,_="bottom",y<0&&(y=p)):y=c+d.top+p,d.left+u>m.width?E=Math.max(0,d.left+g+f-u):E=d.left+g,lo(t)?t.style.insetInlineEnd=E+"px":t.style.insetInlineStart=E+"px",t.style.top=y+"px",t.style.transformOrigin=_,e&&(t.style.marginTop=_==="bottom"?`calc(${(i=(n=bt(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=bt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function Pn(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function uo(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function co(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&uo(t))}function ke(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function kn(t){let o=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?o=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?o=t.el.nativeElement:o=t.el)),ke(o)?o:void 0}function po(t,o){var e,n,i;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(e=o?.children)==null?void 0:e[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=kn(r);return co(s)?s:r?.nodeType===9?r:void 0}}}function aa(t,o){let e=po(t,o);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function Gt(t,o={}){if(ke(t)){let e=(n,i)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[i].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let f=Array.isArray(u)?e(n,u):Object.entries(u).map(([d,p])=>n==="style"&&(p||p===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?d:void 0);l=f.length?l.concat(f.filter(d=>!!d)):l}}return l},a)};Object.entries(o).forEach(([n,i])=>{if(i!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),i):n==="p-bind"||n==="pBind"?Gt(t,i):(i=n==="class"?[...new Set(e("class",i))].join(" ").trim():n==="style"?e("style",i).join(";").trim():i,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=i),t.setAttribute(n,i))}})}}function la(t,o){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function fo(t,o){return ke(t)?Array.from(t.querySelectorAll(o)):[]}function Ce(t,o){return ke(t)?t.matches(o)?t:t.querySelector(o):null}function ua(t,o){t&&document.activeElement!==t&&t.focus(o)}function Bn(t,o=""){let e=fo(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of e)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function ca(t,o){let e=Bn(t,o);return e.length>0?e[0]:null}function Kt(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function da(t,o){let e=Bn(t,o);return e.length>0?e[e.length-1]:null}function $n(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Wt(document.documentElement)||Wt(document.body)||0)}}return{top:"auto",left:"auto"}}function Yt(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function Zt(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function pa(t){return!!(t&&t.offsetParent!=null)}function fa(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function ha(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Hn(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function ga(t,o){let e=kn(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function ma(t,o){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,s=t.getBoundingClientRect(),a=o.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,c=Yt(o);a<0?t.scrollTop=l+a:a+c>u&&(t.scrollTop=l+a-u+c)}function Un(t,o="",e){ke(t)&&e!==null&&e!==void 0&&t.setAttribute(o,e)}function jn(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}var ho=Object.defineProperty,zn=Object.getOwnPropertySymbols,go=Object.prototype.hasOwnProperty,mo=Object.prototype.propertyIsEnumerable,Vn=(t,o,e)=>o in t?ho(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,bo=(t,o)=>{for(var e in o||(o={}))go.call(o,e)&&Vn(t,e,o[e]);if(zn)for(var e of zn(o))mo.call(o,e)&&Vn(t,e,o[e]);return t};function J(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function qt(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let n=Array.isArray(t),i=Array.isArray(o),r,s,a;if(n&&i){if(s=t.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!qt(t[r],o[r],e))return!1;return!0}if(n!=i)return!1;let l=t instanceof Date,u=o instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==o.getTime();let c=t instanceof RegExp,f=o instanceof RegExp;if(c!=f)return!1;if(c&&f)return t.toString()==o.toString();let d=Object.keys(t);if(s=d.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,d[r]))return!1;for(r=s;r--!==0;)if(a=d[r],!qt(t[a],o[a],e))return!1;return!0}function yo(t,o){return qt(t,o)}function Gn(t){return typeof t=="function"&&"call"in t&&"apply"in t}function S(t){return!J(t)}function yt(t,o){if(!t||!o)return null;try{let e=t[o];if(S(e))return e}catch{}if(Object.keys(t).length){if(Gn(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),n=t;for(let i=0,r=e.length;i<r;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function Xt(t,o,e){return e?yt(t,e)===yt(o,e):yo(t,o)}function Da(t,o){if(t!=null&&o&&o.length){for(let e of o)if(Xt(t,e))return!0}return!1}function K(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function Kn(t={},o={}){let e=bo({},t);return Object.keys(o).forEach(n=>{let i=n;K(o[i])&&i in t&&K(t[i])?e[i]=Kn(t[i],o[i]):e[i]=o[i]}),e}function Yn(...t){return t.reduce((o,e,n)=>n===0?e:Kn(o,e),{})}function va(t,o){let e=-1;if(S(t))try{e=t.findLastIndex(o)}catch{e=t.lastIndexOf([...t].reverse().find(o))}return e}function P(t,...o){return Gn(t)?t(...o):t}function ce(t,o=!0){return typeof t=="string"&&(o||t!=="")}function Wn(t){return ce(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Dt(t,o="",e={}){let n=Wn(o).split("."),i=n.shift();if(i){if(K(t)){let r=Object.keys(t).find(s=>Wn(s)===i)||"";return Dt(P(t[r],e),n.join("."),e)}return}return P(t,e)}function Zn(t){return S(t)&&!isNaN(t)}function Sa(t=""){return S(t)&&t.length===1&&!!t.match(/\S| /)}function Y(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function me(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function H(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let o={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in o)t=t.replace(o[e],e)}return t}function vt(t){return ce(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(o,e)=>e===0?o:"-"+o.toLowerCase()).toLowerCase():t}var St={};function Be(t="pui_id_"){return Object.hasOwn(St,t)||(St[t]=0),St[t]++,`${t}${St[t]}`}var qn=["*"];var I=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Fa=(()=>{class t{filter(e,n,i,r,s){let a=[];if(e)for(let l of e)for(let u of n){let c=yt(l,u);if(this.filters[r](c,i,s)){a.push(l);break}}return a}filters={startsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=H(n.toString()).toLocaleLowerCase(i);return H(e.toString()).toLocaleLowerCase(i).slice(0,r.length)===r},contains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=H(n.toString()).toLocaleLowerCase(i);return H(e.toString()).toLocaleLowerCase(i).indexOf(r)!==-1},notContains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=H(n.toString()).toLocaleLowerCase(i);return H(e.toString()).toLocaleLowerCase(i).indexOf(r)===-1},endsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=H(n.toString()).toLocaleLowerCase(i),s=H(e.toString()).toLocaleLowerCase(i);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:H(e.toString()).toLocaleLowerCase(i)==H(n.toString()).toLocaleLowerCase(i),notEquals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:H(e.toString()).toLocaleLowerCase(i)!=H(n.toString()).toLocaleLowerCase(i),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let i=0;i<n.length;i++)if(Xt(e,n[i]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,i)=>this.filters.equals(e,n,i),isNot:(e,n,i)=>this.filters.notEquals(e,n,i),before:(e,n,i)=>this.filters.lt(e,n,i),after:(e,n,i)=>this.filters.gt(e,n,i),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ta=(()=>{class t{clickSource=new be;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ia=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=B({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:qn,decls:1,vars:0,template:function(n,i){n&1&&(te(),ne(0))},encapsulation:2})}return t})(),La=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=B({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:qn,decls:1,vars:0,template:function(n,i){n&1&&(te(),ne(0))},encapsulation:2})}return t})(),Xn=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(M(Le))};static \u0275dir=A({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),de=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=V({type:t});static \u0275inj=z({imports:[Q]})}return t})(),Oa=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Do=Object.defineProperty,vo=Object.defineProperties,So=Object.getOwnPropertyDescriptors,Ct=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ti=Object.prototype.propertyIsEnumerable,Qn=(t,o,e)=>o in t?Do(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,q=(t,o)=>{for(var e in o||(o={}))ei.call(o,e)&&Qn(t,e,o[e]);if(Ct)for(var e of Ct(o))ti.call(o,e)&&Qn(t,e,o[e]);return t},Qt=(t,o)=>vo(t,So(o)),oe=(t,o)=>{var e={};for(var n in t)ei.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Ct)for(var n of Ct(t))o.indexOf(n)<0&&ti.call(t,n)&&(e[n]=t[n]);return e};function Ma(...t){return Yn(...t)}var Co=jn(),U=Co,$e=/{([^}]*)}/g,ni=/(\d+\s+[\+\-\*\/]\s+\d+)/g,ii=/var\([^)]+\)/g;function Jn(t){return ce(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}function Eo(t){return K(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function wo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Jt(t="",o=""){return wo(`${ce(t,!1)&&ce(o,!1)?`${t}-`:t}${o}`)}function oi(t="",o=""){return`--${Jt(t,o)}`}function _o(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function ri(t,o="",e="",n=[],i){if(ce(t)){let r=t.trim();if(_o(r))return;if(Y(r,$e)){let s=r.replaceAll($e,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>Y(u,c)));return`var(${oi(e,vt(l.join("-")))}${S(i)?`, ${i}`:""})`});return Y(s.replace(ii,"0"),ni)?`calc(${s})`:s}return r}else if(Zn(t))return t}function Ao(t,o,e){ce(o,!1)&&t.push(`${o}:${e};`)}function Ee(t,o){return t?`${t}{${o}}`:""}function si(t,o){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",f=null,d=0;for(;u<=s.length;){let p=s[u];if((p==='"'||p==="'"||p==="`")&&s[u-1]!=="\\"&&(f=f===p?null:p),!f&&(p==="("&&d++,p===")"&&d--,(p===","||u===s.length)&&d===0)){let g=c.trim();g.startsWith("dt(")?l.push(si(g,a)):l.push(n(g)),c="",u++;continue}p!==void 0&&(c+=p),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let i=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[a,l]=i[s],u=t.slice(a+3,l),c=e(u,o),f=o(...c);t=t.slice(0,a)+f+t.slice(l+1)}return t}var tn=t=>{var o;let e=D.getTheme(),n=en(e,t,void 0,"variable"),i=(o=n?.match(/--[\w-]+/g))==null?void 0:o[0],r=en(e,t,void 0,"value");return{name:i,variable:n,value:r}},re=(...t)=>en(D.getTheme(),...t),en=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=D.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=Y(o,$e)?o:`{${o}}`;return n==="value"||J(n)&&a==="strict"?D.getTokenValue(o):ri(l,void 0,s,[i.excludedKeyRegex],e)}return""};function we(t,...o){if(t instanceof Array){let e=t.reduce((n,i,r)=>{var s;return n+i+((s=P(o[r],{dt:re}))!=null?s:"")},"");return si(e,re)}return P(t,{dt:re})}function Fo(t,o={}){let e=D.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:f}=l.pop();for(let d in c){let p=c[d],g=Eo(p),m=Y(d,r)?Jt(f):Jt(f,vt(d));if(K(g))l.push({node:g,path:m});else{let y=oi(m),E=ri(g,m,n,[r]);Ao(a,y,E);let _=m;n&&_.startsWith(n+"-")&&(_=_.slice(n.length+1)),s.push(_.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Ee(i,u)}}var Z={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root,:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return Fo(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,a,l,u,c,f;let{preset:d,options:p}=o,g,m,y,E,_,k,He;if(S(d)&&p.transform!=="strict"){let{primitive:Ue,semantic:je,extend:ze}=d,Ae=je||{},{colorScheme:Ve}=Ae,We=oe(Ae,["colorScheme"]),Ge=ze||{},{colorScheme:Ke}=Ge,Fe=oe(Ge,["colorScheme"]),Te=Ve||{},{dark:Ye}=Te,Ze=oe(Te,["dark"]),qe=Ke||{},{dark:Xe}=qe,Qe=oe(qe,["dark"]),Je=S(Ue)?this._toVariables({primitive:Ue},p):{},et=S(We)?this._toVariables({semantic:We},p):{},tt=S(Ze)?this._toVariables({light:Ze},p):{},an=S(Ye)?this._toVariables({dark:Ye},p):{},ln=S(Fe)?this._toVariables({semantic:Fe},p):{},un=S(Qe)?this._toVariables({light:Qe},p):{},cn=S(Xe)?this._toVariables({dark:Xe},p):{},[Ai,Fi]=[(r=Je.declarations)!=null?r:"",Je.tokens],[Ti,Ii]=[(s=et.declarations)!=null?s:"",et.tokens||[]],[Li,Oi]=[(a=tt.declarations)!=null?a:"",tt.tokens||[]],[Ri,Ni]=[(l=an.declarations)!=null?l:"",an.tokens||[]],[xi,Mi]=[(u=ln.declarations)!=null?u:"",ln.tokens||[]],[Pi,ki]=[(c=un.declarations)!=null?c:"",un.tokens||[]],[Bi,$i]=[(f=cn.declarations)!=null?f:"",cn.tokens||[]];g=this.transformCSS(t,Ai,"light","variable",p,n,i),m=Fi;let Hi=this.transformCSS(t,`${Ti}${Li}`,"light","variable",p,n,i),Ui=this.transformCSS(t,`${Ri}`,"dark","variable",p,n,i);y=`${Hi}${Ui}`,E=[...new Set([...Ii,...Oi,...Ni])];let ji=this.transformCSS(t,`${xi}${Pi}color-scheme:light`,"light","variable",p,n,i),zi=this.transformCSS(t,`${Bi}color-scheme:dark`,"dark","variable",p,n,i);_=`${ji}${zi}`,k=[...new Set([...Mi,...ki,...$i])],He=P(d.css,{dt:re})}return{primitive:{css:g,tokens:m},semantic:{css:y,tokens:E},global:{css:_,tokens:k},style:He}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var a,l,u;let c,f,d;if(S(o)&&e.transform!=="strict"){let p=t.replace("-directive",""),g=o,{colorScheme:m,extend:y,css:E}=g,_=oe(g,["colorScheme","extend","css"]),k=y||{},{colorScheme:He}=k,Ue=oe(k,["colorScheme"]),je=m||{},{dark:ze}=je,Ae=oe(je,["dark"]),Ve=He||{},{dark:We}=Ve,Ge=oe(Ve,["dark"]),Ke=S(_)?this._toVariables({[p]:q(q({},_),Ue)},e):{},Fe=S(Ae)?this._toVariables({[p]:q(q({},Ae),Ge)},e):{},Te=S(ze)?this._toVariables({[p]:q(q({},ze),We)},e):{},[Ye,Ze]=[(a=Ke.declarations)!=null?a:"",Ke.tokens||[]],[qe,Xe]=[(l=Fe.declarations)!=null?l:"",Fe.tokens||[]],[Qe,Je]=[(u=Te.declarations)!=null?u:"",Te.tokens||[]],et=this.transformCSS(p,`${Ye}${qe}`,"light","variable",e,i,r,s),tt=this.transformCSS(p,Qe,"dark","variable",e,i,r,s);c=`${et}${tt}`,f=[...new Set([...Ze,...Xe,...Je])],d=P(E,{dt:re})}return{css:c,tokens:f,style:d}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:a}=o,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=o,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${P(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(K(c)&&Object.hasOwn(c,"css")){let f=me(c.css),d=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${d}" ${a}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let a={name:t,theme:o,params:e,set:i,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[f,d])=>c.push(`${f}="${d}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${me(l)}</style>`:""},createTokens(t={},o,e="",n="",i={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&$e.test(this.value)){let f=this.value.trim().replace($e,d=>{var p;let g=d.slice(1,-1),m=this.tokens[g];if(!m)return console.warn(`Token not found for path: ${g}`),"__UNRESOLVED__";let y=m.computed(a,l,u);return Array.isArray(y)&&y.length===2?`light-dark(${y[0].value},${y[1].value})`:(p=y?.value)!=null?p:"__UNRESOLVED__"});c=ni.test(f.replace(ii,"0"))?`calc(${f})`:f}return J(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,f])=>{let d=Y(c,o.variable.excludedKeyRegex)?l:l?`${l}.${Jn(c)}`:Jn(c),p=u?`${u}.${c}`:c;K(f)?s(f,d,p):(i[d]||(i[d]={paths:[],computed:(g,m={},y=[])=>{if(i[d].paths.length===1)return i[d].paths[0].computed(i[d].paths[0].scheme,m.binding,y);if(g&&g!=="none")for(let E=0;E<i[d].paths.length;E++){let _=i[d].paths[E];if(_.scheme===g)return _.computed(g,m.binding,y)}return i[d].paths.map(E=>E.computed(E.scheme,m[E.scheme],y))}}),i[d].paths.push({path:p,value:f,scheme:p.includes("colorScheme.light")?"light":p.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,o,e){var n;let i=(a=>a.split(".").filter(l=>!Y(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,f=oe(u,["colorScheme"]);return a[c]=f,a},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?Ee(S(o)?`${t}${o},${t} ${o}`:t,n):Ee(t,Ee(o??":root,:host",n))},transformCSS(t,o,e,n,i={},r,s,a){if(S(o)){let{cssLayer:l}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=e==="dark"?u.reduce((c,{type:f,selector:d})=>(S(d)&&(c+=d.includes("[CSS]")?d.replace("[CSS]",o):this.getSelectorRule(d,a,f,o)),c),""):Ee(a??":root,:host",o)}if(l){let u={name:"primeui",order:"primeui"};K(l)&&(u.name=P(l.name,{name:t,type:n})),S(u.name)&&(o=Ee(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},D={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=Qt(q({},o),{options:q(q({},this.defaults.options),o.options)}),this._tokens=Z.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),U.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Qt(q({},this.theme),{preset:t}),this._tokens=Z.createTokens(t,this.defaults),this.clearLoadedStyleNames(),U.emit("preset:change",t),U.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Qt(q({},this.theme),{options:t}),this.clearLoadedStyleNames(),U.emit("options:change",t),U.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Z.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return Z.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Z.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Z.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Z.getPreset(i)},getLayerOrderCSS(t=""){return Z.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return Z.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return Z.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return Z.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),U.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&U.emit("theme:load"))}};var ai=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var To=0,li=(()=>{class t{document=h(x);use(e,n={}){let i=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++To}`,id:c=void 0,media:f=void 0,nonce:d=void 0,first:p=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let m=this.document.head;Un(s,"nonce",d),p&&m.firstChild?m.insertBefore(s,m.firstChild):m.appendChild(s),Gt(s,{type:"text/css",media:f,nonce:d,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _e={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Io=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,L=(()=>{class t{name="base";useStyle=h(li);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(we`${P(e,{dt:re})}`);return r?this.useStyle.use(me(r),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(i="")=>D.transformCSS(e.name||this.name,`${i}${we`${n}`}`));loadGlobalCSS=(e={})=>this.load(Io,e);loadGlobalTheme=(e={},n="")=>this.load(ai,e,(i="")=>D.transformCSS(e.name||this.name,`${i}${we`${n}`}`));getCommonTheme=e=>D.getCommon(this.name,e);getComponentTheme=e=>D.getComponent(this.name,e);getDirectiveTheme=e=>D.getDirective(this.name,e);getPresetTheme=(e,n,i)=>D.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>D.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=P(this.css,{dt:re}),r=me(we`${i}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>D.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[D.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=we`${P(this.theme,{dt:re})}`,a=me(D.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,f])=>u.push(`${c}="${f}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Lo=(()=>{class t{theme=se(void 0);csp=se({nonce:void 0});isThemeChanged=!1;document=h(x);baseStyle=h(L);constructor(){Me(()=>{U.on("theme:change",e=>{xt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),Me(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){D.clearLoadedStyleNames(),U.clear()}onThemeChange(e){D.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),r),D.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nn=(()=>{class t extends Lo{ripple=se(!1);platformId=h(ye);inputStyle=se(null);inputVariant=se(null);overlayAppendTo=se("self");overlayOptions={};csp=se({nonce:void 0});filterMatchModeOptions={text:[I.STARTS_WITH,I.CONTAINS,I.NOT_CONTAINS,I.ENDS_WITH,I.EQUALS,I.NOT_EQUALS],numeric:[I.EQUALS,I.NOT_EQUALS,I.LESS_THAN,I.LESS_THAN_OR_EQUAL_TO,I.GREATER_THAN,I.GREATER_THAN_OR_EQUAL_TO],date:[I.DATE_IS,I.DATE_IS_NOT,I.DATE_BEFORE,I.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new be;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:f,zIndex:d}=e||{};n&&this.csp.set(n),f&&this.overlayAppendTo.set(f),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),d&&(this.zIndex=d),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oo=new he("PRIME_NG_CONFIG");function cl(...t){let o=t?.map(n=>({provide:Oo,useValue:n,multi:!1})),e=hn(()=>{let n=h(nn);t?.forEach(i=>n.setConfig(i))});return dn([...o,e])}var ui=(()=>{class t extends L{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),N=(()=>{class t{document=h(x);platformId=h(ye);el=h(ae);injector=h(At);cd=h(ct);renderer=h(De);config=h(nn);baseComponentStyle=h(ui);baseStyle=h(L);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Be("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",i={}){return Dt(e,n,i)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Rn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>U.off("theme:change",e))}_loadStyles(){let e=()=>{_e.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),_e.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!_e.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),_e.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!D.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,C({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(i?.css,C({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},this.styleOptions),r),D.setLoadedStyleName("common")}if(!D.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,C({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(C({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),D.setLoadedStyleName(this.componentStyle?.name)}if(!D.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,C({name:"layer-order",first:!0},this.styleOptions)),D.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},i=this.componentStyle?.load(n,C({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){_e.clearLoadedStyleNames(),U.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return Se(this._getOptionValue(this.$style?.classes,e,C({instance:this},n)))}sx(e="",n=!0,i={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,C({instance:this},i))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Se;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,inputs:{dt:"dt"},features:[R([ui,L]),Ie]})}return t})();var on=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=k=>{if(k)return getComputedStyle(k).getPropertyValue("position")==="relative"?k:r(k.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),f=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},g,m,y="top";l.top+a+s.height>f.height?(g=l.top-p.top-s.height,y="bottom",l.top+g<0&&(g=-1*l.top)):(g=a+l.top-p.top,y="top");let E=l.left+s.width-f.width,_=l.left-p.left;if(s.width>f.width?m=(l.left-p.left)*-1:E>0?m=_-E:m=l.left-p.left,e.style.top=g+"px",e.style.left=m+"px",e.style.transformOrigin=y,i){let k=bt(/-anchor-gutter$/)?.value;e.style.marginTop=y==="bottom"?`calc(${k??"2px"} * -1)`:k??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),f=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),p=this.getViewport(),g,m;c.top+l+s>p.height?(g=c.top+f-s,e.style.transformOrigin="bottom",g<0&&(g=f)):(g=l+c.top+f,e.style.transformOrigin="top"),c.left+a>p.width?m=Math.max(0,c.left+d+u-a):m=c.left+d,e.style.top=g+"px",e.style.left=m+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let f=this.findSingle(a,c);f&&s(f)&&n.push(f)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,f=e.scrollTop,d=e.clientHeight,p=this.getOuterHeight(n);c<0?e.scrollTop=f+c:c+p>d&&(e.scrollTop=f+c-d+p)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let f=Array.isArray(u)?i(r,u):Object.entries(u).map(([d,p])=>r==="style"&&(p||p===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?d:void 0);l=f.length?l.concat(f.filter(d=>!!d)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Fl(){xn({variableName:tn("scrollbar.width").name})}function Tl(){Mn({variableName:tn("scrollbar.width").name})}var ci=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=on.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var di=(()=>{class t extends N{autofocus=!1;focused=!1;platformId=h(ye);document=h(x);host=h(ae);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){mt(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=on.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[F]})}return t})();var pi=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Ro=`
    ${pi}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,No={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":S(t.value())&&String(t.value()).length===1,"p-badge-dot":J(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},fi=(()=>{class t extends L{name="badge";theme=Ro;classes=No;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var rn=(()=>{class t extends N{styleClass=X();badgeSize=X();size=X();severity=X();value=X();badgeDisabled=X(!1,{transform:w});_componentStyle=h(fi);static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=B({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(j(i.cn(i.cx("root"),i.styleClass())),Dn("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[R([fi]),F],decls:1,vars:1,template:function(n,i){n&1&&lt(0),n&2&&ut(i.value())},dependencies:[Q,de],encapsulation:2,changeDetection:0})}return t})(),hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=V({type:t});static \u0275inj=z({imports:[rn,de,de]})}return t})();var Mo=["*"],Po={root:"p-fluid"},gi=(()=>{class t extends L{name="fluid";classes=Po;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var sn=(()=>{class t extends N{_componentStyle=h(gi);static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=B({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&j(i.cx("root"))},features:[R([gi]),F],ngContentSelectors:Mo,decls:1,vars:0,template:function(n,i){n&1&&(te(),ne(0))},dependencies:[Q],encapsulation:2,changeDetection:0})}return t})();var ko=["*"],Bo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,mi=(()=>{class t extends L{name="baseicon";css=Bo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bi=(()=>{class t extends N{spin=!1;_componentStyle=h(mi);getClassNames(){return Se("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=B({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&j(i.getClassNames())},inputs:{spin:[2,"spin","spin",w]},features:[R([mi]),F],ngContentSelectors:ko,decls:1,vars:0,template:function(n,i){n&1&&(te(),ne(0))},encapsulation:2,changeDetection:0})}return t})();var $o=["data-p-icon","spinner"],yi=(()=>{class t extends bi{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Be()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=B({type:t,selectors:[["","data-p-icon","spinner"]],features:[F],attrs:$o,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(nt(),It(0,"g"),Ot(1,"path",0),Lt(),It(2,"defs")(3,"clipPath",1),Ot(4,"rect",2),Lt()()),n&2&&(le("clip-path",i.pathId),O(3),mn("id",i.pathId))},encapsulation:2})}return t})();var Di=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Ho=`
    ${Di}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Uo={root:"p-ink"},vi=(()=>{class t extends L{name="ripple";theme=Ho;classes=Uo;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var Si=(()=>{class t extends N{zone=h(fn);_componentStyle=h(vi);animationListener;mouseDownListener;timeout;constructor(){super(),Me(()=>{mt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(ue(n,"p-ink-active"),!Kt(n)&&!Zt(n)){let a=Math.max(Pn(this.el.nativeElement),Yt(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=$n(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Zt(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Kt(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ie(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ue(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&ue(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ue(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Hn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[R([vi]),F]})}return t})();var Ci=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var jo=["content"],zo=["loadingicon"],Vo=["icon"],Wo=["*"],_i=t=>({class:t});function Go(t,o){t&1&&gn(0)}function Ko(t,o){if(t&1&&Oe(0,"span"),t&2){let e=W(3);j(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon)),le("aria-hidden",!0)("data-pc-section","loadingicon")}}function Yo(t,o){if(t&1&&(nt(),Oe(0,"svg",7)),t&2){let e=W(3);j(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),T("spin",!0),le("aria-hidden",!0)("data-pc-section","loadingicon")}}function Zo(t,o){if(t&1&&(rt(0),ge(1,Ko,1,4,"span",3)(2,Yo,1,5,"svg",6),st()),t&2){let e=W(2);O(),T("ngIf",e.loadingIcon),O(),T("ngIf",!e.loadingIcon)}}function qo(t,o){}function Xo(t,o){if(t&1&&ge(0,qo,0,0,"ng-template",8),t&2){let e=W(2);T("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Qo(t,o){if(t&1&&(rt(0),ge(1,Zo,3,2,"ng-container",2)(2,Xo,1,1,null,5),st()),t&2){let e=W();O(),T("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),O(),T("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Nt(3,_i,e.cx("loadingIcon")))}}function Jo(t,o){if(t&1&&Oe(0,"span"),t&2){let e=W(2);j(e.cn("icon",e.iconClass())),le("data-pc-section","icon")}}function er(t,o){}function tr(t,o){if(t&1&&ge(0,er,0,0,"ng-template",8),t&2){let e=W(2);T("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function nr(t,o){if(t&1&&(rt(0),ge(1,Jo,1,3,"span",3)(2,tr,1,1,null,5),st()),t&2){let e=W();O(),T("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),O(),T("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Nt(3,_i,e.cx("icon")))}}function ir(t,o){if(t&1&&(Ft(0,"span"),lt(1),Tt()),t&2){let e=W();j(e.cx("label")),le("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),O(),ut(e.label)}}function or(t,o){if(t&1&&Oe(0,"p-badge",9),t&2){let e=W();T("value",e.badge)("severity",e.badgeSeverity)}}var rr={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},fe=(()=>{class t extends L{name="button";theme=Ci;classes=rr;static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var pe={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Ei=(()=>{class t extends N{_componentStyle=h(fe);static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&at("p-button-label",!0)},features:[R([fe]),F]})}return t})(),wi=(()=>{class t extends N{_componentStyle=h(fe);static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&at("p-button-icon",!0)},features:[R([fe]),F]})}return t})(),nc=(()=>{class t extends N{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Pt(wi);labelSignal=Pt(Ei);isIconOnly=Mt(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=X(void 0,{transform:w});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(pe);pcFluid=h(sn,{optional:!0,host:!0,skipSelf:!0});isTextButton=Mt(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=h(fe);ngAfterViewInit(){super.ngAfterViewInit(),ie(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[pe.button,pe.component];return this.icon&&!this.label&&J(this.htmlElement.textContent)&&e.push(pe.iconOnly),this.loading&&(e.push(pe.disabled,pe.loading),!this.icon&&this.label&&e.push(pe.labelOnly),this.icon&&!this.label&&!J(this.htmlElement.textContent)&&e.push(pe.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>e.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!Ce(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!Ce(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&ie(n,i);let r=this.getIconClass();r&&ie(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=Ce(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=Ce(this.htmlElement,".p-button-icon"),n=Ce(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275dir=A({type:t,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(Rt(r,i.iconSignal,wi,5),Rt(r,i.labelSignal,Ei,5)),n&2&&yn(2)},hostVars:4,hostBindings:function(n,i){n&2&&at("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],outlined:[2,"outlined","outlined",w],size:"size",plain:[2,"plain","plain",w],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[R([fe]),F]})}return t})(),sr=(()=>{class t extends N{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=X(void 0,{transform:w});onClick=new ot;onFocus=new ot;onBlur=new ot;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=h(sn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=h(fe);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=v(t)))(i||t)}})();static \u0275cmp=B({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(Re(r,jo,5),Re(r,zo,5),Re(r,Vo,5),Re(r,Xn,4)),n&2){let s;Ne(s=xe())&&(i.contentTemplate=s.first),Ne(s=xe())&&(i.loadingIconTemplate=s.first),Ne(s=xe())&&(i.iconTemplate=s.first),Ne(s=xe())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",w],loading:[2,"loading","loading",w],loadingIcon:"loadingIcon",raised:[2,"raised","raised",w],rounded:[2,"rounded","rounded",w],text:[2,"text","text",w],plain:[2,"plain","plain",w],severity:"severity",outlined:[2,"outlined","outlined",w],link:[2,"link","link",w],tabindex:[2,"tabindex","tabindex",kt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",w],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([fe]),F],ngContentSelectors:Wo,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(te(),Ft(0,"button",0),bn("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ne(1),ge(2,Go,1,0,"ng-container",1)(3,Qo,3,5,"ng-container",2)(4,nr,3,5,"ng-container",2)(5,ir,2,5,"span",3)(6,or,1,2,"p-badge",4),Tt()),n&2&&(j(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),T("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),le("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),O(2),T("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),O(),T("ngIf",i.loading),O(),T("ngIf",!i.loading),O(),T("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),O(),T("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[Q,Ht,jt,Ut,Si,di,yi,hi,rn,de],encapsulation:2,changeDetection:0})}return t})(),ic=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=V({type:t});static \u0275inj=z({imports:[Q,sr,de,de]})}return t})();export{dt as a,Vi as b,Bt as c,Wi as d,ve as e,An as f,Fn as g,Zi as h,qi as i,On as j,Ht as k,Ut as l,jt as m,Q as n,Xi as o,zt as p,Ji as q,mt as r,Js as s,Nn as t,ie as u,ue as v,ro as w,so as x,ao as y,sa as z,Pn as A,po as B,aa as C,la as D,Ce as E,ua as F,Bn as G,ca as H,Kt as I,da as J,$n as K,Yt as L,Zt as M,pa as N,fa as O,ha as P,ga as Q,ma as R,Un as S,J as T,yo as U,S as V,yt as W,Xt as X,Da as Y,va as Z,Sa as _,Be as $,Fa as aa,Ta as ba,Ia as ca,La as da,Xn as ea,de as fa,Oa as ga,Ma as ha,tn as ia,L as ja,cl as ka,N as la,on as ma,Fl as na,Tl as oa,ci as pa,di as qa,rn as ra,hi as sa,sn as ta,bi as ua,yi as va,Si as wa,Ei as xa,wi as ya,nc as za,sr as Aa,ic as Ba};
