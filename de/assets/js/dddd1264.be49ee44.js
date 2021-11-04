"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3367],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return c},SM:function(){return s},Yb:function(){return d},aj:function(){return g},rt:function(){return h},Ut:function(){return b},PZ:function(){return y},p2:function(){return k}});n(83117),n(80102),n(67294);var r=n(3905),i=n(80907),a=function(){return(0,i.zu)().path},c=function(e){var t=e.title,n=e.description,i=e.href,c=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:c||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},o=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return o("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return o("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return o("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return o("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Item:function(){return p("Item")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},k={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},56996:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),c=n(87469),s=["components"],o={description:"Speicherung und Abruf von persistenten Daten \xfcber das eingebaute System",tags:["scripting"]},u="Persistente Daten",l={unversionedId:"core-concepts/scripting/persistent-data",id:"version-latest/core-concepts/scripting/persistent-data",isDocsHomePage:!1,title:"Persistente Daten",description:"Speicherung und Abruf von persistenten Daten \xfcber das eingebaute System",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/persistent-data.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/persistent-data",permalink:"/de/docs/core-concepts/scripting/persistent-data",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/persistent-data.mdx",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"}],version:"latest",frontMatter:{description:"Speicherung und Abruf von persistenten Daten \xfcber das eingebaute System",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Interacting with the Sun",permalink:"/de/docs/core-concepts/scripting/interacting-with-the-sun"},next:{title:"Assets",permalink:"/de/docs/core-concepts/assets"}},p=[{value:"Dateiformat",id:"dateiformat",children:[],level:2},{value:"Daten werden gespeichert und abgerufen",id:"daten-werden-gespeichert-und-abgerufen",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"persistente-daten"},"Persistente Daten"),(0,a.kt)("p",null,"Wie man persistente Daten \xfcber das eingebaute System speichert und von der Festplatte abruft."),(0,a.kt)("p",null,"In nanos world ist es m\xf6glich, Daten mit einfachen Funktionen von der Festplatte zu speichern und abzurufen."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Es ist m\xf6glich, Persistente Daten in ",(0,a.kt)("strong",{parentName:"p"},"Client")," und ",(0,a.kt)("strong",{parentName:"p"},"Server")," zu speichern!"))),(0,a.kt)("h2",{id:"dateiformat"},"Dateiformat"),(0,a.kt)("p",null,"Die persistenten Daten werden automatisch im ",(0,a.kt)("strong",{parentName:"p"},"TOML")," Format in der Datei ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentData.toml")," in Ihrem Paket/ Ordner gespeichert. Diese Datei wird nur erzeugt, wenn Sie ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.SetPersistentData()")," aufrufen."),(0,a.kt)("h2",{id:"daten-werden-gespeichert-und-abgerufen"},"Daten werden gespeichert und abgerufen"),(0,a.kt)("p",null,"Alle ",(0,a.kt)("strong",{parentName:"p"},"PersistentData")," Dateien werden automatisch geladen, wenn das Paket geladen und im Speicher gespeichert wird. Mit der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.GetPersistentData()")," k\xf6nnen Sie ganz einfach auf die gesamte Datei zugreifen."),(0,a.kt)("p",null,"Um Daten zu speichern, m\xfcssen Sie einen ",(0,a.kt)("inlineCode",{parentName:"p"},"Schl\xfcssel")," Wert \xfcbergeben, der ",(0,a.kt)(c.rt.Any,null)," Lua Wert in diesem Schl\xfcssel speichert."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_table = {\n    my_id = 123,\n    my_data_02 = "data"\n}\n\nPaket. etPersistentData("awesome_table", my_table)\n\n-- PersistentData.toml wird sein:\n-- awesome_table = {my_id = 123, my_data_02 = "data"}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local my_table = Package.GetPersistentData().awesome_table\n\nPackage.Log(my_table.my_id)\n\n-- Wird gedruckt:\n-- 123\n")))}f.isMDXComponent=!0}}]);