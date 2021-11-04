"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7954],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66063:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],s={description:"Alles, was Sie wissen m\xfcssen, um zwischen verschiedenen Paketen zu kommunizieren",sidebar_position:3,tags:["scripting"]},l="Paketkommunikation",c={unversionedId:"core-concepts/scripting/communicating-between-packages",id:"version-latest/core-concepts/scripting/communicating-between-packages",isDocsHomePage:!1,title:"Paketkommunikation",description:"Alles, was Sie wissen m\xfcssen, um zwischen verschiedenen Paketen zu kommunizieren",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/communicating-between-packages.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/communicating-between-packages",permalink:"/de/docs/core-concepts/scripting/communicating-between-packages",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/communicating-between-packages.md",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"}],version:"latest",sidebarPosition:3,frontMatter:{description:"Alles, was Sie wissen m\xfcssen, um zwischen verschiedenen Paketen zu kommunizieren",sidebar_position:3,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Beh\xf6rdenkonzepte",permalink:"/de/docs/core-concepts/scripting/authority-concepts"},next:{title:"Entit\xe4tswerte",permalink:"/de/docs/core-concepts/scripting/entity-values"}},d=[{value:"Eigene Ereignisse",id:"eigene-ereignisse",children:[{value:"Kommunikation mit Paketen auf der gleichen Seite",id:"kommunikation-mit-paketen-auf-der-gleichen-seite",children:[],level:3},{value:"Daten werden \xfcber das Netzwerk gesendet",id:"daten-werden-\xfcber-das-netzwerk-gesendet",children:[],level:3}],level:2},{value:"Pakete exportierte Funktionen",id:"pakete-exportierte-funktionen",children:[{value:"Exportieren einer Funktion",id:"exportieren-einer-funktion",children:[],level:3},{value:"Eine Exportierte Funktion aus einem anderen Paket aufrufen",id:"eine-exportierte-funktion-aus-einem-anderen-paket-aufrufen",children:[],level:3}],level:2},{value:"Anforderungspaket des Pakets verwenden",id:"anforderungspaket-des-pakets-verwenden",children:[{value:"Ausgang",id:"ausgang",children:[],level:4}],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"paketkommunikation"},"Paketkommunikation"),(0,i.kt)("p",null,"Alles, was Sie wissen m\xfcssen, um zwischen verschiedenen Paketen zu kommunizieren"),(0,i.kt)("p",null,"In der nanos Welt gibt es 3 Hauptwege, die Sie mit anderen ",(0,i.kt)("strong",{parentName:"p"},"Paketen interagieren k\xf6nnen"),". Auf dieser Seite werden wir Ihnen detailliert erkl\xe4ren, wie Sie dies tun k\xf6nnen."),(0,i.kt)("h2",{id:"eigene-ereignisse"},"Eigene Ereignisse"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Weitere Informationen und Beispiele zur Verwendung benutzerdefinierter Events finden Sie unter Veranstaltungen ."))),(0,i.kt)("h3",{id:"kommunikation-mit-paketen-auf-der-gleichen-seite"},"Kommunikation mit Paketen auf der gleichen Seite"),(0,i.kt)("p",null,"Benutzerdefinierte Ereignisse sind der einfachere Weg, Daten oder Informationen an andere Pakete zu senden:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'local my_parameter1 = 123\nlocal my_parameter2 = "halllo"\nlocal my_parameter3 = { important_stuff = "omg!" }\n\nEvents.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)\n    Package.Log("Empfangen" .. parameter1) -- 123\n    Package.Log("Empfangen" .. parameter2) -- Hallo dort\n    Package.Log("Empfangen" .. parameter3) -- Empfangene Tabelle\nend)\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Hinweis:")," Aufrufetermine l\xf6sen das Ereignis in allen Paketen aus."))),(0,i.kt)("h3",{id:"daten-werden-\xfcber-das-netzwerk-gesendet"},"Daten werden \xfcber das Netzwerk gesendet"),(0,i.kt)("p",null,"Das Senden von Informationen \xfcber das Netzwerk unterscheidet sich nicht vom Senden auf derselben Seite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_parameter1 = "coole Daten aus dem Netzwerk"\n\n-- Rufe dieses Ereignis an alle Spieler\nEvents. roadcastRemote("GetThisFromServer", my_parameter1)\n\nlocal player_02 = GetPlayerSomehow()\n\n-- Oder rufen Sie dieses Ereignis an einen bestimmten Spieler\nEvents.CallRemote("GetThisFromServer", player_02, my_parameter1)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)\n    Package.Log("Empfangen" .. parameter1) -- Erhaltene coole Daten vom Netzwerk\nEnde)\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Hinweis:")," Das Aufrufen von Netzwerk-Events l\xf6st das Ereignis in allen Paketen von der anderen Seite aus."))),(0,i.kt)("h2",{id:"pakete-exportierte-funktionen"},"Pakete exportierte Funktionen"),(0,i.kt)("p",null,"Eine andere M\xf6glichkeit der Kommunikation ist die Verwendung von Exportierten Funktionen. Mit Exportierten Funktionen k\xf6nnen Sie Funktionen in Ihrem Paket definieren, die von jedem anderen Paket aufgerufen werden k\xf6nnen und einen Wert zur\xfcckgegeben bekommen."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Im Gegensatz zu Ereignissen k\xf6nnen exportierte Funktionen Werte an den Anrufer zur\xfcckgeben. Sie k\xf6nnen aber nur Exportierte Funktionen von der gleichen Seite ","(","Server oder Client",")"," aufrufen."))),(0,i.kt)("h3",{id:"exportieren-einer-funktion"},"Exportieren einer Funktion"),(0,i.kt)("p",null,"F\xfcr den Export von Funktionen verwenden Sie die ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.Export()")," Methode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'-- Definiert eine Funktion, die Sie exportieren wollen\nFunktion SpawnCoolWeapon(Position, Rotation)\n    lokale cool_weapon = Waff(Position oder Vector(), Rotation oder Rotator(), ...)\n    return cool_weapon\nend\n\n-- Exportiert die Funktion, die von anderen Paketen aufgerufen werden soll \nPackage.Export("SpawnCoolWeapon", SpawnCoolWeapon)\n')),(0,i.kt)("h3",{id:"eine-exportierte-funktion-aus-einem-anderen-paket-aufrufen"},"Eine Exportierte Funktion aus einem anderen Paket aufrufen"),(0,i.kt)("p",null,"F\xfcr den Aufruf einer Funktion, die von einem anderen Paket exportiert wird, verwenden Sie die ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.Call()")," Methode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'-- Ruft die exportierte Funktion\nlokale cool_weapon = Package.Call("PackageOne","SpawnCoolWeapon", Vector(), Rotator()) auf\n')),(0,i.kt)("h2",{id:"anforderungspaket-des-pakets-verwenden"},"Anforderungspaket des Pakets verwenden"),(0,i.kt)("p",null,"Die letzte M\xf6glichkeit, zwischen den Paketen zu kommunizieren, ist das Laden anderer Pakete innerhalb des aktuellen Pakets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'Package.Log("Hallo von Paket Eins!")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Package.RequirePackage("PackageOne")\n\nPackage.Log("Hallo aus Two!")\n')),(0,i.kt)("h4",{id:"ausgang"},"Ausgang"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hallo vom ersten Paket!\nHallo vom Paket Two!\n")),(0,i.kt)("p",null,"This will load the file Index.lua from PackageOne into the VM of PackageOne where you called ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.RequirePackage()"),"."),(0,i.kt)("p",null,"Also the Required Package will be sent to the clients, then you can ",(0,i.kt)("inlineCode",{parentName:"p"},"RequirePackage")," in the client side too."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To be able to ",(0,i.kt)("inlineCode",{parentName:"p"},"RequirePackage")," in the Client, you must first ",(0,i.kt)("inlineCode",{parentName:"p"},"RequirePackage")," it in the Server, so it can be loaded and sent to Clients."))))}m.isMDXComponent=!0}}]);