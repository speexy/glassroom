webpackJsonp([35783957827783],{200:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Blockquote=void 0;var r=a(2),u=l(r),n=a(298),o=l(n);t.Blockquote=function(e){return u.default.createElement("div",{className:o.default.blockquote}," ",e.quote," ")}},201:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.CircleLink=void 0;var r=a(2),u=l(r),n=a(299),o=l(n);t.CircleLink=function(e){return u.default.createElement("a",{className:o.default.wrapper,href:e.url},u.default.createElement("div",{className:o.default.image,style:{backgroundImage:"url("+e.image+")"}}),u.default.createElement("p",null,e.label))}},298:function(e,t){e.exports={blockquote:"src-components----blockquote-module---blockquote---9tUMf"}},299:function(e,t){e.exports={wrapper:"src-components----circleLink-module---wrapper---G3ko3",image:"src-components----circleLink-module---image---1AOCS"}},207:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.indexQuery=void 0;var r=a(2),u=l(r),n=a(200),o=a(201),c=a(304),i=l(c);t.default=function(e){var t=e.data,a=t.page.frontmatter.sliderImages[0].image,l=t.page.frontmatter.quote,r=t.nav.frontmatter.imageNav;return console.log(r),u.default.createElement("div",null,u.default.createElement("div",{className:i.default.slider,style:{backgroundImage:"url("+a+")"}}),u.default.createElement(n.Blockquote,{quote:l}),u.default.createElement("div",{className:i.default.imageNavWrapper},r.map(function(e,t){return u.default.createElement(o.CircleLink,{key:t,image:e.image,label:e.label,url:e.url})})))};t.indexQuery="** extracted graphql fragment **"},304:function(e,t){e.exports={main:"src-pages----index-module---main---3W71P",slider:"src-pages----index-module---slider---Hjcno",imageNavWrapper:"src-pages----index-module---imageNavWrapper---2TNkB"}}});
//# sourceMappingURL=component---src-pages-index-js-c5859950cdfc7b1e8992.js.map