"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9924],{49853:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var s=t(67294),c=t(16823),l=t(36742),r=t(63773),n=t(24973);function o(e){var a=e.doc;return s.createElement("article",{className:"margin-vert--lg"},s.createElement(l.Z,{to:a.permalink},s.createElement("h2",null,a.title)),a.description&&s.createElement("p",null,a.description))}function g(e){var a,t=e.tag,g=(a=(0,r.c2)().selectMessage,function(e){return a(e,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:g(t.docs.length),tagName:t.name});return s.createElement(c.Z,{title:i,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},s.createElement("div",{className:"container margin-vert--lg"},s.createElement("div",{className:"row"},s.createElement("main",{className:"col col--8 col--offset-2"},s.createElement("header",{className:"margin-bottom--xl"},s.createElement("h1",null,i),s.createElement(l.Z,{href:t.allTagsPath},s.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),s.createElement("section",{className:"margin-vert--lg"},t.docs.map((function(e){return s.createElement(o,{key:e.id,doc:e})})))))))}}}]);