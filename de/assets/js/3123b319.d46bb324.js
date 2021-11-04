"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4628],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},61803:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],l={description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},s="Module",c={unversionedId:"core-concepts/modules",id:"version-latest/core-concepts/modules",isDocsHomePage:!1,title:"Module",description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/de/docs/core-concepts/modules",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/modules.md",tags:[],version:"latest",frontMatter:{description:"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"},sidebar:"version-latest/main",previous:{title:"Assets",permalink:"/de/docs/core-concepts/assets"},next:{title:"Server & Client Lebenszyklus",permalink:"/de/docs/core-concepts/server-and-client-lifecycle"}},d=[{value:"Liste der unterst\xfctzten Module",id:"liste-der-unterst\xfctzten-module",children:[{value:"LuaSQL-MySQL",id:"luasql-mysql",children:[{value:"Installation &amp; wird heruntergeladen",id:"installation--wird-heruntergeladen",children:[],level:4},{value:"Verwendungsbeispiel",id:"verwendungsbeispiel",children:[],level:4}],level:3}],level:2}],u={toc:d};function p(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"module"},"Module"),(0,a.kt)("p",null,"Erweiterung der Funktionalit\xe4ten der nanos world Scripting API"),(0,a.kt)("p",null,"Module erlauben es Ihnen, die Funktionalit\xe4t der nanos world scripting API auf der Serverseite zu erweitern. Derzeit werden nur C-Module unterst\xfctzt."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Beachten Sie, dass dieser Teil der Skripting-API derzeit in Arbeit ist und sich jederzeit \xe4ndern kann."))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Eine Anleitung zum Erstellen Ihres eigenen Moduls folgt ","(","soonTM",")","."))),(0,a.kt)("h2",{id:"liste-der-unterst\xfctzten-module"},"Liste der unterst\xfctzten Module"),(0,a.kt)("h3",{id:"luasql-mysql"},"LuaSQL-MySQL"),(0,a.kt)("p",null,"LuaSQL-MySQL ist eine einfache Schnittstelle zur Kommunikation mit einem MySQL- oder MariaDB-Server. Wir stellen eine bereits vorkompilierte Version dieses Moduls zur Verf\xfcgung, die bereits verwendet werden kann."),(0,a.kt)("p",null,"Documentation of LuaSQL: ",(0,a.kt)("a",{parentName:"p",href:"http://keplerproject.github.io/luasql/"},"http://keplerproject.github.io/luasql/")),(0,a.kt)("h4",{id:"installation--wird-heruntergeladen"},"Installation & wird heruntergeladen"),(0,a.kt)("p",null,"Laden Sie Ihre Plattform-Bibliothek herunter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_windows.zip"},"mysql","_","windows.zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/luasql-mysql/releases/latest/download/mysql_linux.zip"},"mysql","_","linux.zip"))),(0,a.kt)("p",null,"Entpacken Sie es in Ihren ",(0,a.kt)("inlineCode",{parentName:"p"},"ServerRoot/Module/")," Ordner:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(51866).Z})),(0,a.kt)("h4",{id:"verwendungsbeispiel"},"Verwendungsbeispiel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local luasql = require("luasql.mysql")\nlocal mysql = luasql. ysql()\nlocal connection = mysql:connect("database", "username", "password", "localhost", 3306)\n\nif not connection or not connection:ping() then\n    Package. og("Verbindung fehlgeschlagen")\nelse\n    connection:execute([[\n        CREATE TABLE hello_world(\n            message varchar(50)\n        );\n    ]])\n\n    Verbindung:execute(string. ormat([[\n        INSERT INTO hello_world VALUES (\'%s\');\n    ]], connection:escape("Hallo nanos. orld")))\n    -- (Du solltest immer Escapes f\xfcr Benutzereingaben verwenden, um eine SQL-Injektion zu verhindern!)\n\n    local cursor = connection:execute("SELECT * FROM hello_world")\n    local row = cursor:fetch({}, "a")\n\n    Package.Log("Message: " .. tostring(row.message))\n    -- Ausgabe: "[Script]   Nachricht: Hallo nanos.world" an der Konsole\nenden\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Tipp:")," Alle Abfrageparameter immer mit ",(0,a.kt)("inlineCode",{parentName:"p"},":escape")," Funktion maskieren!"))))}p.isMDXComponent=!0},51866:function(e,n,t){n.Z=t.p+"assets/images/modules-a25effa36422cdf3462df383e35e4b9f.jpg"}}]);