(this["webpackJsonpchallenge-chart-plot"]=this["webpackJsonpchallenge-chart-plot"]||[]).push([[79],{456:function(e,t,n){!function(e){"use strict";e.defineMode("pegjs",(function(t){var n=e.getMode(t,"javascript");function r(e){return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)}return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inCharacterClass:!1,braced:0,lhs:!0,localState:null}},token:function(t,a){if(t&&(a.inString||a.inComment||'"'!=t.peek()&&"'"!=t.peek()||(a.stringType=t.peek(),t.next(),a.inString=!0)),a.inString||a.inComment||!t.match("/*")||(a.inComment=!0),a.inString){for(;a.inString&&!t.eol();)t.peek()===a.stringType?(t.next(),a.inString=!1):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return a.lhs?"property string":"string"}if(a.inComment){for(;a.inComment&&!t.eol();)t.match("*/")?a.inComment=!1:t.match(/^.[^\*]*/);return"comment"}if(a.inCharacterClass)for(;a.inCharacterClass&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(/^\\./)||(a.inCharacterClass=!1);else{if("["===t.peek())return t.next(),a.inCharacterClass=!0,"bracket";if(t.match("//"))return t.skipToEnd(),"comment";if(a.braced||"{"===t.peek()){null===a.localState&&(a.localState=e.startState(n));var i=n.token(t,a.localState),c=t.current();if(!i)for(var l=0;l<c.length;l++)"{"===c[l]?a.braced++:"}"===c[l]&&a.braced--;return i}if(r(t))return":"===t.peek()?"variable":"variable-2";if(-1!=["[","]","(",")"].indexOf(t.peek()))return t.next(),"bracket";t.eatSpace()||t.next()}return null}}}),"javascript")}(n(69),n(387))}}]);
//# sourceMappingURL=79.49cc4641.chunk.js.map