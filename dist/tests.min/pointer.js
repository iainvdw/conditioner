define(["Conditioner"],function(e){"use strict";var t=e.TestBase.inherit(),n=t.prototype,i=2;return n._totalMouseMoves=0,n.handleEvent=function(e){"mousemove"==e.type?(this._totalMouseMoves++,this._totalMouseMoves>=i&&(document.removeEventListener("mousemove",this,!1),document.removeEventListener("mousedown",this,!1))):this._totalMouseMoves=0,this.assert()},n.arrange=function(){document.addEventListener("mousemove",this,!1),document.addEventListener("mousedown",this,!1);var e=this;setTimeout(function(){document.removeEventListener("mousemove",e,!1),document.removeEventListener("mousedown",e,!1)},1e4)},n._onAssert=function(e){var t="";return this._totalMouseMoves>=i&&(t="available"),t===e},t});