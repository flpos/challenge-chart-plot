(this["webpackJsonpchallenge-chart-plot"]=this["webpackJsonpchallenge-chart-plot"]||[]).push([[106],{484:function(e,t,r){!function(e){"use strict";e.defineMode("tiddlywiki",(function(){var e={},t={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},r=/[\w_\-]/i,n=/^\-\-\-\-+$/,i=/^\/\*\*\*$/,a=/^\*\*\*\/$/,u=/^<<<$/,o=/^\/\/\{\{\{$/,c=/^\/\/\}\}\}$/,f=/^<!--\{\{\{-->$/,l=/^<!--\}\}\}-->$/,m=/^\{\{\{$/,h=/^\}\}\}$/,k=/.*?\}\}\}/;function s(e,t,r){return t.tokenize=r,r(e,t)}function d(t,h){var k=t.sol(),d=t.peek();if(h.block=!1,k&&/[<\/\*{}\-]/.test(d)){if(t.match(m))return h.block=!0,s(t,h,w);if(t.match(u))return"quote";if(t.match(i)||t.match(a))return"comment";if(t.match(o)||t.match(c)||t.match(f)||t.match(l))return"comment";if(t.match(n))return"hr"}if(t.next(),k&&/[\/\*!#;:>|]/.test(d)){if("!"==d)return t.skipToEnd(),"header";if("*"==d)return t.eatWhile("*"),"comment";if("#"==d)return t.eatWhile("#"),"comment";if(";"==d)return t.eatWhile(";"),"comment";if(":"==d)return t.eatWhile(":"),"comment";if(">"==d)return t.eatWhile(">"),"quote";if("|"==d)return"header"}if("{"==d&&t.match("{{"))return s(t,h,w);if(/[hf]/i.test(d)&&/[ti]/i.test(t.peek())&&t.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==d)return"string";if("~"==d)return"brace";if(/[\[\]]/.test(d)&&t.match(d))return"brace";if("@"==d)return t.eatWhile(r),"link";if(/\d/.test(d))return t.eatWhile(/\d/),"number";if("/"==d){if(t.eat("%"))return s(t,h,p);if(t.eat("/"))return s(t,h,$)}if("_"==d&&t.eat("_"))return s(t,h,g);if("-"==d&&t.eat("-")){if(" "!=t.peek())return s(t,h,v);if(" "==t.peek())return"brace"}return"'"==d&&t.eat("'")?s(t,h,b):"<"==d&&t.eat("<")?s(t,h,x):(t.eatWhile(/[\w\$_]/),e.propertyIsEnumerable(t.current())?"keyword":null)}function p(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=d;break}n="%"==r}return"comment"}function b(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=d;break}n="'"==r}return"strong"}function w(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(k)||r&&e.sol()&&e.match(h)?(t.tokenize=d,"comment"):(e.next(),"comment")}function $(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=d;break}n="/"==r}return"em"}function g(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=d;break}n="_"==r}return"underlined"}function v(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=d;break}n="-"==r}return"strikethrough"}function x(e,r){if("<<"==e.current())return"macro";var n=e.next();return n?">"==n&&">"==e.peek()?(e.next(),r.tokenize=d,"macro"):(e.eatWhile(/[\w\$_]/),t.propertyIsEnumerable(e.current())?"keyword":null):(r.tokenize=d,null)}return{startState:function(){return{tokenize:d}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.defineMIME("text/x-tiddlywiki","tiddlywiki")}(r(69))}}]);
//# sourceMappingURL=106.bb1a4e13.chunk.js.map