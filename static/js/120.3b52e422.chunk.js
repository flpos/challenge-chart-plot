(this["webpackJsonpchallenge-chart-plot"]=this["webpackJsonpchallenge-chart-plot"]||[]).push([[120],{501:function(e,t,n){!function(e){"use strict";e.defineMode("xquery",(function(){var e=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"axis_specifier",style:"qualifier"},a={",":{type:"punctuation",style:null}},i=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],o=0,s=i.length;o<s;o++)a[i[o]]=e(i[o]);var c=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(o=0,s=c.length;o<s;o++)a[c[o]]=n;var u=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(o=0,s=u.length;o<s;o++)a[u[o]]=t;var l=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(o=0,s=l.length;o<s;o++)a[l[o]]=r;return a}();function t(e,t,n){return t.tokenize=n,n(e,t)}function n(n,s){var p=n.next(),x=!1,g=d(n);if("<"==p){if(n.match("!--",!0))return t(n,s,c);if(n.match("![CDATA",!1))return s.tokenize=u,"tag";if(n.match("?",!1))return t(n,s,l);var k=n.eat("/");n.eatSpace();for(var v,b="";v=n.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=v;return t(n,s,o(b,k))}if("{"==p)return h(s,{type:"codeblock"}),null;if("}"==p)return y(s),null;if(f(s))return">"==p?"tag":"/"==p&&n.eat(">")?(y(s),"tag"):"variable";if(/\d/.test(p))return n.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===p&&n.eat(":"))return h(s,{type:"comment"}),t(n,s,r);if(g||'"'!==p&&"'"!==p){if("$"===p)return t(n,s,i);if(":"===p&&n.eat("="))return"keyword";if("("===p)return h(s,{type:"paren"}),null;if(")"===p)return y(s),null;if("["===p)return h(s,{type:"bracket"}),null;if("]"===p)return y(s),null;var z=e.propertyIsEnumerable(p)&&e[p];if(g&&'"'===p)for(;'"'!==n.next(););if(g&&"'"===p)for(;"'"!==n.next(););z||n.eatWhile(/[\w\$_-]/);var w=n.eat(":");!n.eat(":")&&w&&n.eatWhile(/[\w\$_-]/),n.match(/^[ \t]*\(/,!1)&&(x=!0);var I=n.current();return z=e.propertyIsEnumerable(I)&&e[I],x&&!z&&(z={type:"function_call",style:"variable def"}),m(s)?(y(s),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=z.type||h(s,{type:"xmlconstructor"}),z?z.style:"variable")}return t(n,s,a(p))}function r(e,t){for(var n,r=!1,a=!1,i=0;n=e.next();){if(")"==n&&r){if(!(i>0)){y(t);break}i--}else":"==n&&a&&i++;r=":"==n,a="("==n}return"comment"}function a(e,t){return function(r,i){var o;if(x(i)&&r.current()==e)return y(i),t&&(i.tokenize=t),"string";if(h(i,{type:"string",name:e,tokenize:a(e,t)}),r.match("{",!1)&&p(i))return i.tokenize=n,"string";for(;o=r.next();){if(o==e){y(i),t&&(i.tokenize=t);break}if(r.match("{",!1)&&p(i))return i.tokenize=n,"string"}return"string"}}function i(e,t){var r=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),t.tokenize=n,"variable"}function o(e,t){return function(r,a){return r.eatSpace(),t&&r.eat(">")?(y(a),a.tokenize=n,"tag"):(r.eat("/")||h(a,{type:"tag",name:e,tokenize:n}),r.eat(">")?(a.tokenize=n,"tag"):(a.tokenize=s,"tag"))}}function s(e,r){var i=e.next();return"/"==i&&e.eat(">")?(p(r)&&y(r),f(r)&&y(r),"tag"):">"==i?(p(r)&&y(r),"tag"):"="==i?null:'"'==i||"'"==i?t(e,r,a(i,s)):(p(r)||h(r,{type:"attribute",tokenize:s}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(y(r),r.tokenize=n),"attribute")}function c(e,t){for(var r;r=e.next();)if("-"==r&&e.match("->",!0))return t.tokenize=n,"comment"}function u(e,t){for(var r;r=e.next();)if("]"==r&&e.match("]",!0))return t.tokenize=n,"comment"}function l(e,t){for(var r;r=e.next();)if("?"==r&&e.match(">",!0))return t.tokenize=n,"comment meta"}function f(e){return g(e,"tag")}function p(e){return g(e,"attribute")}function m(e){return g(e,"xmlconstructor")}function x(e){return g(e,"string")}function d(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}function g(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function h(e,t){e.stack.push(t)}function y(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||n}return{startState:function(){return{tokenize:n,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(:",blockCommentEnd:":)"}})),e.defineMIME("application/xquery","xquery")}(n(69))}}]);
//# sourceMappingURL=120.3b52e422.chunk.js.map