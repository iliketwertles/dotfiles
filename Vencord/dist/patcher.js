// Vencord 5a94201
// Standalone: true
// Platform: Universal
"use strict";var Kr=Object.create;var Se=Object.defineProperty;var qr=Object.getOwnPropertyDescriptor;var Hr=Object.getOwnPropertyNames;var Yr=Object.getPrototypeOf,Qr=Object.prototype.hasOwnProperty;var P=(e,r)=>()=>(e&&(r=e(e=0)),r);var Qe=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Hr(r))!Qr.call(e,i)&&i!==n&&Se(e,i,{get:()=>r[i],enumerable:!(t=qr(r,i))||t.enumerable});return e};var Te=(e,r,n)=>(n=e!=null?Kr(Yr(e)):{},Qe(r||!e||!e.__esModule?Se(n,"default",{value:e,enumerable:!0}):n,e)),Xr=e=>Qe(Se({},"__esModule",{value:!0}),e);var p,f=P(()=>{"use strict";p=Symbol.for("react.fragment")});var ue,Ee=P(()=>{f();ue="5a94201"});var Y,De=P(()=>{f();Y="Vendicated/Vencord"});var Xe,Nn,Je=P(()=>{"use strict";f();Ee();De();Xe=`Vencord/${ue}${Y?` (https://github.com/${Y})`:""}`,Nn=Object.freeze({Ven:{name:"Vendicated",id:343383572805058560n},Arjix:{name:"ArjixWasTaken",id:674710789138939916n},Cyn:{name:"Cynosphere",id:150745989836308480n},Megu:{name:"Megumin",id:545581357812678656n},botato:{name:"botato",id:440990343899643943n},obscurity:{name:"obscurity",id:336678828233588736n},rushii:{name:"rushii",id:295190422244950017n},Glitch:{name:"Glitchy",id:269567451199569920n},Samu:{name:"Samu",id:702973430449832038n},Animal:{name:"Animal",id:118437263754395652n},MaiKokain:{name:"Mai",id:722647978577363026n},echo:{name:"ECHO",id:712639419785412668n},katlyn:{name:"katlyn",id:250322741406859265n},nea:{name:"nea",id:310702108997320705n},Nuckyz:{name:"Nuckyz",id:235834946571337729n},D3SOX:{name:"D3SOX",id:201052085641281538n},Nickyux:{name:"Nickyux",id:427146305651998721n},mantikafasi:{name:"mantikafasi",id:287555395151593473n},Xinto:{name:"Xinto",id:423915768191647755n},JacobTm:{name:"Jacob.Tm",id:302872992097107991n},DustyAngel47:{name:"DustyAngel47",id:714583473804935238n},BanTheNons:{name:"BanTheNons",id:460478012794863637n},BigDuck:{name:"BigDuck",id:1024588272623681609n},AverageReactEnjoyer:{name:"Average React Enjoyer",id:1004904120056029256n},adryd:{name:"adryd",id:0n},Tyman:{name:"Tyman",id:487443883127472129n},afn:{name:"afn",id:420043923822608384n},KraXen72:{name:"KraXen72",id:379304073515499530n},kemo:{name:"kemo",id:299693897859465228n},dzshn:{name:"dzshn",id:310449948011528192n},Ducko:{name:"Ducko",id:506482395269169153n},jewdev:{name:"jewdev",id:222369866529636353n},Luna:{name:"Luny",id:821472922140803112n}})});function Jr(e){let r={};for(let n in e)r[n]=e[n],r[e[n]]=n;return Object.freeze(r)}var C,ze=P(()=>{"use strict";f();C=Jr({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",GET_DESKTOP_CAPTURE_SOURCES:"VencordGetDesktopCaptureSources",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function Q(e,r={}){return new Promise((n,t)=>{be.default.get(e,r,i=>{let{statusCode:u,statusMessage:s,headers:o}=i;if(u>=400)return void t(`${u}: ${s} - ${e}`);if(u>=300)return void n(Q(o.location,r));let a=[];i.on("error",t),i.on("data",c=>a.push(c)),i.once("end",()=>n(Buffer.concat(a)))})})}var be,Ge=P(()=>{"use strict";f();be=Te(require("https"))});async function nr(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js"].map(r=>new Promise(n=>{let t=(0,er.createReadStream)((0,rr.join)(__dirname,r)),i=(0,$e.createHash)("sha1",{encoding:"hex"});t.once("end",()=>{i.end(),e[r]=i.read(),n()}),t.pipe(i)}))),e}function X(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(r){return{ok:!1,error:r instanceof Error?{...r}:r}}}}var $e,er,rr,tr=P(()=>{"use strict";f();$e=require("crypto"),er=require("fs"),rr=require("path")});var rn={};async function or(e){return Q(br+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Xe}})}async function $r(){if(!await sr())return[];let r=await or(`/compare/${ue}...HEAD`);return JSON.parse(r.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function sr(){let e=await or("/releases/latest"),r=JSON.parse(e.toString());return r.name.slice(r.name.lastIndexOf(" ")+1)===ue?!1:(r.assets.forEach(({name:t,browser_download_url:i})=>{["patcher.js","preload.js","renderer.js"].some(u=>t.startsWith(u))&&Re.push([t,i])}),!0)}async function en(){return await Promise.all(Re.map(async([e,r])=>(0,ir.writeFile)((0,ar.join)(__dirname,e),await Q(r)))),Re=[],!0}var J,ir,ar,br,Re,ur=P(()=>{"use strict";f();J=require("electron"),ir=require("fs/promises"),ar=require("path");Ee();De();Je();ze();Ge();tr();br=`https://api.github.com/repos/${Y}`,Re=[];J.ipcMain.handle(C.GET_HASHES,X(nr));J.ipcMain.handle(C.GET_REPO,X(()=>`https://github.com/${Y}`));J.ipcMain.handle(C.GET_UPDATES,X($r));J.ipcMain.handle(C.UPDATE,X(sr));J.ipcMain.handle(C.BUILD,X(en))});var En={};function Sn(e,r){let n=e.slice(4).split(".").map(Number),t=r.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(n[i]>t[i])return!0;if(n[i]<t[i])return!1}return!1}function _e(){let e=(0,w.dirname)(process.execPath),r=(0,w.basename)(e),n=(0,w.join)(e,".."),t=(0,k.readdirSync)(n).reduce((s,o)=>o.startsWith("app-")&&Sn(o,s)?o:s,r);if(t===r)return;let i=(0,w.join)(n,t,"resources","app");if((0,k.existsSync)(i))return;console.info("[Vencord] Detected Host Update. Repatching...");let u=(0,w.join)(__dirname,"patcher.js");(0,k.mkdirSync)(i),(0,k.writeFileSync)((0,w.join)(i,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,k.writeFileSync)((0,w.join)(i,"index.js"),`require(${JSON.stringify(u)});`)}function Tn(){let e=require.main,r=require((0,w.join)(process.resourcesPath,"build_info.json"));try{if(r?.newUpdater){let n=(0,w.join)(e.filename,"..","autoStart","win32.js"),{update:t}=require(n);require.cache[n].exports.update=function(){_e(),t.apply(this,arguments)}}else{let n=(0,w.join)(e.filename,"..","hostUpdater.js"),{quitAndInstall:t}=require(n);require.cache[n].exports.quitAndInstall=function(){_e(),t.apply(this,arguments)}}}catch{let{quitAndInstall:n}=Z.autoUpdater;Z.autoUpdater.quitAndInstall=function(){_e(),n.call(this)}}}var Z,k,w,Mr,Br=P(()=>{"use strict";f();Z=require("electron"),k=require("fs"),w=require("path"),{setAppUserModelId:Mr}=Z.app;Z.app.setAppUserModelId=function(e){Z.app.setAppUserModelId=Mr,Mr.call(this,e),Tn()}});f();var G=Te(require("electron")),Lr=require("fs"),O=require("path");f();f();Promise.resolve().then(()=>ur());var I=require("electron"),ee=require("fs"),j=require("fs/promises"),pr=require("path");f();var cr="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";f();function fr(e,r=300){let n;return function(...t){clearTimeout(n),n=setTimeout(()=>{e(...t)},r)}}ze();f();var ce=class{constructor(r=1/0){this.maxSize=r}queue=[];promise;next(){let r=this.queue.shift();r?this.promise=Promise.resolve().then(r).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(r){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(r),this.run()}unshift(r){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(r),this.run()}get size(){return this.queue.length}};f();var lr=require("electron"),b=require("path"),Pe=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,b.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,b.join)(lr.app.getPath("userData"),"..","Vencord")),fe=(0,b.join)(Pe,"settings"),$=(0,b.join)(fe,"quickCss.css"),Ue=(0,b.join)(fe,"settings.json"),hr=["https:","http:","steam:","spotify:"];(0,ee.mkdirSync)(fe,{recursive:!0});function vr(){return(0,j.readFile)($,"utf-8").catch(()=>"")}function ke(){try{return(0,ee.readFileSync)(Ue,"utf-8")}catch{return"{}"}}I.ipcMain.handle(C.GET_DESKTOP_CAPTURE_SOURCES,(e,r)=>I.desktopCapturer.getSources(r));I.ipcMain.handle(C.OPEN_QUICKCSS,()=>I.shell.openPath($));I.ipcMain.handle(C.OPEN_EXTERNAL,(e,r)=>{try{var{protocol:n}=new URL(r)}catch{throw"Malformed URL"}if(!hr.includes(n))throw"Disallowed protocol.";I.shell.openExternal(r)});var nn=new ce,tn=new ce;I.ipcMain.handle(C.GET_QUICK_CSS,()=>vr());I.ipcMain.handle(C.SET_QUICK_CSS,(e,r)=>nn.push(()=>(0,j.writeFile)($,r)));I.ipcMain.handle(C.GET_SETTINGS_DIR,()=>fe);I.ipcMain.on(C.GET_SETTINGS,e=>e.returnValue=ke());I.ipcMain.handle(C.SET_SETTINGS,(e,r)=>{tn.push(()=>(0,j.writeFile)(Ue,r))});function gr(e){(0,j.open)($,"a+").then(r=>{r.close(),(0,ee.watch)($,fr(async()=>{e.webContents.postMessage(C.QUICK_CSS_UPDATE,await vr())},50))})}I.ipcMain.handle(C.OPEN_MONACO_EDITOR,async()=>{await new I.BrowserWindow({title:"QuickCss Editor",webPreferences:{preload:(0,pr.join)(__dirname,"preload.js")}}).loadURL(`data:text/html;base64,${cr}`)});f();var Or=require("electron");f();var Cr=require("module"),an=(0,Cr.createRequire)("/"),me,on=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{me=an("worker_threads").Worker}catch{}var sn=me?function(e,r,n,t,i){var u=!1,s=new me(e+on,{eval:!0}).on("error",function(o){return i(o,null)}).on("message",function(o){return i(null,o)}).on("exit",function(o){o&&!u&&i(new Error("exited with code "+o),null)});return s.postMessage(n,t),s.terminate=function(){return u=!0,me.prototype.terminate.call(s)},s}:function(e,r,n,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var u=function(){};return{terminate:u,postMessage:u}},A=Uint8Array,B=Uint16Array,We=Uint32Array,Ve=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Me=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ir=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ar=function(e,r){for(var n=new B(31),t=0;t<31;++t)n[t]=r+=1<<e[t-1];for(var i=new We(n[30]),t=1;t<30;++t)for(var u=n[t];u<n[t+1];++u)i[u]=u-n[t]<<5|t;return[n,i]},yr=Ar(Ve,2),Be=yr[0],un=yr[1];Be[28]=258,un[258]=28;var wr=Ar(Me,0),xr=wr[0],tt=wr[1],Ie=new B(32768);for(l=0;l<32768;++l)U=(l&43690)>>>1|(l&21845)<<1,U=(U&52428)>>>2|(U&13107)<<2,U=(U&61680)>>>4|(U&3855)<<4,Ie[l]=((U&65280)>>>8|(U&255)<<8)>>>1;var U,l,re=function(e,r,n){for(var t=e.length,i=0,u=new B(r);i<t;++i)e[i]&&++u[e[i]-1];var s=new B(r);for(i=0;i<r;++i)s[i]=s[i-1]+u[i-1]<<1;var o;if(n){o=new B(1<<r);var a=15-r;for(i=0;i<t;++i)if(e[i])for(var c=i<<4|e[i],h=r-e[i],g=s[e[i]-1]++<<h,T=g|(1<<h)-1;g<=T;++g)o[Ie[g]>>>a]=c}else for(o=new B(t),i=0;i<t;++i)e[i]&&(o[i]=Ie[s[e[i]-1]++]>>>15-e[i]);return o},le=new A(288);for(l=0;l<144;++l)le[l]=8;var l;for(l=144;l<256;++l)le[l]=9;var l;for(l=256;l<280;++l)le[l]=7;var l;for(l=280;l<288;++l)le[l]=8;var l,Sr=new A(32);for(l=0;l<32;++l)Sr[l]=5;var l;var Tr=re(le,9,1);var Er=re(Sr,5,1),de=function(e){for(var r=e[0],n=1;n<e.length;++n)e[n]>r&&(r=e[n]);return r},S=function(e,r,n){var t=r/8|0;return(e[t]|e[t+1]<<8)>>(r&7)&n},Ce=function(e,r){var n=r/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(r&7)},Dr=function(e){return(e+7)/8|0},Ae=function(e,r,n){(r==null||r<0)&&(r=0),(n==null||n>e.length)&&(n=e.length);var t=new(e.BYTES_PER_ELEMENT==2?B:e.BYTES_PER_ELEMENT==4?We:A)(n-r);return t.set(e.subarray(r,n)),t};var zr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,r,n){var t=new Error(r||zr[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,y),!n)throw t;return t},Gr=function(e,r,n){var t=e.length;if(!t||n&&n.f&&!n.l)return r||new A(0);var i=!r||n,u=!n||n.i;n||(n={}),r||(r=new A(t*3));var s=function(qe){var He=r.length;if(qe>He){var Ye=new A(Math.max(He*2,qe));Ye.set(r),r=Ye}},o=n.f||0,a=n.p||0,c=n.b||0,h=n.l,g=n.d,T=n.m,N=n.n,te=t*8;do{if(!h){o=S(e,a,1);var L=S(e,a+1,3);if(a+=3,L)if(L==1)h=Tr,g=Er,T=9,N=5;else if(L==2){var V=S(e,a,31)+257,F=S(e,a+10,15)+4,ie=V+S(e,a+5,31)+1;a+=14;for(var _=new A(ie),ae=new A(19),d=0;d<F;++d)ae[Ir[d]]=S(e,a+d*3,7);a+=F*3;for(var R=de(ae),pe=(1<<R)-1,K=re(ae,R,1),d=0;d<ie;){var oe=K[S(e,a,pe)];a+=oe&15;var m=oe>>>4;if(m<16)_[d++]=m;else{var q=0,ve=0;for(m==16?(ve=3+S(e,a,3),a+=2,q=_[d-1]):m==17?(ve=3+S(e,a,7),a+=3):m==18&&(ve=11+S(e,a,127),a+=7);ve--;)_[d++]=q}}var Ze=_.subarray(0,V),M=_.subarray(V);T=de(Ze),N=de(M),h=re(Ze,T,1),g=re(M,N,1)}else y(1);else{var m=Dr(a)+4,x=e[m-4]|e[m-3]<<8,W=m+x;if(W>t){u&&y(0);break}i&&s(c+x),r.set(e.subarray(m,W),c),n.b=c+=x,n.p=a=W*8,n.f=o;continue}if(a>te){u&&y(0);break}}i&&s(c+131072);for(var Zr=(1<<T)-1,Fr=(1<<N)-1,ye=a;;ye=a){var q=h[Ce(e,a)&Zr],H=q>>>4;if(a+=q&15,a>te){u&&y(0);break}if(q||y(2),H<256)r[c++]=H;else if(H==256){ye=a,h=null;break}else{var Fe=H-254;if(H>264){var d=H-257,se=Ve[d];Fe=S(e,a,(1<<se)-1)+Be[d],a+=se}var we=g[Ce(e,a)&Fr],xe=we>>>4;we||y(3),a+=we&15;var M=xr[xe];if(xe>3){var se=Me[xe];M+=Ce(e,a)&(1<<se)-1,a+=se}if(a>te){u&&y(0);break}i&&s(c+131072);for(var Ke=c+Fe;c<Ke;c+=4)r[c]=r[c-M],r[c+1]=r[c+1-M],r[c+2]=r[c+2-M],r[c+3]=r[c+3-M];c=Ke}}n.l=h,n.p=ye,n.b=c,n.f=o,h&&(o=1,n.m=T,n.d=g,n.n=N)}while(!o);return c==r.length?r:Ae(r,0,c)};var cn=new A(0);var fn=function(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n},mr=function(e,r,n){for(var t=e(),i=e.toString(),u=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var o=t[s],a=u[s];if(typeof o=="function"){r+=";"+a+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;r+=c.slice(h,c.indexOf("(",h))}else{r+=c;for(var g in o.prototype)r+=";"+a+".prototype."+g+"="+o.prototype[g].toString()}else r+=c}else n[a]=o}return[r,n]},ge=[],ln=function(e){var r=[];for(var n in e)e[n].buffer&&r.push((e[n]=new e[n].constructor(e[n])).buffer);return r},hn=function(e,r,n,t){var i;if(!ge[n]){for(var u="",s={},o=e.length-1,a=0;a<o;++a)i=mr(e[a],u,s),u=i[0],s=i[1];ge[n]=mr(e[o],u,s)}var c=fn({},ge[n][1]);return sn(ge[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+r.toString()+"}",n,c,ln(c),t)},pn=function(){return[A,B,We,Ve,Me,Ir,Be,xr,Tr,Er,Ie,zr,re,de,S,Ce,Dr,Ae,y,Gr,Le,Rr,Pr]};var Rr=function(e){return postMessage(e,[e.buffer])},Pr=function(e){return e&&e.size&&new A(e.size)},vn=function(e,r,n,t,i,u){var s=hn(n,t,i,function(o,a){s.terminate(),u(o,a)});return s.postMessage([e,r],r.consume?[e.buffer]:[]),function(){s.terminate()}};var D=function(e,r){return e[r]|e[r+1]<<8},E=function(e,r){return(e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)>>>0},Oe=function(e,r){return E(e,r)+E(e,r+4)*4294967296};function gn(e,r,n){return n||(n=r,r={}),typeof n!="function"&&y(7),vn(e,r,[pn],function(t){return Rr(Le(t.data[0],Pr(t.data[1])))},1,n)}function Le(e,r){return Gr(e,r)}var Ne=typeof TextDecoder<"u"&&new TextDecoder,mn=0;try{Ne.decode(cn,{stream:!0}),mn=1}catch{}var dn=function(e){for(var r="",n=0;;){var t=e[n++],i=(t>127)+(t>223)+(t>239);if(n+i>e.length)return[r,Ae(e,n-1)];i?i==3?(t=((t&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,r+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?r+=String.fromCharCode((t&31)<<6|e[n++]&63):r+=String.fromCharCode((t&15)<<12|(e[n++]&63)<<6|e[n++]&63):r+=String.fromCharCode(t)}};function Cn(e,r){if(r){for(var n="",t=0;t<e.length;t+=16384)n+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return n}else{if(Ne)return Ne.decode(e);var i=dn(e),u=i[0],s=i[1];return s.length&&y(8),u}}var In=function(e,r){return r+30+D(e,r+26)+D(e,r+28)},An=function(e,r,n){var t=D(e,r+28),i=Cn(e.subarray(r+46,r+46+t),!(D(e,r+8)&2048)),u=r+46+t,s=E(e,r+20),o=n&&s==4294967295?yn(e,u):[s,E(e,r+24),E(e,r+42)],a=o[0],c=o[1],h=o[2];return[D(e,r+10),a,c,i,u+D(e,r+30)+D(e,r+32),h]},yn=function(e,r){for(;D(e,r)!=1;r+=4+D(e,r+2));return[Oe(e,r+12),Oe(e,r+4),Oe(e,r+20)]};var dr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Ur(e,r,n){n||(n=r,r={}),typeof n!="function"&&y(7);var t=[],i=function(){for(var m=0;m<t.length;++m)t[m]()},u={},s=function(m,x){dr(function(){n(m,x)})};dr(function(){s=n});for(var o=e.length-22;E(e,o)!=101010256;--o)if(!o||e.length-o>65558)return s(y(13,0,1),null),i;var a=D(e,o+8);if(a){var c=a,h=E(e,o+16),g=h==4294967295||c==65535;if(g){var T=E(e,o-12);g=E(e,T)==101075792,g&&(c=a=E(e,T+32),h=E(e,T+48))}for(var N=r&&r.filter,te=function(m){var x=An(e,h,g),W=x[0],V=x[1],F=x[2],ie=x[3],_=x[4],ae=x[5],d=In(e,ae);h=_;var R=function(K,oe){K?(i(),s(K,null)):(oe&&(u[ie]=oe),--a||s(null,u))};if(!N||N({name:ie,size:V,originalSize:F,compression:W}))if(!W)R(null,Ae(e,d,d+V));else if(W==8){var pe=e.subarray(d,d+V);if(V<32e4)try{R(null,Le(pe,new A(F)))}catch(K){R(K,null)}else t.push(gn(pe,{size:F},R))}else R(y(14,"unknown compression type "+W,1),null);else R(null,null)},L=0;L<c;++L)te(L)}else s(null,{});return i}var Nr=require("fs"),z=require("fs/promises"),ne=require("path");f();function kr(e){function r(s,o,a,c){let h=0;return h+=s<<0,h+=o<<8,h+=a<<16,h+=c<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,t=e[4]===2;if(!t&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=r(e[8],e[9],e[10],e[11]),o=r(e[12],e[13],e[14],e[15]),a=16+s+o;return e.subarray(a,e.length)}let i=r(e[8],e[9],e[10],e[11]),u=12+i;return e.subarray(u,e.length)}Ge();var wn=(0,ne.join)(Pe,"ExtensionCache");async function xn(e,r){return await(0,z.mkdir)(r,{recursive:!0}),new Promise((n,t)=>{Ur(e,(i,u)=>{if(i)return void t(i);Promise.all(Object.keys(u).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,z.mkdir)((0,ne.join)(r,s),{recursive:!0});let o=s.split("/"),a=o.pop(),c=o.join("/"),h=(0,ne.join)(r,c);c&&await(0,z.mkdir)(h,{recursive:!0}),await(0,z.writeFile)((0,ne.join)(h,a),u[s])})).then(()=>n()).catch(s=>{(0,z.rm)(r,{recursive:!0,force:!0}),t(s)})})})}async function Wr(e){let r=(0,ne.join)(wn,`${e}`);try{await(0,z.access)(r,Nr.constants.F_OK)}catch{let t=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Q(t);await xn(kr(i),r)}Or.session.defaultSession.loadExtension(r)}f();function Vr(e,r,n){let t=r;if(r in e)return void n(e[t]);Object.defineProperty(e,r,{set(i){delete e[t],e[t]=i,n(i)},configurable:!0,enumerable:!1})}console.log("[Vencord] Starting up...");var _r=require.main.filename,Dn=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",je=(0,O.join)((0,O.dirname)(_r),"..",Dn),zn=require((0,O.join)(je,"package.json"));require.main.filename=(0,O.join)(je,zn.main);G.app.setAppPath(je);process.platform==="win32"&&(Br(),Xr(En));var he=class extends G.default.BrowserWindow{constructor(r){if(r?.webPreferences?.preload&&r.title){let n=r.webPreferences.preload;r.webPreferences.preload=(0,O.join)(__dirname,"preload.js"),r.webPreferences.sandbox=!1,process.env.DISCORD_PRELOAD=n,super(r),gr(this)}else super(r)}};Object.assign(he,G.default.BrowserWindow);Object.defineProperty(he,"name",{value:"BrowserWindow",configurable:!0});var jr=require.resolve("electron");delete require.cache[jr].exports;require.cache[jr].exports={...G.default,BrowserWindow:he};Vr(global,"appSettings",e=>e.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0));process.env.DATA_DIR=(0,O.join)(G.app.getPath("userData"),"..","Vencord");G.default.app.whenReady().then(()=>{G.default.protocol.registerFileProtocol("vencord",({url:r},n)=>{let t=r.slice(10);switch(t.endsWith("/")&&(t=t.slice(0,-1)),t){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":n((0,O.join)(__dirname,t));break;default:n({statusCode:403})}});try{JSON.parse(ke()).enableReactDevtools&&Wr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(n=>console.error("[Vencord] Failed to install React Developer Tools",n))}catch{}function e(r,n){if(n in r){let t=r[n][0];for(let i of["style-src","connect-src","img-src","font-src","media-src"])t=t.replace(new RegExp(`${i}.+?;`),`${i} * blob: data: 'unsafe-inline';`);t=t.replace(/script-src.+?(?=;)/,"$& 'unsafe-eval' https://unpkg.com https://cdnjs.cloudflare.com"),r[n]=[t]}}G.default.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,url:n},t)=>{r&&(e(r,"content-security-policy"),e(r,"content-security-policy-report-only"),n.endsWith(".css")&&(r["content-type"]=["text/css"])),t({cancel:!1,responseHeaders:r})})});console.log("[Vencord] Loading original Discord app.asar");if((0,Lr.readFileSync)(_r,"utf-8").includes('require("../app.asar")')){console.warn("[Vencord] [--> WARNING <--] You have a legacy Vencord install. Please reinject");let e=require("module"),r=e._load;e._load=function(n){return n==="../app.asar"&&(e._load=r,arguments[0]=require.main.filename),r.apply(this,arguments)}}else require(require.main.filename);
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */