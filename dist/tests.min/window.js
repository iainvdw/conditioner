!function(a,b){"use strict";var c=0,d={setup:function(b){a.addEventListener("resize",b,!1)},measure:function(){return c=a.innerWidth||b.documentElement.clientWidth,!0},assert:function(a){var b=a.split(":"),d=b[0],e=parseInt(b[1],10);return"min-width"===d?c>=e:"max-width"===d?e>=c:!1}};"undefined"!=typeof module&&module.exports?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}(window,document);