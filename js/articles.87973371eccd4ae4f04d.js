!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=93)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(52))},function(t,e,n){var r=n(0),o=n(30),i=n(3),s=n(37),c=n(38),a=n(58),u=o("wks"),l=r.Symbol,f=a?l:l&&l.withoutSetter||s;t.exports=function(t){return i(u,t)||(c&&i(l,t)?u[t]=l[t]:u[t]=f("Symbol."+t)),u[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";e.a={ALREADY_EXIST_ERROR:"Такой пользователь уже есть",WRONG_EMAIL_ERROR:"Адрес почты указан в неверном формате",MISSING_VALUE_ERROR:"Необходимо заполнить поле",MISSING_SEARCH_VALUE_ERROR:"Нужно ввести ключевое слово",TYPE_SEARCH_VALUE:"Введите тему новости",PASSWORD_LENGTH_ERROR:"Пароль должен быть минимум 8 символов",NAME_LENGTH_ERROR:"Имя должно быть от 2 до 30 символов",NO_RESULT:"Ничего не найдено",NO_ARTICLES:"нет",GET_RESULT_ERROR:"Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",NO_INTERNET:"Проблема с Интернет-соединением"}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"f",(function(){return v})),n.d(e,"d",(function(){return y})),n.d(e,"a",(function(){return w}));n(11);class r{constructor(){this._handlers=[],this.setListeners=this.setListeners.bind(this)}_saveListeners(t){t.forEach(t=>{let{event:e,element:n,callback:r}=t;const o=r.bind(this);this._handlers.push({event:e,element:n,bindedCallback:o})})}_addEventListeners(){this._handlers.forEach(t=>{let{event:e,element:n,bindedCallback:r}=t;"function"==typeof r&&("window"===n?window.addEventListener(e,r):"element"===n?this._element.addEventListener(e,r):this._element.querySelector(n).addEventListener(e,r))})}setListeners(t){this._saveListeners(t),this._addEventListeners()}_removeListeners(){this._handlers.forEach(t=>{let{event:e,element:n,bindedCallback:r}=t;"window"===n?window.removeEventListener(e,r):"element"===n?this._element.removeEventListener(e,r):this._element.querySelector(n).removeEventListener(e,r)})}}var o=n(4);const{MISSING_VALUE_ERROR:i,PASSWORD_LENGTH_ERROR:s,NAME_LENGTH_ERROR:c,WRONG_EMAIL_ERROR:a}=o.a;class u extends r{constructor(t){super(),this._element=document.querySelector(t).content.cloneNode(!0).querySelector(".form"),this.setSubmitError=this.setSubmitError.bind(this),this.clear=this.clear.bind(this),this.setListeners([{event:"input",element:"element",callback:this._validateHandler}])}static _inputHandler(t){const e=t.target.nextElementSibling;t.target.validity.valueMissing?e.textContent=i:t.target.validity.tooShort&&"password"===t.target.name?e.textContent=s:t.target.validity.tooShort?e.textContent=c:t.target.validity.patternMismatch?e.textContent=a:e.textContent=""}get element(){return this._element}toggleLockForm(t){const e=Array.from(this._element.elements);t?(this._clearErrors(),e.forEach(t=>{t.setAttribute("disabled",!0),"submit"===t.name&&this._element.elements.submit.classList.remove("popup__form-button_active")})):e.forEach(t=>{t.removeAttribute("disabled"),"submit"===t.name&&this._element.elements.submit.classList.add("popup__form-button_active")})}getInputValues(){const t={};return Array.from(this._element.elements).forEach(e=>{"submit"!==e.name&&(t[e.name]=e.value)}),t}setSubmitError(t){this._element.querySelector(".error-message_submit").textContent=t}clear(){this._element.reset(),this._clearErrors()}_clearErrors(){this._element.querySelectorAll(".error-message").forEach(t=>{t.textContent=""})}_checkFormValid(){return!!this._element.checkValidity()}_validateHandler(t){u._inputHandler(t),this._checkFormValid()?(this._element.elements.submit.removeAttribute("disabled"),this._element.elements.submit.classList.add("popup__form-button_active")):(this._element.elements.submit.setAttribute("disabled",!0),this._element.elements.submit.classList.remove("popup__form-button_active"))}}var l=n(15);const{ESCAPE_CODE:f}=l.a;class h extends r{constructor(t){super(),this._element=t,this._content=this._element.querySelector(".popup__content"),this._contentHandler=null,this.isOpened=!1,this._saveListeners([{event:"mousedown",element:"element",callback:this._closeHandler},{event:"keyup",element:"window",callback:this._closeHandler}])}setContent(t,e){this._contentHandler=e,this._content.appendChild(t)}open(t,e){document.body.style.overflow="hidden",this._element.classList.add("popup_is-opened"),this.setContent(t,e),this._addEventListeners(),this.isOpened=!0}clearContent(){"function"==typeof this._contentHandler&&this._contentHandler(),document.body.style.overflow="",this._content.lastChild.remove()}close(){this.clearContent(),this._element.classList.remove("popup_is-opened"),document.body.style.overflow="",this._removeListeners(),this.isOpened=!1}_closeHandler(t){(t.keyCode===f||t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&this.close()}}const{MISSING_SEARCH_VALUE_ERROR:d,TYPE_SEARCH_VALUE:_}=o.a;class p extends r{constructor(t){super(),this._element=t,this._input=this._element.querySelector(".field__input"),this._button=this._element.querySelector(".field__button"),this.setListeners([{event:"input",element:"element",callback:this._validateHandler}])}get input(){return this._input.value}toggleLockForm(){Array.from(this._element.elements).forEach(t=>{t.toggleAttribute("disabled"),"submit"===t.name&&this._element.elements.submit.classList.toggle("field__button_active")})}_validateHandler(t){t.target.validity.valueMissing?this._input.placeholder=d:this._input.placeholder=_,this._element.checkValidity()?(this._button.removeAttribute("disabled"),this._button.classList.add("field__button_active")):(this._button.setAttribute("disabled",!0),this._button.classList.remove("field__button_active"))}}class m extends r{constructor(t,e){super(),this._element=t,this._isArticlesUrl=e,this._articlesLink=this._element.querySelector(".header__list-item_articles"),this._articlesLink.style.display="none",this._buttonIcon=this._element.querySelector(".header__button-icon"),this._buttonText=this._element.querySelector(".header__button-text"),this._menu=this._element.querySelector(".header__menu"),this._list=this._element.querySelector(".header__list"),this._overlay=this._menu.querySelector(".header__menu-overlay")}render(t){t.isLoggedIn?(this._articlesLink.style.display="inline-block",this._buttonIcon.style.display="block",this._buttonText.textContent=t.userName):(this._articlesLink.style.display="none",this._buttonIcon.style.display="none",this._buttonText.textContent="Авторизоваться")}checkMenuState(){return!(!this._menu.classList.contains("header__menu_is-active_white")&&!this._menu.classList.contains("header__menu_is-active_black"))}toggleMenuButton(){this._isArticlesUrl?this._menu.classList.toggle("header__menu_is-active_black"):this._menu.classList.toggle("header__menu_is-active_white")}toggleMenu(){this._isArticlesUrl||this._element.classList.toggle("header_state_dropdown"),this._list.classList.toggle("header__list_is-active"),this._overlay.classList.toggle("header__menu-overlay_is-active"),document.body.classList.toggle("body_is-hidden")}}class v extends r{constructor(t,e){super(),this._element=t,this._isArticles=e,this._message=this._element.querySelector(".results__message"),this._cardlist=this._element.querySelector(".results__list"),this._preloader=this._element.querySelector(".articles-list__circle-preloader"),this.cardsData=null,this.counter=null,this.renderedCards=[],this._initializeSearchResultsElems(),this.setMessageError=this.setMessageError.bind(this)}_initializeSearchResultsElems(){this._isArticles||(this._moreCards=this._element.querySelector(".results__button"),this._noResults=this._element.querySelector(".results__no-results"))}show(){this._isArticles||(this.toggleNoResults(!1),this.toggleMoreCards(!1)),this._message.textContent="",this.togglePreloader(!0),this._element.classList.add("results_is-active")}hide(){this._element.classList.remove("results_is-active")}insertElement(t){this._cardlist.append(t)}togglePreloader(t){t?this._preloader.classList.add("preloader_is-active"):this._preloader.classList.remove("preloader_is-active")}toggleMoreCards(t){t?this._moreCards.classList.add("results__button_active"):this._moreCards.classList.remove("results__button_active")}toggleNoResults(t){t?this._noResults.classList.add("results__no-results_is-active"):this._noResults.classList.remove("results__no-results_is-active")}setMessageError(t){console.log(t),this._message.textContent=t}}class y extends r{constructor(t,e){super(),this._element=document.querySelector(e).content.cloneNode(!0).querySelector(".card__wrapper"),this._data=t,this._id=null,this._cardEventCallback=null,this._textWrapper=this._element.querySelector(".card__text-wrapper"),this._setData(this._data),this.truncateCardText=this.truncateCardText.bind(this),setTimeout(this.truncateCardText,10)}truncateCardText(){const t=this._textWrapper.clientWidth*this._textWrapper.clientHeight/245;this._element.querySelector(".card__text").textContent="".concat(this._data.text.substr(0,t),"...")}remove(){this._removeListeners(),this._element.remove()}_setData(t){this._element.querySelector(".card__source").textContent=t.source,this._element.querySelector(".card__title").textContent=t.title,this._element.querySelector(".card__date").textContent=y._setFormattedDate(t.date),this._element.querySelector(".card__text").textContent=t.text,this._element.querySelector(".card__image").style.backgroundImage="url('".concat(t.image,"')"),this._element.querySelector(".card__keyword")&&(this._element.querySelector(".card__keyword").textContent=t.keyword)}static _setFormattedDate(t){const e=new Date(t);return"".concat(e.getDate()," ").concat(["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][e.getMonth()],", ").concat(e.getFullYear())}set id(t){this._id=t}get id(){return this._id}get node(){return this._element}}n(90);var g={NOMINATIVE_CASE:" сохранённая статья",GENITIVE_CASE:" сохранённые статьи",ACCUSATIVE_CASE:" сохранённых статей"};const{NOMINATIVE_CASE:b,GENITIVE_CASE:S,ACCUSATIVE_CASE:x}=g,{NO_ARTICLES:E}=o.a;class w extends r{constructor(t){super(),this._element=t,this._counterDOM=this._element.querySelector(".article-info__counter"),this._username=this._element.querySelector(".article-info__name"),this._text=this._element.querySelector(".article-info__text"),this._keywords=this._text.querySelector(".article-info__keywords"),this._saved=this._element.querySelector(".article-info__saved"),this._summary={},this.counter=0}setUsername(t){this._username.textContent=t}createSummary(t){this._summary[t]?this._summary[t]+=1:this._summary[t]=1}changeSummary(t){this.counter-=1,this._summary[t]-=1,this._summary[t]||delete this._summary[t],this.sortSummary()}sortSummary(){const t={};Object.keys(this._summary).sort((t,e)=>this._summary[e]-this._summary[t]).forEach(e=>{t[e]=this._summary[e]}),this._summary=t,this._render()}_setInfo(){let t;const e=Object.keys(this._summary);return e.length>0&&e.length<=3&&(t=e.join(", ")),e.length>3&&(t="".concat(e[0],", ").concat(e[1]," и ").concat(e.length-2," другим")),t}static _setCases(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}_render(){0===this.counter?(this._counterDOM.textContent=E,this._text.style.display="none"):(this._counterDOM.textContent=this.counter,this._keywords.textContent=this._setInfo(),this._text.style.display="block"),this._saved.textContent=w._setCases(this.counter,[b,S,x])}}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){"use strict";e.a=(t,e,n)=>{e?"function"==typeof t.text?t.text().then(t=>e(JSON.parse(t).message)):"Failed to fetch"===t.message?e(n):e(t):console.log(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(0),o=n(53),i=n(54),s=n(13);for(var c in o){var a=r[c],u=a&&a.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(t){u.forEach=i}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(7),o=n(16),i=n(36);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(64),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){"use strict";e.a={SERVER_URL:"https://api.mydiploma.website",NEWSAPI_URL:"https://newsapi.org/v2/everything",NEWSAPI_TOKEN:"436d782cf30e4996a880aaac9b60e14c",ESCAPE_CODE:27,ONE_DAY:864e5,LAST_DAY:7,CARD_AMOUNT:3}},function(t,e,n){var r=n(7),o=n(33),i=n(10),s=n(35),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=s(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(13);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(7),o=n(60),i=n(36),s=n(21),c=n(35),a=n(3),u=n(33),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=s(t),e=c(e,!0),u)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(26),o=n(28);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(0),o=n(13),i=n(3),s=n(19),c=n(23),a=n(40),u=a.get,l=a.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),l(n).source=f.join("string"==typeof e?e:"")),t!==r?(a?!h&&t[e]&&(u=!0):delete t[e],u?t[e]=n:o(t,e,n)):u?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},function(t,e,n){var r=n(32),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(20).f,i=n(13),s=n(22),c=n(19),a=n(51),u=n(42);t.exports=function(t,e){var n,l,f,h,d,_=t.target,p=t.global,m=t.stat;if(n=p?r:m?r[_]||c(_,{}):(r[_]||{}).prototype)for(l in e){if(h=e[l],f=t.noTargetGet?(d=o(n,l))&&d.value:n[l],!u(p?l:_+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof h==typeof f)continue;a(h,f)}(t.sham||f&&f.sham)&&i(h,"sham",!0),s(n,l,h,t)}}},function(t,e,n){"use strict";var r=n(8);e.a=(t,e,n)=>{t.getUserData().then(t=>{e.render({isLoggedIn:!0,userName:t.data.name}),n&&n.setUsername(t.data.name)}).catch(t=>{Object(r.a)(t)})}},function(t,e,n){var r=n(2),o=n(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(28);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(31),o=n(32);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(19),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(7),o=n(2),i=n(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(5),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r,o,i,s=n(61),c=n(0),a=n(5),u=n(13),l=n(3),f=n(62),h=n(41),d=c.WeakMap;if(s){var _=new d,p=_.get,m=_.has,v=_.set;r=function(t,e){return v.call(_,t,e),e},o=function(t){return p.call(_,t)||{}},i=function(t){return m.call(_,t)}}else{var y=f("state");h[y]=!0,r=function(t,e){return u(t,y,e),e},o=function(t){return l(t,y)?t[y]:{}},i=function(t){return l(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports={}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=c[s(t)];return n==u||n!=a&&("function"==typeof e?r(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e){t.exports={}},function(t,e,n){var r,o,i,s=n(0),c=n(2),a=n(9),u=n(17),l=n(84),f=n(34),h=n(45),d=s.location,_=s.setImmediate,p=s.clearImmediate,m=s.process,v=s.MessageChannel,y=s.Dispatch,g=0,b={},S=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},x=function(t){return function(){S(t)}},E=function(t){S(t.data)},w=function(t){s.postMessage(t+"",d.protocol+"//"+d.host)};_&&p||(_=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(g),g},p=function(t){delete b[t]},"process"==a(m)?r=function(t){m.nextTick(x(t))}:y&&y.now?r=function(t){y.now(x(t))}:v&&!h?(i=(o=new v).port2,o.port1.onmessage=E,r=u(i.postMessage,i,1)):!s.addEventListener||"function"!=typeof postMessage||s.importScripts||c(w)?r="onreadystatechange"in f("script")?function(t){l.appendChild(f("script")).onreadystatechange=function(){l.removeChild(this),S(t)}}:function(t){setTimeout(x(t),0)}:(r=w,s.addEventListener("message",E,!1))),t.exports={set:_,clear:p}},function(t,e,n){var r=n(46);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(14);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(12),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(50);class r{constructor(t){this._url=t.url}static getJSONResponse(t){return t.ok?t.json():Promise.reject(t)}signup(t){const{name:e,email:n,password:o}=t;return fetch("".concat(this._url,"/signup"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:e,email:n,password:o})}).then(t=>r.getJSONResponse(t))}signin(t){const{email:e,password:n}=t;return fetch("".concat(this._url,"/signin"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:e,password:n})}).then(t=>r.getJSONResponse(t))}getUserData(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(t=>r.getJSONResponse(t))}addBookmark(t){return fetch("".concat(this._url,"/articles"),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))},method:"POST",body:JSON.stringify(t)}).then(t=>r.getJSONResponse(t))}deleteBookmark(t){return fetch("".concat(this._url,"/articles/").concat(t),{headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))},method:"DELETE"}).then(t=>r.getJSONResponse(t))}getArticles(){return fetch("".concat(this._url,"/articles"),{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(t=>r.getJSONResponse(t))}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r=(t,e)=>{!window.matchMedia("(max-width: 660px)").matches&&t.checkMenuState()?(e.isOpened||t.toggleMenu(),t.toggleMenuButton()):window.matchMedia("(max-width: 660px)").matches&&!t.checkMenuState()&&e.isOpened&&t.toggleMenuButton()},o=t=>{!window.matchMedia("(max-width: 660px)").matches&&t.checkMenuState()&&(t.toggleMenu(),t.toggleMenuButton())}},function(t,e,n){"use strict";var r,o,i,s,c=n(24),a=n(31),u=n(0),l=n(14),f=n(71),h=n(22),d=n(72),_=n(73),p=n(74),m=n(5),v=n(12),y=n(75),g=n(9),b=n(23),S=n(76),x=n(82),E=n(83),w=n(44).set,L=n(85),O=n(86),C=n(87),R=n(47),k=n(88),T=n(40),A=n(42),M=n(1),j=n(89),N=M("species"),I="Promise",P=T.get,q=T.set,D=T.getterFor(I),H=f,V=u.TypeError,U=u.document,G=u.process,F=l("fetch"),B=R.f,z=B,W="process"==g(G),J=!!(U&&U.createEvent&&u.dispatchEvent),Y=A(I,(function(){if(!(b(H)!==String(H))){if(66===j)return!0;if(!W&&"function"!=typeof PromiseRejectionEvent)return!0}if(a&&!H.prototype.finally)return!0;if(j>=51&&/native code/.test(H))return!1;var t=H.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[N]=e,!(t.then((function(){}))instanceof e)})),K=Y||!x((function(t){H.all(t).catch((function(){}))})),X=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},Q=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;L((function(){for(var o=e.value,i=1==e.state,s=0;r.length>s;){var c,a,u,l=r[s++],f=i?l.ok:l.fail,h=l.resolve,d=l.reject,_=l.domain;try{f?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===f?c=o:(_&&_.enter(),c=f(o),_&&(_.exit(),u=!0)),c===l.promise?d(V("Promise-chain cycle")):(a=X(c))?a.call(c,h,d):h(c)):d(o)}catch(t){_&&!u&&_.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&$(t,e)}))}},Z=function(t,e,n){var r,o;J?((r=U.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},(o=u["on"+t])?o(r):"unhandledrejection"===t&&C("Unhandled promise rejection",n)},$=function(t,e){w.call(u,(function(){var n,r=e.value;if(tt(e)&&(n=k((function(){W?G.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),e.rejection=W||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){w.call(u,(function(){W?G.emit("rejectionHandled",t):Z("rejectionhandled",t,e.value)}))},nt=function(t,e,n,r){return function(o){t(e,n,o,r)}},rt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Q(t,e,!0))},ot=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw V("Promise can't be resolved itself");var o=X(n);o?L((function(){var r={done:!1};try{o.call(n,nt(ot,t,r,e),nt(rt,t,r,e))}catch(n){rt(t,r,n,e)}})):(e.value=n,e.state=1,Q(t,e,!1))}catch(n){rt(t,{done:!1},n,e)}}};Y&&(H=function(t){y(this,H,I),v(t),r.call(this);var e=P(this);try{t(nt(ot,this,e),nt(rt,this,e))}catch(t){rt(this,e,t)}},(r=function(t){q(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(H.prototype,{then:function(t,e){var n=D(this),r=B(E(this,H));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=W?G.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Q(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=P(t);this.promise=t,this.resolve=nt(ot,t,e),this.reject=nt(rt,t,e)},R.f=B=function(t){return t===H||t===i?new o(t):z(t)},a||"function"!=typeof f||(s=f.prototype.then,h(f.prototype,"then",(function(t,e){var n=this;return new H((function(t,e){s.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof F&&c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(H,F.apply(u,arguments))}}))),c({global:!0,wrap:!0,forced:Y},{Promise:H}),_(H,I,!1,!0),p(I),i=l(I),c({target:I,stat:!0,forced:Y},{reject:function(t){var e=B(this);return e.reject.call(void 0,t),e.promise}}),c({target:I,stat:!0,forced:a||Y},{resolve:function(t){return O(a&&this===i?H:this,t)}}),c({target:I,stat:!0,forced:K},{all:function(t){var e=this,n=B(e),r=n.resolve,o=n.reject,i=k((function(){var n=v(e.resolve),i=[],s=0,c=1;S(t,(function(t){var a=s++,u=!1;i.push(void 0),c++,n.call(e,t).then((function(t){u||(u=!0,i[a]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=B(e),r=n.reject,o=k((function(){var o=v(e.resolve);S(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(3),o=n(63),i=n(20),s=n(16);t.exports=function(t,e){for(var n=o(e),c=s.f,a=i.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||c(t,l,a(e,l))}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(55).forEach,o=n(39),i=n(59),s=o("forEach"),c=i("forEach");t.exports=s&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(17),o=n(26),i=n(27),s=n(18),c=n(56),a=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f;return function(d,_,p,m){for(var v,y,g=i(d),b=o(g),S=r(_,p,3),x=s(b.length),E=0,w=m||c,L=e?w(d,x):n?w(d,0):void 0;x>E;E++)if((h||E in b)&&(y=S(v=b[E],E,g),t))if(e)L[E]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return E;case 2:a.call(L,v)}else if(l)return!1;return f?-1:u||l?l:L}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},function(t,e,n){var r=n(5),o=n(57),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(38);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(7),o=n(2),i=n(3),s=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:a,f=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,l,f)}))}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(23),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(30),o=n(37),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(14),o=n(65),i=n(70),s=n(10);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(66),o=n(69).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(3),o=n(21),i=n(67).indexOf,s=n(41);t.exports=function(t,e){var n,c=o(t),a=0,u=[];for(n in c)!r(s,n)&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var r=n(21),o=n(18),i=n(68),s=function(t){return function(e,n,s){var c,a=r(e),u=o(a.length),l=i(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(22);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(16).f,o=n(3),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(14),o=n(16),i=n(1),s=n(7),c=i("species");t.exports=function(t){var e=r(t),n=o.f;s&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(10),o=n(77),i=n(18),s=n(17),c=n(78),a=n(81),u=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,f){var h,d,_,p,m,v,y,g=s(e,n,l?2:1);if(f)h=t;else{if("function"!=typeof(d=c(t)))throw TypeError("Target is not iterable");if(o(d)){for(_=0,p=i(t.length);p>_;_++)if((m=l?g(r(y=t[_])[0],y[1]):g(t[_]))&&m instanceof u)return m;return new u(!1)}h=d.call(t)}for(v=h.next;!(y=v.call(h)).done;)if("object"==typeof(m=a(h,g,y.value,l))&&m&&m instanceof u)return m;return new u(!1)}).stop=function(t){return new u(!0,t)}},function(t,e,n){var r=n(1),o=n(43),i=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||s[i]===t)}},function(t,e,n){var r=n(79),o=n(43),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(80),o=n(9),i=n(1)("toStringTag"),s="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:s?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(10);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,s={next:function(){return{done:!!i++}},return:function(){o=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(10),o=n(12),i=n(1)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[i])?e:o(n)}},function(t,e,n){var r=n(14);t.exports=r("document","documentElement")},function(t,e,n){var r,o,i,s,c,a,u,l,f=n(0),h=n(20).f,d=n(9),_=n(44).set,p=n(45),m=f.MutationObserver||f.WebKitMutationObserver,v=f.process,y=f.Promise,g="process"==d(v),b=h(f,"queueMicrotask"),S=b&&b.value;S||(r=function(){var t,e;for(g&&(t=v.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?s():i=void 0,t}}i=void 0,t&&t.enter()},g?s=function(){v.nextTick(r)}:m&&!p?(c=!0,a=document.createTextNode(""),new m(r).observe(a,{characterData:!0}),s=function(){a.data=c=!c}):y&&y.resolve?(u=y.resolve(void 0),l=u.then,s=function(){l.call(u,r)}):s=function(){_.call(f,r)}),t.exports=S||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,s()),i=e}},function(t,e,n){var r=n(10),o=n(5),i=n(47);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),s=n(46),c=i.process,a=c&&c.versions,u=a&&a.v8;u?o=(r=u.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(24),o=n(12),i=n(27),s=n(2),c=n(39),a=[],u=a.sort,l=s((function(){a.sort(void 0)})),f=s((function(){a.sort(null)})),h=c("sort");r({target:"Array",proto:!0,forced:l||!f||!h},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),o(t))}})},,,function(t,e,n){"use strict";n.r(e);n(11),n(94);var r=n(15),o=n(4),i=n(48),s=n(6),c=n(25),a=n(8),u=n(49);const{GET_RESULT_ERROR:l}=o.a,f=new i.a({url:r.a.SERVER_URL}),h=new s.c(document.querySelector(".header"),!0),d=new s.f(document.querySelector(".results"),!0),_=new s.a(document.querySelector(".article-info"));window.addEventListener("resize",()=>Object(u.b)(h)),localStorage.getItem("token")?Object(c.a)(f,h,_):window.location.href="../index.html";h.setListeners([{event:"click",element:".header__button",callback:t=>(t=>{t.preventDefault(),localStorage.removeItem("token"),window.location.href="../index.html"})(t)},{event:"click",element:".header__menu",callback:t=>(t=>{window.matchMedia("(max-width: 660px)").matches&&t.target.classList.contains("header__menu")&&(h.toggleMenuButton(),h.toggleMenu())})(t)}]);d.show(),f.getArticles().then(t=>{d.togglePreloader(!1),t.data.forEach(t=>{_.createSummary(t.keyword);const e=new s.d(t,".card-bookmark-template");e.setListeners([{event:"click",element:".card__corner-button",callback:n=>((t,e,n)=>{t.preventDefault(),t.stopPropagation(),window.confirm("Вы действительно хотите удалить эту новость?")&&f.deleteBookmark(n._id).then(()=>{_.changeSummary(n.keyword),e.remove(),d.renderedCards.pop(),0===d.renderedCards.length&&d.hide()}).catch(t=>{Object(a.a)(t)})})(n,e,t)},{event:"click",element:".card",callback:()=>{window.open(t.link,"_blank")}},{event:"resize",element:"window",callback:e.truncateCardText}]),d.renderedCards.push(e),d.insertElement(e.node),_.counter+=1}),_.sortSummary()}).catch(t=>{d.togglePreloader(!1),Object(a.a)(t,d.setMessageError,l)})},function(t,e,n){}]);