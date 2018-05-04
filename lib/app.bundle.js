(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./formDataValidator.js":
/*!******************************!*\
  !*** ./formDataValidator.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import isEmail from 'validator/lib/isEmail';
var FormDataValidator =
/*#__PURE__*/
function () {
  function FormDataValidator() {
    _classCallCheck(this, FormDataValidator);
  }

  _createClass(FormDataValidator, null, [{
    key: "getAllForms",
    value: function getAllForms(selector, options) {
      Array.from(_toConsumableArray(document.querySelectorAll(selector))).forEach(function (form) {
        FormDataValidator.validateForm(form, options);
      });
    }
  }, {
    key: "validateForm",
    value: function validateForm(form) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      form.noValidate = true;

      form.isValid = function () {
        return _this.isValid(form, options);
      };

      form.addEventListener('submit', function (event) {
        var isValid = _this.isValid(form, options);

        if (!isValid) {
          event.preventDefault();
          window.scrollTo(0, form.querySelector('.error').getBoundingClientRect().top);
        }
      });
    }
  }, {
    key: "isValid",
    value: function isValid(form) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var formvalid = true;
      Array.from(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach(function (field) {
        formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;
        field.addEventListener('blur', function () {
          formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;
        });
        field.addEventListener('change', function () {
          formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;
        });
      });
      return formvalid;
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var form = arguments.length > 2 ? arguments[2] : undefined;
      var isValid = true; // First check native html 5 validation

      if (typeof field.willValidate !== 'undefined') {
        if (field.nodeName === 'INPUT' && field.type !== field.getAttribute('type')) {// input type not supported! Use legacy JavaScript validation
        }

        field.checkValidity();
      } else {// native validation not available
      }

      if (!field.validity.valid) {
        isValid = false;
      } // Loop over custom methods to override browser default check


      if (typeof options.methods !== 'undefined') {
        Object.keys(options.methods).forEach(function (method) {
          if (field.getAttribute('type') === method) {
            isValid = !options.methods[method](field) ? false : isValid;
          }

          return isValid;
        });
      } // Loop over custom rules to override browser default check


      if (typeof options.rules !== 'undefined') {
        Object.keys(options.rules).forEach(function (rule) {
          if (field.id === rule) {
            isValid = !options.rules[rule](field) ? false : isValid;
          }

          return isValid;
        });
      }

      if (isValid) {
        FormDataValidator.removeError(field, form);
      } else {
        // Loop over the errors and get the first one
        var errorText = '';

        for (var rule in field.validity) {
          if (field.validity[rule]) {
            var kebabRule = rule.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (match) {
              return "- ".concat(match.toLowerCase());
            });
            errorText = field.getAttribute("data-".concat(kebabRule));
            break;
          }
        }

        FormDataValidator.showError(field, form, errorText);
      }

      return isValid;
    }
  }, {
    key: "showError",
    value: function showError(field, form) {
      var parent = field.parentNode;
      parent.classList.add('error');
      var label = form.querySelector("label[for=".concat(field.id, "]:not(:empty)"));
      if (label != null) label.classList.add('error');
    }
  }, {
    key: "removeError",
    value: function removeError(field, form) {
      var parent = field.parentNode;
      parent.classList.remove('error');
      var label = form.querySelector("label[for=".concat(field.id, "]:not(:empty)"));
      if (label != null) label.classList.remove('error');
    }
  }, {
    key: "validateAllForms",
    value: function validateAllForms() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'form';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      FormDataValidator.getAllForms(selector, options);
    }
  }]);

  return FormDataValidator;
}();

