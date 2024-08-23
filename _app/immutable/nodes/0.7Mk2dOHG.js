import{s as W,c as O,u as P,g as B,a as q,x as T,y as ne,z as G,n as ae,o as ge}from"../chunks/scheduler.CVYkhA6E.js";import{S as D,i as H,e as p,g as b,h as k,j as d,k as g,l as x,q as _,t as $,b as v,z as fe,u as K,A as ue,B as Q,C as $e,c as C,a as E,m as j,d as I,s as M,n as F,f as A}from"../chunks/index.BaoX4_Ca.js";function se(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function X(r,e){const o={},l={},n={$$scope:1};let t=r.length;for(;t--;){const s=r[t],i=e[t];if(i){for(const u in s)u in i||(l[u]=1);for(const u in i)n[u]||(o[u]=i[u],n[u]=1);r[t]=i}else for(const u in s)n[u]=1}for(const s in l)s in o||(o[s]=void 0);return o}function ce(r){return typeof r=="object"&&r!==null?r:{}}function ve(r){let e,o,l;const n=r[1].default,t=O(n,r,r[0],null);return{c(){e=p("div"),o=p("main"),t&&t.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var i=k(e);o=b(i,"MAIN",{class:!0});var u=k(o);t&&t.l(u),u.forEach(d),i.forEach(d),this.h()},h(){g(o,"class","grid grid-rows-auto col-span-full lg:col-start-1 lg:col-span-full"),g(e,"class","grid grid-rows-auto grid-cols-6 2xl:grid-cols-12 grid-flow-col gap-4")},m(s,i){x(s,e,i),_(e,o),t&&t.m(o,null),l=!0},p(s,[i]){t&&t.p&&(!l||i&1)&&P(t,n,s,s[0],l?q(n,s[0],i,null):B(s[0]),null)},i(s){l||($(t,s),l=!0)},o(s){v(t,s),l=!1},d(s){s&&d(e),t&&t.d(s)}}}function _e(r,e,o){let{$$slots:l={},$$scope:n}=e;return r.$$set=t=>{"$$scope"in t&&o(0,n=t.$$scope)},[n,l]}class pe extends D{constructor(e){super(),H(this,e,_e,ve,W,{})}}/**
 * @license lucide-svelte v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function re(r,e,o){const l=r.slice();return l[11]=e[o][0],l[12]=e[o][1],l}function Z(r){let e,o=[r[12]],l={};for(let n=0;n<o.length;n+=1)l=T(l,o[n]);return{c(){e=fe(r[11]),this.h()},l(n){e=ue(n,r[11],{}),k(e).forEach(d),this.h()},h(){Q(e,l)},m(n,t){x(n,e,t)},p(n,t){Q(e,l=X(o,[t&32&&n[12]]))},d(n){n&&d(e)}}}function ie(r){let e=r[11],o,l=r[11]&&Z(r);return{c(){l&&l.c(),o=K()},l(n){l&&l.l(n),o=K()},m(n,t){l&&l.m(n,t),x(n,o,t)},p(n,t){n[11]?e?W(e,n[11])?(l.d(1),l=Z(n),e=n[11],l.c(),l.m(o.parentNode,o)):l.p(n,t):(l=Z(n),e=n[11],l.c(),l.m(o.parentNode,o)):e&&(l.d(1),l=null,e=n[11])},d(n){n&&d(o),l&&l.d(n)}}}function be(r){let e,o,l,n,t,s=se(r[5]),i=[];for(let a=0;a<s.length;a+=1)i[a]=ie(re(r,s,a));const u=r[10].default,c=O(u,r,r[9],null);let h=[oe,r[7],{width:r[2]},{height:r[2]},{stroke:r[1]},{"stroke-width":l=r[4]?Number(r[3])*24/Number(r[2]):r[3]},{class:n=r[6]("lucide-icon","lucide",r[0]?`lucide-${r[0]}`:"",r[8].class)}],z={};for(let a=0;a<h.length;a+=1)z=T(z,h[a]);return{c(){e=fe("svg");for(let a=0;a<i.length;a+=1)i[a].c();o=K(),c&&c.c(),this.h()},l(a){e=ue(a,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var m=k(e);for(let f=0;f<i.length;f+=1)i[f].l(m);o=K(),c&&c.l(m),m.forEach(d),this.h()},h(){Q(e,z)},m(a,m){x(a,e,m);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(e,null);_(e,o),c&&c.m(e,null),t=!0},p(a,[m]){if(m&32){s=se(a[5]);let f;for(f=0;f<s.length;f+=1){const N=re(a,s,f);i[f]?i[f].p(N,m):(i[f]=ie(N),i[f].c(),i[f].m(e,o))}for(;f<i.length;f+=1)i[f].d(1);i.length=s.length}c&&c.p&&(!t||m&512)&&P(c,u,a,a[9],t?q(u,a[9],m,null):B(a[9]),null),Q(e,z=X(h,[oe,m&128&&a[7],(!t||m&4)&&{width:a[2]},(!t||m&4)&&{height:a[2]},(!t||m&2)&&{stroke:a[1]},(!t||m&28&&l!==(l=a[4]?Number(a[3])*24/Number(a[2]):a[3]))&&{"stroke-width":l},(!t||m&257&&n!==(n=a[6]("lucide-icon","lucide",a[0]?`lucide-${a[0]}`:"",a[8].class)))&&{class:n}]))},i(a){t||($(c,a),t=!0)},o(a){v(c,a),t=!1},d(a){a&&d(e),$e(i,a),c&&c.d(a)}}}function we(r,e,o){const l=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=ne(e,l),{$$slots:t={},$$scope:s}=e,{name:i=void 0}=e,{color:u="currentColor"}=e,{size:c=24}=e,{strokeWidth:h=2}=e,{absoluteStrokeWidth:z=!1}=e,{iconNode:a=[]}=e;const m=(...f)=>f.filter((N,U,Y)=>!!N&&Y.indexOf(N)===U).join(" ");return r.$$set=f=>{o(8,e=T(T({},e),G(f))),o(7,n=ne(e,l)),"name"in f&&o(0,i=f.name),"color"in f&&o(1,u=f.color),"size"in f&&o(2,c=f.size),"strokeWidth"in f&&o(3,h=f.strokeWidth),"absoluteStrokeWidth"in f&&o(4,z=f.absoluteStrokeWidth),"iconNode"in f&&o(5,a=f.iconNode),"$$scope"in f&&o(9,s=f.$$scope)},e=G(e),[i,u,c,h,z,a,m,n,e,s,t]}class de extends D{constructor(e){super(),H(this,e,we,be,W,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function ke(r){let e;const o=r[2].default,l=O(o,r,r[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&P(l,o,n,n[3],e?q(o,n[3],t,null):B(n[3]),null)},i(n){e||($(l,n),e=!0)},o(n){v(l,n),e=!1},d(n){l&&l.d(n)}}}function xe(r){let e,o;const l=[{name:"arrow-down"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[ke]},$$scope:{ctx:r}};for(let t=0;t<l.length;t+=1)n=T(n,l[t]);return e=new de({props:n}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,[s]){const i=s&3?X(l,[l[0],s&2&&ce(t[1]),s&1&&{iconNode:t[0]}]):{};s&8&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),o=!1},d(t){I(e,t)}}}function ze(r,e,o){let{$$slots:l={},$$scope:n}=e;const t=[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]];return r.$$set=s=>{o(1,e=T(T({},e),G(s))),"$$scope"in s&&o(3,n=s.$$scope)},e=G(e),[t,e,l,n]}class Ne extends D{constructor(e){super(),H(this,e,ze,xe,W,{})}}function Ce(r){let e;const o=r[2].default,l=O(o,r,r[3],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&8)&&P(l,o,n,n[3],e?q(o,n[3],t,null):B(n[3]),null)},i(n){e||($(l,n),e=!0)},o(n){v(l,n),e=!1},d(n){l&&l.d(n)}}}function Ee(r){let e,o;const l=[{name:"arrow-right"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Ce]},$$scope:{ctx:r}};for(let t=0;t<l.length;t+=1)n=T(n,l[t]);return e=new de({props:n}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){j(e,t,s),o=!0},p(t,[s]){const i=s&3?X(l,[l[0],s&2&&ce(t[1]),s&1&&{iconNode:t[0]}]):{};s&8&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),o=!1},d(t){I(e,t)}}}function je(r,e,o){let{$$slots:l={},$$scope:n}=e;const t=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];return r.$$set=s=>{o(1,e=T(T({},e),G(s))),"$$scope"in s&&o(3,n=s.$$scope)},e=G(e),[t,e,l,n]}class me extends D{constructor(e){super(),H(this,e,je,Ee,W,{})}}function Ie(r){let e,o,l;const n=r[2].default,t=O(n,r,r[1],null);return{c(){e=p("button"),t&&t.c(),this.h()},l(s){e=b(s,"BUTTON",{class:!0});var i=k(e);t&&t.l(i),i.forEach(d),this.h()},h(){g(e,"class",o=`flex-row items-center justify-center gap-3 px-4 h-8 w-fit rounded-3xl border text-sm 
    transition-all flex hover:px-6 duration-1000
    ${r[0]==="navigation"&&"hover:bg-white hover:text-zinc-900"}
    ${r[0]==="footer"&&"w-1/2 hover:w-2/3 sm:w-1/4 hover:bg-white hover:text-zinc-900 sm:hover:w-1/3"}`)},m(s,i){x(s,e,i),t&&t.m(e,null),l=!0},p(s,[i]){t&&t.p&&(!l||i&2)&&P(t,n,s,s[1],l?q(n,s[1],i,null):B(s[1]),null),(!l||i&1&&o!==(o=`flex-row items-center justify-center gap-3 px-4 h-8 w-fit rounded-3xl border text-sm 
    transition-all flex hover:px-6 duration-1000
    ${s[0]==="navigation"&&"hover:bg-white hover:text-zinc-900"}
    ${s[0]==="footer"&&"w-1/2 hover:w-2/3 sm:w-1/4 hover:bg-white hover:text-zinc-900 sm:hover:w-1/3"}`))&&g(e,"class",o)},i(s){l||($(t,s),l=!0)},o(s){v(t,s),l=!1},d(s){s&&d(e),t&&t.d(s)}}}function Se(r,e,o){let{$$slots:l={},$$scope:n}=e,{variant:t=""}=e;return r.$$set=s=>{"variant"in s&&o(0,t=s.variant),"$$scope"in s&&o(1,n=s.$$scope)},[t,n,l]}class he extends D{constructor(e){super(),H(this,e,Se,Ie,W,{variant:0})}}function Te(r){let e,o="Get in touch",l,n,t;return n=new me({}),{c(){e=p("p"),e.textContent=o,l=M(),C(n.$$.fragment),this.h()},l(s){e=b(s,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-102x08e"&&(e.textContent=o),l=A(s),E(n.$$.fragment,s),this.h()},h(){g(e,"class","w-max flex-1")},m(s,i){x(s,e,i),x(s,l,i),j(n,s,i),t=!0},p:ae,i(s){t||($(n.$$.fragment,s),t=!0)},o(s){v(n.$$.fragment,s),t=!1},d(s){s&&(d(e),d(l)),I(n,s)}}}function We(r){let e,o,l,n="Let's work together",t,s,i;return s=new he({props:{variant:"footer",$$slots:{default:[Te]},$$scope:{ctx:r}}}),{c(){e=p("footer"),o=p("div"),l=p("p"),l.textContent=n,t=M(),C(s.$$.fragment),this.h()},l(u){e=b(u,"FOOTER",{class:!0});var c=k(e);o=b(c,"DIV",{class:!0});var h=k(o);l=b(h,"P",{class:!0,"data-svelte-h":!0}),F(l)!=="svelte-1rv2nmm"&&(l.textContent=n),t=A(h),E(s.$$.fragment,h),h.forEach(d),c.forEach(d),this.h()},h(){g(l,"class","font-bold text-6xl md:text-9xl"),g(o,"class","flex flex-col gap-12 px-6 py-16 items-center justify-center backdrop-blur-xl bg-gradient-to-t from-zinc-900 to-transparent 2xl:px-24 2xl:py-32"),g(e,"class","bg-background-2 bg-cover text-zinc-50 text-center animated-background svelte-1rlqvj6")},m(u,c){x(u,e,c),_(e,o),_(o,l),_(o,t),j(s,o,null),i=!0},p(u,[c]){const h={};c&1&&(h.$$scope={dirty:c,ctx:u}),s.$set(h)},i(u){i||($(s.$$.fragment,u),i=!0)},o(u){v(s.$$.fragment,u),i=!1},d(u){u&&d(e),I(s)}}}class Le extends D{constructor(e){super(),H(this,e,null,We,W,{})}}function Me(r){let e,o="Get in touch",l,n,t;return n=new me({}),{c(){e=p("p"),e.textContent=o,l=M(),C(n.$$.fragment),this.h()},l(s){e=b(s,"P",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-102x08e"&&(e.textContent=o),l=A(s),E(n.$$.fragment,s),this.h()},h(){g(e,"class","w-max flex-1")},m(s,i){x(s,e,i),x(s,l,i),j(n,s,i),t=!0},p:ae,i(s){t||($(n.$$.fragment,s),t=!0)},o(s){v(n.$$.fragment,s),t=!1},d(s){s&&(d(e),d(l)),I(n,s)}}}function Ae(r){let e,o,l,n='<p class="w-max">Paulo Amarante</p>',t,s,i='<nav class="flex flex-row items-center gap-3"><ul class="flex flex-row items-center gap-3"><a href="/" class="hover:underline hover:font-medium">Home</a> <a href="/about" class="hover:underline hover:font-medium">About</a> <a href="/stack" class="hover:underline hover:font-medium">Stack</a> <a href="/projects" class="hover:underline hover:font-medium">Projects</a></ul></nav>',u,c,h,z,a,m,f,N,U='<h1 class="font-bold text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl w-max">Paulo Amarante</h1> <p class="text-zinc-300 text-base md:text-xl">Web developer - science &amp; technology</p>',Y,y,V,R;return h=new he({props:{variant:"navigation",$$slots:{default:[Me]},$$scope:{ctx:r}}}),V=new Ne({props:{class:"size-8 md:size-16"}}),{c(){e=p("section"),o=p("div"),l=p("div"),l.innerHTML=n,t=M(),s=p("section"),s.innerHTML=i,u=M(),c=p("div"),C(h.$$.fragment),a=M(),m=p("section"),f=p("div"),N=p("div"),N.innerHTML=U,Y=M(),y=p("div"),C(V.$$.fragment),this.h()},l(w){e=b(w,"SECTION",{class:!0});var S=k(e);o=b(S,"DIV",{class:!0});var L=k(o);l=b(L,"DIV",{class:!0,"data-svelte-h":!0}),F(l)!=="svelte-199pkdr"&&(l.innerHTML=n),t=A(L),s=b(L,"SECTION",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-18k0i4k"&&(s.innerHTML=i),u=A(L),c=b(L,"DIV",{class:!0});var ee=k(c);E(h.$$.fragment,ee),ee.forEach(d),L.forEach(d),a=A(S),m=b(S,"SECTION",{class:!0});var te=k(m);f=b(te,"DIV",{class:!0});var J=k(f);N=b(J,"DIV",{"data-svelte-h":!0}),F(N)!=="svelte-mvtjex"&&(N.innerHTML=U),Y=A(J),y=b(J,"DIV",{class:!0});var le=k(y);E(V.$$.fragment,le),le.forEach(d),J.forEach(d),te.forEach(d),S.forEach(d),this.h()},h(){g(l,"class","hidden md:flex justify-start items-center grid-cols-subgrid"),g(s,"class","flex flex-row justify-center gap-3 col-start-3 col-span-2 xl:col-start-6"),g(c,"class","flex justify-end items-center grid-cols-subgrid col-start-6 xl:col-start-12"),g(o,"class",z=`fixed z-10 top-0 w-full grid grid-cols-subgrid col-span-full py-4 px-6 backdrop-blur-lg xl:py-6 2xl:px-24 transition-colors duration-1000
    ${r[0]&&"bg-zinc-950/70 text-white shadow-lg"}`),g(y,"class","rounded-full w-fit h-fit bg-white text-zinc-900 animate-bounce sm:opacity-85 hover:opacity-100 hover:cursor-pointer transition-all"),g(f,"class","flex flex-col sm:flex-row items-center gap-8"),g(m,"class","flex flex-col gap-2 text-center sm:text-left sm:pl-6 pb-6 hover:pt-6 w-screen sm:bg-gradient-to-t from-zinc-900 to-transparent 2xl:pl-24 2xl:pb-24 2xl:hover:pt-24 hover:cursor-default sm:hover:bg-zinc-900 transition-all duration-1000"),g(e,"class","grid lg:row-span-4 xl:row-span-5 grid-cols-6 xl:grid-cols-12 place-items-start place-content-center sm:place-content-end bg-background-1 bg-cover text-zinc-50 h-screen")},m(w,S){x(w,e,S),_(e,o),_(o,l),_(o,t),_(o,s),_(o,u),_(o,c),j(h,c,null),_(e,a),_(e,m),_(m,f),_(f,N),_(f,Y),_(f,y),j(V,y,null),R=!0},p(w,[S]){const L={};S&8&&(L.$$scope={dirty:S,ctx:w}),h.$set(L),(!R||S&1&&z!==(z=`fixed z-10 top-0 w-full grid grid-cols-subgrid col-span-full py-4 px-6 backdrop-blur-lg xl:py-6 2xl:px-24 transition-colors duration-1000
    ${w[0]&&"bg-zinc-950/70 text-white shadow-lg"}`))&&g(o,"class",z)},i(w){R||($(h.$$.fragment,w),$(V.$$.fragment,w),R=!0)},o(w){v(h.$$.fragment,w),v(V.$$.fragment,w),R=!1},d(w){w&&d(e),I(h),I(V)}}}function De(r,e,o){let l=0,n=!1;function t(){l=window.scrollY,o(0,n=l>300)}return ge(()=>{window.addEventListener("scroll",t)}),[n]}class He extends D{constructor(e){super(),H(this,e,De,Ae,W,{})}}function Ve(r){let e,o,l;e=new He({});const n=r[0].default,t=O(n,r,r[1],null);return{c(){C(e.$$.fragment),o=M(),t&&t.c()},l(s){E(e.$$.fragment,s),o=A(s),t&&t.l(s)},m(s,i){j(e,s,i),x(s,o,i),t&&t.m(s,i),l=!0},p(s,i){t&&t.p&&(!l||i&2)&&P(t,n,s,s[1],l?q(n,s[1],i,null):B(s[1]),null)},i(s){l||($(e.$$.fragment,s),$(t,s),l=!0)},o(s){v(e.$$.fragment,s),v(t,s),l=!1},d(s){s&&d(o),I(e,s),t&&t.d(s)}}}function Oe(r){let e,o,l,n;return e=new pe({props:{$$slots:{default:[Ve]},$$scope:{ctx:r}}}),l=new Le({}),{c(){C(e.$$.fragment),o=M(),C(l.$$.fragment)},l(t){E(e.$$.fragment,t),o=A(t),E(l.$$.fragment,t)},m(t,s){j(e,t,s),x(t,o,s),j(l,t,s),n=!0},p(t,[s]){const i={};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),$(l.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),v(l.$$.fragment,t),n=!1},d(t){t&&d(o),I(e,t),I(l,t)}}}function Pe(r,e,o){let{$$slots:l={},$$scope:n}=e;return r.$$set=t=>{"$$scope"in t&&o(1,n=t.$$scope)},[l,n]}class Be extends D{constructor(e){super(),H(this,e,Pe,Oe,W,{})}}function qe(r){let e;const o=r[0].default,l=O(o,r,r[1],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,t){l&&l.m(n,t),e=!0},p(n,t){l&&l.p&&(!e||t&2)&&P(l,o,n,n[1],e?q(o,n[1],t,null):B(n[1]),null)},i(n){e||($(l,n),e=!0)},o(n){v(l,n),e=!1},d(n){l&&l.d(n)}}}function ye(r){let e,o;return e=new Be({props:{$$slots:{default:[qe]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,n){j(e,l,n),o=!0},p(l,[n]){const t={};n&2&&(t.$$scope={dirty:n,ctx:l}),e.$set(t)},i(l){o||($(e.$$.fragment,l),o=!0)},o(l){v(e.$$.fragment,l),o=!1},d(l){I(e,l)}}}function Fe(r,e,o){let{$$slots:l={},$$scope:n}=e;return r.$$set=t=>{"$$scope"in t&&o(1,n=t.$$scope)},[l,n]}class Re extends D{constructor(e){super(),H(this,e,Fe,ye,W,{})}}export{Re as component};
