/* _GlobalPrefix_ */
/* _Module_:emi */
try{
s_F("emi");
s_E("emi");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emj */
try{
s_F("emj");
s_E("emj");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emk */
try{
s_F("emk");
s_E("emk");s_G();
}catch(e){_DumpException(e)}
/* _Module_:eml */
try{
s_F("eml");
s_E("eml");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy1r */
try{
var s_cka={},s_2i,s_dka,s_3i,s_eka,s_fka;s_F("sy1r");var s_4i=s_d,s_5i=s_qd(0),s_6i=s_qd(0),s_7i=s_qd(0),s_gka=function(a,b){window.scrollBy(a,b)},s_8i=function(a,b){window.scrollTo(a,b)},s_9i=s_rd,s_$i=s_rd,s_hka=s_d,s_ika=s_d,s_jka=s_d,s_aj=function(){if(document.body){var a=s_6d(document.body).top;s_aj=s_qd(a);return a}return 0},s_8ka=s_lb.match(/ GSA\/([.\d]+)/),s_pi=s_8ka?s_8ka[1]:"";s_dka=(s_2i=!!s_8ka)&&0<=s_Ia(s_pi,"4");s_3i=s_2i&&0<=s_Ia(s_pi,"5.2");s_eka=s_2i&&0<=s_Ia(s_pi,"5.7");s_fka=s_2i&&0<=s_Ia(s_pi,"4.3")&&!(0<=s_Ia(s_pi,"4.5"));

s_E("sy1r");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy26 */
try{
s_F("sy26");var s_cj={lxa:{},aCa:function(a,b,c){var d=c?1:0;if(!s_ka(0!=d?"velour.loadJsInterfaceWithFlags":"velour.loadJsInterface"))return s_Qe("No Velour.");a in s_cj.lxa||(s_cj.lxa[a]={});c=s_cj.lxa[a];if(c[b])return c[b];var e=s_Se(),f=0!=d?window.velour.loadJsInterfaceWithFlags(a,b,d):window.velour.loadJsInterface(a,b);d="google.velourCb."+a+"."+b;s_ta(d,{onSuccess:function(){e.resolve(f.getResult())},onFailure:function(){e.reject(a+"."+b+" failed to load: "+f.getError().getMessage())}});f.setCallback(d);
return c[b]=e.Mc},call:function(a,b,c,d){for(var e=[a,b,!1],f=2;f<arguments.length;f++)e.push(arguments[f]);return s_cj.pXa.apply(s_cj,e)},pXa:function(a,b,c,d,e){for(var f=s_cj.aCa(a,b,c),g=[],k=4;k<arguments.length;k++)g.push(arguments[k]);return f.then(function(a){return a[d]?a[d].apply(a,g):s_Qe(d+" not found")})}};

s_E("sy26");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syba */
try{
s_F("syba");var s_xdb,s_ydb=!1,s_Adb=function(){var a=s_bob;s_hc(window,"beforeunload",function(){s_ydb||s_xdb.set("isn",a)})};if(s_2i){s_xdb=s_ng("s","isn");var s_bob,s_cob,s_epb,s_uub=s_Bh("isn").split(":");s_epb=s_uub[0];s_cob=s_uub[1];(s_bob=s_epb?s_Cb(s_cob,s_epb):null)&&s_Adb()};

s_E("syba");s_G();
}catch(e){_DumpException(e)}
/* _Module_:aa */
try{
s_F("aa");

s_E("aa");s_G();
}catch(e){_DumpException(e)}
/* _Module_:abd */
try{
s_F("abd");var s_iz=function(a){for(var b="",c=21,d=0;d<a.length;d++)3!=d%4&&(b+=String.fromCharCode(a[d]^c),c++);return b},s_S5a=s_iz([97,119,115,111,107]),s_T5a=s_iz([97,119,115,111,107,123]),s_U5a=s_iz([118,115,121,107,108,124,104,119,68,127,114,105,114]),s_V5a=s_iz([101,126,118,102,118,125,118,109,126]),s_W5a=s_iz([116,116,115,108]),s_X5a=s_iz([113,115,99,107]),s_Y5a=s_iz([113,115,117,107]),s_Z5a=s_iz([58,127,122,103,121,126,127,98,104,51,109,124,118,123,15,76,81,90,13,95,67,76,64,118]),s__5a=function(a){var b=
0,c;for(c in a)if(a[c].e)if(a[c].b)b++;else return!1;return 0<b},s_05a=function(a){a=a||{};var b={};b[s_X5a]={e:!!a[s_X5a],b:!s_fla(s_S5a)};b[s_Y5a]={e:!!a[s_Y5a],b:!s_fla(s_T5a)};return b},s_15a=function(a){var b=[],c;for(c in a)a[c].e&&b.push(c+":"+(a[c].b?"1":"0"));return b.join(",")},s_25a=function(a,b){a=String(a);b&&(a+=","+b);google.log(s_V5a,a)},s_35a=function(a,b,c){c=null!=c?c:2;if(1>c)s_25a(7,b);else{var d=new Image;d.onerror=s_f(s_35a,a,b,c-1);d.src=a}},s__Gb={}; s_hf("abd",(s__Gb.init=function(a){a=a||{};if(a[s_W5a]&&s_fla(s_U5a)){a=s_05a(a);var b=s_15a(a);s__5a(a)?s_25a(1,"0,"+b):s_25a(0,b);s_H.qc(function(){s_35a(s_Z5a,"aa")})}},s__Gb));

s_E("abd");s_G();
}catch(e){_DumpException(e)}
/* _Module_:aspn */
try{
s_F("aspn");var s_0pb=function(a){var b=a.getAttribute("data-url");window.open(b,"_blank","menubar=no,left="+((window.screenLeft||window.screenX||0)+Math.max(0,((window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0)-445)/2))+",top="+((window.screenTop||window.screenY||0)+Math.max(0,((window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0)-665)/2))+",width=445,height=665");(a=a.getAttribute("data-ved"))&&google.log("","&ved="+a)},s_4Gb={}; s_hf("aspn",(s_4Gb.init=function(){s_Oh("aspn",{ota:s_0pb},!0)},s_4Gb.dispose=function(){s_Qh("aspn",["ota"])},s_4Gb));


s_E("aspn");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emx */
try{
var s_osa=function(a){var b,c=a.parentNode;if(c&&11!=c.nodeType)if(a.removeNode)a.removeNode(!1);else{for(;b=a.firstChild;)c.insertBefore(b,a);s_$c(a)}};s_F("emx");
s_E("emx");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy2j */
try{
var s_gla=function(a){return s_2c().matchMedia("(min-resolution: "+a+"dppx),(min--moz-device-pixel-ratio: "+a+"),(min-resolution: "+96*a+"dpi)").matches?a:0},s_4j=function(){var a=s_2c();return s_c(a.devicePixelRatio)?a.devicePixelRatio:a.matchMedia?s_gla(3)||s_gla(2)||s_gla(1.5)||s_gla(1)||.75:1};s_F("sy2j");

s_E("sy2j");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy2i */
try{
var s_hla=function(a,b){return a.left<=b.left+b.width&&b.left<=a.left+a.width&&a.top<=b.top+b.height&&b.top<=a.top+a.height},s_5j=function(a,b,c,d,e){d=d||("string"==typeof b?"":s_Be(b));e=e||("string"==typeof c?"":s_Be(c));a.ma.push({bq:d,targetElement:b,mW:e,pda:c,oC:"insert"})},s_ila=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,s_jla=function(a){var b="";s_Rca(a,function(a){b+=String.fromCharCode(a)});return b};s_F("sy2i");
var s_6j=function(a){s_Ad.call(this);this.headers=new s_qf;this.Woa=a||null;this.uy=!1;this.Uoa=this.qf=null;this.J_="";this.xF=0;this.XU="";this.IU=this.pBa=this.uka=this.dxa=!1;this.Lba=0;this.iA=null;this.qQ="";this.JHa=this.Lv=!1};s_h(s_6j,s_Ad);s_6j.prototype.wc=null;var s_kla=/^https?$/i,s_lla=["POST","PUT"],s_mla=[],s_7j=function(a,b,c,d,e,f,g){var k=new s_6j;s_mla.push(k);b&&k.listen("complete",b);k.zj("ready",k.iWa);f&&k.V0(f);g&&(k.Lv=g);k.send(a,c,d,e);return k};s_=s_6j.prototype;
s_.iWa=function(){this.dispose();s__a(s_mla,this)};s_.V0=function(a){this.Lba=Math.max(0,a)};s_.tQ=function(a){this.qQ=a};s_.dza=function(){return this.qQ};
s_.send=function(a,b,c,d){if(this.qf)throw Error("p`"+this.J_+"`"+a);b=b?b.toUpperCase():"GET";this.J_=a;this.XU="";this.xF=0;this.dxa=!1;this.uy=!0;this.qf=this.Jva();this.Uoa=this.Woa?this.Woa.ma():s_Kf.Ea();this.qf.onreadystatechange=s_e(this.IQa,this);try{this.pBa=!0,this.qf.open(b,String(a),!0),this.pBa=!1}catch(f){this.Ni(5,f);return}a=c||"";var e=this.headers.clone();d&&s_bea(d,function(a,b){e.set(b,a)});d=s_Ua(e.Pf(),s_nla);c=s_b.FormData&&a instanceof s_b.FormData;!s_Va(s_lla,b)||d||c||e.set("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.qf.setRequestHeader(b,a)},this);this.qQ&&(this.qf.responseType=this.qQ);"withCredentials"in this.qf&&this.qf.withCredentials!==this.Lv&&(this.qf.withCredentials=this.Lv);try{s_ola(this),0<this.Lba&&((this.JHa=s_pla(this.qf))?(this.qf.timeout=this.Lba,this.qf.ontimeout=s_e(this.Ij,this)):this.iA=s_Pf(this.Ij,this.Lba,this)),this.uka=!0,this.qf.send(a),this.uka=!1}catch(f){this.Ni(5,f)}};
var s_pla=function(a){return s_Wb&&s_6b(9)&&s_ja(a.timeout)&&s_c(a.ontimeout)},s_nla=function(a){return s_Dea("Content-Type",a)};s_6j.prototype.Jva=function(){return this.Woa?this.Woa.$():s_Kf()};s_6j.prototype.Ij=function(){"undefined"!=typeof s_ha&&this.qf&&(this.XU="Timed out after "+this.Lba+"ms, aborting",this.xF=8,this.dispatchEvent("timeout"),this.abort(8))};s_6j.prototype.Ni=function(a,b){this.uy=!1;this.qf&&(this.IU=!0,this.qf.abort(),this.IU=!1);this.XU=b;this.xF=a;s_qla(this);s_rla(this)};
var s_qla=function(a){a.dxa||(a.dxa=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};s_6j.prototype.abort=function(a){this.qf&&this.uy&&(this.uy=!1,this.IU=!0,this.qf.abort(),this.IU=!1,this.xF=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),s_rla(this))};s_6j.prototype.Ha=function(){this.qf&&(this.uy&&(this.uy=!1,this.IU=!0,this.qf.abort(),this.IU=!1),s_rla(this,!0));s_6j.Ba.Ha.call(this)};
s_6j.prototype.IQa=function(){this.isDisposed()||(this.pBa||this.uka||this.IU?s_sla(this):this.i3a())};s_6j.prototype.i3a=function(){s_sla(this)};
var s_sla=function(a){if(a.uy&&"undefined"!=typeof s_ha&&(!a.Uoa[1]||4!=a.vL()||2!=a.getStatus()))if(a.uka&&4==a.vL())s_Pf(a.IQa,0,a);else if(a.dispatchEvent("readystatechange"),4==a.vL()){a.uy=!1;try{s_8j(a)?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.xF=6,a.XU=a.Cza()+" ["+a.getStatus()+"]",s_qla(a))}finally{s_rla(a)}}},s_rla=function(a,b){if(a.qf){s_ola(a);var c=a.qf,d=a.Uoa[0]?s_d:null;a.qf=null;a.Uoa=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},s_ola=
function(a){a.qf&&a.JHa&&(a.qf.ontimeout=null);s_ja(a.iA)&&(s_Qf(a.iA),a.iA=null)};s_6j.prototype.Yh=function(){return!!this.qf};var s_8j=function(a){var b=a.getStatus(),c;if(!(c=s_yja(b))){if(b=0===b)a=s_xja(String(a.J_)),b=!s_kla.test(a);c=b}return c};s_6j.prototype.vL=function(){return this.qf?this.qf.readyState:0};s_6j.prototype.getStatus=function(){try{return 2<this.vL()?this.qf.status:-1}catch(a){return-1}};s_6j.prototype.Cza=function(){try{return 2<this.vL()?this.qf.statusText:""}catch(a){return""}};
s_6j.prototype.Hm=function(){try{return this.qf?this.qf.responseText:""}catch(a){return""}};var s_9j=function(a,b){if(a.qf)return a=a.qf.responseText,b&&0==a.indexOf(b)&&(a=a.substring(b.length)),s_yda(a)};s_6j.prototype.getResponse=function(){try{if(!this.qf)return null;if("response"in this.qf)return this.qf.response;switch(this.qQ){case "":case "text":return this.qf.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.qf)return this.qf.mozResponseArrayBuffer}return null}catch(a){return null}};
s_6j.prototype.getResponseHeader=function(a){if(this.qf&&4==this.vL())return a=this.qf.getResponseHeader(a),null===a?void 0:a};s_6j.prototype.getAllResponseHeaders=function(){return this.qf&&4==this.vL()?this.qf.getAllResponseHeaders():""};var s_$j=function(a){return s_ia(a.XU)?a.XU:String(a.XU)};

s_E("sy2i");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3r */
try{
s_F("sy3r");var s_Fra=function(a,b){b.forEach(function(b,d){a.set(d,b)});b.clear()};s_Fra.prototype.$=function(a){return"/"==a?null:"s"};s_Fra.prototype.Ca=function(a){return this.$(a)};s_Fra.prototype.Da=function(){};s_Fra.prototype.Ga=function(){return{vFa:[],gBa:[]}};

s_E("sy3r");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3q */
try{
var s_Gra=function(a,b,c,d,e,f){var g=new Map;if(b&&f){var k=new s_Ce;s_De(k,f,b);(b=s_Ge(k))&&g.set("vet",b)}d?g.set("ved",d):g.set("ei",c||google.kEI);e&&g.set("lei",e);var l=s_3j().getParams();s_Wfa.forEach(function(a){var b=l.get(a);b&&g.set(a,b)});g=s_cla(g);g.set("yv","2");a.forEach(function(a,b){g.set(b,a)});return g},s_Ira=function(a,b,c){if("POST"==a){a=new Map;(c=s_Hra(c))&&a.set("async",b+","+c);var d=[];a.forEach(function(a,b){return d.push(b+"="+a)});return d.join("&")}},s_Jra=function(a, b){var c=a.Ea;c=Math.round(c.ma+(c.$?s_qha()-c.$:0));a.$[b.gen204]=c},s_Kra={gen204:"fr",clearcut:35},s_Lra={gen204:"st",clearcut:36},s_Mra={gen204:"ft",clearcut:37},s_Nra={gen204:"bs",clearcut:38};s_F("sy3q");
var s_Ora=function(a,b,c){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack);this.details=c;this.details.t=b};s_a(s_Ora,Error);
var s_Pra=function(a,b,c,d){c=c.getStatus();d.s=c;a=new s_Ora(c?a:"Async non-request error",b,d);0==c&&s_be(a,a.details,!0);return a},s_Qra=function(a,b){var c={};c=(c.lec=b.xF,c.le=s_$j(b),c);return s_Pra("Async request error",a,b,c)},s_Rra=function(a,b){var c=void 0===b?{}:b;b=c.request;var d=c.jKa;c=c.response;var e={};d&&(e.e=d);null!=c&&(e.r=c);return b?s_Pra("Async response error",a,b,e):new s_Ora("Async response error",a,e)};
var s_Sra=function(){return""};var s_Hra=function(a){var b=[];a=s_da(a);for(var c=a.next();!c.done;c=a.next()){var d=s_da(c.value);c=d.next().value;d=d.next().value;b.push(encodeURIComponent(String(c))+":"+encodeURIComponent(String(d)))}return b.join(",")};var s_fza={},s_Ura=(s_fza[""]="/async",s_fza.search="/search",s_fza.s="/s",s_fza),s_Vra=function(a,b,c,d,e,f,g,k,l){d=void 0===d?"":d;c=s_Gra(c,void 0===e?"":e,void 0===f?"":f,void 0===g?"":g,void 0===k?"":k,l);e=s_Ura[d];""==d?e+="/"+a:(c.set("asearch",a),"s"==d&&c.set("sns","1"));a=new s_Mg(s_Sra(c)+e,s_Fra);s_Ng(a,c,!0);a=s_Og(a);(b=s_Hra(b))&&(a=a+"&async="+b);return a};
var s_Wra=function(a,b,c,d,e){var f=void 0===e?{}:e;e=void 0===f.method?"GET":f.method;var g=void 0===f.v0?"":f.v0,k=f.bq,l=f.ASa,m=f.Hj,n=f.cTa,ba=f.oC,t=f.headers;f=void 0===f.withCredentials?!1:f.withCredentials;var w=s_Se(),B=new s_6j;B.listen("complete",function(b){b=b.target;if(s_8j(b)){s_Jra(d,s_Lra);var c=b.Hm();d.$[s_Nra.gen204]=c.length;s_ka("google.pmc.async.slm")&&d.log();c||w.reject(s_Rra(a,{request:b,response:c}));w.resolve(c)}else s_Jra(d,s_Mra),s_ka("google.pmc.async.slm")&&d.log(), w.reject(s_Qra(a,b))});var G=s_Ue(w.Mc,function(a){if(a instanceof s_Ve)B.abort();else throw a;});c=s_Vra(a,"POST"==e?new Map:b,c,g,k,l,m,n,ba);s_Jra(d,s_Kra);B.Lv=f;B.send(c,e,s_Ira(e,a,b),t);return G};

s_E("sy3q");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3s */
try{
var s_Xra=function(a){var b=s_aea(a);if("undefined"==typeof b)throw Error("Bd");var c=new s_7f(null,0,void 0);a=s_zf(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];s_oa(f)?s_Tea(c,e,f):c.add(e,f)}return c};s_F("sy3s");var s_Yra=function(a){var b=new s_Gh("async");s_Hh(b,"astyp",a);return b},s_Zra=!1,s__ra=function(a){return!a||a instanceof Map?new Map(a):new Map(Object.entries(a))},s_ol=function(a,b,c,d,e,f,g,k,l,m){l=void 0===l?{}:l;var n=void 0===n?"insert":n;var ba=s_Yra(a);ba.start();b=s__ra(b);l=s__ra(l);g&&l.set("dfsl","1");return s_0ra(a,b,l,ba,c,"",f,d,m,e,k,n)},s_1ra=function(a,b,c,d,e,f,g,k){d=void 0===d?{}:d;k=void 0===k?!1:k;var l=void 0===l?"insert":l;var m=s_Yra(a);m.start();b=s__ra(b);d=s__ra(d);
return s_0ra(a,b,d,m,"jspb",k?"s":"search",c,e,void 0,f,g,l)},s_0ra=function(a,b,c,d,e,f,g,k,l,m,n,ba){b.set("_fmt",e);null!=g&&c.set("q",g);return s_Wra(a,b,c,d,{v0:f,bq:k,ASa:l,Hj:m,cTa:n,oC:ba,headers:void 0,withCredentials:s_Zra}).then(function(a){s_va(a,")]}'\n")&&(a=a.substr(5));try{var b=JSON.parse(a)}catch(G){return s_Qe(G)}if(s_ra(b)){a:{for(var c in b){b=b[c];break a}b=void 0}c=b.__err__;if(s_c(c))return s_Qe(c)}return"jspb"!=e||b instanceof Array?s_D(b):s_Qe(void 0)})};

s_E("sy3s");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3t */
try{
var s_2ra={gen204:"uc",clearcut:33},s_3ra=function(a){var b=a[0],c=s_Cma(a[1]);s_ik.fT(c);if(a[2])var d=s_j(a[2],function(a){return s_3ra(a)});return new s_jk(b,c.Cs(),d)};s_F("sy3t");var s_4ra=!1,s_wza={},s_pl=(s_wza.preload="yp",s_wza.filled="yf",s_wza.inlined="yi",s_wza),s_6ra=s_Ab(s_pl),s_$za={},s_8ra=(s_$za.loading="yl",s_$za.error="ye",s_$za),s_9ra=s_Ab(s_8ra),s_XAa={},s_$ra=(s_XAa.preload="asyncReset",s_XAa.filled="asyncFilled",s_XAa.loading="asyncLoading",s_XAa.error="asyncError",s_XAa),s_asa=function(){};s_h(s_asa,Error);
var s_rl=function(a){this.element=a;this.type=s_A.get(a,"asyncType")||"";if(!this.type)throw a=new s_asa,s_ae(a),a;a=s_A.get(a,"graftType");this.oC="none"!=a?a||"insert":null};s_rl.prototype.getState=function(){var a=s_ge(this.element);return s_Ua(s_j(a,function(a){return s_6ra[a]}),s_ud)};s_rl.prototype.setState=function(a){s_bsa(this,a);"filled"==a&&s_i(this.element.querySelectorAll("."+s_pl.inlined),function(a){s_bsa(new s_rl(a),"filled")})};
var s_sl=function(a,b){s_ie(a.element,s_rb(s_8ra));if(""!=b){s_x(a.element,s_8ra[b]);var c=a.getState();s_Eh(a.element,s_$ra[b],{state:c,Z7:b})}},s_bsa=function(a,b){s_ie(a.element,s_rb(s_pl));s_x(a.element,s_pl[b]);s_sl(a,"");s_Eh(a.element,s_$ra[b],{state:b,Z7:""})},s_csa=function(a){return(a=s_A.get(a.element,"asyncContextRequired"))?a.split(","):[]},s_esa=function(a,b,c,d,e){this.$=c||s_tl();s_Jra(this.$,s_2ra);s_Hh(this.$,"astyp",a.type);this.target=a;this.trigger=d;b=s_dsa(b);c=s_csa(this.target);
c=new Set(c);for(d=this.trigger||this.target.element;d&&d.parentElement&&c.size;){var f=s_A.get(d,"asyncContext");if(f){f=s_da(f.split(";"));for(var g=f.next();!g.done;g=f.next()){var k=g.value;g=k.split(":");2==g.length?(k=s_Ba(g[0]),g=s_Ba(g[1]),c["delete"](k)&&!b.has(k)&&b.set(k,g)):s_be(Error("W"),{cxt:k})}}d=d.parentElement}c=this.target.element;c.id!=this.target.type&&b.set("_id",c.id);(c=s_A.get(this.target.element,"asyncToken"))&&b.set("_xsrf",c);b.set("_pms",s_jf(google.xjsu,"k").match(/xjs\.(\w+)\./)[1]);
this.context=b;this.ma=s_dsa(e);this.Mr="stateful"==s_A.get(a.element,"asyncMethod")||s_A.get(a.element,"asyncToken")?"POST":"GET";this.v0="search"==s_A.get(a.element,"asyncRclass")?"search":""};
s_esa.prototype.fetch=function(){var a=new Set(s_csa(this.target));for(var b=s_da([].concat(s_ea(this.context.keys()),s_ea(this.ma.keys()))),c=b.next();!c.done;c=b.next())a["delete"](c.value);a.size?(a=Array.from(a).join(","),s_be(Error("U"),{type:this.target.type,cxt:a}),a=!1):a=!0;return a?s_fsa(this,this.$):s_Qe(void 0)};
var s_fsa=function(a,b){var c=new Map([].concat(s_ea(a.context))),d=new Map([].concat(s_ea(a.ma)));""!=a.v0&&(s_gsa(c,d,"start"),s_gsa(c,d,"q"));return s_Wra(a.target.type,c,d,b,{method:a.Mr,v0:a.v0,bq:s_Be(a.target.element),ASa:google.getEI(a.target.element),Hj:a.trigger?s_Be(a.trigger):void 0,cTa:a.trigger?google.getLEI(a.trigger):void 0,oC:a.target.oC,withCredentials:s_4ra}).then(function(b){var c="\n\n";s_Da(b,c)||(c="\n");var d=s_Pa(b.split(c),s_ud);c=[];var e=[];d=s_da(d);for(var l=d.next();!l.done;l=
d.next()){l=l.value;try{var m=JSON.parse(l),n=m.__err__;if(s_c(n))return s_Qe(s_Rra(a.target.type,{jKa:n,response:b}));var ba=s_3ra(m);ba&&e.push(ba)}catch(t){if(s_3j().getParams().get("deb"))c.push(t);else return s_Qe(s_Rra(a.target.type,{jKa:t.message,response:b}))}}return s_D(e)})},s_gsa=function(a,b,c){a.has(c)&&(b.has(c)||b.set(c,String(a.get(c))),a["delete"](c))},s_dsa=function(a){return!a||a instanceof Map?new Map(a):new Map(Object.entries(a))},s_tl=function(){return(new s_Gh("async")).start()};

s_E("sy3t");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3u */
try{
var s_ul=function(a,b){return s_Qa(b,function(a,b){return s_kk(a,b)},a)},s_hsa=function(a){a=s_ge(a.element);return s_Ua(s_j(a,function(a){return s_9ra[a]}),s_ud)||""},s_vl=function(a){var b=s_A.get(a,"asyncTrigger");if(b){if(a=s_n(b))return new s_rl(a);a=new s_asa;s_ae(a);throw a;}return new s_rl(a)},s_isa=function(a,b,c,d,e){if(s_fd(a))f=s_vl(a),s_A.get(a,"asyncTrigger")&&(d=a);else var f=a;return new s_esa(f,c||{},b,d,e)},s_jsa=function(){s_i(document.querySelectorAll("."+s_pl.inlined),function(a){s_bsa(new s_rl(a), "filled")})};s_F("sy3u");
var s_wl=function(a,b){var c=s_tl(),d=s_vl(a);return"preload"!=d.getState()||"loading"==s_hsa(d)?s_D(void 0):s_ksa(a,c,b)},s_xl=function(a,b,c,d){var e=s_tl();return s_ksa(a,e,b,c,d)},s_ksa=function(a,b,c,d,e){var f=s_isa(a,b,c,d,e);s_sl(f.target,"loading");return s_Ue(f.fetch().then(function(a){s_i(a,function(a){a.apply()});f.target.setState("filled")}),function(a){s_sl(f.target,"error");throw a;})},s_yl=function(a,b,c,d){var e=s_tl(),f=s_isa(a,e,b,c,d);s_sl(f.target,"loading");return s_Ue(f.fetch().then(function(a){s_i(a,
function(a){(new s_jk(a.Pl,s_nk.Cs())).append(a)});f.target.setState("filled")}),function(a){s_sl(f.target,"error");throw a;})},s_zl=function(a,b,c,d){var e=s_tl();return s_isa(a,e,b,c,d).fetch()},s_Al=function(a){var b=s_tl();a=s_isa(a,b);s_6c(a.target.element);s_Mi(a.target.element.id);s_yoa();a.target.setState("preload")},s_YAa={};s_if("async",(s_YAa.init=function(){s_Oh("async",{a:function(a){s_yl(a)},u:function(a){s_xl(a)},uo:function(a){s_wl(a)},r:s_Al});s_jsa()},s_YAa));

s_E("sy3u");s_G();
}catch(e){_DumpException(e)}
/* _Module_:async */
try{
s_F("async");

s_E("async");s_G();
}catch(e){_DumpException(e)}
/* _Module_:em8 */
try{
s_F("em8");
s_E("em8");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy9 */
try{
s_F("sy9");var s_Sf=function(a,b,c,d){s_k.call(this);s_gb(this);this.$=new s_Of(166);this.$.bI=s_e(this.Da,this);this.ma(this.$);this.Ea=a;this.ma(this.Ea);this.Ga=b;this.Wa=d;this.Ca=c};s_h(s_Sf,s_k);s_Sf.prototype.start=function(){this.$.start();this.Ea.start(this.$);this.Mb.start(this.Ga)};s_Sf.prototype.Da=function(){var a=this.Ea,b=this.$;a.$=s_g();a.Ea=a.$-a.Wa-b.$;a.Wa=a.$;a=this.Ea;1E3<a.$-a.Ca&&66.4>a.Ea?(this.$.stop(),this.Wa.call(),s_$b(this)):66.4<=this.Ea.Ea&&(this.$.stop(),this.Ca.call(),s_$b(this))};
var s_Tf=function(a){this.O_=a};s_bb(s_Tf,s_Sf);s_Tf.prototype.start=function(a){s_me(a,!0)};s_eb(s_Tf.prototype.start);var s_Gea=function(){this.Ca=this.Ea=this.Wa=this.$=0};s_h(s_Gea,s_k);s_Gea.prototype.start=function(){this.Ca=this.Wa=this.$=s_g()};var s_Hea=function(a,b,c){(new s_Sf(new s_Gea,a,b,c)).start()};

s_E("sy9");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syb */
try{
s_F("syb");var s_uga=function(a,b,c){if(!b||!c&&!a)return 4;var d=window.agsa_ext;if(!s_c(d))return 1;if(c){if(!s_c(d.canLaunchApp))return 2;if(!d.canLaunchApp(b))return 3}else{if(!s_c(d.canUriBeHandledByPackage))return 2;if(!d.canUriBeHandledByPackage(a||"",b))return 3}return 0};

s_E("syb");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy10 */
try{
s_F("sy10");var s_Lha=function(a,b){var c=s_Kf();if(s_Kha(b))c.open("GET",a,!1),c.send(),s_ne(b);else{var d=s_H.setTimeout(function(){c&&c.abort();s_ne(b)},2E3);c.onreadystatechange=function(){4==c.readyState&&(s_H.clearTimeout(d),s_ne(b))};c.open("GET",a,!0);c.send(null)}},s_Rh=function(a,b,c,d,e,f,g){a="/gen_204?sa=X&ei="+google.getEI(a)+"&ved="+encodeURIComponent(b)+(e?"&lei="+encodeURIComponent(e):"")+(d?"&url="+encodeURIComponent(d):"")+(f?"&title="+encodeURIComponent(f):"");void 0!=g&&(a=a+"&ct=clpit&cad="+ encodeURIComponent(f+":"+(g?"1":"0")));s_Lha(a,c)},s_Kha=function(a){return s_Ob()&&s_lf()&&!s_Sb("2.4")&&0!=a.indexOf("tel:")};s_ta("google.bct",s_Lha);s_ta("google.vbct",s_Rh);

s_E("sy10");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy2u */
try{
s_F("sy2u");
s_E("sy2u");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy2v */
try{
s_F("sy2v");var s_sk=function(a,b){this.ma=a;this.$=b+"::"};s_h(s_sk,s_ef);s_sk.prototype.set=function(a,b){this.ma.set(this.$+a,b)};s_sk.prototype.get=function(a){return this.ma.get(this.$+a)};s_sk.prototype.remove=function(a){this.ma.remove(this.$+a)};s_sk.prototype.ii=function(a){var b=this.ma.ii(!0),c=this,d=new s_af;d.next=function(){for(var d=b.next();d.substr(0,c.$.length)!=c.$;)d=b.next();return a?d.substr(c.$.length):c.ma.get(d)};return d};
var s_tk=function(a){this.hJ=a};s_tk.prototype.set=function(a,b){s_c(b)?this.hJ.set(a,s_9e(b)):this.hJ.remove(a)};s_tk.prototype.get=function(a){try{var b=this.hJ.get(a)}catch(c){return}if(null!==b)try{return s_8e(b)}catch(c){throw"Storage: Invalid value was encountered";}};s_tk.prototype.remove=function(a){this.hJ.remove(a)};

s_E("sy2v");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy2w */
try{
var s_uk=function(a,b){this.ma=a;this.$=b};s_h(s_uk,s_zda);s_uk.prototype.set=function(a,b){try{this.ma.set(a,b)}catch(c){this.$(c,"set",a,b)}};s_uk.prototype.get=function(a){try{return this.ma.get(a)}catch(b){return this.$(b,"get",a),null}};s_uk.prototype.remove=function(a){try{this.ma.remove(a)}catch(b){this.$(b,"remove",a)}};
var s_Jma={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},s_Kma={"'":"\\'"},s_Lma=function(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=s_Jma[d])){if(!(31<e&&127>e))if(d in s_Kma)d=s_Kma[d];else if(d in s_Jma)d=s_Kma[d]=s_Jma[d];else{g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d= s_Kma[d]=e}g=d}b[f]=g}b.push('"');return b.join("")};s_F("sy2w");
var s_Coa={},s_Nma=(s_Coa.local=s_fg,s_Coa.session=s_Bda,s_Coa),s_vk={},s_Oma=function(a,b,c,d){"Storage mechanism: Storage disabled"!=a&&"Storage mechanism: Quota exceeded"!=a&&(a=s_ia(a)?Error(a):a,c={op:b,k:c},"set"==b&&(c.v=d),google.ml(a,!1,c))},s_Pma=function(a,b){if("local"==a&&s_Fb()&&!s_ig())return null;var c=b||"__empty__";s_vk[a]=s_vk[a]||{};var d=s_vk[a],e;if(!(e=s_vk[a][c])){var f=new s_Nma[a];e=f.isAvailable();b=b?new s_sk(f,b):f;e={storage:new s_tk(new s_uk(b,s_Oma)),hJ:b,available:e}}d[c]= e;return s_vk[a][c]},s_wk=function(a,b){return(a=s_Pma(a,b))&&a.available?a.storage:null},s_xk=function(a,b){return(a=s_Pma(a,b))?a.available:!1},s_Qma=function(a){return(a=s_Pma("local",a))&&a.available?a.hJ:null};

s_E("sy2w");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy55 */
try{
var s_Wva=function(a){var b=a.style;a="";"opacity"in b?a=b.opacity:"MozOpacity"in b?a=b.MozOpacity:"filter"in b&&(b=b.filter.match(/alpha\(opacity=([\d.]+)\)/))&&(a=String(b[1]/100));return""==a?a:Number(a)},s_Xva=function(a){a=a.style;a.position="relative";s_Wb&&!s_6b("8")?(a.zoom="1",a.display="inline"):a.display="inline-block"};s_F("sy55");
var s_Yva,s_Zva,s_Hn=function(){var a=s_Si(0,!0),b=s_Si(1,!0);return a<b},s__va=function(){this.$=!!(window.orientation%180)},s_0va=function(){var a=s_Bh("client"),b=s_Bh("source");return!(!/^mobilesearchapp/.test(a)&&!/^mobilesearchapp/.test(b))},s_In=[],s_1va=!1,s_Jn=function(a){if(window.addEventListener){for(var b=0;b<s_In.length;b++)if(s_In[b]==a)return;s_In.push(a);s_1va||(s_Yva=window.orientation,s_Zva=window.innerWidth,"orientation"in window&&!s_0va()&&window.addEventListener("orientationchange",
s_2va,!1),window.addEventListener("resize",s_0va()?s_3va:s_2va,!1),s_1va=!0)}},s_Kn=function(a){for(var b=0;b<s_In.length;b++)if(s_In[b]==a){s_In.splice(b,1);break}},s_2va=function(){if(!("orientation"in window&&!s_0va()&&window.orientation==s_Yva||window.innerWidth==s_Zva)){var a=new s__va;s_Yva=window.orientation;s_Zva=window.innerWidth;for(var b=0;b<s_In.length;b++)s_Ne(s_f(s_In[b],a))}},s_3va=function(){window.setTimeout(s_2va,10)};

s_E("sy55");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syb3 */
try{
s_F("syb3");
s_E("syb3");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sybm */
try{
s_F("sybm");
s_E("sybm");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sybo */
try{
var s_QC=function(a){s_M(this,a,0,-1,null,null)};s_h(s_QC,s_L);s_F("sybo");var s_jeb=function(a){this.$=a};
s_E("sybo");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syc1 */
try{
s_F("syc1");
s_E("syc1");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syc2 */
try{
s_F("syc2");var s_RC=function(a,b,c){this.Ea=a;this.ma=b;this.Wa=c||1;this.$={}},s_keb=function(a){return new s_RC(a,function(a){navigator.sendBeacon&&navigator.sendBeacon(google.logUrl("",a),"")||google.log("",a)})},s_leb=function(){return new s_RC("",s_d)};s_RC.prototype.flush=function(){var a="udla="+this.Wa+"&ei="+this.Ea,b;for(b in this.$)a+="&"+b+"="+this.$[b];this.ma(a);this.$={}};

var s_SC=function(){};s_h(s_SC,s_ab);s_SC.prototype.$=s_db();
s_E("syc2");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syc6 */
try{
var s_meb=function(a,b){a.$.res=b?"m":"a"};s_F("syc6");
s_E("syc6");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syca */
try{
s_F("syca");var s_reb=function(a,b,c){this.DCa=a;this.Nh=b.name||null;this.$={};for(a=0;a<c.length;a++)b=c[a],this.$[b.ma]=b};s_reb.prototype.getName=function(){return this.Nh};var s_seb=function(a){a=s_rb(a.$);s_7a(a,function(a,c){return a.ma-c.ma});return a};var s_teb=function(a,b,c){this.ma=b;this.Nh=c.name;this.Ga=!!c.Lr;this.Da=!!c.required;this.$=c.mj;this.Ea=c.type;this.Ca=!1;switch(this.$){case 3:case 4:case 6:case 16:case 18:case 2:case 1:this.Ca=!0}this.Wa=c.defaultValue};s_teb.prototype.getName=function(){return this.Nh};var s_ueb=function(a){return 11==a.$||10==a.$};s_teb.prototype.Zj=function(){return this.Ga};s_teb.prototype.aAa=function(){return this.Da};
var s_XC=function(){this.ma={};this.Ea=this.getDescriptor().$;this.$=this.Wa=null};s_=s_XC.prototype;s_.has=function(a){return s_YC(this,a.ma)};s_.get=function(a,b){return s_ZC(this,a.ma,b)};s_.set=function(a,b){s__C(this,a.ma,b)};s_.add=function(a,b){s_veb(this,a.ma,b)};s_.clear=function(a){s_web(this,a.ma)};
s_.equals=function(a){if(!a||this.constructor!=a.constructor)return!1;for(var b=s_seb(this.getDescriptor()),c=0;c<b.length;c++){var d=b[c],e=d.ma;if(s_YC(this,e)!=s_YC(a,e))return!1;if(s_YC(this,e)){var f=s_ueb(d),g=s_0C(this,e);e=s_0C(a,e);if(d.Zj()){if(g.length!=e.length)return!1;for(d=0;d<g.length;d++){var k=g[d],l=e[d];if(f?!k.equals(l):k!=l)return!1}}else if(f?!g.equals(e):g!=e)return!1}}return!0};
var s_xeb=function(a,b){for(var c=s_seb(a.getDescriptor()),d=0;d<c.length;d++){var e=c[d],f=e.ma;if(s_YC(b,f)){a.$&&delete a.$[e.ma];var g=s_ueb(e);if(e.Zj()){e=s_1C(b,f);for(var k=0;k<e.length;k++)s_veb(a,f,g?e[k].clone():e[k])}else e=s_0C(b,f),g?(g=s_0C(a,f))?s_xeb(g,e):s__C(a,f,e.clone()):s__C(a,f,e)}}};s_XC.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.ma={},a.$&&(a.$={}),s_xeb(a,this));return a};
var s_YC=function(a,b){return null!=a.ma[b]},s_0C=function(a,b){var c=a.ma[b];return null==c?null:a.Wa?b in a.$?a.$[b]:(c=a.Wa.$T(a.Ea[b],c),a.$[b]=c):c},s_ZC=function(a,b,c){var d=s_0C(a,b);return a.Ea[b].Zj()?d[c||0]:d},s_1C=function(a,b){return s_0C(a,b)||[]},s__C=function(a,b,c){a.ma[b]=c;a.$&&(a.$[b]=c)},s_veb=function(a,b,c){a.ma[b]||(a.ma[b]=[]);a.ma[b].push(c);a.$&&delete a.$[b]},s_web=function(a,b){delete a.ma[b];a.$&&delete a.$[b]},s_2C=function(a,b){var c=[],d=b[0],e;for(e in b)0!=e&&c.push(new s_teb(0, e,b[e]));return new s_reb(a,d,c)};

s_E("syca");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sycc */
try{
var s_sD=function(){try{var a=window.localStorage}catch(b){return null}if(!a)return null;a=new s_Xfb(a);if(!a.set("dummy",0))return null;a.remove("dummy");return a};s_F("sycc");var s_Xfb=function(a){this.$=a};s_Xfb.prototype.get=function(a){if(!s_b.navigator.cookieEnabled)return null;a=this.$.getItem("udla::"+a);if(!a)return null;try{return JSON.parse(a)}catch(b){return null}};s_Xfb.prototype.remove=function(a){s_b.navigator.cookieEnabled&&this.$.removeItem("udla::"+a)};s_Xfb.prototype.set=function(a,b){if(!s_b.navigator.cookieEnabled)return!1;try{return this.$.setItem("udla::"+a,JSON.stringify(b)),!0}catch(c){return!1}};var s_Yfb=function(a){a.remove("backoff");a.remove("last-rej")};

s_E("sycc");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sycb */
try{
var s_tD=function(a,b,c){a.$.e=b;c&&(a.$.d=c);a.flush()};s_F("sycb");var s_8fb=function(a,b,c){this.Wa=a;this.Ea=b;this.wc=new s_RC(c.Ea,c.ma,3);s_O(this.Wa.$,30,!1)&&s_O(this.Wa.$,29,!1)&&(this.Ea.set("hps",!0),this.Ea.remove("ncp"));this.Ia=this.Da=0;this.ma=!1;this.Ca=this.$=0;this.Ga=!1;this.Ma=s_uD(this)?Number(this.Ea.get("ncp")):0;this.Ja=s_7fb(this,this.aWa.bind(this),!0)};s_=s_8fb.prototype;s_.M_=function(a){this.Ja.then(function(){a(this.$)}.bind(this))};s_.BV=function(a){s_uD(this)&&this.Ea.set("ncp",this.Ma+1);this.Ja.then(this.qXa.bind(this)).then(a)};
s_.o2=function(a){0!=this.$&&this.ma&&(s_uD(this)&&this.Ea.remove("ncp"),s_O(this.Wa.$,30,!1)&&this.Ea.set("hps",!0),a=a||s_g()-this.Da,s_tD(this.wc,1==this.$?6:8,a),this.$=2,this.ma=!1)};s_.l2=function(a,b){0!=this.$&&this.ma&&(this.ma=!1,b=b||s_g()-this.Da,1!=a.code||500>b?this.Ea.remove("ncp"):s_uD(this)&&(this.Ca=1),this.Ja=s_7fb(this,this.G_a.bind(this,a,b)))};s_.nJ=function(){return 1==this.Ca&&!this.ma};
s_.G_a=function(a,b,c){c=c.state||c.status;"prompt"==c?500>b?(this.Ca=3,a=10):a=5:a="granted"==c?this.Ga&&1==a.code?5:1==a.code?11:1==this.$?6:8:3==this.$?9:7;s_tD(this.wc,a,b);a:{switch(a){case 6:case 8:b=2;break a;case 5:case 7:case 10:case 11:case 9:b=3;break a}b=null}b&&(this.$=b);this.Ga=!1};
s_.aWa=function(a){var b=a.state||a.status;s_uD(this)&&"granted"==b&&this.Ma>=s_N(this.Wa.$,26)&&(b="denied");var c=s_g()-this.Ia;switch(b){case "granted":this.$=2;this.wc.$.pd=c;s_tD(this.wc,2,void 0);break;case "denied":this.$=3;this.wc.$.pd=c;s_tD(this.wc,3,void 0);break;case "prompt":this.$=1,this.wc.$.pd=c,s_tD(this.wc,1,void 0)}a.addEventListener("change",s_9fb(this,a))};s_.qXa=function(){this.Ca=this.$;this.ma=!0;this.Da=s_g()};
var s_9fb=function(a,b){return function(){var a=b.state||b.status;"granted"==a&&this.ma&&(this.Ga=!0);if(!this.ma)switch(a){case "denied":this.$=3;break;case "granted":this.$=2;break;case "prompt":this.$=1}}.bind(a)},s_7fb=function(a,b,c){if(!navigator.permissions)return c&&s_tD(a.wc,14,void 0),Promise.resolve(0);c&&(s_tD(a.wc,12,void 0),a.Ia=s_g());return navigator.permissions.query({name:"geolocation"}).then(b,function(){if(c){var a=s_g()-this.Ia;this.wc.$.pd=a;s_tD(this.wc,13,void 0)}return 0}.bind(a))}, s_uD=function(a){return null!=s_N(a.Wa.$,26)&&!(s_O(a.Wa.$,30,!1)&&a.Ea.get("hps"))};

s_E("sycb");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sycl */
try{
s_F("sycl");var s_yeb={ofb:0,v8a:1,y8a:2,Xcb:3,Dfb:4,s$a:5,q$a:6,VIEWPORT:7,x9a:8,Ufb:-1},s_zeb={nfb:0,Pab:1,Pcb:2,aab:3,cab:42,F9a:4,Ddb:5,Eeb:6,edb:41,Wcb:44,C8a:12,Iab:11,d8a:17,eab:51,i8a:54,jeb:7,Oab:8,Sdb:13,sbb:14,f$a:34,vbb:15,Bcb:16,Lfb:18,Kfb:20,Yab:21,Vcb:22,M7a:23,qbb:24,Zcb:25,$cb:59,C9a:26,I$a:27,X9:28,ueb:29,Dab:30,Jab:31,Cab:35,d$a:64,g8a:33,heb:36,rcb:37,P7a:38,Q7a:39,z8a:32,Gfb:40,B9a:43,Heb:45,cfb:46,web:47,veb:48,C$a:49,D$a:50,Neb:52,Xab:55,Tfb:-1,Kab:9,Eab:10,Gab:19,bab:53,F8a:56,Ndb:57,
xeb:58,G9a:60,Y7a:61,E9a:62,Z9a:63,s8a:65,D9a:66,eoa:67},s_Aeb={rfb:0,Yeb:1,rbb:2,Fab:3,Zab:4,Hab:5,e$a:6,Wfb:7,Xfb:8,W8a:101,S8a:102,V8a:103},s_Beb={$db:0,Xdb:1,Wdb:2,Ydb:3,Udb:4,aeb:5,Vdb:6},s_3C=function(){s_XC.call(this)};s_h(s_3C,s_XC);var s_Ceb=null,s_4C=function(){s_XC.call(this)};s_h(s_4C,s_XC);var s_Deb=null,s_5C=function(){s_XC.call(this)};s_h(s_5C,s_XC);var s_Eeb=null,s_6C=function(){s_XC.call(this)};s_h(s_6C,s_XC);var s_Feb=null,s_7C=function(){s_XC.call(this)};s_h(s_7C,s_XC);
var s_Geb=null;s_7C.prototype.getType=function(){return s_ZC(this,1)};var s_Heb={$$a:0,Zbb:1,ccb:2,Jeb:3,UNKNOWN:4,Web:5,X8a:6,WALKING:7,RUNNING:8,Qbb:9,bfb:10,t9a:11,dcb:12,acb:13,Z$a:14,seb:15,Y8a:-1E3},s_8C=function(){s_XC.call(this)};s_h(s_8C,s_XC);var s_Ieb=null,s_Jeb={J7a:0,I7a:1,F7a:2,G7a:3,H7a:4},s_9C=function(){s_XC.call(this)};s_h(s_9C,s_XC);var s_Keb=null;s_9C.prototype.Bd=function(){return s_ZC(this,1)};s_9C.prototype.zs=function(a){s__C(this,5,a)};
var s_Leb={kfb:0,Qab:1,ebb:2,p$a:3},s_Meb={UNKNOWN:0,j$a:1,B$a:2,R7a:3},s_$C=function(){s_XC.call(this)};s_h(s_$C,s_XC);var s_Neb=null,s_Oeb={Hbb:0,Scb:1E3},s_aD=function(){s_XC.call(this)};s_h(s_aD,s_XC);var s_Peb=null,s_bD=function(){s_XC.call(this)};s_h(s_bD,s_XC);var s_Qeb=null,s_cD=function(){s_XC.call(this)};s_h(s_cD,s_XC);var s_Reb=null;s_cD.prototype.getType=function(){return s_ZC(this,1)};var s_Seb={UNKNOWN:0,U9a:1,Rab:2,e8a:3,Ifb:4},s_dD=function(){s_XC.call(this)};s_h(s_dD,s_XC);
var s_Teb=null,s_eD=function(){s_XC.call(this)};s_h(s_eD,s_XC);var s_Ueb=null;s_eD.prototype.clearRect=function(){s_web(this,14)};s_eD.prototype.Bd=function(){return s_ZC(this,10)};s_eD.prototype.Qc=function(){return s_ZC(this,16)};s_eD.prototype.Th=function(){return s_YC(this,16)};s_3C.prototype.getDescriptor=function(){var a=s_Ceb;a||(s_Ceb=a=s_2C(s_3C,{0:{name:"LatLng",hh:"location.unified.LatLng"},1:{name:"latitude_e7",mj:15,type:Number},2:{name:"longitude_e7",mj:15,type:Number}}));return a};
s_3C.getDescriptor=s_3C.prototype.getDescriptor;s_4C.prototype.getDescriptor=function(){var a=s_Deb;a||(s_Deb=a=s_2C(s_4C,{0:{name:"LatLngRect",hh:"location.unified.LatLngRect"},1:{name:"lo",mj:11,type:s_3C},2:{name:"hi",mj:11,type:s_3C}}));return a};s_4C.getDescriptor=s_4C.prototype.getDescriptor;
s_5C.prototype.getDescriptor=function(){var a=s_Eeb;a||(s_Eeb=a=s_2C(s_5C,{0:{name:"FieldOfView",hh:"location.unified.FieldOfView"},1:{name:"field_of_view_x_degrees",mj:2,type:Number},2:{name:"field_of_view_y_degrees",mj:2,type:Number},3:{name:"screen_width_pixels",mj:5,type:Number}}));return a};s_5C.getDescriptor=s_5C.prototype.getDescriptor;
s_6C.prototype.getDescriptor=function(){var a=s_Feb;a||(s_Feb=a=s_2C(s_6C,{0:{name:"FeatureIdProto",hh:"location.unified.FeatureIdProto"},1:{name:"cell_id",mj:6,type:String},2:{name:"fprint",mj:6,type:String}}));return a};s_6C.getDescriptor=s_6C.prototype.getDescriptor;s_7C.prototype.getDescriptor=function(){var a=s_Geb;a||(s_Geb=a=s_2C(s_7C,{0:{name:"ActivityRecord",hh:"location.unified.ActivityRecord"},1:{name:"type",mj:14,defaultValue:0,type:s_Heb},2:{name:"confidence",mj:5,type:Number}}));return a};
s_7C.getDescriptor=s_7C.prototype.getDescriptor;
s_8C.prototype.getDescriptor=function(){var a=s_Ieb;a||(s_Ieb=a=s_2C(s_8C,{0:{name:"LocationAttributesProto",hh:"location.unified.LocationAttributesProto"},1:{name:"detected_activity",mj:14,defaultValue:0,type:s_Jeb},2:{name:"heading_degrees",mj:5,type:Number},3:{name:"bearing_degrees",mj:5,type:Number},12:{name:"bearing_accuracy_degrees",mj:5,type:Number},4:{name:"speed_kph",mj:5,type:Number},13:{name:"speed_accuracy_kph",mj:5,type:Number},5:{name:"tilt_degrees",mj:5,type:Number},6:{name:"roll_degrees",
mj:5,type:Number},7:{name:"altitude_meters_from_ground",mj:1,type:Number},8:{name:"field_of_view",mj:11,type:s_5C},9:{name:"boarded_transit_vehicle_token",mj:9,type:String},10:{name:"device_location_ratio",mj:2,type:Number},11:{name:"activity_record",Lr:!0,mj:11,type:s_7C}}));return a};s_8C.getDescriptor=s_8C.prototype.getDescriptor;
s_9C.prototype.getDescriptor=function(){var a=s_Keb;a||(s_Keb=a=s_2C(s_9C,{0:{name:"SemanticPlace",hh:"location.unified.SemanticPlace"},1:{name:"feature_id",mj:11,type:s_6C},2:{name:"gconcept_instance",Lr:!0,mj:11,type:s_$C},3:{name:"score",mj:2,type:Number},4:{name:"confidence",mj:14,defaultValue:0,type:s_Leb},5:{name:"source",mj:14,defaultValue:0,type:s_Meb}}));return a};s_9C.getDescriptor=s_9C.prototype.getDescriptor;
s_$C.prototype.getDescriptor=function(){var a=s_Neb;a||(s_Neb=a=s_2C(s_$C,{0:{name:"GConceptInstanceProto",BJa:s_9C,hh:"location.unified.SemanticPlace.GConceptInstanceProto"},1:{name:"gconcept_id",mj:9,type:String},2:{name:"prominence",mj:14,defaultValue:0,type:s_Oeb}}));return a};s_$C.getDescriptor=s_$C.prototype.getDescriptor;
s_aD.prototype.getDescriptor=function(){var a=s_Peb;a||(s_Peb=a=s_2C(s_aD,{0:{name:"VisibleNetwork",hh:"location.unified.VisibleNetwork"},1:{name:"wifi",mj:11,type:s_bD},2:{name:"cell",mj:11,type:s_cD},3:{name:"connected",mj:8,type:Boolean},4:{name:"timestamp_ms",mj:3,type:String}}));return a};s_aD.getDescriptor=s_aD.prototype.getDescriptor;
s_bD.prototype.getDescriptor=function(){var a=s_Qeb;a||(s_Qeb=a=s_2C(s_bD,{0:{name:"WiFi",BJa:s_aD,hh:"location.unified.VisibleNetwork.WiFi"},1:{name:"bssid",mj:9,type:String},2:{name:"level_dbm",mj:5,type:Number}}));return a};s_bD.getDescriptor=s_bD.prototype.getDescriptor;
s_cD.prototype.getDescriptor=function(){var a=s_Reb;a||(s_Reb=a=s_2C(s_cD,{0:{name:"Cell",BJa:s_aD,hh:"location.unified.VisibleNetwork.Cell"},1:{name:"type",mj:14,defaultValue:0,type:s_Seb},2:{name:"cell_id",mj:5,type:Number},3:{name:"location_area_code",mj:5,type:Number},4:{name:"mobile_country_code",mj:5,type:Number},5:{name:"mobile_network_code",mj:5,type:Number},6:{name:"primary_scrambling_code",mj:5,type:Number},7:{name:"physical_cell_id",mj:5,type:Number},8:{name:"tracking_area_code",mj:5,type:Number}}));
return a};s_cD.getDescriptor=s_cD.prototype.getDescriptor;s_dD.prototype.getDescriptor=function(){var a=s_Teb;a||(s_Teb=a=s_2C(s_dD,{0:{name:"PresenceInterval",hh:"location.unified.PresenceInterval"},1:{name:"start_offset_sec",mj:4,type:String},2:{name:"duration_sec",mj:4,type:String},3:{name:"confidence",mj:13,type:Number}}));return a};s_dD.getDescriptor=s_dD.prototype.getDescriptor;
s_eD.prototype.getDescriptor=function(){var a=s_Ueb;a||(s_Ueb=a=s_2C(s_eD,{0:{name:"LocationDescriptor",hh:"location.unified.LocationDescriptor"},1:{name:"role",mj:14,defaultValue:0,type:s_yeb},2:{name:"producer",mj:14,defaultValue:0,type:s_zeb},3:{name:"timestamp",mj:3,type:String},4:{name:"loc",mj:9,type:String},5:{name:"latlng",mj:11,type:s_3C},6:{name:"latlng_span",mj:11,type:s_3C},14:{name:"rect",mj:11,type:s_4C},7:{name:"radius",mj:2,type:Number},8:{name:"confidence",mj:5,defaultValue:100,type:Number},
10:{name:"feature_id",mj:11,type:s_6C},16:{name:"mid",mj:4,type:String},17:{name:"level_feature_id",mj:11,type:s_6C},18:{name:"level_number",mj:2,type:Number},11:{name:"language",mj:9,type:String},9:{name:"provenance",mj:14,defaultValue:0,type:s_Aeb},12:{name:"historical_role",mj:14,defaultValue:0,type:s_yeb},13:{name:"historical_producer",mj:14,defaultValue:0,type:s_zeb},15:{name:"historical_prominence",mj:5,type:Number},19:{name:"attributes",mj:11,type:s_8C},20:{name:"diagnostic_info",mj:9,type:String},
21:{name:"semantic",Lr:!0,mj:14,defaultValue:0,type:s_Beb},22:{name:"semantic_place",Lr:!0,mj:11,type:s_9C},23:{name:"visible_network",Lr:!0,mj:11,type:s_aD},24:{name:"presence_interval",Lr:!0,mj:11,type:s_dD}}));return a};s_eD.getDescriptor=s_eD.prototype.getDescriptor;

s_E("sycl");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sycm */
try{
s_F("sycm");var s_agb=function(a,b,c){this.Da=a;this.$=b;this.wc=c;this.ma=Number(this.$.get("ltp"));this.Ea=Number(this.$.get("sr"));this.Wa=!!this.$.get("iks");this.Ca=Number(Number(s_N(this.Da.$,31)))},s_bgb=function(a){a.$.set("iks",0);a.$.set("sr",0);a.Ea=0},s_cgb=function(a){var b=Number(a.$.get("lpp"));b&&(b=(s_g()-b)/864E5,a.wc.$.lpp=b.toFixed(0));b=s_g();a.ma||(a.ma=b,a.$.set("ltp",a.ma));a.ma&&864E5<s_g()-a.ma&&(a.Ea=0,a.$.set("sr",a.Ea),a.Wa=!0,a.$.set("iks",Number(a.Wa)));return a.Wa?-1>a.Ea?3:1<
a.Ea?2:b-Number(a.$.get("lstot"))<a.Ca?1:b-Number(a.$.get("loot"))<a.Ca?6:5:0},s_dgb=function(a,b,c,d){var e=s_g();(b||500<c)&&a.$.set("lstot",e);switch(d){case 0:a.ma=e;a.$.set("ltp",a.ma);break;case 1:case 5:b?a.Ea++:a.Ea--,a.$.set("sr",a.Ea),a.ma=e,a.$.set("ltp",a.ma)}},s_egb=function(a,b,c){this.Ca=a;this.wc=c;this.$=b?new s_agb(a,b,c):null;this.Wa=this.ma=0;this.Ea=!1};s_=s_egb.prototype;
s_.o2=function(){var a=s_g()-this.Wa,b=this.ma;if(3==this.ma||6==this.ma)b=0,this.$&&s_bgb(this.$);s_fgb(this,a,b);this.$&&s_dgb(this.$,!0,a,b);this.wc.$.succ="1";s_meb(this.wc,this.nJ());this.wc.$.ps=this.ma;this.wc.$.d=a};s_.l2=function(a){var b=s_g()-this.Wa,c=!0;1==a.code&&(c=!1);var d=this.ma;if(2==this.ma&&!c||3==this.ma&&c||500<b&&6==this.ma)d=0,this.$&&s_bgb(this.$);s_fgb(this,b,d);this.$&&s_dgb(this.$,c,b,d);this.wc.$.err=a.code;s_meb(this.wc,this.nJ());this.wc.$.ps=this.ma;this.wc.$.d=b};
s_.nJ=function(){return this.Ea};s_.M_=function(a){a(this.$?s_cgb(this.$):0)};s_.BV=function(a){this.ma=this.$?s_cgb(this.$):0;this.Wa=s_g();this.$&&this.$.$.set("loot",s_g());a()};var s_fgb=function(a,b,c){s_N(a.Ca.$,3)&&0!=c?1==c&&(a.Ea=!0):500<b&&(a.Ea=!0)};

s_E("sycm");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sycr */
try{
s_F("sycr");var s_CD,s_1gb=0,s_DD=function(a,b,c){this.ma=a;this.Ca=b;this.Wa=c};s_DD.prototype.$=!1;s_DD.prototype.Ea=0;s_DD.prototype.get=function(){if((!this.$||this.Ea<s_1gb)&&s_CD&&this.ma+"-config"in s_CD){var a=s_CD[this.ma+"-config"][this.Ca],b=s_1gb;this.Da=void 0!==a?a:this.Wa;this.$=!0;this.Ea=b}if(!this.$)throw Error("Qb");return this.Da};
var s_ED=function(a,b,c,d,e,f){this.lat=a||null;this.Rg=b||null;this.Wi=c||null;this.Ea=!!d;this.ma=e||null;this.$=f||null};s_ED.prototype.toString=function(){return"{lat:"+this.lat+", lon:"+this.Rg+", acc:"+this.Wi+", isCached:"+this.Ea+", ts:"+this.ma+", addr:"+this.$+"}"};
var s_2gb=new s_DD("devloc","cookie_secure",!0),s_3gb=new s_DD("devloc","cookie_timeout",86400),s_4gb=function(a){if(a&&a.lat&&a.Rg&&a.Wi){var b=new s_3C;s__C(b,1,Math.round(1E7*Number(a.lat)));s__C(b,2,Math.round(1E7*Number(a.Rg)));var c=String(1E3*Number(a.ma));a=620*Number(a.Wi);var d=["role:"];d.push(1);d.push("\nproducer:");d.push(12);d.push("\nprovenance:");d.push(6);d.push("\ntimestamp:");d.push(c);d.push("\nlatlng{\nlatitude_e7:");d.push(s_ZC(b,1));d.push("\nlongitude_e7:");d.push(s_ZC(b, 2));d.push("\n}\nradius:");d.push(a);b=d.join("");b=s_ye(b).replace("+","-").replace("/","_");s_hg.set("UULE","a+"+b,s_3gb.get(),"/","",s_2gb.get())}};

s_E("sycr");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sycs */
try{
s_F("sycs");var s_5gb=function(a){this.Ca=a||navigator.geolocation;this.$=this.Ea=this.Wa=null;this.ma=0},s_6gb=new s_DD("devloc","geo_eha",!1),s_$gb=function(){var a=s_7gb,b=s_8gb,c=s_9gb;a.$=null;a.Wa=b;a.Ea=c;b=s_e(a.Da,a);c={enableHighAccuracy:s_6gb.get(),timeout:3E4,maximumAge:15E3};a.Ca.getCurrentPosition(b,b,c)};
s_5gb.prototype.Da=function(a){if(!a||"code"in a)this.$||this.Ea(a),s_H.clearInterval(null);else{if(!this.$||this.$.coords.accuracy>a.coords.accuracy){this.$=a;this.ma=0;var b=!1}else this.ma++,10<=this.ma&&s_H.clearInterval(null),b=!0;b||(b=a.coords,this.Wa(new s_ED(b.latitude,b.longitude,a.coords.accuracy,!1,+a.timestamp)))}};
var s_7gb=null,s_FD=null,s_ahb=!1,s_GD=new s_QC,s_HD=null,s_dhb=function(){if(!s_ahb){s_g();s_bhb();s_ahb=!0;var a=function(){s_$gb();s_H.setTimeout(function(){s_chb()},6E4)},b=s_sD();s_O(s_GD,23,!1)&&b?(s_HD=new s_8fb(new s_jeb(s_GD),b,s_keb(google.kEI)),s_HD.BV(a)):(s_HD=null,a())}},s_chb=function(){s_bhb();s_H.clearInterval(null);s_ahb=!1},s_bhb=function(){if(!s_7gb){if("geolocation"in navigator)var a=navigator.geolocation;s_7gb=new s_5gb(a)}},s_8gb=function(a){s_HD&&s_HD.o2();s_FD.success.call(s_FD, a)},s_9gb=function(a){s_HD&&s_HD.l2(a);s_FD.error.call(s_FD,a)};
var s_ehb=function(){};s_ehb.prototype.success=function(){};s_ehb.prototype.error=function(){};var s_fhb={code:0},s_ghb=function(a,b){this.Zd=a;this.$=b};s_ghb.prototype.success=function(a){this.$.o2();this.Zd.success(a)};s_ghb.prototype.error=function(a){this.$.l2(a||s_fhb);this.Zd.error(a)};var s_hhb=new s_DD("devloc","msg_err","Location unavailable"),s_ihb=new s_DD("devloc","uul_text",""),s_jhb=new s_DD("devloc","msg_gps","Using GPS"),s_khb=new s_DD("devloc","msg_dsc",""),s_lhb=new s_DD("devloc","msg_dvl",""),s_mhb=new s_DD("devloc","msg_upd","update"),s_nhb=new s_DD("devloc","msg_use","update"),s_ohb=new s_DD("devloc","msg_unk","Unknown"),s_phb=new s_DD("devloc","mnr_crd","0"),s_qhb=new s_DD("devloc","ftr_rdn",!1),s_rhb=new s_DD("devloc","dl_tld_mismatch",!1),s_shb=new s_DD("devloc", "estd",!1);
var s_thb=new s_DD("devloc","rgc_md",2E3),s_uhb=new s_DD("devloc","rgc_me",10),s_vhb=new s_DD("devloc","rgc_to",12096E5),s_whb=new s_DD("devloc","rgc_url","/uul?uulo=4");var s_xhb=function(a,b){this.ma=a;this.$=b||null};s_h(s_xhb,s_ehb);s_xhb.prototype.success=function(a){s_4gb(a);this.ma(a)};s_xhb.prototype.error=function(a){this.$&&this.$(a)};var s_yhb=new s_DD("devloc","driver_ui_type",0),s_zhb=new s_DD("devloc","jsc"),s_Ahb=function(a,b){var c;s_chb();a=new s_xhb(a,b);if(b=!c)b=1==s_N(s_GD,10);b&&(b=s_sD())&&(c=new s_egb(new s_jeb(s_GD),b,s_leb()));c&&(a=new s_ghb(a,c),c.BV(s_d));s_FD=a;s_dhb()};

s_E("sycs");s_G();
}catch(e){_DumpException(e)}
/* _Module_:dvl */
try{
var s_lXc=function(){return s_wk("local","devloc")},s_mXc=function(a,b,c){this.address=a;this.$=b;this.timestamp=s_c(c)?c:s_g()},s_nXc=function(){var a=s_lXc();if(!a)return null;var b=a.get("swml.location"),c=a.get("swml.location.isdev");a=a.get("swml.location.ts");return null==b||null==c||null==a?null:new s_mXc(String(b),!!Number(c),Number(a))},s_oXc=function(a,b,c){var d=s_6d(b);s_t(a,"display",b.offsetHeight-d.top-d.bottom>c.offsetHeight?"none":"")},s_bZ=function(){this.$=""};s_h(s_bZ,s_ehb);
s_bZ.prototype.error=function(){this.$=""};s_bZ.prototype.success=function(a){a&&a.lat&&a.Rg&&(this.$=null!=s_lhb?s_lhb.get():"")};s_bZ.prototype.I7=function(){var a=this;if(s_shb.get()){var b=s_sD();b&&(b=new s_egb(new s_jeb(s_GD),b,s_leb()),a=new s_ghb(a,b),b.BV(s_d))}s_FD=a;s_dhb()};s_bZ.prototype.rP=function(){this.I7()};
var s_qXc=function(a,b,c,d){if(s_qhb.get()){(c=s_n("swml-loc"))&&s_6c(c);var e=b?b.$||s_jhb.get():s_ohb.get();c.appendChild(s_Nf(e));c=s_n("swml-upd");s_6c(c);e=s_pXc(a);s_x(e,"footer__redesign-link");c.appendChild(e);c=s_n("swml_lmsep");b&&a.$?(b=s_n("swml-src"),s_6c(b),b.appendChild(s_Nf(a.$)),(a=s_gd(b))&&c&&s_oXc(c,a,b)):s_t(c,"display","none")}else{e=s_3c("span");s_z(e,"known_loc",d);s_z(e,"unknown_loc",!d);s_6c(c);d=b?b.$||s_jhb.get():s_ohb.get();var f=s_r("SPAN",{id:"swml_addr"});f.appendChild(s_Nf(d));
s_5c(c,e,f);b&&a.$&&(b=s_3c("span"),b.appendChild(s_Nf(a.$)),s_5c(c,s_Nf(" - "),b))}},s_rXc=function(){var a=s_nXc();return a&&a.$?s_g()-a.timestamp<=Number(3E5):!1},s_sXc=function(a,b){var c=null,d=s_ihb.get();if(d)c=s_khb;else{var e=s_nXc();e&&(d=e.address,c=s_lhb)}a.$=null!=c?c.get():"";s_qXc(a,d?new s_ED(null,null,null,null,null,d):null,b,!1)},s_pXc=function(a){var b=s_r("A",{href:"#"});s_4c(b,s_Nf(s_rXc()?s_mhb.get():s_nhb.get()));b.addEventListener("click",s_e(function(a){a.preventDefault();
a.stopPropagation();this.rP()},a),!1);return b};s_bZ.prototype.pv=function(a,b){if(!s_rhb.get()&&!s_qhb.get()){var c=s_Nf(" - ");a.appendChild(c);a.appendChild(b);b.getClientRects&&1<b.getClientRects().length&&a.replaceChild(s_3c("br"),c)}};var s_tXc=function(){var a=s_n("swml");if(a&&"1"===s_phb.get()){var b=a.getElementsByTagName("DIV");if(b&&b[0])return b[0]}return a};
s_bZ.prototype.Ca=function(){if("1"===s_phb.get()){var a=s_n("swml_lmsep");if(s_qhb.get()){var b=s_n("swml-src");var c=s_gd(b)}else c=s_n("swml"),b=s_tXc();a&&c&&b&&s_oXc(a,c,b)}};
var s_uXc=function(a){a=new s_mXc(a||"",!0);var b=s_lXc();if(b&&a)try{b.set("swml.location",a.address),b.set("swml.location.isdev",a.$?"1":"0"),b.set("swml.location.ts",String(a.timestamp))}catch(c){}},s_cZ=[],s_vXc={},s_wXc=!1,s_xXc=function(){var a=s_lXc();if(a){var b=s_cZ.length;a.set("web.rgc."+google.kHL+".count",b);try{for(var c=0;c<b;c++){var d="web.rgc."+google.kHL+"."+c+".";var e=s_cZ[c];a.set(d+"lat",e.lat);a.set(d+"lon",e.Rg);a.set(d+"acc",e.Wi);a.set(d+"rgc",e.Yu);a.set(d+"last",e.Cy)}}catch(f){}}},
s_yXc=function(){if(!s_wXc){var a=s_lXc();if(a){var b=Number(a.get("web.rgc."+google.kHL+".count"))||0;try{for(var c=0;c<b;c++){var d="web.rgc."+google.kHL+"."+c+".";var e={};e.lat=a.get(d+"lat");e.Rg=a.get(d+"lon");e.Wi=a.get(d+"acc");e.Yu=a.get(d+"rgc");e.Cy=a.get(d+"last");s_cZ.push(e);s_vXc[e.Yu]=1}}catch(f){}s_wXc=!0}}},s_zXc=function(a,b){s_H.qc(function(){if(b){s_yXc();s_cZ.unshift({lat:a.lat,Rg:a.Rg,Wi:a.Wi,Yu:b,Cy:s_g()});s_vXc[b]=1;if(s_cZ.length>s_uhb.get()){for(var c=s_g()-s_vhb.get(),
d,e=0,f,g=s_cZ.length-1;0<=g;g--)if(f=s_cZ[g],f.Cy<c)d=g,e++;else{0==e&&(d=g,e++);break}if(c=s_lXc())try{for(f=d;f<d+e;f++)delete s_vXc[s_cZ[f].Yu],g="rgc:"+f+":",c.remove(g+"lat"),c.remove(g+"lon"),c.remove(g+"acc"),c.remove(g+"rgc"),c.remove(g+"last");s_cZ.splice(d,e)}catch(k){}}s_xXc()}})},s_AXc=function(a){this.qf=a||s_Kf()};
s_AXc.prototype.get=function(a,b,c){if(!c&&(c=s_BXc(a))){b(c);return}c=s_whb.get();google.kHL&&(c=c+"&hl="+google.kHL);this.qf.open("GET",c,!0);this.qf.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var c=this.responseText;s_ya(s_Ha(c))||(s_zXc(a,c),b(c))}};this.qf.send("")};
var s_BXc=function(a){if(!a||!a.lat||!a.Rg)return null;s_yXc();for(var b=s_thb.get(),c=null,d,e,f,g=0;g<s_cZ.length;g++){f=s_cZ[g];if(s_ra(a)&&s_ra(f)){var k=a.lat;var l=a.Rg;var m=f.lat;e=f.Rg}else k=a,l=f,e=m=void 0;k=k*Math.PI/180;m=m*Math.PI/180;e=12734E3*Math.asin(Math.min(1,Math.sqrt(Math.pow(Math.sin((m-k)/2),2)+Math.cos(k)*Math.cos(m)*Math.pow(Math.sin((e*Math.PI/180-l*Math.PI/180)/2),2))));e<b&&(b=e,c=f,d=g)}c&&(c.Cy=s_g(),s_cZ.splice(d,1),s_cZ.unshift(c),s_H.setTimeout(s_xXc,100));return c&&
c.Yu||null},s_dZ=function(a){this.$="";this.Da=a||new s_AXc;this.Wa=this.Ea=!0;this.ma=null};s_h(s_dZ,s_bZ);s_dZ.prototype.start=function(){s_ihb.get()&&(this.Wa=!1);var a=s_tXc();a&&(s_sXc(this,a),this.I7());s_CXc(this)};var s_CXc=function(a){"1"===s_phb.get()&&s_Jn(s_e(a.Ca,a))};s_=s_dZ.prototype;s_.I7=function(){s_ahb&&this.ma?this.Da.get(this.ma,s_e(this.bNa,this,this.ma),!0):(this.Ea=!0,s_dZ.Ba.I7.call(this))};s_.rP=function(){this.Wa=!0;this.I7()};
s_.success=function(a){s_dZ.Ba.success.call(this,a);s_4gb(a);this.Ea&&(s_uXc(null),this.Da.get(a,s_e(this.bNa,this,a)),this.ma=a,this.Ea=!1)};s_.error=function(a){if(this.Ea){var b=s_tXc();if(b){if(this.Wa){var c=s_hhb.get();s_qXc(this,c?new s_ED(null,null,null,null,null,c):null,b,!1)}a.code!=a.PERMISSION_DENIED?this.pv(b,s_pXc(this)):(s_DXc(),this.Ca())}}};s_.bNa=function(a,b){a.$=b;var c=s_tXc();c&&(s_qXc(this,a,c,!0),this.pv(c,s_pXc(this)));s_uXc(b)};
s_.pv=function(a,b){s_DXc();s_dZ.Ba.pv.call(this,a,b);this.Ca()};var s_DXc=function(){var a=s_n("swml");a&&(s_t(a,"visibility","visible"),s_t(a,"display",""))},s_EXc=function(a){s_dZ.call(this,a)};s_h(s_EXc,s_dZ);s_EXc.prototype.start=function(){var a=s_tXc();a&&(s_sXc(this,a),this.pv(a,s_pXc(this)));s_CXc(this)};s_F("dvl");
s_ta("google.devloc.boc",function(a,b,c,d,e){var f=a.getAttribute(b),g=a.onclick;a.onclick=null;a.style.opacity=.5;f&&(s_o(c).style.display="none",s_o(d).style.display="inline-block",s_o(e).style.display="none",s_Ahb(function(){s_Rh(a,a.getAttribute("data-ved"),f)},function(b){b.code==b.PERMISSION_DENIED?(s_o(c).style.display="none",s_o(d).style.display="none",s_o(e).style.display="inline-block"):(s_o(c).style.display="inline-block",s_o(d).style.display="none",s_o(e).style.display="none",a.onclick=
g,a.style.opacity=1)}))});var s_zMd={};s_hf("dvl",(s_zMd.init=function(a){s_CD||(s_CD={});s_CD["devloc-config"]=a;s_1gb++;(a=s_zhb.get())&&(s_GD=new s_QC(JSON.parse(a)));a=Number(s_yhb.get());1==a?(new s_dZ).start():2==a&&(new s_EXc).start()},s_zMd.dispose=function(){s_chb()},s_zMd));


s_E("dvl");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3w */
try{
s_F("sy3w");var s_Bl=null,s_psa=!0,s_Cl=s_d;
s_E("sy3w");s_G();
}catch(e){_DumpException(e)}
/* _Module_:foot */
try{
var s_qsa=!1,s_rsa=0,s_ssa=!1,s_tsa=!1,s_usa=function(){var a=s_n("fbar"),b=s_n("fuser")||s_n("fsr"),c=s_n("fsl");a&&b&&c&&(a=s_q("fbar",a),s_y(a,"fmulti"),32>a.clientWidth-c.offsetWidth-b.offsetWidth-30-34&&s_x(a,"fmulti"))},s_vsa=function(){var a=s_Bl=s_Bl||s_n("fbarcnt"),b=s_n("fbar");if(b&&a&&s_0d(a)&&(s_tsa||!s_ssa||s_rsa!=window.innerWidth)){s_rsa=window.innerWidth;s_t(a,{height:"auto"});s_t(b,{bottom:"",position:""});s_usa();if(s_n("dbg_"))s_t(b,{position:"static"});else{var c=window.innerHeight|| Math.max(document.documentElement.clientHeight,document.body.scrollHeight),d=s_Pd(a).y;c-=d;c>b.offsetHeight&&(s_t(a,{height:c+"px"}),s_t(b,{bottom:"0",position:"absolute"}))}s_t(a,{visibility:"visible"})}};s_F("foot");
var s_wsa=null,s_Dl=null,s_El=null,s_ysa=function(){if(s_0d(s_Dl))s_El.setAttribute("aria-expanded","false"),s_xsa();else{s_El.setAttribute("aria-expanded","true");var a=s_u(s_Dl),b=-20;if(s_We())c=s_u(s_El),0>s_Pd(s_El).x+c.width-a.width-b&&(b=s_7d(s_El),b=c.width-a.width+b.left+b.right),s_Dl.style.right=b+"px";else{if(s_Pd(s_El).x+a.width+b>s_Xc().width){var c=s_u(s_El);b=s_7d(s_El);b=c.width-a.width+b.left+b.right}s_Dl.style.left=b+"px"}s_v(s_Dl,!0);s_l(document.body,"click",s_xsa)}},s_xsa=function(a){a&&
a.target==s_El||s_v(s_Dl,!1);s_m(document.body,"click",s_xsa)},s_zsa=function(a){s_wsa&&s_v(s_wsa,!a)},s_lEa={};
s_hf("foot",(s_lEa.init=function(a){s_Dl=s_n("fsett");s_El=s_n("fsettl");s_Dl&&s_El&&s_Oh("foot",{cst:s_ysa});var b=s_n("fbar");b&&s_v(b,!0);s_wsa=s_n("footcnt");s_zsa(!1);b=a.po;var c=a.qe,d=a.pf;s_Bl=s_n("fbarcnt");s_tsa=!!c;s_psa=null!=s_Bl&&(void 0===d||d);s_ssa=!!b;s_Cl=s_psa?s_Ke(null,s_vsa,!1):s_usa;s_Cl();s_qsa||(s_l(window,"resize",s_Cl),s_de(165,s_Cl),s_qsa=!0);void 0!==a.dv&&""!==a.dv&&s_hg.set("DV",a.dv,600)},s_lEa.dispose=function(){s_Qh("foot",["cst"])},s_lEa));s_de(37,s_zsa); s_de(155,s_f(s_zsa,!0));


s_E("foot");s_G();
}catch(e){_DumpException(e)}
/* _Module_:fpe */
try{
s_F("fpe");var s_XPd,s_YPd=!1,s_f6=function(a){s_k.call(this);var b=a||!1;a=!!(s_hj()&&window.gbar&&gbar.elc&&gbar.elr);this.Ca=b&&!a;this.Wa=[];s_YPd||(a&&gbar.elc(s_e(function(){b&&s_ZPd(gbar.elr().mo);s_fe(71)},this)),s_YPd=!0);this.Ca&&(this.$=s_Ke(null,s_e(this.Da,this),!0),s_l(window,"resize",this.$,!1,this),this.$());(a=s_n("tbbcc"))&&this.Wa.push(a);this.Ea();s_l(window,"scroll",this.Ea,!1,this)};s_h(s_f6,s_k);
s_f6.prototype.Ha=function(){this.Wa=[];this.Ca&&s_m(window,"resize",this.$,!1,this);s_m(window,"scroll",this.Ea,!1,this)};var s_ZPd=function(a){var b=s_n("cnt"),c=s_n("searchform");b&&(s_z(b,"big","lg"==a),s_z(b,"mdm","md"==a));c&&(s_z(c,"big","lg"==a),s_z(c,"mdm","md"==a))};s_f6.prototype.Da=function(){var a=document.body;a&&s_ZPd(1250<=a.offsetWidth?"lg":"sm")};s_f6.prototype.$=null;
s_f6.prototype.Ea=function(){var a=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,b=s_We(),c=b?"marginRight":"marginLeft",d=b?"right":"left";b&&(a=Math.abs(a));b=0;for(var e;e=this.Wa[b];b++)"fixed"==s_Ld(e)&&("tbbcc"==e.id?e.style[c]=-a+"px":e.style[d]=-a+"px")};var s_Ome={};s_hf("fpe",(s_Ome.init=function(a){s_XPd=new s_f6(a.js)},s_Ome.dispose=function(){s_XPd&&(s_XPd.dispose(),s_XPd=null)},s_Ome));

s_E("fpe");s_G();
}catch(e){_DumpException(e)}
/* _Module_:ipv6 */
try{
s_F("ipv6");var s_Fl=null,s_Bsa=function(a){s_ta("google.v6t",s_g());s_ta("google.v6s",0);s_Fl=new Image;s_ta("google.v6",s_Fl);s_Fl.onload=s_Fl.onerror=function(){s_ta("google.v6s",1)};s_Fl.src=a+"&rndm="+Math.random()},s_mEa={};s_if("ipv6",(s_mEa.init=function(a){a.url&&s_Bsa(a.url)},s_mEa.dispose=function(){s_Fl=null},s_mEa));

s_E("ipv6");s_G();
}catch(e){_DumpException(e)}
/* _Module_:lu */
try{
s_F("lu");var s_f$c=["luibli","luibbri"],s_g$c={},s_T_=-1,s_h$c=null,s_i$c=function(a,b,c){a=a.cloneNode(!0);var d,e;b.hasAttribute("data-mh")&&(d=b.getAttribute("data-mh"));b.hasAttribute("data-mw")?e=b.getAttribute("data-mw"):e=88*c-16;var f;"IMG"==a.tagName?f=a:f=a.getElementsByTagName("IMG")[0];f.id="";f.width=e;void 0!==d&&(f.height=d);f.onload=function(){f.style.display="block";delete f.onload};f.style.display="none";c=f.src.split("&")[0]+"&w="+e;void 0!==d&&(c+="&h="+d);f.src=c;null!=f.parentNode&&(f.parentNode.style.width=
e+"px",void 0!==d&&(f.parentNode.style.height=d+"px"));b.appendChild(a)},s_j$c=function(a){if(!a)return null;var b=0;for(c in a){var c=Number(c);if(0<a[c].offsetHeight){var d=a[c];b=c;break}}if(!d)return null;if(!d.firstChild){for(c in a)if(c=Number(c),a[c].firstChild){var e=a[c];break}s_i$c(e.firstChild,d,b)}return{element:d,wFa:b}},s_m$c=function(){for(var a=s_k$c(),b=!1,c=0;c<s_f$c.length;c++)for(var d=s_p(s_f$c[c]),e=0;e<d.length;e++)s_l$c(d[e])&&(b=!0);return a||b},s_k$c=function(){var a=s_n("rhs_block");
if(!a||0==a.offsetHeight)return!1;a:{for(var b={},c=3;5>=c;c++)if(b[c]=a.querySelector(".rhsmap"+c+"col"),b[c])b[c].column_count=c;else{a=null;break a}a=b}b=s_j$c(a);if(!b)return!1;a=b.wFa;if(s_T_==a&&s_g$c[s_T_])return!0;b=b.element.getElementsByTagName("IMG")[0];b.id||(s_n("lu_map").id="",b.id="lu_map");s_g$c[a]||(s_g$c[a]=!0);s_T_=a;return!0},s_l$c=function(a){for(var b=[],c,d=s_A.get(a,"action"),e=3;5>=e;e++){var f=a.querySelector(".luib-"+e);if(!f)return!1;f=f.querySelector(".thumb");if(!f)return!1;
b.push(f);0<f.offsetHeight&&(c=f)}if(!c)return!1;var g=parseInt(c.style.width,10);f=parseInt(c.style.height,10);if((e=c.querySelector("img"))&&e.src)return!0;for(e=0;e<b.length;e++){var k=b[e].querySelector("img");if(k&&k.src){var l=s_r("DIV");l.innerHTML=b[e].innerHTML;"CONTAIN"==d&&(l.style.backgroundColor=b[e].style.backgroundColor);var m=k;break}}if(!m)return!1;b=l.querySelector("img");"NONE"==d&&(b.width=g,b.height=f,m=s_ag(m.src),m.$("w",parseInt(g,10)),m.$("h",parseInt(f,10)),b.src=m.toString());
c.innerHTML=l.innerHTML;"CROP"==d&&(b=c.querySelector("img"),m=(g-b.width)/2+"px",s_2d(a)?b.style.right=m:b.style.left=m,b.style.top=(f-b.height)/2+"px");"CONTAIN"==d&&(b=c.querySelector("img"),c.style.backgroundColor=l.style.backgroundColor,l=Math.min(c.offsetHeight/b.height,c.offsetWidth/b.width),d=b.width*l,l*=b.height,b.width=d,b.height=l,b.style.top=(c.offsetHeight-l)/2+"px",m=(c.offsetWidth-d)/2+"px",s_2d(a)?b.style.right=m:b.style.left=m);return!0},s_JJd={}; s_hf("lu",(s_JJd.init=function(){"webhp"!=google.sn&&s_n("lu_map")&&(s_m$c()?(s_h$c=s_Ke(null,s_m$c,!0),s_de(60,s_h$c)):(s_T_=3,s_g$c[s_T_]=!0))},s_JJd.dispose=function(){s_h$c&&(s_ee(60,s_h$c),s_h$c=null);s_g$c={};s_T_=-1},s_JJd));

s_E("lu");s_G();
}catch(e){_DumpException(e)}
/* _Module_:m */
try{
var s_5Pd={};s_F("m");var s_i6=null;var s_6Pd,s_7Pd,s_8Pd,s_9Pd,s_$Pd,s_j6,s_aQd={},s_k6=null,s_l6=null,s_m6=[],s_cQd=function(){s_i6.ab.on&&(s_de(41,s_bQd),s_de(37,function(a){a&&(a=s_n("appbar"))&&(a.style.visibility="hidden")}),s_n("pocs"))},s_dQd=function(){return s_n("sftab")||s_n("lst-ib")},s_eQd=function(){var a=s_dQd();a&&s_x(a,"lst-d-f")},s_fQd=function(){var a=s_dQd();a&&s_y(a,"lst-d-f")},s_gQd=function(a){this.element=a;this.$=[];this.ma=null;"ab_opt"==this.element.id&&0==this.element.childNodes.length&&gbar.aomc(this.element);
a=s_p("ab_dropdownitem",this.element);for(var b=0,c;c=a[b];b++)s_w(c,"disabled")||this.$.push(c)},s_iQd=function(a){var b=s_k6;s_hQd(b,null==b.ma?a?0:b.$.length-1:(b.ma+(a?1:b.$.length-1))%b.$.length)},s_hQd=function(a,b){var c=a.$[b];c&&(s_jQd(a),s_x(c,"selected"),c.setAttribute("aria-selected","true"),c=c.querySelector("a, .action-menu-button")||c,c.setAttribute("tabindex","0"),c.focus(),a.ma=b)},s_jQd=function(a){if(null!=a.ma){var b=a.$[a.ma];b&&(s_y(b,"selected"),b.setAttribute("aria-selected",
"false"),(b.querySelector("a, .action-menu-button")||b).setAttribute("tabindex","-1"),a.element.focus(),a.ma=null)}};s_gQd.prototype.kd=function(a){for(var b=0,c;c=this.$[b];b++)if(a==c){b!=this.ma&&s_hQd(this,b);break}};
var s_lQd=function(a){var b=(a=s_nd(a,"ab_button"))&&s_l6!=a;s_k6&&s_n6();a&&b&&s_kQd(a)},s_mQd=function(a){google.ac&&google.ac.cc&&google.ac.cc();s_ne(a.href);return!0},s_nQd=function(a,b,c){32==c.keyCode&&s_ne(a.href)},s_oQd=function(a){s_v(s_n("ufp"),"block");s_lQd(a)},s_kQd=function(a,b){var c=s_sa(a);if(void 0==s_aQd[c]){var d=s_nd(a,"ab_ctl");var e=null;d&&(d=s_q("ab_dropdown",d))&&(e=new s_gQd(d));s_aQd[c]=e}if(c=s_aQd[c])s_x(a,"selected"),a.setAttribute("aria-expanded","true"),s_l6=a,c.element.style.visibility=
"inherit",s_k6=c,c=a.id.indexOf("am-b"),a.id&&-1!=c&&(c=s_gd(a))&&s_w(c,"action-menu")&&(c=s_q("action-menu-panel",c))&&s_B(a,[c],[],"","&id="+a.id),s_l(document.body,"click",s_n6),s_l(document.body,"keydown",s_pQd),b&&s_iQd(!0)},s_n6=function(a){s_k6&&((a=a&&a.jd||window.event)&&"click"==a.type&&s_nd(s_Ie(a),"ab_button")&&(s_Je(a),a.preventDefault?a.preventDefault():a.returnValue=!1),s_m(document.body,"click",s_n6),s_m(document.body,"keydown",s_pQd),s_jQd(s_k6),s_k6.element.style.visibility="hidden",
s_k6=null);s_l6&&(s_y(s_l6,"selected"),s_l6.setAttribute("aria-expanded","false"),s_l6=null)},s_pQd=function(a){27==a.keyCode&&s_n6()},s_qQd=function(a,b,c){if(9==c.keyCode)s_n6();else if(27==c.keyCode){if(s_k6)return s_n6(),s_o6(c)}else{if(38==c.keyCode||40==c.keyCode)return s_k6?s_iQd(40==c.keyCode):s_kQd(a,!0),s_o6(c);if(37==c.keyCode||39==c.keyCode)return s_o6(c)}return!0},s_rQd=function(a,b,c){s_k6&&((a=s_nd(s_Ie(c),"ab_dropdownitem"))?s_k6.kd(a):s_jQd(s_k6))},s_sQd=function(){s_k6&&s_jQd(s_k6)},
s_tQd=function(a,b,c){if(s_k6)if(9==c.keyCode)s_n6();else{if(27==c.keyCode)return a=s_l6,s_n6(),a.focus(),s_o6(c);if(38==c.keyCode)return s_iQd(!1),s_o6(c);if(40==c.keyCode)return s_iQd(!0),s_o6(c);if(32==c.keyCode||37==c.keyCode||39==c.keyCode)return s_o6(c)}return!0},s_o6=function(a){s_Je(a);a.preventDefault&&a.preventDefault();return a.returnValue=!1},s_uQd=function(a){return s_Hb()?(37!=a.keyCode&&38!=a.keyCode&&39!=a.keyCode&&40!=a.keyCode||s_o6(a),!1):!0},s_bQd=function(a){var b=s_n("rcnt"),
c=s_ij();if(c&&b){var d=parseInt(s_Id(c,"top"),10),e=s_dQd();e=e?e.offsetHeight:c.offsetHeight;b=s_Td(b);if(a!=s_6Pd||d!=s_7Pd||e!=s_8Pd||b!=s_9Pd){s_6Pd=a;s_7Pd=d;s_8Pd=e;s_9Pd=b;d=0;var f;if(f=a)f=!s_5Pd.isch;f&&(c=s_Td(c)+e,d=Math.max(0,a+7-b+c));s_$Pd=d}(a=s_n("center_col"))&&a.style.paddingTop!=s_$Pd+"px"&&(a.style.paddingTop=s_$Pd+"px")}return!1},s_vQd=function(){var a=s_n("bbar");a&&s_v(a,!1)},s_wQd=function(){var a=s_n("mbbar");a&&s_v(a,!1)},s_xQd=function(a){s_j6&&s_j6.remove("bbh");s_ne(a.href)}, s_yQd=function(a){s_t(a,"visibility","hidden");s_v(a,!0);var b=s_u(a);s_t(a,"margin-left",-Math.floor(b.width/2)+"px");s_t(a,"visibility","visible")};
var s_zQd=!1,s_Qme={};
s_hf("m",(s_Qme.init=function(a){s_i6=a;s_zQd||s_cQd();s_zQd=!0;s_dQd()&&(a=s_n("lst-ib"),s_l(a,"focus",s_eQd),s_l(a,"blur",s_fQd),a==s_od(document)&&s_eQd());s_j6=s_wk("local","abar");s_m6=[];(a=s_n("abar_ps_on"))&&s_m6.push(new s_h6(a,s_w(a,"disabled")?s_i6.msgs.sPersD:s_i6.msgs.sPers));(a=s_n("abar_ps_off"))&&s_m6.push(new s_h6(a,s_w(a,"disabled")?s_i6.msgs.hPersD:s_i6.msgs.hPers));a=s_j6?s_j6.get("bbh"):"";var b=document.getElementById("safesearch");if("1"!=a&&(!b||b.getAttribute("data-safesearch-on"))){var c=document.getElementById("bbar");
c&&(s_yQd(c),s_j6&&s_j6.set("bbh",1))}c&&"visible"==s_Hd(c,"visibility")||(c=document.getElementById("mbbar"))&&s_yQd(c);s_Oh("m",{cc:s_mQd,hbke:s_qQd,hdke:s_tQd,hdhne:s_rQd,hdhue:s_sQd,go:s_nQd,mskpe:s_uQd,tdd:s_lQd,tei:s_oQd,hbb:s_vQd,hmbb:s_wQd,cbbl:s_xQd},!0)},s_Qme.dispose=function(){if(s_dQd()){var a=s_n("lst-ib");s_m(a,"focus",s_eQd);s_m(a,"blur",s_fQd)}s_k6&&s_n6();s_aQd={};for(a=0;a<s_m6.length;a++)s_m6[a].destroy();s_m6=[];s_Qh("ab","cc hbke hdke hdhne hdhue go mskpe tdd tei tne".split(" "))}, s_Qme));


s_E("m");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy1t */
try{
var s_rka=function(a){return Array.prototype.concat.apply([],arguments)};s_F("sy1t");var s_ska;s_Db("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
var s_jj=function(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")},s_kj=function(a){return a.getAttribute("role")||null},s_lj=function(a,b,c){s_oa(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(s_ska||(s_ska={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=s_ska,b in c?a.setAttribute(d,c[b]): a.removeAttribute(d)):a.setAttribute(d,c)},s_mj=function(a,b){a.removeAttribute("aria-"+b)},s_nj=function(a,b){a=a.getAttribute("aria-"+b);return null==a||void 0==a?"":String(a)},s_tka=function(a,b){var c="";b&&(c=b.id);s_lj(a,"activedescendant",c)};

s_E("sy1t");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy6y */
try{
var s_gFa=function(a,b){return b.x<a.left?b.x-a.left:b.x>a.right?b.x-a.right:0},s_hFa=function(a,b){return b.y<a.top?b.y-a.top:b.y>a.bottom?b.y-a.bottom:0},s_iFa=function(a,b){var c=s_gFa(a,b);a=s_hFa(a,b);return Math.sqrt(c*c+a*a)},s_jFa=function(a){if(s_Zb)a=s_eja(a);else if(s_1b&&s__b)switch(a){case 93:a=91}return a},s_kFa=function(a,b,c,d,e,f){if(!(s_Wb||s_Xb||s__b&&s_6b("525")))return!0;if(s_1b&&e)return s_Vi(a);if(e&&!d)return!1;s_ja(b)&&(b=s_jFa(b));e=17==b||18==b||s_1b&&91==b;if((!c||s_1b)&&
e||s_1b&&16==b&&(d||f))return!1;if((s__b||s_Xb)&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(s_Wb&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!(s__b||s_Xb)}return s_Vi(a)};s_F("sy6y");
var s_3r=function(a,b){s_Ad.call(this);a&&this.Jf(a,b)};s_h(s_3r,s_Ad);s_=s_3r.prototype;s_.Aa=null;s_.Ay=null;s_.gD=null;s_.By=null;s_.Vh=-1;s_.Pm=-1;s_.zA=!1;
var s_lFa={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},s_mFa={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},s_nFa=s_Wb||s_Xb||s__b&&s_6b("525"),s_oFa=s_1b&&s_Zb;
s_=s_3r.prototype;s_.bW=function(a){if(s__b||s_Xb)if(17==this.Vh&&!a.ctrlKey||18==this.Vh&&!a.altKey||s_1b&&91==this.Vh&&!a.metaKey)this.Pm=this.Vh=-1;-1==this.Vh&&(a.ctrlKey&&17!=a.keyCode?this.Vh=17:a.altKey&&18!=a.keyCode?this.Vh=18:a.metaKey&&91!=a.keyCode&&(this.Vh=91));s_nFa&&!s_kFa(a.keyCode,this.Vh,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey)?this.handleEvent(a):(this.Pm=s_jFa(a.keyCode),s_oFa&&(this.zA=a.altKey))};s_.a_=function(a){this.Pm=this.Vh=-1;this.zA=a.altKey};
s_.handleEvent=function(a){var b=a.jd,c=b.altKey;if(s_Wb&&"keypress"==a.type){var d=this.Pm;var e=13!=d&&27!=d?b.keyCode:0}else(s__b||s_Xb)&&"keypress"==a.type?(d=this.Pm,e=0<=b.charCode&&63232>b.charCode&&s_Vi(d)?b.charCode:0):s_Vb&&!s__b?(d=this.Pm,e=s_Vi(d)?b.keyCode:0):(d=b.keyCode||this.Pm,e=b.charCode||0,s_oFa&&(c=this.zA),s_1b&&63==e&&224==d&&(d=191));var f=d=s_jFa(d);d?63232<=d&&d in s_lFa?f=s_lFa[d]:25==d&&a.shiftKey&&(f=9):b.keyIdentifier&&b.keyIdentifier in s_mFa&&(f=s_mFa[b.keyIdentifier]);
a=f==this.Vh;this.Vh=f;b=new s_pFa(f,e,a,b);b.altKey=c;this.dispatchEvent(b)};s_.va=function(){return this.Aa};s_.Jf=function(a,b){this.By&&s_qFa(this);this.Aa=a;this.Ay=s_l(this.Aa,"keypress",this,b);this.gD=s_l(this.Aa,"keydown",this.bW,b,this);this.By=s_l(this.Aa,"keyup",this.a_,b,this)};var s_qFa=function(a){a.Ay&&(s_kc(a.Ay),s_kc(a.gD),s_kc(a.By),a.Ay=null,a.gD=null,a.By=null);a.Aa=null;a.Vh=-1;a.Pm=-1};s_3r.prototype.Ha=function(){s_3r.Ba.Ha.call(this);s_qFa(this)}; var s_pFa=function(a,b,c,d){s_ec.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c};s_h(s_pFa,s_ec);

s_E("sy6y");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy7d */
try{
s_F("sy7d");var s_Jt=function(a,b,c){s_k.call(this);this.qd=null;this.Ea=!1;this.Tf=a;this.Wa=c;this.$=b||window;this.Zd=s_e(this.eJ,this)};s_h(s_Jt,s_k);s_=s_Jt.prototype;s_.start=function(){this.stop();this.Ea=!1;var a=s_vLa(this),b=s_wLa(this);a&&!b&&this.$.mozRequestAnimationFrame?(this.qd=s_l(this.$,"MozBeforePaint",this.Zd),this.$.mozRequestAnimationFrame(null),this.Ea=!0):this.qd=a&&b?a.call(this.$,this.Zd):this.$.setTimeout(s_pca(this.Zd),20)};
s_.stop=function(){if(this.Yh()){var a=s_vLa(this),b=s_wLa(this);a&&!b&&this.$.mozRequestAnimationFrame?s_kc(this.qd):a&&b?b.call(this.$,this.qd):this.$.clearTimeout(this.qd)}this.qd=null};s_.Yh=function(){return null!=this.qd};s_.eJ=function(){this.Ea&&this.qd&&s_kc(this.qd);this.qd=null;this.Tf.call(this.Wa,s_g())};s_.Ha=function(){this.stop();s_Jt.Ba.Ha.call(this)};
var s_vLa=function(a){a=a.$;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null},s_wLa=function(a){a=a.$;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};

s_E("sy7d");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy7e */
try{
var s_xLa=function(a,b){a=String(a).toLowerCase();b=String(b).toLowerCase();return a<b?-1:a==b?0:1},s_yLa=function(a,b){for(;b=b.previousSibling;)if(b==a)return-1;return 1},s_zLa=function(a,b){var c=a.parentNode;if(c==b)return-1;for(;b.parentNode!=c;)b=b.parentNode;return s_yLa(b,a)},s_ALa=function(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(s_Wb&&!s_7b(9)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&
"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?s_yLa(a,b):!c&&s_hd(e,b)?-1*s_zLa(a,b):!d&&s_hd(f,a)?s_zLa(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=s_Qc(a);c=d.createRange();c.selectNode(a);c.collapse(!0);a=d.createRange();a.selectNode(b);a.collapse(!0);return c.compareBoundaryPoints(s_b.Range.START_TO_END,a)};s_F("sy7e");
var s_Kt=function(a,b,c){s_k.call(this);this.Tf=a;this.Ea=b||0;this.$=c;this.Zd=s_e(this.fJ,this)};s_h(s_Kt,s_k);s_=s_Kt.prototype;s_.qd=0;s_.Ha=function(){s_Kt.Ba.Ha.call(this);this.stop();delete this.Tf;delete this.$};s_.start=function(a){this.stop();this.qd=s_Pf(this.Zd,s_c(a)?a:this.Ea)};s_.stop=function(){this.Yh()&&s_Qf(this.qd);this.qd=0};s_.Yh=function(){return 0!=this.qd};s_.fJ=function(){this.qd=0;this.Tf&&this.Tf.call(this.$)};

s_E("sy7e");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy7f */
try{
var s_Lt=function(a){return 0<a?1:0>a?-1:a};s_F("sy7f");var s_Mt={},s_BLa=null,s_Nt=null,s_Ot=function(a){var b=s_sa(a);b in s_Mt||(s_Mt[b]=a);s_CLa()},s_Pt=function(a){a=s_sa(a);delete s_Mt[a];s_ub(s_Mt)&&s_Nt&&s_Nt.stop()},s_DLa=function(){var a=s_Nt&&s_Nt.Yh();s_$b(s_Nt);s_Nt=null;s_BLa=s_b;a&&s_CLa()},s_CLa=function(){s_Nt||(s_BLa?s_Nt=new s_Jt(function(a){s_ELa(a)},s_BLa):s_Nt=new s_Kt(function(){s_ELa(s_g())},20));var a=s_Nt;a.Yh()||a.start()},s_ELa=function(a){s_nb(s_Mt,function(b){b.Zfa(a)});s_ub(s_Mt)||s_CLa()};

s_E("sy7f");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy7g */
try{
s_F("sy7g");
s_E("sy7g");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy7h */
try{
s_F("sy7h");var s_Qt=function(){s_Ad.call(this);this.kb=0;this.endTime=this.startTime=null};s_h(s_Qt,s_Ad);s_=s_Qt.prototype;s_.Qj=function(){return 1==this.kb};s_.ez=function(){return-1==this.kb};s_.gN=function(){return 0==this.kb};s_.ue=function(){this.Oj("begin")};s_.xe=function(){this.Oj("end")};s_.Hu=function(){this.Oj("finish")};s_.Ju=function(){this.Oj("play")};s_.onStop=function(){this.Oj("stop")};s_.Oj=function(a){this.dispatchEvent(a)};

s_E("sy7h");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy7i */
try{
s_F("sy7i");var s_Rt=function(a,b,c,d){s_Qt.call(this);if(!s_oa(a)||!s_oa(b))throw Error("K");if(a.length!=b.length)throw Error("L");this.Ea=a;this.Ca=b;this.duration=c;this.Ja=d;this.coords=[];this.Wa=!1;this.$=this.Ma=0;this.Ga=null};s_h(s_Rt,s_Qt);s_=s_Rt.prototype;
s_.play=function(a){if(a||this.gN())this.$=0,this.coords=this.Ea;else if(this.Qj())return!1;s_Pt(this);this.startTime=a=s_g();this.ez()&&(this.startTime-=this.duration*this.$);this.endTime=this.startTime+this.duration;this.Ga=this.startTime;this.$||this.ue();this.Ju();this.ez()&&this.Oj("resume");this.kb=1;s_Ot(this);s_FLa(this,a);return!0};s_.stop=function(a){s_Pt(this);this.kb=0;a&&(this.$=1);s_GLa(this,this.$);this.onStop();this.xe()};s_.pause=function(){this.Qj()&&(s_Pt(this),this.kb=-1,this.Oj("pause"))};
s_.Ha=function(){this.gN()||this.stop(!1);this.Oj("destroy");s_Rt.Ba.Ha.call(this)};s_.destroy=function(){this.dispose()};s_.Zfa=function(a){s_FLa(this,a)};
var s_FLa=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);a.$=(b-a.startTime)/(a.endTime-a.startTime);1<a.$&&(a.$=1);a.Ma=1E3/(b-a.Ga);a.Ga=b;s_GLa(a,a.$);1==a.$?(a.kb=0,s_Pt(a),a.Hu(),a.xe()):a.Qj()&&a.Ia()},s_GLa=function(a,b){s_qa(a.Ja)&&(b=a.Ja(b));a.coords=Array(a.Ea.length);for(var c=0;c<a.Ea.length;c++)a.coords[c]=(a.Ca[c]-a.Ea[c])*b+a.Ea[c]};s_Rt.prototype.Ia=function(){this.Oj("animate")};s_Rt.prototype.Oj=function(a){this.dispatchEvent(new s_HLa(a,this))}; var s_HLa=function(a,b){s_cc.call(this,a);this.coords=b.coords;this.x=b.coords[0];this.y=b.coords[1];this.z=b.coords[2];this.duration=b.duration;this.fps=b.Ma;this.state=b.kb};s_h(s_HLa,s_cc);

s_E("sy7i");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syag */
try{
s_F("syag");var s_pA=function(a){return Math.pow(a,3)},s_qA=function(a){return 1-Math.pow(1-a,3)},s_jwa=function(a){return 1-Math.pow(1-a,4)},s_rA=function(a){return 3*a*a-2*a*a*a};
s_E("syag");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syju */
try{
s_F("syju");var s_n0=function(a,b){a&&s_C(a,b||"pi")},s_o0=function(a,b){a&&(a.style.display=b?"block":"none")},s_p0=function(a,b){var c=s_Kf();c.open("GET",a,!0);b&&(c.onreadystatechange=s_f(s_Add,c,b),c.onabort=s_f(b,!1));c.send()},s_Add=function(a,b){4==a.readyState&&(a=a.status,b(200==a||204==a))};

s_E("syju");s_G();
}catch(e){_DumpException(e)}
/* _Module_:mpck */
try{
s_F("mpck");var s_p6=function(a,b,c,d,e){function f(a){if(a){a.tabIndex=0;s_jj(a,"tab");s_x(a,"goog-zippy-header");a&&g.Na.listen(a,"click",g.Za);var b=g;a&&(b.Ja.Jf(a),b.Ma.listen(b.Ja,"key",b.Db))}}s_Ad.call(this);this.Fa=e||s_Rc();this.Ca=this.Fa.va(a)||null;this.Da=this.Fa.va(d||null);this.Wa=(this.Ia=s_qa(b)?b:null)||!b?null:this.Fa.va(b);this.Ea=1==c;s_c(c)||this.Ia||(this.Da?this.Ea=s_0d(this.Da):this.Ca&&(this.Ea=s_w(this.Ca,"goog-zippy-expanded")));this.Ma=new s_zj(this);this.Ja=new s_3r;this.Na=new s_zj(this);
var g=this;f(this.Ca);f(this.Da);this.d7(this.Ea)};s_h(s_p6,s_Ad);s_=s_p6.prototype;s_.Ha=function(){s_p6.Ba.Ha.call(this);s_$b(this.Ma);s_$b(this.Ja);s_$b(this.Na)};s_.expand=function(){this.d7(!0)};s_.collapse=function(){this.d7(!1)};s_.toggle=function(){this.d7(!this.Ea)};s_.d7=function(a){this.Wa?s_v(this.Wa,a):a&&this.Ia&&(this.Wa=this.Ia());this.Wa&&s_x(this.Wa,"goog-zippy-content");this.Da?(s_v(this.Ca,!a),s_v(this.Da,a)):s_BQd(this,a);this.Ea=a;this.dispatchEvent(new s_q6("toggle",this,this.Ea))};
s_.$j=function(){return this.Ea};var s_BQd=function(a,b){a.Ca&&(s_z(a.Ca,"goog-zippy-expanded",b),s_z(a.Ca,"goog-zippy-collapsed",!b),s_lj(a.Ca,"expanded",b))};s_p6.prototype.Db=function(a){if(13==a.keyCode||32==a.keyCode)this.toggle(),this.dispatchEvent(new s_q6("action",this,this.Ea,a)),a.preventDefault(),a.stopPropagation()};s_p6.prototype.Za=function(a){this.toggle();this.dispatchEvent(new s_q6("action",this,this.Ea,a))};var s_q6=function(a,b,c,d){s_cc.call(this,a,b);this.$=c;this.W2=d||null}; s_h(s_q6,s_cc);
var s_CQd=function(a,b,c,d){d=d||s_Rc();var e=d.Ob("DIV",{style:"overflow:hidden"});b=d.va(b);b.parentNode.replaceChild(e,b);e.appendChild(b);this.Ga=e;this.$=null;s_p6.call(this,a,b,c,void 0,d);a=this.$j();this.Ga.style.display=a?"":"none";s_BQd(this,a)};s_h(s_CQd,s_p6);s_=s_CQd.prototype;s_.KVa=s_qA;
s_.d7=function(a){if(this.$j()!=a||this.$){"none"==this.Ga.style.display&&(this.Ga.style.display="");var b=this.Wa.offsetHeight;if(this.$){a=this.$j();s_Wf(this.$);this.$.stop(!1);var c=b-Math.abs(parseInt(this.Wa.style.marginTop,10))}else c=a?0:b;s_BQd(this,a);this.$=new s_Rt([0,c],[0,a?b:0],500,this.KVa);s_l(this.$,["begin","animate","end"],this.G2a,!1,this);s_l(this.$,"begin",s_e(this.H2a,this,a));s_l(this.$,"end",s_e(this.I2a,this,a));this.$.play(!1)}};
s_.G2a=function(a){var b=this.Wa;b.style.marginTop=a.y-b.offsetHeight+"px"};s_.H2a=function(a){this.dispatchEvent(new s_q6("ab",this,a))};s_.I2a=function(a){a&&(this.Wa.style.marginTop="0");s_Wf(this.$);this.Ea=a;this.$=null;a||(this.Ga.style.display="none");this.dispatchEvent(new s_q6("toggle",this,a));this.dispatchEvent(new s_q6("bb",this,a))};
var s_DQd=[],s_FQd=function(a){var b=s_A.get(a,"mpeUrl"),c=s_A.get(a,"mpcUrl");b&&c&&s_p0(a.checked?b:c,s_EQd)},s_IQd=function(a,b){var c=s_n("mppro");null!=c&&(c.style.display="none");c=s_n("mpb");null!=c&&(c.style.display="");c=0;for(var d;d=s_DQd[c++];)d.expand();s_je(s_n("mpc"),"mpcc","mpce");s_GQd(a,!0);s_HQd(b)},s_JQd=function(a,b){for(var c=0,d;d=s_DQd[c++];)d.collapse();s_je(s_n("mpc"),"mpce","mpcc");s_GQd(a,!1);s_HQd(b)},s_GQd=function(a,b){for(var c=s_p("mpmt"),d=[],e=[],f=0;f<c.length;f++)d.push(s_cd(c[f])),
e.push(b);s_B(a,d,e)},s_HQd=function(a){google.log("mpck","&ved="+a.ved)},s_EQd=function(){},s_Eq={};s_hf("mpck",(s_Eq.init=function(a){s_Oh("mpck",{mpae:s_IQd,mpac:s_JQd,mpe:s_FQd});a=a&&a.me||!1;for(var b=s_p("mpmt"),c=0,d;d=b[c++];)s_DQd.push(new s_CQd(null,d,a)),d.style.display=""},s_Eq));


s_E("mpck");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sf */
try{
s_F("sf");var s_jPa={};s_hf("sf",(s_jPa.init=function(){s_Oh("sf",{chk:function(a){a.checked=!0},lck:function(a){a.form.q.value?a.checked=!0:s_jb().href="/doodles/"},tia:function(a,b){a=s_r("SCRIPT",{src:b.js});s_9d(a)}})},s_jPa));

s_E("sf");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy47 */
try{
s_F("sy47");var s_Xsa=function(a){this.Aa=a;this.Aa._wect=this;this.ma={};this.$={};this.Ea={}};s_Xsa.prototype.wc=null;var s_Ysa=function(a){a._wect||new s_Xsa(a);return a._wect};s_Xsa.prototype.Wa=function(a,b){void 0==this.ma[a]&&(this.ma[a]=0);this.ma[a]++;for(var c=this.$[a],d=c.length,e,f=0;f<d;f++)try{c[f](b)}catch(g){e=e||g}this.ma[a]--;if(e)throw e;};
var s_Zsa=function(a,b){a.Ea[b]||(a.Ea[b]=s_e(a.Wa,a,b));return a.Ea[b]},s__sa=function(a,b){return a+":"+(b?"capture":"bubble")},s_0sa=function(a,b,c,d){d=!!d;var e=s__sa(b,d);a.$[e]||(a.$[e]=[],a.Aa.addEventListener(b,s_Zsa(a,e),d));a.$[e].push(c)},s_1sa=function(a,b,c,d){d=!!d;var e=s__sa(b,d);a.$[e]&&(a.ma[e]&&(a.$[e]=a.$[e].slice(0)),c=a.$[e].indexOf(c),-1!=c&&a.$[e].splice(c,1),0==a.$[e].length&&(a.$[e]=void 0,a.Aa.removeEventListener(b,s_Zsa(a,e),d)))};
var s_3l=function(a,b,c,d){s_1sa(s_Ysa(a),b,c,d)},s_4l=function(a,b,c,d,e){var f=s_Ysa(a);s_0sa(f,b,c,d);e&&s_2sa(a,function(){s_0sa(f,b,c,d)},function(){s_1sa(f,b,c,d)})},s_2sa=function(a,b,c){a.addEventListener("DOMFocusIn",function(a){a.target&&"TEXTAREA"==a.target.tagName&&b()},!1);a.addEventListener("DOMFocusOut",function(a){a.target&&"TEXTAREA"==a.target.tagName&&c()},!1)};
var s_3sa=/iPhone|iPod|iPad/,s_5l=function(){return s_Da(navigator.userAgent,"Android")},s_4sa=/Mac OS X.+Silk\//;var s_6l=s_3sa.test(navigator.userAgent)||s_5l()||s_4sa.test(navigator.userAgent),s_7l=window.navigator.msPointerEnabled,s_8l=s_6l?"touchstart":s_7l?"MSPointerDown":"mousedown",s_5sa=s_6l?"touchmove":s_7l?"MSPointerMove":"mousemove",s_9l=s_6l?"touchend":s_7l?"MSPointerUp":"mouseup",s_6sa=s_7l?"MSPointerCancel":"touchcancel",s_am=function(a,b,c,d,e,f,g){s_6l||s_7l||(b=s_$l(b),c=s_$l(c),d=s_$l(d));f=!!f;s_4l(a,s_8l,b,f,g);s_4l(a,s_5sa,c,f,g);s_4l(a,s_9l,d,f,g);s_4l(a,s_6sa,e,f,g)},s_$l=function(a){return function(b){b.touches= [];b.targetTouches=[];b.changedTouches=[];b.type!=s_9l&&(b.touches[0]=b,b.targetTouches[0]=b);b.changedTouches[0]=b;a(b)}},s_bm=function(a){return a.touches||[a]},s_cm=function(a){return(s_7l?[a]:a.changedTouches)||[]};

s_E("sy47");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy4d */
try{
s_F("sy4d");var s_pta=function(a){return new RegExp("(?:^| +)"+a+"(?:$| +)")},s_fm=function(a,b,c,d){var e=s_pta(c),f=d||"",g=s_pta(f);if(b!=e.test(a.className)||d&&b==g.test(a.className))d=a.className.replace(e," ").replace(g," "),a.className=d+" "+(b?c:f)};
s_E("sy4d");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy4e */
try{
s_F("sy4e");var s_gm=function(a,b,c,d){this.kHa=!!c;this.fRa=!!d;this.kHa&&(this.qD=Math.max(800,this.qD));this.element=a;this.onclick=b;s_6l?a.ontouchstart=s_e(this.EDa,this):a.onmousedown=s_e(this.N2,this);s_7l&&(a.style.msTouchAction="none");a.onclick=s_e(this.VV,this)},s_qta=[],s_rta=function(a){s_qta.push(a);window.setTimeout(function(){var b=s_qta.indexOf(a);-1!=b&&s_qta.splice(b,1)},2500)};s_=s_gm.prototype;s_.oy=100;s_.qD=500;
s_.dispose=function(){s_6l?this.element.ontouchstart=null:this.element.onmousedown=null;this.element.onclick=null};
s_.EDa=function(a){this.z2&&!this.z2(a)||1<s_bm(a).length||(this.fRa||a.stopPropagation(),this.He=!0,this.kHa||(this.element.ontouchend=s_e(this.VV,this),document.body.addEventListener("touchend",s_sta(this),!1)),document.body.addEventListener("touchmove",s_tta(this),!1),document.body.addEventListener("touchcancel",s_sta(this),!1),s_uta(this),a=a.touches[0],this.LW=new s_Jc(a.clientX,a.clientY),this.oy?this.z0a=window.setTimeout(s_e(this.tW,this,!0),this.oy):this.tW(!0),this.kHa||s_rta(this.LW))};
s_.N2=function(a){if(!this.z2||this.z2(a))this.fRa||a.stopPropagation(),this.He=!0,s_uta(this),this.tW(!0)};s_.VV=function(a){if(this.z2&&!this.z2(a))return this.wv(),!0;if(a){if("touchend"==a.type&&!this.He)return!1;a.stopPropagation()}this.tW(!0);window.setTimeout(s_e(function(){this.wv();if(s_vta(this))this.onclick(a)},this),0);return!1};s_.L2=function(a){1<s_bm(a).length?this.wv():(a=s_bm(a)[0],a=new s_Jc(a.clientX,a.clientY),this.LW&&12<s_Lc(this.LW,a)&&this.wv())};
var s_tta=function(a){a.lJa||(a.lJa=s_e(a.L2,a));return a.lJa};s_gm.prototype.wv=function(){window.clearTimeout(this.z0a);window.clearTimeout(this.vCa);this.tW(!1);this.He=!1;document.body.removeEventListener&&(document.body.removeEventListener("touchmove",s_tta(this),!1),document.body.removeEventListener("touchend",s_sta(this),!1),document.body.removeEventListener("touchcancel",s_sta(this),!1))};var s_sta=function(a){a.mJa||(a.mJa=s_e(a.wv,a));return a.mJa};
s_gm.prototype.tW=function(a){this.G9&&(!a||s_vta(this))&&s_fm(this.element,a,this.G9)};var s_vta=function(a){if(!document.elementFromPoint||!a.LW||!s_c(a.LW.x))return!0;for(var b=document.elementFromPoint(a.LW.x,a.LW.y);b;){if(b==a.element)return!0;b=b.parentNode}return!1},s_uta=function(a){a.nEa&&(a.vCa=window.setTimeout(s_e(function(){this.He=!1;this.nEa()},a),a.qD))};

s_E("sy4e");s_G();
}catch(e){_DumpException(e)}
/* _Module_:syjw */
try{
var s_B0=function(a){var b={mod:a,prop:"shop"};return function(a,d){if(d){var c=d.getAttribute("href")||null;c&&setTimeout(function(){return s_ne(c,!1)},150)}google.ml(a,!1,b)}},s_D0=function(){if(!s_C0){var a=s_ka("google.sh.sg");a&&!s_C0&&(s_C0=new s_hed(a),s_ied.resolve(s_C0))}return s_C0||new s_hed};s_F("syjw");
var s_hed=function(a){s_M(this,a,0,-1,null,null)};s_h(s_hed,s_L);var s_ked=function(){var a=s_D0();return s_Q(a,s_jed,1)},s_E0=function(a){return s_Q(a,s_led,2)},s_jed=function(a){s_M(this,a,0,-1,null,null)};s_h(s_jed,s_L);var s_led=function(a){s_M(this,a,0,-1,null,null)};s_h(s_led,s_L);
var s_F0=function(a){s_M(this,a,0,-1,null,null)};s_h(s_F0,s_L);s_F0.prototype.getUrl=function(){return s_N(this,1)};s_F0.prototype.getTitle=function(){return s_N(this,10)};s_F0.prototype.setTitle=function(a){s_P(this,10,a)};var s_ned=function(a){s_M(this,a,0,-1,s_med,null)};s_h(s_ned,s_L);var s_med=[2];s_ned.prototype.setMap=function(a){s_xi(this,1,a)};var s_G0=function(a){s_M(this,a,0,-1,null,null)};s_h(s_G0,s_L);s_G0.prototype.getTitle=function(){return s_N(this,1)};s_G0.prototype.setTitle=function(a){s_P(this,1,a)};var s_H0=function(a){return s_Q(a,s_ned,25)};s_G0.prototype.Vf=function(){return s_N(this,4)};s_G0.prototype.Fh=function(a){s_P(this,4,a)};s_G0.prototype.nz=function(){return s_N(this,14)};
var s_ied=s_Se(),s_C0=null,s_oed=null,s_ped=function(a,b){return s_q(a,b)},s_qed=function(a,b){var c=parseFloat(s_Id(a,"font-size"));a=s_Id(a,"line-height");"normal"==a&&(a="1.2");c=0<a.indexOf("px")?Math.floor(parseFloat(a)):Math.floor(parseFloat(a)*c);return b*c+c/2},s_I0=function(){return s_E0(s_D0())},s_J0=function(){var a=s_ked();return s_c(a)&&!!s_N(a,2)},s_red=function(){var a=s_ked();return s_c(a)&&!!s_N(a,4)},s_sed=function(a){var b=s_3c("DIV");b.innerHTML=a;return b.firstElementChild},s_ted=
function(a,b){var c=s_B0(a);return function(a){for(var d=[],f=0;f<arguments.length;++f)d[f-0]=arguments[f];try{b.apply(null,[].concat(s_ea(d)))}catch(g){c(g)}}},s_ued=function(a,b){var c=a.offsetHeight;if(!(!c||0>=b||c<=b)){for(var d=a.cloneNode(!0),e=0,f=a.childNodes,g=f.length,k=[],l,m,n,ba,t=0;t<g;t++)if(l=a.childNodes[t],m=l.childNodes.length,l=(n=(n=s_fd(l))&&l.hasChildNodes())?l.childNodes[0]:l,ba=s_kd(l),ba=ba.length,e+=ba,k.push(e),n&&(null===l.nodeValue||1<m))return;l=m=0;for(n=g-1;m<=e||
c>b;){t=m+Math.floor((e-m)/2);for(c=t-3;l<=n;l++)s_s(f[l],s_kd(d.childNodes[l]));l=t;for(var w=ba=0,B=0;B<d.childNodes.length;B++){var G=s_kd(d.childNodes[B]).length;if(w+G>l&&w<=l){ba=B;break}w+=G}l=ba;ba=0==l?0:k[l-1];c=s_kd(f[l]).substring(0,c-ba);s_ya(c)&&0<l&&(l--,c=s_kd(f[l]));s_s(f[l],c+"...");for(c=l+1;c<g;c++)s_s(f[c],"");c=a.offsetHeight;c>b?(e=t-1,n=n>l?l:n):m=t+1}for(a=g-1;0<=a;a--)if(s_ya(s_kd(f[a])))s_$c(f[a]);else break}};

s_E("syjw");s_G();
}catch(e){_DumpException(e)}
/* _Module_:tl */
try{
var s_gUd=function(a,b){if(b.translated){var c=b.full;a=s_o(c);b=s_n(b.snippet);var d=s_o(c+"-transdiv"),e=s_o(c+"-origLink");c=s_o(c+"-transLink");var f=s_0d(e);s_v(c,f);s_v(d,!f);s_v(e,!f);b?(s_v(a,!1),s_v(b,f)):s_v(a,f)}else s_fUd(a,b)},s_fUd=function(a,b){google.log("","&ved="+b.ved,void 0,void 0);var c={};c.key=s_hUd;c.source=b.source.substring(0,2);c.target=b.target.substring(0,2);c.format="html";var d=s_o(b.full);c.q=d.innerHTML;s_iUd(c,function(c){if(c.error)throw Error("dg`"+c.error);var d=
c.data.translations[0].translatedText,e=b.keepSnippet,k=b.snippitClassPrefix;c=b.full;var l=s_o(c),m=s_n(b.snippet);m&&(e?s_v(m,!1):s_$c(m));s_v(l,!1);m=s_3c("div");m.id=c+"-transdiv";s_v(m,!0);m.innerHTML=d;s_gd(l).appendChild(m);e||(d=s_q(k+"__translate-span",l),s_$c(d));k=s_q(k+"__translate-span",m);s_$c(k);k=s_o(c+"-transLink");s_v(k,!1);c=s_o(c+"-origLink");s_v(c,!0);s_A.set(a,"translated","true")})};s_F("tl");
var s_jUd=function(){};s_h(s_jUd,s_ab);s_jUd.prototype.$=s_eb();var s_kUd=function(){s_gb(this)},s_iUd=function(a,b){var c=(new s_kUd).Mb.$();c?c.send(a,b):s_7j("https://www.googleapis.com/language/translate/v2",function(a){a=a.target;s_8j(a)?(a=s_8e(a.getResponse()).data,b({data:a})):b({error:s_$j(a)})},"POST",s_2e(a),{"X-HTTP-Method-Override":"GET"},5E3,!0)};s_bb(s_jUd,s_kUd);
var s_hUd="",s__me={};s_hf("tl",(s__me.init=s_ted("tl",function(a){s_c(a.key)&&(s_hUd=a.key);s_Ph("tl",{tr:s_gUd},s_B0("tl"))}),s__me));

s_E("tl");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emo */
try{
s_F("emo");
s_E("emo");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy28 */
try{
var s_Xka=function(a,b){var c=[];s_hca(a,b,c,!1);return c};s_F("sy28");var s_Pj=function(a){s_k.call(this);this.Da=1;this.Wa=[];this.Ca=0;this.$=[];this.Ea={};this.Ga=!!a};s_h(s_Pj,s_k);s_Pj.prototype.subscribe=function(a,b,c){var d=this.Ea[a];d||(d=this.Ea[a]=[]);var e=this.Da;this.$[e]=a;this.$[e+1]=b;this.$[e+2]=c;this.Da=e+3;d.push(e);return e};s_Pj.prototype.Pv=function(a){var b=this.$[a];if(b){var c=this.Ea[b];0!=this.Ca?(this.Wa.push(a),this.$[a+1]=s_d):(c&&s__a(c,a),delete this.$[a],delete this.$[a+1],delete this.$[a+2])}return!!b};
s_Pj.prototype.publish=function(a,b){var c=this.Ea[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.Ga)for(e=0;e<c.length;e++){var g=c[e];s_Yka(this.$[g+1],this.$[g+2],d)}else{this.Ca++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.$[g+1].apply(this.$[g+2],d)}finally{if(this.Ca--,0<this.Wa.length&&0==this.Ca)for(;c=this.Wa.pop();)this.Pv(c)}}return 0!=e}return!1};var s_Yka=function(a,b,c){s_Ne(function(){a.apply(b,c)})};
s_Pj.prototype.clear=function(a){if(a){var b=this.Ea[a];b&&(s_i(b,this.Pv,this),delete this.Ea[a])}else this.$.length=0,this.Ea={}};s_Pj.prototype.ze=function(a){if(a){var b=this.Ea[a];return b?b.length:0}a=0;for(b in this.Ea)a+=this.ze(b);return a};s_Pj.prototype.Ha=function(){s_Pj.Ba.Ha.call(this);this.clear();this.Wa.length=0};

s_E("sy28");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy29 */
try{
s_F("sy29");var s_Qj=new s_Pj,s_Rj=function(a){s_Qj.publish("r",a)},s_Zka=function(){s_Qj.publish("ra")},s_Sj=function(a,b,c){var d;null===c?d=b:d=function(a){a&&a==s_nd(c,"xpdbox")&&b(a)};return s_Qj.subscribe(a,d)},s_Tj=function(a,b){return s_Sj("es",a,b||null)},s_Uj=function(a,b){return s_Sj("ef",a,b||null)},s_Vj=function(a,b){return s_Sj("cs",a,b||null)},s__ka=function(a,b){return s_Sj("cf",a,b||null)},s_Wj=function(a){return s_Qj.Pv(a)},s_Xj=function(a){s_Qj.publish("es",a)},s_Yj=function(a){s_Qj.publish("ef", a)},s_Zj=function(a){s_Qj.publish("cs",a)},s__j=function(a){s_Qj.publish("cf",a)};

s_E("sy29");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy5v */
try{
s_F("sy5v");var s_jza=function(a,b){for(b=new RegExp("(?:^|\\s)"+b+"(?:$|\\s)");a;){if(b.test(a.className))return a;a=a.parentElement}return null};var s_kza=function(a){return a?4<=a?4:3<=a?3:2<=a?2:1:1},s_lza=function(a,b,c,d){a=a.split("?")[0];d=s_kza(d);b=b?b:0;c=c?c:0;var e=b*d,f=c*d;e=Math.min(1,2048/(e?e:1),2048/(f?f:1));b=Math.floor(b*e);c=Math.floor(c*e);return a+"?scale="+d+(c?"&h="+c:"")+(b?"&w="+b:"")};
var s_mza=function(a,b,c){var d=s_kza(s_b.devicePixelRatio),e=s_lza(a.getAttribute("data-bsrc"),b,c,d);a.setAttribute("data-bsrc",e);var f=function(){a.removeEventListener("load",f,!1);a.style.display="";a.removeAttribute("height");a.removeAttribute("width");var e=0!=s_b.SCALE_MAP;1!=d&&e&&(c||(c=a.height/d),b||(b=a.width/d));c&&a.setAttribute("height",c);b&&a.setAttribute("width",b);(e=s_dd(a))&&s_v(e,!0)};a.addEventListener("load",f,!1)},s_nza=function(a){var b={};if(!a.hasAttribute("data-vs"))return null; a.getAttribute("data-vs").split(",").forEach(function(a){a=a.split(":");b[a[0]]=a[1]});return b};
var s_oza=[],s_pza=[],s_qza=[],s_rza=s_d,s_sza=function(){var a=s_p("lu_vs");a.length&&s_2p(a)},s_2p=function(a){a?(s_Jn(s_tza),s_i(a,s_uza)):s_sza()},s_vza=function(a){var b=s_nza(a);if(!b)return null;var c=s_nd(a,b.r);if(!c)return null;if(0==c.offsetWidth&&0==c.offsetHeight)return-1==s_pza.indexOf(a)&&(s_pza.push(a),s_qza.push(s_Uj(s_e(s_uza,null,a))),s_qza.push(s__ka(s_e(s_uza,null,a)))),null;if(s_c(b.lukp)&&b.lukp){a=s_jza(c,"kno-mrg");var d=s_jza(c,"kno-mrg-m");d&&(d.style.width="auto",d.style.height=
"auto");if(a){d=a.getElementsByClassName("img-kc-m")[0];var e=a.getElementsByClassName("bi-io")[0],f=d&&!e&&s_vga(a,d)&&0<d.offsetHeight&&0<d.offsetWidth;e=0;f&&(e=d.offsetHeight);a=a.offsetWidth-(f?d.offsetWidth:0);0<a&&0<e?(c.style.width=a+"px",c.style.height=e+"px"):0<a&&(c.style.width=a+"px")}}a=0;s_c(b.w)&&(a=Math.floor(c.offsetWidth*parseFloat(b.w)));d=0;s_c(b.h)&&(d=Math.floor(c.offsetHeight*parseFloat(b.h)));a&&d&&s_c(b.mhwr)&&(d=Math.max(d,a*parseFloat(b.mhwr)));return new s_Nc(a,d)},s_uza=
function(a){a.setAttribute("data-bsrc",a.getAttribute("data-bsrc").split("&")[0]);var b=s_vza(a);if(b){var c=s_nza(a);c&&"1"==c.o&&-1==s_oza.indexOf(a)&&s_oza.push(a);s_mza(a,b.width,b.height);a.getAttribute("data-bsrc")!=a.getAttribute("src")&&(s_rza(a),a.setAttribute("src",a.getAttribute("data-bsrc")))}},s_tza=function(){s_i(s_oza,s_uza)},s_45a={};s_hf("vs",(s_45a.init=s_sza,s_45a.dispose=function(){s_Kn(s_tza);s_oza=[];s_pza=[];s_i(s_qza,s_Wj);s_qza=[]},s_45a));

s_E("sy5v");s_G();
}catch(e){_DumpException(e)}
/* _Module_:vs */
try{
s_F("vs");

s_E("vs");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy81 */
try{
s_F("sy81");
s_E("sy81");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sye3 */
try{
s_F("sye3");var s_kH=function(){var a=this;this.Wa=this.$="";this.ma=!1;this.Ea="";this.Ca=!1;s_ya(s_Bh("duf3"))||(this.Ca=!0);s_vh("duf3",function(b){a:{var c=s_iH(a.$),d=s_iH(b);if((s_Uyb(c,d)||a.ma)&&!(0<=b.indexOf("d3sbx")))if(a.$=b,d.YP)a.ma?(a.ma=!1,s_Nh("duf3.cd"),s_Nh("duf3.ty")):(s_Nh("duf3.hide"),a.Ea&&(s_ne(a.Ea),a.Ea=""));else if(d.i5){if(c.i5){if((b=!c.YP&&!d.YP&&c.uE==d.uE&&c.VEa==d.VEa&&c.widget!=d.widget)&&d.widget)d.zTa&&s_Nh("duf3.rp",d.zTa);else if(c=a.ma,a.ma=!1,s_Nh("duf3.cd"),c){s_Nh("duf3.ty");
break a}if(b)break a}a.Wa=d.widget||"";b=new Map;b.set("entry_point",d.uE);s_xl(d.i5,b,d.OVa||void 0)}else s_jH("")}})},s_jH=function(a,b){var c=s_kH.Sa();if(c.Wa)(a=document.querySelector("[data-dtype="+c.Wa+"]"))&&s_H.qc(s_f(s_Nh,"duf3.rp",a)),c.Wa="";else{var d=s_iH(c.$),e=s_iH(a);s_Uyb(d,e)&&(c.$=a,c=s_Bh("fpstate"),s_mf()||!(""!=e.widget&&void 0!=e.widget||""!=c&&s_va(c,"d3"))?s_yh("duf3",a,!!b):(c={},c.duf3=a,c.fpstate=e.widget||"",s_xh(c,!!b)))}},s_Vyb=function(a){var b=s_kH.Sa();s_9ga()?(b.Ea=
a,s_zh()):s_ne(a)},s_iH=function(a){if(""==a)return{YP:!0};var b=a.split(",");if(2>b.length)return{YP:!1,i5:null};a=b[0];var c=b[1],d="";2<b.length&&(d=b[2]);b=s_n(c);var e=document.querySelector("[data-duffy-target='"+c+"']")||void 0,f=null;b&&d&&(f=b.querySelector("[data-dtype="+d+"]"));return{YP:!1,uE:a,VEa:c,widget:d,i5:b,OVa:e,zTa:f}},s_Uyb=function(a,b){return a.YP!=b.YP||a.uE!=b.uE||a.VEa!=b.VEa||a.widget!=b.widget};s_la(s_kH);

s_E("sye3");s_G();
}catch(e){_DumpException(e)}
/* _Module_:d3l */
try{
s_F("d3l");var s_fAb=function(){s_kH.Sa()};s_U(function(a){s_S(a,"t-aTz9-_sUcEc",s_fAb,null,null,function(a){s_fAb.call(a)})});

s_E("d3l");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emu */
try{
s_F("emu");
s_E("emu");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emv */
try{
s_F("emv");
s_E("emv");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3y */
try{
s_F("sy3y");var s_Psa=function(a,b,c){this.target=a;this.type=b;this.Kk=c},s_Qsa=new s_qf,s_Rsa=0,s_Tl=function(a,b,c,d){var e=function(a){return c(a.jd)};s_l(a,b,e,d||!1);return new s_Psa(a,b,e)},s_Ul=function(a,b){var c="gt"+s_Rsa++;s_Qsa.set(c,b);"_GTL_"in a||(a._GTL_=[]);a._GTL_.push(c);return c};
var s_Vl=function(a,b,c){this.type=a;this.$=b;this.target=c},s_Ssa=function(a,b,c,d){s_Vl.call(this,1,a,b);this.x=c;this.y=d};s_h(s_Ssa,s_Vl);var s_Wl=function(a,b,c,d,e,f,g,k,l,m){s_Vl.call(this,3,a,b);this.direction=c;this.Wa=0==c?c:c%2?1:2;this.touches=d;this.ma=e;this.Ea=f;this.x=g;this.y=k;this.velocityX=l;this.velocityY=m};s_h(s_Wl,s_Vl);var s_Xl=function(a,b,c,d,e,f,g){s_Vl.call(this,4,a,b);this.scale=c;this.rotation=d;this.x=f;this.y=g};s_h(s_Xl,s_Vl); var s_Yl=function(a,b,c,d,e,f){s_Vl.call(this,a,b,c);this.touches=d;this.x=e;this.y=f};s_h(s_Yl,s_Vl);
var s_Zl=function(a,b,c,d){this.$=a;this.ma=b;this.x1=c;this.y1=d};s_Zl.prototype.clone=function(){return new s_Zl(this.$,this.ma,this.x1,this.y1)};s_Zl.prototype.equals=function(a){return this.$==a.$&&this.ma==a.ma&&this.x1==a.x1&&this.y1==a.y1};var s_Tsa=function(a){var b=a.x1-a.$;a=a.y1-a.ma;return b*b+a*a},s__l=function(a){return new s_Jc(s_Hc(a.$,a.x1,.5),s_Hc(a.ma,a.y1,.5))};
var s_0l=function(){};s_h(s_0l,s_ab);var s_Usa=function(){return"DEFAULT_ID"};s_0l.prototype.Wa=s_eb(s_Usa);s_0l.prototype.Ea=s_eb(s_Usa);s_0l.prototype.$=s_eb(s_Usa);s_0l.prototype.Ca=s_eb(s_Usa);
var s_Vsa=function(a){return!a||0==a.x&&0==a.y?0:Math.abs(a.x)>Math.abs(a.y)?0<a.x?6:4:0<a.y?5:3},s_1l=function(a,b){return 0==b||2>=b&&a%2==b%2?!0:a==b},s_2l=function(a,b,c,d){a=180*Math.atan2(d-b,c-a)/Math.PI;0>a&&(a=360+a);return a},s_Wsa=function(a,b,c,d,e,f,g,k){a=Math.sqrt(s_Tsa(new s_Zl(e,f,g,k)))/Math.sqrt(s_Tsa(new s_Zl(a,b,c,d)));return isNaN(a)?1:isFinite(a)?a:10};

s_E("sy3y");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy48 */
try{
var s_7sa=function(a,b,c,d){return a<<21|b<<14|c<<7|d},s_8sa=function(){return s_Da(navigator.userAgent,"Chrome/")},s_9sa=/OS (\d+)_(\d+)(?:_(\d+))?/,s_$sa=function(){var a=s_9sa.exec(navigator.userAgent)||[];a.shift();return s_7sa.apply(null,a)},s_ata=/Chrome\/([0-9.]+)/,s_bta=function(a){var b;if(b=s_5l()&&s_8sa())b=s_ata.exec(navigator.userAgent),b=18==+(b?b[1]:"").split(".")[0];return b?new s_Jc(a.clientX,a.pageY-window.scrollY):new s_Jc(a.clientX,a.clientY)};s_F("sy48");
var s_dm,s_cta,s_dta,s_eta,s_fta=function(a){if(!(2500<s_g()-s_cta)){var b=s_bta(a);if(!(1>b.x&&1>b.y)){for(var c=0;c<s_dm.length;c+=2)if(25>Math.abs(b.x-s_dm[c])&&25>Math.abs(b.y-s_dm[c+1])){s_dm.splice(c,c+2);return}a.stopPropagation();a.preventDefault();(a=s_dta)&&a()}}},s_gta=function(a){var b=s_bta(s_bm(a)[0]);s_dm.push(b.x,b.y);window.setTimeout(function(){for(var a=b.x,d=b.y,e=0;e<s_dm.length;e+=2)if(s_dm[e]==a&&s_dm[e+1]==d){s_dm.splice(e,e+2);break}s_dta=void 0},2500)},s_hta=function(){s_c(s_eta)||
(s_eta=s_$sa()>=s_7sa(6)||!0);return s_eta},s_em=function(a,b,c){s_dta=c;s_dm||(document.addEventListener("click",s_fta,!0),c=s_gta,s_6l||s_7l||(c=s_$l(c)),s_4l(document,s_8l,c,!0,!0),s_dm=[]);s_cta=s_g();for(c=0;c<s_dm.length;c+=2)if(25>Math.abs(a-s_dm[c])&&25>Math.abs(b-s_dm[c+1])){s_dm.splice(c,c+2);break}};

s_E("sy48");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy49 */
try{
s_F("sy49");var s_ita=function(){this.ma=[];this.$=[]},s_jta=function(a,b,c,d){a.ma.length=a.$.length=0;a.ma.push(b,d);a.$.push(c,d)},s_mta=function(a,b,c,d){var e=a.ma[a.ma.length-2]-b,f=a.$[a.$.length-2]-c,g=a.ma,k=a.Ea;k&&e&&2<g.length&&0<k^0<e&&g.splice(0,g.length-2);g=a.$;(k=a.Wa)&&f&&2<g.length&&0<k^0<f&&g.splice(0,g.length-2);s_kta(a.ma,d);s_kta(a.$,d);a.ma.push(b,d);a.$.push(c,d);a.Ea=e;a.Wa=f;return s_lta(a,b,c,d)},s_kta=function(a,b){for(;a.length&&250<b-a[1]||10<a.length;)a.splice(0,2)},s_nta=function(a,
b,c,d){if(s_c(b)&&s_c(c)&&d)return s_kta(a.ma,d),s_kta(a.$,d),s_lta(a,b,c,d)},s_lta=function(a,b,c,d){b=a.ma.length?(b-a.ma[0])/(d-a.ma[1]):0;c=a.$.length?(c-a.$[0])/(d-a.$[1]):0;b=s_ota(a,b);c=s_ota(a,c);return new s_Jc(b,c)},s_ota=function(a,b){var c=Math.abs(b);5<c&&(c=6>a.$.length?1:5);return c*(0>b?-1:1)};

s_E("sy49");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy4g */
try{
s_F("sy4g");
var s_km=function(){};s_h(s_km,s_0l);s_cb(s_km,s_0l);s_km.prototype.Wa=function(a,b,c,d){c=[s_Tl(a,"click",function(c){d&&c.stopPropagation();b(new s_Ssa(c,a,c.screenX,c.screenY))}),s_Tl(a,"keydown",function(c){var d=c.which||c.keyCode||c.key,e=a.tagName.toUpperCase();"TEXTAREA"==e||"BUTTON"==e||"INPUT"==e||a.isContentEditable||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey||13!=d&&32!=d&&3!=d||(32==d&&c.preventDefault(),b(c))})];return s_Ul(a,c)};
s_km.prototype.Ea=function(a,b,c,d,e,f,g){var k=e||0,l,m,n,ba,t,w=new s_ita,B=!1;e=function(a){B=a};var G=function(c){c=c.jd;if(B){n=c.screenX;ba=c.screenY;var d=s_mta(w,n,ba,c.timeStamp);t=s_Vsa(d);s_1l(t,k)&&b(new s_Wl(c,a,t,1,l,m,n,ba,d.x,d.y))}};var I=function(b){b=b.jd;if(s_1l(t,k)){s_m(a,"mousemove",G);s_m(a,"mouseup",I);s_m(a,"mouseout",I);var c=s_nta(w,n,ba,b.timeStamp);d&&d(new s_Wl(b,a,t,1,l,m,b.screenX,b.screenY,c.x,c.y));g||s_em(l,m)}};e=[s_Tl(a,"mousedown",function(b){l=n=b.screenX;m=
ba=b.screenY;s_jta(w,l,m,b.timeStamp);c&&c(new s_Wl(b,a,0,1,l,m,n,ba,0,0));s_l(a,"mousemove",G);s_l(a,"mouseup",I);s_l(a,"mouseout",I)}),s_Tl(document.body,"mousedown",s_f(e,!0)),s_Tl(document.body,"mouseup",s_f(e,!1))];return s_Ul(a,e)};
s_km.prototype.$=function(a,b,c,d,e){var f=!1,g=function(a){f=a},k=!1,l,m,n,ba,t,w=function(b){b=b.jd;n=b.screenX;ba=b.screenY;t=s_2l(l,m,n,ba);var d=s__l(new s_Zl(l,m,n,ba));c&&c(new s_Xl(b,a,1,0,0,d.x,d.y))},B=function(c){c=c.jd;if(f){var d=c.screenX,e=c.screenY,g=s__l(new s_Zl(l,m,d,e));b(new s_Xl(c,a,s_Wsa(l,m,n,ba,l,m,d,e),s_2l(l,m,d,e)-t,0,g.x,g.y))}};var G=function(b){k=!1;s_m(a,"mousedown",w);s_m(a,"mousemove",B);s_m(a,"mouseup",G);s_m(a,"mouseout",G);if(d){b=b.jd;var c=b.screenX,f=b.screenY,
g=s__l(new s_Zl(l,m,c,f));d(new s_Xl(b,a,s_Wsa(l,m,n,ba,l,m,c,f),s_2l(l,m,c,f)-t,0,g.x,g.y))}e||s_em(l,m)};g=[s_Tl(a,"click",function(b){l=b.screenX;m=b.screenY;k||(s_l(a,"mousedown",w),s_l(a,"mousemove",B),s_l(a,"mouseup",G),s_l(a,"mouseout",G),k=!0)}),s_Tl(document.body,"mousedown",s_f(g,!0)),s_Tl(document.body,"mouseup",s_f(g,!1))];return s_Ul(a,g)};
s_km.prototype.Ca=function(a,b,c,d,e,f){var g,k,l=!1;e=function(a){l=a};var m=function(c){c=c.jd;l&&b&&b(new s_Yl(6,c,a,1,c.screenX,c.screenY))};var n=function(b){b=b.jd;s_m(a,"mousemove",m);s_m(a,"mouseup",n);s_m(a,"mouseout",n);d&&d(new s_Yl(7,b,a,1,b.screenX,b.screenY));f||s_em(g,k)};e=[s_Tl(a,"mousedown",function(b){g=b.screenX;k=b.screenY;c&&c(new s_Yl(5,b,a,1,g,k));s_l(a,"mousemove",m);s_l(a,"mouseup",n);s_l(a,"mouseout",n)}),s_Tl(document.body,"mousedown",s_f(e,!0)),s_Tl(document.body,"mouseup", s_f(e,!1))];return s_Ul(a,e)};

s_E("sy4g");s_G();
}catch(e){_DumpException(e)}
/* _Module_:emw */
try{
s_F("emw");

s_E("emw");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy3z */
try{
var s_yta=function(a,b){b=void 0===b?!1:b;var c=s_Qsa.get(a);if(c&&c.length){for(var d,e=null,f=0;f<c.length;f++)d=c[f],d instanceof s_Psa?(s_m(d.target,d.type,d.Kk,b),e=d.target):d();s_Qsa.remove(a);e&&"_GTL_"in e&&s__a(e._GTL_,a)}};s_F("sy3z");var s_lm=function(){s_gb(this)};s_bb(s_0l,s_lm);s_la(s_lm);var s_zta=function(a,b){return s_lm.Sa().Mb.Wa(a,b,void 0,void 0)},s_mm=function(a,b,c,d,e,f,g){return s_lm.Sa().Mb.Ea(a,b,c,d,e,f,g)},s_Ata=function(a,b,c,d,e){return s_lm.Sa().Mb.Ca(a,b,c,d,1,!0,e)},s_nm=function(a){s_yta(a,!1)};

s_E("sy3z");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy41 */
try{
s_F("sy41");
s_E("sy41");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy43 */
try{
s_F("sy43");var s_om=function(a){return(a=a.exec(s_lb))?a[1]:""},s_Cta=function(){if(s_Mca)return s_om(/Firefox\/([0-9.]+)/);if(s_Wb||s_Xb||s_Vb)return s_5b;if(s_ue)return s_Rb()?s_om(/CriOS\/([0-9.]+)/):s_om(/Chrome\/([0-9.]+)/);if(s_ve&&!s_Rb())return s_om(/Version\/([0-9.]+)/);if(s_re||s_se){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(s_lb);if(a)return a[1]+"."+a[2]}else if(s_te)return(a=s_om(/Android\s+([0-9.]+)/))?a:s_om(/Version\/([0-9.]+)/);return""}(),s_pm=function(a){return 0<=s_Ia(s_Cta,a)};

s_E("sy43");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy42 */
try{
var s_Dta=function(a){return new s_Nc(a.width,a.height)},s_Eta=function(a,b){b=b||s_1c();a=s_Aca(a,b,void 0);b.scrollLeft=a.x;b.scrollTop=a.y};s_F("sy42");var s_Fta=function(){if(s_2aa){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(s_lb))?a[1]:"0"}return s_1b?(a=/10[_.][0-9_.]+/,(a=a.exec(s_lb))?a[0].replace(/_/g,"."):"10"):s_2b?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(s_lb))?a[1]:""):s_3b||s_4b||s_5aa?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(s_lb))?a[1].replace(/_/g,"."):""):""}();
var s_qm=function(a){var b=s_2d(a),c=s_ve&&s_pm(10),d;if(d=s_6aa)d=0<=s_Ia(s_Fta,10);return b&&(s_Zb||c||d)?-a.scrollLeft:!b||s_Yb&&s_6b("8")||"visible"==s_Kd(a,"overflowX")?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft},s_rm=function(a){var b=a.offsetLeft,c=a.offsetParent;c||"fixed"!=s_Ld(a)||(c=s_Qc(a).documentElement);if(!c)return b;if(s_Zb){var d=s_Rd(c);b+=d.left}else s_7b(8)&&!s_7b(9)&&(d=s_Rd(c),b-=d.left);return s_2d(c)?c.clientWidth-(b+a.offsetWidth):b},s_sm=function(a,b){b=Math.max(b, 0);s_2d(a)?s_Zb?a.scrollLeft=-b:s_Yb&&s_6b("8")?a.scrollLeft=b:a.scrollLeft=a.scrollWidth-b-a.clientWidth:a.scrollLeft=b};

s_E("sy42");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy44 */
try{
s_F("sy44");var s_tm=function(a,b,c){this.x=s_c(a)?a:0;this.y=s_c(b)?b:0;this.z=s_c(c)?c:0};s_tm.prototype.clone=function(){return new s_tm(this.x,this.y,this.z)};s_tm.prototype.Oa=function(){return[this.x,this.y,this.z]};
s_E("sy44");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy45 */
try{
var s_Gta=function(a){a:{var b=s_Ka("transform");if(void 0===a.style[b]&&(b=s_yd()+s_Faa(b),void 0!==a.style[b])){b=s_zd()+"-transform";break a}b="transform"}return s_Kd(a,b)||s_Kd(a,"transform")};s_F("sy45");var s_Hta=s_xd(function(){return!s_Wb||s_pm(9)}),s_Ita=s_xd(function(){return s__b||s_Xb||s_Zb&&s_pm(10)||s_Wb&&s_pm(10)}),s_um=function(a){a=s_Gta(a);var b=s_Jta();return a&&b?(a=new b(a),new s_Jc(a.m41,a.m42)):new s_Jc(0,0)},s_vm=function(a,b,c){s_Hta()&&(b=s_Ita()?"translate3d("+b+"px,"+c+"px,0px)":"translate("+b+"px,"+c+"px)",s_t(a,s_Kta(),b))},s_Lta=function(a){a=s_Gta(a);var b=s_Jta();return a&&b?(a=new b(a),new s_tm(a.m11,a.m22,a.m33)):new s_tm(0,0,0)},s_Kta=s_xd(function(){return s_Wb&&9== s_cba?"-ms-transform":"transform"}),s_Jta=s_xd(function(){return s_c(s_b.WebKitCSSMatrix)?s_b.WebKitCSSMatrix:s_c(s_b.MSCSSMatrix)?s_b.MSCSSMatrix:s_c(s_b.CSSMatrix)?s_b.CSSMatrix:null});

s_E("sy45");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy46 */
try{
var s_Mta=0,s_wm=function(a){return a+"_"+s_Mta++},s_xm=function(a,b,c,d){var e=document.createEvent("HTMLEvents");e.initEvent(b,!0,!0);e.sender=c;e.Ig=d;a.dispatchEvent(e)},s_ym=function(a){return s_7l?a.pointerId:a.identifier};s_F("sy46");var s_zm=function(a,b,c){this.Pa=a;this.nb=b;this.Ea=c;this.ma=[];this.Da=[];this.Ja=[];this.Ma=[];this.Ca=[];this.Ga=[]};s_zm.prototype.$=0;var s_Nta=function(a,b){b=s_cm(b);for(var c=b.length,d=0;d<a.$;d++){a.Da[d]=void 0;for(var e=0;e<c;e++)if(a.ma[d]==s_ym(b[e])){a.Da[d]=b[e];var f=!0;break}}return f};s_zm.prototype.reset=function(){this.$=0;this.Ia=this.Wa=!1};s_zm.prototype.suspend=function(){this.Ia=!0}; var s_Ota=function(a,b){b=b||0;var c=a.Da[b];return c?c.clientX:a.Pa[a.ma[b||0]]},s_Pta=function(a,b){b=b||0;var c=a.Da[b];return c?c.clientY:a.nb[a.ma[b||0]]};
var s_Am=function(a,b,c){s_zm.call(this,b,c,1);this.rb=a;this.Na=new s_ita};s_h(s_Am,s_zm);s_Am.prototype.Cd=function(a){s_jta(this.Na,this.Ca[0],this.Ga[0],a.timeStamp);this.xc=this.Ca[0];this.Xa=this.Ga[0]};s_Am.prototype.Yb=function(a){return this.rb.Xa(a)};s_Am.prototype.Db=function(a){this.xc=this.Ca[0];this.Xa=this.Ga[0];s_mta(this.Na,s_Ota(this),s_Pta(this),a.timeStamp);this.rb.Rv(a);a.preventDefault()};
s_Am.prototype.Za=function(a){a&&(this.Lb=s_nta(this.Na,this.Pa[this.ma[0]],this.nb[this.ma[0]],a.timeStamp)||void 0,a.preventDefault());this.rb.Ub(a);var b=this.Ca[0],c=this.Ga[0];a&&s_hta()?a.preventDefault():s_em(b,c,void 0)};var s_Qta=function(a){return s_Ota(a)-a.xc},s_Rta=function(a){return Math.abs(s_Pta(a)-a.Xa)>Math.abs(s_Qta(a))};
var s_Bm=function(a,b,c){s_zm.call(this,b,c,2);this.Na=a};s_h(s_Bm,s_zm);s_Bm.prototype.Cd=s_d;s_Bm.prototype.Yb=function(a){return this.Na.Ea(a)};s_Bm.prototype.Db=function(a){this.Na.ma(a);a.preventDefault()};s_Bm.prototype.Za=function(a){this.Na.$(a);a&&a.preventDefault()};
var s_Cm=function(a){this.Wa=a;this.Aa=this.Wa.va();this.ma={};this.Ea={};this.$=[]},s_Sta=[s_Am,s_Bm],s_Tta=function(a,b){var c=a.$[0];if(c)return c;c=new s_Sta[0](b,a.ma,a.Ea);return a.$[0]=c};
s_Cm.prototype.Ga=function(a){var b=s_bm(a),c=b.length;for(f in this.ma){for(var d=0;d<c;d++)if(f==s_ym(b[d])){var e=!0;break}e||s_Uta(this,+f)}b=s_cm(a);c=b.length;for(d=0;d<c;d++){var f=s_ym(b[d]);s_c(this.ma[f])&&s_Uta(this,+f)}c=!0;d=this.$.length;for(b=0;b<d;b++)if((f=this.$[b])&&f.$!=f.Ea){c=!1;break}if(!c&&this.Wa.Cc(a)){c=s_cm(a);f=c.length;for(b=0;b<f;b++){e=c[b];var g=s_ym(e);this.ma[g]=e.clientX;this.Ea[g]=e.clientY}for(b=0;b<d;b++)if(f=this.$[b])if(c=f,f=a,!c.Ia&&c.$!=c.Ea){e=s_cm(f);
g=Math.min(e.length,c.Ea-c.$);for(var k=0;k<g;k++){var l=e[k];c.ma[c.$]=s_ym(l);c.Ca[c.$]=l.clientX;c.Ga[c.$]=l.clientY;c.$++}s_Nta(c,f);if(c.$==c.Ea)for(k=0;k<c.Ea;k++)c.Ja[k]=c.Ma[k]=0;c.Cd(f)}}};
s_Cm.prototype.Ca=function(a){for(var b=!0,c=this.$.length,d=0;d<c;d++){var e=this.$[d];if(e&&0<e.$){b=!1;break}}if(!b){for(d=0;d<c;d++)if(e=this.$[d]){b=void 0;var f=a;if(!e.Ia&&e.$==e.Ea&&s_Nta(e,f))if(e.Wa)e.Db(f);else{for(var g=0;g<e.Ea;g++){var k=e.Da[g];if(k){var l=e.ma[g],m=e.nb[l]-k.clientY;e.Ja[g]+=Math.abs(e.Pa[l]-k.clientX);e.Ma[g]+=Math.abs(m);b=b||2<e.Ja[g]||2<e.Ma[g]}}if(b){for(g=0;g<e.Ea;g++)e.Ca[g]=s_Ota(e,g),e.Ga[g]=s_Pta(e,g);e.Wa=e.Yb(f);e.Wa?e.Db(f):e.reset()}}}a=s_cm(a);c=a.length;
for(d=0;d<c;d++)b=a[d],e=s_ym(b),s_c(this.ma[e])&&(this.ma[e]=b.clientX,this.Ea[e]=b.clientY)}};s_Cm.prototype.Da=function(a){for(var b=s_cm(a),c=b.length,d,e=0;e<c;e++){var f=b[e];f=s_ym(f);s_c(this.ma[f])&&(this.Wa.Lb(a),d=!0)}if(d){d=this.$.length;for(e=0;e<d;e++)if(f=this.$[e]){var g=a;if(!f.Ia&&0<f.$&&s_Nta(f,g)){f.Wa&&f.Za(g);g=f.$;for(var k=0,l=0;l<g;l++)if(f.Da[l]){var m=f;m.ma.splice(l-k,1);m.$--;m.Wa=!1;k++}}}for(e=0;e<c;e++)f=b[e],f=s_ym(f),s_c(this.ma[f])&&(delete this.ma[f],delete this.Ea[f])}};
var s_Uta=function(a,b){a.Wa.Lb(null);for(var c=a.$.length,d=0;d<c;d++){var e=a.$[d];if(e){var f=void 0;if(!e.Ia&&0<e.$){for(var g=0;g<e.$;g++)if(e.ma[g]==b){f=g;break}s_c(f)&&(e.Wa&&e.Za(null),e.ma.splice(f,1),e.$--,e.Wa=!1)}}}delete a.ma[b];delete a.Ea[b]};s_Cm.prototype.enable=function(a,b){var c=s_e(this.Da,this);s_am(this.Aa,s_e(this.Ga,this),s_e(this.Ca,this),c,c,a,b)}; s_Cm.prototype.reset=function(){for(var a in this.ma)delete this.ma[Number(a)],delete this.Ea[Number(a)];for(a=0;a<this.$.length;a++){var b=this.$[a];b&&b.reset()}};

s_E("sy46");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy4a */
try{
s_F("sy4a");var s_Vta=s_Wb?"-ms-":s_Zb?"-moz-":s_Vb?0>s_Ia(s_5b,"15.0")?"-o-":"-webkit-":"-webkit-",s_Wta=s_Wb?"ms":s_Zb?"Moz":s_Vb?0>s_Ia(s_5b,"15.0")?"O":"webkit":"webkit",s_Dm=s_Vta+"transform",s_Em=s_Wta+"Transform",s_Xta=s_Wta+"Transition";
s_E("sy4a");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy4b */
try{
var s_Fm=function(a){a=document.defaultView.getComputedStyle(a,null)[s_Em];return"undefined"!=typeof WebKitCSSMatrix?new WebKitCSSMatrix(a):"undefined"!=typeof MSCSSMatrix?new MSCSSMatrix(a):"undefined"!=typeof CSSMatrix?new CSSMatrix(a):{}};s_F("sy4b");
var s_Yta="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix(""),s_Zta=s__b?"webkitTransitionEnd":"transitionend",s__ta=function(a,b,c,d){a.style[s_Xta]=(c||s_Dm)+" "+b+"ms "+(d||"ease-in-out")},s_Gm=function(a,b,c){a.style[s_Em]=s_0ta(b,c)},s_0ta=function(a,b){a=s_ja(a)?a+"px":a||"0";b=s_ja(b)?b+"px":b||"0";return s_Yta?"translate3d("+a+","+b+",0)":"translate("+a+","+b+")"};

s_E("sy4b");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy4c */
try{
var s_1ta=function(a,b,c,d,e,f,g,k){b="translate3d("+b+"px,"+c+"px,"+(d||0)+"px)";e&&(b+=" rotate("+e+"deg)");s_c(f)&&(b+=" scale3d("+f+","+f+",1)");a.style[s_Em]=b;g&&(a.style[s_Em+"OriginX"]=g+"px");k&&(a.style[s_Em+"OriginY"]=k+"px")},s_2ta=function(a,b,c){a.style.left=b+"px";a.style.top=c+"px"};s_F("sy4c");
var s_3ta=function(){this.Na=s_e(this.rb,this);this.Ca=this.Da=0},s_4ta=7/60,s_5ta=7/60,s_6ta=1E3/60,s_7ta=.25*s_6ta,s_Hm=.01*s_6ta;s_=s_3ta.prototype;s_.WB=function(){return 0};
s_.start=function(a,b,c,d){this.Ia=b;this.Ga=c;this.$=d.clone();this.Wa=d.clone();b=s_8ta(a.x,this.$.x,this.Ia.x,this.Ga.x);if(0>b*a.x||!a.x&&b)this.Ca=2;c=s_8ta(a.y,this.$.y,this.Ia.y,this.Ga.y);if(0>c*a.y||!a.y&&c)this.Da=2;this.ma=new s_Jc(b,c);if(Math.abs(this.ma.y)>=s_7ta||Math.abs(this.ma.x)>=s_7ta||this.Ca||this.Da){a=[];for(b=s_g();;){do this.$.y+=this.ma.y,this.$.x+=this.ma.x,this.Ma=Math.round(this.$.y),this.Ja=Math.round(this.$.x),s_9ta(this,this.$.x,this.Ia.x,this.Ga.x,this.ma.x,this.Ca,
!1),s_9ta(this,this.$.y,this.Ia.y,this.Ga.y,this.ma.y,this.Da,!0),b+=s_6ta;while(this.Ma==this.Wa.y&&this.Ja==this.Wa.x&&(Math.abs(this.ma.y)>=s_Hm||Math.abs(this.ma.x)>=s_Hm));if(0==this.Ca&&0==this.Da&&this.Ma==this.Wa.y&&this.Ja==this.Wa.x)break;a.push(b,this.Ja,this.Ma);this.Wa.y=this.Ma;this.Wa.x=this.Ja}this.Ea=a;if(this.Ea.length)return this.Za=window.setTimeout(this.Na,this.Ea[0]-s_g()),this.Db=!0}};s_.CP=s_d;s_.stop=function(){this.Db=!1;this.Ea=[];window.clearTimeout(this.Za);s_$ta(this.Mb)};
s_.dA=function(){return this.Db};s_.pO=function(a){this.Mb=a};var s_8ta=function(a,b,c,d){a=a*s_6ta*1.25;Math.abs(a)<s_7ta&&(b<c?(a=(c-b)*s_5ta,a=Math.max(a,s_Hm)):b>d&&(a=(b-d)*s_5ta,a=-Math.max(a,s_Hm)));return a},s_9ta=function(a,b,c,d,e,f,g){if(e){e*=.97;if(b<c)var k=c-b;else b>d&&(k=d-b);k?0>k*e?(f=2==f?0:1,e+=k*s_4ta):(f=2,e=0<k?Math.max(k*s_5ta,s_Hm):Math.min(k*s_5ta,-s_Hm)):f=0;g?(a.ma.y=e,a.Da=f):(a.ma.x=e,a.Ca=f)}}; s_3ta.prototype.rb=function(){if(this.Ea.length){var a=this.Ea.splice(0,3);this.Mb.Rb(a[1],a[2]);this.Ea.length?(a=this.Ea[0]-s_g(),this.Za=window.setTimeout(this.Na,a)):this.stop()}};
var s_aua=1/3,s_bua=2/3,s_cua=[s_aua,s_bua,s_bua,1],s_dua=function(a,b,c,d){if(s_Ic(b,0))return s_cua;s_Ic(a,b)?a=[0,0]:(b=(d-c*b)/(a-b),a=[b,b*a]);a=[a[0]/c,a[1]/d];c=a[0]*s_bua;d=a[1]*s_bua;return[c,d,c+s_aua,d+s_aua]};var s_Im=function(){this.$=[]};s_Im.prototype.ma=-5E-4;s_Im.prototype.WB=function(){return 1};
s_Im.prototype.start=function(a,b,c,d){var e=Math.abs(a.y)>=Math.abs(a.x),f=e?a.y:a.x;a=e?b.y:b.x;var g=e?c.y:c.x,k=e?d.y:d.x;b=s_Gc(e?d.x:d.y,e?b.x:b.y,e?c.x:c.y);if(k<a||k>g)a=k<a?a:g,this.$.push(e?b:a,e?a:b,500,"ease-out");else if(.25<=Math.abs(f)){d=(c=0>f)?-this.ma:this.ma;var l=c?a-k:g-k,m=f;if(l){m=f*f;var n=2*d,ba=-m/n;Math.abs(ba)<Math.abs(l)?(l=ba,m=0):(m=Math.sqrt(m+n*l),m*=0>f?-1:1);this.Da=m;this.Ea=(m-f)/d;this.Ca=l;f="cubic-bezier("+s_dua(f,this.Da,this.Ea,this.Ca).join(",")+")";k+=
this.Ca;this.$.push(e?b:k,e?k:b,this.Ea,f);m=this.Da}0!=m&&(a=c?a:g,k=50*m,g=a+k,this.Ea=2*k/(m+0),f="cubic-bezier("+s_dua(m,0,this.Ea,k).join(",")+")",this.$.push(e?b:g,e?g:b,this.Ea,f),this.$.push(e?b:a,e?a:b,500,"ease-out"))}if(this.$.length)return this.Wa=!0,s_eua(this),!0};var s_eua=function(a){var b=a.$,c=b.shift(),d=b.shift(),e=b.shift();b=b.shift();a.Mb.Rb(c,d,e,b)};s_Im.prototype.CP=function(){this.Wa&&(this.$.length?s_eua(this):(this.Wa=!1,s_$ta(this.Mb)))}; s_Im.prototype.stop=function(){this.Wa=!1;this.$=[];s_$ta(this.Mb)};s_Im.prototype.dA=function(){return this.Wa};s_Im.prototype.pO=function(a){this.Mb=a};
var s_fua=function(){},s_gua=new s_fua;s_fua.prototype.$=1;var s_hua=function(a){this.Ec=a;this.$=[];this.Ea=s_e(this.T2,this)};s_=s_hua.prototype;s_.initialize=function(){var a=this.Ec.va();this.Wa=a;s_4l(a,s_iua,s_e(this.DP,this));1==this.Ec.Ea.WB()&&(s_4l(a,s_jua,s_e(this.U2,this)),s_4l(a,s_Jm,s_e(this.RF,this)))};s_.addListener=function(a){this.$.push(a)};s_.U2=function(){window.clearInterval(this.ma);this.ma=window.setInterval(this.Ea,30)};
s_.DP=function(){if(1!=this.Ec.Ea.WB()||!this.Ec.Ea.dA())for(var a=this.Ec.$.x,b=this.Ec.$.y,c=0;c<this.$.length;c++)this.$[c].ma(a,b,void 0)};s_.RF=function(){window.clearInterval(this.ma);this.DP()};s_.T2=function(){var a=s_Fm(this.Wa),b=a.m41;a=a.m42;for(var c=0;c<this.$.length;c++)this.$[c].ma(b,a,!0)};
var s_Lm=function(a,b,c,d,e,f,g,k){this.Aa=a;this.Yb=a.parentNode;this.Aa.addEventListener(s_Zta,s_e(this.fD,this),!1);this.Yd=new s_Cm(this);this.Yd.enable(f);this.Ga=s_Tta(this.Yd,this);switch(s_gua.$){case 0:var l=new s_3ta;break;case 1:l=new s_Im}l.pO(this);this.Ea=l;this.Da=null;this.nb=!!b;this.Vc=!!c;this.Ed=d;this.Ja=e||1;this.ma=s_Km.clone();this.Ma=s_Km.clone();this.rb=s_Km.clone();this.$=s_Km.clone();this.Pa=1==this.Ja?s_1ta:s_2ta;a=s_c(k)?k:this.ma.y;this.$.x=s_c(g)?g:this.ma.x;this.$.y=
a;this.Ja=g=this.Ja;this.Pa=1==g?s_1ta:s_2ta;1!=g&&(this.Aa.style[s_Xta]="",this.Aa.style[s_Em]="");2!=g&&s_2ta(this.Aa,0,0);this.Pa(this.Aa,this.$.x,this.$.y);this.Pb=[]},s_kua=s_wm("scroller:scroll_start"),s_Jm=s_wm("scroller:scroll_end"),s_lua=s_wm("scroller:drag_end"),s_iua=s_wm("scroller:content_moved"),s_jua=s_wm("scroller:decel_start"),s_Km=new s_Jc(0,0);s_Lm.prototype.wc=null;s_Lm.prototype.Za=!0;
s_Lm.prototype.reset=function(){this.stop();this.Ga.reset();s_Mm(this,this.Aa,0);this.Ia();s_Nm(this,s_2d(document.body)?this.Wa.x:this.ma.x,this.ma.y)};
s_Lm.prototype.Ia=function(){this.Ca=new s_Nc(this.Yb.offsetWidth,this.Yb.offsetHeight);this.Cd=new s_Nc(this.qh||this.Aa.scrollWidth,this.Be||this.Aa.scrollHeight);var a=new s_Nc(Math.max(this.Ca.width,this.Cd.width),Math.max(this.Ca.height,this.Cd.height)),b=s_2d(document.body);if(b){var c=a.width-this.Ca.width;c=this.Ma.x?Math.min(c,this.Ma.x):c}else c=s_Km.x-this.Ma.x;this.ma=new s_Jc(c,s_Km.y-this.Ma.y);this.Wa=new s_Jc(b?this.rb.x:Math.min(this.Ca.width-a.width+this.rb.x,this.ma.x),Math.min(this.Ca.height-
a.height+this.rb.y,this.ma.y));s_mua(this)};var s_mua=function(a){var b=s_Gc(a.$.x,a.Wa.x,a.ma.x),c=s_Gc(a.$.y,a.Wa.y,a.ma.y);a.$.x==b&&a.$.y==c||s_Nm(a,b,c)},s_Nm=function(a,b,c){a.$.x=b;a.$.y=c;a.Pa(a.Aa,b,c);s_xm(a.Aa,s_iua,a)};s_Lm.prototype.gp=function(a,b,c,d){s_c(c)&&1==this.Ja&&s_Mm(this,this.Aa,c,s_Dm,d);s_Nm(this,a,b)};s_Lm.prototype.fD=function(a){a.target==this.Aa&&(this.Na=!1,this.Ea.CP())};
s_Lm.prototype.stop=function(){if(this.Ea.dA())if(2==this.Ja)this.Ea.stop();else{var a=s_Fm(this.Aa);if(this.Na){this.$.x=a.m41;this.$.y=a.m42;this.Db=!0;var b=this;window.setTimeout(function(){var c=s_Fm(b.Aa);s_Mm(b,b.Aa,0);window.setTimeout(function(){b.Db=!1},0);var d=c.m41+2*(c.m41-a.m41);c=c.m42+2*(c.m42-a.m42);d=s_Gc(d,b.Wa.x,b.ma.x);c=s_Gc(c,b.Wa.y,b.ma.y);s_nua(b,d,c)},0)}else s_nua(this,a.m41,a.m42)}};var s_nua=function(a,b,c){a.Ea.stop();s_Nm(a,b,c)};
s_Lm.prototype.Cc=function(a){if(this.Ga.Wa)return!0;this.Ia();this.Ea.dA()?(a.preventDefault(),this.Kb||a.stopPropagation(),this.stop()):s_Mm(this,this.Aa,0);this.De=this.$.clone();s_mua(this);return!0};s_Lm.prototype.Lb=function(){};s_Lm.prototype.Xa=function(a){var b=s_Rta(this.Ga);if(this.wd&&!b||!this.nb&&(!s_oua(this)||b))return!1;b=0;for(var c;c=this.Pb[b];++b)if(!c.ma(this,a))return!1;for(b=0;c=this.Pb[b];++b)c.$(this,a);return!0};
s_Lm.prototype.Rv=function(a){this.Za||a.stopPropagation();a=this.Ga;var b=s_Pta(a)-a.Xa;if(!this.Db){var c=this.De;a=c.x+s_Qta(this.Ga);a=s_oua(this)?s_pua(a,this.Wa.x,this.ma.x):0;b=c.y+b;b=this.nb?s_pua(b,this.Wa.y,this.ma.y):0;this.xc||(this.xc=!0,s_xm(this.Aa,s_kua,this));s_Nm(this,a,b)}};var s_oua=function(a){return a.Vc&&a.Ca.width<a.Cd.width},s_pua=function(a,b,c){a<b?a-=(a-b)/2:a>c&&(a-=(a-c)/2);return a};
s_Lm.prototype.Ub=function(){var a=this.Ga.Lb;s_xm(this.Aa,s_lua,this);if(a&&this.Ed&&!this.Na){s_oua(this)||(a.x=0);this.nb||(a.y=0);var b=this.Ea.start(a,this.Wa,this.ma,this.$)}b?s_xm(this.Aa,s_jua,this):(s_mua(this),s_xm(this.Aa,s_Jm,this),this.xc=!1)};var s_Mm=function(a,b,c,d,e){a.Na=0<c;s__ta(b,c,d,e)};s_Lm.prototype.va=function(){return this.Aa};s_Lm.prototype.getFrame=function(){return this.Yb};s_Lm.prototype.Rb=s_Lm.prototype.gp; var s_$ta=function(a){s_Mm(a,a.Aa,0);s_xm(a.Aa,s_Jm,a);a.xc=!1},s_qua=function(a,b){a.Da||(a.Da=new s_hua(a),a.Da.initialize());a.Da.addListener(b)};

s_E("sy4c");s_G();
}catch(e){_DumpException(e)}
/* _Module_:tnv */
try{
var s_rua=function(){var a={cdr_min:"cd_min",cdr_max:"cd_max"},b=s_n("ctbs");if(b)for(var c in a){var d=s_Bta(s_n(c).value);d=d.replace(/^\s+|\s+$/g,"");b.value=b.value.replace(new RegExp("("+a[c]+":)([^,]*)"),"$1"+d)}return!0},s_sua=function(a,b){b?(s_x(a,"checked"),a.setAttribute("aria-checked","true")):(s_y(a,"checked"),a.setAttribute("aria-checked","false"))},s_tua=function(a){if(s_A.get(a,"s"))var b=a.previousSibling;var c=null!==a&&s_w(a,"checked");s_sua(a,!c);b&&!c&&s_sua(b,!1);a.hasAttribute("url")&& (b=a.getAttribute("url")+"&ei="+google.getEI(a),(a=s_A.get(a,"ved"))&&(b+="&ved="+a),s_ne(b))};s_F("tnv");
var s_Pm=function(a,b,c,d){this.jj=a;this.$=b;this.Wa=!!c;this.Zd=d?d:null;this.ma=null;this.Ea=s_zta(this.jj,s_e(this.Da,this));s_de(93,s_e(this.hide,this));s_Om.push(this);a=this.jj.querySelectorAll(".mn-hd-txt");0<a.length&&this.jj.setAttribute("aria-label",a[0].innerHTML)},s_Om=[];s_Pm.prototype.hide=function(){this.$.setAttribute("aria-expanded","false");s_y(this.$,"hdtb-mn-o");s_x(this.$,"hdtb-mn-c");this.ma&&s_m(document.body,"click",this.ma)};
s_Pm.prototype.Da=function(a){var b=s_w(this.$,"hdtb-mn-c");this.Wa&&s_B(this.$,[this.$],[b]);b?(s_fe(93),this.$.setAttribute("aria-expanded","true"),s_Je(a.$||a),this.Zd&&this.Zd(this.jj,this.$),s_y(this.$,"hdtb-mn-c"),s_x(this.$,"hdtb-mn-o"),this.ma=s_e(this.Ca,this),s_l(document.body,"click",this.ma),b=this.$.querySelectorAll(".hdtb-mitem .qs"),0<b.length&&("keydown"==a.type&&a.preventDefault(),b[0].focus()),b=this.$.querySelectorAll(".hdtbSel"),0<b.length&&("keydown"==a.type&&a.preventDefault(), b[0].focus())):this.hide()};s_Pm.prototype.Ca=function(a){s_hd(this.$,s_Ie(a.jd||a.$||a))||this.hide()};s_Pm.prototype.dispose=function(){s_nm(this.Ea);this.Ea="";this.ma&&(s_m(document.body,"click",this.ma),this.ma=null)};
var s_yua=function(a,b,c){this.jj=a;this.$=b;this.Ea=s_n("hdtb-rst");c&&(this.Zd=c);this.ma=s_n("appbar");this.Wa=[];a=this.$.querySelectorAll(".hdtb-mn-hd");b=this.$.querySelectorAll("ul.hdtbU");c=a.length;for(var d=0;d<c;d++){var e=a[d],f=b[d];e&&f&&this.Wa.push(new s_Pm(e,f,!1,s_uua))}s_zta(this.jj,s_e(this.Da,this));this.Ea&&s_zta(this.Ea,s_e(this.Ca,this));s_vua(this);s_wua(this);s_xua(this,s_Qm(this))},s_uua=function(a,b){var c=document.body||document.documentElement,d=s_2d(c),e=d?"right":"left",
f=s_Sd(a),g=s_Nd(a).y,k=s_Sd(s_q("hdtb-mn-cont"))-s_Sd(s_n("hdtbMenus")),l=f-15-k;s_q("gsa-tools-card")&&(l-=s_Sd(s_n("hdtbMenus")));a=s_u(a);d&&(l=s_u(c).width-f-a.width-15+k-20);c=a.height+g+"px";d=a.width+30+30+"px";b.style[e]=l+"px";s_t(b,{top:c,"min-width":d})},s_zua=function(a){for(var b=a.Wa.length,c=0;c<b;++c)a.Wa[c].hide()},s_Aua=function(a){var b=s_q("gsa-tools-card");b&&s_v(b,!0);a.Zd&&a.Zd();a.$.setAttribute("aria-expanded","true");s_xua(a,!0);s_y(a.$,"hdtb-td-c");s_y(a.$,"hdtb-td-h");
s_H.qc(s_e(function(){s_x(this.$,"hdtb-td-o");this.ma&&s_x(this.ma,"hdtb-ab-o");s_vua(this);s_wua(this)},a));a=a.$.querySelectorAll(".hdtb-mn-hd");0<a.length&&a[0].focus()},s_Bua=function(a){s_xua(a,!1);s_zua(a);a.$.setAttribute("aria-expanded","false");s_H.qc(s_e(function(){s_y(this.$,"hdtb-td-o");s_x(this.$,"hdtb-td-c");this.ma&&s_y(this.ma,"hdtb-ab-o");s_vua(this);s_wua(this)},a));a.jj.focus();(a=s_q("gsa-tools-card"))&&s_v(a,!1)};
s_yua.prototype.Da=function(){var a=!s_Qm(this);s_B(this.jj,[this.$],[a]);var b=s_n("tndd");b&&(b.style.webkitTransform="translate3d(0,-"+s_A.get(b,"height")+"px,0)");b=s_n("htnmenu");var c=s_n("htnoverlay");b&&c&&(b.style.webkitTransform="translate3d(0,0,0)",c.style.opacity=0,s_y(document.body,"fxd"));a?s_Aua(this):s_Bua(this);for(a=0;a<s_Om.length;a++)s_Om[a].hide()};s_yua.prototype.Ca=function(){s_ne(this.Ea.getAttribute("data-url"))};
var s_Qm=function(a){return"hdtb-td-o"==a.$.className},s_vua=function(a){var b=s_n("botabar");b&&s_0d(b)&&(b.style.marginTop=s_Qm(a)?a.$.offsetHeight+"px":0);a.ma&&s_z(a.ma,"hdtb-ab-o",s_Qm(a))},s_wua=function(a){var b=s_n("epbar"),c=s_n("slim_appbar");c&&!s_0d(c)&&b&&(b.style.marginTop=s_Qm(a)?10+a.$.offsetHeight+"px":"10px")},s_xua=function(a,b){s_z(a.jj,"hdtb-tl-sel",b)};
var s_Cua=function(a){s_M(this,a,0,10,null,null)};s_h(s_Cua,s_L);var s_Rm=function(a){this.Ma=this.Ja=null;this.Na=s_N(a,2);this.$=s_N(a,9);this.Ga=s_N(a,3);this.Ea=s_N(a,1);this.Xa=!1;this.Wa=s_n("hdtb-more");this.Ca=s_n("hdtb-more-mn");this.Pa=s_n("hdtb-tls");this.Da=s_n("hdtbMenus");this.Ia=s_n("hdtb-sc");this.Za=s_n("hdtb-s")||s_n("hdtb-msb");this.Wa&&this.Ca&&new s_Pm(this.Wa,this.Ca,!0,s_e(this.Db,this));this.Na&&!this.$&&this.Za&&(this.Ja=s_Dua(this.Za));this.Wa&&this.Ca&&this.$&&this.Ea&&s_l(window,"resize",s_e(this.Db,this,this.Wa,this.Ca));this.Pa&&this.Da&&
new s_yua(this.Pa,this.Da,s_e(this.Lb,this));this.Ga&&null!==this.Da&&s_w(this.Da,"hdtb-td-o")&&s_Eua(this);a=s_n("hdtb");null===a||s_l(a,"keydown",s_e(this.rb,this));s_Oh("tnv",{cb:s_tua,scf:s_rua});this.Na&&this.Ia&&s_Oh("tnv",{msc:s_e(this.nb,this)})};s_h(s_Rm,s_k);s_Rm.prototype.Ha=function(){for(var a=0;a<s_Om.length;a++)s_Om[a].dispose();s_Om=[];this.Ma=this.Ja=null;this.Ea=this.Ga=!1;a=s_n("hdtb");null===a||s_m(a,"keydown",this.rb)};
s_Rm.prototype.rb=function(a){this.Xa||9!=a.jd.keyCode||(s_y(s_n("hdtb"),"notl"),this.Xa=!0)};s_Rm.prototype.Db=function(a,b){var c=s_We(),d=this.Ea!=c;c=d?"right":"left";var e=Math.max(0,s_Sd(a));this.Ea&&!this.$?e=0:d&&(d=s_u(document.body||document.documentElement).width,e=Math.max(0,d-e-s_u(a).width));b.style[c]=e+"px"};s_Rm.prototype.Lb=function(){!this.Ma&&this.Ga&&s_Eua(this)};
var s_Dua=function(a){var b=s_Hd(a,"transform")?s_um(a).x:null,c=new s_Lm(a,!1,!0,!0,1,!0);c.Za=!0;c.Kb=!0;c.Ia();a=s_q("hdtb-msel",a)||s_q("hdtb-tsel",a);var d=0;null!=b?d=b:a&&(b=document.body||document.documentElement,d=s_2d(b)?Math.min(s_Sd(a)-s_Sd(b),c.ma.x):Math.max(Math.min(c.ma.x,-s_Sd(a)+15),c.Wa.x));c.gp(d,0);s_l(document,"orientationChange",c.Ia);return c},s_Eua=function(a){var b=s_p("hdtb-mn-cont")[0];b&&(a.Ma=s_Dua(b))};
s_Rm.prototype.nb=function(a,b,c){s_Rb()&&!s_Jb()&&c.target&&"A"==c.target.nodeName&&s_t(this.Ia,"overflow-scrolling","auto");a=this.$?s_qm(this.Ia):Math.abs(this.Ja.$.x);(b=s_wk("session","tnv"))&&b.set("hdtb-pos",a)};var s_Fua=function(a){s_Rm.call(this,a.Ka.$(s_Cua,"top_nav"))};s_h(s_Fua,s_Rm);
var s_Gua=function(a){this.Ka=a};s_U(function(a){s_S(a,"t-js5htJpaNsk",s_Fua,s_Gua,null,function(a,c){s_Fua.call(a,c)})});


s_E("tnv");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy21 */
try{
var s_Gka=function(a){return null==a.Ea?"\x00\x00\x00\x00\x00\x00\x00\x00":a.Ea},s_Hka=function(a){return null==a.ma?0:a.ma},s_Ika=function(a){return null==a.$?0:a.$},s_Ej=function(a){null===a.$&&(a.$=new s_Bka);return a.$},s_Jka=function(a){null===a.ma&&(a.ma=new s_Dka);return a.ma},s_Kka=function(a){if(!arguments.length)return[];for(var b=[],c=arguments[0].length,d=1;d<arguments.length;d++)arguments[d].length<c&&(c=arguments[d].length);for(d=0;d<c;d++){for(var e=[],f=0;f<arguments.length;f++)e.push(arguments[f][d]);
b.push(e)}return b},s_Fj=function(a){if(!a.getBoundingClientRect)return null;a=s_Cca(s_xca,a);return new s_Nc(a.right-a.left,a.bottom-a.top)},s_Gj=function(a,b,c,d,e){a=s_Td(s_n(a));s_$d(a,b,c,d,e)},s_Nva=function(a){a=a.getElementsByClassName("sscit-img");for(var b=0;b<a.length;b++){var c=a[b];c.hasAttribute("data-img-url")&&(c.src=c.getAttribute("data-img-url"),c.removeAttribute("data-img-url"))}},s_Mka=function(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!s_Lka(a[d],
b[d]))return!1;return!0},s_Lka=function(a,b){if(a==b)return!0;if(!s_ra(a)||!s_ra(b)||a.constructor!=b.constructor)return!1;if(s_si&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,e=void 0,f=Math.max(a.length,b.length);for(c=0;c<f;c++){var g=a[c],k=b[c];g&&g.constructor==Object&&(d=g,g=void 0);k&&k.constructor==Object&&(e=k,k=void 0);if(!s_Lka(g,k))return!1}return d||e?(d=d||{},e=e||{},s_Mka(d,
e)):!0}if(a.constructor===Object)return s_Mka(a,b);throw Error("kd");},s_Hj=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&s_Lka(a.Oa(),b.Oa())},s_Nka=function(a){return s_Kia?a():new s_Pe(function(b,c){s_Lia.push({ww:a,resolve:b,reject:c})})},s_Oka=function(a){return s_Nka(function(){var b=s_Ki.$[a]||null;if(!b)return s_Qe(null);b.controller||s_Iia(b);b.gr||(b.gr=s_Se(),s_sia(b));return b.gr.Mc})};s_F("sy21");
var s_V=function(a){a=a.XM;var b=a.rootElement;b||(b=a.rootElement=s_q(a.uN));return b},s_Pka=function(a){for(;!a.rb;)if(a=a.parentElement,!a)return null;return a.rb},s_Jj=function(a){a=s_V(a);s_Ij(a)},s_Ij=function(a){(a=s_Pka(a))&&a.render()},s_Kj=function(a,b,c,d){s_Eh(s_V(a),b,c,d)},s_Qka=function(a){a=s_ge(a);for(var b=0,c=a.length;b<c;b++){var d=a[b];if(s_va(d,"r-"))return d.substring(2)}return null},s_Lj=function(a){if(a){var b=a.__ctx;return b?b.bP()||null:(a=s_Qka(a))?s_Jia(a):null}return null}, s_W=function(a){var b=a.__ctx;return b?(a=b.bP())?s_D(a):s_Qe(null):(a=s_Qka(a))?s_Oka(a):s_Qe(null)};

s_E("sy21");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy22 */
try{
var s_UOd=function(a,b){a.src=s_qc(b)};s_F("sy22");var s_X=function(a){this.Na=a;this.Ja=a.XM.Yo||""};s_X.prototype.Ra=function(){return s_V(this.Na)};var s_Rka=function(a,b,c){b="."+a.Ja+"-"+b;c&&(b+=",."+a.Ja+"-"+c);return b},s_Y=function(a,b,c){return a.Ra().querySelector(s_Rka(a,b,c))},s_Mj=function(a,b,c){return a.Ra().querySelectorAll(s_Rka(a,b,c))},s_Z=function(a,b){return(a=s_Y(a,b,void 0))?s_W(a):s_Qe(null)};s_X.prototype.AY=function(a){return(a=s_Y(this,a,void 0))&&s_Lj(a)}; var s_Nj=function(a,b){var c=[];s_i(s_Mj(a,b,void 0),function(a){c.push(s_W(a))},a);return c};

s_E("sy22");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy6i */
try{
var s_wDa=function(a,b){for(var c=a.search(s_tda),d=0,e,f=[];0<=(e=s_sda(a,d,b,c));){d=a.indexOf("&",e);if(0>d||d>c)d=c;e+=b.length+1;f.push(s_Ba(a.substr(e,d-e)))}return f};s_F("sy6i");var s_xDa=[1,2],s_zr=function(){this.$=new Map;this.ma=0;this.Wa=null;this.Ea="";this.Ga=null;this.Ca=this.Da=0};s_zr.prototype.hasListener=function(a){return this.$.has(s_sa(a))};
s_zr.prototype.listen=function(a,b,c,d,e){c=void 0===c?s_xDa:c;var f=s_sa(a);if(e)this.unlisten(a);else if(this.$.has(f))throw Error("xd");this.$.set(f,{element:a,p0:b,eventTypes:c});c.includes(1)&&(0==this.ma&&(d?this.Ga=s_l(window,"mousedown",this.Ia,!0,this):s_8b?this.Ea=s_Ata(window.document.documentElement,void 0,s_e(this.Na,this),void 0,{passive:!1,capture:!0}):this.Wa=s_l(window,"click",this.Ia,!0,this)),this.ma++);c.includes(2)&&(0==this.Da&&s_l(window,"keydown",this.Ma,!0,this),this.Da++);
c.includes(3)&&(0==this.Ca&&s_l(window,"focus",this.Ja,!0,this),this.Ca++)};s_zr.prototype.unlisten=function(a){(a=this.$.get(s_sa(a)))&&s_yDa(this,a)};var s_yDa=function(a,b){b.eventTypes.includes(1)&&(a.ma--,0==a.ma&&(a.Ga?a.Ga=null:a.Ea?(s_nm(a.Ea),a.Ea=""):a.Wa&&(a.Wa=null)));b.eventTypes.includes(2)&&a.Da--;b.eventTypes.includes(3)&&a.Ca--;a.$["delete"](s_sa(b.element))};s_zr.prototype.yd=function(a){(a=this.$.get(s_sa(a)))&&s_zDa(this,a,0)};
var s_zDa=function(a,b,c,d){try{var e=b.p0(c,d)}catch(f){s_ae(f)}(c=!1===e)||s_yDa(a,b);return!c};s_zr.prototype.Na=function(a){s_ADa(this,new s_ec(a.$))&&(a.$.stopPropagation(),a.$.preventDefault())};s_zr.prototype.Ia=function(a){s_ADa(this,a)};var s_ADa=function(a,b){if(s_fd(b.target)&&"attention-ping"==b.target.id)return!1;for(var c=!1,d=s_da(a.$.values()),e=d.next();!e.done;e=d.next())e=e.value,e.eventTypes.includes(1)&&!s_hd(e.element,b.target)&&s_zDa(a,e,1,b.target)&&(c=!0);return c};
s_zr.prototype.Ma=function(a){if(27==a.keyCode){for(var b=s_da(this.$.values()),c=b.next();!c.done;c=b.next())c=c.value,c.eventTypes.includes(2)&&s_zDa(this,c,2);a.stopPropagation();a.preventDefault()}};s_zr.prototype.Ja=function(a){for(var b=s_da(this.$.values()),c=b.next();!c.done;c=b.next())c=c.value,!c.eventTypes.includes(3)||s_eca(a.target)&&s_hd(c.element,a.target)||s_zDa(this,c,3,a.target)}; var s_Ar=new s_zr,s_Br=s_e(s_Ar.listen,s_Ar),s_Cr=s_e(s_Ar.unlisten,s_Ar),s_BDa=s_e(s_Ar.yd,s_Ar),s_CDa=s_e(s_Ar.hasListener,s_Ar);

s_E("sy6i");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy89 */
try{
var s_aw=function(a){var b=document,c=b.createElement("DIV");s_Wb?(s_Ec(c,s_6ba(s_9ba,a)),c.removeChild(c.firstChild)):s_Ec(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(a=b.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);c=a}return c};s_F("sy89");
var s_cw=function(a,b,c,d,e,f,g,k,l){var m=s_1Va(c),n=s_Zd(a),ba=s_Qd(a);if(ba){var t=s_tca(ba);ba=Math.max(n.left,t.left);var w=Math.min(n.left+n.width,t.left+t.width);if(ba<=w){var B=Math.max(n.top,t.top);t=Math.min(n.top+n.height,t.top+t.height);B<=t&&(n.left=ba,n.top=B,n.width=w-ba,n.height=t-B)}}ba=s_Rc(a);w=s_Rc(c);if(ba.$!=w.$){ba=ba.$.body;w=s_pd(w);B=new s_Jc(0,0);t=s_2c(s_Qc(ba));if(s_1aa(t,"parent")){var G=ba;do{var I=t==w?s_Pd(G):s_Bca(G);B.x+=I.x;B.y+=I.y}while(t&&t!=w&&t!=t.parent&&
(G=t.frameElement)&&(t=t.parent))}ba=s_Mc(B,s_Pd(ba));n.left+=ba.x;n.top+=ba.y}a=s_2Va(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);n=new s_Jc(b,n.top+(a&1?n.height:0));n=s_Mc(n,m);e&&(n.x+=(a&4?-1:1)*e.x,n.y+=(a&1?-1:1)*e.y);if(g)if(l)var N=l;else if(N=s_Qd(c))N.top-=m.y,N.right-=m.x,N.bottom-=m.y,N.left-=m.x;return s_bw(n,c,d,f,N,g,k)},s_1Va=function(a){if(a=a.offsetParent){var b="HTML"==a.tagName||"BODY"==a.tagName;if(!b||"static"!=s_Ld(a)){var c=s_Pd(a);b||(c=s_Mc(c,new s_Jc(s_qm(a),a.scrollTop)))}}return c||
new s_Jc},s_bw=function(a,b,c,d,e,f,g){a=a.clone();var k=s_2Va(b,c);c=s_u(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var m=d.x;d.x<e.left&&(d.x=e.left,l|=4);d.x+k.width>e.right&&(k.width=Math.min(e.right-
d.x,m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(m=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=
256;l=e}f=new s_Fd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;s_Md(b,new s_Jc(f.left,f.top));g=s_Dta(f);s_Oc(c,g)||(c=g,a=s_nca(s_Rc(s_Qc(b))),!s_Wb||s_6b("10")||a&&s_6b("8")?(b=b.style,s_Zb?b.MozBoxSizing="border-box":s__b?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+"px"):(g=b.style,a?(a=s_6d(b),b=s_Rd(b),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top- a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e},s_2Va=function(a,b){return(b&8&&s_2d(a)?b^4:b)&-9};

s_E("sy89");s_G();
}catch(e){_DumpException(e)}
/* _Module_:mrn */
try{
var s_94;s_F("mrn");var s_$4=function(a){s_k.call(this);s_94||(s_94=s_1Fd);this.Ga=s_V(this);this.$=a.Hd();this.jj=a.rf();this.Ea=null;this.Wa=!1;this.Da=this.Ca=null;this.Ia=s_n("lb")};s_h(s_$4,s_k);var s_2Fd=[2],s_3Fd=function(){return!1};s_$4.prototype.Ja=function(a){s_4Fd(this,!1);2==a&&this.jj.focus();return!1};
var s_4Fd=function(a,b,c){b!=("none"!=a.$.style.display)&&(a.$.parentNode!=a.Ia&&a.Ia.appendChild(a.$),s_v(a.$,b),b?(s_cw(a.jj,9,a.$,8),a.$.focus(),s_Br(a.$,s_e(a.Ja,a),s_2Fd,!1,!0),a.Ca=s_l(window,"click",a.Ma,!0,a),a.Da=s_l(window,"keyup",a.Na,!0,a)):(s_5Fd(a,null),a.jj.focus(),s_Cr(a.$),s_kc(a.Ca),a.Ca=null,s_kc(a.Da),a.Da=null),s_B(c||a.$,[a.$],[b]))};
s_$4.prototype.Ma=function(a){if("attention-ping"!=a.target.id&&a.target!=this.jj){var b=void 0;if(s_hd(this.$,a.target)&&a.target!=this.$)for(b=a.target;b.parentNode!=this.$;)b=b.parentNode;s_4Fd(this,!1,b)}};s_$4.prototype.Na=function(a){13==(a.which||a.keyCode)&&s_4Fd(this,!1,this.Ea||void 0)};var s_5Fd=function(a,b){b!=a.Ea&&(a.Ea&&s_y(a.Ea,s_94.Bz),b&&!s_w(b,s_94.t3)?(s_x(b,s_94.Bz),a.Ea=b,b.focus()):a.Ea=null)}; s_$4.prototype.Ha=function(){s_Cr(this.$);s_kc(this.Ca);s_kc(this.Da);s_hd(this.Ga,this.$)||this.Ga.appendChild(this.$);s_$4.Ba.Ha.call(this)};
var s_6Fd=function(a){s_X.call(this,a)};s_h(s_6Fd,s_X);s_6Fd.prototype.rf=function(){return s_Y(this,"_UwgkgYBDrI")};s_6Fd.prototype.Hd=function(){return s_Y(this,"4ixgWLBslXg")};var s_1Fd={Bz:"t6psHzYPBsD__highlighted",t3:"t6psHzYPBsD__separator"};
s_U(function(a){s_S(a,"t-Nfexb0d83t0",s_$4,null,s_6Fd,function(a,c,d){s_$4.call(a,d)});s_T(a,"mSRaIWm1OeU",function(a){s_4Fd(a,"none"==a.$.style.display)});s_T(a,"1rILPBv56Z8",function(a,c){if(c=c.event()){var b=c.which||c.keyCode;switch(b){case 40:case 38:case 9:b=40==b||9==b&&!c.shiftKey;var e=a.Ea;if(e)if(b){do e=e.nextElementSibling||a.$.firstElementChild;while(s_w(e,s_94.t3))}else{do e=e.previousElementSibling||a.$.lastElementChild;while(s_w(e,s_94.t3))}else if(b)for(e=a.$.firstElementChild;null!=
e&&s_w(e,s_94.t3);)e=e.nextElementSibling;else for(e=a.$.lastElementChild;null!=e&&s_w(e,s_94.t3);)e=e.previousElementSibling;s_5Fd(a,e);a.Ea.focus()}s__g(c);s_0g(c)}});s_T(a,"GB-JqtwpQI4",function(a){a.Wa||s_de(94,s_3Fd);a.Wa=!0});s_T(a,"fmpHtAq2VGM",function(a){a.Wa&&s_ee(94,s_3Fd);a.Wa=!1});s_T(a,"1-l5Y2Ws2-4",function(a,c){(c=c.node())&&s_5Fd(a,c)})});


s_E("mrn");s_G();
}catch(e){_DumpException(e)}
/* _Module_:me */
try{
s_F("me");var s_g6=function(a){a=a.Ka.$(s_0Pd,"ec");this.Ca=s_N(a,1)||!1;var b=s_N(a,2)||!1;this.Ea=this.Ca&&b;b=s_N(a,4);a=s_N(a,5);this.Ga=null!=b?b:1068;this.Ia=null!=a?a:1156;s_e(this.Wa,this);this.Ea&&(this.$=s_Ke(null,s_e(this.Da,this),!0),s_l(window,"resize",this.$,!1,this),this.$())};s_h(s_g6,s_k);s_g6.prototype.Ha=function(){this.Ea&&s_m(window,"resize",this.$,!1,this)};s_g6.prototype.Da=function(){s_1Pd(this,s_n("rhs_block"));s_1Pd(this,s_n("nyc"));s_fe(60)};s_g6.prototype.$=null; s_g6.prototype.Wa=function(){if(!this.Ca)return 0;var a=document.body.offsetWidth,b=this.Ga;return a>=this.Ia?5:a>=b?4:3};var s_1Pd=function(a,b){b&&(a=a.Wa(),s_z(b,"rhstc3",4>a),s_z(b,"rhstc4",4==a),s_z(b,"rhstc5",4<a))};
var s_0Pd=function(a){s_M(this,a,0,-1,null,null)};s_h(s_0Pd,s_L);var s_2Pd=function(a){this.Ka=a};s_U(function(a){s_S(a,"t-5RRekjfu2Ys",s_g6,s_2Pd,null,function(a,c){s_g6.call(a,c)})});
s_E("me");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy5g */
try{
var s_Awa=function(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192){var d=s_3a(a,c,c+8192);b+=String.fromCharCode.apply(null,d)}return b},s_Bwa=function(a,b){a.Ea(b)};s_F("sy5g");var s_Xn=function(){this.Ca=this.$=this.Wa=this.Ea=null},s_Yn=function(){this.Ma=this.Da=this.Ea=this.ma=this.Wa=this.Ca=this.Na=this.Ia=this.Ga=this.Sc=this.Rc=this.ek=this.Af=this.$=this.Ja=null},s_Dwa=function(a,b){b.$(1,a.Ea);b.$q(2,null);b.$q(3,a.Wa);b.I2(4,a.$,s_Cwa);b.$(5,a.Ca)};s_Xn.prototype.getExtension=function(){return null};s_Xn.prototype.jn=function(){};var s_Ewa=function(a){return null==a.Ea?0:a.Ea};s_Xn.prototype.ma=function(){return""};
var s_Fwa=function(a){return null==a.Wa?"":a.Wa},s_Zn=function(a){return a.$?a.$.length:0},s_Gwa=function(a){var b=new s_Yn;a.$=a.$||[];a.$.push(b)},s_Hwa=function(a){a.Ca=parseInt(1E4*Math.random(),10)};s_Yn.prototype.getExtension=function(){return null};s_Yn.prototype.jn=function(){};
var s_Cwa=function(a,b){b.WOa(1,a.Ja);b.Pu(2,a.$);b.$(3,a.Af);b.$(4,a.ek);b.Mla(5,a.Rc);b.Mla(6,a.Sc);b.$(7,a.Ga);b.$(8,a.Ia);b.WOa(9,a.Na);b.$(10,a.Ca);b.Pu(11,a.Wa);b.Mla(12,a.ma);b.B8(13,a.Ea);b.$q(14,a.Da);b.$q(15,a.Ma);b.vz(16,null,s_Bwa)};s_=s_Yn.prototype;s_.getType=function(){return null==this.$?0:this.$};s_.ub=function(){return null==this.Rc?0:this.Rc};s_.$f=function(a){this.Rc=a};s_.Ab=function(){return null==this.Sc?0:this.Sc};s_.Gd=function(a){this.Sc=a}; s_.If=function(){return null==this.ma?0:this.ma};s_.nz=function(){return null==this.Da?"":this.Da};

s_E("sy5g");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy5i */
try{
s_F("sy5i");
s_E("sy5i");s_G();
}catch(e){_DumpException(e)}
/* _Module_:sy5j */
try{
var s_Iwa={u$a:"istate",w9a:"fpstate",Tbb:"mie",Aeb:"sie",J$a:"imgrc",q9a:"flt",U7a:"aie",Fcb:"pie",afb:"trex"};s_F("sy5j");var s__n=function(){return s_pb(s_Iwa,function(a){var b=s_Bh(a);return""==b?!1:"istate"==a?"0"!=b:"imgrc"==a?"_"!=b:"flt"==a?-1!=b.indexOf(";e:1"):!!b})};
s_E("sy5j");s_G();
}catch(e){_DumpException(e)}
/* _Module_:atn */
try{
s_F("atn");var s_0n=function(a,b){s_k.call(this);this.Ea=this.$=null;this.Ca=a;this.Wa=b||"LH"};s_h(s_0n,s_k);var s_Jwa=function(a,b){a.$&&a.$[b]&&s_i(a.$[b],function(a){var c=a.listener;a.ay&&(c=s_e(c,a.ay));c(new s_cc(b))})};s_0n.prototype.Da=function(){switch(s_Dd(s_8d())){case "unloaded":this.Ca.unload&&s_Jwa(this,"attn-ivis");break;case "hidden":s_Jwa(this,"attn-ivis");break;case "visible":s_Jwa(this,"attn-vis")}};
s_0n.prototype.listen=function(a,b,c,d,e){var f=new s_rba(c,a,b,!!d,e);switch(b){case "attn-ivis":case "attn-vis":a=s_8d();a.isSupported()&&(this.$||(this.$={},this.Ea=s_l(a,"visibilitychange",this.Da,!1,this)),this.$[b]=this.$[b]||[],this.$[b].push(f));break;default:s_l(a,b,c,d,e)}return f};
s_0n.prototype.unlisten=function(a,b,c,d,e){switch(b){case "attn-ivis":case "attn-vis":var f=null;if(this.$&&(f=this.$[b]))for(b=0;b<f.length;b++)if(f[b].src===a&&f[b].listener===c&&f[b].capture==!!d&&f[b].ay===e){s_Za(f,b);break}break;default:s_m(a,b,c,d,e)}};s_0n.prototype.iy=function(a){this.unlisten(a.src,a.type,a.listener,a.capture,a.ay)};var s_Kwa=function(a,b){return 0==b?(s_b.setTimeout(a,0),0):s_b.setTimeout(a,b)},s_Lwa=function(a){a.$&&a.Ea&&(s_kc(a.Ea),a.Ea=null);a.$=null}; s_0n.prototype.Ha=function(){s_Lwa(this)};
var s_1n=1,s_2n="",s_Mwa=function(){this.Ea=3E4;this.Da=!1;this.ma=0;this.$="";this.Ca=this.Wa=!1},s_3n=new s_Mwa;var s_4n=function(a){s_k.call(this);this.Wa=a;this.Ma=[];this.rb=[];this.Na=[];this.Ga={}};s_h(s_4n,s_k);s_4n.prototype.addListener=function(a,b,c,d,e){a&&this.Wa&&this.Na.push(this.Wa.listen(a,b,c,d,e))};var s_5n=function(a,b,c){a.Wa&&a.rb.push(s_Kwa(b,c))};
s_4n.prototype.Ha=function(){for(var a=(this.Ma||[]).length-1;0<=a;a--)s_b.clearInterval(this.Ma[a]);this.Ma=[];for(a=(this.rb||[]).length-1;0<=a;a--){var b=this.rb[a];b&&s_b.clearTimeout(b)}this.rb=[];for(a in this.Ga||{})(b=this.Ga[a])&&s_b.clearTimeout(b);this.Ga={};for(a=0;a<(this.Na||[]).length;a++)this.Na[a]&&this.Wa.iy(this.Na[a]);this.Na=[];this.Wa=null;s_4n.Ba.Ha.call(this)};
var s_6n=function(){this.y=this.x=this.$=0},s_7n=function(){this.eventType="";this.ma=0};s_7n.prototype.Ja=function(){return null};s_7n.prototype.Da=function(){return!1};s_7n.prototype.Ea=function(){return[]};s_7n.prototype.$=function(a){var b=new s_Yn,c=new s_ii;s_hi(this.ma-a.$);var d=s_gi;s_li(c,s_fi);s_li(c,d);a.$=this.ma;a=s_Awa(c.end());b.Ja=a;return b};var s_Nwa=function(a,b){var c=a.ma-b.$;b.$+=c;return c+","+a.Ea().join(",")};
var s_8n=function(a){s_7n.call(this);a=new s_ec(a);this.Wa=Math.round(a.clientX);this.Ca=Math.round(a.clientY)};s_h(s_8n,s_7n);s_8n.prototype.$=function(a){a=s_8n.Ba.$.call(this,a);a.$=8;a.ek=this.Wa;a.Af=this.Ca;return a};s_8n.prototype.Ea=function(){return["c",this.Wa,this.Ca]};
var s_9n=function(){s_Ad.call(this)};s_h(s_9n,s_Ad);s_=s_9n.prototype;s_.jta=function(){return!1};s_.Cfa=function(){};s_.Dfa=function(){return null};s_.isEmpty=function(){return!0};s_.reset=function(){};s_.Ffa=function(){};var s_Owa=s_9n;var s_$n=function(a,b){s_7n.call(this);this.Wa=a;this.ma=b||s_g()};s_h(s_$n,s_7n);s_$n.prototype.$=function(a){a=s_$n.Ba.$.call(this,a);a.$=6;switch(this.Wa){case "C":a.Wa=3;break;case "B":a.Wa=4;break;case "H":a.Wa=1;break;default:a.Wa=2}return a};s_$n.prototype.Ea=function(){return["e",this.Wa]};
var s_ao=function(a){s_4n.call(this,a)};s_h(s_ao,s_4n);s_ao.prototype.log=function(){};var s_Pwa=s_ao;var s_bo=function(a,b,c,d){s_4n.call(this,b);this.appName=a;this.sender=d||new s_Pwa(b);this.Ca=c;this.Yb=-1;this.Pa=0};s_h(s_bo,s_4n);s_bo.prototype.Cd=function(){};s_bo.prototype.Ha=function(){this.sender&&(this.sender.dispose(),this.sender=null);this.Ca=null;s_bo.Ba.Ha.call(this)};var s_Qwa=s_bo;
var s_do=function(a,b,c,d){s_4n.call(this,c);this.Za=b;this.$=new s_Owa(this.Za);this.Ea=new s_Qwa(a,c,this.$,d);this.Da=!0;this.Ia=0;s_co(this,document,"click",s_e(this.Db,this));s_3n.Ea&&(a=s_e(this.Ca,this,!1,!1,!1),this.Wa&&this.Ma.push(s_b.setInterval(a,s_3n.Ea)));s_3n.ma&&s_5n(this,s_e(this.Ca,this,!1,!1,!1),1E3*s_3n.ma)};s_h(s_do,s_4n);s_do.prototype.Ca=function(a,b,c){this.Ea&&(this.Ea.Cd(void 0===a?!1:a,void 0===b?!1:b,void 0===c?!1:c),14<=this.Ea.Pa&&s_5n(this,s_e(this.dispose,this),0))};
s_do.prototype.log=function(a,b,c){this.Da&&(a=s_zb(a),a.ma||(a.ma=s_g()),s_Nwa(a,new s_6n),this.$.jta(a)&&!c&&this.Ca(!1,b))};var s_co=function(a,b,c,d){b&&a.addListener(b,c,d,void 0,void 0)},s_Rwa=function(a){if(a){a=a.target||a.srcElement;for(var b=5;0<b--&&a&&"A"!=a.nodeName;)a=a.parentNode;return!!(0<=b&&a)}return!1};s_do.prototype.Db=function(a){s_Rwa(a)&&(this.log(new s_8n(a),!1,!0),s_5n(this,s_e(this.Ja,this,"C"),0))};
s_do.prototype.Ja=function(a){if(this.Ea){var b=s_g();this.Ia&&300>b-this.Ia||(this.Ia=b,(this.$&&!this.$.isEmpty()||300<s_g()-this.Ea.Yb)&&this.log(new s_$n(a),!0,!0),this.Ca(!0,!1,s_3n.Ca&&"H"==a))}};s_do.prototype.Ha=function(){this.Ea&&this.$&&this.Da&&this.Ja("D");this.Ea&&(this.Ea.dispose(),this.Ea=null);this.$&&(this.$.dispose(),this.$=null);this.Da=!1;s_do.Ba.Ha.call(this)};s_do.prototype.reset=function(){this.Da=!0;this.Ia=0;this.Ca(!0,!0);this.$?this.$.reset():this.$=new s_Owa(this.Za)};
var s_eo=function(){s_Ad.call(this);this.Da=!0;this.Ia=s_g();this.$=null;this.Ja=this.Ca=this.Ga=!1;this.clientHeight=0;this.Ea=[];this.Ma={};this.Na=0;this.Wa={}};s_h(s_eo,s_Ad);s_eo.prototype.Ha=function(){this.$=null;this.Ea=[];this.Wa={};s_eo.Ba.Ha.call(this)};s_eo.prototype.reset=function(){this.Da=!0;this.Ia=s_g();this.$=null;this.Ca=!1;this.Ea=[];this.Wa={}};
var s_fo=null,s_go=null,s_Swa=null,s_ho=function(a,b){if(s_go){var c=s_go;b?c.Ja(a):s_5n(c,s_e(c.Ja,c,a),0)}},s_Twa=function(){s_ho("Q");return!0},s_Uwa=function(a){s_2n=a.ei||google.getEI(document.body);var b=new s_Mwa;b.Wa=!!a.du;b.Da=!!a.oslg;b.Ca=!!a.hpff;var c=function(b,c){b=parseInt(a[b],10);return-1<b?b:c};b.Ea=c("fi",b.Ea);b.ma=c("d",b.ma);b.$=a.t||b.$;s_3n=b};
var s_Zwa=function(){s_qe();var a=s_V(this),b=a&&s_A.getAll(a)||{};b.ei=google.getEI(a);a=b.ei||google.getEI(document.body);s_Vwa++;s_Wwa?a!=s_2n&&(s_Xwa(),s_Ywa(b,a)):b&&(s_Wwa=!0,s_Ywa(b,a))};s_h(s_Zwa,s_k);
var s_Vwa=0,s_Wwa=!1,s__wa={},s_io={},s_Ywa=function(a,b){s_2n=b;s_Uwa(a);s_Swa=new s_eo;s_fo=new s_0n({});b=s_go=new s_do("slh",1918,s_fo);s_co(b,window,"attn-ivis",s_f(s_ho,"H",!0));s_co(b,window,"pagehide",s_f(s_ho,"H",!0));s_co(b,window,"blur",s_f(s_ho,"B",!0));s_3n.Wa||s_co(b,window,"beforeunload",s_f(s_ho,"U",!0));s_de(15,s_Twa);for(var c in s_io)a[c]&&(s_io[c].init(a),s__wa[c]=s_io[c])};s_Zwa.prototype.Ha=function(){0<--s_Vwa||!s_Wwa||(s_Wwa=!1,s_Xwa(),s__wa={})}; var s_Xwa=function(){for(var a in s__wa)s__wa[a].dispose();s_go&&s_go.dispose();s_fo&&s_Lwa(s_fo);s_Swa=s_go=s_fo=null};
s_U(function(a){s_S(a,"t-xJZnhKySAM0",s_Zwa,null,null,function(a){s_Zwa.call(a)})});
var s_0wa={click:"c",mouseout:"o",mouseover:"i",mousedown:"d",mouseup:"u"};var s_jo=function(a){s_7n.call(this);this.Ca=a};s_h(s_jo,s_7n);s_jo.prototype.Da=function(a){var b=s_0wa.mouseover,c=this.Ca;if(!c||this.eventType!=b)return!1;b=s_0wa.mouseout;for(var d=a.length-1;0<=d&&!(2<this.ma-a[d].ma);d--)if(a[d].eventType==b&&a[d].Ja()===c){for(c=d;c<a.length-1;c++)a[c]=a[c+1];a.pop();return!0}return!1};s_jo.prototype.Ja=function(){return this.Ca};
var s_ko=function(a,b,c,d){s_jo.call(this,d);this.Ga=a;this.Wa=b;this.eventType=c};s_h(s_ko,s_jo);s_ko.prototype.$=function(a){a=s_ko.Ba.$.call(this,a);a.$=15;a.Ca=parseInt(this.Ga,10)||0;this.Wa&&(a.ma=this.Wa);a.Ma=this.eventType;return a};s_ko.prototype.Ea=function(){return["h",this.Wa,this.Ga,this.eventType]};
var s_lo=function(a,b,c,d){s_4n.call(this,c);this.Ea=a;this.wc=b;this.$=[];this.addListener(a,"attn-ve-chg",this.Da,!1,this);d&&s_1wa(this)};s_h(s_lo,s_4n);s_lo.prototype.Da=function(){s_2wa(this);s_1wa(this)};var s_2wa=function(a){for(var b=0;b<a.$.length;b++)a.$[b]&&a.Wa.iy(a.$[b]);a.$=[]},s_1wa=function(a){if(a.Ea.Ea)for(var b=a.Ea.Ea,c=0;c<b.length;c++)for(var d=b[c].Aa,e=0;e<s_3wa.length;e++)a.$.push(a.Wa.listen(d,s_3wa[e],s_e(a.Ca,a,b[c],s_3wa[e],d)))}; s_lo.prototype.Ca=function(a,b,c){this.wc.log(new s_ko(a.getId(),a.Ea,s_0wa[b],c))};s_lo.prototype.Ha=function(){s_2wa(this);s_lo.Ba.Ha.call(this)};var s_3wa=["mouseover","mouseout"];
var s_mo={init:function(){var a=s_go,b=s_fo,c=s_Swa;a&&b&&c&&(a.$.Cfa("H"),s_mo.cq=new s_lo(c,a,b,!0))},dispose:function(){s_mo.cq&&(s_mo.cq.dispose(),s_mo.cq=null)},cq:null};s_io.lhe=s_mo;
var s_oo=function(a,b,c,d){s_bo.call(this,a,b,c,d);this.Ea=s_2n?"s-"+s_2n:"s-"+s_g()+"-"+Math.round(1E10*Math.random());this.Xa=(google.j?google.j.u:null)||"x";this.rk=null;a=google.j&&google.j.u?"local":"session";(c=s_wk(a,b.Wa))||"local"!=a||(c=s_wk("session",b.Wa));this.$=c;this.Db={};this.nb=!1;this.Da=[];this.Ja={};this.Ia={};this.Lb=0;this.Za={};this.Ca&&this.$&&this.addListener(this.Ca,"attn-bfr-e-add",this.Rb,!1,this);b=s_1n-1;a=s_1n-1;c=null;this.$&&(c=s_4wa(this,this.Ea,!0));c&&(b=c.$,a=
c.ma);s_1n=a+1;this.rk=new s_5wa(this.Ea,b,a,s_g(),this.Xa);if(this.$){b=this.rk;for(a=b.$+1;a<=b.ma;a++)c="tab-"+this.Ea+"-dt-"+a,(d=s_no(this,c))&&(this.Ja[c]=new s_6wa(c,this.Ea,d,a));b=s_e(this.xc,this);this.Wa&&this.Ma.push(s_b.setInterval(b,500));s_5n(this,s_e(this.Kb,this),500)}};s_h(s_oo,s_bo);s_oo.prototype.Rb=function(){this.nb=!0};
s_oo.prototype.Cd=function(a,b,c){a=void 0===a?!1:a;b=void 0===b?!1:b;c=(void 0===c?!1:c)||"x"!=this.Xa&&s_3n.Da&&b;if(this.$){var d=a||b||!1;if(this.nb||d){for(var e=this.rk,f=10;0<f--&&this.Ca&&!this.Ca.isEmpty();){var g=this.Ca.Dfa();if(!g||!g.$)break;var k=s_1n,l="tab-"+this.Ea+"-dt-"+k;this.Ja[l]=new s_6wa(l,this.Ea,g.$,k);if(g.ma||d)e.ma=k,k=this.rk,k.Ea=s_g(),s_po(this,"tabs-md-"+this.Ea,s_7wa(k)),k=s_no(this,"tabs")||{},k[this.Ea]||(k[this.Ea]=!0,s_po(this,"tabs",k)),100>e.ma-e.$&&s_1n++,
s_po(this,l,g.$),this.Pa++,this.Ca.Ffa(g.Ea);else break}this.nb=!1}if(!c&&this.sender){c=[];for(var m in this.Ja){if(6<=c.length)break;d=this.Ja[m];d.index>=s_1n||this.Db[m]||c.push(d)}for(m in this.Ia){if(6<=c.length)break;!this.Db[m]&&this.Ia[m]&&c.push(this.Ia[m])}if(0<c.length)for(m=!0,d=s_g(),this.Da=this.Da||[],e=0;e<c.length&&6>e&&(m||a||b);e++)m=!1,this.Yb=s_g(),f=c[e],this.sender.log(this.appName,f.message),f.$=d,this.Da.push(f),this.Db[f.Vz]=!0}}else!c&&this.Ca&&!this.Ca.isEmpty()&&this.sender&&
(f=this.Ca.Dfa())&&f.$&&(s_1n++,this.Ca.Ffa(f.Ea),this.Pa++,this.sender.log(this.appName,f.$))};s_oo.prototype.Kb=function(){s_8wa(this);s_5n(this,s_e(function(){s_9wa(this);var a=!1;s_no(this,"tabs");var b={},c;for(c in this.Za){a=!0;b[c]=!0;var d=this.Za[c];if(d){var e=d.ma;for(d=d.$+1;d<=e;d++)s_$wa(this,"tab-"+c+"-dt-"+d);s_$wa(this,"tabs-md-"+c)}}if(a){a=s_no(this,"tabs")||{};for(c in b)delete a[c];s_po(this,"tabs",a)}this.Za={}},this),1)};
s_oo.prototype.Ha=function(){this.$&&(this.$=null);this.Da=[];this.Ja={};this.Ia={};this.Db={};this.Za={};s_oo.Ba.Ha.call(this)};
var s_9wa=function(a){if(!(2E-4<Math.random())&&"x"!=a.Xa){var b=s_Qma(a.Wa.Wa);if(b){var c=/^tabs-md-/,d=/^tab-(.*?)-dt-[0-9]+$/,e=/^tabs-ld-.*$/,f=[],g,k={};s_cf(b.ii(!0),function(a){c.test(a)?f.push(a.replace(c,"")):null!=(g=d.exec(a))?k[a]=g[1]:e.test(a)?k[a]=a:"tabs-ad"==a&&(k[a]=a)});b=s_no(a,"tabs")||{};for(var l=0;l<f.length;l++)b[f[l]]=!0;s_po(a,"tabs",b);for(var m in k)k[m]in b||s_$wa(a,m)}}},s_8wa=function(a){var b=s_no(a,"tabs")||{};var c=s_sb(b),d=c.length,e=Math.floor(Math.random()*
c.length);if(0!=e){for(var f={},g=0;g<d;g++,e++)e>=d&&(e%=d),f[c[e]]=b[c[e]];b=f}c=15;for(var k in b)if(k!=a.Ea){if(0>=c--)break;s_5n(a,s_e(a.Ub,a,k),1)}};
s_oo.prototype.Ub=function(a){if(!(40<=this.Lb)){var b=s_4wa(this,a);if(b)if(b.tabId==this.Ea)var c=!1;else c=s_g()-864E5,c=b.Ea&&b.Ea>c&&b.$<b.ma?!1:!0;else c=!0;if(c)this.Za[a]=b;else if(!b||b.userId==this.Xa)for(c=b.$+1;c<=b.ma&&!(40<=this.Lb);c++){var d="tab-"+a+"-dt-"+c;if(!s_c(this.Ia[d])){this.Ia[d]=null;var e=s_no(this,d);e&&(this.Ia[d]=new s_6wa(d,a,e,c),this.Lb++)}}}};
var s_4wa=function(a,b,c){return c||b!=a.Ea?(a=s_no(a,"tabs-md-"+b))?a.tabId?new s_5wa(a.tabId,a.lastSent,a.savedIndex,a.lastTS,a.uid):null:null:a.rk};s_oo.prototype.xc=function(){if(this.Da&&0!=this.Da.length){for(var a={},b=s_g()-250;0<this.Da.length&&!(this.Da[0].$&&this.Da[0].$>b);){var c=this.Da.shift();a[c.tabId]=c.index;s_$wa(this,c.Vz);delete this.Ja[c.Vz];delete this.Ia[c.Vz];delete this.Db[c.Vz]}for(var d in a)if(b=s_4wa(this,d))c=a[d],c>b.$&&(b.$=c,s_po(this,"tabs-md-"+d,s_7wa(b)))}};
var s_no=function(a,b){if(!a.$)return null;try{return a.$.get(b)}catch(c){a.$.remove(b)}return null},s_po=function(a,b,c){if(a.$)try{a.$.set(b,c)}catch(d){}},s_$wa=function(a,b){if(a.$)try{a.$.remove(b)}catch(c){}},s_6wa=function(a,b,c,d){this.Vz=a;this.tabId=b;this.message=c;this.index=d;this.$=0},s_5wa=function(a,b,c,d,e){this.tabId=a;this.$=b||0;this.ma=c||0;this.Ea=d||0;this.userId=e},s_7wa=function(a){var b={};if(!a||!a.tabId)return null;b.tabId=a.tabId;b.lastSent=a.$;b.savedIndex=a.ma;b.lastTS= a.Ea;b.uid=a.userId;return b};s_Qwa=s_oo;

var s_axa=function(a,b,c,d){this.$=a||"";this.ma=b;this.Ea=c||0;this.Wa=d},s_qo=function(a){s_7n.call(this);this.ma=a||s_g()};s_h(s_qo,s_7n);s_qo.prototype.$=function(a){a=s_qo.Ba.$.call(this,a);a.$=7;return a};s_qo.prototype.Ea=function(){return["x"]};

var s_fxa=function(a){s_4n.call(this,a);this.$=null!=window.navigator&&null!=navigator.sendBeacon};s_h(s_fxa,s_ao);s_fxa.prototype.log=function(a,b){var c=google.logUrl(a,b);c&&(this.$&&navigator.sendBeacon(c,"")||google.log(a,b))};s_Pwa=s_fxa;
var s_so=function(a){s_Ad.call(this);this.Ga=a;this.Ia=""+Math.random();this.Wa=1;this.$=[];this.$.push(new s_qo);this.Da=0-this.$.length;this.Ca="";this.Ea=null};s_h(s_so,s_9n);s_so.prototype.Cfa=function(a){0>this.Ca.indexOf(a)&&(this.Ca+=a)};s_so.prototype.Dfa=function(){return this.Ea};s_so.prototype.isEmpty=function(){return 0==this.$.length+this.Da};
s_so.prototype.jta=function(a){var b=a.Da(this.$);if(!b){for(b=this.$.length;0<b&&!(a.ma>=this.$[b-1].ma);b--)this.$[b]=this.$[b-1];this.$[b]=a;b=0==b||b<this.$.length-1}(b=b||!this.Ea||!this.Ea.$)?this.Ea=s_gxa(this):this.Ea.ma||(b=this.Ea.$,b=b+":"+s_Nwa(a,this.Ea.Wa),this.Ga&&b.length>this.Ga&&(this.Ea.ma=!0),this.Ea.ma&&0!=this.Ea.$.length||(this.Ea.$=b,this.Ea.Ea=this.$.length));this.dispatchEvent("attn-bfr-e-add");return this.Ea.ma};
var s_gxa=function(a){var b="&me="+a.Wa;var c="";s_2n&&(c+="&ei="+s_2n);1==a.Wa&&(a.Ca&&(c+="&m="+a.Ca),s_3n.$&&(c+="&t="+s_3n.$));c=c+"&s="+s_1n;c=c+"&v=2&pv="+a.Ia;for(var d=b.length+c.length,e=new s_6n,f=!1,g=0;g<a.$.length;g++){var k=":"+s_Nwa(a.$[g],e);d+=k.length;if(d>a.Ga&&0<g){f=!0;break}b+=k}return new s_axa(c+b,f,g,e)};s_so.prototype.Ffa=function(a){this.Wa+=a;0<a&&this.$.splice(0,a);this.Da=0;this.Ea=null;0<this.$.length&&(this.Ea=s_gxa(this))}; s_so.prototype.reset=function(){this.Ia=""+Math.random();this.Wa=1;this.$=[];this.$.push(new s_qo);this.Da=0-this.$.length};s_Owa=s_so;

var s_hxa=function(a,b,c,d,e){if(a.Ga[d]){if(!e)return;(e=a.Ga[d])&&s_b.clearTimeout(e)}a.Ga[d]=s_Kwa(b,c)},s_ixa=function(a,b){if(null!=a.Ga[b]){var c=a.Ga[b];c&&s_b.clearTimeout(c);delete a.Ga[b]}},s_to=function(a){s_7n.call(this);this.Wa=a};s_h(s_to,s_7n);s_to.prototype.$=function(a){a=s_to.Ba.$.call(this,a);a.$=12;this.Wa&&(a.Ea=this.Wa);return a};s_to.prototype.Ea=function(){return["A",this.Wa?1:0]};
var s_uo=function(){s_7n.call(this)};s_h(s_uo,s_7n);s_uo.prototype.$=function(a){a=s_uo.Ba.$.call(this,a);a.$=10;return a};s_uo.prototype.Ea=function(){return["T"]};var s_vo=function(a){s_7n.call(this);this.Wa=a};s_h(s_vo,s_7n);s_vo.prototype.$=function(a){a=s_vo.Ba.$.call(this,a);a.$=4;this.Wa&&(a.Ea=this.Wa);return a};s_vo.prototype.Ea=function(){return["I",this.Wa?1:0]};var s_wo=function(a,b){s_7n.call(this);this.Wa=b;this.ma=a};s_h(s_wo,s_7n);s_wo.prototype.$=function(a){a=s_wo.Ba.$.call(this,a);a.$=2;var b=new s_ii;s_7ha(b,this.Wa);b=s_Awa(b.end());a.Na=b;return a};s_wo.prototype.Ea=function(){return["U",this.Wa]};var s_xo=function(a,b,c){s_7n.call(this);this.deltaX=b;this.deltaY=c;this.ma=a};s_h(s_xo,s_7n);s_xo.prototype.$=function(a){a=s_xo.Ba.$.call(this,a);a.$=3;0!=this.deltaX&&(a.Ia=this.deltaX);a.Ga=Math.abs(this.deltaY);0>this.deltaY&&(a.Ea=!0);return a};s_xo.prototype.Ea=function(){return 0==this.deltaX?["S",this.deltaY]:["S",this.deltaX,this.deltaY]};
var s_yo=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d;this.$=Math.round(c/50);this.ma=Math.round(d/50)};s_yo.prototype.clone=function(){return new s_yo(this.left,this.top,this.width,this.height)};
var s_jxa=function(a,b){return!!b&&Math.abs(a.width-b.width)<=b.$&&Math.abs(a.height-b.height)<=b.ma},s_kxa=function(a,b){return!!b&&Math.abs(a.left-b.left)<=b.$&&Math.abs(a.top-b.top)<=b.ma&&s_jxa(a,b)},s_lxa=function(a,b){var c=!!b&&s_jxa(a,b);c&&(a.width=b.width,a.height=b.height,a.$=b.$,a.ma=b.ma);return c},s_mxa=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);return Math.max(a.top,b.top)<Math.min(a.top+a.height,b.top+b.height)&&c<d};
var s_zo=function(a,b,c,d){s_7n.call(this);this.Ga=a;this.Ia=b;this.Ca=c;this.Wa=d};s_h(s_zo,s_7n);s_zo.prototype.$=function(a){if(0>this.Ca||0>this.Wa)return null;a=s_zo.Ba.$.call(this,a);a.$=0;0!=this.Ga&&(a.Ia=this.Ga);0!=this.Ia&&(a.Ga=this.Ia);0!=this.Ca&&a.Gd(this.Ca);0!=this.Wa&&a.$f(this.Wa);return a};s_zo.prototype.Ea=function(){return["V",this.Ga,this.Ia,this.Ca,this.Wa]};
var s_Ao=function(a,b){this.ma=s_g();this.$=a?new s_yo(Math.round(window.pageXOffset),Math.round(window.pageYOffset),Math.round(window.innerWidth),Math.round(window.innerHeight)):b?b:new s_yo(0,0,0,0)},s_nxa=function(a){var b=new s_zo(a.$.left,a.$.top,a.$.width,a.$.height);b.ma=a.ma;return b};
var s_Bo=function(a,b,c){s_4n.call(this,a);this.Ea=b;this.$=c};s_h(s_Bo,s_4n);s_Bo.prototype.Ha=function(){this.Ea=this.$=null;s_Bo.Ba.Ha.call(this)};s_Bo.prototype.Da=function(){var a=s_g();this.$.Da||(this.Ea.log(new s_wo(a,a-this.$.Ia)),this.$.Da=!0,s_Co(this,new s_Ao(!0),!0),this.$.dispatchEvent("attn-vs-chg"));this.$.Ia=a};s_Bo.prototype.Za=function(){this.$.Da&&(this.$.Ia=s_g(),s_Co(this,new s_Ao,!0),this.$.dispatchEvent("attn-vs-chg"));this.$.Da=!1};
var s_Co=function(a,b,c){if(!a.$.Da&&!a.$.Ga)return!1;var d=!1,e=a.$.$;if(!a.$.Ga&&e&&s_lxa(b.$,e.$)){var f=b.$.left-e.$.left;e=b.$.top-e.$.top;if(0!=f||0!=e)a.Ea.log(new s_xo(b.ma,f,e)),d=!0}else a.Ea.log(s_nxa(b)),d=!0;a.$.Ga=!1;a.$.$=b;c||a.$.dispatchEvent("attn-vs-chg");return d};
var s_Do=function(a,b,c){s_Bo.call(this,a,b,c);s_vh("lh-im",s_e(this.Ja,this));this.Ca=s_e(this.Ia,this,!0);s_de(182,this.Ca)};s_h(s_Do,s_Bo);s_Do.prototype.Ja=function(){if(this.$){var a=s__n(),b=s_va(s_ph.$,"/amp");if(a!=this.$.Ca||b!=this.$.Ja)a!=this.$.Ca&&(this.$.Ca=a,this.Ea.log(new s_vo(a))),b!=this.$.Ja&&(this.$.Ja=b,this.Ea.log(new s_to(b)),this.$.Ga=!0),s_hxa(this,s_e(this.Ia,this,!1),1E3,"dcst",!0)}};
s_Do.prototype.Ia=function(a){if(this.$.$){var b=s__n();b!=this.$.Ca&&(this.$.Ca=b,this.Ea.log(new s_vo(b)));b=s_g();this.$.$.ma=b;a&&this.Ea.log(new s_uo);this.$.dispatchEvent("attn-dom-chg");s_ixa(this,"dcst")}};s_Do.prototype.Ha=function(){s_wh("lh-im");s_ee(182,this.Ca);s_Do.Ba.Ha.call(this)};
var s_oxa=function(a,b,c){s_Bo.call(this,a,b,c);this.addListener(window,"attn-ev-preload",s_e(this.Ca,this));s_lc(window,"attn-ev-ready",null)};s_h(s_oxa,s_Bo);
s_oxa.prototype.Ca=function(a){if(a&&a.length&&0!=a.length){this.Ea.log(new s_qo(a[0][0]));for(var b=0;b<a.length;b++)if("v"==a[b][1]){var c=a[b],d=new s_Ao(!1,new s_yo(c[2][0],c[2][1],c[2][2],c[2][3]));d.ma=c[0];var e=this.$.$;e&&s_lxa(d.$,e.$)?(c=d.$.left-e.$.left,e=d.$.top-e.$.top,0==c&&0==e||this.Ea.log(new s_xo(d.ma,c,e))):this.Ea.log(s_nxa(d));this.$.$=d}else"e"==a[b][1]&&this.Ea.log(new s_$n("B",a[b][0]))}};
var s_Eo=function(a,b){s_7n.call(this);this.Ca=a;this.Wa=b};s_h(s_Eo,s_7n);s_Eo.prototype.$=function(a){a=s_Eo.Ba.$.call(this,a);a.$=9;a.Ca=parseInt(this.Ca,10);a.ma=this.Wa;return a};s_Eo.prototype.Ea=function(){return["f",this.Wa,this.Ca]};var s_Fo=function(a,b,c){s_Bo.call(this,a,b,c);this.Ia={};this.Ca={};a=s_Vc("g-scrolling-carousel");for(b=0;b<a.length;b++)s_pxa(this,a[b]);this.addListener(document.body,"_custom",s_e(this.Db,this))};s_h(s_Fo,s_Bo);s_Fo.prototype.Db=function(a){a&&(a=a.G5&&a.jd)&&a.detail&&a.target&&"attn-swp-init"==a.detail.type&&s_pxa(this,a.target)};
var s_pxa=function(a,b){for(var c=b;c!=document.body;){if(c.getAttribute("data-hveid")){var d=c.getAttribute("data-hveid");(a.Ca[d]=a.Ca[d]||[]).push([b,a.Wa.listen(b,"_custom",s_e(a.Ja,a,d,b,c))]);break}c=c.parentNode}};
s_Fo.prototype.Ja=function(a,b,c,d){if(d&&(d=d.G5&&d.jd)&&d.detail)if(d=d.detail.type,"sc_se"==d){if(b=s_g(),!(this.Ia[a]+500>=b)){a:{d=this.$;var e=c.getAttribute("data-hveid");if(e&&d.Wa[e])for(var f=0;f<d.Wa[e].length;f++)if(d.Wa[e][f].Aa===c){c=d.Wa[e][f];break a}c=null}c&&(this.Ia[a]=b,this.Ea.log(new s_Eo(c.getId(),c.Ea)))}}else"attn-swp-dis"==d&&s_qxa(this,a,b)}; var s_qxa=function(a,b,c){b=a.Ca[b]||[];for(var d=0;d<b.length;d++)!b[d]||2!=b[d].length||c&&b[d][0]!=c||(a.Wa.iy(b[d][1]),s_Za(b,d--))};s_Fo.prototype.Ha=function(){for(var a in this.Ca)s_qxa(this,a);this.Ca={};s_Fo.Ba.Ha.call(this)};
var s_Go=function(a){s_7n.call(this);this.Wa=a};s_h(s_Go,s_7n);s_Go.prototype.$=function(a){if(0>=this.Wa)return null;a=s_Go.Ba.$.call(this,a);a.$=13;a.$f(this.Wa);return a};s_Go.prototype.Ea=function(){return["B",this.Wa]};var s_rxa=function(a,b,c){s_Bo.call(this,a,b,c);this.Ca=s_Yc();this.Ea.log(new s_Go(this.Ca));this.$.clientHeight=this.Ca;this.addListener(this.$,"attn-g-clk",this.Ja,!1,this)};s_h(s_rxa,s_Bo);s_rxa.prototype.Ja=function(){s_hxa(this,s_e(this.Ia,this),1E3,"vchc")};
s_rxa.prototype.Ia=function(){s_ixa(this,"vchc");s_ixa(this,"vchrc");if(!this.$.Ca){var a=s_Yc();a!=this.Ca?(this.Ca=a,s_hxa(this,s_e(this.Ia,this),100,"vchrc")):this.$.clientHeight!=this.Ca&&(this.$.clientHeight=this.Ca,this.Ea.log(new s_Go(this.Ca)),s_Co(this,new s_Ao(!0),!0),this.$.$&&(a=s_g(),this.$.$.ma=a,this.$.dispatchEvent("attn-vs-chg")))}};
var s_Ho=function(a,b,c){s_Bo.call(this,a,b,c);this.addListener(window,"resize",this.Ia,!1,this);this.addListener(window,"scroll",this.Ia,!1,this);this.Da();this.Ca()};s_h(s_Ho,s_Bo);s_Ho.prototype.Ia=function(){this.Da();s_hxa(this,s_e(this.Ca,this),500,"rptv")};s_Ho.prototype.Ca=function(){s_Co(this,new s_Ao(!0));s_ixa(this,"rptv")};
var s_Io=function(a,b){s_7n.call(this);var c=new s_ec(b);b=c.clientX||0;c=c.clientY||0;var d=a.Aa.getBoundingClientRect();this.Ga=Math.round(b-d.left);this.Ia=Math.round(c-d.top);this.Ca=a.getId();this.Wa=a.Ea};s_h(s_Io,s_7n);s_Io.prototype.$=function(a){a=s_Io.Ba.$.call(this,a);a.$=5;a.Ca=parseInt(this.Ca,10);a.ek=this.Ga;a.Af=this.Ia;a.ma=this.Wa;return a};s_Io.prototype.Ea=function(){return["G",this.Wa,this.Ca,this.Ga,this.Ia]};
var s_Jo=function(a,b,c){s_7n.call(this);this.jj=b&&b.button;this.Ia=b&&b.which;this.Wa=+c;this.Ga=a.getId();this.Ca=a.Ea};s_h(s_Jo,s_7n);s_Jo.prototype.$=function(a){a=s_Jo.Ba.$.call(this,a);a.$=14;a.Ca=parseInt(this.Ga,10);a.ma=this.Ca;a.Ea=!!this.Wa;return a};s_Jo.prototype.Ea=function(){return["M",this.jj,this.Ia,this.Wa,this.Ca,this.Ga]};
var s_Ko=function(a,b,c){s_Bo.call(this,a,b,c);this.Ca=[];this.Ia();this.addListener(c,"attn-ve-chg",this.Ia,!1,this)};s_h(s_Ko,s_Bo);s_Ko.prototype.Ia=function(){s_sxa(this);for(var a=0;a<this.$.Ea.length;a++){var b=this.$.Ea[a],c=b.Aa;this.Ca.push(this.Wa.listen(c,"click",s_e(this.Db,this,b),!0));this.Ca.push(this.Wa.listen(c,"mousedown",s_e(this.Ja,this,b),!0))}};var s_sxa=function(a){for(var b=0;b<a.Ca.length;b++)a.Ca[b]&&a.Wa.iy(a.Ca[b]);a.Ca=[]};
s_Ko.prototype.Db=function(a,b){if(a&&a.Aa){var c=s_Co(this,new s_Ao(!0),!0),d=this.$.$.ma;s_txa(a);null!=a.ma&&(!a.ma||s_kxa(a.$,a.ma))||this.Ea.log(s_uxa(a,d));this.Ea.log(new s_Io(a,b),!1,!0);this.$.dispatchEvent("attn-g-clk");c&&s_5n(this,s_e(this.$.dispatchEvent,this.$,"attn-vs-chg"),0)}};s_Ko.prototype.Ja=function(a,b){s_vxa(0,b)||b&&s_Rwa(b)&&this.Ea.log(new s_Jo(a,b,s_vxa(2,b)))};s_Ko.prototype.Ha=function(){s_sxa(this);s_Ko.Ba.Ha.call(this)}; var s_vxa=function(a,b){return b?s_fba?b.button==a:"click"==b.type?0==a:!!(b.button&s_nba[a]):!1};
var s_Lo=function(a,b,c){s_7n.call(this);this.cGa=a;this.index=b||0;this.ma=c||s_g()};s_h(s_Lo,s_7n);s_Lo.prototype.$=function(a){a=s_Lo.Ba.$.call(this,a);a.$=11;a.Da=this.cGa;a.ma=this.index;return a};s_Lo.prototype.Ea=function(){return["N",this.index,this.cGa]};
var s_Mo=function(a,b,c,d,e,f){s_7n.call(this);this.Ma=a;this.Na=b;this.Ga=c;this.Ia=d;this.Ca=e;this.Wa=f};s_h(s_Mo,s_7n);s_Mo.prototype.$=function(a){if(0>this.Ca||0>this.Wa)return null;a=s_Mo.Ba.$.call(this,a);a.$=1;0!=this.Ga&&(a.Af=this.Ga);0!=this.Ia&&(a.ek=this.Ia);0!=this.Ca&&a.Gd(this.Ca);0!=this.Wa&&a.$f(this.Wa);a.Ca=parseInt(this.Na,10);a.ma=this.Ma;return a};s_Mo.prototype.Ea=function(){return["R",this.Ma,this.Na,this.Ga,this.Ia,this.Ca,this.Wa]};
var s_wxa=function(a,b,c,d,e){this.$=this.ma=null;this.Aa=a;this.qd=b;this.Wa=c;this.Ea=d;e&&s_txa(this)};s_wxa.prototype.getId=function(){return this.qd};
var s_xxa=function(a){if(a.getBoundingClientRect&&"visible"==(s_Id(a,"visibility")||"visible"))try{var b=a.getBoundingClientRect();return new s_yo(Math.round(b.left+window.pageXOffset),Math.round(b.top+window.pageYOffset),Math.round(a.offsetWidth),Math.round(a.offsetHeight))}catch(c){}return new s_yo(0,0,0,0)},s_txa=function(a){var b=s_xxa(a.Aa);a.$&&s_kxa(b,a.$)||(a.$=b)};s_wxa.prototype.getEI=function(){return this.Wa}; var s_uxa=function(a,b){a=new s_Mo(a.Ea,a.qd,a.$.left,a.$.top,a.$.width,a.$.height);a.ma=b;return a};
var s_yxa=function(a,b,c){s_Bo.call(this,a,b,c);this.Ca=[]};s_h(s_yxa,s_Bo);
var s_zxa=function(a,b){var c=b.getAttribute("data-hveid");if(c)for(var d=0;d<a.Ca.length;d++){var e=a.Ca[d];if(s_hd(e.el,b)){b=new s_wxa(b,c,e.cGa,e.index);a.$.Ea.push(b);(d=a.$.Wa[c])||(d=a.$.Wa[c]=[]);d.push(b);break}}},s_Axa=function(a,b,c){if(c)c=window.google&&google.getEI&&google.getEI(b);else{c=b.getAttribute("data-ved");if(!c){var d=b.querySelector("[data-ved]");if(!d||!(c=d.getAttribute("data-ved")))return}if(!c||1>c.length||"0"!=c.charAt(0))d=null;else{c=c.substring(1);d=new s_Cj;try{s_Dj(d,
new s_Fi(c))}catch(k){d=null}}if(d){c=new s_ii;d=s_Jka(d);for(var e=0,f=s_Gka(s_Ej(d)),g=f.length-1;0<=g;g--)e=256*e+f.charCodeAt(g);g=e%1E6;e=(e-g)/1E6;f=s_Hka(s_Ej(d))-167772160;0>f&&(f=4294967296+f);d=s_Ika(s_Ej(d));s_8ha(c,e);s_ki(c,g);s_hi(f);s_ji(c);s_ki(c,d);c=c.end();c=s_xe(c,!0);for(g=c.length;"."==c.charAt(g-1);)g--;c=c.substring(0,g)}else c=null}c&&(d=a.$,g=d.Ma[c],g||(g=d.Ma[c]=++d.Na,a.Ea.log(new s_Lo(c,g,d.$?d.$.ma:s_g()))),a.Ca.push({el:b,cGa:c,index:g}))};
var s_No=function(a,b,c){s_Bo.call(this,a,b,c);this.nb=new s_yxa(a,b,c);this.Ca=!1;this.Ja=null;this.Xa=this.Db=0;this.Pa=this.$.clientHeight;this.Ia=null;this.addListener(c,"attn-vs-chg",this.Lb,!1,this);this.addListener(c,"attn-dom-chg",this.Yb,!1,this);this.$.$&&(s_Bxa(this,this.$.$),this.Ia=this.$.$)};s_h(s_No,s_Bo);
var s_Cxa=function(a){for(var b=s_g(),c=a.$.Ea,d=0;d<c.length;d++)s_txa(c[d]);c=s_g();a.Xa=c;a.Db=c-b},s_Dxa=function(a,b){for(var c=[],d=a.$.Ea,e=0;e<d.length;e++){var f=d[e],g=s_mxa(f.$,b.$);if(g&&(null==f.ma||f.ma&&!s_kxa(f.$,f.ma))||!g&&f.ma&&s_mxa(f.ma,b.$))c.push(f),f.ma=f.$.clone()}if(c.length)for(b=b.ma,d=0;d<c.length;d++)a.Ea.log(s_uxa(c[d],b))};s_No.prototype.Yb=function(){this.$.$&&(this.$.Ea=[],this.Ca=!1,s_Bxa(this,this.$.$))};
var s_Bxa=function(a,b){if(a.Ca){var c=a.Db;if(a.Ja){var d=a.Ja.$;d=!s_kxa(s_xxa(a.Ja.Aa),d)}else d=!a.Ca;var e=s_g()-a.Xa;c=d?20<c&&1E3>=e:!(5>=c&&50<e)}else c=!1;if(!c)if(a.Ca)s_Cxa(a);else{if(!a.Ca){c=a.nb;d=document.body;c.Ca=[];c.$.Ea=[];c.$.Wa={};var f=!0;if(d&&d.querySelectorAll){if(c.$.Ca){a:{d=document.querySelectorAll(".immersive-container");for(e=0;e<d.length;e++)if(f=d[e].getBoundingClientRect(),!(0>=f.width||0>=f.height||f.top>=window.innerHeight||0>=f.bottom||f.left>=window.innerWidth||
0>=f.right)){d=d[e];break a}d=document.body}f=!d.getAttribute("decode-data-ved")}var g=d.querySelectorAll("[decode-data-ved]");for(e=g.length-1;0<=e;e--)s_Axa(c,g[e]);s_Axa(c,d,f);f=d.querySelectorAll("[data-hveid]");s_zxa(c,d);for(e=0;e<f.length;e++)s_zxa(c,f[e])}s_Cxa(a);c=null;for(d=0;d<a.$.Ea.length;d++)e=a.$.Ea[d],(f=!c)||(f=c.$,g=e.$,f=!!g&&(f.top<g.top||f.top==g.top&&f.left<g.left)),f&&(c=e);a.Ja=c;a.Ca=!0}a.$.dispatchEvent("attn-ve-chg")}s_Dxa(a,b)};
s_No.prototype.Lb=function(){this.$.$&&(this.Pa==this.$.clientHeight&&this.Ia&&s_lxa(this.Ia.$,this.$.$.$)?s_Dxa(this,this.$.$):s_Bxa(this,this.$.$),this.Ia=this.$.$,this.Pa=this.$.clientHeight)};s_No.prototype.Ha=function(){this.Ia=null;this.$.Ea=[];this.nb.dispose();s_No.Ba.Ha.call(this)};
var s_Oo=function(a,b,c){s_Bo.call(this,a,b,c);this.Ca=!1;this.addListener(window,"attn-ivis",this.Za,!1,this);this.addListener(window,"pagehide",this.Ja,!1,this);this.addListener(window,"blur",this.Za,!1,this);this.addListener(window,"attn-vis",this.Da,!1,this);this.addListener(window,"focus",this.Da,!1,this);this.addListener(window,"pageshow",this.Ia,!1,this)};s_h(s_Oo,s_Bo);s_Oo.prototype.Ja=function(){this.Ca=!0;this.Za()}; s_Oo.prototype.Ia=function(){this.$&&this.Ea&&(this.Ca?(this.Ca=!1,this.$.reset(),this.Ea.reset(),this.Da(),s_Co(this,new s_Ao(!0),!0),this.$.dispatchEvent("attn-dom-chg")):this.Da())};
var s_Exa=function(a){this.ma=a||new s_eo;this.$=[]};s_Exa.prototype.start=function(a,b){this.$.push(new s_Ho(a,b,this.ma));this.$.push(new s_Oo(a,b,this.ma));this.$.push(new s_No(a,b,this.ma));this.$.push(new s_Ko(a,b,this.ma))};s_Exa.prototype.stop=function(){if(this.$)for(var a=0;a<this.$.length;a++)this.$[a].dispose();this.$=[]};
var s_Po={init:function(){var a=s_fo,b=s_go,c=s_Swa;if("getBoundingClientRect"in document.body&&"pageXOffset"in window&&"innerWidth"in window&&a&&b&&c){b.$.Cfa("V");var d=s_Po.cq=new s_Exa(c),e=new s_oxa(a,b,c);d.$.push(e);e=new s_Ho(a,b,c);d.$.push(e);e=new s_Oo(a,b,c);d.$.push(e);e=new s_Do(a,b,c);d.$.push(e);e=new s_rxa(a,b,c);d.$.push(e);e=new s_No(a,b,c);d.$.push(e);e=new s_Ko(a,b,c);d.$.push(e);a=new s_Fo(a,b,c);d.$.push(a)}},dispose:function(){s_Po.cq&&(s_Po.cq.stop(),s_Po.cq=null)},cq:null}; s_io.lve=s_Po;


s_E("atn");s_G();
}catch(e){_DumpException(e)}
/* _GlobalSuffix_ */
// Google Inc.
