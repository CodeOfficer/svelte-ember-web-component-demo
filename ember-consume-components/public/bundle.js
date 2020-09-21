var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e,n){e in t?t[e]=n:h(t,e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let m;function g(t){m=t}function b(){if(!m)throw new Error("Function called outside component initialization");return m}function v(){const t=b();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const E=[],y=[],x=[],_=[],C=Promise.resolve();let T=!1;function k(t){x.push(t)}let w=!1;const A=new Set;function L(){if(!w){w=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];g(e),R(e.$$)}for(g(null),E.length=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];A.has(e)||(A.add(e),e())}x.length=0}while(E.length);for(;_.length;)_.pop()();T=!1,w=!1,A.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const H=new Set;function N(t,e){-1===t.$$.dirty[0]&&(E.push(t),T||(T=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(s,u,c,i,l,f,d=[-1]){const h=m;g(s);const p=u.props||{},$=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=c?c(s,p,(t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&N(s,t)),e}):[],$.update(),b=!0,o($.before_update),$.fragment=!!i&&i($.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();u.intro&&((v=s.$$.fragment)&&v.i&&(H.delete(v),v.i(E))),function(t,n,s){const{fragment:u,on_mount:c,on_destroy:a,after_update:i}=t.$$;u&&u.m(n,s),k(()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(k)}(s,u.target,u.anchor),L()}var v,E;g(h)}let M;function D(e){let n,o,r,s,m,g,b,v,E,y,x,_,C;return{c(){n=i("h1"),o=l(e[0]),r=f(),s=i("slot"),s.innerHTML='<p class="default">PARENT DEFAULT HEADER</p>',m=f(),g=i("slot"),b=i("p"),b.textContent="PARENT DEFAULT SLOT",v=f(),E=i("my-child-component"),y=f(),x=i("slot"),x.innerHTML='<p class="default">PARENT DEFAULT FOOTER</p>',this.c=t,h(s,"name","header"),h(b,"class","default"),p(E,"value",e[1]),h(x,"name","footer")},m(t,e){c(t,n,e),u(n,o),c(t,r,e),c(t,s,e),c(t,m,e),c(t,g,e),u(g,b),u(g,v),u(g,E),c(t,y,e),c(t,x,e),_||(C=d(E,"childComponentCustomEvent",F),_=!0)},p(t,[e]){1&e&&$(o,t[0]),2&e&&p(E,"value",t[1])},i:t,o:t,d(t){t&&a(n),t&&a(r),t&&a(s),t&&a(m),t&&a(g),t&&a(y),t&&a(x),_=!1,C()}}}function F(t){console.error("svelte: "+t.detail.text)}function P(t,e,n){let{label:o="default label"}=e,{value:r=0}=e;var s;return s=async()=>{},b().$$.on_mount.push(s),function(t){b().$$.before_update.push(t)}(async()=>{}),function(t){b().$$.after_update.push(t)}(async()=>{}),function(t){b().$$.on_destroy.push(t)}(async()=>{}),t.$$set=t=>{"label"in t&&n(0,o=t.label),"value"in t&&n(1,r=t.value)},[o,r]}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class S extends M{constructor(t){super(),this.shadowRoot.innerHTML="<style>h1{color:#ff3e00;text-transform:uppercase;font-size:2em;font-weight:100}::slotted(p){background:pink}.default{background:lightgrey}</style>",O(this,{target:this.shadowRoot},P,D,s,{label:0,value:1}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),L()))}static get observedAttributes(){return["label","value"]}get label(){return this.$$.ctx[0]}set label(t){this.$set({label:t}),L()}get value(){return this.$$.ctx[1]}set value(t){this.$set({value:t}),L()}}function U(e){let n,o,r,s,f,h,p;return{c(){n=i("p"),o=l("CHILD BUTTON: "),r=i("button"),s=l("Value: "),f=l(e[0]),this.c=t},m(t,a){c(t,n,a),u(n,o),u(n,r),u(r,s),u(r,f),h||(p=d(r,"click",e[1]),h=!0)},p(t,[e]){1&e&&$(f,t[0])},i:t,o:t,d(t){t&&a(n),h=!1,p()}}}function j(t,e,n){const o=b(),r=v();let{value:s=0}=e;return t.$$set=t=>{"value"in t&&n(0,s=t.value)},[s,function(){var t,e;r(t="childComponentCustomEvent",e={text:"childComponentCustomEvent"}),o.dispatchEvent&&o.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}]}customElements.define("my-parent-component",S);class z extends M{constructor(t){super(),O(this,{target:this.shadowRoot},j,U,s,{value:0}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),L()))}static get observedAttributes(){return["value"]}get value(){return this.$$.ctx[0]}set value(t){this.$set({value:t}),L()}}return customElements.define("my-child-component",z),{ParentComponent:S,ChildComponent:z}}();
//# sourceMappingURL=bundle.js.map
