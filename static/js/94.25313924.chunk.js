(this["webpackJsonpchallenge-chart-plot"]=this["webpackJsonpchallenge-chart-plot"]||[]).push([[94],{471:function(t,e,n){!function(t){"use strict";t.defineMode("shell",(function(){var e={};function n(t,n){for(var r=0;r<n.length;r++)e[n[r]]=t}var r=["true","false"],s=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],i=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function o(t,n){if(t.eatSpace())return null;var r=t.sol(),s=t.next();if("\\"===s)return t.next(),null;if("'"===s||'"'===s||"`"===s)return n.tokens.unshift(u(s,"`"===s?"quote":"string")),c(t,n);if("#"===s)return r&&t.eat("!")?(t.skipToEnd(),"meta"):(t.skipToEnd(),"comment");if("$"===s)return n.tokens.unshift(l),c(t,n);if("+"===s||"="===s)return"operator";if("-"===s)return t.eat("-"),t.eatWhile(/\w/),"attribute";if("<"==s){if(t.match("<<"))return"operator";var i=t.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(i)return n.tokens.unshift(a(i[1])),"string-2"}if(/\d/.test(s)&&(t.eatWhile(/\d/),t.eol()||!/\w/.test(t.peek())))return"number";t.eatWhile(/[\w-]/);var o=t.current();return"="===t.peek()&&/\w+/.test(o)?"def":e.hasOwnProperty(o)?e[o]:null}function u(t,e){var n="("==t?")":"{"==t?"}":t;return function(r,s){for(var i,o=!1;null!=(i=r.next());){if(i===n&&!o){s.tokens.shift();break}if("$"===i&&!o&&"'"!==t&&r.peek()!=n){o=!0,r.backUp(1),s.tokens.unshift(l);break}if(!o&&t!==n&&i===t)return s.tokens.unshift(u(t,e)),c(r,s);if(!o&&/['"]/.test(i)&&!/['"]/.test(t)){s.tokens.unshift(f(i,"string")),r.backUp(1);break}o=!o&&"\\"===i}return e}}function f(t,e){return function(n,r){return r.tokens[0]=u(t,e),n.next(),c(n,r)}}t.registerHelper("hintWords","shell",r.concat(s,i)),n("atom",r),n("keyword",s),n("builtin",i);var l=function(t,e){e.tokens.length>1&&t.eat("$");var n=t.next();return/['"({]/.test(n)?(e.tokens[0]=u(n,"("==n?"quote":"{"==n?"def":"string"),c(t,e)):(/\d/.test(n)||t.eatWhile(/\w/),e.tokens.shift(),"def")};function a(t){return function(e,n){return e.sol()&&e.string==t&&n.tokens.shift(),e.skipToEnd(),"string-2"}}function c(t,e){return(e.tokens[0]||o)(t,e)}return{startState:function(){return{tokens:[]}},token:function(t,e){return c(t,e)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}})),t.defineMIME("text/x-sh","shell"),t.defineMIME("application/x-sh","shell")}(n(69))}}]);
//# sourceMappingURL=94.25313924.chunk.js.map