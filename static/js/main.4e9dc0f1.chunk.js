(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},111:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var c=a(5),r=a.n(c),s=a(44),n=a.n(s),i=a(83),o=a(12),d=(a(90),a(91),a(92),a(16)),l=a(161),j=(a(104),a.p+"static/media/gmail.0a57a82b.svg"),b=a.p+"static/media/linkedin.5135e6c2.svg",h=a.p+"static/media/behance.304d93a9.svg",u=a.p+"static/media/github.218e258d.svg",m=a.p+"static/media/whatsapp.8b722179.svg",p=a(0),O=[{path:b,url:"https://www.linkedin.com/in/jvwasquevite/",color:"#0076B2"},{path:h,url:"https://www.behance.net/jvwasquevite",color:"#1D6FED"},{path:u,url:"https://github.com/jvwasquevite/",color:"#4493f8"},{path:j,url:"mailto:jvwasquevite@gmail.com",color:"#ea4335"},{path:m,url:"https://api.whatsapp.com/send?phone=5551995270276",color:"#25D366"}],x=function(){return Object(p.jsx)("div",{id:"SocialButtons",children:O.map((function(e,t){return Object(p.jsx)("a",{href:e.url,style:{background:e.color},target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:e.path,alt:e.path})},t)}))})},f=function(){var e=Object(l.a)().t;return Object(p.jsxs)("div",{id:"About",children:[Object(p.jsx)("p",{className:"sub-header",children:e("head.subheader")}),Object(p.jsx)("h1",{children:Object(d.a)(e("head.header"))}),Object(p.jsx)("p",{children:Object(d.a)(e("head.content"))}),Object(p.jsx)("div",{className:"social",children:Object(p.jsx)(x,{})})]})},v=(a(111),a(37)),g=a(10),k=Object(c.createContext)(),N=function(e){var t=Object(c.useState)("Menu"),a=Object(g.a)(t,2),r=a[0],s=a[1];return Object(p.jsx)(k.Provider,{value:{active:r,setActive:s},children:e.children})},w=function(){var e=(0,Object(l.a)().t)("head.menu",{returnObjects:!0}),t=Object(c.useContext)(k).setActive;return Object(p.jsx)("div",{id:"Menu",children:Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{children:e.map((function(e,a){return Object(p.jsx)("li",{children:Object(p.jsxs)(v.Link,{activeClass:"active",to:e.path,spy:!0,smooth:!0,duration:1e3,onSetActive:function(){return t(e.name)},onSetInactive:function(){return 0===a&&t("Menu")},children:[Object(p.jsx)("hr",{})," ",e.name]})},a)}))})})})},y=(a(121),function(){var e=Object(l.a)().i18n;return Object(p.jsx)("div",{id:"LangSwitcher",children:"pt"===e.language||"pt-BR"===e.language?Object(p.jsx)("button",{className:"btn-secondary",onClick:function(){return e.changeLanguage("en")},children:"EN-US"}):Object(p.jsx)("button",{className:"btn-secondary",onClick:function(){return e.changeLanguage("pt")},children:"PT-BR"})})}),S=a.p+"static/media/logo.d522f623.gif",C=function(){return Object(p.jsxs)("header",{id:"Head",children:[Object(p.jsx)("img",{src:S,alt:"logo",className:"logo"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"about",children:Object(p.jsx)(f,{})}),Object(p.jsx)("div",{className:"menu",children:Object(p.jsx)(w,{})}),Object(p.jsxs)("div",{className:"foot",children:[Object(p.jsx)(x,{}),Object(p.jsx)(y,{})]})]})]})},P=(a(122),a.p+"static/media/happy.26f82801.webp"),A=a.p+"static/media/wink.51868604.webp",I=a.p+"static/media/tongue.69b254d0.webp",q=a.p+"static/media/arrow-down.3f9d2213.svg",M=function(){var e=Object(c.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],s=[P,A,I];return Object(c.useEffect)((function(){var e=setInterval((function(){r((function(e){return e+1===s.length?0:e+1}))}),2e3);return function(){clearInterval(e)}}),[s.length]),Object(p.jsx)("section",{id:"Hero",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("img",{src:s[a],className:"memoji",alt:"Memojis"}),Object(p.jsx)(v.Link,{to:"Resume",spy:!0,smooth:!0,duration:1e3,className:"to-resume",children:Object(p.jsx)("img",{src:q,className:"arrow-down",alt:"Go to resume"})}),Object(p.jsx)(v.Link,{to:"Next",spy:!0,smooth:!0,duration:1e3,className:"to-about",children:Object(p.jsx)("img",{src:q,className:"arrow-down",alt:"Go to about"})})]})})},F=(a(123),function(){var e=Object(l.a)().t;return Object(p.jsxs)("section",{id:"Resume",children:[e("resume.main",{returnObjects:!0}).map((function(e,t){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:e.image,alt:e.header})}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e.subheader}),Object(p.jsx)("h2",{children:e.header}),Object(p.jsx)("h3",{children:e.description}),Object(p.jsx)("p",{className:"secondary-text",children:Object(d.a)(e.secondarytext)})]})]},t)})),Object(p.jsx)("div",{className:"secondary",children:e("resume.secondary",{returnObjects:!0}).map((function(e,t){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e.subheader}),Object(p.jsx)("h3",{children:e.header}),Object(p.jsx)("p",{className:"secondary-text",children:Object(d.a)(e.secondarytext)})]})},t)}))}),Object(p.jsxs)("a",{href:"https://www.linkedin.com/in/jvwasquevite/",className:"button",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," ",e("resume.button")]})]})}),E=(a(124),a(85)),_=function(){var e=Object(l.a)().t,t=Object(E.a)(60),a=Object(c.useState)(!1),r=Object(g.a)(a,2),s=r[0],n=r[1];return Object(c.useEffect)((function(){t>1e3&&!1===s&&n(!0)}),[t,s]),Object(p.jsxs)("section",{id:"Skills",children:[e("skills.content",{returnObjects:!0}).map((function(e,t){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e.subheader}),Object(p.jsx)("h3",{children:e.header}),Object(p.jsx)("p",{className:"secondary-text",children:e.secondarytext})]}),Object(p.jsx)("div",{className:"bar",style:s?{width:"".concat(e.level)}:null})]},t)})),Object(p.jsx)("p",{className:"other",children:Object(d.a)(e("skills.other"))})]})},L=(a(125),a.p+"static/media/arrow-right.eaa81419.svg"),U=a(39),R=a(4),D=a(1),H=a.n(D),B=a(25),G=a(80),J=a(45),V=Object(G.a)({apiKey:"AIzaSyArp2Ka_gE75Kt9AZtsckUZNvSrHpS_ybY",authDomain:"jvwasquevite-api.firebaseapp.com",databaseURL:"https://jvwasquevite-api-default-rtdb.firebaseio.com",projectId:"jvwasquevite-api",storageBucket:"jvwasquevite-api.appspot.com",messagingSenderId:"1082479474522",appId:"1:1082479474522:web:ff26607b7d71ff78902563"}),W=Object(J.e)(V),z=a(57),X=a.n(z),T=X.a.create({baseURL:"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jvwasquevite"}),K=X.a.create({baseURL:"https://api.github.com/users/jvwasquevite/repos",auth:{username:"befa76d9a8681ec91c01",password:"107e247f3c625e8017777d7337b2fe8ac499e734"}}),Y=function(){var e=Object(R.a)(H.a.mark((function e(t){var a,c,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(B.f)(Object(B.a)(W,"portfolio"),Object(B.e)("sort")),e.next=3,Object(B.d)(a);case 3:return c=e.sent,r="pt"===t?c.docs.map((function(e){return{id:e.id,name:e.data().name[0],language:e.data().language,topics:e.data().topics,description:e.data().ptDescription,screenshots:{desktop:e.data().screenshots[0].downloadURL,mobile:e.data().screenshots[1].downloadURL},url:e.data().url}})):c.docs.map((function(e){return{id:e.id,name:1===e.data().name.length?e.data().name[0]:e.data().name[1],language:e.data().language,topics:e.data().topics,description:e.data().enDescription,screenshots:{desktop:e.data().screenshots[0].downloadURL,mobile:e.data().screenshots[1].downloadURL},url:e.data().url}})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(R.a)(H.a.mark((function e(t){var a,c,r,s,n,i,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(B.b)(W,"jobs",t),e.next=3,Object(B.c)(a);case 3:if((c=e.sent).exists()){e.next=6;break}throw new Error("Not found");case 6:return r=c.data(),s=Object(B.f)(Object(B.a)(a,"applications"),Object(B.e)("sort")),e.next=10,Object(B.d)(s);case 10:return n=e.sent,i=n.docs.map((function(e){return Object(U.a)({id:e.id},e.data())})),o={companyName:r.companyName,logo:r.companyLogo[0].downloadURL,jobFocus:r.jobFocus,jobStack:r.jobStack,jobSkills:r.jobSkills,multipleApplications:i.length>1,applications:i,finals:r.finals},e.abrupt("return",o);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(c.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],s=Object(l.a)(),n=s.t,i=s.i18n,o=Object(c.useState)([]),j=Object(g.a)(o,2),b=j[0],h=j[1],u=i.language;Object(c.useEffect)((function(){Y(u).then((function(e){h(e)})).catch((function(e){return console.error(e)}))}),[u]);var m=n("portfolio.content",{returnObjects:!0});return Object(p.jsxs)("section",{id:"Portfolio",children:[Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsx)("div",{className:"content",style:{left:a},children:b.map((function(e,t){return Object(p.jsxs)("div",{id:"slide",className:"slide",children:[Object(p.jsxs)("div",{className:"mockup",children:[Object(p.jsx)("img",{src:e.screenshots.desktop,alt:e.name,className:"desktop"}),Object(p.jsx)("img",{src:e.screenshots.mobile,alt:e.name,className:"mobile"})]}),Object(p.jsx)("p",{className:"sub-header",children:e.language}),Object(p.jsx)("h2",{children:e.name}),Object(p.jsx)("div",{className:"skills",children:e.topics.map((function(e,t){return Object(p.jsx)("div",{className:"skill",children:e},t)}))}),Object(p.jsx)("div",{className:"secondary-text",children:Object(d.a)(e.description)}),e.url?Object(p.jsxs)("a",{href:e.url,className:"button see-project",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," ","pt"===u?"Ver projeto":"See project"]}):null]},t)}))}),Object(p.jsx)("div",{className:"next",onClick:function(){return function(){var e=document.getElementById("slide").clientWidth;Math.abs(a)<=(m.length-2)*(e+30)?r(a-(e+30)):r(0)}()},children:Object(p.jsx)("img",{src:L,alt:"next"})})]}),Object(p.jsxs)("div",{className:"foot",children:[Object(p.jsx)("p",{children:Object(d.a)(n("portfolio.integration"))}),Object(p.jsxs)("a",{href:n("portfolio.button.url"),className:"button more",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," ",n("portfolio.button.name")]})]})]})},$=(a(145),function(){var e=Object(l.a)().t,t=Object(c.useState)([]),a=Object(g.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){T.get().then((function(e){s(e.data.items)})).catch((function(e){return console.error(e)}))}),[]),Object(p.jsxs)("section",{id:"Articles",children:[Object(p.jsx)("div",{className:"container",children:r.map((function(e,t){var a=e.description.toString().match(/<img[^>]+src="([^">]+)"/)[1];return Object(p.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("div",{className:"post",style:{backgroundImage:"url(".concat(a,")")},children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:"Medium"}),Object(p.jsx)("h3",{children:e.title})]})})},t)}))}),Object(p.jsxs)("div",{className:"foot",children:[Object(p.jsx)("p",{children:Object(d.a)(e("articles.integration"))}),Object(p.jsxs)("a",{href:e("articles.button.url"),className:"button more",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," ",e("articles.button.name")]})]})]})}),ee=(a(146),function(){var e=Object(l.a)().t,t=e("contact.content",{returnObjects:!0});return Object(p.jsxs)("section",{id:"Contact",children:[Object(p.jsxs)("div",{className:"head",children:[Object(p.jsx)("p",{className:"sub-header",children:e("contact.subheader")}),Object(p.jsx)("h2",{children:Object(d.a)(e("contact.header"))})]}),Object(p.jsx)("div",{className:"container",children:t.map((function(t,a){return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e(t.subheader)}),Object(p.jsx)("h3",{children:e(t.header)})]},a)}))}),Object(p.jsxs)("a",{href:e("contact.button.url"),className:"button more",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," ",e("contact.button.name")]})]})}),te=(a(147),function(){var e=Object(l.a)().t,t=e("foot.links",{returnObjects:!0});return Object(p.jsxs)("footer",{id:"Foot",children:[Object(p.jsx)("p",{children:Object(d.a)(e("foot.text"))}),Object(p.jsx)("div",{className:"links",children:t.map((function(t,a){return Object(p.jsx)("a",{href:e(t.url),target:"_blank",rel:"noreferrer",children:e(t.name)},a)}))})]})}),ae=(a(148),a.p+"static/media/nav-arrow.6943a2a4.svg"),ce=function(){var e=Object(c.useState)(!1),t=Object(g.a)(e,2),a=t[0],r=t[1],s=Object(c.useContext)(k).active;return Object(p.jsxs)("div",{id:"Navbar",children:[a&&Object(p.jsx)("div",{className:"menu",children:Object(p.jsx)(w,{onClick:function(){return r(!1)}})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"mobile-menu",children:Object(p.jsx)("div",{className:"menu-switcher button",onClick:function(){return r(!a)},children:a?Object(p.jsxs)(p.Fragment,{children:[s," ",Object(p.jsx)("img",{src:ae,className:"arrow open",alt:"Close menu"})]}):Object(p.jsxs)(p.Fragment,{children:[s," ",Object(p.jsx)("img",{src:ae,className:"arrow",alt:"Open menu"})]})})}),Object(p.jsx)("div",{className:"lang-switcher",children:Object(p.jsx)(y,{})})]})]})},re=(a(149),function(){var e=Object(l.a)().t,t=Object(c.useState)([]),a=Object(g.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)(1),i=Object(g.a)(n,2),o=i[0],j=i[1];Object(c.useEffect)((function(){K.get().then((function(e){s(e.data)})).catch((function(e){return console.error(e)}))}),[]);for(var b=4*o,h=b-4,u=r.slice(h,b),m=[],O=1;O<=Math.ceil(r.length/4);O++)m.push(O);return Object(p.jsxs)("section",{id:"Projects",children:[Object(p.jsx)("div",{className:"container",children:u.map((function(e,t){return Object(p.jsx)("div",{className:"project",children:Object(p.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e.language}),Object(p.jsxs)("h3",{children:["/",e.name]}),Object(p.jsx)("p",{className:"secondary-text",children:e.description}),Object(p.jsx)("div",{className:"topics",children:e.topics.map((function(e,t){return Object(p.jsx)("div",{className:"topic",children:e},t)}))})]})})},t)}))}),Object(p.jsx)("div",{className:"pagination",children:Object(p.jsx)("ul",{children:m.map((function(e){return Object(p.jsx)("li",{id:e,className:o===e?"active":"",onClick:function(){return j(e)},children:e},e)}))})}),Object(p.jsxs)("div",{className:"foot",children:[Object(p.jsx)("p",{children:Object(d.a)(e("projects.integration"))}),Object(p.jsxs)("a",{href:e("projects.button.url"),className:"button more",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," ",e("projects.button.name")]})]})]})}),se=function(){return Object(p.jsxs)(N,{children:[Object(p.jsxs)("main",{id:"Home",children:[Object(p.jsx)("aside",{children:Object(p.jsx)(C,{})}),Object(p.jsxs)("main",{children:[Object(p.jsx)(M,{}),Object(p.jsx)("div",{id:"Next",children:Object(p.jsx)(f,{})}),Object(p.jsx)(F,{}),Object(p.jsx)(_,{}),Object(p.jsx)(Q,{}),Object(p.jsx)(re,{}),Object(p.jsx)($,{}),Object(p.jsx)(ee,{}),Object(p.jsx)(te,{})]})]}),Object(p.jsx)(ce,{})]})},ne=(a(150),a(151),function(e){var t=e.props;return Object(p.jsxs)("div",{id:"Presentation",children:[Object(p.jsx)("img",{src:S,alt:"logo",className:"logo"}),Object(p.jsx)("p",{className:"sub-header",children:"Apresenta\xe7\xe3o"}),Object(p.jsxs)("h1",{children:["Isso ",Object(p.jsx)("b",{children:"n\xe3o \xe9"})," s\xf3 mais um ",Object(p.jsx)("b",{children:"curr\xedculo"}),"."]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("mark",{children:"Encontrar novos talentos"})," pode ser ",Object(p.jsx)("mark",{children:"exaustivo"}),": dezenas de ",Object(p.jsx)("mark",{children:"curr\xedculos"}),", ",Object(p.jsx)("mark",{children:"entrevistas"}),", candidatos"," ",Object(p.jsx)("mark",{children:"desqualificados"})," e processos ",Object(p.jsx)("mark",{children:"burocr\xe1ticos"}),"."]}),Object(p.jsxs)("p",{children:["Por isso, decidi tentar algo ",Object(p.jsx)("b",{className:"different",children:"diferente"}),"."]}),Object(p.jsxs)("p",{children:["Estou \xe0 procura de uma ",Object(p.jsx)("strong",{children:"nova oportunidade"})," ",t.multipleApplications?"nas vagas":"na vaga",window.matchMedia("(max-width:1150px)").matches?" abaixo":" ao lado"," ","e sei que sou o ",Object(p.jsx)("mark",{children:"candidato ideal"})," para a"," ",Object(p.jsx)("strong",{children:t.company}),"."]}),Object(p.jsxs)("p",{children:["Pe\xe7o apenas ",Object(p.jsx)("mark",{children:"cinco minutos"})," da sua aten\xe7\xe3o."]})]})}),ie=(a(152),function(e){var t=e.props;return Object(p.jsxs)("div",{id:"Applications",children:[Object(p.jsxs)("div",{className:"head",children:[Object(p.jsx)("img",{src:t.logo,alt:"logo"}),Object(p.jsx)("div",{className:"speech",children:Object(p.jsxs)("p",{children:["Meu perfil se encaixa ",Object(p.jsx)("b",{children:"perfeitamente"})," nas vagas abaixo!"]})})]}),Object(p.jsx)("div",{className:"container",children:t.applications.map((function(e,t){return Object(p.jsx)("div",{className:"application",children:Object(p.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e.type}),Object(p.jsx)("h3",{children:e.name}),Object(p.jsxs)("p",{className:"secondary-text",children:[e.area," \xb7 ",e.role]}),Object(p.jsx)("div",{className:"stack",children:e.stack.map((function(e,t){return Object(p.jsx)("div",{className:"item",children:e},t)}))})]})})},t)}))})]})}),oe=(a(153),function(e){var t=e.props;return Object(p.jsxs)("div",{id:"Navigator",className:0===t.currentIndex&&"presentation",children:[0===t.currentIndex?Object(p.jsx)("input",{type:"text",value:t.name,onChange:function(e){return t.setName(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t.handleNextClick()},placeholder:"Como posso te chamar?"}):Object(p.jsx)("button",{className:"btn-secondary",onClick:t.handlePrevClick,children:"Voltar"}),t.currentIndex===t.length-1?Object(p.jsx)("a",{href:"https://wa.me/5551995270276",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("button",{className:"btn-primary",children:"Entrar em contato"})}):Object(p.jsx)("button",{className:"btn-primary",onClick:t.handleNextClick,children:"Continuar"})]})}),de=function(e){var t=e.props,a="";return t.name&&(a=t.name.toLowerCase().split(" "),t.name=a.map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")),Object(p.jsxs)("div",{id:"AboutMe",children:[Object(p.jsx)("p",{className:"sub-header",children:"Sobre mim"}),Object(p.jsxs)("h1",{children:["Prazer, ",Object(p.jsx)("strong",{children:t.name&&t.name}),t.name&&"."]}),Object(p.jsxs)("h2",{children:["Meu nome \xe9 ",Object(p.jsx)("b",{children:"Jo\xe3o Wasquevite"}),"."]}),Object(p.jsxs)("p",{children:["Pode me chamar apenas de ",Object(p.jsx)("mark",{children:"Jo\xe3o"}),"."]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("mark",{children:"Cientista da Computa\xe7\xe3o"})," pela"," ",Object(p.jsx)("mark",{children:"Universidade Federal de Pelotas"}),", sou"," ",Object(p.jsx)("mark",{children:"desenvolvedor fullstack"})," com foco em"," ",Object(p.jsx)("mark",{children:t.jobFocus}),"."]}),Object(p.jsxs)("p",{children:["Sempre fui ",Object(p.jsx)("mark",{children:"apaixonado"})," por ",Object(p.jsx)("mark",{children:"tecnologia"}),": aprendi"," ",Object(p.jsx)("mark",{children:"programa\xe7\xe3o"})," sozinho e com ",Object(p.jsx)("mark",{children:"doze anos"})," me tornei"," ",Object(p.jsx)("a",{href:"https://be.net/jvwasquevite",target:"_blank",rel:"noreferrer",children:"programador freelancer"}),"."]}),Object(p.jsxs)("p",{children:["Atualmente, ap\xf3s anos de ",Object(p.jsx)("mark",{children:"experi\xeancia"}),", busco"," ",Object(p.jsx)("mark",{children:"novos desafios"})," e vejo na ",Object(p.jsx)("strong",{children:t.company})," ","uma ",Object(p.jsx)("mark",{children:"oportunidade"})," incr\xedvel de ",Object(p.jsx)("mark",{children:"crescimento"}),", alinhado aos meus ",Object(p.jsx)("mark",{children:"valores"})," e ",Object(p.jsx)("mark",{children:"perfil t\xe9cnico"}),"."]})]})},le=function(e){var t=e.props;return Object(p.jsxs)("div",{id:"Background",children:[Object(p.jsx)("p",{className:"sub-header",children:"Hist\xf3rico profissional"}),Object(p.jsxs)("h1",{children:["Minhas ",Object(p.jsx)("b",{children:"habilidades"})," e ",Object(p.jsx)("b",{children:"experi\xeancias"}),"."]}),Object(p.jsxs)("p",{children:["Em ",Object(p.jsx)("mark",{children:"2019"}),", no ",Object(p.jsx)("mark",{children:"primeiro semestre"}),", ingressei na"," ",Object(p.jsx)("a",{href:"http://hut8.com.br",target:"_blank",rel:"noreferrer",children:"empresa j\xfanior da faculdade"})," ","como ",Object(p.jsxs)("mark",{children:["desenvolvedor ",t.jobFocus]})," utilizando"," ",Object(p.jsx)("mark",{children:t.jobStack.join(", ")})," e outras"," ",Object(p.jsx)("mark",{children:"tecnologias"}),"."]}),Object(p.jsxs)("p",{children:["No ",Object(p.jsx)("mark",{children:"mesmo ano"})," ocupei os ",Object(p.jsx)("mark",{children:"cargos"})," de"," ",Object(p.jsx)("mark",{children:"Presidente"})," e ",Object(p.jsx)("mark",{children:"Diretor de Projetos"}),", onde liderei mais de ",Object(p.jsx)("mark",{children:"dez projetos"})," e ",Object(p.jsx)("mark",{children:"equipes"})," ao longo de"," ",Object(p.jsx)("mark",{children:"tr\xeas anos"}),"."]}),Object(p.jsxs)("p",{children:["Desde ent\xe3o, entre ",Object(p.jsx)("mark",{children:"est\xe1gios"}),", ",Object(p.jsx)("mark",{children:"projetos"})," e"," ",Object(p.jsx)("mark",{children:"empresas"})," j\xe1 trabalhei em diferentes ",Object(p.jsx)("mark",{children:"cargos"})," e"," ",Object(p.jsx)("mark",{children:"tecnologias"}),", focando os meus ",Object(p.jsx)("mark",{children:"estudos"})," na \xe1rea"," ","de ",Object(p.jsx)("mark",{children:"arquitetura"})," e ",Object(p.jsx)("mark",{children:"engenharia de software"}),"."]})]})},je=(a(154),a.p+"static/media/picture.2b513466.jpg"),be=function(e){var t=e.props;return Object(p.jsxs)("div",{id:"AboutCards",children:[Object(p.jsx)("div",{className:"speech",children:Object(p.jsxs)("p",{children:["Esse da ",Object(p.jsx)("b",{children:"foto"})," sou eu!"]})}),Object(p.jsxs)("div",{className:"container primary",children:[Object(p.jsxs)("div",{className:"picture",children:[Object(p.jsx)("img",{src:je,alt:"Jo\xe3o Wasquevite"}),Object(p.jsx)("div",{className:"speech",children:Object(p.jsxs)("p",{children:["Esse da ",Object(p.jsx)("b",{children:"foto"})," sou eu!"]})})]}),Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:"Forma\xe7\xe3o acad\xeamica"}),Object(p.jsx)("h2",{children:"Universidade Federal de Pelotas"}),Object(p.jsx)("h3",{children:"Gradua\xe7\xe3o em Ci\xeancia da Computa\xe7\xe3o"}),Object(p.jsx)("p",{className:"secondary-text",children:"Engenharia e Arquitetura de Software"})]})})]}),Object(p.jsxs)("div",{className:"container secondary",children:[Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:"\xc1rea de atua\xe7\xe3o"}),Object(p.jsxs)("h2",{children:["Fullstack com foco em ",t.jobFocus]}),Object(p.jsx)("div",{className:"stack",children:t.jobStack.map((function(e,t){return Object(p.jsx)("div",{className:"item",children:e},t)}))})]})}),Object(p.jsx)("a",{href:"https://be.net/jvwasquevite",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("div",{className:"behance",children:Object(p.jsx)("img",{src:h,alt:"Behance"})})})]}),Object(p.jsxs)("a",{href:"https://be.net/jvwasquevite",className:"button",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," Acessar Behance"]})]})},he=(a(155),function(e){var t=e.props,a=Object(c.useState)(!1),r=Object(g.a)(a,2),s=r[0],n=r[1];return Object(c.useEffect)((function(){n(!0)}),[n]),Object(p.jsxs)("div",{id:"Skills",children:[Object(p.jsx)("div",{className:"speech",children:Object(p.jsxs)("p",{children:["As ",Object(p.jsx)("b",{children:"skills"})," que achei mais ",Object(p.jsx)("b",{children:"pertinente"}),"."]})}),t.jobSkills.map((function(e,t){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{className:"sub-header",children:e.area}),Object(p.jsx)("h3",{children:e.stack}),Object(p.jsx)("p",{className:"secondary-text",children:e.description})]}),Object(p.jsx)("div",{className:"bar",style:s?{width:"".concat(e.level)}:null})]},t)})),Object(p.jsxs)("a",{href:"https://www.linkedin.com/in/jvwasquevite/",className:"button",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("hr",{})," Mais no LinkedIn"]})]})}),ue=function(){return Object(p.jsxs)("div",{id:"Repositories",children:[Object(p.jsx)("p",{className:"sub-header",children:"Reposit\xf3rios"}),Object(p.jsxs)("h1",{children:["Alguns dos ",Object(p.jsx)("b",{children:"projetos"})," que me ",Object(p.jsx)("b",{children:"orgulho"}),"."]}),Object(p.jsxs)("p",{children:["Ao longo da minha ",Object(p.jsx)("mark",{children:"trajet\xf3ria profissional"}),", descobri na"," ",Object(p.jsx)("mark",{children:"pr\xe1tica"})," o poder da ",Object(p.jsx)("mark",{children:"tecnologia"})," para resolver"," ",Object(p.jsx)("mark",{children:"problemas reais"}),"."]}),Object(p.jsxs)("p",{children:["Durante a ",Object(p.jsx)("mark",{children:"gradua\xe7\xe3o"}),", participei ativamente na"," ",Object(p.jsx)("mark",{children:"cria\xe7\xe3o"})," de in\xfameras ",Object(p.jsx)("mark",{children:"startups"})," de"," ",Object(p.jsx)("mark",{children:"vi\xe9s tecnol\xf3gico"})," vinculadas ao"," ",Object(p.jsx)("a",{href:"https://pelotasparquetecnologico.com.br",target:"_blank",rel:"noreferrer",children:"Parque Tecnol\xf3gico de Pelotas"})," ","e a incubadora"," ",Object(p.jsx)("a",{href:"https://wp.ufpel.edu.br/conectar",target:"_blank",rel:"noreferrer",children:"Conectar"}),"."]}),Object(p.jsxs)("p",{children:["Dessa forma, selecionei alguns ",Object(p.jsx)("mark",{children:"reposit\xf3rios"})," do"," ",Object(p.jsx)("a",{href:"https://github.com/jvwasquevite",target:"_blank",rel:"noreferrer",children:"GitHub"})," ","de ",Object(p.jsx)("mark",{children:"projetos p\xfablicos"})," que trabalhei ao longo dos"," ",Object(p.jsx)("mark",{children:"\xfaltimos anos"}),"."]})]})},me=(a(156),function(e){var t=e.props,a="";return t.name&&(a=t.name.toLowerCase().split(" "),t.name=a.map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")),Object(p.jsxs)("div",{id:"Finals",children:[Object(p.jsx)("p",{className:"sub-header",children:"Considera\xe7\xf5es finais"}),Object(p.jsxs)("h1",{children:["E a\xed",Object(p.jsx)("b",{children:t.name&&" "+t.name}),", ser\xe1 que ",Object(p.jsx)("b",{children:"deu match"}),"?"]}),Object(d.a)(t.finals),Object(p.jsx)(x,{})]})}),pe=function(){var e=Object(o.f)().company,t=Object(c.useState)([]),a=Object(g.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)([]),i=Object(g.a)(n,2),d=i[0],l=i[1];Object(c.useEffect)((function(){Z(e).then((function(e){s(e),l(e.applications)})).catch((function(e){console.error(e),window.location.replace("/")}))}),[e]);var j=Object(c.useState)(""),b=Object(g.a)(j,2),h=b[0],u=b[1],m=Object(c.useState)(0),O=Object(g.a)(m,2),x=O[0],f=O[1],v=function(){x<N.length-1&&f(x+1)},k=function(){x>0&&f(x-1)},N=[{aside:Object(p.jsx)(ne,{props:{company:r.companyName,multipleApplications:r.multipleApplications}}),main:Object(p.jsx)(ie,{props:{logo:r.logo,applications:d}})},{aside:Object(p.jsx)(de,{props:{name:h,jobFocus:r.jobFocus,company:r.companyName}}),main:Object(p.jsx)(be,{props:{jobFocus:r.jobFocus,jobStack:r.jobStack}})},{aside:Object(p.jsx)(le,{props:{jobFocus:r.jobFocus,jobStack:r.jobStack}}),main:Object(p.jsx)(he,{props:{jobSkills:r.jobSkills}})},{aside:Object(p.jsx)(ue,{}),main:Object(p.jsx)(re,{})},{aside:Object(p.jsx)(me,{props:{name:h,finals:r.finals}}),main:Object(p.jsx)(ee,{})}];return Object(p.jsxs)("main",{id:"Job",children:[Object(p.jsxs)("aside",{children:[N[x].aside,Object(p.jsx)(oe,{className:"desktop",props:{handlePrevClick:k,handleNextClick:v,name:h,setName:u,currentIndex:x,setCurrentIndex:f,length:N.length}})]}),Object(p.jsxs)("main",{children:[N[x].main,Object(p.jsx)(oe,{className:"mobile",props:{handlePrevClick:k,handleNextClick:v,name:h,setName:u,currentIndex:x,setCurrentIndex:f,length:N.length}})]})]})},Oe=function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:se}),Object(p.jsx)(o.a,{path:"/vagas/:company",component:pe})]})})},xe=a(59),fe=a(84),ve=a(40),ge=a.p+"static/media/ufpel.5e9644b4.webp",ke=a.p+"static/media/hut8.e463aa66.webp",Ne={resources:{pt:{translation:{head:{subheader:"Sobre mim",header:"Prazer, sou o <b>Jo\xe3o</b>.",content:"<mark>Cientista da Computa\xe7\xe3o</mark> pela Universidade Federal de Pelotas.\n      <mark>Desenvolvedor fullstack</mark> estudando <mark>engenharia de software</mark> no tempo livre.\n      Apaixonado por ci\xeancia de dados, inova\xe7\xe3o tecnol\xf3gica, empreendedorismo e\n      processos criativos: desde o design at\xe9 a programa\xe7\xe3o.",menu:[{path:"Resume",name:"Resumo"},{path:"Skills",name:"Skills"},{path:"Portfolio",name:"Portf\xf3lio"},{path:"Projects",name:"Projetos"},{path:"Articles",name:"Artigos"},{path:"Contact",name:"Contato"}]},resume:{main:[{subheader:"Forma\xe7\xe3o acad\xeamica",header:"Universidade Federal de Pelotas",description:"Gradua\xe7\xe3o em Ci\xeancia da Computa\xe7\xe3o",secondarytext:"Engenharia e Arquitetura de Software",image:"".concat(ge)},{subheader:"Experi\xeancia",header:"Empresa J\xfanior Hut8",description:"Desenvolvedor web fullstack",secondarytext:"Presidente e Diretor de Projetos",image:"".concat(ke)}],secondary:[{subheader:"Experi\xeancia",header:"Engenheiro de Software",secondarytext:"Arquitetura e escabilidade"},{subheader:"Certificado",header:"Cambridge English Certificate",secondarytext:"Cambridge Assessment English"}],button:"Mais no LinkedIn"},skills:{content:[{subheader:"Frontend",header:"React e Vue.js + TypeScript",secondarytext:"Intermedi\xe1rio a avan\xe7ado",level:"80%"},{subheader:"Backend",header:"Node.js + TypeScript",secondarytext:"Intermedi\xe1rio a avan\xe7ado",level:"90%"},{subheader:"Engenharia de Software",header:"Software Architect, Product Manager e Scrum Master",secondarytext:"Avan\xe7ado",level:"98%"},{subheader:"Design UI/UX",header:"UX Designer com Figma",secondarytext:"Intermedi\xe1rio a avan\xe7ado",level:"70%"}],other:"<b>Outras habilidades:</b> IA e Machine Learning com Python, Landing Pages em Wordpress, Inbound Marketing,\n      Copywriting e SEO."},portfolio:{integration:'Integrado com o <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noreferrer">Cloud Firestore</a>',button:{name:"Mais no Behance",url:"https://www.behance.net/jvwasquevite"}},projects:{integration:'Integrado com a <a href="https://docs.github.com/pt/rest" target="_blank" rel="noreferrer">API do GitHub</a>',button:{name:"Mais no Github",url:"https://github.com/jvwasquevite"}},articles:{integration:'Integrado com a <a href="https://github.com/Medium/medium-api-docs" target="_blank" rel="noreferrer">API do Medium</a>',button:{name:"Mais no Medium",url:"https://medium.com/@jvwasquevite"}},contact:{subheader:"Fale comigo",header:"Vamos <b>conversar</b>?",content:[{subheader:"Meu WhatsApp",header:"+55 51 9 9527 0276"},{subheader:"Meu Email",header:"jvwasquevite@gmail.com"},{subheader:"Em algum lugar entre",header:"Alegrete e Pelotas/RS"}],button:{name:"Ver curr\xedculo em PDF",url:"/curriculo.pdf"}},foot:{text:'Feito com <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">React</a>, muito caf\xe9 e paci\xeancia.',links:[{name:"Ver c\xf3digo fonte no GitHub",url:"https://github.com/jvwasquevite/portfolio"},{name:"Ver layout no Figma",url:"https://www.figma.com/file/pMUBIGLHYHFXXrlWafPH3v/jvwasquevite"}]}}},en:{translation:{head:{subheader:"About me",header:"What's up? I'm <b>Jo\xe3o</b>.",content:"<mark>Computer Scientist Bachelor</mark> at Federal University of Pelotas.\n      <mark>Fullstack developer</mark> studying <mark>software engineering</mark> in free time.\n      Passionate about data science, technological innovation, entrepreneurship and\n      creative processes: from design to programming.",menu:[{path:"Resume",name:"Resume"},{path:"Skills",name:"Skills"},{path:"Portfolio",name:"Portfolio"},{path:"Projects",name:"Projects"},{path:"Articles",name:"Articles"},{path:"Contact",name:"Contact"}]},resume:{main:[{subheader:"Academic Background",header:"Federal University of Pelotas",description:"Graduation in Computer Science",secondarytext:"Software engineering and architecture",image:"".concat(ge)},{subheader:"Experience",header:"Hut8 Junior Enterprise",description:"Fullstack web developer",secondarytext:"President and Project Diretor",image:"".concat(ke)}],secondary:[{subheader:"Experience",header:"Software engineer",secondarytext:"Architecture and scalability"},{subheader:"Certified",header:"Cambridge English Certificate",secondarytext:"Cambridge Assessment English"}],button:"More on LinkedIn"},skills:{content:[{subheader:"Frontend",header:"React and Vue.js + TypeScript",secondarytext:"Intermediate to advanced",level:"80%"},{subheader:"Backend",header:"Node.js + TypeScript",secondarytext:"Intermediate to advanced",level:"90%"},{subheader:"Software engineering",header:"Software Architect, Product Manager e Scrum Master",secondarytext:"Advanced",level:"98%"},{subheader:"UI/UX Design",header:"UX Designer with Figma",secondarytext:"Intermediate to advanced",level:"70%"}],other:"<b>Other skills:</b> IA and Machine Learning with Python, Landing Pages with Wordpress, Inbound Marketing, Copywriting e SEO."},portfolio:{integration:'Integrated with <a href="https://firebase.google.com/docs/firestore" target="_blank" rel="noreferrer">Cloud Firestore</a>',button:{name:"More on Behance",url:"https://www.behance.net/jvwasquevite"}},projects:{integration:'Integrated with <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer">GitHub API</a>',button:{name:"More on GitHub",url:"https://github.com/jvwasquevite"}},articles:{integration:'Integrated with <a href="https://github.com/Medium/medium-api-docs" target="_blank" rel="noreferrer">Medium API</a>',button:{name:"More on Medium",url:"https://medium.com/@jvwasquevite"}},contact:{subheader:"Talk to me",header:"Let's <b>talk</b>?",content:[{subheader:"My WhatsApp",header:"+55 51 9 9527 0276"},{subheader:"My Email",header:"jvwasquevite@gmail.com"},{subheader:"Somewhere between",header:"Alegrete and Pelotas/RS"}],button:{name:"View resume in PDF",url:"/curriculo.pdf"}},foot:{text:'Made with <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">React</a>, lots of coffee and patience.',links:[{name:"View source code on GitHub",url:"https://github.com/jvwasquevite/portfolio"},{name:"See layout on Figma",url:"https://www.figma.com/file/pMUBIGLHYHFXXrlWafPH3v/jvwasquevite"}]}}}},fallbackLng:"pt"};xe.a.use(ve.e).use(fe.a).init(Ne);xe.a,a(159);var we=function(){return Object(p.jsx)(Oe,{})};n.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(we,{})}),document.getElementById("root"))},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[160,1,2]]]);
//# sourceMappingURL=main.4e9dc0f1.chunk.js.map