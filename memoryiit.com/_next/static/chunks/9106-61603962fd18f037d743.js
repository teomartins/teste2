"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9106],{6784:(t,e,s)=>{s.d(e,{II:()=>l,v_:()=>u,wm:()=>c});var i=s(50920),n=s(21239),r=s(73504),o=s(52020);function a(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||n.t.isOnline()}var h=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function c(t){return t instanceof h}function l(t){let e,s=!1,c=0,l=!1,d=(0,r.T)(),f=()=>i.m.isFocused()&&("always"===t.networkMode||n.t.isOnline())&&t.canRun(),p=()=>u(t.networkMode)&&t.canRun(),y=s=>{l||(l=!0,t.onSuccess?.(s),e?.(),d.resolve(s))},v=s=>{l||(l=!0,t.onError?.(s),e?.(),d.reject(s))},m=()=>new Promise(s=>{e=t=>{(l||f())&&s(t)},t.onPause?.()}).then(()=>{e=void 0,l||t.onContinue?.()}),b=()=>{let e;if(l)return;let i=0===c?t.initialPromise:void 0;try{e=i??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(l)return;let i=t.retry??3*!o.S$,n=t.retryDelay??a,r="function"==typeof n?n(c,e):n,u=!0===i||"number"==typeof i&&c<i||"function"==typeof i&&i(c,e);if(s||!u)return void v(e);c++,t.onFail?.(c,e),(0,o.yy)(r).then(()=>f()?void 0:m()).then(()=>{s?v(e):b()})})};return{promise:d,cancel:e=>{l||(v(new h(e)),t.abort?.())},continue:()=>(e?.(),d),cancelRetry:()=>{s=!0},continueRetry:()=>{s=!1},canStart:p,start:()=>(p()?b():m().then(b),d)}}},7165:(t,e,s)=>{s.d(e,{jG:()=>n});var i=t=>setTimeout(t,0),n=function(){let t=[],e=0,s=t=>{t()},n=t=>{t()},r=i,o=i=>{e?t.push(i):r(()=>{s(i)})},a=()=>{let e=t;t=[],e.length&&r(()=>{n(()=>{e.forEach(t=>{s(t)})})})};return{batch:t=>{let s;e++;try{s=t()}finally{--e||a()}return s},batchCalls:t=>(...e)=>{o(()=>{t(...e)})},schedule:o,setNotifyFunction:t=>{s=t},setBatchNotifyFunction:t=>{n=t},setScheduler:t=>{r=t}}}()},21239:(t,e,s)=>{s.d(e,{t:()=>r});var i=s(25910),n=s(52020),r=new class extends i.Q{#t=!0;#e;#s;constructor(){super(),this.#s=t=>{if(!n.S$&&window.addEventListener){let e=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",s)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#t!==t&&(this.#t=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#t}}},25910:(t,e,s)=>{s.d(e,{Q:()=>i});var i=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},26715:(t,e,s)=>{s.d(e,{Ht:()=>a,jE:()=>o});var i=s(12115),n=s(95155),r=i.createContext(void 0),o=t=>{let e=i.useContext(r);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=t=>{let{client:e,children:s}=t;return i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,n.jsx)(r.Provider,{value:e,children:s})}},34560:(t,e,s)=>{s.d(e,{$:()=>a,s:()=>o});var i=s(7165),n=s(57948),r=s(6784),o=class extends n.k{#i;#n;#r;constructor(t){super(),this.mutationId=t.mutationId,this.#n=t.mutationCache,this.#i=[],this.state=t.state||a(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#i.includes(t)||(this.#i.push(t),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#i=this.#i.filter(e=>e!==t),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#i.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(t){let e=()=>{this.#o({type:"continue"})};this.#r=(0,r.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:e,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let s="pending"===this.state.status,i=!this.#r.canStart();try{if(s)e();else{this.#o({type:"pending",variables:t,isPaused:i}),await this.#n.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#o({type:"pending",context:e,variables:t,isPaused:i})}let n=await this.#r.start();return await this.#n.config.onSuccess?.(n,t,this.state.context,this),await this.options.onSuccess?.(n,t,this.state.context),await this.#n.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,t,this.state.context),this.#o({type:"success",data:n}),n}catch(e){try{throw await this.#n.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#n.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#o({type:"error",error:e})}}finally{this.#n.runNext(this)}}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),i.jG.batch(()=>{this.#i.forEach(e=>{e.onMutationUpdate(t)}),this.#n.notify({mutation:this,type:"updated",action:t})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},35695:(t,e,s)=>{var i=s(18999);s.o(i,"useParams")&&s.d(e,{useParams:function(){return i.useParams}}),s.o(i,"usePathname")&&s.d(e,{usePathname:function(){return i.usePathname}}),s.o(i,"useRouter")&&s.d(e,{useRouter:function(){return i.useRouter}}),s.o(i,"useSearchParams")&&s.d(e,{useSearchParams:function(){return i.useSearchParams}})},39853:(t,e,s)=>{s.d(e,{X:()=>a,k:()=>u});var i=s(52020),n=s(7165),r=s(6784),o=s(57948),a=class extends o.k{#a;#u;#h;#c;#r;#l;#d;constructor(t){super(),this.#d=!1,this.#l=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#c=t.client,this.#h=this.#c.getQueryCache(),this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#a=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#a,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#h.remove(this)}setData(t,e){let s=(0,i.pl)(this.state.data,t,this.options);return this.#o({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#o({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#r?.promise;return this.#r?.cancel(t),e?e.then(i.lQ).catch(i.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#a)}isActive(){return this.observers.some(t=>!1!==(0,i.Eh)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===i.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0&&this.observers.some(t=>"static"===(0,i.d2)(t.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(t=0){return void 0===this.state.data||"static"!==t&&(!!this.state.isInvalidated||!(0,i.j3)(this.state.dataUpdatedAt,t))}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#h.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#r&&(this.#d?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#h.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,n=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#d=!0,s.signal)})},o=()=>{let t=(0,i.ZM)(this.options,e),s=(()=>{let t={client:this.#c,queryKey:this.queryKey,meta:this.meta};return n(t),t})();return(this.#d=!1,this.options.persister)?this.options.persister(t,s,this):t(s)},a=(()=>{let t={fetchOptions:e,options:this.options,queryKey:this.queryKey,client:this.#c,state:this.state,fetchFn:o};return n(t),t})();this.options.behavior?.onFetch(a,this),this.#u=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#o({type:"fetch",meta:a.fetchOptions?.meta});let u=t=>{(0,r.wm)(t)&&t.silent||this.#o({type:"error",error:t}),(0,r.wm)(t)||(this.#h.config.onError?.(t,this),this.#h.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#r=(0,r.II)({initialPromise:e?.initialPromise,fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t)return void u(Error(`${this.queryHash} data is undefined`));try{this.setData(t)}catch(t){u(t);return}this.#h.config.onSuccess?.(t,this),this.#h.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:u,onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),this.#r.start()}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return this.#u=void 0,{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,r.wm)(s)&&s.revert&&this.#u)return{...this.#u,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.jG.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#h.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,r.v_)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},50920:(t,e,s)=>{s.d(e,{m:()=>r});var i=s(25910),n=s(52020),r=new class extends i.Q{#f;#e;#s;constructor(){super(),this.#s=t=>{if(!n.S$&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#s)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#s=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#f!==t&&(this.#f=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#f?this.#f:globalThis.document?.visibilityState!=="hidden"}}},52020:(t,e,s)=>{s.d(e,{Cp:()=>p,EN:()=>f,Eh:()=>h,F$:()=>d,GU:()=>P,MK:()=>c,S$:()=>i,ZM:()=>F,ZZ:()=>C,Zw:()=>r,d2:()=>u,f8:()=>y,gn:()=>o,hT:()=>O,j3:()=>a,lQ:()=>n,nJ:()=>l,pl:()=>S,y9:()=>w,yy:()=>g});var i="undefined"==typeof window||"Deno"in globalThis;function n(){}function r(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){return"function"==typeof t?t(e):t}function h(t,e){return"function"==typeof t?t(e):t}function c(t,e){let{type:s="all",exact:i,fetchStatus:n,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==d(o,e.options))return!1}else if(!p(e.queryKey,o))return!1}if("all"!==s){let t=e.isActive();if("active"===s&&!t||"inactive"===s&&t)return!1}return("boolean"!=typeof a||e.isStale()===a)&&(!n||n===e.state.fetchStatus)&&(!r||!!r(e))}function l(t,e){let{exact:s,status:i,predicate:n,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(s){if(f(e.options.mutationKey)!==f(r))return!1}else if(!p(e.options.mutationKey,r))return!1}return(!i||e.state.status===i)&&(!n||!!n(e))}function d(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>m(e)?Object.keys(e).sort().reduce((t,s)=>(t[s]=e[s],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&Object.keys(e).every(s=>p(t[s],e[s]))}function y(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let s in t)if(t[s]!==e[s])return!1;return!0}function v(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function m(t){if(!b(t))return!1;let e=t.constructor;if(void 0===e)return!0;let s=e.prototype;return!!b(s)&&!!s.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(t)===Object.prototype}function b(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return new Promise(e=>{setTimeout(e,t)})}function S(t,e,s){return"function"==typeof s.structuralSharing?s.structuralSharing(t,e):!1!==s.structuralSharing?function t(e,s){if(e===s)return e;let i=v(e)&&v(s);if(i||m(e)&&m(s)){let n=i?e:Object.keys(e),r=n.length,o=i?s:Object.keys(s),a=o.length,u=i?[]:{},h=new Set(n),c=0;for(let n=0;n<a;n++){let r=i?n:o[n];(!i&&h.has(r)||i)&&void 0===e[r]&&void 0===s[r]?(u[r]=void 0,c++):(u[r]=t(e[r],s[r]),u[r]===e[r]&&void 0!==e[r]&&c++)}return r===a&&c===r?e:u}return s}(t,e):e}function w(t,e,s=0){let i=[...t,e];return s&&i.length>s?i.slice(1):i}function C(t,e,s=0){let i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var O=Symbol();function F(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==O?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}function P(t,e){return"function"==typeof t?t(...e):!!t}},57948:(t,e,s)=>{s.d(e,{k:()=>n});var i=s(52020),n=class{#p;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,i.gn)(this.gcTime)&&(this.#p=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(i.S$?1/0:3e5))}clearGcTimeout(){this.#p&&(clearTimeout(this.#p),this.#p=void 0)}}},73504:(t,e,s)=>{function i(){let t,e,s=new Promise((s,i)=>{t=s,e=i});function i(t){Object.assign(s,t),delete s.resolve,delete s.reject}return s.status="pending",s.catch(()=>{}),s.resolve=e=>{i({status:"fulfilled",value:e}),t(e)},s.reject=t=>{i({status:"rejected",reason:t}),e(t)},s}s.d(e,{T:()=>i})}}]);