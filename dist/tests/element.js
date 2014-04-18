/**
 * Tests if an elements dimensions match certain expectations
 * @module tests/element
 */
(function(win,undefined){

	'use strict';

	var _isVisible = function(element) {
		var viewHeight = win.innerHeight,
		bounds = element.getBoundingClientRect();
		return (bounds.top > 0 && bounds.top < viewHeight) || (bounds.bottom > 0 && bounds.bottom < viewHeight);
	};

	var test = {

		/**
		 * Setup events that trigger reassertion of element
		 * @param {Function} measure
		 */
		setup:function(measure) {
			win.addEventListener('resize',measure,false);
			win.addEventListener('scroll',measure,false);
		},

		/**
		 * Assert if matches expected value
		 * @param {String} expected
		 * @param {Element} element
		 * @returns {Boolean}
		 */
		assert:function(expected,element) {

			if (expected === 'seen') {
				if (!this._seen) {
					this._seen = _isVisible(element);
				}
				return this._seen;
			}
			else {

				var parts = expected.split(':'),key,value;

				if (!parts) {
					return false;
				}

				key = parts[0];
				value = parseInt(parts[1],10);

				if (key === 'min-width') {
					return element.offsetWidth >= value;
				}
				else if (key === 'max-width') {
					return element.offsetWidth <= value;
				}

			}

			return false;

		}
	};

    // https://github.com/umdjs/umd
    // CommonJS
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = test;
    }
    // AMD
    else if (typeof define === 'function' && define.amd) {
        define(function(){return test;});
    }

}());
