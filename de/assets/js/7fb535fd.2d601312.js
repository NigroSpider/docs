"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2853],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(o,".").concat(c)]||k[c]||p[c]||s;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60086:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),i=["components"],l={description:"Alles was Sie \xfcber Assets wissen m\xfcssen",tags:["verm\xf6gen"]},o="Assets",d={unversionedId:"core-concepts/assets",id:"version-latest/core-concepts/assets",isDocsHomePage:!1,title:"Assets",description:"Alles was Sie \xfcber Assets wissen m\xfcssen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/assets.md",sourceDirName:"core-concepts",slug:"/core-concepts/assets",permalink:"/de/docs/core-concepts/assets",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/assets.md",tags:[{label:"verm\xf6gen",permalink:"/de/docs/tags/vermogen"}],version:"latest",frontMatter:{description:"Alles was Sie \xfcber Assets wissen m\xfcssen",tags:["verm\xf6gen"]},sidebar:"version-latest/main",previous:{title:"Persistente Daten",permalink:"/de/docs/core-concepts/scripting/persistent-data"},next:{title:"Module",permalink:"/de/docs/core-concepts/modules"}},m=[{value:"Ordnerstruktur",id:"ordnerstruktur",children:[],level:2},{value:"Assets Pack-Konfiguration",id:"assets-pack-konfiguration",children:[{value:"Einstellungen detailliert",id:"einstellungen-detailliert",children:[],level:3}],level:2},{value:"Verweise auf Assets im Skripting",id:"verweise-auf-assets-im-skripting",children:[],level:2},{value:"Arten von Assets",id:"arten-von-assets",children:[],level:2},{value:"nanos world Standard Asset Pack",id:"nanos-world-standard-asset-pack",children:[],level:2}],p={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assets"},"Assets"),(0,s.kt)("p",null,"Alles was Sie \xfcber Assets wissen m\xfcssen"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Assets")," in nanos Welt sind alle Objekte oder Inhalte, die von Unreal Engine stammen, d.h. ",(0,s.kt)("em",{parentName:"p"},"Karten"),", ",(0,s.kt)("em",{parentName:"p"},"StaticMeshes"),", ",(0,s.kt)("em",{parentName:"p"},"Skelett-Netze"),", ",(0,s.kt)("em",{parentName:"p"},"Sounds"),", ",(0,s.kt)("em",{parentName:"p"},"Partikel"),", usw. sind alle ",(0,s.kt)("strong",{parentName:"p"},"Assets"),"."),(0,s.kt)("p",null,"Um eigene Assets auf Ihren Servern verwenden zu k\xf6nnen, m\xfcssen Sie ein ",(0,s.kt)("strong",{parentName:"p"},"Asset Pack")," besitzen oder erstellen. Asset-Packs sind eine Sammlung von Assets die zusammen aus Unreal exportiert wurden."),(0,s.kt)("h2",{id:"ordnerstruktur"},"Ordnerstruktur"),(0,s.kt)("p",null,"Alle Asset Packs gehen unter ",(0,s.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," Ordner. Jedes Asset Pack ist ein Ordner unter diesem."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Hinweis:")," Asset Packs heruntergeladen, wenn eine Verbindung zu Servern hergestellt wird, werden ebenfalls im Ordner ",(0,s.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," gespeichert!"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 my-asset-pack-01/\n\u2502   \u251c\u2500\u2500 MyAsset_01.uasset\n\u2502   \u251c\u2500\u2500 MyAsset_02.uasset\n\u2502   \u251c\u2500\u2500 MyBigMap.umap\n\u2502   \u2502    ...\n\u2502   \u2514\u2500\u2500 Assets.toml\n\u251c\u2500\u2500 awesome-weapons/\n\u2502   \u251c\u2500\u2500 BigFuckingGun.uasset\n\u2502   \u2502   ...\n\u2502   \u2514\u2500\u2500 Assets.toml\nAssets/\nConfig.toml\n")),(0,s.kt)("h2",{id:"assets-pack-konfiguration"},"Assets Pack-Konfiguration"),(0,s.kt)("p",null,"Asset Packs haben eine Konfigurationsdatei im Stammverzeichnis des Asset Pack-Ordners, genannt ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets. oml"),", in dieser Datei k\xf6nnen wir alle relevanten Einstellungen f\xfcr das Asset Pack einrichten:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Assets.toml"',title:'"Assets.toml"'},'# Asset Pack Konfigurationen\n[asset_pack]\n    # Asset Pack Name\n    name = "MyPack"\n    # Mitwirkende\n    author = "The Incredible Asset Creator"\n    # Version\n    version = "1. .0"\n    # Bild-URL\n    image = "https://i. mgur.com/Qa6Tswl. ng"\n    # Unreal Ordner - der Stammordner, auf den die Assets Referenzen haben werden\n    unreal_folder = "MyPack"\n\n# Assets Dateien\n[assets][assets]\n    # Karten\n    [assets.maps]\n    # MyMap = "MyFolder/MyAwesomeMap"\n    # ...\n\n    # Statische Netze\n    [assets.static_meshes]\n    SM_Cube = "SM_Cube"\n\n    # Skelett-Netze\n    [assets.skeletal_meshes]\n    # SK_Better_Man = "Zeichen/SK_BetterMan_3"\n    # ...\n\n    [assets.sounds]\n    # A_RingSound = "Audios/A_RingSound"\n    # ...\n\n    [assets.particles]\n    # P_Explosion = "Particles/P_Explosion"\n    # ...\n\n    # Animationen\n    [assets.animations]\n    # A_Character_Jump = "Animations/A_Character_Jump"\n    # ...\n\n    # Materials\n    [assets.materials]\n    # M_Awesome_Colorful = "Materials/M_Awesome_Colorful"\n    # ...\n\n    # Other Assets (for not yet categorized ones)\n    [assets.others]\n    # ...\n')),(0,s.kt)("h3",{id:"einstellungen-detailliert"},"Einstellungen detailliert"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Einstellung"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"name"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Freundlicher Name des Asset Packs")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"autor"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Autor","(","s",")"," des Asset-Pakets")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"version"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Version des Asset Packs - siehe ",(0,s.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"bild"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"URL des Bildes im Tresor anzeigen")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"unreal_Ordner"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name des Wurzelordners im Unreal Projekt, das diese Dateien exportiert hat. Dies ist wichtig, um die relativen Referenzen korrekt zu halten.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.maps"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste der Karten in diesem Asset-Paket")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.static_gitter"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste der statischen Netze in diesem Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.skelette_gitter"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste der Skelett-Netze in diesem Asset Paket")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.sounds"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste der T\xf6ne in diesem Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.animations"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste der Animationen in diesem Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.particles"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Particles in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.materials"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Materials in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"verm\xf6gen.others"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste anderer Assets in diesem Asset Pack")))),(0,s.kt)("h2",{id:"verweise-auf-assets-im-skripting"},"Verweise auf Assets im Skripting"),(0,s.kt)("p",null,"Um Assets \xfcber Skripte verwenden zu k\xf6nnen, Sie m\xfcssen zuerst sicherstellen, dass das Asset Pack geladen wird, ein Asset Pack wird geladen wenn:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Set the Map to be loaded (this will make it's Asset Pack to be loaded automatically)"),(0,s.kt)("li",{parentName:"ol"},"Manuell gesetzt in ",(0,s.kt)("inlineCode",{parentName:"li"},"Server.toml")," die ",(0,s.kt)("inlineCode",{parentName:"li"},"Assets")," zum Laden"),(0,s.kt)("li",{parentName:"ol"},"Manuell in einem geladenen Paket gesetzt, in ",(0,s.kt)("inlineCode",{parentName:"li"},"package.toml")," die ",(0,s.kt)("inlineCode",{parentName:"li"},"asset_requirements"))),(0,s.kt)("p",null,"With that, you can refer to it's assets using the following pattern:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'"ASSET_PACK_PATH::ASSET_KEY"')),(0,s.kt)("p",null,"Example:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'"my-asset-pack-01::SM_Cube"')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"ASSET_PACK_PATH")," is the Asset Pack folder name and ",(0,s.kt)("inlineCode",{parentName:"p"},"ASSET_KEY")," is the key defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.toml"),"."))),(0,s.kt)("h2",{id:"arten-von-assets"},"Arten von Assets"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Karte")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Eine unechte Motorkarte/-ebene")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Statisches Netz")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal statische Netze k\xf6nnen verwendet werden, um Netze f\xfcr Props und StaticMeshes zu laden")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Skelettnetzwerk")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unechte Skelettnetze k\xf6nnen verwendet werden, um Netze f\xfcr Charaktere und Fahrzeuge zu laden")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Sound")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unechte Sounds zum Laden von Sounds")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Particle")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Particles can be used for settings in several entities, including Particle Class itself")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Animation")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreale Animationen k\xf6nnen f\xfcr Einstellungen in Charakter und Waffen verwendet werden")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Material")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Materials can be used for customizing meshes surfaces and used as Post Process")))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Some methods require some specific Type of Assets to load, attempting to load an invalid or wrong type will cause an Error. Bsp.: ",(0,s.kt)("inlineCode",{parentName:"p"},"Zeichen: SetMesh()")," ben\xf6tigt ein Asset vom Typ ",(0,s.kt)("inlineCode",{parentName:"p"},"Skelett-Netz"),"."))),(0,s.kt)("h2",{id:"nanos-world-standard-asset-pack"},"nanos world Standard Asset Pack"),(0,s.kt)("p",null,"nanos world bietet ein Standard-Asset Pack, das bereits im Basisspiel enthalten ist. Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/assets-modding/default-asset-pack/default-asset-pack"},"nanos world Default Asset Pack")," for more information."))}k.isMDXComponent=!0}}]);