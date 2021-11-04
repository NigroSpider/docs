"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2659],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={description:"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution",sidebar_position:7,tags:["scripting"]},c="Traces & Raycasting",l={unversionedId:"core-concepts/scripting/traces-and-raycasting",id:"version-latest/core-concepts/scripting/traces-and-raycasting",isDocsHomePage:!1,title:"Traces & Raycasting",description:"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/fr/docs/core-concepts/scripting/traces-and-raycasting",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",sidebarPosition:7,frontMatter:{description:"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution",sidebar_position:7,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Intelligence artificielle",permalink:"/fr/docs/core-concepts/scripting/artificial-intelligence"},next:{title:"Int\xe9gration de Discord",permalink:"/fr/docs/core-concepts/scripting/discord-integration"}},u=[],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"traces--raycasting"},"Traces & Raycasting"),(0,a.kt)("p",null," Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution."),(0,a.kt)("p",null,"Les ",(0,a.kt)("strong",{parentName:"p"},"Traces")," offrent une m\xe9thode pour atteindre dans vos maps et obtenir un retour sur ce qui est pr\xe9sent le long d'un segment. Vous les utilisez en fournissant deux points d'extr\xe9mit\xe9 (un emplacement de d\xe9part et un emplacement d'arriv\xe9e) et le syst\xe8me physique \"trace\" un segment de ligne entre ces points, en signalant tous les acteurs qu'il rencontre. Les traces sont essentiellement les m\xeames que ",(0,a.kt)("strong",{parentName:"p"},"Raycasts")," ou ",(0,a.kt)("strong",{parentName:"p"},"Raytraces")," dans d'autres logiciels."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33458).Z})),(0,a.kt)("p",null,"L'exemple suivant vous montre comment obtenir ce que le joueur regarde et o\xf9 il le regarde."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Traces at each 100ms\nTimer.SetInterval(function()\n    -- Gets the middle of the screen\n    local viewport_2D_center = Render.GetViewportSize() / 2\n\n    -- Deprojects to get the 3D Location for the middle of the screen\n    local viewport_3D = Render.Deproject(viewport_2D_center)\n\n    -- Makes a trace with the 3D Location and it's direction multiplied by 5000\n    -- Meaning it will trace 5000 units in that direction\n    local trace_max_distance = 5000\n\n    local start_location = viewport_3D.Position\n    local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n    -- Last parameter as true means it will draw a Debug Line in the traced segment\n    local trace_result = Client.Trace(start_location, end_location, CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody, false, true, false, {}, true)\n\n    -- If hit something draws a Debug Point at the location\n    if (trace_result.Success) then\n\n        -- Makes the point Red or Green if hit an Actor\n        local color = Color(1, 0, 0) -- Red\n\n        if (trace_result.Entity) then\n            color = Color(0, 1, 0) -- Green\n\n            -- Here you can check which actor you hit like\n            -- if (trace_result.Entity:GetType() == \"Character\") then ...\n        end\n\n        -- Dessine un point de d\xe9bug \xe0 l'emplacement pendant 5 secondes avec une taille de 10.\n        Client.DrawDebugPoint(trace_result.Location, color, 5, 10)\n    end\nend, 100)\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Comme vous pouvez le constater, nous pouvons passer des op\xe9rateurs binaires \xe0 Trace pour plus d'un ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/glossary/enums#collisionchannel"},"CollisionChannel")," \xe0 la fois ! Utilisation ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," entre les ",(0,a.kt)("strong",{parentName:"p"},"CollisionChannels")," pour y parvenir."))))}d.isMDXComponent=!0},33458:function(e,t,n){t.Z=n.p+"assets/images/traces-raycasting-9efb35a67eb78f33062bb0a4a88372e7.jpg"}}]);