"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6840],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),c=n,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||s;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66034:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=r(83117),n=r(80102),s=(r(67294),r(3905)),i=["components"],o={description:"Tout ce que vous devez savoir pour configurer votre serveur !",sidebar_position:2,tags:["hosting"]},l="Configuration du serveur",d={unversionedId:"core-concepts/server-manual/server-configuration",id:"core-concepts/server-manual/server-configuration",isDocsHomePage:!1,title:"Configuration du serveur",description:"Tout ce que vous devez savoir pour configurer votre serveur !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/fr/docs/next/core-concepts/server-manual/server-configuration",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-configuration.md",tags:[{label:"hosting",permalink:"/fr/docs/next/tags/hosting"}],version:"current",sidebarPosition:2,frontMatter:{description:"Tout ce que vous devez savoir pour configurer votre serveur !",sidebar_position:2,tags:["hosting"]},sidebar:"main",previous:{title:"Installation du serveur",permalink:"/fr/docs/next/core-concepts/server-manual/server-installation"},next:{title:"Command Line Interface",permalink:"/fr/docs/next/core-concepts/server-manual/nanos-world-cli"}},p=[{value:"Fichier de configuration du serveur",id:"fichier-de-configuration-du-serveur",children:[{value:"Settings Detailed",id:"settings-detailed",children:[],level:3}],level:2},{value:"Map &amp; Niveau",id:"map--niveau",children:[],level:2},{value:"Console du serveur",id:"console-du-serveur",children:[{value:"Commandes int\xe9gr\xe9es",id:"commandes-int\xe9gr\xe9es",children:[],level:3},{value:"Commandes personnalis\xe9es",id:"commandes-personnalis\xe9es",children:[],level:3}],level:2},{value:"Param\xe8tres de ligne de commande",id:"param\xe8tres-de-ligne-de-commande",children:[],level:2},{value:"Messages/Avertissements/Erreurs communes et leur sens",id:"messagesavertissementserreurs-communes-et-leur-sens",children:[{value:"<code>Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms.</code>",id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms",children:[],level:4}],level:2}],m={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration-du-serveur"},"Configuration du serveur"),(0,s.kt)("p",null,"Tout ce que vous devez savoir pour configurer votre serveur !"),(0,s.kt)("h2",{id:"fichier-de-configuration-du-serveur"},"Fichier de configuration du serveur"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Les fichiers de configuration de nanos world utilisent ",(0,s.kt)("strong",{parentName:"p"},"TOML")," ","(","Tom\u2019s Obvious, Minimal Language",")",", se r\xe9f\xe9rer \xe0 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"https://github.com/toml-lang/toml")," pour la syntaxe ou plus d'informations."))),(0,s.kt)("p",null,"Le fichier de configuration du serveur ",(0,s.kt)("inlineCode",{parentName:"p"},"Config.toml")," est g\xe9n\xe9r\xe9 automatiquement lorsque le serveur est lanc\xe9 pour la premi\xe8re fois. Ce fichier sera toujours remplac\xe9 par le bon mod\xe8le apr\xe8s le chargement du serveur."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Server.toml"',title:'"Server.toml"'},'# configuration du serveur\n[server]\n    # nom du serveur\n    name =                  "nanos world Server"\n    # description du serveur (maximum 250 caract\xe8res)\n    description =           ""\n    # l\'URL du logo du serveur (recommended size: 150x75)\n    logo =                  "https://i.imgur.com/U1rZp5v.png"\n    # joueurs max\n    max_players =           60\n    # laissez-le vide pour ne pas avoir de mot de passe\n    password =              ""\n    # IP du serveur. Nous recommandons de laisser 0.0.0.0 par d\xe9faut.\n    ip =                    "0.0.0.0"\n    # port du serveur (redirection TCP et UDP n\xe9cessaire)\n    port =                  7777\n    # port de requ\xeate (transfert UDP n\xe9cessaire)\n    query_port =        7778\n    # voir le serveur dans la liste globale\n    announce =              true\n    # tickrate du serveur en millisecondes (dangereux ! cela peut affecter les performances du serveur et du client. 33 ms signifie 30 ticks par second, il s\'agit de la valeur recommand\xe9e par d\xe9faut. (1) normal - (2) debug - (3) verbose\n    log_level =             2\n\n# configurations de nanos world\n[world]\n    # package game-mode \xe0 charger (d\xe9finir le package game-mode principal \xe0 charger - vous pouvez charger qu\'un seul package game-mode \xe0 la fois)\n    game_mode =             ""\n    # package loading-screen \xe0 charger (l\'\xe9cran de chargement sera affich\xe9 quand les joueurs rejoindront votre serveur)\n    loading_screen =        ""\n    # liste des packages script (laisser vide pour charger tous les packages, c\'est souvent utile quand vous avez beaucoup de packages et que vous voulez seulement en charger certains)\n    packages = [\n\n    ]\n    # liste de packs d\'assets (cela va additionnellement charger les packs d\'assets que vous d\xe9finissez ici)\n    assets = [\n\n    ]\n    # map de d\xe9marrage par d\xe9faut\n    map =                   "nanos-world::BlankMap"\n    # IPs bannies\n    banned_ips = [\n\n    ]\n')),(0,s.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"name"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Nom du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"description"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Description du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"logo"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"URL de l'image qui sera affich\xe9e dans la liste des serveurs")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"max_players"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Nombre maximum de joueurs autoris\xe9s \xe0 rejoindre")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"password"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Mot de passe pour se connecter")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"ip"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"IP du serveur. Nous recommandons de laisser vide")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"port"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Port principal du serveur et port HTTP (UDP/TCP)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"query_port"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Server query Port (UDP)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"announce"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Afficher ou non dans la liste des serveurs")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"tick_rate"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Fr\xe9quence de ticks en ms. Nous recommandons de laisser \xe0 33")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"log_level"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Quel niveau de log afficher")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"game_mode"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Package ",(0,s.kt)("a",{parentName:"td",href:"/fr/docs/next/core-concepts/packages/packages#package-types"},"game-mode")," \xe0 charger - vous pouvez seulement charger un game-mode \xe0 la fois.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"loading_screen"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Package ",(0,s.kt)("a",{parentName:"td",href:"/fr/docs/next/core-concepts/packages/loading-screen"},"loading-screen")," \xe0 charger - vous pouvez seulement charger un loading-screen \xe0 la fois.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"packages"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Packages ",(0,s.kt)("a",{parentName:"td",href:"/fr/docs/next/core-concepts/packages/packages#package-types"},"script")," \xe0 charger")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Assets additionnels \xe0 charger")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"map"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Quelle map charger")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"banned_ips"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste des IPs bannies")))),(0,s.kt)("h2",{id:"map--niveau"},"Map & Niveau"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(13881).Z})),(0,s.kt)("p",null,"La Map ","(","ou Niveau",")"," est d\xe9finie dans le fichier de configuration du serveur, cette map sera charg\xe9e quand le joueur rejoindra le serveur. Elle peut \xeatre int\xe9gr\xe9e au serveur ou \xeatre contenue dans un asset pr\xe9sent dans le dossier ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets"),"."),(0,s.kt)("p",null,"nanos world compte ","(","actuellement",")"," 2 maps int\xe9gr\xe9es : ",(0,s.kt)("inlineCode",{parentName:"p"},"nanos-world::BlankMap")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"nanos-world::TestingMap")," qui peuvent \xeatre utilis\xe9es dans votre serveur sans devoir t\xe9l\xe9charger un pack d'Assets."),(0,s.kt)("h2",{id:"console-du-serveur"},"Console du serveur"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(92387).Z})),(0,s.kt)("h3",{id:"commandes-int\xe9gr\xe9es"},"Commandes int\xe9gr\xe9es"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Commande"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"chat [message]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Envoie un message dans le chat")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"map [map_path]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Changes the Map, reloads all Packages and reconnect all Players")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"stop")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Arr\xeate le serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"package run [package_name] [lua_code]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Ex\xe9cute du code dans un package")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"package reload [package_name]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Recharge un package")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"package reload all")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Recharge tous les packages")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"package unload [package_name]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Arr\xeate un package")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"package load [package_name]")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Charge un package")))),(0,s.kt)("h3",{id:"commandes-personnalis\xe9es"},"Commandes personnalis\xe9es"),(0,s.kt)("p",null,"Toutes les commandes ","(","non int\xe9gr\xe9es",")"," seront envoy\xe9es dans un \xe9v\xe8nement c\xf4t\xe9 serveur :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.Subscribe("Console", function(my_input)\n    Package.Log("Console command received: " .. my_input)\nend)\n')),(0,s.kt)("h2",{id:"param\xe8tres-de-ligne-de-commande"},"Param\xe8tres de ligne de commande"),(0,s.kt)("p",null,"Il est possible de remplacer la configuration du serveur avec les param\xe8tres de ligne de commande. Note : cela ne va pas \xe9crire dans le fichier de configuration."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type de valeur"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--name")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Nom du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--description")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Description du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--password")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Mot de passe du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--ip")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"IP du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--map")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Map \xe0 charger")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--port")),(0,s.kt)("td",{parentName:"tr",align:"left"},"number"),(0,s.kt)("td",{parentName:"tr",align:"left"},"--http_port")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--query_port")),(0,s.kt)("td",{parentName:"tr",align:"left"},"number"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Server Query port")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--announce")),(0,s.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Si afficher le serveur dans la liste des serveurs")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--packages")),(0,s.kt)("td",{parentName:"tr",align:"left"},"string list"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Packages du serveur")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--save")),(0,s.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Si sauvegarder les param\xe8tres dans Config.toml")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--max_players")),(0,s.kt)("td",{parentName:"tr",align:"left"},"number"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Nombre de joueurs autoris\xe9s")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"--profiling")),(0,s.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Activer les logs de profilage pour le d\xe9bogage")))),(0,s.kt)("h2",{id:"messagesavertissementserreurs-communes-et-leur-sens"},"Messages/Avertissements/Erreurs communes et leur sens"),(0,s.kt)("h4",{id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms"},(0,s.kt)("inlineCode",{parentName:"h4"},"Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms.")),(0,s.kt)("p",null,"Cela signifie que le serveur est rest\xe9 ",(0,s.kt)("strong",{parentName:"p"},"bloqu\xe9")," ","(","lag",")"," pendant X millisecondes. L'avertissement ","(",(0,s.kt)("em",{parentName:"p"},"jaune"),")"," n'est pas inqui\xe9tant, mais trop d'erreurs ","(",(0,s.kt)("em",{parentName:"p"},"rouge"),")"," pourraient dire que l'infrastructure de votre serveur n'est pas bonne ou que le code de vos scripts n'est pas optimis\xe9. Le serveur ",(0,s.kt)("em",{parentName:"p"},"essaie\xb9")," de s'ex\xe9cuter \xe0 33 ticks par seconde ","(","ou le montant pr\xe9sent dans Config.toml",")",". Le serveur s'ex\xe9cute dans une boucle infinie \xe0 une fr\xe9quence de ",(0,s.kt)("strong",{parentName:"p"},"1/33")," millisecondes. Dans cette boucle, toutes les op\xe9rations du serveur sont ex\xe9cut\xe9es : recevoir/envoyer des packets r\xe9seau, ex\xe9cuter des fonctions ","(","re\xe7ues du r\xe9seau",")",", d\xe9clencher des \xe9v\xe8nements, ex\xe9cuter tous les \xe9v\xe8nements de Ticks, calculer le suivi des actions, etc. Donc si quelques de ces op\xe9rations prennent plus que ",(0,s.kt)("strong",{parentName:"p"},"1/33")," millisecondes \xe0 s'ex\xe9cuter, cet avertissement apparaitra."),(0,s.kt)("p",null,"Le terme ",(0,s.kt)("em",{parentName:"p"},"essaie")," est employ\xe9 car sur windows, ce n'est pas aussi pr\xe9cis que sur linux \xe0 cause des impl\xe9mentations internes de C++."))}u.isMDXComponent=!0},13881:function(e,t,r){t.Z=r.p+"assets/images/server-map-0b0745e6fb974d2c18d5b386cd47070f.jpg"},92387:function(e,t,r){t.Z=r.p+"assets/images/server-326a9aac665826d697968ef362407a58.jpg"}}]);