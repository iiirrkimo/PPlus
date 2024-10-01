javascript: (async function(){
	chestversion='1130910'
	title=document.querySelector("#root > header > a > h2").textContent;
	ahkuse=true;
	if (!title.includes('百寶箱')){
		!function(t,e){"object"==typeof exports?module.exports=exports=e():"function"==typeof define&&define.amd?define([],e):t.CryptoJS=e()}(this,function(){var n,o,s,a,h,t,e,l,r,i,c,f,d,u,p,S,x,b,A,H,z,_,v,g,y,B,w,k,m,C,D,E,R,M,F,P,W,O,I,U=U||function(h){var i;if("undefined"!=typeof window&&window.crypto&&(i=window.crypto),"undefined"!=typeof self&&self.crypto&&(i=self.crypto),!(i=!(i=!(i="undefined"!=typeof globalThis&&globalThis.crypto?globalThis.crypto:i)&&"undefined"!=typeof window&&window.msCrypto?window.msCrypto:i)&&"undefined"!=typeof global&&global.crypto?global.crypto:i)&&"function"==typeof require)try{i=require("crypto")}catch(t){}var r=Object.create||function(t){return e.prototype=t,t=new e,e.prototype=null,t};function e(){}var t={},n=t.lib={},o=n.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),(e.init.prototype=e).$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},l=n.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=s<<24-(i+o)%4*8}else for(var c=0;c<n;c+=4)e[i+c>>>2]=r[c>>>2];return this.sigBytes+=n,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=h.ceil(e/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(function(){if(i){if("function"==typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")}());return new l.init(e,t)}}),s=t.enc={},c=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new l.init(r,e/2)}},a=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new l.init(r,e)}},f=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(a.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return a.parse(unescape(encodeURIComponent(t)))}},d=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new l.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(t){var e,r=this._data,i=r.words,n=r.sigBytes,o=this.blockSize,s=n/(4*o),c=(s=t?h.ceil(s):h.max((0|s)-this._minBufferSize,0))*o,n=h.min(4*c,n);if(c){for(var a=0;a<c;a+=o)this._doProcessBlock(i,a);e=i.splice(0,c),r.sigBytes-=n}return new l.init(e,n)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),u=(n.Hasher=d.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(r){return function(t,e){return new r.init(e).finalize(t)}},_createHmacHelper:function(r){return function(t,e){return new u.HMAC.init(r,e).finalize(t)}}}),t.algo={});return t}(Math);function K(t,e,r){return t&e|~t&r}function X(t,e,r){return t&r|e&~r}function L(t,e){return t<<e|t>>>32-e}function j(t,e,r,i){var n,o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,i.encryptBlock(n,0);for(var s=0;s<r;s++)t[e+s]^=n[s]}function T(t){var e,r,i;return 255==(t>>24&255)?(r=t>>8&255,i=255&t,255===(e=t>>16&255)?(e=0,255===r?(r=0,255===i?i=0:++i):++r):++e,t=0,t+=e<<16,t+=r<<8,t+=i):t+=1<<24,t}function N(){for(var t=this._X,e=this._C,r=0;r<8;r++)E[r]=e[r];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<E[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<E[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<E[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<E[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<E[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<E[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<E[6]>>>0?1:0)|0,this._b=e[7]>>>0<E[7]>>>0?1:0;for(r=0;r<8;r++){var i=t[r]+e[r],n=65535&i,o=i>>>16;R[r]=((n*n>>>17)+n*o>>>15)+o*o^((4294901760&i)*i|0)+((65535&i)*i|0)}t[0]=R[0]+(R[7]<<16|R[7]>>>16)+(R[6]<<16|R[6]>>>16)|0,t[1]=R[1]+(R[0]<<8|R[0]>>>24)+R[7]|0,t[2]=R[2]+(R[1]<<16|R[1]>>>16)+(R[0]<<16|R[0]>>>16)|0,t[3]=R[3]+(R[2]<<8|R[2]>>>24)+R[1]|0,t[4]=R[4]+(R[3]<<16|R[3]>>>16)+(R[2]<<16|R[2]>>>16)|0,t[5]=R[5]+(R[4]<<8|R[4]>>>24)+R[3]|0,t[6]=R[6]+(R[5]<<16|R[5]>>>16)+(R[4]<<16|R[4]>>>16)|0,t[7]=R[7]+(R[6]<<8|R[6]>>>24)+R[5]|0}function q(){for(var t=this._X,e=this._C,r=0;r<8;r++)O[r]=e[r];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<O[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<O[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<O[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<O[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<O[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<O[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<O[6]>>>0?1:0)|0,this._b=e[7]>>>0<O[7]>>>0?1:0;for(r=0;r<8;r++){var i=t[r]+e[r],n=65535&i,o=i>>>16;I[r]=((n*n>>>17)+n*o>>>15)+o*o^((4294901760&i)*i|0)+((65535&i)*i|0)}t[0]=I[0]+(I[7]<<16|I[7]>>>16)+(I[6]<<16|I[6]>>>16)|0,t[1]=I[1]+(I[0]<<8|I[0]>>>24)+I[7]|0,t[2]=I[2]+(I[1]<<16|I[1]>>>16)+(I[0]<<16|I[0]>>>16)|0,t[3]=I[3]+(I[2]<<8|I[2]>>>24)+I[1]|0,t[4]=I[4]+(I[3]<<16|I[3]>>>16)+(I[2]<<16|I[2]>>>16)|0,t[5]=I[5]+(I[4]<<8|I[4]>>>24)+I[3]|0,t[6]=I[6]+(I[5]<<16|I[5]>>>16)+(I[4]<<16|I[4]>>>16)|0,t[7]=I[7]+(I[6]<<8|I[6]>>>24)+I[5]|0}return F=(M=U).lib,n=F.Base,o=F.WordArray,(M=M.x64={}).Word=n.extend({init:function(t,e){this.high=t,this.low=e}}),M.WordArray=n.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:8*t.length},toX32:function(){for(var t=this.words,e=t.length,r=[],i=0;i<e;i++){var n=t[i];r.push(n.high),r.push(n.low)}return o.create(r,this.sigBytes)},clone:function(){for(var t=n.clone.call(this),e=t.words=this.words.slice(0),r=e.length,i=0;i<r;i++)e[i]=e[i].clone();return t}}),"function"==typeof ArrayBuffer&&(P=U.lib.WordArray,s=P.init,(P.init=function(t){if((t=(t=t instanceof ArrayBuffer?new Uint8Array(t):t)instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t)instanceof Uint8Array){for(var e=t.byteLength,r=[],i=0;i<e;i++)r[i>>>2]|=t[i]<<24-i%4*8;s.call(this,r,e)}else s.apply(this,arguments)}).prototype=P),function(){var t=U,n=t.lib.WordArray,t=t.enc;t.Utf16=t.Utf16BE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=e[n>>>2]>>>16-n%4*8&65535;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>1]|=t.charCodeAt(i)<<16-i%2*16;return n.create(r,2*e)}};function s(t){return t<<8&4278255360|t>>>8&16711935}t.Utf16LE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=s(e[n>>>2]>>>16-n%4*8&65535);i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>1]|=s(t.charCodeAt(i)<<16-i%2*16);return n.create(r,2*e)}}}(),a=(w=U).lib.WordArray,w.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;c<4&&o+.75*c<r;c++)n.push(i.charAt(s>>>6*(3-c)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(t){var e=t.length,r=this._map;if(!(i=this._reverseMap))for(var i=this._reverseMap=[],n=0;n<r.length;n++)i[r.charCodeAt(n)]=n;var o=r.charAt(64);return!o||-1!==(o=t.indexOf(o))&&(e=o),function(t,e,r){for(var i=[],n=0,o=0;o<e;o++){var s,c;o%4&&(s=r[t.charCodeAt(o-1)]<<o%4*2,c=r[t.charCodeAt(o)]>>>6-o%4*2,c=s|c,i[n>>>2]|=c<<24-n%4*8,n++)}return a.create(i,n)}(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},h=(F=U).lib.WordArray,F.enc.Base64url={stringify:function(t,e=!0){var r=t.words,i=t.sigBytes,n=e?this._safe_map:this._map;t.clamp();for(var o=[],s=0;s<i;s+=3)for(var c=(r[s>>>2]>>>24-s%4*8&255)<<16|(r[s+1>>>2]>>>24-(s+1)%4*8&255)<<8|r[s+2>>>2]>>>24-(s+2)%4*8&255,a=0;a<4&&s+.75*a<i;a++)o.push(n.charAt(c>>>6*(3-a)&63));var h=n.charAt(64);if(h)for(;o.length%4;)o.push(h);return o.join("")},parse:function(t,e=!0){var r=t.length,i=e?this._safe_map:this._map;if(!(n=this._reverseMap))for(var n=this._reverseMap=[],o=0;o<i.length;o++)n[i.charCodeAt(o)]=o;e=i.charAt(64);return!e||-1!==(e=t.indexOf(e))&&(r=e),function(t,e,r){for(var i=[],n=0,o=0;o<e;o++){var s,c;o%4&&(s=r[t.charCodeAt(o-1)]<<o%4*2,c=r[t.charCodeAt(o)]>>>6-o%4*2,c=s|c,i[n>>>2]|=c<<24-n%4*8,n++)}return h.create(i,n)}(t,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"},function(a){var t=U,e=t.lib,r=e.WordArray,i=e.Hasher,e=t.algo,A=[];!function(){for(var t=0;t<64;t++)A[t]=4294967296*a.abs(a.sin(t+1))|0}();e=e.MD5=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,s=t[e+0],c=t[e+1],a=t[e+2],h=t[e+3],l=t[e+4],f=t[e+5],d=t[e+6],u=t[e+7],p=t[e+8],_=t[e+9],y=t[e+10],v=t[e+11],g=t[e+12],B=t[e+13],w=t[e+14],k=t[e+15],m=H(m=o[0],b=o[1],x=o[2],S=o[3],s,7,A[0]),S=H(S,m,b,x,c,12,A[1]),x=H(x,S,m,b,a,17,A[2]),b=H(b,x,S,m,h,22,A[3]);m=H(m,b,x,S,l,7,A[4]),S=H(S,m,b,x,f,12,A[5]),x=H(x,S,m,b,d,17,A[6]),b=H(b,x,S,m,u,22,A[7]),m=H(m,b,x,S,p,7,A[8]),S=H(S,m,b,x,_,12,A[9]),x=H(x,S,m,b,y,17,A[10]),b=H(b,x,S,m,v,22,A[11]),m=H(m,b,x,S,g,7,A[12]),S=H(S,m,b,x,B,12,A[13]),x=H(x,S,m,b,w,17,A[14]),m=z(m,b=H(b,x,S,m,k,22,A[15]),x,S,c,5,A[16]),S=z(S,m,b,x,d,9,A[17]),x=z(x,S,m,b,v,14,A[18]),b=z(b,x,S,m,s,20,A[19]),m=z(m,b,x,S,f,5,A[20]),S=z(S,m,b,x,y,9,A[21]),x=z(x,S,m,b,k,14,A[22]),b=z(b,x,S,m,l,20,A[23]),m=z(m,b,x,S,_,5,A[24]),S=z(S,m,b,x,w,9,A[25]),x=z(x,S,m,b,h,14,A[26]),b=z(b,x,S,m,p,20,A[27]),m=z(m,b,x,S,B,5,A[28]),S=z(S,m,b,x,a,9,A[29]),x=z(x,S,m,b,u,14,A[30]),m=C(m,b=z(b,x,S,m,g,20,A[31]),x,S,f,4,A[32]),S=C(S,m,b,x,p,11,A[33]),x=C(x,S,m,b,v,16,A[34]),b=C(b,x,S,m,w,23,A[35]),m=C(m,b,x,S,c,4,A[36]),S=C(S,m,b,x,l,11,A[37]),x=C(x,S,m,b,u,16,A[38]),b=C(b,x,S,m,y,23,A[39]),m=C(m,b,x,S,B,4,A[40]),S=C(S,m,b,x,s,11,A[41]),x=C(x,S,m,b,h,16,A[42]),b=C(b,x,S,m,d,23,A[43]),m=C(m,b,x,S,_,4,A[44]),S=C(S,m,b,x,g,11,A[45]),x=C(x,S,m,b,k,16,A[46]),m=D(m,b=C(b,x,S,m,a,23,A[47]),x,S,s,6,A[48]),S=D(S,m,b,x,u,10,A[49]),x=D(x,S,m,b,w,15,A[50]),b=D(b,x,S,m,f,21,A[51]),m=D(m,b,x,S,g,6,A[52]),S=D(S,m,b,x,h,10,A[53]),x=D(x,S,m,b,y,15,A[54]),b=D(b,x,S,m,c,21,A[55]),m=D(m,b,x,S,p,6,A[56]),S=D(S,m,b,x,k,10,A[57]),x=D(x,S,m,b,d,15,A[58]),b=D(b,x,S,m,B,21,A[59]),m=D(m,b,x,S,l,6,A[60]),S=D(S,m,b,x,v,10,A[61]),x=D(x,S,m,b,a,15,A[62]),b=D(b,x,S,m,_,21,A[63]),o[0]=o[0]+m|0,o[1]=o[1]+b|0,o[2]=o[2]+x|0,o[3]=o[3]+S|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32;var n=a.floor(r/4294967296),r=r;e[15+(64+i>>>9<<4)]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8),e[14+(64+i>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process();for(var e=this._hash,o=e.words,s=0;s<4;s++){var c=o[s];o[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}return e},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function H(t,e,r,i,n,o,s){s=t+(e&r|~e&i)+n+s;return(s<<o|s>>>32-o)+e}function z(t,e,r,i,n,o,s){s=t+(e&i|r&~i)+n+s;return(s<<o|s>>>32-o)+e}function C(t,e,r,i,n,o,s){s=t+(e^r^i)+n+s;return(s<<o|s>>>32-o)+e}function D(t,e,r,i,n,o,s){s=t+(r^(e|~i))+n+s;return(s<<o|s>>>32-o)+e}t.MD5=i._createHelper(e),t.HmacMD5=i._createHmacHelper(e)}(Math),P=(M=U).lib,t=P.WordArray,e=P.Hasher,P=M.algo,l=[],P=P.SHA1=e.extend({_doReset:function(){this._hash=new t.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=0;a<80;a++){a<16?l[a]=0|t[e+a]:(h=l[a-3]^l[a-8]^l[a-14]^l[a-16],l[a]=h<<1|h>>>31);var h=(i<<5|i>>>27)+c+l[a];h+=a<20?1518500249+(n&o|~n&s):a<40?1859775393+(n^o^s):a<60?(n&o|n&s|o&s)-1894007588:(n^o^s)-899497514,c=s,s=o,o=n<<30|n>>>2,n=i,i=h}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=Math.floor(r/4294967296),e[15+(64+i>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t}}),M.SHA1=e._createHelper(P),M.HmacSHA1=e._createHmacHelper(P),function(n){var t=U,e=t.lib,r=e.WordArray,i=e.Hasher,e=t.algo,o=[],p=[];!function(){function t(t){return 4294967296*(t-(0|t))|0}for(var e=2,r=0;r<64;)!function(t){for(var e=n.sqrt(t),r=2;r<=e;r++)if(!(t%r))return;return 1}(e)||(r<8&&(o[r]=t(n.pow(e,.5))),p[r]=t(n.pow(e,1/3)),r++),e++}();var _=[],e=e.SHA256=i.extend({_doReset:function(){this._hash=new r.init(o.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=r[5],h=r[6],l=r[7],f=0;f<64;f++){f<16?_[f]=0|t[e+f]:(d=_[f-15],u=_[f-2],_[f]=((d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3)+_[f-7]+((u<<15|u>>>17)^(u<<13|u>>>19)^u>>>10)+_[f-16]);var d=i&n^i&o^n&o,u=l+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&a^~c&h)+p[f]+_[f],l=h,h=a,a=c,c=s+u|0,s=o,o=n,n=i,i=u+(((i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22))+d)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0,r[5]=r[5]+a|0,r[6]=r[6]+h|0,r[7]=r[7]+l|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=n.floor(r/4294967296),e[15+(64+i>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA256=i._createHelper(e),t.HmacSHA256=i._createHmacHelper(e)}(Math),r=(w=U).lib.WordArray,F=w.algo,i=F.SHA256,F=F.SHA224=i.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=i._doFinalize.call(this);return t.sigBytes-=4,t}}),w.SHA224=i._createHelper(F),w.HmacSHA224=i._createHmacHelper(F),function(){var t=U,e=t.lib.Hasher,r=t.x64,i=r.Word,n=r.WordArray,r=t.algo;function o(){return i.create.apply(i,arguments)}var t1=[o(1116352408,3609767458),o(1899447441,602891725),o(3049323471,3964484399),o(3921009573,2173295548),o(961987163,4081628472),o(1508970993,3053834265),o(2453635748,2937671579),o(2870763221,3664609560),o(3624381080,2734883394),o(310598401,1164996542),o(607225278,1323610764),o(1426881987,3590304994),o(1925078388,4068182383),o(2162078206,991336113),o(2614888103,633803317),o(3248222580,3479774868),o(3835390401,2666613458),o(4022224774,944711139),o(264347078,2341262773),o(604807628,2007800933),o(770255983,1495990901),o(1249150122,1856431235),o(1555081692,3175218132),o(1996064986,2198950837),o(2554220882,3999719339),o(2821834349,766784016),o(2952996808,2566594879),o(3210313671,3203337956),o(3336571891,1034457026),o(3584528711,2466948901),o(113926993,3758326383),o(338241895,168717936),o(666307205,1188179964),o(773529912,1546045734),o(1294757372,1522805485),o(1396182291,2643833823),o(1695183700,2343527390),o(1986661051,1014477480),o(2177026350,1206759142),o(2456956037,344077627),o(2730485921,1290863460),o(2820302411,3158454273),o(3259730800,3505952657),o(3345764771,106217008),o(3516065817,3606008344),o(3600352804,1432725776),o(4094571909,1467031594),o(275423344,851169720),o(430227734,3100823752),o(506948616,1363258195),o(659060556,3750685593),o(883997877,3785050280),o(958139571,3318307427),o(1322822218,3812723403),o(1537002063,2003034995),o(1747873779,3602036899),o(1955562222,1575990012),o(2024104815,1125592928),o(2227730452,2716904306),o(2361852424,442776044),o(2428436474,593698344),o(2756734187,3733110249),o(3204031479,2999351573),o(3329325298,3815920427),o(3391569614,3928383900),o(3515267271,566280711),o(3940187606,3454069534),o(4118630271,4000239992),o(116418474,1914138554),o(174292421,2731055270),o(289380356,3203993006),o(460393269,320620315),o(685471733,587496836),o(852142971,1086792851),o(1017036298,365543100),o(1126000580,2618297676),o(1288033470,3409855158),o(1501505948,4234509866),o(1607167915,987167468),o(1816402316,1246189591)],e1=[];!function(){for(var t=0;t<80;t++)e1[t]=o()}();r=r.SHA512=e.extend({_doReset:function(){this._hash=new n.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],a=r[5],h=r[6],l=r[7],f=i.high,d=i.low,u=n.high,p=n.low,_=o.high,y=o.low,v=s.high,g=s.low,B=c.high,w=c.low,k=a.high,m=a.low,S=h.high,x=h.low,b=l.high,r=l.low,A=f,H=d,z=u,C=p,D=_,E=y,R=v,M=g,F=B,P=w,W=k,O=m,I=S,U=x,K=b,X=r,L=0;L<80;L++){var j,T,N=e1[L];L<16?(T=N.high=0|t[e+2*L],j=N.low=0|t[e+2*L+1]):($=(q=e1[L-15]).high,J=q.low,G=(Q=e1[L-2]).high,V=Q.low,Z=(Y=e1[L-7]).high,q=Y.low,Y=(Q=e1[L-16]).high,T=(T=(($>>>1|J<<31)^($>>>8|J<<24)^$>>>7)+Z+((j=(Z=(J>>>1|$<<31)^(J>>>8|$<<24)^(J>>>7|$<<25))+q)>>>0<Z>>>0?1:0))+((G>>>19|V<<13)^(G<<3|V>>>29)^G>>>6)+((j+=J=(V>>>19|G<<13)^(V<<3|G>>>29)^(V>>>6|G<<26))>>>0<J>>>0?1:0),j+=$=Q.low,N.high=T=T+Y+(j>>>0<$>>>0?1:0),N.low=j);var q=F&W^~F&I,Z=P&O^~P&U,V=A&z^A&D^z&D,G=(H>>>28|A<<4)^(H<<30|A>>>2)^(H<<25|A>>>7),J=t1[L],Q=J.high,Y=J.low,$=X+((P>>>14|F<<18)^(P>>>18|F<<14)^(P<<23|F>>>9)),N=K+((F>>>14|P<<18)^(F>>>18|P<<14)^(F<<23|P>>>9))+($>>>0<X>>>0?1:0),J=G+(H&C^H&E^C&E),K=I,X=U,I=W,U=O,W=F,O=P,F=R+(N=(N=(N=N+q+(($=$+Z)>>>0<Z>>>0?1:0))+Q+(($=$+Y)>>>0<Y>>>0?1:0))+T+(($=$+j)>>>0<j>>>0?1:0))+((P=M+$|0)>>>0<M>>>0?1:0)|0,R=D,M=E,D=z,E=C,z=A,C=H,A=N+(((A>>>28|H<<4)^(A<<30|H>>>2)^(A<<25|H>>>7))+V+(J>>>0<G>>>0?1:0))+((H=$+J|0)>>>0<$>>>0?1:0)|0}d=i.low=d+H,i.high=f+A+(d>>>0<H>>>0?1:0),p=n.low=p+C,n.high=u+z+(p>>>0<C>>>0?1:0),y=o.low=y+E,o.high=_+D+(y>>>0<E>>>0?1:0),g=s.low=g+M,s.high=v+R+(g>>>0<M>>>0?1:0),w=c.low=w+P,c.high=B+F+(w>>>0<P>>>0?1:0),m=a.low=m+O,a.high=k+W+(m>>>0<O>>>0?1:0),x=h.low=x+U,h.high=S+I+(x>>>0<U>>>0?1:0),r=l.low=r+X,l.high=b+K+(r>>>0<X>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[30+(128+i>>>10<<5)]=Math.floor(r/4294967296),e[31+(128+i>>>10<<5)]=r,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});t.SHA512=e._createHelper(r),t.HmacSHA512=e._createHmacHelper(r)}(),P=(M=U).x64,c=P.Word,f=P.WordArray,P=M.algo,d=P.SHA512,P=P.SHA384=d.extend({_doReset:function(){this._hash=new f.init([new c.init(3418070365,3238371032),new c.init(1654270250,914150663),new c.init(2438529370,812702999),new c.init(355462360,4144912697),new c.init(1731405415,4290775857),new c.init(2394180231,1750603025),new c.init(3675008525,1694076839),new c.init(1203062813,3204075428)])},_doFinalize:function(){var t=d._doFinalize.call(this);return t.sigBytes-=16,t}}),M.SHA384=d._createHelper(P),M.HmacSHA384=d._createHmacHelper(P),function(l){var t=U,e=t.lib,f=e.WordArray,i=e.Hasher,d=t.x64.Word,e=t.algo,A=[],H=[],z=[];!function(){for(var t=1,e=0,r=0;r<24;r++){A[t+5*e]=(r+1)*(r+2)/2%64;var i=(2*t+3*e)%5;t=e%5,e=i}for(t=0;t<5;t++)for(e=0;e<5;e++)H[t+5*e]=e+(2*t+3*e)%5*5;for(var n=1,o=0;o<24;o++){for(var s,c=0,a=0,h=0;h<7;h++)1&n&&((s=(1<<h)-1)<32?a^=1<<s:c^=1<<s-32),128&n?n=n<<1^113:n<<=1;z[o]=d.create(c,a)}}();var C=[];!function(){for(var t=0;t<25;t++)C[t]=d.create()}();e=e.SHA3=i.extend({cfg:i.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new d.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var r=this._state,i=this.blockSize/2,n=0;n<i;n++){var o=t[e+2*n],s=t[e+2*n+1],o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);(m=r[n]).high^=s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),m.low^=o}for(var c=0;c<24;c++){for(var a=0;a<5;a++){for(var h=0,l=0,f=0;f<5;f++)h^=(m=r[a+5*f]).high,l^=m.low;var d=C[a];d.high=h,d.low=l}for(a=0;a<5;a++)for(var u=C[(a+4)%5],p=C[(a+1)%5],_=p.high,p=p.low,h=u.high^(_<<1|p>>>31),l=u.low^(p<<1|_>>>31),f=0;f<5;f++)(m=r[a+5*f]).high^=h,m.low^=l;for(var y=1;y<25;y++){var v=(m=r[y]).high,g=m.low,B=A[y];l=B<32?(h=v<<B|g>>>32-B,g<<B|v>>>32-B):(h=g<<B-32|v>>>64-B,v<<B-32|g>>>64-B);B=C[H[y]];B.high=h,B.low=l}var w=C[0],k=r[0];w.high=k.high,w.low=k.low;for(a=0;a<5;a++)for(f=0;f<5;f++){var m=r[y=a+5*f],S=C[y],x=C[(a+1)%5+5*f],b=C[(a+2)%5+5*f];m.high=S.high^~x.high&b.high,m.low=S.low^~x.low&b.low}m=r[0],k=z[c];m.high^=k.high,m.low^=k.low}},_doFinalize:function(){var t=this._data,e=t.words,r=(this._nDataBytes,8*t.sigBytes),i=32*this.blockSize;e[r>>>5]|=1<<24-r%32,e[(l.ceil((1+r)/i)*i>>>5)-1]|=128,t.sigBytes=4*e.length,this._process();for(var n=this._state,e=this.cfg.outputLength/8,o=e/8,s=[],c=0;c<o;c++){var a=n[c],h=a.high,a=a.low,h=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8);s.push(a=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)),s.push(h)}return new f.init(s,e)},clone:function(){for(var t=i.clone.call(this),e=t._state=this._state.slice(0),r=0;r<25;r++)e[r]=e[r].clone();return t}});t.SHA3=i._createHelper(e),t.HmacSHA3=i._createHmacHelper(e)}(Math),Math,F=(w=U).lib,u=F.WordArray,p=F.Hasher,F=w.algo,S=u.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),x=u.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),b=u.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),A=u.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),H=u.create([0,1518500249,1859775393,2400959708,2840853838]),z=u.create([1352829926,1548603684,1836072691,2053994217,0]),F=F.RIPEMD160=p.extend({_doReset:function(){this._hash=u.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}for(var o,s,c,a,h,l,f=this._hash.words,d=H.words,u=z.words,p=S.words,_=x.words,y=b.words,v=A.words,g=o=f[0],B=s=f[1],w=c=f[2],k=a=f[3],m=h=f[4],r=0;r<80;r+=1)l=o+t[e+p[r]]|0,l+=r<16?(s^c^a)+d[0]:r<32?K(s,c,a)+d[1]:r<48?((s|~c)^a)+d[2]:r<64?X(s,c,a)+d[3]:(s^(c|~a))+d[4],l=(l=L(l|=0,y[r]))+h|0,o=h,h=a,a=L(c,10),c=s,s=l,l=g+t[e+_[r]]|0,l+=r<16?(B^(w|~k))+u[0]:r<32?X(B,w,k)+u[1]:r<48?((B|~w)^k)+u[2]:r<64?K(B,w,k)+u[3]:(B^w^k)+u[4],l=(l=L(l|=0,v[r]))+m|0,g=m,m=k,k=L(w,10),w=B,B=l;l=f[1]+c+k|0,f[1]=f[2]+a+m|0,f[2]=f[3]+h+g|0,f[3]=f[4]+o+B|0,f[4]=f[0]+s+w|0,f[0]=l},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[14+(64+i>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process();for(var e=this._hash,n=e.words,o=0;o<5;o++){var s=n[o];n[o]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}return e},clone:function(){var t=p.clone.call(this);return t._hash=this._hash.clone(),t}}),w.RIPEMD160=p._createHelper(F),w.HmacRIPEMD160=p._createHmacHelper(F),P=(M=U).lib.Base,_=M.enc.Utf8,M.algo.HMAC=P.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=_.parse(e));var r=t.blockSize,i=4*r;(e=e.sigBytes>i?t.finalize(e):e).clamp();for(var t=this._oKey=e.clone(),e=this._iKey=e.clone(),n=t.words,o=e.words,s=0;s<r;s++)n[s]^=1549556828,o[s]^=909522486;t.sigBytes=e.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,t=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(t))}}),F=(w=U).lib,M=F.Base,v=F.WordArray,P=w.algo,F=P.SHA1,g=P.HMAC,y=P.PBKDF2=M.extend({cfg:M.extend({keySize:4,hasher:F,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=g.create(r.hasher,t),n=v.create(),o=v.create([1]),s=n.words,c=o.words,a=r.keySize,h=r.iterations;s.length<a;){var l=i.update(e).finalize(o);i.reset();for(var f=l.words,d=f.length,u=l,p=1;p<h;p++){u=i.finalize(u),i.reset();for(var _=u.words,y=0;y<d;y++)f[y]^=_[y]}n.concat(l),c[0]++}return n.sigBytes=4*a,n}}),w.PBKDF2=function(t,e,r){return y.create(r).compute(t,e)},M=(P=U).lib,F=M.Base,B=M.WordArray,w=P.algo,M=w.MD5,k=w.EvpKDF=F.extend({cfg:F.extend({keySize:4,hasher:M,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r,i=this.cfg,n=i.hasher.create(),o=B.create(),s=o.words,c=i.keySize,a=i.iterations;s.length<c;){r&&n.update(r),r=n.update(t).finalize(e),n.reset();for(var h=1;h<a;h++)r=n.finalize(r),n.reset();o.concat(r)}return o.sigBytes=4*c,o}}),P.EvpKDF=function(t,e,r){return k.create(r).compute(t,e)},U.lib.Cipher||function(){var t=U,e=t.lib,r=e.Base,s=e.WordArray,i=e.BufferedBlockAlgorithm,n=t.enc,o=(n.Utf8,n.Base64),c=t.algo.EvpKDF,a=e.Cipher=i.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){i.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(i){return{encrypt:function(t,e,r){return h(e).encrypt(i,t,e,r)},decrypt:function(t,e,r){return h(e).decrypt(i,t,e,r)}}}});function h(t){return"string"==typeof t?p:u}e.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},n=e.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),n=l.CBC=((l=n.extend()).Encryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;f.call(this,t,e,i),r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),l.Decryptor=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);r.decryptBlock(t,e),f.call(this,t,e,i),this._prevBlock=n}}),l);function f(t,e,r){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var o=0;o<r;o++)t[e+o]^=i[o]}var l=(t.pad={}).Pkcs7={pad:function(t,e){for(var e=4*e,r=e-t.sigBytes%e,i=r<<24|r<<16|r<<8|r,n=[],o=0;o<r;o+=4)n.push(i);e=s.create(n,r);t.concat(e)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},d=(e.BlockCipher=a.extend({cfg:a.cfg.extend({mode:n,padding:l}),reset:function(){var t;a.reset.call(this);var e=this.cfg,r=e.iv,e=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=e.createEncryptor:(t=e.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(e,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),e.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),l=(t.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,t=t.salt,e=t?s.create([1398893684,1701076831]).concat(t).concat(e):e;return e.toString(o)},parse:function(t){var e,r=o.parse(t),t=r.words;return 1398893684==t[0]&&1701076831==t[1]&&(e=s.create(t.slice(2,4)),t.splice(0,4),r.sigBytes-=16),d.create({ciphertext:r,salt:e})}},u=e.SerializableCipher=r.extend({cfg:r.extend({format:l}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),e=n.finalize(e),n=n.cfg;return d.create({ciphertext:e,key:r,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),t=(t.kdf={}).OpenSSL={execute:function(t,e,r,i){i=i||s.random(8);t=c.create({keySize:e+r}).compute(t,i),r=s.create(t.words.slice(e),4*r);return t.sigBytes=4*e,d.create({key:t,iv:r,salt:i})}},p=e.PasswordBasedCipher=u.extend({cfg:u.cfg.extend({kdf:t}),encrypt:function(t,e,r,i){r=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize);i.iv=r.iv;i=u.encrypt.call(this,t,e,r.key,i);return i.mixIn(r),i},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);r=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);return i.iv=r.iv,u.decrypt.call(this,t,e,r.key,i)}})}(),U.mode.CFB=((F=U.lib.BlockCipherMode.extend()).Encryptor=F.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize;j.call(this,t,e,i,r),this._prevBlock=t.slice(e,e+i)}}),F.Decryptor=F.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=t.slice(e,e+i);j.call(this,t,e,i,r),this._prevBlock=n}}),F),U.mode.CTR=(M=U.lib.BlockCipherMode.extend(),P=M.Encryptor=M.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var s=o.slice(0);r.encryptBlock(s,0),o[i-1]=o[i-1]+1|0;for(var c=0;c<i;c++)t[e+c]^=s[c]}}),M.Decryptor=P,M),U.mode.CTRGladman=(F=U.lib.BlockCipherMode.extend(),P=F.Encryptor=F.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0),0===((n=o)[0]=T(n[0]))&&(n[1]=T(n[1]));var s=o.slice(0);r.encryptBlock(s,0);for(var c=0;c<i;c++)t[e+c]^=s[c]}}),F.Decryptor=P,F),U.mode.OFB=(M=U.lib.BlockCipherMode.extend(),P=M.Encryptor=M.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var s=0;s<i;s++)t[e+s]^=o[s]}}),M.Decryptor=P,M),U.mode.ECB=((F=U.lib.BlockCipherMode.extend()).Encryptor=F.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),F.Decryptor=F.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),F),U.pad.AnsiX923={pad:function(t,e){var r=t.sigBytes,e=4*e,e=e-r%e,r=r+e-1;t.clamp(),t.words[r>>>2]|=e<<24-r%4*8,t.sigBytes+=e},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},U.pad.Iso10126={pad:function(t,e){e*=4,e-=t.sigBytes%e;t.concat(U.lib.WordArray.random(e-1)).concat(U.lib.WordArray.create([e<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},U.pad.Iso97971={pad:function(t,e){t.concat(U.lib.WordArray.create([2147483648],1)),U.pad.ZeroPadding.pad(t,e)},unpad:function(t){U.pad.ZeroPadding.unpad(t),t.sigBytes--}},U.pad.ZeroPadding={pad:function(t,e){e*=4;t.clamp(),t.sigBytes+=e-(t.sigBytes%e||e)},unpad:function(t){for(var e=t.words,r=t.sigBytes-1,r=t.sigBytes-1;0<=r;r--)if(e[r>>>2]>>>24-r%4*8&255){t.sigBytes=r+1;break}}},U.pad.NoPadding={pad:function(){},unpad:function(){}},m=(P=U).lib.CipherParams,C=P.enc.Hex,P.format.Hex={stringify:function(t){return t.ciphertext.toString(C)},parse:function(t){t=C.parse(t);return m.create({ciphertext:t})}},function(){var t=U,e=t.lib.BlockCipher,r=t.algo,h=[],l=[],f=[],d=[],u=[],p=[],_=[],y=[],v=[],g=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;for(var r=0,i=0,e=0;e<256;e++){var n=i^i<<1^i<<2^i<<3^i<<4;h[r]=n=n>>>8^255&n^99;var o=t[l[n]=r],s=t[o],c=t[s],a=257*t[n]^16843008*n;f[r]=a<<24|a>>>8,d[r]=a<<16|a>>>16,u[r]=a<<8|a>>>24,p[r]=a,_[n]=(a=16843009*c^65537*s^257*o^16843008*r)<<24|a>>>8,y[n]=a<<16|a>>>16,v[n]=a<<8|a>>>24,g[n]=a,r?(r=o^t[t[t[c^o]]],i^=t[t[i]]):r=i=1}}();var B=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,i=4*(1+(this._nRounds=6+r)),n=this._keySchedule=[],o=0;o<i;o++)o<r?n[o]=e[o]:(a=n[o-1],o%r?6<r&&o%r==4&&(a=h[a>>>24]<<24|h[a>>>16&255]<<16|h[a>>>8&255]<<8|h[255&a]):(a=h[(a=a<<8|a>>>24)>>>24]<<24|h[a>>>16&255]<<16|h[a>>>8&255]<<8|h[255&a],a^=B[o/r|0]<<24),n[o]=n[o-r]^a);for(var s=this._invKeySchedule=[],c=0;c<i;c++){var a,o=i-c;a=c%4?n[o]:n[o-4],s[c]=c<4||o<=4?a:_[h[a>>>24]]^y[h[a>>>16&255]]^v[h[a>>>8&255]]^g[h[255&a]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,f,d,u,p,h)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,_,y,v,g,l);r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,s,c){for(var a=this._nRounds,h=t[e]^r[0],l=t[e+1]^r[1],f=t[e+2]^r[2],d=t[e+3]^r[3],u=4,p=1;p<a;p++)var _=i[h>>>24]^n[l>>>16&255]^o[f>>>8&255]^s[255&d]^r[u++],y=i[l>>>24]^n[f>>>16&255]^o[d>>>8&255]^s[255&h]^r[u++],v=i[f>>>24]^n[d>>>16&255]^o[h>>>8&255]^s[255&l]^r[u++],g=i[d>>>24]^n[h>>>16&255]^o[l>>>8&255]^s[255&f]^r[u++],h=_,l=y,f=v,d=g;_=(c[h>>>24]<<24|c[l>>>16&255]<<16|c[f>>>8&255]<<8|c[255&d])^r[u++],y=(c[l>>>24]<<24|c[f>>>16&255]<<16|c[d>>>8&255]<<8|c[255&h])^r[u++],v=(c[f>>>24]<<24|c[d>>>16&255]<<16|c[h>>>8&255]<<8|c[255&l])^r[u++],g=(c[d>>>24]<<24|c[h>>>16&255]<<16|c[l>>>8&255]<<8|c[255&f])^r[u++];t[e]=_,t[e+1]=y,t[e+2]=v,t[e+3]=g},keySize:8});t.AES=e._createHelper(r)}(),function(){var t=U,e=t.lib,i=e.WordArray,r=e.BlockCipher,e=t.algo,h=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],f=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],d=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],u=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],n=e.DES=r.extend({_doReset:function(){for(var t=this._key.words,e=[],r=0;r<56;r++){var i=h[r]-1;e[r]=t[i>>>5]>>>31-i%32&1}for(var n=this._subKeys=[],o=0;o<16;o++){for(var s=n[o]=[],c=f[o],r=0;r<24;r++)s[r/6|0]|=e[(l[r]-1+c)%28]<<31-r%6,s[4+(r/6|0)]|=e[28+(l[r+24]-1+c)%28]<<31-r%6;s[0]=s[0]<<1|s[0]>>>31;for(r=1;r<7;r++)s[r]=s[r]>>>4*(r-1)+3;s[7]=s[7]<<5|s[7]>>>27}for(var a=this._invSubKeys=[],r=0;r<16;r++)a[r]=n[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,e,r){this._lBlock=t[e],this._rBlock=t[e+1],p.call(this,4,252645135),p.call(this,16,65535),_.call(this,2,858993459),_.call(this,8,16711935),p.call(this,1,1431655765);for(var i=0;i<16;i++){for(var n=r[i],o=this._lBlock,s=this._rBlock,c=0,a=0;a<8;a++)c|=d[a][((s^n[a])&u[a])>>>0];this._lBlock=s,this._rBlock=o^c}var h=this._lBlock;this._lBlock=this._rBlock,this._rBlock=h,p.call(this,1,1431655765),_.call(this,8,16711935),_.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),t[e]=this._lBlock,t[e+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function p(t,e){e=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=e,this._lBlock^=e<<t}function _(t,e){e=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=e,this._rBlock^=e<<t}t.DES=r._createHelper(n);e=e.TripleDES=r.extend({_doReset:function(){var t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var e=t.slice(0,2),r=t.length<4?t.slice(0,2):t.slice(2,4),t=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=n.createEncryptor(i.create(e)),this._des2=n.createEncryptor(i.create(r)),this._des3=n.createEncryptor(i.create(t))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});t.TripleDES=r._createHelper(e)}(),function(){var t=U,e=t.lib.StreamCipher,r=t.algo,i=r.RC4=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes,i=this._S=[],n=0;n<256;n++)i[n]=n;for(var n=0,o=0;n<256;n++){var s=n%r,s=e[s>>>2]>>>24-s%4*8&255,o=(o+i[n]+s)%256,s=i[n];i[n]=i[o],i[o]=s}this._i=this._j=0},_doProcessBlock:function(t,e){t[e]^=n.call(this)},keySize:8,ivSize:0});function n(){for(var t=this._S,e=this._i,r=this._j,i=0,n=0;n<4;n++){var r=(r+t[e=(e+1)%256])%256,o=t[e];t[e]=t[r],t[r]=o,i|=t[(t[e]+t[r])%256]<<24-8*n}return this._i=e,this._j=r,i}t.RC4=e._createHelper(i);r=r.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var t=this.cfg.drop;0<t;t--)n.call(this)}});t.RC4Drop=e._createHelper(r)}(),F=(M=U).lib.StreamCipher,P=M.algo,D=[],E=[],R=[],P=P.Rabbit=F.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=0;r<4;r++)t[r]=16711935&(t[r]<<8|t[r]>>>24)|4278255360&(t[r]<<24|t[r]>>>8);for(var i=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],n=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]],r=this._b=0;r<4;r++)N.call(this);for(r=0;r<8;r++)n[r]^=i[r+4&7];if(e){var o=e.words,s=o[0],c=o[1],e=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),o=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),s=e>>>16|4294901760&o,c=o<<16|65535&e;n[0]^=e,n[1]^=s,n[2]^=o,n[3]^=c,n[4]^=e,n[5]^=s,n[6]^=o,n[7]^=c;for(r=0;r<4;r++)N.call(this)}},_doProcessBlock:function(t,e){var r=this._X;N.call(this),D[0]=r[0]^r[5]>>>16^r[3]<<16,D[1]=r[2]^r[7]>>>16^r[5]<<16,D[2]=r[4]^r[1]>>>16^r[7]<<16,D[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)D[i]=16711935&(D[i]<<8|D[i]>>>24)|4278255360&(D[i]<<24|D[i]>>>8),t[e+i]^=D[i]},blockSize:4,ivSize:2}),M.Rabbit=F._createHelper(P),F=(M=U).lib.StreamCipher,P=M.algo,W=[],O=[],I=[],P=P.RabbitLegacy=F.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],i=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]],n=this._b=0;n<4;n++)q.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(e){var o=e.words,s=o[0],t=o[1],e=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),o=16711935&(t<<8|t>>>24)|4278255360&(t<<24|t>>>8),s=e>>>16|4294901760&o,t=o<<16|65535&e;i[0]^=e,i[1]^=s,i[2]^=o,i[3]^=t,i[4]^=e,i[5]^=s,i[6]^=o,i[7]^=t;for(n=0;n<4;n++)q.call(this)}},_doProcessBlock:function(t,e){var r=this._X;q.call(this),W[0]=r[0]^r[5]>>>16^r[3]<<16,W[1]=r[2]^r[7]>>>16^r[5]<<16,W[2]=r[4]^r[1]>>>16^r[7]<<16,W[3]=r[6]^r[3]>>>16^r[1]<<16;for(var i=0;i<4;i++)W[i]=16711935&(W[i]<<8|W[i]>>>24)|4278255360&(W[i]<<24|W[i]>>>8),t[e+i]^=W[i]},blockSize:4,ivSize:2}),M.RabbitLegacy=F._createHelper(P),U});
		await getfetch();
		(function(history){
			var pushState = history.pushState;
			history.pushState = function(state) {
				setTimeout(function() {
					if (document.getElementById('input_fasttype')){
						temptype=document.getElementById('input_fasttype').value;
					}
					createchest();
				}, 0);
				return pushState.apply(history, arguments);
			};
		})(window.history);
		document.addEventListener('keydown', function(event) {
			if (event.altKey && event.key === '`') {
				event.preventDefault();
				button_grabdata_handle();
			}
		});
		document.addEventListener('keydown', function(event) {
			if (event.altKey && event.key === 's') {
				event.preventDefault();
				checksave();
			}
		});
		document.addEventListener('keydown', function(event) {
			if (event.altKey && event.key === 'd') {
				event.preventDefault();
				changetype();
			}
		});
		autoniis=false;
		newprint=false;
		temptype='';
		//escape_populanceConsultation = confirm('百寶箱版本:'+chestversion+'\n看診前是否自動跳過民眾看診首頁');
		document.querySelector("#root > header > a > h2").textContent=title+"_百寶箱v"+chestversion
		escape_populanceConsultation = true;
		createchest();
		if (document.URL.includes('https://phpcis.chshb.gov.tw/consultationMainPage/')){
			button_grabdata_handle()
		}
	} 
})();
async function getfetch(){
	if (!window.fetchIntercepted) {
		window.fetchIntercepted = true;
		const originalFetch = window.fetch;
		window.fetch = async function() {
			let response = await originalFetch.apply(this, arguments);
			let theapi = await arguments[0];
			if (theapi.includes('?')){
				apitype=theapi.split('?')[0];
			} else {
				apitype=theapi
			}
			const clonedResponse = await response.clone();
			let result = await response.text();
			if (apitype == "https://phpcis.chshb.gov.tw/api/v1/health_records/check_valid") {
				const modifiedResponseJson = {
					"code": 200,
					"message": "",
					"result": {
						"chronicReturnDate": "",
						"chronicTestDate": "",
						"isChronicReminder": false
					}
				};
				const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
					status: 200,
					statusText: '',
					headers: new Headers({
						'Content-Type': 'application/json'
					})
				});
				resres= modifiedResponse;
			} else if (apitype == "https://phpcis.chshb.gov.tw/api/v1/prescriptions/list") {
				if (newprint){
					await button_grabdata_handle();
					const modifiedResponseJson = {
						"code": 200,
						"message": "",
						"result": {
							"1": null,
							"3": null,
							"4": null,
							"5": null,
							"6": null,
							"7": null,
							"8": null,
							"9": null,
							"10": null,
							"11": null,
							"12": null,
							"13": null,
							"14": null,
							"15": null,
							"16": null,
							"18": null
						}
					};
					const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
						status: 200,
						statusText: '',
						headers: new Headers({
							'Content-Type': 'application/json'
						})
					});
					let thefetch = {};
					thefetch["api"] = theapi;
					thefetch["result"] = JSON.stringify(result);
					window.chrome.webview.hostObjects.ahkgetfetch(JSON.stringify(thefetch));
					resres= modifiedResponse;
				} else {
					resres= clonedResponse;
				}
			} else if (apitype=='https://phpcis.chshb.gov.tw/api/v1/registrations/reservations/list'){
				
				button_grabdata_handle();
				resres= clonedResponse;
				
			} else if (apitype=='https://phpcis.chshb.gov.tw/api/v1/personal_infos/list_with_registration'){
				personalId=theapi.split('personalId=')[1];
				let newinfoid=idtoinfoid(personalId);
				if (newinfoid){
					let personalInfoId=newinfoid.personalInfoId;
					preexammsg='';
					today = new Date();
					pastDate = new Date(today);
					pastDate.setDate(today.getDate() - 180);
					function formatDate(date) {
						let year = date.getFullYear();
						let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份從0開始，需+1
						let day = date.getDate().toString().padStart(2, '0');
						return `${year}-${month}-${day}`;
					}
					preexamurl='https://phpcis.chshb.gov.tw/api/v1/schedule_tests/list?personalInfoId='+personalInfoId+'&createdStartDate='+formatDate(pastDate)+'&createdEndDate='+formatDate(today);
					respreexam=httpGet(preexamurl);
					jrespreexam=JSON.parse(respreexam);
					if (jrespreexam.result.length>0){
						OPD_preexam='OPD_preexam';
						OPD_preexamdata=jrespreexam;
						ahkcallfunction(OPD_preexam,OPD_preexamdata);
					} 
				}
				resres= clonedResponse;
			} else if (apitype=='/api/v1/personal_infos/death_presumptions/find'){
				personalId=theapi.split('personalId=')[1];
				let newinfoid=idtoinfoid(personalId);
				if (newinfoid){
					let personalInfoId=newinfoid.personalInfoId;
					preexammsg='';
					today = new Date();
					pastDate = new Date(today);
					pastDate.setDate(today.getDate() - 180);
					function formatDate(date) {
						let year = date.getFullYear();
						let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份從0開始，需+1
						let day = date.getDate().toString().padStart(2, '0');
						return `${year}-${month}-${day}`;
					}
					preexamurl='https://phpcis.chshb.gov.tw/api/v1/schedule_tests/list?personalInfoId='+personalInfoId+'&createdStartDate='+formatDate(pastDate)+'&createdEndDate='+formatDate(today);
					respreexam=httpGet(preexamurl);
					jrespreexam=JSON.parse(respreexam);
					if (jrespreexam.result.length>0){
						OPD_preexam='OPD_preexam';
						OPD_preexamdata=jrespreexam;
						ahkcallfunction(OPD_preexam,OPD_preexamdata);
					} 
				}
				resres= clonedResponse;
			} else if (apitype=='/api/v1/personal_infos/find' || apitype=='https://phpcis.chshb.gov.tw/api/v1/personal_infos/find'){
				let infoobj=await JSON.parse(result);
				if (autoniis){
					let OPD_NIIS="OPD_NIIS";
					let OPD_NIISdata={
						id:infoobj.result.personalId,
						birth:infoobj.result.birthday
					}
					ahkcallfunction(OPD_NIIS,OPD_NIISdata);
				}
				resres= clonedResponse;
			} else {
				console.log(apitype);
				resres= clonedResponse;
			}
			return resres
		}
	}
}
async function fetchData(url,type,postdata) {
    try {
        const response = await fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
		if (type !== 'GET') {
			options.body = JSON.stringify(postdata);
		}
        const result = await response.text();
        return result
    } catch (error) {
        return false
    }
}
function createchest(){
	ccc=document.URL;
	d0='https://phpcis.chshb.gov.tw/consultationMainPage/';
	d1='https://phpcis.chshb.gov.tw/populanceRegistration';
	d2='https://phpcis.chshb.gov.tw/registration';
	d3='https://phpcis.chshb.gov.tw/registration/';
	d4='https://phpcis.chshb.gov.tw/registration/create';
	d5='https://phpcis.chshb.gov.tw/familyMedicine';
	d6='https://phpcis.chshb.gov.tw/populanceConsultation/';
	d7='https://phpcis.chshb.gov.tw/medicalRefee';
	if (document.getElementById('myDraggable')){
		document.getElementById('myDraggable').remove();
	} 
	if (ccc.includes(d0)){
		create_OPD_one();
	} else if (ccc==d1){
		create_OPD_list();
	} else if (ccc==d2){
		create_REG_list();
	} else if (ccc.includes(d3)||ccc==d4){
		create_REG_one()
	} else if (ccc==d5){
		create_FM();
	} else if (ccc.includes(d6)){
		if (escape_populanceConsultation){
			document.getElementsByClassName('commonBtn btn btn-primary')[1].click();
		}
	} else if (ccc==d7){
		create_Countmonth();
	} else if (ccc=='https://phpcis.chshb.gov.tw/'){
		create_main();
	}
}