exports.default = FormDataValidator;

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi formDataValidator.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! formDataValidator.js */"./formDataValidator.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9mb3JtRGF0YVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJGb3JtRGF0YVZhbGlkYXRvciIsInNlbGVjdG9yIiwib3B0aW9ucyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmb3JtIiwidmFsaWRhdGVGb3JtIiwibm9WYWxpZGF0ZSIsImlzVmFsaWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInNjcm9sbFRvIiwicXVlcnlTZWxlY3RvciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImZvcm12YWxpZCIsImZpZWxkIiwidmFsaWRhdGVGaWVsZCIsIndpbGxWYWxpZGF0ZSIsIm5vZGVOYW1lIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwibWV0aG9kcyIsIk9iamVjdCIsImtleXMiLCJtZXRob2QiLCJydWxlcyIsInJ1bGUiLCJpZCIsInJlbW92ZUVycm9yIiwiZXJyb3JUZXh0Iiwia2ViYWJSdWxlIiwicmVwbGFjZSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJzaG93RXJyb3IiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiYWRkIiwibGFiZWwiLCJyZW1vdmUiLCJnZXRBbGxGb3JtcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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S0ssT0FBTCxDQUFhLGtDQUFiLEVBQWlEO0FBQUEsaUNBQWNDLE1BQU1DLFdBQU4sRUFBZDtBQUFBLGFBQWpELENBQWxCO0FBQ0FKLHdCQUFZakIsTUFBTUssWUFBTixnQkFBMkJhLFNBQTNCLEVBQVo7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0R2QywwQkFBa0IyQyxTQUFsQixDQUE0QnRCLEtBQTVCLEVBQW1DYixJQUFuQyxFQUF5QzhCLFNBQXpDO0FBQ0Q7O0FBRUQsYUFBTzNCLE9BQVA7QUFDRDs7OzhCQUVnQlUsSyxFQUFPYixJLEVBQU07QUFDNUIsVUFBTW9DLFNBQVN2QixNQUFNd0IsVUFBckI7QUFFQUQsYUFBT0UsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsT0FBckI7QUFFQSxVQUFNQyxRQUFReEMsS0FBS1MsYUFBTCxxQkFBZ0NJLE1BQU1lLEVBQXRDLG1CQUFkO0FBQ0EsVUFBSVksU0FBUyxJQUFiLEVBQW1CQSxNQUFNRixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixPQUFwQjtBQUNwQjs7O2dDQUVrQjFCLEssRUFBT2IsSSxFQUFNO0FBQzlCLFVBQU1vQyxTQUFTdkIsTUFBTXdCLFVBQXJCO0FBQ0FELGFBQU9FLFNBQVAsQ0FBaUJHLE1BQWpCLENBQXdCLE9BQXhCO0FBRUEsVUFBTUQsUUFBUXhDLEtBQUtTLGFBQUwscUJBQWdDSSxNQUFNZSxFQUF0QyxtQkFBZDtBQUNBLFVBQUlZLFNBQVMsSUFBYixFQUFtQkEsTUFBTUYsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsT0FBdkI7QUFDcEI7Ozt1Q0FFd0Q7QUFBQSxVQUFqQ2hELFFBQWlDLHVFQUF0QixNQUFzQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUN2REYsd0JBQWtCa0QsV0FBbEIsQ0FBOEJqRCxRQUE5QixFQUF3Q0MsT0FBeEM7QUFDRCIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBpbXBvcnQgaXNFbWFpbCBmcm9tICd2YWxpZGF0b3IvbGliL2lzRW1haWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGF0YVZhbGlkYXRvciB7XG4gIHN0YXRpYyBnZXRBbGxGb3JtcyhzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIEFycmF5LmZyb20oWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXSkuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgRm9ybURhdGFWYWxpZGF0b3IudmFsaWRhdGVGb3JtKGZvcm0sIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlRm9ybShmb3JtLCBvcHRpb25zID0ge30pIHtcbiAgICBmb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xuXG4gICAgZm9ybS5pc1ZhbGlkID0gKCkgPT4gdGhpcy5pc1ZhbGlkKGZvcm0sIG9wdGlvbnMpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoZm9ybSwgb3B0aW9ucyk7XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZm9ybS5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzVmFsaWQoZm9ybSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGZvcm12YWxpZCA9IHRydWU7XG5cbiAgICBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSxzZWxlY3QsdGV4dGFyZWEnKSkuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZvcm12YWxpZCA9ICFGb3JtRGF0YVZhbGlkYXRvclxuICAgICAgICAudmFsaWRhdGVGaWVsZChmaWVsZCwgb3B0aW9ucywgZm9ybSkgPyBmYWxzZSA6IGZvcm12YWxpZDtcblxuICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgZm9ybXZhbGlkID0gIUZvcm1EYXRhVmFsaWRhdG9yXG4gICAgICAgICAgLnZhbGlkYXRlRmllbGQoZmllbGQsIG9wdGlvbnMsIGZvcm0pID8gZmFsc2UgOiBmb3JtdmFsaWQ7XG4gICAgICB9KTtcbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgZm9ybXZhbGlkID0gIUZvcm1EYXRhVmFsaWRhdG9yXG4gICAgICAgICAgLnZhbGlkYXRlRmllbGQoZmllbGQsIG9wdGlvbnMsIGZvcm0pID8gZmFsc2UgOiBmb3JtdmFsaWQ7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmb3JtdmFsaWQ7XG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVGaWVsZChmaWVsZCwgb3B0aW9ucyA9IHt9LCBmb3JtKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgLy8gRmlyc3QgY2hlY2sgbmF0aXZlIGh0bWwgNSB2YWxpZGF0aW9uXG4gICAgaWYgKHR5cGVvZiBmaWVsZC53aWxsVmFsaWRhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoZmllbGQubm9kZU5hbWUgPT09ICdJTlBVVCcgJiYgZmllbGQudHlwZSAhPT0gZmllbGQuZ2V0QXR0cmlidXRlKCd0eXBlJykpIHtcbiAgICAgICAgLy8gaW5wdXQgdHlwZSBub3Qgc3VwcG9ydGVkISBVc2UgbGVnYWN5IEphdmFTY3JpcHQgdmFsaWRhdGlvblxuICAgICAgfVxuICAgICAgZmllbGQuY2hlY2tWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBuYXRpdmUgdmFsaWRhdGlvbiBub3QgYXZhaWxhYmxlXG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIExvb3Agb3ZlciBjdXN0b20gbWV0aG9kcyB0byBvdmVycmlkZSBicm93c2VyIGRlZmF1bHQgY2hlY2tcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubWV0aG9kcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMubWV0aG9kcykuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gbWV0aG9kKSB7XG4gICAgICAgICAgaXNWYWxpZCA9ICFvcHRpb25zLm1ldGhvZHNbbWV0aG9kXShmaWVsZCkgPyBmYWxzZSA6IGlzVmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgY3VzdG9tIHJ1bGVzIHRvIG92ZXJyaWRlIGJyb3dzZXIgZGVmYXVsdCBjaGVja1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ydWxlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMucnVsZXMpLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkLmlkID09PSBydWxlKSB7XG4gICAgICAgICAgaXNWYWxpZCA9ICFvcHRpb25zLnJ1bGVzW3J1bGVdKGZpZWxkKSA/IGZhbHNlIDogaXNWYWxpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBGb3JtRGF0YVZhbGlkYXRvci5yZW1vdmVFcnJvcihmaWVsZCwgZm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvb3Agb3ZlciB0aGUgZXJyb3JzIGFuZCBnZXQgdGhlIGZpcnN0IG9uZVxuICAgICAgbGV0IGVycm9yVGV4dCA9ICcnO1xuICAgICAgZm9yIChjb25zdCBydWxlIGluIGZpZWxkLnZhbGlkaXR5KSB7XG4gICAgICAgIGlmIChmaWVsZC52YWxpZGl0eVtydWxlXSkge1xuICAgICAgICAgIGNvbnN0IGtlYmFiUnVsZSA9IHJ1bGUucmVwbGFjZSgvW0EtWlxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBERV0vZywgbWF0Y2ggPT4gYC0gJHttYXRjaC50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgICAgIGVycm9yVGV4dCA9IGZpZWxkLmdldEF0dHJpYnV0ZShgZGF0YS0ke2tlYmFiUnVsZX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgRm9ybURhdGFWYWxpZGF0b3Iuc2hvd0Vycm9yKGZpZWxkLCBmb3JtLCBlcnJvclRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgc3RhdGljIHNob3dFcnJvcihmaWVsZCwgZm9ybSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGZpZWxkLnBhcmVudE5vZGU7XG5cbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9JHtmaWVsZC5pZH1dOm5vdCg6ZW1wdHkpYCk7XG4gICAgaWYgKGxhYmVsICE9IG51bGwpIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRXJyb3IoZmllbGQsIGZvcm0pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBmaWVsZC5wYXJlbnROb2RlO1xuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj0ke2ZpZWxkLmlkfV06bm90KDplbXB0eSlgKTtcbiAgICBpZiAobGFiZWwgIT0gbnVsbCkgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbiAgfVxuXG4gIHN0YXRpYyB2YWxpZGF0ZUFsbEZvcm1zKHNlbGVjdG9yID0gJ2Zvcm0nLCBvcHRpb25zID0ge30pIHtcbiAgICBGb3JtRGF0YVZhbGlkYXRvci5nZXRBbGxGb3JtcyhzZWxlY3Rvciwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=