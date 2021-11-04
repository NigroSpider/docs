"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9575],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87469:function(e,n,t){t.d(n,{YS:function(){return o},SM:function(){return c},Yb:function(){return p},aj:function(){return g},rt:function(){return h},Ut:function(){return b},PZ:function(){return v},p2:function(){return y}});t(83117),t(80102),t(67294);var r=t(3905),i=t(80907),a=function(){return(0,i.zu)().path},o=function(e){var n=e.title,t=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,n),(0,r.kt)("p",null,t))},c=function(e){var n=e.children,t=e.href;return(0,r.kt)("a",{class:"reference-link",href:t.startsWith("http")?t:a()+"/"+t},n,(0,r.kt)("span",null,t))},s=function(e,n){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:n}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,n){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(n||e.toLowerCase())},e)},d=function(e,n){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(n||e.toLowerCase())},e)},p=function(e){var n=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+n.toLowerCase(),title:n+" Enum (number)"},n)},f=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},v={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Item:function(){return d("Item")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},y={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},22890:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return f}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=t(87469),c=["components"],s={description:"Informationen auf dem Bildschirm des Players anzeigen",sidebar_position:5,tags:["scripting","ui"]},u="User Interface",l={unversionedId:"core-concepts/scripting/user-interface",id:"core-concepts/scripting/user-interface",isDocsHomePage:!1,title:"User Interface",description:"Informationen auf dem Bildschirm des Players anzeigen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/user-interface.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/user-interface",permalink:"/de/docs/next/core-concepts/scripting/user-interface",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/user-interface.mdx",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"},{label:"ui",permalink:"/de/docs/next/tags/ui"}],version:"current",sidebarPosition:5,frontMatter:{description:"Informationen auf dem Bildschirm des Players anzeigen",sidebar_position:5,tags:["scripting","ui"]},sidebar:"main",previous:{title:"Entit\xe4tswerte",permalink:"/de/docs/next/core-concepts/scripting/entity-values"},next:{title:"K\xfcnstliche Intelligenz",permalink:"/de/docs/next/core-concepts/scripting/artificial-intelligence"}},d=[{value:"WebUI",id:"webui",children:[{value:"Grundlegendes WebUI-Setup",id:"grundlegendes-webui-setup",children:[],level:3}],level:2},{value:"Leinwand",id:"leinwand",children:[],level:2}],p={toc:d};function f(e){var n=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-interface"},"User Interface"),(0,a.kt)("p",null,"Wie man Informationen im Bildschirm f\xfcr den Spieler anzeigt."),(0,a.kt)("p",null,"In der Nano-Welt gibt es 2 offizielle Wege zum Plotten von Bildschirmdaten: ",(0,a.kt)("strong",{parentName:"p"},"WebUI")," und Render ",(0,a.kt)("strong",{parentName:"p"},"Leinwand"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Obwohl wir sehr empfehlen, ",(0,a.kt)("strong",{parentName:"p"},"WebUI"),"zu verwenden, wird die Verwendung von RenderCanvas immer noch unterst\xfctzt, aber veraltet."))),(0,a.kt)("h2",{id:"webui"},"WebUI"),(0,a.kt)("p",null,"Mit WebUI k\xf6nnen Sie HTML-Seiten laden, die mit Ihren Paketen in Lua mit Events integriert werden."),(0,a.kt)("h3",{id:"grundlegendes-webui-setup"},"Grundlegendes WebUI-Setup"),(0,a.kt)("p",null,"Dieser Beispielcode zeigt, wie man eine grundlegende Seite mit HTML+JavaScript in die WebUI-Klasse einf\xfcgt."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Der gesamte WebUI-Code l\xe4uft auf der Client-Seite!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawnt ein WebUI mit der HTML-Datei, die Sie gerade erstellt haben\nMyUI = WebUI("Meine UI", "file:///UI/index. tml")\n\n-- Wenn das HTML bereit ist, l\xf6st dort ein Ereignis\nMyUI:Subscribe("Ready", function()\n    MyUI:CallEvent("MyAwesomeEvent", "Hallo! Du bist bereit!")\nend)\n\nMyUI:Subscribe("MyAwesomeAnswer", function(param1)\n    Package.Log("Antwort erhalten! Nachricht: " .. param1)\nEnde)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        <script src="index.js"><\/script>\n    </head>\n    <body>\n        Hallo Welt!\n    </body>\n</html>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Registrieren f\xfcr "MyAwesomeEvent" von Lua\nEvents.Subscribe("MyAwesomeEvent", function(param1) {\n    console.log("Triggered! " + param1);\n\n    // Trigger "MyAwesomeAnswer" auf Lua\n    Events.Call("MyAwesomeAnswer", "Hallo!");\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WebUI-Ergebnisse",src:t(36864).Z})),(0,a.kt)("p",null,"Dies wird ausgegeben:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[WebUI]  Ausgel\xf6st! Hallo! Du bist bereit!\n[Script] Antwort erhalten! Nachricht: Hey da!\n")),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"Basic HUD (HTML)"),(0,a.kt)("h2",{id:"leinwand"},"Leinwand"),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-canvas",mdxType:"ReferenceLink"},"Basic HUD (Canvas)"))}f.isMDXComponent=!0},36864:function(e,n,t){n.Z=t.p+"assets/images/user-interface-7e95b34bf99d9b0891c7fd3a8d9fc278.jpg"}}]);