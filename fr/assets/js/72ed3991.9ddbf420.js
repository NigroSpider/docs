"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[813],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return l},SM:function(){return o},Yb:function(){return d},aj:function(){return k},rt:function(){return f},Ut:function(){return N},PZ:function(){return h},p2:function(){return b}});n(83117),n(80102),n(67294);var a=n(3905),r=n(80907),i=function(){return(0,r.zu)().path},l=function(t){var e=t.title,n=t.description,r=t.href,l=t.image_src;return(0,a.kt)("a",{class:"card-link",href:r.startsWith("http")?r:i()+"/"+r},(0,a.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,a.kt)("h4",null,e),(0,a.kt)("p",null,n))},o=function(t){var e=t.children,n=t.href;return(0,a.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},e,(0,a.kt)("span",null,n))},s=function(t,e){return(0,a.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,a.kt)("img",{src:t,title:e}))},p=function(t){return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},c=function(t,e){return(0,a.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},u=function(t,e){return(0,a.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},m=function(t){return(0,a.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},g=function(t){return(0,a.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},k={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},f={Number:function(){return p("number")},String:function(){return p("string")},Boolean:function(){return p("boolean")},Table:function(){return p("table")},Iterator:function(){return p("iterator")},Any:function(){return p("any")},Function:function(){return p("function")},Nil:function(){return p("nil")}},N={Vector:function(){return c("Vector")},Rotator:function(){return c("Rotator")},Color:function(){return c("Color")},Quat:function(){return c("Quat","quaternion")},Vector2D:function(){return c("Vector2D","vectortwod")}},h={Actor:function(){return u("Actor","base-classes/actor")},Paintable:function(){return u("Paintable","base-classes/paintable")},Pickable:function(){return u("Pickable","base-classes/pickable")},Cable:function(){return u("Cable")},Character:function(){return u("Character")},File:function(){return u("File")},Grenade:function(){return u("Grenade")},Item:function(){return u("Item")},Light:function(){return u("Light")},Particle:function(){return u("Particle")},Player:function(){return u("Player")},Prop:function(){return u("Prop")},Sound:function(){return u("Sound")},StaticMesh:function(){return u("StaticMesh","static-mesh")},TextRender:function(){return u("TextRender","text-render")},Trigger:function(){return u("Trigger")},Vehicle:function(){return u("Vehicle")},Weapon:function(){return u("Weapon")},WebUI:function(){return u("WebUI")}},b={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Sound:function(){return g("Sound Asset or Special Path")},Image:function(){return g("Image Special Path")},HTML:function(){return g("HTML Special Path")}}},5123:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(87469),o=["components"],s={description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},p="\ud83d\udd79\ufe0f Input",c={unversionedId:"scripting-reference/static-classes/input",id:"scripting-reference/static-classes/input",isDocsHomePage:!1,title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/static-classes/input.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/input",permalink:"/fr/docs/next/scripting-reference/static-classes/input",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/input.mdx",tags:[{label:"static-class",permalink:"/fr/docs/next/tags/static-class"},{label:"client",permalink:"/fr/docs/next/tags/client"}],version:"current",frontMatter:{description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},sidebar:"main",previous:{title:"\ud83c\udf10 HTTP",permalink:"/fr/docs/next/scripting-reference/static-classes/http"},next:{title:"\ud83d\udce6 Package",permalink:"/fr/docs/next/scripting-reference/static-classes/package"}},u=[{value:"Utilisation",id:"utilisation",children:[],level:2},{value:"Static Functions",id:"static-functions",children:[{value:"<code>Bind</code>",id:"bind",children:[],level:3},{value:"<code>Unbind</code>",id:"unbind",children:[],level:3},{value:"<code>Register</code>",id:"register",children:[],level:3},{value:"<code>Unregister</code>",id:"unregister",children:[],level:3},{value:"<code>GetMappedKey</code>",id:"getmappedkey",children:[],level:3},{value:"<code>ResetBindings</code>",id:"resetbindings",children:[],level:3},{value:"<code>GetScriptingKeyBindings</code>",id:"getscriptingkeybindings",children:[],level:3},{value:"<code>GetGameKeyBindings</code>",id:"getgamekeybindings",children:[],level:3}],level:2}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-input"},"\ud83d\udd79\ufe0f Input"),(0,i.kt)("p",null,"Create custom Bindings and Retrieve Input information"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a Static Class named ",(0,i.kt)("inlineCode",{parentName:"p"},"Input"),". You can access it\u2019s methods directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"."),". It is not possible to initialize or create new instances."),(0,i.kt)("p",{parentName:"div"},"This is a ",(0,i.kt)("strong",{parentName:"p"},"Client")," only Class."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This Class is ",(0,i.kt)("strong",{parentName:"p"},"experiemental"),", so you can try it out and provide feedback before it's full release!"))),(0,i.kt)("h2",{id:"utilisation"},"Utilisation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Registers the binding_name \'SpawnMenu\' with default key \'Q\'\n-- This will add \'SpawnMenu\' to user KeyBinding Settings automatically\nInput.Register("SpawnMenu", "Q")\n\n-- Subscribes for Pressing the key\nInput.Bind("SpawnMenu", InputEvent.Pressed, function()\n    -- Opens the Spawn Menu\nend)\n\n-- Subscribes for Releasing the key\nInput.Bind("SpawnMenu", InputEvent.Released, function()\n    -- Closes the Spawn Menu\nend)\n')),(0,i.kt)("h2",{id:"static-functions"},"Static Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#bind"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Bind")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Binds a function to an Input defined using ",(0,i.kt)("inlineCode",{parentName:"td"},"Register")," or from Game")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#unbind"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unbind")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unbinds a Input function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#register"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Register")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Registers a BindingName to a Key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#unregister"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Unregister")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unregisters a BindingName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getmappedkey"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetMappedKey")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the Key given a BindingName")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#resetbindings"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ResetBindings")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resets all Bound functions by this Package")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getgamekeybindings"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetGameKeyBindings")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns a table with all Game KeyBindings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Table,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"input#getscriptingkeybindings"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetScriptingKeyBindings")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns a table with all Scripting KeyBindings")))),(0,i.kt)("h3",{id:"bind"},(0,i.kt)("inlineCode",{parentName:"h3"},"Bind")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Binds a function to an Input defined using ",(0,i.kt)("inlineCode",{parentName:"p"},"Register")," or from Game")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Bind(binding_name, input_event, callback)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Yb,{mdxType:"Enums"},"InputEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"input_event"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Which Event to register (Released/Pressed)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The function to trigger")))),(0,i.kt)("h3",{id:"unbind"},(0,i.kt)("inlineCode",{parentName:"h3"},"Unbind")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unbinds all Input functions related to that binding_name and input_event")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Unbind(binding_name, input_event)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.Yb,{mdxType:"Enums"},"InputEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"input_event"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Which Event to register (Released/Pressed)")))),(0,i.kt)("h3",{id:"register"},(0,i.kt)("inlineCode",{parentName:"h3"},"Register")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Registers a BindingName to a default Key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Register(binding_name, key_name)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"key_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"unregister"},(0,i.kt)("inlineCode",{parentName:"h3"},"Unregister")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unregisters a BindingName")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.Unregister(binding_name, key_name)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"key_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"getmappedkey"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetMappedKey")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Gets the Key given a BindingName"),(0,i.kt)("p",{parentName:"blockquote"},"Returns ",(0,i.kt)(l.rt.String,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetMappedKey(binding_name)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.String,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"binding_name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The KeyBinding ID")))),(0,i.kt)("h3",{id:"resetbindings"},(0,i.kt)("inlineCode",{parentName:"h3"},"ResetBindings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Resets all Bound functions from this Package")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.ResetBindings()\n")),(0,i.kt)("h3",{id:"getscriptingkeybindings"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetScriptingKeyBindings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns a table with all Scripting KeyBindings"),(0,i.kt)("p",{parentName:"blockquote"},"Returns a ",(0,i.kt)(l.rt.Table,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetScriptingKeyBindings()\n")),(0,i.kt)("h3",{id:"getgamekeybindings"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetGameKeyBindings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns a table with all Game KeyBindings"),(0,i.kt)("p",{parentName:"blockquote"},"Returns a ",(0,i.kt)(l.rt.Table,null))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Input.GetGameKeyBindings()\n")))}m.isMDXComponent=!0}}]);