/*! For license information please see 222553d5e7bb3176437c10b945279ed215cf9560-48c57aa2872aa7778011.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/d1K":function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("iSRb"),u=n.n(o),s=function(e){var t=e.author,n=e.isIndex;return r.a.createElement("div",{className:u.a.author},r.a.createElement(i.Link,{to:"/"},r.a.createElement("img",{src:Object(i.withPrefix)(t.photo),className:u.a.author__photo,width:"75",height:"75",alt:t.name})),!0===n?r.a.createElement("h1",{className:u.a.author__title},r.a.createElement(i.Link,{className:u.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:u.a.author__title},r.a.createElement(i.Link,{className:u.a["author__title-link"],to:"/"},t.name)),r.a.createElement("p",{className:u.a.author__subtitle},t.bio))},c=n("0lfv"),l=n("euHg"),d=n.n(l),m=function(e){var t=e.name,n=e.icon;return r.a.createElement("svg",{className:d.a.icon,viewBox:n.viewBox},r.a.createElement("title",null,t),r.a.createElement("path",{d:n.path}))},f=n("aU/I"),h=n.n(f),g=function(e){var t=e.contacts;return r.a.createElement("div",{className:h.a.contacts},r.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return t[e]?r.a.createElement("li",{className:h.a["contacts__list-item"],key:e},r.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(c.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(m,{name:e,icon:Object(c.b)(e)}))):null}))))},w=n("Nrk+"),v=n.n(w),p=function(e){var t=e.copyright;return r.a.createElement("div",{className:v.a.copyright},t)},b=n("je8k"),_=n.n(b),y=function(e){var t=e.menu;return r.a.createElement("nav",{className:_.a.menu},r.a.createElement("ul",{className:_.a.menu__list},t.map((function(e){return r.a.createElement("li",{className:_.a["menu__list-item"],key:e.path},r.a.createElement(i.Link,{to:e.path,className:_.a["menu__list-item-link"],activeClassName:_.a["menu__list-item-link--active"]},e.label))}))))},T=n("SySy"),x=n.n(T),M=n("eZYV"),D=function(e){var t=e.isIndex,n=Object(M.b)(),a=n.author,i=n.copyright,o=n.menu;return r.a.createElement("div",{className:x.a.sidebar},r.a.createElement("div",{className:x.a.sidebar__inner},r.a.createElement(s,{author:a,isIndex:t}),r.a.createElement(y,{menu:o}),r.a.createElement(g,{contacts:a.contacts}),r.a.createElement(p,{copyright:i})))}},"1xLx":function(e,t,n){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ye}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("1xLx"),u=n.n(o);function s(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}function c(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function l(e){c(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e){c(1,arguments);var t=l(e);return!isNaN(t)}var m={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var h={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function v(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=a.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(c.length)}}}var p,b={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof m[e]?m[e]:1===t?m[e].one:m[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:h,formatRelative:function(e,t,n,a){return g[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(p.matchPattern);if(!r)return null;var i=r[0],o=n.match(p.parsePattern);if(!o)return null;var u=p.valueCallback?p.valueCallback(o[0]):o[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(i.length)}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function _(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){c(2,arguments);var n=l(e).getTime(),a=_(t);return new Date(n+a)}function T(e,t){c(2,arguments);var n=_(t);return y(e,-n)}function x(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var M={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return x("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):x(n+1,2)},d:function(e,t){return x(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return x(e.getUTCHours()%12||12,t.length)},H:function(e,t){return x(e.getUTCHours(),t.length)},m:function(e,t){return x(e.getUTCMinutes(),t.length)},s:function(e,t){return x(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return x(Math.floor(a*Math.pow(10,n-3)),t.length)}};function D(e){c(1,arguments);var t=1,n=l(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function N(e){c(1,arguments);var t=l(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=D(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=D(i);return t.getTime()>=r.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function C(e){c(1,arguments);var t=N(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=D(n);return a}function k(e,t){c(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:_(r),o=null==n.weekStartsOn?i:_(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=l(e),s=u.getUTCDay(),d=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-d),u.setUTCHours(0,0,0,0),u}function E(e,t){c(1,arguments);var n=l(e,t),a=n.getUTCFullYear(),r=t||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:_(o),s=null==r.firstWeekContainsDate?u:_(r.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,s),d.setUTCHours(0,0,0,0);var m=k(d,t),f=new Date(0);f.setUTCFullYear(a,0,s),f.setUTCHours(0,0,0,0);var h=k(f,t);return n.getTime()>=m.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function P(e,t){c(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:_(r),o=null==n.firstWeekContainsDate?i:_(n.firstWeekContainsDate),u=E(e,t),s=new Date(0);s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0);var l=k(s,t);return l}var U="midnight",S="noon",Y="morning",z="afternoon",O="evening",W="night";function H(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+x(i,2)}function F(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):X(e,t)}function X(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+x(Math.floor(r/60),2)+n+x(r%60,2)}var j={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return M.y(e,t)},Y:function(e,t,n,a){var r=E(e,a),i=r>0?r:1-r;return"YY"===t?x(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):x(i,t.length)},R:function(e,t){return x(N(e),t.length)},u:function(e,t){return x(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return x(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return x(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return M.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return x(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){c(1,arguments);var n=l(e),a=k(n,t).getTime()-P(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):x(r,t.length)},I:function(e,t,n){var a=function(e){c(1,arguments);var t=l(e),n=D(t).getTime()-C(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):x(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):M.d(e,t)},D:function(e,t,n){var a=function(e){c(1,arguments);var t=l(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):x(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return x(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return x(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return x(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?S:0===r?U:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?O:r>=12?z:r>=4?Y:W,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return M.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):M.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):x(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):x(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):M.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):M.s(e,t)},S:function(e,t){return M.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return F(r);case"XXXX":case"XX":return X(r);case"XXXXX":case"XXX":default:return X(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return F(r);case"xxxx":case"xx":return X(r);case"xxxxx":case"xxx":default:return X(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+H(r,":");case"OOOO":default:return"GMT"+X(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+H(r,":");case"zzzz":default:return"GMT"+X(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return x(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return x((a._originalDate||e).getTime(),t.length)}};function q(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function I(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Z={p:I,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return q(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",q(r,t)).replace("{{time}}",I(i,t))}};function A(e){return e.getTime()%6e4}function L(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+A(t))%6e4:A(t))}var B=["D","DD"],G=["YY","YYYY"];function R(e){return-1!==B.indexOf(e)}function Q(e){return-1!==G.indexOf(e)}function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e,t,n){c(2,arguments);var a=String(t),r=n||{},i=r.locale||b,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:_(o),s=null==r.firstWeekContainsDate?u:_(r.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=i.options&&i.options.weekStartsOn,f=null==m?0:_(m),h=null==r.weekStartsOn?f:_(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=l(e);if(!d(g))throw new RangeError("Invalid time value");var w=L(g),v=T(g,w),p={firstWeekContainsDate:s,weekStartsOn:h,locale:i,_originalDate:g},y=a.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Z[t])(e,i.formatLong,p):e})).join("").match(J).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ae(n);var o=j[a];if(o)return!r.useAdditionalWeekYearTokens&&Q(n)&&$(n,t,e),!r.useAdditionalDayOfYearTokens&&R(n)&&$(n,t,e),o(v,n,i.localize,p);if(a.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return y}function ae(e){return e.match(K)[1].replace(ee,"'")}function re(e,t){var n=function(e){if(!oe[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n="06/25/2014, 00:00:00"===t||"‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00"===t;oe[e]=n?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return oe[e]}(t);return n.formatToParts?function(e,t){for(var n=e.formatToParts(t),a=[],r=0;r<n.length;r++){var i=ie[n[r].type];i>=0&&(a[i]=parseInt(n[r].value,10))}return a}(n,e):function(e,t){var n=e.format(t).replace(/\u200E/g,""),a=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[a[3],a[1],a[2],a[4],a[5],a[6]]}(n,e)}var ie={year:0,month:1,day:2,hour:3,minute:4,second:5};var oe={};var ue={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/,timezoneIANA:/(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function se(e,t){var n,a,r;if(n=ue.timezoneZ.exec(e))return 0;if(n=ue.timezoneHH.exec(e))return ce(r=parseInt(n[2],10))?(a=36e5*r,"+"===n[1]?-a:a):NaN;if(n=ue.timezoneHHMM.exec(e)){r=parseInt(n[2],10);var i=parseInt(n[3],10);return ce(r,i)?(a=36e5*r+6e4*i,"+"===n[1]?-a:a):NaN}if(n=ue.timezoneIANA.exec(e)){var o=re(t,e);return-(Date.UTC(o[0],o[1]-1,o[2],o[3],o[4],o[5])-(t.getTime()-t.getTime()%1e3))}return 0}function ce(e,t){return null==t||!(t<0||t>59)}var le={dateTimeDelimeter:/[T ]/,plainTime:/:/,timeZoneDelimeter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function de(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var n=t||{},a=null==n.additionalDigits?2:_(n.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r=me(e),i=fe(r.date,a),o=i.year,u=i.restDateString,s=he(u,o);if(isNaN(s))return new Date(NaN);if(s){var c,l=s.getTime(),d=0;if(r.time&&(d=ge(r.time),isNaN(d)))return new Date(NaN);if(r.timezone||n.timeZone){if(c=se(r.timezone||n.timeZone,new Date(l+d)),isNaN(c))return new Date(NaN);if(c=se(r.timezone||n.timeZone,new Date(l+d+c)),isNaN(c))return new Date(NaN)}else c=L(new Date(l+d)),c=L(new Date(l+d+c));return new Date(l+d+c)}return new Date(NaN)}function me(e){var t,n={},a=e.split(le.dateTimeDelimeter);if(le.plainTime.test(a[0])?(n.date=null,t=a[0]):(n.date=a[0],t=a[1],n.timezone=a[2],le.timeZoneDelimeter.test(n.date)&&(n.date=e.split(le.timeZoneDelimeter)[0],t=e.substr(n.date.length,e.length))),t){var r=le.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function fe(e,t){var n,a=le.YYY[t],r=le.YYYYY[t];if(n=le.YYYY.exec(e)||r.exec(e)){var i=n[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(n=le.YY.exec(e)||a.exec(e)){var o=n[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}function he(e,t){if(null===t)return null;var n,a,r,i;if(0===e.length)return(a=new Date(0)).setUTCFullYear(t),a;if(n=le.MM.exec(e))return a=new Date(0),_e(t,r=parseInt(n[1],10)-1)?(a.setUTCFullYear(t,r),a):new Date(NaN);if(n=le.DDD.exec(e)){a=new Date(0);var o=parseInt(n[1],10);return function(e,t){if(t<1)return!1;var n=be(e);if(n&&t>366)return!1;if(!n&&t>365)return!1;return!0}(t,o)?(a.setUTCFullYear(t,0,o),a):new Date(NaN)}if(n=le.MMDD.exec(e)){a=new Date(0),r=parseInt(n[1],10)-1;var u=parseInt(n[2],10);return _e(t,r,u)?(a.setUTCFullYear(t,r,u),a):new Date(NaN)}if(n=le.Www.exec(e))return ye(t,i=parseInt(n[1],10)-1)?we(t,i):new Date(NaN);if(n=le.WwwD.exec(e)){i=parseInt(n[1],10)-1;var s=parseInt(n[2],10)-1;return ye(t,i,s)?we(t,i,s):new Date(NaN)}return null}function ge(e){var t,n,a;if(t=le.HH.exec(e))return Te(n=parseFloat(t[1].replace(",",".")))?n%24*36e5:NaN;if(t=le.HHMM.exec(e))return Te(n=parseInt(t[1],10),a=parseFloat(t[2].replace(",",".")))?n%24*36e5+6e4*a:NaN;if(t=le.HHMMSS.exec(e)){n=parseInt(t[1],10),a=parseInt(t[2],10);var r=parseFloat(t[3].replace(",","."));return Te(n,a,r)?n%24*36e5+6e4*a+1e3*r:NaN}return null}function we(e,t,n){t=t||0,n=n||0;var a=new Date(0);a.setUTCFullYear(e,0,4);var r=7*t+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}var ve=[31,28,31,30,31,30,31,31,30,31,30,31],pe=[31,29,31,30,31,30,31,31,30,31,30,31];function be(e){return e%400==0||e%4==0&&e%100!=0}function _e(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;var a=be(e);if(a&&n>pe[t])return!1;if(!a&&n>ve[t])return!1}return!0}function ye(e,t,n){return!(t<0||t>52)&&(null==n||!(n<0||n>6))}function Te(e,t,n){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}function xe(e,t,n){e instanceof Date&&(e=ne(e,"yyyy-MM-dd'T'HH:mm:ss.SSS"));var a=s(n);return a.timeZone=t,de(e,a)}n("E9XD");function Me(e,t,n){var a=function(e,t,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:t,timeZoneName:e})}(e,n.timeZone,n.locale);return a.formatToParts?function(e,t){var n=e.formatToParts(t);return n[n.length-1].value}(a,t):function(e,t){var n=e.format(t).replace(/\u200E/g,""),a=/ [\w-+ ]+$/.exec(n);return a?a[0].substr(1):""}(a,t)}function De(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}function Ne(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+De(Math.floor(r/60),2)+n+De(r%60,2)}function Ce(e,t){return e%60==0?(e>0?"-":"+")+De(Math.abs(e)/60,2):Ne(e,t)}var ke={X:function(e,t,n,a){var r=a._originalDate||e,i=a.timeZone?se(a.timeZone,r)/6e4:r.getTimezoneOffset();if(0===i)return"Z";switch(t){case"X":return Ce(i);case"XXXX":case"XX":return Ne(i);case"XXXXX":case"XXX":default:return Ne(i,":")}},x:function(e,t,n,a){var r=a._originalDate||e,i=a.timeZone?se(a.timeZone,r)/6e4:r.getTimezoneOffset();switch(t){case"x":return Ce(i);case"xxxx":case"xx":return Ne(i);case"xxxxx":case"xxx":default:return Ne(i,":")}},O:function(e,t,n,a){var r=a._originalDate||e,i=a.timeZone?se(a.timeZone,r)/6e4:r.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+function(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+De(i,2)}(i,":");case"OOOO":default:return"GMT"+Ne(i,":")}},z:function(e,t,n,a){var r=a._originalDate||e;switch(t){case"z":case"zz":case"zzz":return Me("short",r,a);case"zzzz":default:return Me("long",r,a)}}},Ee=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function Pe(e,t,n){var a=String(t),r=n||{},i=a.match(Ee);if(i){var o=de(e,r);a=i.reduce((function(e,t){return"'"===t[0]?e:e.replace(t,"'"+ke[t[0]](o,t,null,r)+"'")}),a)}return ne(e,a,r)}function Ue(e,t,n){var a=de(e,n),r=new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),i=se(t,r);return i?T(r,i):r}var Se="America/New_York";var Ye=function(e){var t=e.edges;return r.a.createElement("div",{className:u.a.feed},t.map((function(e){return r.a.createElement("div",{className:u.a.feed__item,key:e.node.fields.slug},r.a.createElement("div",{className:u.a["feed__item-meta"]},r.a.createElement("time",{className:u.a["feed__item-meta-time"],dateTime:(t=e.node.frontmatter.date,Pe(Ue(xe(t,Se),Se),"MMMM d, uuuu",{timeZone:Se}))},function(e){return Pe(Ue(xe(e,Se),Se),"MMMM uuuu",{timeZone:Se})}(e.node.frontmatter.date)),r.a.createElement("span",{className:u.a["feed__item-meta-divider"]}),r.a.createElement("span",{className:u.a["feed__item-meta-category"]},r.a.createElement(i.Link,{to:e.node.fields.categorySlug,className:u.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),r.a.createElement("h2",{className:u.a["feed__item-title"]},r.a.createElement(i.Link,{className:u.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",{className:u.a["feed__item-description"]},e.node.frontmatter.description),r.a.createElement(i.Link,{className:u.a["feed__item-readmore"],to:e.node.fields.slug},"Read"));var t})))}},"Nrk+":function(e,t,n){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,n){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=n("RBgx"),o=n.n(i),u=function(e){var t=e.title,n=e.children,i=Object(a.useRef)();return Object(a.useEffect)((function(){i.current.scrollIntoView()})),r.a.createElement("div",{ref:i,className:o.a.page},r.a.createElement("div",{className:o.a.page__inner},t&&r.a.createElement("h1",{className:o.a.page__title},t),r.a.createElement("div",{className:o.a.page__body},n)))}},SySy:function(e,t,n){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,n){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},"aU/I":function(e,t,n){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,n){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,n){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,n){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),i=n("UbMB"),o=n.n(i),u=n("Wbzz"),s=n("jxKE"),c=n("U4DU"),l=n.n(c),d=o.a.bind(l.a),m=function(e){var t=e.prevPagePath,n=e.nextPagePath,a=e.hasNextPage,i=e.hasPrevPage,o=d({"pagination__prev-link":!0,"pagination__prev-link--disable":!i}),c=d({"pagination__next-link":!0,"pagination__next-link--disable":!a});return r.a.createElement("div",{className:l.a.pagination},r.a.createElement("div",{className:l.a.pagination__prev},r.a.createElement(u.Link,{rel:"prev",to:i?t:"/",className:o},s.b.PREV_PAGE)),r.a.createElement("div",{className:l.a.pagination__next},r.a.createElement(u.Link,{rel:"next",to:a?n:"/",className:c},s.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=222553d5e7bb3176437c10b945279ed215cf9560-48c57aa2872aa7778011.js.map