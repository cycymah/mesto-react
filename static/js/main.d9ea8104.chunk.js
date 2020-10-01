(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(12),a(1)),s=a(4),i=a.n(s);var m=function(){return r.a.createElement("header",{className:"header page__header"},r.a.createElement("img",{src:i.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}))},_=a(5),u=a(6),d=new(function(){function e(t){Object(_.a)(this,e),this._serverUrl=t.url,this._headers=t.headers}return Object(u.a)(e,[{key:"getInitialCards",value:function(e){return fetch("".concat(this._serverUrl,"/").concat(e),{method:"GET",headers:this._headers}).then(this._errorCheck)}},{key:"getProfileInformation",value:function(e){return fetch("".concat(this._serverUrl,"/").concat(e),{method:"GET",headers:this._headers}).then(this._errorCheck)}},{key:"addNewInformation",value:function(e,t){return fetch("".concat(this._serverUrl,"/").concat(t),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._errorCheck)}},{key:"updateInformation",value:function(e,t){return fetch("".concat(this._serverUrl,"/").concat(t),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._errorCheck)}},{key:"removeCard",value:function(e){return fetch("".concat(this._serverUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._errorCheck)}},{key:"putInformation",value:function(e){return fetch("".concat(this._serverUrl,"/").concat(e),{method:"PUT",headers:this._headers}).then(this._errorCheck)}},{key:"putLike",value:function(e){return fetch("".concat(this._serverUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._errorCheck)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._serverUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._errorCheck)}},{key:"_errorCheck",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{"Content-Type":"application/json",authorization:"e25f3c22-3477-48f3-a377-dbd53dc14614"}});var f=function(e){var t=e.card,a=e.link,n=e.likes,c=e.name,o=e.onCardClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"elements__item"},r.a.createElement("button",{className:"elements__trash",type:"button"}),r.a.createElement("figure",{className:"elements__item-card"},r.a.createElement("img",{onClick:function(){o(t)},src:a,alt:c,className:"elements__image"}),r.a.createElement("figcaption",{className:"elements__image-content-box"},r.a.createElement("p",{className:"elements__image-description"},c),r.a.createElement("div",{className:"elements__like-button-box"},r.a.createElement("button",{className:"elements__like"}),r.a.createElement("span",{className:"elements__like-counter"},n))))))};var h=function(e){var t=e.onEditAvatar,a=e.onAddPlace,c=e.onEditProfile,o=e.onCardClick,s=r.a.useState(""),i=Object(l.a)(s,2),m=i[0],_=i[1],u=r.a.useState(""),h=Object(l.a)(u,2),p=h[0],E=h[1],v=r.a.useState(""),N=Object(l.a)(v,2),b=N[0],k=N[1],g=r.a.useState([]),C=Object(l.a)(g,2),y=C[0],O=C[1];return Object(n.useEffect)((function(){d.getProfileInformation("users/me").then((function(e){var t=e.avatar,a=e.about,n=e.name;_(t),E(a),k(n)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){d.getInitialCards("cards").then((function(e){O(e)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("main",{className:"content page__content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-box"},r.a.createElement("img",{src:m,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430",className:"profile__avatar"}),r.a.createElement("button",{onClick:t,className:"profile__edit-avatar-btn",type:"button"},r.a.createElement("div",{className:"profile__edit-avatar-img"}))),r.a.createElement("div",{className:"profile__profile-info"},r.a.createElement("h1",{className:"profile__title-name"},b),r.a.createElement("button",{onClick:c,className:"profile__edit-btn"}),r.a.createElement("p",{className:"profile__subtitle-name"},p)),r.a.createElement("button",{onClick:a,className:"profile__add-button"})),r.a.createElement("section",{className:"elements"},r.a.createElement("ul",{className:"elements__list"},y.map((function(e,t){return r.a.createElement(f,{card:e,onCardClick:o,key:t,name:e.name,link:e.link,likes:e.likes.length})})))))};var p=function(){return r.a.createElement("footer",{className:"footer page__footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return r.a.createElement("div",{className:"modal page__modal modal_target_".concat(e.name," ").concat(e.isOpen?"modal_active":"")},r.a.createElement("div",{onClick:e.onClose,className:"modal__overlay"}),r.a.createElement("div",{className:"form"},r.a.createElement("button",{className:"form__close-btn form__close-btn_target_".concat(e.name),type:"button",onClick:e.onClose}),r.a.createElement("h2",{className:"form__title"},e.title),r.a.createElement("form",{action:"#",className:"form__section form__section_target_".concat(e.name),name:e.name,noValidate:!0},e.children,r.a.createElement("button",{className:"form__submit-btn",type:"submit"},e.textButton))))};var v=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"modal page__modal modal_target_photoZoom ".concat(t.status?"modal_active":"")},r.a.createElement("div",{onClick:a,className:"modal__overlay modal__overlay_background_dark"}),r.a.createElement("figure",{className:"zoom"},r.a.createElement("button",{onClick:a,className:"zoom__close-btn",type:"button"}),r.a.createElement("img",{src:t.src,alt:"",className:"zoom__image"}),r.a.createElement("figcaption",{className:"zoom__text-image"},t.name)))};var N=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),o=Object(l.a)(c,2),s=o[0],i=o[1],_=r.a.useState(!1),u=Object(l.a)(_,2),d=u[0],f=u[1],N=r.a.useState({}),b=Object(l.a)(N,2),k=b[0],g=b[1],C=function(){f(!1),i(!1),n(!1),g(!1)};return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page__container"},r.a.createElement(m,null),r.a.createElement(h,{onCardClick:function(e){var t=e.link,a=e.name;g({status:!0,src:t,name:a})},onEditProfile:function(){n(!0)},onAddPlace:function(){i(!0)},onEditAvatar:function(){f(!0)}}),r.a.createElement(p,null)),r.a.createElement(E,{onClose:C,isOpen:a,name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",className:"form__input form__input_field_name",id:"input-name",placeholder:"\u0418\u043c\u044f",name:"profileName",required:!0,minLength:"2",maxLength:"40"}),r.a.createElement("span",{className:"form__input-error",id:"input-name-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",className:"form__input form__input_field_about",id:"input-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"about",required:!0,minLength:"2",maxLength:"200"}),r.a.createElement("span",{className:"form__input-error",id:"input-about-error"}))),r.a.createElement(E,{onClose:C,isOpen:s,name:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{type:"text",className:"form__input form__input_field_title",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{className:"form__input-error",id:"title-input-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{className:"form__input form__input_field_src",id:"src-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",type:"URL",required:!0}),r.a.createElement("span",{className:"form__input-error",id:"src-input-error"}))),r.a.createElement(E,{onClose:C,isOpen:d,name:"profile-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u0430\u0440",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{className:"form__input form__input_field_avatar",id:"avatar-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"pictureSource",type:"URL",required:!0}),r.a.createElement("span",{className:"form__input-error",id:"avatar-input-error"}))),r.a.createElement(E,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textButton:"\u0414\u0430"}),r.a.createElement(v,{card:k,onClose:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/vector.c6f11019.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d9ea8104.chunk.js.map