function ahkcallfunction(funcname,funcdata){
	let postobj={
		funcname:funcname,
		funcdata:funcdata,
	}
	if (ahkuse){
		console.log(postobj);
		window.chrome.webview.hostObjects.ahkcallfunction(JSON.stringify(postobj));
	} else {
		console.log(postobj);
	}
}
function crebutton(name,xx,yy,ww,hh){
	let tempbutton = document.createElement('button');
	tempbutton.textContent=name;
	tempbutton.className='btn btn-primary';
	tempbutton.style.padding ='0px';
	tempbutton.style.left = xx+'px';
	tempbutton.style.top = yy+'px';
	tempbutton.style.width = ww+'px';
	tempbutton.style.height = hh+'px';
	tempbutton.style.position = 'absolute';
	return tempbutton
}
function crespan(textline,xx,yy,ww,hh){
	let tempsapn = document.createElement('span');
	tempsapn.textContent=textline;
	tempsapn.style.left = xx+'px';
	tempsapn.style.top = yy+'px';
	tempsapn.style.width = ww+'px';
	tempsapn.style.height = hh+'px';
	tempsapn.style.position = 'absolute';
	tempsapn.style.textAlign='center';
	tempsapn.style.lineHeight=hh+'px';
	return tempsapn
}
function creinput(inputid,xx,yy,ww,hh){
	let tempinput = document.createElement('input');
	tempinput.id=inputid;
	tempinput.style.width = ww+'px';
	tempinput.style.height = hh+'px';
	tempinput.style.left = xx+'px';
	tempinput.style.top = yy+'px';
	tempinput.style.position = 'absolute';
	tempinput.style.textAlign='center';
	return tempinput
}
function button_preexam_handle(){
	ordertbbody=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0].children[1];
	ordertbhead=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0].children[0];
	for (let i=0;i<ordertbhead.rows[0].cells.length;i++){
		if (ordertbhead.rows[0].cells[i].textContent=='預'){
			preindex=i;
		} else if (ordertbhead.rows[0].cells[i].textContent=='申報代碼'){
			applyindex=i;
		} else if (ordertbhead.rows[0].cells[i].textContent=='自付'){
			applytype=i;
		} 
	}
	changeevent=new Event('change', {bubbles: true});
	for (i=0;i<ordertbbody.rows.length;i++){
		if (ordertbbody.rows[i].cells[preindex].children[0]){
			if (!ordertbbody.rows[i].cells[preindex].children[0].checked){
				if (!ordertbbody.rows[i].cells[applyindex].textContent.includes("P")){
					ordertbbody.rows[i].cells[preindex].children[0].click();
				}
			}
		}
	}

	sws=document.querySelectorAll('.modal');
	if (sws.length>0){
		for (let i=0;i<sws.length;i++){
			if (sws[i].textContent.includes("預開檢驗設定")){
				autoselectpreexam(sws[i]);
				break;
			}
		}
	} else {
		document.querySelector("#root > div.wrapper > main > div > div:nth-child(27) > div > div > form > div > div.btn-group > button:nth-child(1)").click();
	}
}
function autoselectpreexam(taw){
	items=taw.querySelectorAll('select');
	changeevent=new Event('change', {bubbles: true});
	daysitem=items[0];
	if (daysitem.value!=77){
		daysitem.value=77;
		daysitem.dispatchEvent(changeevent);
	} else {
		shiftitem=items[2];
		if (shiftitem.options.length>1){
			for (let j=0;j<shiftitem.options.length;j++){
				if (shiftitem.options[j].textContent.includes('1')){
					shiftitem.options[j].selected=true;
					shiftitem.dispatchEvent(changeevent);
					break;
				}
			}
		}
		typeitem=items[3];
		typeitem.value=0;
		typeitem.dispatchEvent(changeevent);
		if (!taw.querySelectorAll("button[type='submit']")[0].disabled){
			taw.querySelectorAll("button[type='submit']")[0].click();
		}
	}
}
function day77(){
	currentDate = new Date();
	futureDate = new Date();
	futureDate.setDate(currentDate.getDate() + 77);
	const year = futureDate.getFullYear();
	const month = (futureDate.getMonth() + 1).toString().padStart(2, '0');
	const day = futureDate.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`
}
function httpGet(Url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", Url, false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}
function httpPost(Url,postdata){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( 'POST', Url, false );
	xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xmlHttp.send(JSON.stringify(postdata));
	return xmlHttp.responseText;
}
async function button_grabdata_handle(){
	cc=document.URL;
	d1='https://phpcis.chshb.gov.tw/consultationMainPage' //門診畫面
	if (cc.includes(d1)){    //門診內
		toline();
		document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(7) > div").textContent='結束日';
		document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(10) > div").textContent='起日';
		document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(12) > div > div > label").textContent='連處';
		uu=document.getElementsByClassName('col-xl-5 col-lg-5')[2];
		if (document.getElementsByClassName('badge badge-secondary').length==0){
			alert('非2.0掛號');
		}
		inputarea=uu.querySelectorAll('textarea');
		inputspace=uu.getElementsByClassName('line');
		inputspace[0].style.height='10rem';
		inputarea[0].rows=5;
		inputspace[1].style.height='12.5rem';
		inputarea[1].rows=5;
		ggg=document.getElementsByClassName('line prescription-diagnosis-area')[0];
		ggg.style.height='23.1rem';
		ggg.children[2].style.height='17vh'
		ggg.children[2].children[0].style.height='17vh'
		prevention=document.getElementById('prevention');
		if (prevention==null){
			prevention = document.createElement('div');
			prevention.setAttribute('id', 'prevention');
			title = document.createTextNode('預防保健項目');
			prevention.style.border = '1px solid black';
			prevention.style.width = '500px';
			prevention.appendChild(title);
			prevention_L1 = document.createElement('div');
			prevention_L1.setAttribute('id', 'prevention_L1');
			prevention.appendChild(prevention_L1);
			prevention_L2 = document.createElement('div');
			prevention_L2.setAttribute('id', 'prevention_L2');
			prevention.appendChild(prevention_L2);
			prevention_L3 = document.createElement('div');
			prevention_L3.setAttribute('id', 'prevention_L3');
			prevention.appendChild(prevention_L3);
			prevention_L4 = document.createElement('div');
			prevention_L4.setAttribute('id', 'prevention_L4');
			prevention.appendChild(prevention_L4);
			prevention_L5 = document.createElement('div');
			prevention_L5.setAttribute('id', 'prevention_L5');
			prevention.appendChild(prevention_L5);
			ggg.appendChild(prevention);
			plan = document.createElement('div');
			plan.setAttribute('id', 'plan');
			plan.style.border = '1px solid black';
			plan.style.width = '375px';
			plantitle = document.createTextNode('試辦計畫');
			plan.appendChild(plantitle);
			plan_L1 = document.createElement('div');
			plan_L1.setAttribute('id', 'plan_L1');
			plan.appendChild(plan_L1);
			plan_L2 = document.createElement('div');
			plan_L2.setAttribute('id', 'plan_L2');
			plan.appendChild(plan_L2);
			plan_L3 = document.createElement('div');
			plan_L3.setAttribute('id', 'plan_L3');
			plan.appendChild(plan_L3);
			horizontalContainer = document.createElement('div');
			horizontalContainer.style.display = 'flex';
			horizontalContainer.appendChild(prevention);
			horizontalContainer.appendChild(plan);
			ggg.appendChild(horizontalContainer);
		} 
		registrationId=cc.split('/')[cc.split('/').length-1];
		furl='https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId+'&type=consultation';
		aaa=httpGet(furl);
		res=JSON.parse(aaa);
		personalInfoId=res.result.personalInfoId;
		age=res.result.age;
		gender=res.result.gender;
		name=res.result.name;
		personalId=res.result.personalId;
		let OPD_INFO="OPD_INFO";
		let OPD_INFOdata=aaa
		hurl='https://phpcis.chshb.gov.tw/api/v1/health_records/list?personalInfoId='+personalInfoId;
		hhh=httpGet(hurl);
		let OPD_HISTORYdata=hhh;
		
		
		furl2='https://phpcis.chshb.gov.tw/api/v1/personal_infos/preventions_histories/list?personalInfoId='+personalInfoId;
		bbb=httpGet(furl2);
		res2=JSON.parse(bbb);
		HE=['HE'];
		FO=['FO'];
		OR=['OR'];
		PA=['PA'];
		MA=['MA'];
		for (i=1;i<=res2.result.length;i++){
			if (res2.result[res2.result.length-i].preventionTag=='02'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					HE.splice(HE.length-1,1);
				} else {
					HE.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='03'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					PA.splice(PA.length-1,1);
				} else {
					PA.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='06'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					MA.splice(MA.length-1,1);
				} else {
					MA.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='07'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					FO.splice(FO.length-1,1);
				} else {
					FO.push(res2.result[res2.result.length-i]);
				}
			} else if (res2.result[res2.result.length-i].preventionTag=='08'){
				if (res2.result[res2.result.length-i].serviceCode.includes('Y')){
					OR.splice(OR.length-1,1);
				} else {
					OR.push(res2.result[res2.result.length-i]);
				}
			}
		}
		nowy=new Date().getFullYear();
		if (age>=65){
			if (HE.length>1){
				LHE=HE[HE.length-1].treatmentDate.split('-')[0];
				if (nowy-LHE>=1){
					HEC='O , 65歲1年1次';
				} else {
					HEC='X , 65歲未滿1年';
				}
				theclinic=HE[HE.length-1].clinicName;
				theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
				if (theclinic.length>12){
					theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
				}
				HEC=HEC+','+theclinic+'('+HE[HE.length-1].treatmentDate+')';
			} else {
				HEC='O , 65歲1年1次';
			}
		} else if (age>=40 && age<65){
			if (HE.length>1){
				LHE=HE[HE.length-1].treatmentDate.split('-')[0];
				if (nowy-LHE>=3){
					HEC='O , 45-64歲3年1次';
				} else {
					HEC='X , 45-64歲未滿3年';
				}
			} else {
				HEC='O , 45-65歲3年1次';
			}
		} else {
			HEC='X , 未滿40歲不可成健';
		}
		if (gender=='2'){
			if (age>=30){
				if (PA.length>1){
					LPA=PA[PA.length-1].treatmentDate.split('-')[0];
					if (nowy-LPA>=6){
						PAC='O , 曾抹且6年未抹';
					} else if (nowy-LPA>=3 && nowy-LPA<6){
						PAC='O , 曾抹且3年未抹';
					} else if (nowy-LPA>=1){
						PAC='O , 曾抹且可抹';
					} else if (nowy-LPA<1){
						PAC='X , 曾抹未滿1年';
					} 
					theclinic=PA[PA.length-1].clinicName;
					theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
					if (theclinic.length>12){
						theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
					}
					PAC=PAC+','+theclinic+'('+PA[PA.length-1].treatmentDate+')';
				} else {
					PAC='O , 不曾抹(首篩)';
				}
			} else {
				PAC='X , 未滿30歲';
			}
		} else {
			PAC='X , 需女性';
		}
		if (gender=='2'){
			if (age>=45 && age<70){
				if (MA.length>1){
					LMA=MA[MA.length-1].treatmentDate.split('-')[0];
					if (nowy-LMA>=2){
						MAC='O , 可乳攝';
					} else {
						MAC='X , 未滿2年';
					}
					theclinic=MA[MA.length-1].clinicName;
					theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
					if (theclinic.length>12){
						theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
					}
					MAC=MAC+','+theclinic+'('+MA[MA.length-1].treatmentDate+')';
				} else {
					MAC='O , 不曾乳攝(首篩)';
				}
			} else if (age>=70){
				MAC='X , 超過70歲';
			} else {
				MAC='X , 未滿45歲';
			}
		} else {
			MAC='X , 需女性';
		}
		if (age>=50 && age<75){
			if (FO.length>1){
				LFO=FO[FO.length-1].treatmentDate.split('-')[0];
				if (nowy-LFO>=2){
					FOC='O , 可FOBT';
				} else {
					FOC='X , 未滿2年';
				}
				theclinic=FO[FO.length-1].clinicName;
				theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
				if (theclinic.length>12){
					theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
				}
				FOC=FOC+','+theclinic+'('+FO[FO.length-1].treatmentDate+')';
			} else {
				FOC='O , 不曾FOBT(首篩)';
			}
		} else if (age>=75){
			FOC='X , 超過75歲';
		} else {
			FOC='X , 未滿50歲';
		}
		if (age>=30){
			if (OR.length>1){
				LOR=OR[OR.length-1].treatmentDate.split('-')[0];
				if (nowy-LOR>=2){
					ORC='O , 有菸檳史可';
				} else {
					ORC='X , 間隔未滿2年';
				}
				theclinic=OR[OR.length-1].clinicName;
				theclinic=theclinic.replace('彰化基督教醫療財團法人', '').replace('秀傳醫療社團法人', '')
				if (theclinic.length>12){
					theclinic=theclinic.substring(theclinic.length-12,theclinic.length)
				}
				ORC=ORC+','+theclinic+'('+OR[OR.length-1].treatmentDate+')';
			} else {
				ORC='O , 有菸檳史可(首篩)';
			}
		} else {
			ORC='X , 未滿30歲';
		}
		msg2='\n成健: '+HEC+'\n腸篩: '+FOC+'\n子抹: '+PAC+'\n乳攝: '+MAC+'\n口篩: '+ORC;
		prevention_L1=document.getElementById('prevention_L1');
		prevention_L1.textContent='成健: '+HEC;
		prevention_L2=document.getElementById('prevention_L2');
		prevention_L2.textContent='腸篩: '+FOC;
		prevention_L3=document.getElementById('prevention_L3');
		prevention_L3.textContent='子抹: '+PAC;
		prevention_L4=document.getElementById('prevention_L4');
		prevention_L4.textContent='乳攝: '+MAC;	
		prevention_L5=document.getElementById('prevention_L5');
		prevention_L5.textContent='口篩: '+ORC;
		furl3='https://phpcis.chshb.gov.tw/api/v1/personal_infos/chronic_cares_histories/list?personalInfoId='+personalInfoId;
		ccc=httpGet(furl3);
		res3=JSON.parse(ccc);
		DKD=[];
		DM=['DM'];
		yearDMC=0;
		yearDM1=0;
		CKD=['CKD'];
		DKDC='DKD: 無';
		DMC='DM: 無';
		CKDC='CKD: 無';
		cc=res3.result.chronicCares;
		for (i=1;i<cc.length+1;i++){
			if (cc[cc.length-i].chronicCareType=='1'){
				if (cc[cc.length-i].chronicCareCode=='P1407C' || cc[cc.length-i].chronicCareCode=='P1409C' || cc[cc.length-i].chronicCareCode=='P1411C'){
					DM=['DM'];
				}
				yearDM2=cc[cc.length-i].treatmentDate.split('-')[0];
				if (yearDM1==yearDM2){
					yearDMC=yearDMC+1;
				} else {
					yearDMC=1;
					yearDM1=yearDM2;
				}
				DM.push(cc[cc.length-i]);
			} else if (cc[cc.length-i].chronicCareType=='2'){
				if (cc[cc.length-i].chronicCareCode=='P4301C'){
					CKD=['CKD'];
				} 
				CKD.push(cc[cc.length-i]);
			} else if (cc[cc.length-i].chronicCareType=='3'){
				if (DKD.length==0){
					DKD=DM;
				}
				yearDM2=cc[cc.length-i].treatmentDate.split('-')[0]
				if (yearDM1==yearDM2){
					yearDMC=yearDMC+1;
				} else {
					yearDMC=1;
					yearDM1=yearDM2;
				}
				if (cc[cc.length-i].chronicCareCode=='P7002C'){
					DKD=['DKD'];
				}
				DKD.push(cc[cc.length-i]);					
			}
		}
		if (DKD.length>1){
			treatmentDate=DKD[DKD.length-1].treatmentDate
			date_1=new Date(treatmentDate);
			date_2=new Date(date_1.getTime()+77*1000*3600*24);
			mky=date_2.getUTCFullYear()-1911;
			mm0=date_2.getUTCMonth();
			mm0+=1;
			mkm=('00'+mm0).substring(('00'+mm0).length-2,('00'+mm0).length);
			dd0=date_2.getUTCDate();
			mkd=('00'+dd0).substring(('00'+dd0).length-2,('00'+dd0).length);
			mkdd=mky+mkm+mkd;
			now=new Date();
			if (yearDMC<4){
				if (now>=date_2){
					DKDC='DKD: O, 已申報'+yearDMC+'次,';
				} else {
					DKDC='DKD: X, 已申報'+yearDMC+'次,';
				}
				if (DKD.length==5){
					DKDC=DKDC+mkdd+'後可申報年度P7002C';
				} else {
					DKDC=DKDC+mkdd+'後可申報追蹤P7001C';
				}
			} else {
				DKDC='('+yearDMC+')DKD: X, 今年已申報4次';
			}
			DMC='DM: X, 已轉DKD';
			CKDC='CKD: X, 已轉DKD';
		} else {
			if (DM.length>1){
				treatmentDate=DM[DM.length-1].treatmentDate;
				if (DM[DM.length-1].chronicCareCode=='P1410C' || DM[DM.length-1].chronicCareCode=='P1411C'){
					DMtype=2;
				} else {
					DMtype=1;
				}
				date_1=new Date(treatmentDate);
				date_2=new Date(date_1.getTime()+77*1000*3600*24);
				mky=date_2.getUTCFullYear()-1911;
				mm0=date_2.getUTCMonth();
				mm0+=1;
				mkm=('00'+mm0).substring(('00'+mm0).length-2,('00'+mm0).length);
				dd0=date_2.getUTCDate();
				mkd=('00'+dd0).substring(('00'+dd0).length-2,('00'+dd0).length);
				mkdd=mky+mkm+mkd;
				now=new Date();
				if (yearDMC<4){
					if (now>=date_2){
						DMC='DM: O, 已申報'+yearDMC+'次,';
					} else {
						DMC='DM: X, 已申報'+yearDMC+'次,';
					}
					if (DM.length==5){
						if (DMtype=='1'){
							DMC=DMC+mkdd+'後可申報一階年度P1409C';
						} else {
							DMC=DMC+mkdd+'後可申報二階年度P1411C';
						}
					} else {
						if (DMtype=='1'){
							DMC=DMC+mkdd+'後可申報一階追蹤P1408C';
						} else {
							DMC=DMC+mkdd+'後可申報二階追蹤P1410C';
						}
					}
				} else {
					DMC='('+yearDMC+')DM: X ,今年已申報4次';
				}
			}
			if (CKD.length>1){
				treatmentDate=CKD[CKD.length-1].treatmentDate;
				date_1=new Date(treatmentDate);
				date_2=new Date(date_1.getTime()+161*1000*3600*24);
				mky=date_2.getUTCFullYear()-1911;
				mm0=date_2.getUTCMonth();
				mm0+=1;
				mkm=('00'+mm0).substring(('00'+mm0).length-2,('00'+mm0).length);
				dd0=date_2.getUTCDate();
				mkd=('00'+dd0).substring(('00'+dd0).length-2,('00'+dd0).length);
				mkdd=mky+mkm+mkd;
				now=new Date();
				if (now>=date_2){
					CKDC='CKD: O,'+mkdd+'後可申報';
				} else {
					CKDC='CKD: X,'+mkdd+'後可申報';
				}
			}
		}	
		plan_L1=document.getElementById('plan_L1');
		plan_L1.textContent=DKDC;
		plan_L2=document.getElementById('plan_L2');
		plan_L2.textContent=DMC;
		plan_L3=document.getElementById('plan_L3');
		plan_L3.textContent=CKDC;
		var ppp = document.querySelector("body > div.fade.modal.show > div > div"); //成健
		var zzz =document.querySelector("#shareId").value;
		find=0
		tb=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0];
		tbl=tb.rows.length;
		for (i=1;i<tbl;i++){
			if (tb.rows[i].cells[24].innerText=='01036C'){
				find=1;
				break;
			} 
		}
		if (ppp!==null && document.getElementsByName('visitTypeId')[1].value==6){   	// 成健
			GEN=document.getElementsByClassName('consultationMainPage__value')[10].textContent;
			bb=document.getElementsByClassName('consultationMainPage__value')[6].textContent;
			bby=bb.substring(0,4);
			yyyy=new Date().getFullYear();
			age=yyyy-bby;
			vd0=document.getElementsByClassName('consultationMainPage__value')[27].value;
			vd=(vd0.split(' ')[1].split('-')[0]-1911)+"/"+vd0.split(' ')[1].split('-')[1]+"/"+vd0.split(' ')[1].split('-')[2];
			P_ID=document.getElementsByClassName('consultationMainPage__value')[2].textContent;
			P_NAME=document.getElementsByClassName('consultationMainPage__value')[4].textContent;
			yyy='000'+(bb.split('-')[0]-1911);
			P_BIR=yyy.substring(yyy.length-3,yyy.length)+"/"+bb.split('-')[1]+"/"+bb.split('-')[2];
			P_S=4
			if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").checked){
				P_S=0;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(2)").checked){
				P_S=1;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(3)").checked){
				P_S=2;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(4)").checked){
				P_S=3;
			}
			if (P_S==4){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").click();
				P_S=0;
			}
			if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").checked){
				P_B=0;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(2)").checked){
				P_B=1;
			} else if (document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(3)").checked){
				P_B=2;
			}
			P_HTN=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(1)").checked;
			if (P_HTN){
				PP_HTN=1;
			} else {
				PP_HTN=0;
			}
			P_DM=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(2)").checked;
			if (P_DM){
				PP_DM=1;
			} else {
				PP_DM=0;
			}
			P_LIP=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(3)").checked;
			if (P_LIP){
				PP_LIP=1;
			} else {
				PP_LIP=0;
			}
			P_CAD=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(4)").checked;
			if (P_CAD){
				PP_CAD=1;
			} else {
				PP_CAD=0;
			}
			P_CVA=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(3) > input[type=checkbox]:nth-child(5)").checked;
			if (P_CVA){
				PP_CVA=1;
			} else {
				PP_CVA=0;
			}
			P_CKD=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(1)").checked;
			if (P_CKD){
				PP_CKD=1;
			} else {
				PP_CKD=0;
			}
			P_HBV=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(2)").checked;
			P_HCV=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(3)").checked;
			P_PSY=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(4)").checked;
			P_CA=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(4) > input[type=checkbox]:nth-child(5)").checked;
			P_COUGH=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(16) > input[type=checkbox]:nth-child(3)").checked;
			P_D1=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(17) > input[type=checkbox]:nth-child(3)").checked;
			P_D2=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(18) > input[type=checkbox]:nth-child(3)").checked;		
			H_smoke=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").checked;
			H_drink=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(11) > input[type=checkbox]:nth-child(1)").checked;
			H_betel=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").checked;
			H_exercise=document.querySelector("#uncontrolled-tab-example-tabpane-tab1 > div:nth-child(15) > input[type=checkbox]:nth-child(3)").checked;
			PE_height=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(2) > input[type=number]:nth-child(1)").value;
			PE_weight=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(2) > input[type=number]:nth-child(3)").value;
			PE_SBP=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(3) > input[type=number]:nth-child(1)").value;
			PE_DBP=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(3) > input[type=number]:nth-child(2)").value;
			PE_WC=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(3) > input[type=number]:nth-child(4)").value;
			PE_BMI=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(4) > input[type=number]").value;
			PE_VR1=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(6) > input[type=number]:nth-child(2)").value;
			PE_VL1=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(6) > input[type=number]:nth-child(4)").value;
			PE_VR2=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(7) > input[type=number]:nth-child(2)").value;
			PE_VL2=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(7) > input[type=number]:nth-child(4)").value;
			PE_OR1=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(10) > input[type=checkbox]:nth-child(3)").checked;
			PE_OR2=document.querySelector("#uncontrolled-tab-example-tabpane-tab2 > div:nth-child(10) > input[type=checkbox]:nth-child(4)").checked;
			L_UP=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(3) > input[type=string]").value;
			L_AC=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(5) > input[type=number]").value;
			L_TC=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(6) > input[type=number]").value;
			L_TG=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(7) > input[type=number]").value;
			L_HDL=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(8) > input[type=number]").value;
			L_LDL=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(9) > input[type=number]").value;
			L_GOT=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(11) > input[type=number]").value;
			L_GPT=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(12) > input[type=number]").value;
			L_CRE=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(13) > input[type=number]").value;
			L_GFR=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(14) > input[type=number]").value;
			L_BN=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(15) > input[type=checkbox]:nth-child(2)").checked;
			L_BP=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(15) > input[type=checkbox]:nth-child(3)").checked;
			L_NB=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(15) > input[type=checkbox]:nth-child(4)").checked;
			L_CN=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(16) > input[type=checkbox]:nth-child(2)").checked;
			L_CP=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(16) > input[type=checkbox]:nth-child(3)").checked;
			L_NC=document.querySelector("#uncontrolled-tab-example-tabpane-tab3 > div:nth-child(16) > input[type=checkbox]:nth-child(4)").checked;
			S_smoke=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(1)").checked;
			S_dring=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(2)").checked;
			S_betel=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(3)").checked;
			S_exer=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(4)").checked;
			S_bw=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(1)").checked;
			S_diet=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(2)").checked;
			S_tra=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(3)").checked;
			S_oral=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(4)").checked;
			S_BN=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(1)").checked;
			S_BP=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(2)").checked;
			S_NB=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(3)").checked;
			S_CN=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").checked;
			S_CP=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(2)").checked;
			S_NC=document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(3)").checked;
			if (L_BN){
				HBV_status=0;
			} else if (L_BP){
				HBV_status=1;
			} else if (L_NB){
				HBV_status=2;
			}
			if (L_CN){
				HCV_status=0;
			} else if (L_CP){
				HCV_status=1;
			} else if (L_NC){
				HCV_status=2;
			}
			
			if (H_smoke==S_smoke){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(1)").click();
			}
			if (H_drink==S_dring){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(2)").click();
			}
			if (H_betel==S_betel){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(3)").click();
			}
			if (H_exercise==S_exer){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(2) > input[type=checkbox]:nth-child(4)").click();
			}
			if ((PE_BMI>24 || (GEN.includes('女') && PE_WC>80) || (GEN.includes('男') && PE_WC>90)) !== S_bw ){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(1)").click();
			}
			if (S_diet==false){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(2)").click();
			}
			if ((P_PSY==true || P_CVA==true || (PE_VR1<0.5 && PE_VR2 <0.5 && PE_VL1<0.5 && PE_VL2<0.5)) !== S_tra){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(3)").click();
			}
			if ((PE_OR1==true || PE_OR2==true) !==S_oral){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(3) > input[type=checkbox]:nth-child(4)").click();
			}
			if (P_HTN==true || PE_SBP>179 || PE_DBP>119){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(6)").click();
			} else if (PE_SBP>159 || PE_DBP>109){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(5)").click();
			} else if (PE_SBP>134 || PE_DBP>84){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(6) > input[type=checkbox]:nth-child(1)").click();
			}
			if (P_DM==true || L_AC>199){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(6)").click();
			} else if (L_AC>125){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(5)").click();
			} else if (L_AC>100){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(7) > input[type=checkbox]:nth-child(1)").click();
			}
			if (P_LIP==true || ((P_DM==true || P_CAD==true || P_CVA==true)&& L_LDL>100) || L_TG>400){
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(6)').click();
			} else if (L_LDL>190 || (P_HTN==true && L_LDL>160)){
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(5)').click();
			} else if (L_LDL>130 || L_TG>150 || L_TC>200 ||(GEN.includes('女') && L_HDL<50) || (GEN.includes('男') && L_HDL<40)){
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(2)').click();
			} else {
				document.querySelector('#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(8) > input[type=checkbox]:nth-child(1)').click();
			}
			if (P_CKD==true){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(6)").click();
			} else if (L_GFR<60 && L_UP>15){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(5)").click();
			} else if (L_GFR<60 || L_UP>15){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(9) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_GOT>200 || L_GPT>200){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(6)").click();
			} else if ((P_HBV==true || P_HCV==true) && (L_GOT>40 || L_GPT>40)){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(5)").click();
			} else if (P_HBV==true || P_HCV==true || L_GOT>40 || L_GPT>40){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(10) > input[type=checkbox]:nth-child(1)").click();
			}
			meta=0;
			if(L_AC>99 || P_DM==true){
				meta=meta+1;
			}
			if(L_TG>149 || P_LIP==true){
				meta=meta+1;
			}
			if(PE_SBP>129 || PE_DBP>84 || P_HTN==true){
				meta=meta+1;
			}
			if ((GEN.includes('女') && PE_WC>79) || (GEN.includes('男') && PE_WC>89)){
				meta=meta+1;
			}
			if ((GEN.includes('女') && L_HDL<50) || (GEN.includes('男') && L_HDL<40) || P_LIP==true){
				meta=meta+1;
			}
			if ((P_HTN==true || P_DM==true || P_LIP==true) && meta>2){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(6)").click();
			} else if (meta >2){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(5)").click();
			} else if (meta >0){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(11) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_BN!==S_BN){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_BP!==S_BP){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(2)").click();
			}
			if (L_NB!==S_NB){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(12) > input[type=checkbox]:nth-child(3)").click();
			}
			if (L_CN!==S_CN){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(1)").click();
			}
			if (L_CP!==S_CP){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(2)").click();
			}
			if (L_NC!==S_NC){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(13) > input[type=checkbox]:nth-child(3)").click();
			}
			if (P_COUGH==true){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(14) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(14) > input[type=checkbox]:nth-child(1)").click();
			}
			if (P_D1==true || P_D2==true){
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(15) > input[type=checkbox]:nth-child(2)").click();
			} else {
				document.querySelector("#uncontrolled-tab-example-tabpane-tab4 > div:nth-child(15) > input[type=checkbox]:nth-child(1)").click();
			}
			document.querySelector("#uncontrolled-tab-example-tab-tab4").click();
			let OPD_HE="OPD_HE";
			let OPD_HEdata={
				visitdata:vd,
				personalid:P_ID,
				name:P_NAME,
				birth:P_BIR,
				gender:GEN,
				smoke:P_S,
				betel:P_B,
				height:PE_height,
				weight:PE_weight,
				bmi:PE_BMI,
				waist:PE_WC,
				sbp:PE_SBP,
				dbp:PE_DBP,
				PP_DM:PP_DM,
				PP_HTN:PP_HTN,
				PP_CAD:PP_CAD,
				PP_LIP:PP_LIP,
				PP_CKD:PP_CKD,
				L_AC:L_AC,
				L_TC:L_TC,
				L_TG:L_TG,
				L_HDL:L_HDL,
				L_LDL:L_LDL,
				L_CRE:L_CRE,
				L_GFR:L_GFR,
				L_UP:L_UP,
				L_GOT:L_GOT,
				L_GPT:L_GPT,
				L_HBV:HBV_status,
				L_HCV:HCV_status,
				metabolic:meta,					
			};
			await ahkcallfunction(OPD_HE,JSON.stringify(OPD_HEdata));
		} 
		if (document.getElementById('education1')!=null && document.getElementsByName('visitTypeId')[1].value==16){
			input=prompt('輸入口篩編號\n含4碼問卷跟1-4碼檢查結果');
			if (input !== null) {
				changeevent=new Event('change', {bubbles: true});
				document.querySelector('#paymentType').options[1].selected=true;
				document.querySelector('#paymentType').dispatchEvent(changeevent);
				document.querySelector('#OCSLocation').options[2].selected=true;
				document.querySelector('#OCSLocation').dispatchEvent(changeevent);
				document.querySelector('#OCSDivision').options[3].selected=true;
				document.querySelector('#OCSDivision').dispatchEvent(changeevent);
				input=input.toUpperCase();
				numbers = input.match(/\d+/g)[0];
				input1=numbers.substring(0,1);
				input2=numbers.substring(1,2);
				input3=numbers.substring(2,3);
				input4=numbers.substring(3,4);
				input5=numbers.substring(4,input.length);
				document.querySelector('#education' + input1).click();
				document.querySelector('#OCSBetel' + input2).click();
				document.querySelector('#OCSSmoke' + input3).click();
				if (input4=='0'){
				  document.querySelector('#isOCSSymptom').click();
				} else {
				  document.querySelector('#noOCSSymptom').click();
				}
				document.querySelector('#oCSResult' + input5).click();
				if (input5!='0'){
					words = input.match(/\D+/g)[0];
					input6=words.toUpperCase();
					portionlist=['AU','AD','BL','BR','CR','CL','DR','DL','ER','EL','FR','FL','GR','GL','HR','HL','IR','IL','JR','JL','KR','KL','MR','ML','L'];
					for (i=0;i<portionlist.length;i++){
						if (document.querySelector('#OCSResultPortion' + portionlist[i]).checked){
							document.querySelector('#OCSResultPortion' + portionlist[i]).click();
						}
					}
					document.querySelector('#OCSResultPortion' + input6).click();
				}
				document.getElementById('uncontrolled-tab-example-tab-tab2').click();
				document.querySelector('img').scrollIntoView();
			}
		}
		
		
		if (zzz==31){   ///戒菸
			s1 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div").innerText;
			s2 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(2) > div").innerText;
			s3 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(6) > div").innerText;
			yy=s3.substring(0,4);
			yy-=1911;
			yy='000'+yy;
			yy=yy.substring(yy.length-3);
			mm=s3.substring(5,7);
			dd=s3.substring(8,10);
			s3=yy+'/'+mm+'/'+dd;
			s4 = document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(2) > div:nth-child(8) > div > div:nth-child(1) > input").value;
			As4=s4.split(" ");
			AAs4=As4[1].split("-");
			yy=AAs4[0]-1911;
			mm=AAs4[1];
			dd=AAs4[2];
			s4=yy+'/'+mm+'/'+dd;
			table = document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0];
			tot=table.rows.length;
			for (i=0;i<table.rows[0].cells.length;i++){
				if (table.rows[0].cells[i].textContent=='天數'){
					cdays=i;
				} else if (table.rows[0].cells[i].textContent=='合計'){
					camount=i;
				}else if (table.rows[0].cells[i].textContent=='申報代碼'){
					ccode=i;
					break;
				}
			}
			for (i=1;i<tot;i++){
				try { 
					d = table.rows[i].cells[cdays].children[0].children[0].value;
					if (d!=""){
						s5=d/7;
						break;
					}
				} catch(e) {
				}
			}
			s6=[];
			for (i=1;i<tot;i++){
				try { 
					d = table.rows[i].cells[ccode].textContent;
					if (d!="E1027C" && d!="E1022C"){
					e = table.rows[i].cells[camount].children[0].children[0].value;
					let tempdrug={
						code:d,
						amount:e,
					}
					s6.push(tempdrug);
					}
				} catch(e) {
				}
			}
			try {
				let OPD_SMOKE="OPD_SMOKE";
				let OPD_SMOKEdata={
					name:s1,
					personalid:s2,
					birth:s3,
					visitdate:s4,
					week:s5,
					drug:s6,
				}
				await ahkcallfunction(OPD_SMOKE,JSON.stringify(OPD_SMOKEdata));
			} catch(e) {
			}
		} 
		if (find==1){	//轉診
			id=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(2) > div").innerText;
			name=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div").innerText;
			bir0=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(6) > div").innerText;
			bir=(('000'+(bir0.split('-')[0]-1911)).substring(('000'+(bir0.split('-')[0]-1911)).length-3))+"/"+bir0.split('-')[1]+"/"+bir0.split('-')[2];
			sss=uu.querySelectorAll('textarea')[0].value;
			ooo=uu.querySelectorAll('textarea')[1].value;;
			icd=document.getElementsByClassName('line prescription-diagnosis-area')[0].children[2].children[0].children[0].children[0].rows[1].cells[1].innerText;
			icd=icd.replaceAll('.','');
			icd=icd.toUpperCase();
			let OPD_TRANS="OPD_TRANS";
			let OPD_TRANSdata={
				name:name,
				personalid:id,
				birth:bir,
				cc:sss,
				pe:ooo,
				icd:icd,
			}
			await ahkcallfunction(OPD_TRANS,JSON.stringify(OPD_TRANS));
		} 
		infodataall={
			info: JSON.parse(OPD_INFOdata),
			history: JSON.parse(OPD_HISTORYdata),
		}
		await ahkcallfunction(OPD_INFO,infodataall);
	} else if (cc=='https://phpcis.chshb.gov.tw/populanceRegistration' || cc=='https://phpcis.chshb.gov.tw/registration'){
		radiolist=document.querySelectorAll('input[type="radio"]');
		targeturl="";
		for (let i=0; i < radiolist.length; i++){
			if (radiolist[i].checked){
				if (radiolist[i].getBoundingClientRect().height>0){
					targeturl=radiolist[i].parentElement.parentElement.children[4].children[0].href;
					break
				}
			}
		}
		if (targeturl!=""){
			registrationId=targeturl.split('/')[targeturl.split('/').length-1]
				
			furl='https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId+'&type=consultation';
			aaa=httpGet(furl);
			res=JSON.parse(aaa);
			personalInfoId=res.result.personalInfoId;
			let OPD_INFO="OPD_INFO";
			let OPD_INFOdata=aaa
			hurl='https://phpcis.chshb.gov.tw/api/v1/health_records/list?personalInfoId='+personalInfoId;
			hhh=httpGet(hurl);
			let OPD_HISTORYdata=hhh;
			infodataall={
				info: JSON.parse(OPD_INFOdata),
				history: JSON.parse(OPD_HISTORYdata),
			}
			await ahkcallfunction(OPD_INFO,infodataall);
		} 
	}
}
function button_medvpn_handle(){
	let funcname='medvpn2';
	let funcdata='';
	ahkcallfunction(funcname,funcdata);
	console.log(funcname);
}
function create_OPD_one(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	
	button_preexam =crebutton('預開檢驗',xx,yy,ww,hh);
	button_preexam.className='btn btn-primary';
	button_preexam.addEventListener('click', button_preexam_handle);
	myDraggable.appendChild(button_preexam);
	xx+=ww+ii
	/*
	button_question =crebutton('完成問卷',xx,yy,ww,hh);
	button_question.className='btn btn-primary';
	//button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_question);
	xx+=ww+ii
	*/
	button_niis = crebutton('NIIS',xx,yy,ww,hh);
	button_niis.className='btn btn-primary';
	button_niis.addEventListener('click', button_niis_handle);
	myDraggable.appendChild(button_niis);
	xx+=ww+ii
	button_drugpic =crebutton('藥品圖片',xx,yy,ww,hh);
	button_drugpic.className='btn btn-primary';
	button_drugpic.addEventListener('click', button_drugpic_handle);
	myDraggable.appendChild(button_drugpic);
	xx+=ww+ii
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_OPD_list(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	
	button_reflash =crebutton('更新列表',xx,yy,ww,hh);
	button_reflash.className='btn btn-primary';
	button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_reflash);
	xx+=ww+ii
	button_printfromlist =crebutton('列印處方',xx,yy,ww,hh);
	button_printfromlist.className='btn btn-primary';
	button_printfromlist.addEventListener('click', button_printfromlist_handle);
	myDraggable.appendChild(button_printfromlist);
	xx+=ww+ii
	button_autocomplete =  crebutton('批次完成',xx,yy,ww,hh);
	button_autocomplete.className='btn btn-primary';
	button_autocomplete.addEventListener('click', button_autocomplete_handle);
	myDraggable.appendChild(button_autocomplete);
	xx+=ww+ii
	button_autocompletev2 =crebutton('標準身分',xx,yy,ww,hh);
	button_autocompletev2.className='btn btn-primary';
	button_autocompletev2.addEventListener('click', button_autocompletev2_handle);
	myDraggable.appendChild(button_autocompletev2);
	xx+=ww+ii
	button_autocompletesingle =crebutton('標準個案',xx,yy,ww,hh);
	button_autocompletesingle.className='btn btn-primary';
	button_autocompletesingle.addEventListener('click', button_autocompletesingle_handle);
	myDraggable.appendChild(button_autocompletesingle);
	xx+=ww+ii
	button_niis = crebutton('NIIS',xx,yy,ww,hh);
	button_niis.className='btn btn-primary';
	button_niis.addEventListener('click', button_niis_handle);
	myDraggable.appendChild(button_niis);
	xx+=ww+ii
	/*
	button_medvpn = crebutton('雲端整合',xx,yy,ww,hh);
	button_medvpn.className='btn btn-primary';
	//button_changenumber.addEventListener('click', button_changenumber_handle);
	myDraggable.appendChild(button_medvpn);
	xx+=ww+ii
	*/
	button_listdelete = crebutton('快速刪除',xx,yy,ww,hh);
	button_listdelete.className='btn btn-danger';
	button_listdelete.addEventListener('click', button_listdelete_handle);
	myDraggable.appendChild(button_listdelete);
	xx+=ww+ii
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_REG_list(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	button_reflash = crebutton('更新列表',xx,yy,ww,hh);
	button_reflash.className='btn btn-primary';
	button_reflash.addEventListener('click', button_reflash_handle);
	myDraggable.appendChild(button_reflash);
	xx+=ww+ii;
	span_fasttype = crespan('身分別',xx,yy,ww,hh);
	myDraggable.appendChild(span_fasttype);
	xx+=ww+ii;
	input_fasttype = creinput('input_fasttype',xx,yy,ww,hh);
	if (temptype){
		input_fasttype.value=temptype
	}
	myDraggable.appendChild(input_fasttype);
	xx+=ww+ii;
	button_fastreg = crebutton('快速掛號',xx,yy,ww,hh);
	button_fastreg.className='btn btn-primary';
	button_fastreg.addEventListener('click', button_fastreg_handle);
	myDraggable.appendChild(button_fastreg);
	xx+=ww+ii;
	button_checkpreexam = crebutton('預檢查詢',xx,yy,ww,hh);
	button_checkpreexam.className='btn btn-primary';
	button_checkpreexam.addEventListener('click', button_checkpreexam_handle);
	myDraggable.appendChild(button_checkpreexam);
	xx+=ww+ii;
	button_niis = crebutton('NIIS',xx,yy,ww,hh);
	button_niis.className='btn btn-primary';
	button_niis.addEventListener('click', button_niis_handle);
	myDraggable.appendChild(button_niis);
	xx+=ww+ii
	button_printlabel = crebutton('印標籤',xx,yy,ww,hh);
	button_printlabel.className='btn btn-primary';
	button_printlabel.addEventListener('click', button_printlabel_handle);
	myDraggable.appendChild(button_printlabel);
	xx+=ww+ii;
	/*
	button_OPDhistory = crebutton('就醫紀錄',xx,yy,ww,hh);
	button_OPDhistory.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_OPDhistory);
	xx+=ww+ii;
	button_showvaccine = crebutton('顯示疫苗',xx,yy,ww,hh);
	button_showvaccine.className='btn btn-primary';
	//button_showvaccine.addEventListener('click', button_showvaccine_handle);
	myDraggable.appendChild(button_showvaccine);
	xx+=ww+ii;
	*/
	button_countvaccine = crebutton('算疫苗',xx,yy,ww,hh);
	button_countvaccine.className='btn btn-primary';
	button_countvaccine.addEventListener('click', button_countvaccine_handle);
	myDraggable.appendChild(button_countvaccine);
	xx+=ww+ii;
	
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_REG_one(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=80;
	let hh=40;
	let ii=5;
	span_fasttype = crespan('身分別',xx,yy,ww,hh);
	myDraggable.appendChild(span_fasttype);
	xx+=ww+ii;
	input_fasttype = creinput('input_fasttype',xx,yy,ww,hh)
	if (temptype){
		input_fasttype.value=temptype;
	}
	myDraggable.appendChild(input_fasttype);
	xx+=ww+ii;
	button_fastreg = crebutton('快速掛號',xx,yy,ww,hh);
	button_fastreg.className='btn btn-primary';
	button_fastreg.addEventListener('click', button_fastreg_handle);
	myDraggable.appendChild(button_fastreg);
	xx+=ww+ii;
	button_checkpreexam =  crebutton('預檢查詢',xx,yy,ww,hh);
	button_checkpreexam.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_checkpreexam);
	xx+=ww+ii;
	button_niis = crebutton('NIIS',xx,yy,ww,hh);
	button_niis.className='btn btn-primary';
	button_niis.addEventListener('click', button_niis_handle);
	myDraggable.appendChild(button_niis);
	xx+=ww+ii
	button_printlabel = crebutton('印標籤',xx,yy,ww,hh);
	button_printlabel.className='btn btn-primary';
	button_printlabel.addEventListener('click', button_printlabel_handle);
	myDraggable.appendChild(button_printlabel);
	xx+=ww+ii;
	/*
	button_OPDhistory = crebutton('就醫紀錄',xx,yy,ww,hh);
	button_OPDhistory.className='btn btn-primary';
	//button_OPDhistory.addEventListener('click', button_OPDhistory_handle);
	myDraggable.appendChild(button_OPDhistory);
	xx+=ww+ii;
	button_showvaccine = crebutton('顯示疫苗',xx,yy,ww,hh);
	button_showvaccine.className='btn btn-primary';
	//button_showvaccine.addEventListener('click', button_showvaccine_handle);
	myDraggable.appendChild(button_showvaccine);
	xx+=ww+ii;
	*/
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function create_FM(){
	create_myDraggable();
	button_FMdebug = document.createElement('button');
	button_FMdebug.textContent='醫療群除錯';
	button_FMdebug.style.width = '160px';
	button_FMdebug.style.height = '66px';
	button_FMdebug.style.left = '2px';
	button_FMdebug.style.top = '2px';
	button_FMdebug.style.position = 'absolute';
	//button_FMdebug.addEventListener('click', button_FMdebug_handle);
	myDraggable.appendChild(button_FMdebug);
	myDraggable.style.width='164px';
	myDraggable.style.height = 70+'px';
	myDraggable.style.left=window.innerWidth-164-borderx +'px';
}
function create_Countmonth(){
	create_myDraggable();
	button_countmonth = document.createElement('button');
	button_countmonth.textContent='查天數';
	button_countmonth.style.width = '160px';
	button_countmonth.style.height = '66px';
	button_countmonth.style.left = '2px';
	button_countmonth.style.top = '2px';
	button_countmonth.style.position = 'absolute';
	//button_countmonth.addEventListener('click', button_countmonth_handle);
	myDraggable.appendChild(button_countmonth);
	myDraggable.style.width='164px';
	myDraggable.style.height = 70+'px';
	myDraggable.style.left=window.innerWidth-1164-borderx +'px';
}
function create_main(){
	create_myDraggable();
	let xx=5;
	let yy=5;
	let ww=150;
	let hh=40;
	let ii=5;
	autoniischeckbox = document.createElement('input');
	autoniischeckbox.type = "checkbox";
	autoniischeckbox.id = "niischeckbox";
	autoniischeckbox.name = "niischeckbox";
	autoniischeckbox.checked = autoniis;
	autoniischeckbox.style.padding ='0px';
	autoniischeckbox.style.left = xx+'px';
	autoniischeckbox.style.top = yy+'px';
	autoniischeckbox.style.width = 20+'px';
	autoniischeckbox.style.height = hh+'px';
	autoniischeckbox.style.position = 'absolute';
	autoniischeckbox.addEventListener('change', autoniischeckbox_handle);
	myDraggable.appendChild(autoniischeckbox)
	xx+=20+ii
	autoniischeckboxlabel = document.createElement("label");
	autoniischeckboxlabel.htmlFor = "niischeckbox";
	autoniischeckboxlabel.appendChild(document.createTextNode("自動查詢NIIS"));
	autoniischeckboxlabel.style.padding ='0px';
	autoniischeckboxlabel.style.left = xx+'px';
	autoniischeckboxlabel.style.top = (yy+8)+'px';
	autoniischeckboxlabel.style.width = ww+'px';
	autoniischeckboxlabel.style.height = hh+'px';
	autoniischeckboxlabel.style.position = 'absolute';
	myDraggable.appendChild(autoniischeckboxlabel);
	
	xx+=ww+ii
	newprintcheckbox = document.createElement('input');
	newprintcheckbox.type = "checkbox";
	newprintcheckbox.id = "newprintcheckbox";
	newprintcheckbox.name = "newprintcheckbox";
	newprintcheckbox.checked = newprint;
	newprintcheckbox.style.padding ='0px';
	newprintcheckbox.style.left = xx+'px';
	newprintcheckbox.style.top = yy+'px';
	newprintcheckbox.style.width = 20+'px';
	newprintcheckbox.style.height = hh+'px';
	newprintcheckbox.style.position = 'absolute';
	newprintcheckbox.addEventListener('change', newprintcheckbox_handle);
	myDraggable.appendChild(newprintcheckbox);
	xx+=20+ii
	newprintcheckboxlabel = document.createElement("label");
	newprintcheckboxlabel.htmlFor = "newprintcheckbox";
	newprintcheckboxlabel.appendChild(document.createTextNode("新版列印"));
	newprintcheckboxlabel.style.padding ='0px';
	newprintcheckboxlabel.style.left = xx+'px';
	newprintcheckboxlabel.style.top = (yy+8)+'px';
	newprintcheckboxlabel.style.width = ww+'px';
	newprintcheckboxlabel.style.height = hh+'px';
	newprintcheckboxlabel.style.position = 'absolute';
	myDraggable.appendChild(newprintcheckboxlabel);
	xx+=ww+ii
	
	yy+=hh+ii;
	myDraggable.style.width=xx+'px';
	myDraggable.style.height=yy+'px';
	myDraggable.style.left=750 +'px';
	myDraggable.style.top=0+'px';
}
function autoniischeckbox_handle(){
	autoniis=autoniischeckbox.checked;
}
function newprintcheckbox_handle(){
	newprint=newprintcheckbox_handle.checked;
}
function create_myDraggable(){
	thewidth=330;
	theheight=100;
	borderx=20;
	bordery=50;
	var myDraggable = document.createElement('div');
	myDraggable.id='myDraggable';
	myDraggable.style.width = thewidth+'px';
	myDraggable.style.left=window.innerWidth-thewidth-borderx +'px';
	myDraggable.style.height = theheight+'px';
	myDraggable.style.top = bordery +'px';
	myDraggable.style.background = '#f9f9f9';
	myDraggable.style.fontFamily = '微軟正黑體';
	myDraggable.style.fontSize = '16px';
	myDraggable.style.border = '1px solid #ccc';
	myDraggable.style.position = 'absolute';
	//myDraggable.style.cursor = 'move';
	myDraggable.style.zIndex = '9999';
	document.body.insertBefore(myDraggable,document.body.firstChild);
	/*
	myDraggable.addEventListener('mousedown', function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
	function onMouseMove(e) {
		posX = mouseX - e.clientX;
		posY = mouseY - e.clientY;
		mouseX = e.clientX;
		mouseY = e.clientY;
		myDraggable.style.left = (myDraggable.offsetLeft - posX) + 'px';
		myDraggable.style.top = (myDraggable.offsetTop - posY) + 'px';
	}
	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}
	*/
	
}

function checksave(){
cc=document.URL;
d1='https://phpcis.chshb.gov.tw/consultationMainPage/';
if (cc.includes(d1)){
	errmsg="出現以下錯誤";
	CKDICD=["A1811","A5275","C641","C642","C649","C7A093","Z5112","D3000","D3001","D3002","D3A093","D4100","D4101","D4102","D4110","D4111","D4112","D4120","D4121","D4122","E1121","E1122","E1129","E1321","E1322","E1329","E1021","E1022","E1029","E1121","E1122","E1129","E1165","E1021","E1065","E748","M1030","M10311","M10312","M10319","M10321","M10322","M10329","M10331","M10332","M10339","M10341","M10342","M10349","M10351","M10352","M10359","M10361","M10362","M10369","M10371","M10372","M10379","M1038","M1039","N200","M1030","D593","I120","I129","I1311","I132","I701","I7581","I722","I7773","I773","K767","N000","N001","N002","N003","N004","N005","N006","N007","N010","N011","N012","N013","N014","N015","N016","N017","N018","N019","N08","N008","N009","N044","N021","N022","N023","N041","N042","N024","N025","N026","N027","N043","N044","N045","N046","N020","N040","N028","N047","N048","N029","N049","N032","N031","N033","N034","N035","N036","N037","N038","","N030","N039","N059","N052","N062","N072","N053","N054","N055","N063","N064","N065","N073","N074","N075","N059","N171","N172","E1021","E1121","N16","N050","N051","N056","N057","N058","N060","N061","N066","N067","N068","N070","N071","N076","N077","N078","N140","N141","N142","N143","N144","N150","N158","N059","N069","N079","N159","N170","N171","N172","N178","N179","N181","N182","N183","N189","N19","N261","N269","N250","N251","N2581","N2589","N259","N131","N132","N1330","N1339","O10419","O10411","O10412","O10413","O1042","O1043","Q6101","Q613","Q612","Q6111","Q6119","Q614","Q615","Q615","Q6102","Q618","Q6239","Q6211","Q6212","Q6231","Q6232","Q620","Q6210","Q6211","Q622","R944"];
	DMICD=["E08","E09","E10","E11","E12","E13"];
	vaccinelist=["KC00452206","KC00452209","KC00452221","K000301206","K000301209","K000351206","K000351209","K000906206","X000153206","K000702206","X000154206","X000155229","K000440206","X000157206","J000085216","K000364206","K000510206","K000450206","K000480206","K000456206","K000456209","K000501206","K000501209","K000967206","K000981206","X000164206","X000165206"];
	translist=["01036C","01037C"];
	try {
		mainICD=document.getElementsByClassName('table table-striped table-bordered table-sm consultationMainPageTable commonTable')[7].children[1].rows[0].cells[1].textContent.replaceAll('.','');
	} catch {
		mainICD="";
		errmsg=adderrmsg(errmsg,"無診斷碼");
	}
	ttt=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0];
	for (i=0;i<ttt.children[0].rows[0].cells.length;i++){
		if (ttt.children[0].rows[0].cells[i].textContent=='申報代碼'){
			codecolumn=i;
		}
		if (ttt.children[0].rows[0].cells[i].textContent=='主成分'){
			maincolumn=i;
		}
		if (ttt.children[0].rows[0].cells[i].textContent=='自費組序'){
			selfpaycolumn=i;
		}
		if (ttt.children[0].rows[0].cells[i].textContent=='醫囑名稱'){
			ordernamecolumn=i;
		}
		if (ttt.children[0].rows[0].cells[i].textContent=='轉診院所代碼'){
			transsitecolumn=i;
		}
		if (ttt.children[0].rows[0].cells[i].textContent=='慢箋'){
			ischroniccolumn=i;
		}
	}
	alllist=document.getElementsByClassName('form-control consultationMainPage__value');
	changeevent=new Event("change", {bubbles: true});
	for (i=0;i<alllist.length;i++){
		if (alllist[i].id=='visitTypeId'){
			visitTypeId=alllist[i].value;
		}
		if (alllist[i].id=='caseTypeId'){
			caseTypeId=alllist[i].value;
		}
		if (alllist[i].id=='shareId'){
			shareId=alllist[i].value;
		}
	}
	checklist=document.getElementsByClassName('form-check-input');
	for (i=0;i<checklist.length;i++){
		if (checklist[i].name=='isChronic'){
			isChronic=checklist[i].checked;
		}
	}
	codearray=[];
	P1found=false;
	P2found=false;
	P3found=false;
	P4found=false;
	P5found=false;
	SSfound=false;
	chronicchronic=false;
	for (i=1;i<ttt.rows.length;i++){
		thecode=ttt.rows[i].cells[codecolumn].textContent;
		themain=ttt.rows[i].cells[maincolumn].textContent;
		if (thecode=='P1407C'){
			if (!DMICD.includes(mainICD.substring(0,3))){
				errmsg=adderrmsg(errmsg,"DM收案診斷不符");
			}
			if (visitTypeId!='22'){
				errmsg=adderrmsg(errmsg,"DM收案身分別應為6a");
			}
		}
		if (thecode=='P1408C' || thecode=='P1410C'){
			if (visitTypeId!='23'){
				errmsg=adderrmsg(errmsg,"DM追蹤身分別應為6b");
			}
		} 
		if (thecode=='P1409C' || thecode=='P1411C'){
			if (visitTypeId!='24'){
				errmsg=adderrmsg(errmsg,"DM年度身分別應為6c");
			}
		} 
		if (thecode=='P4301C'){
			if (!CKDICD.includes(mainICD)){
				errmsg=adderrmsg(errmsg,"CKD收案診斷不符");
			}
			if (visitTypeId!='26'){
				errmsg=adderrmsg(errmsg,"CKD收案身分別應為6s");
			}
		}
		if (thecode=='P4302C'){
			if (visitTypeId!='27'){
				errmsg=adderrmsg(errmsg,"CKD追蹤身分別應為6t");
			}
		}
		if (thecode=='P7001C'){
			if (visitTypeId!='23'){
				errmsg=adderrmsg(errmsg,"DKD追蹤身分別應為6b");
			}
		}
		if (thecode=='P7002C'){
			if (visitTypeId!='24'){
				errmsg=adderrmsg(errmsg,"DKD年度身分別應為6c");
			}
		}
		if (thecode=='E4003C' || thecode=='E4004C'){
			if (visitTypeId!='69'){
				errmsg=adderrmsg(errmsg,"TT/IGRA身分別應為6T結核病接觸者");
			}
			if (caseTypeId!='37'){
				errmsg=adderrmsg(errmsg,"TT/IGRA案件別應為C4行政協助無健保結核病患就醫案件");
			}
		}
		if (themain.toUpperCase().includes('ISONIAZID') || themain.toUpperCase().includes('RIFAPENTINE')){
			if (visitTypeId!='4'){
				errmsg=adderrmsg(errmsg,"LTBI身分別應為65");
			}
			if (caseTypeId!='21'){
				errmsg=adderrmsg(errmsg,"LTBI案件別應為06結核病");
			}
		}
		if (visitTypeId=='28'){
			if (!(thecode=="申報代碼" || thecode=="A2051C" || vaccinelist.includes(thecode)||translist.includes(thecode))){
				errmsg=adderrmsg(errmsg,"6x兒童預注身分別不可開立接種、疫苗及轉診以外處方");
			}
			if (vaccinelist.includes(thecode)){
				if (ttt.rows[i].cells[selfpaycolumn].children[0].children[0].value==""){
					errmsg=adderrmsg(errmsg,ttt.rows[i].cells[ordernamecolumn].textContent+"須有自費組序");
				}
			}
			if (shareId!="9"){
				errmsg=adderrmsg(errmsg,"6x兒童預注身分別部分負擔為009");
			}
		}
		if (translist.includes(thecode)){
			if (ttt.rows[i].cells[transsitecolumn].children[0].children[0].value==""){
				errmsg=adderrmsg(errmsg,"轉診需填寫轉診院所代號");
			}
		}
		if (visitTypeId=='31' || visitTypeId=='1' || visitTypeId=='2' ||visitTypeId=='3'){
			if (caseTypeId!="19" && caseTypeId!="23" ){
				errmsg=adderrmsg(errmsg,"健保身分建議案件類別為04或09");
			}
		}
		if (thecode=='E1022C' ||thecode=='E1027C'){
			if (visitTypeId!="18"){
				errmsg=adderrmsg(errmsg,"戒菸處置身分別為6S");
			}
		}
		if (visitTypeId=='22'){
			if (thecode=='P1407C'){
				P1found=true;
			}
		}
		
		if (visitTypeId=='23'){
			if (thecode=='P1408C'||thecode=='P1410C'||thecode=='P7001C'){
				P2found=true;
			}
		}
		
		if (visitTypeId=='24'){
			if (thecode=='P1409C'||thecode=='P1411C'||thecode=='P7002C'){
				P3found=true;
			}
		}
		if (visitTypeId=='26'){
			if (thecode=='P4301C'){
				P4found=true;
			}
		}
		if (visitTypeId=='27'){
			if (thecode=='P4302C'){
				P5found=true;
			}
		}
		if (visitTypeId=='18'){
			if (thecode=='E1027C'){
				SSfound=true;
			}
		}
		theischronic=ttt.rows[i].cells[ischroniccolumn].children[0].checked;
		if (theischronic){
			chronicchronic=true
		}
		if (!isChronic && theischronic){
			errmsg=adderrmsg(errmsg,"開立慢籤藥物請使用F12建立慢籤資訊");
		}
		codearray.push(thecode);
	}
	if (isChronic){
		if (!chronicchronic){
			errmsg=adderrmsg(errmsg,"F12建立慢籤但無勾選慢籤藥物");
		}
	} 
	if (!P1found && visitTypeId=='22'){
		errmsg=adderrmsg(errmsg,"6a身分別需開立P1407C");
	}
	if (!P2found && visitTypeId=='23'){
		errmsg=adderrmsg(errmsg,"6b身分別需開立P1408C或P14010C或P70010C");
	}
	if (!P3found && visitTypeId=='24'){
		errmsg=adderrmsg(errmsg,"6c身分別需開立P1409C或P14011C或P7002C");
	}
	if (!P4found && visitTypeId=='26'){
		errmsg=adderrmsg(errmsg,"6s身分別需開立P4301C");
	}
	if (!P5found && visitTypeId=='27'){
		errmsg=adderrmsg(errmsg,"6t身分別需開立P4302C");
	}
	if (!SSfound && visitTypeId=='18'){
		errmsg=adderrmsg(errmsg,"戒菸身分別需開立E1027C");
	}
	thedupli=0;
	for (i=0;i<ttt.rows.length;i++){
		thecode=ttt.rows[i].cells[codecolumn].textContent;
		thecodecount=countOccurrences(codearray,thecode);
		if (thecodecount>1){
			ttt.rows[i].style.backgroundColor='#FF5151';
			thedupli+=1;
		}
	}
	if (thedupli>0){
		errmsg=errmsg+'\n重複開立處方，請檢查下方紅色欄位';
	}
	if (errmsg!="出現以下錯誤"){
		errmsg=errmsg+"\n是否仍存檔?";
		result = confirm(errmsg);
		if (result) {
			document.getElementsByClassName('consultationMainPage__btn btn btn-primary')[0].click();
		}
	} else {
		document.getElementsByClassName('consultationMainPage__btn btn btn-primary')[0].click();
	}
} 
}
function countOccurrences(arr, value) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}
function adderrmsg(errmsg,errmsgn){
	if (!errmsg.includes(errmsgn)){
		errmsg=errmsg+"\n"+errmsgn;
	}
	return errmsg
}
function changetype(){
cc=document.URL;
d1='https://phpcis.chshb.gov.tw/registration/create';
d2='https://phpcis.chshb.gov.tw/consultationMainPage/';
changeevent=new Event('change', {bubbles: true});
insite=false;
alllist=[];
if (cc==d1){
	alllist=document.getElementsByClassName('form-control ampInput');
	theage=age=new Date().getFullYear()-1911-document.getElementsByClassName('form-control ampInput')[2].value.split('-')[0];
	insite=true;
} else if (cc.includes(d2)){
	alllist=document.getElementsByClassName('form-control consultationMainPage__value');
	insite=true;
}
if (insite){
	find=false;
	for (i=0;i<alllist.length;i++){
		if (alllist[i].id=='visitTypeId'){
			targetelement=alllist[i];
			find=true;
		} else if (alllist[i].name=='prevention'){
			targetelement2=alllist[i];
		} else if (alllist[i].name=='preventionId'){
			targetelement3=alllist[i];
		}
	}
	if (find){
		thecode=prompt('請輸入身分別代碼(區分大小寫)\n成健一階:1j或1J\n成健2階:2j或2J\n成健可能須執行2次');
		thecode=thecode.toString();
		if (thecode=='1j' || thecode=='1J'){
			if (cc==d1){
				for (i=0;i<targetelement.options.length;i++){
					if (targetelement.options[i].text.includes('69')){
						targetelement.options[i].selected=true;
						targetelement.dispatchEvent(changeevent);
						break;
					}
				}
				targetelement2.value='02';
				targetelement2.dispatchEvent(changeevent);
				if (age>64){
					targetelement3.value='10';
					targetelement3.dispatchEvent(changeevent);
				} else {
					targetelement3.value='8';
					targetelement3.dispatchEvent(changeevent);
				}
			} else {
				alert('請在新增掛號時使用');
			}
		} else if (thecode=='2j' || thecode=='2J'){
			if (cc==d1){
				for (i=0;i<targetelement.options.length;i++){
					if (targetelement.options[i].text.includes('69')){
						targetelement.options[i].selected=true;
						targetelement.dispatchEvent(changeevent);
						break;
					}
				}
				targetelement2.value='02';
				targetelement2.dispatchEvent(changeevent);
				if (age>64){
					targetelement3.value='11';
					targetelement3.dispatchEvent(changeevent);
				} else {
					targetelement3.value='9';
					targetelement3.dispatchEvent(changeevent);
				}
			} else {
				alert('請在新增掛號時使用');
			}
		} else {
			for (i=0;i<targetelement.options.length;i++){
				if (targetelement.options[i].text.includes(thecode)){
					targetelement.options[i].selected=true;
					targetelement.dispatchEvent(changeevent);
					break
				}
			}
		}
	} 
} 
}
function button_niis_handle(){
	ccc=document.URL;
	if (ccc.includes('https://phpcis.chshb.gov.tw/consultationMainPage/')){
		theid=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(2) > div").textContent;
		thebir=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(6) > div").textContent;
		OPD_NIIS="OPD_NIIS";
		OPD_NIISdata={
			id:theid,
			birth:thebir
		}
		ahkcallfunction(OPD_NIIS,OPD_NIISdata);
	} else if (ccc=='https://phpcis.chshb.gov.tw/populanceRegistration' || ccc=='https://phpcis.chshb.gov.tw/registration'){
		radiolist=document.querySelectorAll('input[type="radio"]');
		targeturl="";
		for (let i=0; i < radiolist.length; i++){
			if (radiolist[i].checked){
				if (radiolist[i].getBoundingClientRect().height>0){
					targeturl=radiolist[i].parentElement.parentElement.children[4].children[0].href;
					break
				}
			}
		}
		if (targeturl!=""){
			registrationId=targeturl.split('/')[targeturl.split('/').length-1]
			result=httpGet('https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId);
			jres=JSON.parse(result);
			OPD_NIIS="OPD_NIIS";
			OPD_NIISdata={
				id:jres.result.personalId,
				birth:jres.result.birthday
			}
			ahkcallfunction(OPD_NIIS,OPD_NIISdata);
		} else {
			alert('請選擇個案');
		}
	} else if (ccc.includes('https://phpcis.chshb.gov.tw/registration/') || ccc=='https://phpcis.chshb.gov.tw/registration/create'){
		theid=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div > div > input").value;
		mkbirdash=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(6) > div > div > input").value;
		amkbirdash=mkbirdash.split('-');
		cy=amkbirdash[0]*1+1911;
		thebir=cy+'-'+amkbirdash[1]+'-'+amkbirdash[2];
		OPD_NIIS="OPD_NIIS";
		OPD_NIISdata={
			id:theid,
			birth:thebir
		}
		ahkcallfunction(OPD_NIIS,OPD_NIISdata);
	} 
}
function button_drugpic_handle(){
	tb=document.getElementsByClassName('table table-striped table-bordered table-condensed consultationMainPageTable commonTable')[0];
	tbl=tb.rows.length;
	if (tbl>1){
		thecode='';
		for (i=1;i<tbl;i++){
			if (tb.rows[i].cells[0].children[0].checked){
				thecode=tb.rows[i].cells[24].textContent;
				break;
			}
		}
		if (thecode!=''){
			newurl='https://script.google.com/macros/s/AKfycbzVKuBa099524WRQWkMEiwJjJnr0-dGzI6TmRI2yyI4CtXcLraDXHdlVpxSDG6G37X5/exec?code='+thecode;
			window.open(newurl);
		} else {
			alert('無選擇處方');
		}
	} else {
		alert('無開立處方');
	}
}
function button_reflash_handle(){
	changeevent=new Event('change', {bubbles: true});
	document.getElementsByClassName('form-control ampInput')[2].dispatchEvent(changeevent);
}
function button_printfromlist_handle(){
	ccc=document.URL;
	if (ccc=='https://phpcis.chshb.gov.tw/populanceRegistration' || ccc=='https://phpcis.chshb.gov.tw/registration'){
		radiolist=document.querySelectorAll('input[type="radio"]');
		targeturl="";
		for (let i=0; i < radiolist.length; i++){
			if (radiolist[i].checked){
				if (radiolist[i].getBoundingClientRect().height>0){
					targeturl=radiolist[i].parentElement.parentElement.children[4].children[0].href;
					break
				}
			}
		}
		if (targeturl!=""){
			registrationId=targeturl.split('/')[targeturl.split('/').length-1]
			result=httpGet('https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId);
			jres=JSON.parse(result);
			healthRecordId=jres.result.healthRecordId;
			let preprint ="preprint";
			let preprintdata ={
				name:jres.result.name,
				personalId:jres.result.personalId,
				personalInfoId:jres.result.personalInfoId,
				registrationId:jres.result.registrationId,
				healthRecordId:jres.result.healthRecordId,
				personalTag:jres.result.personalTag,
				birthday:jres.result.birthday
			}
			ahkcallfunction(preprint,preprintdata);
			
		} else {
			alert('請選擇個案');
		}
	}
}
function button_autocomplete_handle(){
	c=document.URL;
	d1='https://phpcis.chshb.gov.tw/populanceRegistration';
	d2='https://phpcis.chshb.gov.tw/registration';
	if (c==d1 || c==d2){
		date0=document.getElementsByClassName('form-control ampInput')[0].value;
		date1=date0.split(' ')[1];
		period1=document.getElementsByClassName('form-control ampInput')[1].selectedOptions[0].value;
		room0=document.getElementsByClassName('form-control ampInput')[2].selectedOptions[0].innerText.split(' ')[0];
		xmlHttp=new XMLHttpRequest();
		URL='https://phpcis.chshb.gov.tw/api/v1/clinics/settings/find';
		xmlHttp.open('GET', URL, false ); 
		xmlHttp.send();
		res=xmlHttp.responseText;
		jres=JSON.parse(res);
		if (jres.code==200){
			ok=jres.result;
			upj={};
			upj.FOBTHospitalId=ok.CCSHospitalId;
			upj.FOBTLocation='';
			upj.adultTestType='Y';
			upj.clinicId=ok.clinicId;
			upj.healthExamHospitalId=ok.healthExamHospitalId;
			upj.isChargeReceipt=false;
			upj.isIncludeAdultLevelOne=true;
			upj.isIncludeAdultLevelTwo=true;
			upj.isIncludeChild=true;
			upj.isIncludeChildGuardian=true;
			upj.isIncludeChildScreening=true;
			upj.isIncludeCovid19=true;
			upj.isIncludeFOBT=true;
			upj.isIncludeFreeInfluenza=true;
			upj.isIncludeFreePneumonia=true;
			upj.isIncludeInfluenza=true;
			upj.isIncludeOral=true;
			upj.isIncludePneumonia=true;
			upj.isIncludePneumonia13PCV=true;
			upj.isIncludeUterus=true;
			upj.isReplace=false;
			upj.markFromIntegratedScreening=false;
			upj.oralDivision='3';
			upj.oralLocation='2';
			upj.period=period1;
			URL2='https://phpcis.chshb.gov.tw/api/v1/rooms/list?clinicId='+upj.clinicId;
			xmlHttp.open('GET', URL2, false );
			xmlHttp.send();
			res2=xmlHttp.responseText;
			jres2=JSON.parse(res2);
			for (i=0;i<jres2.result.length;i++){
				if (jres2.result[i].name.includes(room0)){
					room1=jres2.result[i].roomId;
					break;
				}
			}
			upj.roomId=room1;
			upj.treatmentDate=date1;
			upjs=JSON.stringify(upj);
			URL3='https://phpcis.chshb.gov.tw/api/v1/preventions/batch_complete/create';
			xmlHttp.open( 'POST', URL3, false );
			xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			xmlHttp.send(upjs);
			res3=xmlHttp.responseText;
			jres3=JSON.parse(res3);
			if (jres3.code==200){
				alert('批次完成');
				changeevent=new Event('change', {bubbles: true});
				document.getElementsByClassName('form-control ampInput')[2].dispatchEvent(changeevent);
			} else {
				alert(jres3.message);
			}
		}
	} else {
		alert('請在掛號資訊列表或候診患者查詢使用');
	}
}
function button_autocompletev2_handle(){
ccc=document.URL;
if (ccc=='https://phpcis.chshb.gov.tw/populanceRegistration'){
	url_visittype='https://phpcis.chshb.gov.tw/api/v1/visit_types/list_visibility';
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url_visittype, false );
	xmlHttp.send();
	res_visittype=xmlHttp.responseText;
	json_visittype=JSON.parse(res_visittype);
	visittypelist={};
	url_freq_orders='https://phpcis.chshb.gov.tw/api/v1/freq_orders/list';
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url_freq_orders, false );
	xmlHttp.send();
	res_freq_orders=xmlHttp.responseText;
	json_freq_orders=JSON.parse(res_freq_orders);
	if (document.getElementById('myDraggable_2')){
		document.getElementById('myDraggable_2').remove();
		createmyDraggable_2();
	} else {
		createmyDraggable_2();
	}
} else {
	alert('需在候診患者查詢使用');
}


function createmyDraggable_2(){
	var myDraggable_2 = document.createElement('div');
	myDraggable_2.id='myDraggable_2';
	myDraggable_2.style.width = '450px';
	myDraggable_2.style.background = '#f9f9f9';
	myDraggable_2.style.border = '1px solid #ccc';
	myDraggable_2.style.position = 'absolute';
	myDraggable_2.style.cursor = 'move';
	myDraggable_2.style.zIndex = '9999';
	myDraggable_2.style.left=Math.ceil(window.innerWidth/2-225) +'px';
	myDraggable_2.style.top = 300 +'px';
	document.body.insertBefore(myDraggable_2,document.body.firstChild);
	myDraggable_2.addEventListener('mousedown', function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
	var line1 = document.createElement('div');
	line1.textContent='身分代號';
	myDraggable_2.appendChild(line1);
	var visittypecombo = document.createElement('select');
	visittypecombo.id='visittypecombo';
	visittypecombo.style.width = '250px';
	for (i=0;i<json_visittype.result.length;i++){
		newOption = document.createElement('option');
		visitTypeCode=json_visittype.result[i].visitTypeCode;
		visitTypeName=json_visittype.result[i].visitTypeName;
		newOption.text =visitTypeCode+' '+visitTypeName;
		newOption.value=visitTypeName;
		visittypecombo.appendChild(newOption);
	}
	line1.appendChild(visittypecombo);
	var confirmbutton = document.createElement('button');
	confirmbutton.id='confirmbutton';
	confirmbutton.textContent='確定執行';
	confirmbutton.style.height = '50px';
	confirmbutton.style.left = '315px';
	confirmbutton.style.position = 'absolute';
	confirmbutton.addEventListener('click', confirmbutton_handle);
	line1.appendChild(confirmbutton);
	var exitbutton = document.createElement('button');
	exitbutton.id='exitbutton';
	exitbutton.textContent='關閉';
	exitbutton.style.height = '50px';
	exitbutton.style.left = '398px';
	exitbutton.style.position = 'absolute';
	exitbutton.addEventListener('click', exitbutton_handle);
	line1.appendChild(exitbutton);
	
	var line2 = document.createElement('div');
	line2.textContent='標準處方';
	myDraggable_2.appendChild(line2);
	var ordercombo = document.createElement('select');
	ordercombo.id='ordercombo';
	ordercombo.style.width = '250px';
	for (i2=0;i2<json_freq_orders.result.length;i2++){
		newOption = document.createElement('option');
		freqOrderCode=json_freq_orders.result[i2].freqOrderCode;
		freqOrderName=json_freq_orders.result[i2].freqOrderName;
		freqOrderId=json_freq_orders.result[i2].freqOrderId;
		newOption.text =freqOrderCode+' : '+freqOrderName;
		newOption.value=freqOrderId;
		ordercombo.appendChild(newOption);
	}
	line2.appendChild(ordercombo);
	ordercombo.addEventListener('change', ordercombo_change);
	var line3 = document.createElement('div');
	line3.id='line3';
	line3.textContent='主診斷:';
	myDraggable_2.appendChild(line3);
	var line4 = document.createElement('div');
	line4.id='line4';
	line4.textContent='處方:';
	myDraggable_2.appendChild(line4);
	ordercombo_change();
	
	
	function confirmbutton_handle(){
		tb=document.getElementsByClassName('table table-striped table-bordered table-sm role-list__role-table commonTable')[0];
		array_patient=[];
		if (tb.rows[1].cells.length>2){
			for (i9=1;i9<tb.rows.length;i9++){
				visittype=tb.rows[i9].cells[7].textContent;
				href=tb.rows[i9].cells[4].children[0].href.split('/');
				registrationId=href[href.length-1];
				if (visittype.includes(visittypecombo.value)){
					array_patient.push(registrationId);
				}
			}
		}
		if (array_patient.length>0){
			if (json_orderdetail.result.diseases.length>0){
				if (json_orderdetail.result.FreqOrderPrescription.length>0){
					if (confirm(visittypecombo.value+' 身份別共 '+array_patient.length+' 位，是否執行?')){
						autocomplete();
					}
				} else {
					alert('該標準處方無處置');
				}
			} else {
				alert('該標準處方無診斷');
			}
		} else {
			alert('該身分別無個案')
		}
	}
	function autocomplete(){
		errmsg='';
		for (i3=0;i3<array_patient.length;i3++){
			registrationId=array_patient[i3];
			url_registrationId='https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId;
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET', url_registrationId, false );
			xmlHttp.send();
			res_registrations=xmlHttp.responseText;
			jres_registrations=JSON.parse(res_registrations);
			url_health_records='https://phpcis.chshb.gov.tw/api/v1/health_records/find?registrationId='+registrationId;
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET', url_health_records, false );
			xmlHttp.send();
			res_health_records=xmlHttp.responseText;
			jres_health_records=JSON.parse(res_health_records);
			forinjectdate={};
			forinjectdate['CC']=json_orderdetail.result.CC;
			forinjectdate['PE']=json_orderdetail.result.PE;
			
			
			forinjectdate['abnormalTreatmentSeqNo']=null;
			forinjectdate['benefitTypeCode']=jres_registrations.result.benefitTypeCode;
			forinjectdate['benefitTypeId']=jres_registrations.result.benefitTypeId;
			forinjectdate['bmi']=jres_health_records.result.bmi*1;
			if (jres_registrations.result.caseTypeId==16){
				forinjectdate['caseTypeId']=23;
				forinjectdate['caseTypeCode']='09';
			} else {
				forinjectdate['caseTypeId']=jres_registrations.result.caseTypeId;
				forinjectdate['caseTypeCode']=jres_registrations.result.caseTypeCode;
			}
			forinjectdate['clinicId']=json_freq_orders.result[0].clinicId;
			forinjectdate['codContent']=jres_health_records.result.codContent;
			forinjectdate['courseHealthRecordId']=jres_health_records.result.courseHealthRecordId;
			forinjectdate['dbp']=jres_health_records.result.dbp*1;
			forinjectdate['diseases']=[];
			for (i4=0;i4<json_orderdetail.result.diseases.length;i4++){
				tempdisease={};
				tempdisease['ICD10Code']=json_orderdetail.result.diseases[i4].ICD10Code;
				tempdisease['diseaseId']=json_orderdetail.result.diseases[i4].diseaseId;
				tempdisease['isChronic']=json_orderdetail.result.diseases[i4].isChronic;
				if (i4==0){
					tempdisease['isMaster']=true;
				} else {
					tempdisease['isMaster']=false;
				}
				forinjectdate['diseases'].push(tempdisease);
			}
			forinjectdate['dispensingType']=null;
			forinjectdate['glucoseAC']=jres_health_records.result.glucoseAC*1;
			forinjectdate['glucosePC']=jres_health_records.result.glucosePC*1;
			forinjectdate['healthRecordId']=jres_health_records.result.healthRecordId;
			forinjectdate['height']=jres_health_records.result.height*1;
			forinjectdate['homeCareType']=jres_health_records.result.homeCareType;
			forinjectdate['isAutoCorrect']=jres_health_records.result.isAutoCorrect;
			forinjectdate['isChronicPrescription']=jres_health_records.result.isChronicPrescription;
			forinjectdate['isEmergencyVisit']=jres_health_records.result.isEmergencyVisit;
			forinjectdate['isIncludeFamilyCare']=jres_health_records.result.isIncludeFamilyCare;
			forinjectdate['isICCardWritten']=jres_registrations.result.isICCard;
			forinjectdate['personalInfoId']=jres_health_records.result.personalInfoId;
			forinjectdate['physicalExamHistoryId']=jres_health_records.result.physicalExamHistoryId;
			forinjectdate['prescriptionDeadline']=jres_health_records.result.prescriptionDeadline;
			forinjectdate['prescriptionNo']=jres_health_records.result.prescriptionNo;
			forinjectdate['prescriptionReuseTimes']=jres_health_records.result.prescriptionReuseTimes;
			forinjectdate['prescriptionType']=jres_health_records.result.prescriptionType;
			forinjectdate['prescriptions']=[];
			for (i5=0;i5<json_orderdetail.result.FreqOrderPrescription.length;i5++){
				tempprescription={};
				tempprescription['bureauTestCode']=json_orderdetail.result.FreqOrderPrescription[i5].bureauTestCode;
				tempprescription['day']=json_orderdetail.result.FreqOrderPrescription[i5].day;
				tempprescription['description']='';
				tempprescription['drugCode']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionCode;
				tempprescription['drugName']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionName;
				tempprescription['drugRouteId']=json_orderdetail.result.FreqOrderPrescription[i5].drugRouteId;
				tempprescription['drugUsageId']=json_orderdetail.result.FreqOrderPrescription[i5].drugUsageId;
				tempprescription['endTime']=null;
				tempprescription['isApplicable']=json_orderdetail.result.FreqOrderPrescription[i5].isApplicable;
				tempprescription['isChronicPrescription']=json_orderdetail.result.FreqOrderPrescription[i5].isChronicPrescription;
				tempprescription['isSchedule']=false;
				tempprescription['isScheduleCorrection']=false;
				tempprescription['modelType']=json_orderdetail.result.FreqOrderPrescription[i5].modelType;
				tempprescription['ownExpenseSeq']=json_orderdetail.result.FreqOrderPrescription[i5].ownExpenseSeq;
				tempprescription['prescriptionId']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionId;
				tempprescription['prescriptionModel']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionModel;
				tempprescription['qty']=json_orderdetail.result.FreqOrderPrescription[i5].qty;
				if (json_visittype.result[visittypecombo.selectedIndex].isApplicable){
					tempprescription['selfPayType']=json_orderdetail.result.FreqOrderPrescription[i5].selfPayType;
				} else {
					selfPayType=json_orderdetail.result.FreqOrderPrescription[i5].selfPayType;
					if (selfPayType=='*' || selfPayType=='#'){
						tempprescription['selfPayType']=json_orderdetail.result.FreqOrderPrescription[i5].selfPayType;
					} else { 
						tempprescription['selfPayType']='*';
					}
				}
				
				tempprescription['startTime']='';
				tempprescription['testPackageCode']=json_orderdetail.result.FreqOrderPrescription[i5].testPackageCode;
				tempprescription['testPackageId']=json_orderdetail.result.FreqOrderPrescription[i5].testPackageId;
				tempprescription['testPackageName']=json_orderdetail.result.FreqOrderPrescription[i5].testPackageName;
				if (json_orderdetail.result.FreqOrderPrescription[i5].totalQty<1){
					tempprescription['totalQty']=1;
				} else {
					tempprescription['totalQty']=json_orderdetail.result.FreqOrderPrescription[i5].totalQty;
				}
				forinjectdate['prescriptions'].push(tempprescription);
			}
			forinjectdate['pulse']=jres_health_records.result.pulse*1;
			forinjectdate['registrationDate']=jres_registrations.result.date;
			forinjectdate['registrationId']=jres_registrations.result.registrationId;
			forinjectdate['sbp']=jres_registrations.result.sbp;
			forinjectdate['scheduleTest']=null;
			forinjectdate['scheduleTestId']=null;
			forinjectdate['shareCode']=jres_registrations.result.shareCode;
			forinjectdate['shareId']=jres_registrations.result.shareId;
			forinjectdate['supplyReportType']=jres_health_records.result.supplyReportType;
			forinjectdate['transferClinicCode']=jres_health_records.result.transferClinicCode;
			forinjectdate['treatmentEndDate']=jres_registrations.result.date;
			forinjectdate['treatmentTypeId']=jres_registrations.result.treatmentTypeId;
			forinjectdate['visitTypeCode']=jres_registrations.result.visitTypeCode;
			forinjectdate['visitTypeId']=jres_registrations.result.visitTypeId;
			forinjectdate['waist']=null;
			forinjectdate['weight']=jres_health_records.result.weight*1;
			forinjectdate['writeICCard']=jres_registrations.result.isCardCheck;
			forinjectdates=JSON.stringify(forinjectdate);
			url_check_valid='https://phpcis.chshb.gov.tw/api/v1/health_records/check_valid';
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('POST', url_check_valid, false );
			xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			xmlHttp.send(forinjectdates);
			res_check_valid=xmlHttp.responseText;
			jres_check_valid=JSON.parse(res_check_valid);
			if (jres_check_valid.code==200){
				url_update='https://phpcis.chshb.gov.tw/api/v1/health_records/update';
				xmlHttp = new XMLHttpRequest();
				xmlHttp.open('POST', url_update, false );
				xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
				xmlHttp.send(forinjectdates);
				res_update=xmlHttp.responseText;
				jres_update=JSON.parse(res_update);
				if (jres_update.code!=200){
					errmsg=errmsg+'update錯誤，ID:'+registrationId+':'+jres3.message+'\n';
				}
			} else {
				errmsg=errmsg+'valid錯誤，ID:'+registrationId+':'+jres_check_valid.message+'\n';
			}
		}
		if (errmsg==''){
				alert('完成'+array_patient.length+'筆');
				changeevent=new Event('change', {bubbles: true});
				document.getElementsByClassName('form-control ampInput')[2].dispatchEvent(changeevent);
			} else {
				alert(errmsg);
			}
	}
	function exitbutton_handle(){
		document.getElementById('myDraggable_2').remove();
	}
	function ordercombo_change(){
		url_orderdetail='https://phpcis.chshb.gov.tw/api/v1/freq_orders/find?clinicId=4&freqOrderId='+ordercombo.value;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open('GET', url_orderdetail, false );
		xmlHttp.send();
		res_orderdetail=xmlHttp.responseText;
		json_orderdetail=JSON.parse(res_orderdetail);
		if (json_orderdetail.result.diseases.length>0){
			diagnosis=json_orderdetail.result.diseases[0].ICD10Code +' : '+json_orderdetail.result.diseases[0].ICD10Name;
		} else {
			diagnosis='無';
		}
		orderall='';
		if (json_orderdetail.result.FreqOrderPrescription.length>0){
			for (i6=0;i6<json_orderdetail.result.FreqOrderPrescription.length;i6++){
				neworder=json_orderdetail.result.FreqOrderPrescription[i6].applicationId+'_'+json_orderdetail.result.FreqOrderPrescription[i6].prescriptionName;
				if (orderall==''){
					orderall=orderall+neworder;
				} else {
					orderall=orderall+';'+neworder;
				}
			}
		} else {
			orderall='無';
		}
		line3.textContent='主診斷:'+diagnosis;
		line4.textContent='處方:'+orderall;
	}
	function onMouseMove(e) {
		posX = mouseX - e.clientX;
		posY = mouseY - e.clientY;
		mouseX = e.clientX;
		mouseY = e.clientY;
		myDraggable_2.style.left = (myDraggable_2.offsetLeft - posX) + 'px';
		myDraggable_2.style.top = (myDraggable_2.offsetTop - posY) + 'px';
	}
	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}
}
}
function button_autocompletesingle_handle(){
ccc=document.URL;
if (ccc=='https://phpcis.chshb.gov.tw/populanceRegistration'){
	smokefuid="";
	smokefu=['E1023C','E1024C','E1025C','E1026C','E1028C','E1029C']
	url_visittype='https://phpcis.chshb.gov.tw/api/v1/visit_types/list_visibility';
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url_visittype, false );
	xmlHttp.send();
	res_visittype=xmlHttp.responseText;
	json_visittype=JSON.parse(res_visittype);
	transvisittype={};
	for (zz=0;zz<json_visittype.result.length;zz++){
		transvisittype[json_visittype.result[zz].visitTypeCode]=json_visittype.result[zz].isApplicable;
	}
	
	
	url_freq_orders='https://phpcis.chshb.gov.tw/api/v1/freq_orders/list';
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url_freq_orders, false );
	xmlHttp.send();
	res_freq_orders=xmlHttp.responseText;
	json_freq_orders=JSON.parse(res_freq_orders);
	if (document.getElementById('myDraggable_3')){
		document.getElementById('myDraggable_3').remove();
		createmyDraggable_3()
	} else {
		createmyDraggable_3();
	}
} else {
	alert('需在候診患者查詢使用');
}


function createmyDraggable_3(){
	var myDraggable_3 = document.createElement('div');
	myDraggable_3.id='myDraggable_3';
	myDraggable_3.style.width = '450px';
	myDraggable_3.style.background = '#f9f9f9';
	myDraggable_3.style.border = '1px solid #ccc';
	myDraggable_3.style.position = 'absolute';
	myDraggable_3.style.cursor = 'move';
	myDraggable_3.style.zIndex = '9999';
	myDraggable_3.style.left=Math.ceil(window.innerWidth/2-225) +'px';
	myDraggable_3.style.top = 300 +'px';
	document.body.insertBefore(myDraggable_3,document.body.firstChild);
	myDraggable_3.addEventListener('mousedown', function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
	var line1 = document.createElement('div');
	line1.textContent='標準處方';
	line1.style.height = '30px';
	myDraggable_3.appendChild(line1);
	var ordercombo = document.createElement('select');
	ordercombo.style.height = '30px';
	ordercombo.id='ordercombo';
	ordercombo.style.width = '250px';
	for (i2=0;i2<json_freq_orders.result.length;i2++){
		newOption = document.createElement('option');
		freqOrderCode=json_freq_orders.result[i2].freqOrderCode;
		freqOrderName=json_freq_orders.result[i2].freqOrderName;
		freqOrderId=json_freq_orders.result[i2].freqOrderId;
		newOption.text =freqOrderCode+' : '+freqOrderName;
		newOption.value=freqOrderId;
		ordercombo.appendChild(newOption);
	}
	line1.appendChild(ordercombo);
	ordercombo.addEventListener('change', ordercombo_change);
	var confirmbutton = document.createElement('button');
	confirmbutton.id='confirmbutton';
	confirmbutton.textContent='帶入處方';
	confirmbutton.style.height = '30px';
	confirmbutton.style.left = '315px';
	confirmbutton.style.position = 'absolute';
	confirmbutton.addEventListener('click', confirmbutton_handle);
	line1.appendChild(confirmbutton);
	var exitbutton = document.createElement('button');
	exitbutton.id='exitbutton';
	exitbutton.textContent='關閉';
	exitbutton.style.height = '30px';
	exitbutton.style.left = '398px';
	exitbutton.style.position = 'absolute';
	exitbutton.addEventListener('click', exitbutton_handle);
	line1.appendChild(exitbutton);
	
	var line3 = document.createElement('div');
	line3.id='line3';
	line3.textContent='主診斷:';
	myDraggable_3.appendChild(line3);
	var line4 = document.createElement('div');
	line4.id='line4';
	line4.textContent='處方:';
	myDraggable_3.appendChild(line4);
	ordercombo_change();
	
	
	function confirmbutton_handle(){
		tb=document.getElementsByClassName('table table-striped table-bordered table-sm role-list__role-table commonTable')[0];
		array_patient=[];
		if (tb.rows[1].cells.length>2){
			for (i9=1;i9<tb.rows.length;i9++){
				if (tb.rows[i9].cells[0].children[0].checked){
					href=tb.rows[i9].cells[4].children[0].href.split('/');
					p_name=tb.rows[i9].cells[4].textContent;
					p_visittype=tb.rows[i9].cells[7].textContent
					registrationId=href[href.length-1];
					array_patient.push(registrationId);
				}
			}
		}
		if (array_patient.length==1){
			if (json_orderdetail.result.diseases.length>0){
				if (json_orderdetail.result.FreqOrderPrescription.length>0){
					hadsmokefu=false;
					for (let i=0;i<json_orderdetail.result.FreqOrderPrescription.length;i++){
						if (smokefu.includes(json_orderdetail.result.FreqOrderPrescription[i].applicationId)){
							hadsmokefu=true;
							break;
						}
					}
					if (confirm('是否將處方帶入個案'+p_name+'，身分別:'+p_visittype+'?')){
						if (hadsmokefu){
							smokefuid=prompt('請輸入戒菸追蹤人員ID',smokefuid)
						}
						autocomplete();
					}
				} else {
					alert('該標準處方無處置');
				}
			} else {
				alert('該標準處方無診斷');
			}
		} else {
			alert('無選擇個案')
		}
	}
	function autocomplete(){
		errmsg='';
		for (i3=0;i3<array_patient.length;i3++){
			registrationId=array_patient[i3];
			url_registrationId='https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId='+registrationId;
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET', url_registrationId, false );
			xmlHttp.send();
			res_registrations=xmlHttp.responseText;
			jres_registrations=JSON.parse(res_registrations);
			url_health_records='https://phpcis.chshb.gov.tw/api/v1/health_records/find?registrationId='+registrationId;
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET', url_health_records, false );
			xmlHttp.send();
			res_health_records=xmlHttp.responseText;
			jres_health_records=JSON.parse(res_health_records);
			forinjectdate={};
			forinjectdate['CC']=json_orderdetail.result.CC;
			forinjectdate['PE']=json_orderdetail.result.PE;
			
			
			forinjectdate['abnormalTreatmentSeqNo']=null;
			forinjectdate['benefitTypeCode']=jres_registrations.result.benefitTypeCode;
			forinjectdate['benefitTypeId']=jres_registrations.result.benefitTypeId;
			forinjectdate['bmi']=jres_health_records.result.bmi*1;
			if (jres_registrations.result.caseTypeId==16){
				forinjectdate['caseTypeId']=23;
				forinjectdate['caseTypeCode']='09';
			} else {
				forinjectdate['caseTypeId']=jres_registrations.result.caseTypeId;
				forinjectdate['caseTypeCode']=jres_registrations.result.caseTypeCode;
			}
			
			
			forinjectdate['caseTypeId']=jres_registrations.result.caseTypeId;
			forinjectdate['clinicId']=json_freq_orders.result[0].clinicId;
			forinjectdate['codContent']=jres_health_records.result.codContent;
			forinjectdate['courseHealthRecordId']=jres_health_records.result.courseHealthRecordId;
			forinjectdate['dbp']=jres_health_records.result.dbp*1;
			forinjectdate['diseases']=[];
			for (i4=0;i4<json_orderdetail.result.diseases.length;i4++){
				tempdisease={};
				tempdisease['ICD10Code']=json_orderdetail.result.diseases[i4].ICD10Code;
				tempdisease['diseaseId']=json_orderdetail.result.diseases[i4].diseaseId;
				tempdisease['isChronic']=json_orderdetail.result.diseases[i4].isChronic;
				if (i4==0){
					tempdisease['isMaster']=true;
				} else {
					tempdisease['isMaster']=false;
				}
				forinjectdate['diseases'].push(tempdisease);
			}
			forinjectdate['dispensingType']=null;
			forinjectdate['glucoseAC']=jres_health_records.result.glucoseAC*1;
			forinjectdate['glucosePC']=jres_health_records.result.glucosePC*1;
			forinjectdate['healthRecordId']=jres_health_records.result.healthRecordId;
			forinjectdate['height']=jres_health_records.result.height*1;
			forinjectdate['homeCareType']=jres_health_records.result.homeCareType;
			forinjectdate['isAutoCorrect']=jres_health_records.result.isAutoCorrect;
			forinjectdate['isChronicPrescription']=jres_health_records.result.isChronicPrescription;
			forinjectdate['isEmergencyVisit']=jres_health_records.result.isEmergencyVisit;
			forinjectdate['isIncludeFamilyCare']=jres_health_records.result.isIncludeFamilyCare;
			forinjectdate['isICCardWritten']=jres_registrations.result.isICCard;
			forinjectdate['personalInfoId']=jres_health_records.result.personalInfoId;
			forinjectdate['physicalExamHistoryId']=jres_health_records.result.physicalExamHistoryId;
			forinjectdate['prescriptionDeadline']=jres_health_records.result.prescriptionDeadline;
			forinjectdate['prescriptionNo']=jres_health_records.result.prescriptionNo;
			forinjectdate['prescriptionReuseTimes']=jres_health_records.result.prescriptionReuseTimes;
			forinjectdate['prescriptionType']=jres_health_records.result.prescriptionType;
			forinjectdate['prescriptions']=[];
			for (i5=0;i5<json_orderdetail.result.FreqOrderPrescription.length;i5++){
				tempprescription={};
				if (smokefu.includes(json_orderdetail.result.FreqOrderPrescription[i5].applicationId)){
					if (smokefuid!="" && smokefuid!=null){
						tempprescription['doctorVisitRemark']=smokefuid;
					}
				}
				tempprescription['bureauTestCode']=json_orderdetail.result.FreqOrderPrescription[i5].bureauTestCode;
				tempprescription['day']=json_orderdetail.result.FreqOrderPrescription[i5].day;
				tempprescription['description']='';
				tempprescription['drugCode']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionCode;
				tempprescription['drugName']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionName;
				tempprescription['drugRouteId']=json_orderdetail.result.FreqOrderPrescription[i5].drugRouteId;
				tempprescription['drugUsageId']=json_orderdetail.result.FreqOrderPrescription[i5].drugUsageId;
				tempprescription['endTime']=null;
				tempprescription['isApplicable']=json_orderdetail.result.FreqOrderPrescription[i5].isApplicable;
				tempprescription['isChronicPrescription']=json_orderdetail.result.FreqOrderPrescription[i5].isChronicPrescription;
				tempprescription['isSchedule']=false;
				tempprescription['isScheduleCorrection']=false;
				tempprescription['modelType']=json_orderdetail.result.FreqOrderPrescription[i5].modelType;
				tempprescription['ownExpenseSeq']=json_orderdetail.result.FreqOrderPrescription[i5].ownExpenseSeq;
				tempprescription['prescriptionId']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionId;
				tempprescription['prescriptionModel']=json_orderdetail.result.FreqOrderPrescription[i5].prescriptionModel;
				tempprescription['qty']=json_orderdetail.result.FreqOrderPrescription[i5].qty;
				if (transvisittype[jres_registrations.result.visitTypeCode]){
					tempprescription['selfPayType']=json_orderdetail.result.FreqOrderPrescription[i5].selfPayType;
				} else {
					selfPayType=json_orderdetail.result.FreqOrderPrescription[i5].selfPayType;
					if (selfPayType=='*' || selfPayType=='#'){
						tempprescription['selfPayType']=json_orderdetail.result.FreqOrderPrescription[i5].selfPayType;
					} else { 
						tempprescription['selfPayType']='*';
					}
				}
				
				tempprescription['startTime']='';
				tempprescription['testPackageCode']=json_orderdetail.result.FreqOrderPrescription[i5].testPackageCode;
				tempprescription['testPackageId']=json_orderdetail.result.FreqOrderPrescription[i5].testPackageId;
				tempprescription['testPackageName']=json_orderdetail.result.FreqOrderPrescription[i5].testPackageName;
				if (json_orderdetail.result.FreqOrderPrescription[i5].totalQty<1){
					tempprescription['totalQty']=1;
				} else {
					tempprescription['totalQty']=json_orderdetail.result.FreqOrderPrescription[i5].totalQty;
				}
				forinjectdate['prescriptions'].push(tempprescription);
			}
			forinjectdate['pulse']=jres_health_records.result.pulse*1;
			forinjectdate['registrationDate']=jres_registrations.result.date;
			forinjectdate['registrationId']=jres_registrations.result.registrationId;
			forinjectdate['sbp']=jres_registrations.result.sbp;
			forinjectdate['scheduleTest']=null;
			forinjectdate['scheduleTestId']=null;
			forinjectdate['shareCode']=jres_registrations.result.shareCode;
			forinjectdate['shareId']=jres_registrations.result.shareId;
			forinjectdate['supplyReportType']=jres_health_records.result.supplyReportType;
			forinjectdate['transferClinicCode']=jres_health_records.result.transferClinicCode;
			forinjectdate['treatmentEndDate']=jres_registrations.result.date;
			forinjectdate['treatmentTypeId']=jres_registrations.result.treatmentTypeId;
			forinjectdate['visitTypeCode']=jres_registrations.result.visitTypeCode;
			forinjectdate['visitTypeId']=jres_registrations.result.visitTypeId;
			forinjectdate['waist']=null;
			forinjectdate['weight']=jres_health_records.result.weight*1;
			forinjectdate['writeICCard']=jres_registrations.result.isCardCheck;
			forinjectdates=JSON.stringify(forinjectdate);
			url_check_valid='https://phpcis.chshb.gov.tw/api/v1/health_records/check_valid';
			xmlHttp = new XMLHttpRequest();
			xmlHttp.open('POST', url_check_valid, false );
			xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
			xmlHttp.send(forinjectdates);
			res_check_valid=xmlHttp.responseText;
			jres_check_valid=JSON.parse(res_check_valid);
			if (jres_check_valid.code==200){
				url_update='https://phpcis.chshb.gov.tw/api/v1/health_records/update';
				xmlHttp = new XMLHttpRequest();
				xmlHttp.open('POST', url_update, false );
				xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
				xmlHttp.send(forinjectdates);
				res_update=xmlHttp.responseText;
				jres_update=JSON.parse(res_update);
				if (jres_update.code!=200){
					errmsg=errmsg+'update錯誤，ID:'+registrationId+':'+jres3.message+'\n';
				}
			} else {
				errmsg=errmsg+'valid錯誤，ID:'+registrationId+':'+jres_check_valid.message+'\n';
			}
		}
		if (errmsg==''){
			alert('標準處方帶入完成');
			changeevent=new Event('change', {bubbles: true});
			document.getElementsByClassName('form-control ampInput')[2].dispatchEvent(changeevent);
		} else {
			alert(errmsg);
		}
	}
	function exitbutton_handle(){
		document.getElementById('myDraggable_3').remove();
	}
	function ordercombo_change(){
		url_orderdetail='https://phpcis.chshb.gov.tw/api/v1/freq_orders/find?clinicId=4&freqOrderId='+ordercombo.value;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open('GET', url_orderdetail, false );
		xmlHttp.send();
		res_orderdetail=xmlHttp.responseText;
		json_orderdetail=JSON.parse(res_orderdetail);
		if (json_orderdetail.result.diseases.length>0){
			diagnosis=json_orderdetail.result.diseases[0].ICD10Code +' : '+json_orderdetail.result.diseases[0].ICD10Name;
		} else {
			diagnosis='無';
		}
		orderall='';
		if (json_orderdetail.result.FreqOrderPrescription.length>0){
			for (i6=0;i6<json_orderdetail.result.FreqOrderPrescription.length;i6++){
				neworder=json_orderdetail.result.FreqOrderPrescription[i6].applicationId+'_'+json_orderdetail.result.FreqOrderPrescription[i6].prescriptionName;
				if (orderall==''){
					orderall=orderall+neworder;
				} else {
					orderall=orderall+';'+neworder;
				}
			}
		} else {
			orderall='無';
		}
		line3.textContent='主診斷:'+diagnosis;
		line4.textContent='處方:'+orderall;
	}
	function onMouseMove(e) {
		posX = mouseX - e.clientX;
		posY = mouseY - e.clientY;
		mouseX = e.clientX;
		mouseY = e.clientY;
		myDraggable_3.style.left = (myDraggable_3.offsetLeft - posX) + 'px';
		myDraggable_3.style.top = (myDraggable_3.offsetTop - posY) + 'px';
	}
	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	}
}
}
function button_listdelete_handle(){
	ccc=document.URL;
	if (ccc=='https://phpcis.chshb.gov.tw/populanceRegistration'){
		xmlHttp = new XMLHttpRequest();
		if (document.getElementById('uncontrolled-tab-example-tab-consulted').getAttribute('aria-selected')=='true'){
			registrationId=getselectedpatient(1);
			if (registrationId){
				jres=getregdata(registrationId);
				ans=confirm('姓名:'+jres.result.name+'\n身分證:'+jres.result.personalId+'\n身分代碼:'+jres.result.visitTypeCode+'\n是否刪除看診紀錄?');
				if (ans){
					delopd(jres);
					reflash();
				}
			} else {
				alert('無選擇個案')
			}
		} else {
			registrationId=getselectedpatient(0);
			if (registrationId){
				jres=getregdata(registrationId);
				ans=confirm('姓名:'+jres.result.name+'\n身分證:'+jres.result.personalId+'\n身分代碼:'+jres.result.visitTypeCode+'\n是否刪除掛號紀錄?');
				if (ans){
					delreg(registrationId);
					reflash();
				}
			} else {
				alert('無選擇個案')
			}
		}
	} else {
		alert('需到候診患者查詢頁面');
	}
	function getselectedpatient(ord){
		tb=document.getElementsByClassName('table table-striped table-bordered table-sm role-list__role-table commonTable')[ord];
		array_patient=[];
		if (tb.rows[1].cells.length>2){
			for (let i=1;i<tb.rows.length;i++){
				if (tb.rows[i].cells[0].children[0].checked){
					href=tb.rows[i].cells[4].children[0].href.split('/');
					p_name=tb.rows[i].cells[4].textContent;
					p_visittype=tb.rows[i].cells[7].textContent
					registrationId=href[href.length-1];
					array_patient.push(registrationId);
				}
			}
		}
		if (array_patient.length!=1){
			return false;
		} else {
			return array_patient[0]
		}
	}
	function getregdata(registrationId){
		period=document.getElementById('period').value;
		shiftId=document.getElementById('shiftId').value;
		url="https://phpcis.chshb.gov.tw/api/v1/registrations/find?registrationId="+registrationId;
		xmlHttp.open('GET', url, false );
		xmlHttp.send();
		res=xmlHttp.responseText;
		jres=JSON.parse(res);
		return jres
	}
	function delreg(registrationId){
		payload={};
		payload['registrationId']=registrationId*1;
		payloads=JSON.stringify(payload);
		delurl="https://phpcis.chshb.gov.tw/api/v1/registrations/delete";
		xmlHttp.open('POST', delurl, false );
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xmlHttp.send(payloads);
		delres=xmlHttp.responseText;
		jdelres=JSON.parse(delres);
		if (jdelres.code==200){
			alert('刪除成功');
		} else {
			alert(jdelres.message)
		}
	}
	function delopd(jres){
		payload={};
		payload['date']=jres.result.date;
		payload['healthRecordId']=jres.result.healthRecordId;
		payload['period']=jres.result.period;
		payload['shiftId']=jres.result.shiftId;
		payloads=JSON.stringify(payload);
		delurl="https://phpcis.chshb.gov.tw/api/v1/health_records/delete";
		xmlHttp.open('POST', delurl, false );
		xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xmlHttp.send(payloads);
		delres=xmlHttp.responseText;
		jdelres=JSON.parse(delres);
		if (jdelres.code==200){
			alert('刪除成功');
		} else {
			alert(jdelres.message)
		}
	}
	function reflash(){
		changeevent=new Event('change', {bubbles: true});
		document.getElementById('shiftId').dispatchEvent(changeevent);
	}
}
function button_fastreg_handle(){
	cc=document.URL;
	d1='https://phpcis.chshb.gov.tw/registration/create';
	d2='https://phpcis.chshb.gov.tw/registration';
	changeevent=new Event('change', {bubbles: true});
	alllist=[];
	if (cc.includes('https://phpcis.chshb.gov.tw')){
		thecode=document.getElementById('input_fasttype').value;
		if (thecode!=''){ 
			if (cc!=d2){
				if (cc==d1){
					alllist=document.getElementsByClassName('form-control ampInput');
					age=new Date().getFullYear()-1911-document.getElementsByClassName('form-control ampInput')[2].value.split('-')[0];
					popup=document.getElementsByClassName('modal-content');
					if (popup.length>0){
						if (popup[1]){
							popup[1].getElementsByClassName('btn btn-secondary')[0].click();
						}
						if (popup[0]){
							popup[0].getElementsByClassName('col-xl-1 col-lg-1')[0].children[0].click();
						}
					}
				} else {
					sidebarlist=document.getElementsByClassName('sidebar__nav')[0].children;
					for (i=0;i<sidebarlist.length;i++){
						if (sidebarlist[i].textContent=='掛號'){
							sidebarlist[i].click();
							break;
						}
					}
				}
				find=false;
				for (i=0;i<alllist.length;i++){
					if (alllist[i].id=='visitTypeId'){
						targetelement=alllist[i];
						find=true;
					} else if (alllist[i].name=='prevention'){
						targetelement2=alllist[i];
					} else if (alllist[i].name=='preventionId'){
						targetelement3=alllist[i];
					}
				}
				if (find){
					thecode=thecode.toString();
					if (thecode=='691'){
						if (cc==d1){
							for (i=0;i<targetelement.options.length;i++){
								if (targetelement.options[i].text.includes('69')){
									targetelement.options[i].selected=true;
									targetelement.dispatchEvent(changeevent);
									break;
								}
							}
							targetelement2.value='02';
							targetelement2.dispatchEvent(changeevent);
							if (age>64){
								targetelement3.value='10';
								targetelement3.dispatchEvent(changeevent);
							} else {
								targetelement3.value='8';
								targetelement3.dispatchEvent(changeevent);
							}
						} else {
							alert('請在新增掛號時使用');
						}
					} else if (thecode=='692'){
						if (cc==d1){
							for (i=0;i<targetelement.options.length;i++){
								if (targetelement.options[i].text.includes('69')){
									targetelement.options[i].selected=true;
									targetelement.dispatchEvent(changeevent);
									break;
								}
							}
							targetelement2.value='02';
							targetelement2.dispatchEvent(changeevent);
							if (age>64){
								targetelement3.value='11';
								targetelement3.dispatchEvent(changeevent);
							} else {
								targetelement3.value='9';
								targetelement3.dispatchEvent(changeevent);
							}
						} else {
							alert('請在新增掛號時使用');
						}
					} else {
						
						for (i=0;i<targetelement.options.length;i++){
							if (targetelement.options[i].text.includes(thecode)){
								targetelement.options[i].selected=true;
								targetelement.dispatchEvent(changeevent);
								break;
							}
						}
					}
					document.getElementsByClassName('ampRegistationBtn btn btn-danger')[0].click();
				} 
			} else {
				document.getElementsByClassName('commonBtn ampCommonBtn btn btn-info')[0].click();
			}
		} else {
			alert('未輸入身分別');
		}
	} else {
		alert('請在PHPCIIS網域中使用');
	}
}
function button_checkpreexam_handle(){
	ccc=document.URL;
	let targetpersonalID="";
	if (ccc=='https://phpcis.chshb.gov.tw/registration'){
		radiolist=document.querySelectorAll('input[type="radio"]');
		for (let i=0; i < radiolist.length; i++){
			if (radiolist[i].checked){
				if (radiolist[i].getBoundingClientRect().height>0){
					targetpersonalID=radiolist[i].parentElement.parentElement.children[3].textContent;
					break
				}
			}
		}
	} else if (ccc.includes('https://phpcis.chshb.gov.tw/registration/') || ccc=='https://phpcis.chshb.gov.tw/registration/create'){
		targetpersonalID=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div > div > input").value;
	}
	if (targetpersonalID!=""){
		let newbas=idtoinfoid(targetpersonalID);
		let personalInfoId=newbas.personalInfoId;
		let name=newbas.name;
		let personalId=newbas.personalId;
		preexammsg='';
		let today = new Date();
		let pastDate = new Date(today);
		pastDate.setDate(today.getDate() - 180);
		function formatDate(date) {
			let year = date.getFullYear();
			let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份從0開始，需+1
			let day = date.getDate().toString().padStart(2, '0');
			return `${year}-${month}-${day}`;
		}
		preexamurl='https://phpcis.chshb.gov.tw/api/v1/schedule_tests/list?personalInfoId='+personalInfoId+'&createdStartDate='+formatDate(pastDate)+'&createdEndDate='+formatDate(today);
		respreexam=httpGet(preexamurl);
		jrespreexam=JSON.parse(respreexam);
		if (jrespreexam.result.length>0){
			OPD_preexam='OPD_preexam';
			OPD_preexamdata=jrespreexam;
			ahkcallfunction(OPD_preexam,OPD_preexamdata);
		} else {
			alert(name+'無6個月內開立預檢單');
		}
	} else {
		alert('請選擇個案');
	}
}

function idtoinfoid(personalId){
	let url = 'https://phpcis.chshb.gov.tw/api/v1/personal_infos/list_with_registration?search=true&personalId='+personalId;
	let res = httpGet(url);
	let jres = JSON.parse(res);
	if (jres.result.length==1){
		return jres.result[0]
	} else {
		return false
	}
}
function button_printlabel_handle(){
	ccc=document.URL;
	let targetpersonalID="";
	if (ccc=='https://phpcis.chshb.gov.tw/registration'){
		radiolist=document.querySelectorAll('input[type="radio"]');
		for (let i=0; i < radiolist.length; i++){
			if (radiolist[i].checked){
				if (radiolist[i].getBoundingClientRect().height>0){
					targetpersonalID=radiolist[i].parentElement.parentElement.children[3].textContent;
					break
				}
			}
		}
	} else if (ccc.includes('https://phpcis.chshb.gov.tw/registration/') || ccc=='https://phpcis.chshb.gov.tw/registration/create'){
		targetpersonalID=document.querySelector("#root > div.wrapper > main > div > form > div:nth-child(1) > div:nth-child(4) > div > div > input").value;
	}
	if (targetpersonalID!=""){
		let newbas=idtoinfoid(targetpersonalID);
		let personalInfoId=newbas.personalInfoId;
		let name=newbas.name;
		let personalId=newbas.personalId;
		infourl='https://phpcis.chshb.gov.tw/api/v1/personal_infos/find';
		postdata={
			isNHICard:false,
			personalId:personalId,
		}
		resinfo=httpPost(infourl,postdata);
		reg_json=JSON.parse(resinfo);
		
		let bir=reg_json["result"]["birthday"];
		let abir=bir.split('-');
		let y1=abir[0];
		let phAge=new Date().getFullYear()-y1*1;
		let m1=abir[1];
		let d1=abir[2];
		let mky=y1*1-1911
		mky="000"+mky;
		mky=mky.substring(mky.length-3,mky.length);
		if (reg_json["result"]["gender"]=="1"){
			thegender="男"
		} else {
			thegender="女"
		}
		let phBIR=mky+'/'+m1+'/'+d1;
		let plaintext = "X015,"+reg_json["result"]["personalId"]+','+reg_json["result"]["bureauRecordNo"]+','+reg_json["result"]["name"]+','+phBIR+','+thegender+','+phAge+','+reg_json["result"]["phone"]+','+reg_json["result"]["mobile"]+','+reg_json["result"]["residentAddress"];
		let key='23792004';
		let encrypted = SNCoding(plaintext, key);
		OPD_label='OPD_label';
		OPD_labeldata={
			infodata:reg_json,
			des:encrypted,
		};
		ahkcallfunction(OPD_label,OPD_labeldata);
	} else {
		alert('請選擇個案');
	}
}
function button_countvaccine_handle(){
	ccc=document.URL;
	d2='https://phpcis.chshb.gov.tw/registration';
	if (ccc==d2){
		t6z=0;
		t6f=0;
		t6v=0;
		t7w=0;
		t7z=0;
		t7y=0;
		t7z=0;
		t7t=0;
		sb=document.querySelector('table');
		if (sb.textContent.includes('無資料')){
			alert('無掛號');
		} else {
			for (i=0;i<sb.rows[0].cells.length;i++){
				if (sb.rows[0].cells[i].innerText=='身分證號'){
					theidc=i;
				} 
				if (sb.rows[0].cells[i].innerText=='姓名'){
					thenamec=i;
				} 
				if (sb.rows[0].cells[i].innerText=='身分'){
					thetypec=i;
				} 
			}
			for (i=1;i<sb.rows.length;i++){
				if (sb.rows[i].cells[thetypec].textContent.includes('6Z')){
					t6z+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('6F')){
					t6f+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('6V')){
					t6v+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('6Z')){
					t6z+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('7T')){
					t7t+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('7W')){
					t7w+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('7X')){
					t7y+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('7Y')){
					t7y+=1
				} else if (sb.rows[i].cells[thetypec].textContent.includes('7Z')){
					t7z+=1
				}  
			}
			fall=t6z+t7w+t7z;
			jjjj='流感共'+fall+'支，含\n\t公費流感:'+t6z+'支\n\t流感學生:'+t7w+'支\n\t縣購流感:'+t7z+'支\n公費PCV13:'+t6f+'支\n公費PPV23:'+t6v+'支\n縣購肺鏈:'+t7y+'支\n新冠疫苗'+t7t+'支';
			alert(jjjj);
			
		}
	} else {
		alert('請在掛號列表中使用')
	}
}

function SNCoding(typeString1, sKey = "23792004") {
	var key = CryptoJS.enc.Utf8.parse(sKey);
	var iv = CryptoJS.enc.Utf8.parse(sKey);
	var encrypted = CryptoJS.DES.encrypt(typeString1, key, {
		iv: iv,
		padding: CryptoJS.pad.Pkcs7,
		mode: CryptoJS.mode.CBC
	});

	var encryptedHex = encrypted.ciphertext.toString(CryptoJS.enc.Hex).toUpperCase();
	return encryptedHex;
}

function toline(){
try {
	observer.disconnect();
	observer2.disconnect();
} catch (e){
	
} finally {
	thefind=false;
	const observer = new MutationObserver((mutationsList, observer) => {
		for (let mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const ht=document.querySelector("#root > div.wrapper > main > div > div:nth-child(11) > div > div > div:nth-child(2) > div > table");
				if (ht) {
					if (ht.rows.length>2){
						if (!thefind){
							if (ht.offsetWidth>0){
								if (ht.rows[1].cells.length>3){
									thefind=true;
									for (i=0;i<ht.rows.length;i++){
										if (ht.rows[i].cells.length>5){
											item5=ht.rows[i].cells[5].textContent;
											ht.rows[i].cells[5].textContent=item5.substring(0,100);
										}
										if (ht.rows[i].cells.length>7){
											ht.rows[i].cells[7].remove();
										}
										if (ht.rows[i].cells.length>6){
											ht.rows[i].cells[6].remove();
										}
									}
								}
							}
						}
					} else {
						thefind=false;
					}
				} else {
					thefind=false;
				}
			}
		}
	});
	const config = { childList: true, subtree: true };
	observer.observe(document.body, config);
	thefind2=false;
	const observer2 = new MutationObserver((mutationsList, observer) => {
		for (let mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const ht2=document.querySelector("#root > div.wrapper > main > div > div:nth-child(10) > div > div > div:nth-child(2) > div > table");
				if (ht2) {
					if (ht2.rows.length>2){
						if (!thefind2){
							if (ht2.offsetWidth>0){
								if (ht2.rows[1].cells.length>3){
									thefind2=true;
									for (i=0;i<ht2.rows.length;i++){
										if (ht2.rows[i].cells.length>5){
											item5=ht2.rows[i].cells[5].textContent;
											ht2.rows[i].cells[5].textContent=item5.substring(0,100);
										}
										if (ht2.rows[i].cells.length>7){
											ht2.rows[i].cells[7].remove();
										}
										if (ht2.rows[i].cells.length>6){
											ht2.rows[i].cells[6].remove();
										}
									}
								}
							}
						}
					} else {
						thefind2=false;
					}
				} else {
					thefind2=false;
				}
			}
		}
	});
	const config2 = { childList: true, subtree: true };
	observer2.observe(document.body, config2);
	if (!window.fetchIntercepted) {
		const originalFetch = window.fetch;
		window.fetch = async function() {
		let response = await originalFetch.apply(this, arguments);
		let theapi = arguments[0];
		const clonedResponse = response.clone();
		if (response.status === 200 && theapi === "https://phpcis.chshb.gov.tw/api/v1/health_records/check_valid") {
			const modifiedResponseJson = {
				"code": 200,
				"message": "",
				"result": {
					"chronicReturnDate": "",
					"chronicTestDate": "",
					"isChronicReminder": false
				}
			};
			const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
				status: 200,
				statusText: '',
				headers: new Headers({
					'Content-Type': 'application/json' 
				})
			});
			return modifiedResponse;
		} else {
			return clonedResponse;
		}
	}
};

}
}






