class e{constructor(e,t){Object.defineProperty(this,"ptr",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inst",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.ptr=e,this.inst=t}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}const t={ZBAR_NONE:0,ZBAR_PARTIAL:1,ZBAR_EAN2:2,ZBAR_EAN5:5,ZBAR_EAN8:8,ZBAR_UPCE:9,ZBAR_ISBN10:10,ZBAR_UPCA:12,ZBAR_EAN13:13,ZBAR_ISBN13:14,ZBAR_COMPOSITE:15,ZBAR_I25:25,ZBAR_DATABAR:34,ZBAR_DATABAR_EXP:35,ZBAR_CODABAR:38,ZBAR_CODE39:39,ZBAR_PDF417:57,ZBAR_QRCODE:64,ZBAR_SQCODE:80,ZBAR_CODE93:93,ZBAR_CODE128:128,ZBAR_SYMBOL:255,ZBAR_ADDON2:512,ZBAR_ADDON5:1280,ZBAR_ADDON:1792},r=4;class n{constructor(e,t){Object.defineProperty(this,"ptr",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ptr32",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"buf",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"HEAP8",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"HEAP32",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"HEAPU32",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.ptr=e,this.ptr32=e>>2,this.buf=t,this.HEAP8=new Int8Array(t),this.HEAPU32=new Uint32Array(t),this.HEAP32=new Int32Array(t)}}class i extends n{get type(){return this.HEAPU32[this.ptr32]}get data(){const e=this.HEAPU32[this.ptr32+4],t=this.HEAPU32[this.ptr32+5];return Int8Array.from(this.HEAP8.subarray(t,t+e))}get points(){const e=this.HEAPU32[this.ptr32+7],t=this.HEAPU32[this.ptr32+8]>>2,r=[];for(let n=0;n<e;++n){const e=this.HEAP32[t+2*n],i=this.HEAP32[t+2*n+1];r.push({x:e,y:i})}return r}get orientation(){return this.HEAP32[this.ptr32+9]}get next(){const e=this.HEAPU32[this.ptr32+11];return e?new i(e,this.buf):null}get time(){return this.HEAPU32[this.ptr32+13]}get cacheCount(){return this.HEAP32[this.ptr32+14]}get quality(){return this.HEAP32[this.ptr32+15]}}class a extends n{get head(){const e=this.HEAPU32[this.ptr32+2];return e?new i(e,this.buf):null}}class s{constructor(e){Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"typeName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"points",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"orientation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cacheCount",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"quality",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.type=e.type,this.typeName=Object.keys(t).find((e=>t[e]===this.type)),this.data=e.data,this.points=e.points,this.orientation=e.orientation,this.time=e.time,this.cacheCount=e.cacheCount,this.quality=e.quality}static createSymbolsFromPtr(e,t){if(0==e)return[];let r=new a(e,t).head;const n=[];for(;null!==r;)n.push(new s(r)),r=r.next;return n}decode(e){return new TextDecoder(e).decode(this.data)}}var o,c=(o=import.meta.url,async function(e={}){var t,r,n=e;n.ready=new Promise(((e,n)=>{t=e,r=n}));var i,a,s,c=Object.assign({},n),u="object"==typeof window,l="function"==typeof importScripts,f="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,h="";if(f){const{createRequire:e}=await import("module");var m=e(import.meta.url),p=m("fs"),b=m("path");h=l?b.dirname(h)+"/":m("url").fileURLToPath(new URL("./",import.meta.url)),i=(e,t)=>(e=D(e)?new URL(e):b.normalize(e),p.readFileSync(e,t?void 0:"utf8")),s=e=>{var t=i(e,!0);return t.buffer||(t=new Uint8Array(t)),t},a=(e,t,r,n=!0)=>{e=D(e)?new URL(e):b.normalize(e),p.readFile(e,n?void 0:"utf8",((e,i)=>{e?r(e):t(n?i.buffer:i)}))},!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),n.inspect=()=>"[Emscripten Module object]"}else(u||l)&&(l?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),o&&(h=o),h=0!==h.indexOf("blob:")?h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},l&&(s=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),a=(e,t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{200==n.status||0==n.status&&n.response?t(n.response):r()},n.onerror=r,n.send(null)});var d,y,g,A=n.print||console.log.bind(console),_=n.printErr||console.error.bind(console);Object.assign(n,c),c=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit,n.wasmBinary&&(d=n.wasmBinary),n.noExitRuntime,"object"!=typeof WebAssembly&&H("no native wasm support detected");var w,v,P=!1;function R(){var e=y.buffer;n.HEAP8=new Int8Array(e),n.HEAP16=new Int16Array(e),n.HEAP32=new Int32Array(e),n.HEAPU8=w=new Uint8Array(e),n.HEAPU16=new Uint16Array(e),n.HEAPU32=v=new Uint32Array(e),n.HEAPF32=new Float32Array(e),n.HEAPF64=new Float64Array(e)}var E=[],I=[],S=[],B=0,O=null;function H(e){n.onAbort&&n.onAbort(e),_(e="Aborted("+e+")"),P=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw r(t),t}var U,Z,j="data:application/octet-stream;base64,";function C(e){return e.startsWith(j)}function D(e){return e.startsWith("file://")}function F(e){if(e==U&&d)return new Uint8Array(d);if(s)return s(e);throw"both async and sync fetching of the wasm failed"}function x(e,t,r){return function(e){if(!d&&(u||l)){if("function"==typeof fetch&&!D(e))return fetch(e,{credentials:"same-origin"}).then((t=>{if(!t.ok)throw"failed to load wasm binary file at '"+e+"'";return t.arrayBuffer()})).catch((()=>F(e)));if(a)return new Promise(((t,r)=>{a(e,(e=>t(new Uint8Array(e))),r)}))}return Promise.resolve().then((()=>F(e)))}(e).then((e=>WebAssembly.instantiate(e,t))).then((e=>e)).then(r,(e=>{_("failed to asynchronously prepare wasm: "+e),H(e)}))}n.locateFile?C(U="zbar.wasm")||(Z=U,U=n.locateFile?n.locateFile(Z,h):h+Z):U=new URL("zbar.wasm",import.meta.url).href;var T,N=e=>{for(;e.length>0;)e.shift()(n)},k=e=>{var t=e-y.buffer.byteLength+65535>>>16;try{return y.grow(t),R(),1}catch(e){}},L="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,q=[null,[],[]],M=(e,t)=>{var r=q[e];0===t||10===t?((1===e?A:_)(((e,t,r)=>{for(var n=t+r,i=t;e[i]&&!(i>=n);)++i;if(i-t>16&&e.buffer&&L)return L.decode(e.subarray(t,i));for(var a="";t<i;){var s=e[t++];if(128&s){var o=63&e[t++];if(192!=(224&s)){var c=63&e[t++];if((s=224==(240&s)?(15&s)<<12|o<<6|c:(7&s)<<18|o<<12|c<<6|63&e[t++])<65536)a+=String.fromCharCode(s);else{var u=s-65536;a+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else a+=String.fromCharCode((31&s)<<6|o)}else a+=String.fromCharCode(s)}return a})(r,0)),r.length=0):r.push(t)},W={d:()=>!0,e:function(){return Date.now()},c:e=>{var t=w.length,r=2147483648;if((e>>>=0)>r)return!1;for(var n,i,a=1;a<=4;a*=2){var s=t*(1+.2/a);s=Math.min(s,e+100663296);var o=Math.min(r,(n=Math.max(e,s))+((i=65536)-n%i)%i);if(k(o))return!0}return!1},f:e=>52,b:function(e,t,r,n,i){return 70},a:(e,t,r,n)=>{for(var i=0,a=0;a<r;a++){var s=v[t>>2],o=v[t+4>>2];t+=8;for(var c=0;c<o;c++)M(e,w[s+c]);i+=o}return v[n>>2]=i,0}};function G(){function e(){T||(T=!0,n.calledRun=!0,P||(N(I),t(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),S.unshift(e);var e;N(S)}()))}B>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),E.unshift(e);var e;N(E)}(),B>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(function(){var e,t,i,a,s={a:W};function o(e,t){var r,i=e.exports;return y=(g=i).g,R(),g.s,r=g.h,I.unshift(r),function(e){if(B--,n.monitorRunDependencies&&n.monitorRunDependencies(B),0==B&&O){var t=O;O=null,t()}}(),i}if(B++,n.monitorRunDependencies&&n.monitorRunDependencies(B),n.instantiateWasm)try{return n.instantiateWasm(s,o)}catch(e){_("Module.instantiateWasm callback failed with error: "+e),r(e)}(e=d,t=U,i=s,a=function(e){o(e.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||C(t)||D(t)||f||"function"!=typeof fetch?x(t,i,a):fetch(t,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,i).then(a,(function(e){return _("wasm streaming compile failed: "+e),_("falling back to ArrayBuffer instantiation"),x(t,i,a)}))))).catch(r)}(),n._ImageScanner_create=()=>(n._ImageScanner_create=g.i)(),n._ImageScanner_destory=e=>(n._ImageScanner_destory=g.j)(e),n._ImageScanner_set_config=(e,t,r,i)=>(n._ImageScanner_set_config=g.k)(e,t,r,i),n._ImageScanner_enable_cache=(e,t)=>(n._ImageScanner_enable_cache=g.l)(e,t),n._ImageScanner_recycle_image=(e,t)=>(n._ImageScanner_recycle_image=g.m)(e,t),n._ImageScanner_get_results=e=>(n._ImageScanner_get_results=g.n)(e),n._ImageScanner_scan=(e,t)=>(n._ImageScanner_scan=g.o)(e,t),n._Image_create=(e,t,r,i,a,s)=>(n._Image_create=g.p)(e,t,r,i,a,s),n._Image_destory=e=>(n._Image_destory=g.q)(e),n._Image_get_symbols=e=>(n._Image_get_symbols=g.r)(e),n._free=e=>(n._free=g.t)(e),n._malloc=e=>(n._malloc=g.u)(e),O=function e(){T||G(),T||(O=e)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return G(),e.ready});let u;const l=(async()=>{if(u=await c(),!u)throw Error("WASM was not loaded");return u})(),f=async()=>await l;class h extends e{static async createFromGrayBuffer(e,t,r,n=0){const i=await f(),a=new Uint8Array(r),s=e*t;if(s!==a.byteLength)throw Error(`data length (${a.byteLength} bytes) does not match width and height (${s} bytes)`);const o=i._malloc(s);i.HEAPU8.set(a,o);return new this(i._Image_create(e,t,808466521,o,s,n),i)}static async createFromRGBABuffer(e,t,r,n=0){const i=await f(),a=new Uint8Array(r),s=e*t;if(4*s!==a.byteLength)throw Error(`data length (${a.byteLength} bytes) does not match width and height (${4*s} bytes)`);const o=i._malloc(s),c=o+s,u=i.HEAPU8;for(let e=o,t=0;e<c;e++,t+=4)u[e]=19595*a[t]+38469*a[t+1]+7472*a[t+2]>>16;return new this(i._Image_create(e,t,808466521,o,s,n),i)}destroy(){this.checkAlive(),this.inst._Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const e=this.inst._Image_get_symbols(this.ptr);return s.createSymbolsFromPtr(e,this.inst.HEAPU8.buffer)}}class m extends e{static async create(){const e=await f();return new this(e._ImageScanner_create(),e)}destroy(){this.checkAlive(),this.inst._ImageScanner_destory(this.ptr),this.ptr=0}setConfig(e,t,r){return this.checkAlive(),this.inst._ImageScanner_set_config(this.ptr,e,t,r)}enableCache(e=!0){this.checkAlive(),this.inst._ImageScanner_enable_cache(this.ptr,e)}recycleImage(e){this.checkAlive(),this.inst._ImageScanner_recycle_image(this.ptr,e.getPointer())}getResults(){this.checkAlive();const e=this.inst._ImageScanner_get_results(this.ptr);return s.createSymbolsFromPtr(e,this.inst.HEAPU8.buffer)}scan(e){return this.checkAlive(),this.inst._ImageScanner_scan(this.ptr,e.getPointer())}}const p=async()=>{const e=await m.create();return e.setConfig(t.ZBAR_NONE,r,1),e};let b;const d=async(e,t)=>{void 0===t&&(t=b||await p(),b=t);const r=t.scan(e);if(r<0)throw Error("Scan Failed");return 0===r?[]:e.getSymbols()},y=async(e,t,r,n)=>{const i=await h.createFromGrayBuffer(t,r,e),a=await d(i,n);return i.destroy(),a},g=async(e,t,r,n)=>{const i=await h.createFromRGBABuffer(t,r,e),a=await d(i,n);return i.destroy(),a},A=async(e,t)=>await g(e.data.buffer,e.width,e.height,t);export{p as getDefaultScanner,y as scanGrayBuffer,A as scanImageData,g as scanRGBABuffer};
//# sourceMappingURL=index.js.map
