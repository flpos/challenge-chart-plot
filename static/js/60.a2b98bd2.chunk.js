(this["webpackJsonpchallenge-chart-plot"]=this["webpackJsonpchallenge-chart-plot"]||[]).push([[60],{434:function(t,e,n){!function(t){"use strict";t.defineMode("haxe",(function(t,e){var n=t.indentUnit;function r(t){return{type:t,style:"keyword"}}var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),c=r("operator"),u={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:c,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:u,false:u,null:u},p=/[+\-*&%=<>!?|]/;function m(t,e,n){return e.tokenize=n,n(t,e)}function v(t,e){for(var n,r=!1;null!=(n=t.next());){if(n==e&&!r)return!0;r=!r&&"\\"==n}}function h(t,e,n){return s=t,a=n,e}function b(t,e){var n=t.next();if('"'==n||"'"==n)return m(t,e,y(n));if(/[\[\]{}\(\),;\:\.]/.test(n))return h(n);if("0"==n&&t.eat(/x/i))return t.eatWhile(/[\da-f]/i),h("number","number");if(/\d/.test(n)||"-"==n&&t.eat(/\d/))return t.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),h("number","number");if(e.reAllowed&&"~"==n&&t.eat(/\//))return v(t,"/"),t.eatWhile(/[gimsu]/),h("regexp","string-2");if("/"==n)return t.eat("*")?m(t,e,x):t.eat("/")?(t.skipToEnd(),h("comment","comment")):(t.eatWhile(p),h("operator",null,t.current()));if("#"==n)return t.skipToEnd(),h("conditional","meta");if("@"==n)return t.eat(/:/),t.eatWhile(/[\w_]/),h("metadata","meta");if(p.test(n))return t.eatWhile(p),h("operator",null,t.current());if(/[A-Z]/.test(n))return t.eatWhile(/[\w_<>]/),h("type","variable-3",r=t.current());t.eatWhile(/[\w_]/);var r=t.current(),a=d.propertyIsEnumerable(r)&&d[r];return a&&e.kwAllowed?h(a.type,a.style,r):h("variable","variable",r)}function y(t){return function(e,n){return v(e,t)&&(n.tokenize=b),h("string","string")}}function x(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=b;break}r="*"==n}return h("comment","comment")}var k={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function w(t,e,n,r,a,i){this.indented=t,this.column=e,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function g(t,e){for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0}function V(t,e,n,r,a){var i=t.cc;for(E.state=t,E.stream=a,E.marked=null,E.cc=i,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((i.length?i.pop():D)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return E.marked?E.marked:"variable"==n&&g(t,r)?"variable-2":"variable"==n&&A(t,r)?"variable-3":e}}function A(t,e){if(/[a-z]/.test(e.charAt(0)))return!1;for(var n=t.importedtypes.length,r=0;r<n;r++)if(t.importedtypes[r]==e)return!0}function S(t){for(var e=E.state,n=e.importedtypes;n;n=n.next)if(n.name==t)return;e.importedtypes={name:t,next:e.importedtypes}}var E={state:null,column:null,marked:null,cc:null};function W(){for(var t=arguments.length-1;t>=0;t--)E.cc.push(arguments[t])}function z(){return W.apply(null,arguments),!0}function M(t,e){for(var n=e;n;n=n.next)if(n.name==t)return!0;return!1}function C(t){var e=E.state;if(e.context){if(E.marked="def",M(t,e.localVars))return;e.localVars={name:t,next:e.localVars}}else if(e.globalVars){if(M(t,e.globalVars))return;e.globalVars={name:t,next:e.globalVars}}}var T={name:"this",next:null};function Z(){E.state.context||(E.state.localVars=T),E.state.context={prev:E.state.context,vars:E.state.localVars}}function I(){E.state.localVars=E.state.context.vars,E.state.context=E.state.context.prev}function O(t,e){var n=function(){var n=E.state;n.lexical=new w(n.indented,E.stream.column(),t,null,n.lexical,e)};return n.lex=!0,n}function P(){var t=E.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function _(t){function e(n){return n==t?z():";"==t?W():z(e)}return e}function D(t){return"@"==t?z(U):"var"==t?z(O("vardef"),R,_(";"),P):"keyword a"==t?z(O("form"),J,D,P):"keyword b"==t?z(O("form"),D,P):"{"==t?z(O("}"),Z,Q,P,I):";"==t?z():"attribute"==t?z(F):"function"==t?z(et):"for"==t?z(O("form"),_("("),O(")"),Y,_(")"),P,D,P):"variable"==t?z(O("stat"),H):"switch"==t?z(O("form"),J,O("}","switch"),_("{"),Q,P,P):"case"==t?z(J,_(":")):"default"==t?z(_(":")):"catch"==t?z(O("form"),Z,_("("),it,_(")"),D,P,I):"import"==t?z(q,_(";")):"typedef"==t?z(G):W(O("stat"),J,_(";"),P)}function J(t){return k.hasOwnProperty(t)||"type"==t?z(B):"function"==t?z(et):"keyword c"==t?z(j):"("==t?z(O(")"),j,_(")"),P,B):"operator"==t?z(J):"["==t?z(O("]"),N(j,"]"),P,B):"{"==t?z(O("}"),N(L,"}"),P,B):z()}function j(t){return t.match(/[;\}\)\],]/)?W():W(J)}function B(t,e){return"operator"==t&&/\+\+|--/.test(e)?z(B):"operator"==t||":"==t?z(J):";"!=t?"("==t?z(O(")"),N(J,")"),P,B):"."==t?z(K,B):"["==t?z(O("]"),J,_("]"),P,B):void 0:void 0}function F(t){return"attribute"==t?z(F):"function"==t?z(et):"var"==t?z(R):void 0}function U(t){return":"==t||"variable"==t?z(U):"("==t?z(O(")"),N($,")"),P,D):void 0}function $(t){if("variable"==t)return z()}function q(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(S(e),z()):"variable"==t||"property"==t||"."==t||"*"==e?z(q):void 0}function G(t,e){return"variable"==t&&/[A-Z]/.test(e.charAt(0))?(S(e),z()):"type"==t&&/[A-Z]/.test(e.charAt(0))?z():void 0}function H(t){return":"==t?z(P,D):W(B,_(";"),P)}function K(t){if("variable"==t)return E.marked="property",z()}function L(t){if("variable"==t&&(E.marked="property"),k.hasOwnProperty(t))return z(_(":"),J)}function N(t,e){function n(r){return","==r?z(t,n):r==e?z():z(_(e))}return function(r){return r==e?z():W(t,n)}}function Q(t){return"}"==t?z():W(D,Q)}function R(t,e){return"variable"==t?(C(e),z(nt,X)):z()}function X(t,e){return"="==e?z(J,X):","==t?z(R):void 0}function Y(t,e){return"variable"==t?(C(e),z(tt,J)):W()}function tt(t,e){if("in"==e)return z()}function et(t,e){return"variable"==t||"type"==t?(C(e),z(et)):"new"==e?z(et):"("==t?z(O(")"),Z,N(it,")"),P,nt,D,I):void 0}function nt(t){if(":"==t)return z(rt)}function rt(t){return"type"==t||"variable"==t?z():"{"==t?z(O("}"),N(at,"}"),P):void 0}function at(t){if("variable"==t)return z(nt)}function it(t,e){if("variable"==t)return C(e),z(nt)}return I.lex=!0,P.lex=!0,{startState:function(t){var r=["Int","Float","String","Void","Std","Bool","Dynamic","Array"],a={tokenize:b,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new w((t||0)-n,0,"block",!1),localVars:e.localVars,importedtypes:r,context:e.localVars&&{vars:e.localVars},indented:0};return e.globalVars&&"object"==typeof e.globalVars&&(a.globalVars=e.globalVars),a},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"==s?n:(e.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),e.kwAllowed="."!=s,V(e,n,s,a,t))},indent:function(t,e){if(t.tokenize!=b)return 0;var r=e&&e.charAt(0),a=t.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n):a.indented+(/^(?:case|default)\b/.test(e)?n:2*n)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}})),t.defineMIME("text/x-haxe","haxe"),t.defineMode("hxml",(function(){return{startState:function(){return{define:!1,inString:!1}},token:function(t,e){var n=t.peek(),r=t.sol();if("#"==n)return t.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return t.eat(/-/),"-"==t.peek()&&(t.eat(/-/),a="keyword a"),"D"==t.peek()&&(t.eat(/[D]/),a="keyword c",e.define=!0),t.eatWhile(/[A-Z]/i),a}return n=t.peek(),0==e.inString&&"'"==n&&(e.inString=!0,t.next()),1==e.inString?(t.skipTo("'")||t.skipToEnd(),"'"==t.peek()&&(t.next(),e.inString=!1),"string"):(t.next(),null)},lineComment:"#"}})),t.defineMIME("text/x-hxml","hxml")}(n(69))}}]);
//# sourceMappingURL=60.a2b98bd2.chunk.js.map