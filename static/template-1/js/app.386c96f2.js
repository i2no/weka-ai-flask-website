(function(){"use strict";var e={1765:function(e,t,n){var a=n(5130),o=n(6768);const i={key:0,class:"body"},s=(0,o.Fv)('<div class="mesh-loader"><div class="set-one"><div class="circle"></div><div class="circle"></div></div><div class="set-two"><div class="circle"></div><div class="circle"></div></div></div>',1),c=[s];function l(e,t,n,a,s,l){const r=(0,o.g2)("headIndex"),u=(0,o.g2)("router-view"),d=(0,o.g2)("footerIndex");return s.load?((0,o.uX)(),(0,o.CE)("div",i,c)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.bF)(r),(0,o.bF)(u),(0,o.bF)(d)],64))}n(4114);var r=n(144),u=n(4232),d=n(1387),p=n(782);const v={class:"head"},m={class:"center"},f=["src"],k={class:"m-l-14"},h={class:"company-name"},A={class:"company-en"},g={class:"ul"};var b={__name:"headIndex",setup(e){const t=(0,d.lq)(),n=(0,d.rd)();let a=(0,o.EW)((()=>t.path));const i=(0,p.Pj)(),s=i.state.info,c=e=>{n.push(e)};return(e,t)=>((0,o.uX)(),(0,o.CE)("div",v,[(0,o.Lk)("div",m,[(0,o.Lk)("div",null,[(0,o.Lk)("img",{src:(0,r.R1)(s).logo.logo_url,class:"logo"},null,8,f)]),(0,o.Lk)("div",k,[(0,o.Lk)("div",h,(0,u.v_)((0,r.R1)(s).company_name),1),(0,o.Lk)("div",A,(0,u.v_)((0,r.R1)(s).company_english),1)])]),(0,o.Lk)("ul",g,[(0,o.Lk)("li",{onClick:t[0]||(t[0]=e=>c("/"))},[(0,o.eW)(" 首页 "),(0,o.Lk)("div",{class:(0,u.C4)(["block",{"check-block":"/"===(0,r.R1)(a)}])},null,2)]),(0,o.Lk)("li",{onClick:t[1]||(t[1]=e=>c("/aboutUs"))},[(0,o.eW)(" 关于我们 "),(0,o.Lk)("div",{class:(0,u.C4)(["block",{"check-block":"/aboutUs"===(0,r.R1)(a)}])},null,2)]),(0,o.Lk)("li",{onClick:t[2]||(t[2]=e=>c("/news"))},[(0,o.eW)(" 新闻中心 "),(0,o.Lk)("div",{class:(0,u.C4)(["block",{"check-block":"/news"===(0,r.R1)(a)}])},null,2)]),(0,o.Lk)("li",{onClick:t[3]||(t[3]=e=>c("/product"))},[(0,o.eW)(" 产品中心 "),(0,o.Lk)("div",{class:(0,u.C4)(["block",{"check-block":"/product"===(0,r.R1)(a)}])},null,2)]),(0,o.Lk)("li",{onClick:t[4]||(t[4]=e=>c("/job"))},[(0,o.eW)(" 招聘信息 "),(0,o.Lk)("div",{class:(0,u.C4)(["block",{"check-block":"/job"===(0,r.R1)(a)}])},null,2)]),(0,o.Lk)("li",{onClick:t[5]||(t[5]=e=>c("/contactUs"))},[(0,o.eW)(" 联系我们 "),(0,o.Lk)("div",{class:(0,u.C4)(["block",{"check-block":"/contactUs"===(0,r.R1)(a)}])},null,2)])])]))}},L=n(1241);const w=(0,L.A)(b,[["__scopeId","data-v-7cd944b5"]]);var y=w;const C=e=>((0,o.Qi)("data-v-67bd1126"),e=e(),(0,o.jt)(),e),_={class:"footer"},E={class:"center"},R=["src"],x={class:"company-name"},O={class:"company-en"},I={class:"navigate"},F=C((()=>(0,o.Lk)("div",{class:"title"},"网站导航",-1))),W={class:"navi-center"},S=["onClick"],B=C((()=>(0,o.Lk)("div",{class:"contact"},"联系方式",-1))),U={class:"m-t-22"},j={class:"rows"},Q={class:"phone"},J={class:"address"};var K={__name:"footerIndex",setup(e){const t=(0,p.Pj)(),n=t.state.info,a=[{name:"首页",path:"/"},{name:"关于我们",path:"/aboutUs"},{name:"新闻中心",path:"/news"},{name:"产品中心",path:"/product"},{name:"招聘信息",path:"/job"},{name:"联系我们",path:"/contactUs"}],i=(0,d.rd)(),s=e=>{i.push(e)};return(e,t)=>((0,o.uX)(),(0,o.CE)("div",_,[(0,o.Lk)("div",E,[(0,o.Lk)("img",{src:(0,r.R1)(n).logo.logo_url,class:"logo"},null,8,R),(0,o.Lk)("div",x,(0,u.v_)((0,r.R1)(n).company_name),1),(0,o.Lk)("div",O,(0,u.v_)((0,r.R1)(n).company_english),1)]),(0,o.Lk)("div",I,[F,(0,o.Lk)("div",W,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(a,(e=>(0,o.Lk)("div",{class:"block",onClick:t=>s(e.path),key:e.name},(0,u.v_)(e.name),9,S))),64))])]),(0,o.Lk)("div",null,[B,(0,o.Lk)("div",U,(0,u.v_)((0,r.R1)(n).company_name),1),(0,o.Lk)("div",j,[(0,o.Lk)("div",Q,"电话： "+(0,u.v_)((0,r.R1)(n).contact.telephone||(0,r.R1)(n).contact.phone),1),(0,o.Lk)("div",null,"邮箱： "+(0,u.v_)((0,r.R1)(n).contact.email),1)]),(0,o.Lk)("div",J,"地址： "+(0,u.v_)((0,r.R1)(n).contact.address),1)])]))}};const P=(0,L.A)(K,[["__scopeId","data-v-67bd1126"]]);var X=P,M={name:"App",components:{headIndex:y,footerIndex:X},data(){return{load:!0}},async mounted(){await this.$store.dispatch("fetchInfo"),this.load=!1}};const N=(0,L.A)(M,[["render",l]]);var T=N,q=n(8545),Y=n(816),D=n(5315),Z=n(8421);const z=e=>((0,o.Qi)("data-v-2a6c3534"),e=e(),(0,o.jt)(),e),H={class:"content"},V={class:"banner"},G=z((()=>(0,o.Lk)("div",{class:"banner-hint"},[(0,o.Lk)("div",{class:"hint"},"国内领先的"),(0,o.Lk)("div",{class:"hint"},"信息化整体解决方案提供商"),(0,o.Lk)("div",{class:"wire"})],-1))),$=["src"],ee={class:"about-us"},te={class:"us-content"},ne=z((()=>(0,o.Lk)("div",{class:"title"},"关于我们 /",-1))),ae=z((()=>(0,o.Lk)("div",{class:"title-en"},"About Us",-1))),oe={class:"text"},ie=z((()=>(0,o.Lk)("div",{class:"us-block"},null,-1))),se=["src"],ce={class:"product"},le=z((()=>(0,o.Lk)("div",{class:"pro-title"},[(0,o.Lk)("div",{class:"pro-titlt-main"},"产品中心 /"),(0,o.Lk)("div",{class:"pro-title-en"},"Products")],-1))),re={class:"pro-content"},ue={class:"pro-content-c"},de=["onClick"],pe={class:"pri-imgs"},ve=["src"],me={class:"pro-item-name"},fe={class:"shade"},ke=z((()=>(0,o.Lk)("div",{class:"between"},[(0,o.Lk)("img",{src:q}),(0,o.Lk)("img",{src:Y,style:{width:"20px",height:"12px"}})],-1))),he={class:"shade-title"},Ae={class:"shade-content"},ge={class:"news"},be={class:"news-card"},Le=z((()=>(0,o.Lk)("div",{class:"news-title"},"新闻中心",-1))),we=z((()=>(0,o.Lk)("div",{class:"news-en"},"NEWS",-1))),ye={class:"news-content"},Ce=["onClick"],_e={style:{"padding-right":"28px"}},Ee={class:"year"},Re={class:"time"},xe={class:"item-title"},Oe={class:"item-text"};var Ie={__name:"homePage",setup(e){const t=(0,p.Pj)(),n=t.state.info,a=(0,d.rd)(),i=(0,o.nI)().appContext.config.globalProperties.$indent,s=e=>{const t=Math.floor(51*Math.random()+40);if(e&&e.length>t){const n=i(e.substring(0,t)+"...");return n}const n=i(e);return n},c=(e,t)=>{if(e){let n=e.split("-");return 0===t?n[0]:`${n[1]}-${n[2]}`}return""},l=(e,t)=>{a.push({path:e,query:{index:t}})};return(e,t)=>((0,o.uX)(),(0,o.CE)("div",H,[(0,o.bF)((0,r.R1)(Z.RC),{autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!0,pauseOnMouseEnter:!0},loop:!0,effect:"slide",navigation:!0,modules:[(0,r.R1)(D.Ij),(0,r.R1)(D._R),(0,r.R1)(D.Vx)]},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,r.R1)(n).banners.banner_urls,((e,t)=>((0,o.uX)(),(0,o.Wv)((0,r.R1)(Z.qr),{key:t},{default:(0,o.k6)((()=>[(0,o.Lk)("div",V,[G,(0,o.Lk)("img",{src:e},null,8,$)])])),_:2},1024)))),128))])),_:1},8,["modules"]),(0,o.Lk)("div",ee,[(0,o.Lk)("div",te,[(0,o.Lk)("div",null,[ne,ae,(0,o.Lk)("div",oe,(0,u.v_)(e.$indent((0,r.R1)(n).introduction.about_us)),1),ie]),(0,o.Lk)("div",null,[(0,o.Lk)("img",{src:(0,r.R1)(n).culture.culture_images,class:"us-img"},null,8,se)])])]),(0,o.Lk)("div",ce,[le,(0,o.Lk)("div",re,[(0,o.Lk)("div",ue,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,r.R1)(n)?.products[0].items,((t,n)=>((0,o.uX)(),(0,o.CE)(o.FK,{key:n},[n<6?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"mouse",onClick:e=>l("/productDetail",n)},[(0,o.Lk)("div",pe,[(0,o.Lk)("img",{src:t.product_image_url},null,8,ve)]),(0,o.Lk)("div",me,(0,u.v_)(t.product_name),1),(0,o.Lk)("div",fe,[ke,(0,o.Lk)("div",he,(0,u.v_)(t.product_name),1),(0,o.Lk)("div",Ae,(0,u.v_)(e.$indent(t.product_description)),1)])],8,de)):(0,o.Q3)("",!0)],64)))),128))])])]),(0,o.Lk)("div",ge,[(0,o.Lk)("div",be,[Le,we,(0,o.Lk)("div",ye,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)((0,r.R1)(n).news,((e,t)=>((0,o.uX)(),(0,o.CE)(o.FK,{key:t},[t<6?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"news-item",onClick:e=>l("/newsDetail",t)},[(0,o.Lk)("div",_e,[(0,o.Lk)("div",Ee,(0,u.v_)(c(e.date,0)),1),(0,o.Lk)("div",Re,(0,u.v_)(c(e.date,1)),1)]),(0,o.Lk)("div",null,[(0,o.Lk)("div",xe,(0,u.v_)(e.title),1),(0,o.Lk)("div",Oe,(0,u.v_)(s(e.content)),1)])],8,Ce)):(0,o.Q3)("",!0)],64)))),128))])])])]))}};const Fe=(0,L.A)(Ie,[["__scopeId","data-v-2a6c3534"]]);var We=Fe;const Se=[{path:"/",component:We},{path:"/aboutUs",component:()=>n.e(640).then(n.bind(n,4640))},{path:"/news",component:()=>n.e(350).then(n.bind(n,5100))},{path:"/newsDetail",component:()=>n.e(420).then(n.bind(n,5420))},{path:"/product",component:()=>n.e(518).then(n.bind(n,7242))},{path:"/productDetail",component:()=>n.e(14).then(n.bind(n,5633))},{path:"/job",component:()=>n.e(357).then(n.bind(n,3807))},{path:"/jobDetail",component:()=>n.e(605).then(n.bind(n,3605))},{path:"/contactUs",component:()=>n.e(584).then(n.bind(n,1154))}],Be=(0,d.aE)({history:(0,d.LA)("/"),routes:Se,scrollBehavior(e,t,n){return{top:0}}});var Ue=Be,je=n(8355),Qe=(0,p.y$)({state:{info:"",cloud:null,isLoad:!0},mutations:{setInfo(e,t){e.info=t},setCloud(e,t){e.cloud=t},setLoad(e,t){e.isLoad=t}},actions:{async fetchInfo({commit:e}){let t={};const n=new window.cloud.Cloud({identityless:!0,resourceAppid:"wxd2b91739417f7a9a",resourceEnv:"ai-weka-cloud-3gtwcbz8ddfef45a"});await n.init();try{const a=window.location.href;let o="";if(a.indexOf("websiteid")>-1){const e=a.split("?"),t=e[1].split("&");o=t[0].split("=")[1]}let i="";if(o){let e=await n.callFunction({name:"aiWebsiteFunctions",data:{method:"getWebsiteById",websiteId:o}});t=e.result.data}else{const e=window.location.host;i="http://weka-ai-website-api.ai-site.cc/api/get-website-data?domain="+e;const n=await je.A.get(i);if(n?.data.resp_data){let e=JSON.parse(n?.data.resp_data);t=e[0]}}if("{}"!==JSON.stringify(t)){t.news=t.company_news.concat(t.industry_news),document.title=t.company_name;let e=[];if(t.logo.logo_url.startsWith("cloud://")&&e.push({file:t.logo.logo_url,name:"logo_url"}),t.logo.ico_url.startsWith("cloud://")&&e.push({file:t.logo.ico_url,name:"ico_url"}),t.banners.banner_urls&&t.banners.banner_urls.forEach(((t,n)=>{t.startsWith("cloud://")&&e.push({file:t,index:n,name:"banner_urls"})})),t.culture.culture_images.startsWith("cloud://")&&e.push({file:t.culture.culture_images,name:"culture"}),t.news&&t.news.forEach(((t,n)=>{t.image_url&&t.image_url.startsWith("cloud://")&&e.push({file:t.image_url,index:n,name:"news"})})),t.products&&t.products[0].items.forEach(((t,n)=>{t.product_image_url&&t.product_image_url.startsWith("cloud://")&&e.push({file:t.product_image_url,index:n,name:"products"})})),e.length>0){let a=await n.callFunction({name:"pageFunctions",data:{method:"getTempFileUrl",fileList:e.map((e=>e.file))}});200===a.result.code&&(e.forEach(((e,n)=>{"banner_urls"===e.name?t.banners.banner_urls[e.index]=a.result.data[n].tempFileURL:"culture"===e.name?t.culture.culture_images=a.result.data[n].tempFileURL:"news"===e.name?t.news[e.index].image_url=a.result.data[n].tempFileURL:"products"===e.name?t.products[0].items[e.index].product_image_url=a.result.data[n].tempFileURL:"logo_url"===e.name?t.logo.logo_url=a.result.data[n].tempFileURL:"ico_url"===e.name&&(t.logo.ico_url=a.result.data[n].tempFileURL)})),t.logo.ico_url&&(document.getElementById("link").href=t.logo.ico_url))}}e("setInfo",t),e("setCloud",n),e("setLoad",!1)}catch(a){console.error(a)}}}});const Je=e=>{if(e){let t=e.split("\n");return t.forEach(((e,n)=>{e&&!e.startsWith(" ")&&(t[n]=`      ${e}`)})),t.join("\n")}return""};async function Ke(){const e=(0,a.Ef)(T);e.config.globalProperties.$indent=Je,e.use(Ue).use(Qe).mount("#app")}Ke()},816:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAAXNSR0IArs4c6QAAAMxJREFUOE+t0zFqQkEQxvH/16VULGwUSyME2xSewDPY5ARaxZTaGgNC7Ozs9AQWSmw8gznOlzfwAmK6eVnYZmB+uzszKxLL9hXoAa+SPm4JJTxsd4ET0AKmkpa/TgqMZNuBXYAOsJQ0jXgavEGPwCPwKWki23FCBJx5PvAAbIEasApwVkDzJPYnLcAnYFDhhoEuyhvuq9awDhyK/VyUbQeM0qDtBvAF9KOGkl7SXbbdBM7lcK8ljSvNoe3vcjLeJb39x08ZAm1Jm/s2/wAw5zs466t0AwAAAABJRU5ErkJggg=="},8545:function(e){e.exports="data:image/png;base64,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"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],i=e[u][2];for(var c=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(c=!1,i<s&&(s=i));if(c){e.splice(u--,1);var r=o();void 0!==r&&(t=r)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{14:"27ba1e4e",350:"ea9eeeab",357:"7c73bc69",420:"30a79388",518:"13e0195a",584:"3b167e55",605:"19390e5d",640:"ac0727b0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{14:"89510931",350:"12c2fedf",357:"d3a1c085",420:"50b9120c",518:"1d84a82b",584:"559bbc9d",605:"0095d5a5",640:"72367f15"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="weka-ai-site-template-1:";n.l=function(a,o,i,s){if(e[a])e[a].push(o);else{var c,l;if(void 0!==i)for(var r=document.getElementsByTagName("script"),u=0;u<r.length;u++){var d=r[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=a),e[a]=[o];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(v);var o=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,o,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var c=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var a=n&&n.type,c=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+c+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=c,s.parentNode&&s.parentNode.removeChild(s),i(l)}};return s.onerror=s.onload=c,s.href=t,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){o=s[a],i=o.getAttribute("data-href");if(i===e||i===t)return o}},a=function(a){return new Promise((function(o,i){var s=n.miniCssF(a),c=n.p+s;if(t(s,c))return o();e(a,c,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={14:1,350:1,357:1,420:1,518:1,584:1,605:1,640:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=i);var s=n.p+n.u(t),c=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,o[1](c)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,s=a[0],c=a[1],l=a[2],r=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n)}for(t&&t(a);r<s.length;r++)i=s[r],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkweka_ai_site_template_1"]=self["webpackChunkweka_ai_site_template_1"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1765)}));a=n.O(a)})();
//# sourceMappingURL=app.386c96f2.js.map