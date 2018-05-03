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

    this.forms = [];
    this.errorMessages = [];
  }

  _createClass(FormDataValidator, [{
    key: "getAllForms",
    value: function getAllForms(selector, options) {
      var forms = document.querySelectorAll(selector);
      this.forms = _toConsumableArray(forms);
      Array.from(this.forms).forEach(function (form) {
        FormDataValidator.validateForm(form, options);
      });
    }
  }, {
    key: "validateAllForms",
    value: function validateAllForms() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'form';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        methods: {},
        rules: {}
      };
      this.getAllForms(selector, options);
    }
  }], [{
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
    value: function isValid(form, options) {
      var formvalid = true;
      Array.from(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach(function (field) {
        formvalid = !FormDataValidator.validateField(field, options.rules, form) ? false : formvalid;
        field.addEventListener('blur', function () {
          formvalid = !FormDataValidator.validateField(field, options.rules, form) ? false : formvalid;
        });
        field.addEventListener('change', function () {
          formvalid = !FormDataValidator.validateField(field, options.rules, form) ? false : formvalid;
        });
      });
      return formvalid;
    }
  }, {
    key: "validateField",
    value: function validateField(field) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        methods: {},
        rules: {}
      };
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


      Object.keys(options.methods).forEach(function (method) {
        if (field.getAttribute('type') === method) {
          isValid = !options.methods[method](field) ? false : isValid;
        }

        return isValid;
      }); // Loop over custom rules to override browser default check

      Object.keys(options.rules).forEach(function (rule) {
        if (field.id === rule) {
          isValid = !options.rules[rule](field) ? false : isValid;
        }

        return isValid;
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9mb3JtRGF0YVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJGb3JtRGF0YVZhbGlkYXRvciIsImZvcm1zIiwiZXJyb3JNZXNzYWdlcyIsInNlbGVjdG9yIiwib3B0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJmb3JtIiwidmFsaWRhdGVGb3JtIiwibWV0aG9kcyIsInJ1bGVzIiwiZ2V0QWxsRm9ybXMiLCJub1ZhbGlkYXRlIiwiaXNWYWxpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZm9ybXZhbGlkIiwiZmllbGQiLCJ2YWxpZGF0ZUZpZWxkIiwid2lsbFZhbGlkYXRlIiwibm9kZU5hbWUiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJPYmplY3QiLCJrZXlzIiwibWV0aG9kIiwicnVsZSIsImlkIiwicmVtb3ZlRXJyb3IiLCJlcnJvclRleHQiLCJrZWJhYlJ1bGUiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsInNob3dFcnJvciIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJsYWJlbCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QixPQUF2QjtBQUNwQiIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyBpbXBvcnQgaXNFbWFpbCBmcm9tICd2YWxpZGF0b3IvbGliL2lzRW1haWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGF0YVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9ybXMgPSBbXTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcbiAgfVxuXG4gIGdldEFsbEZvcm1zKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICB0aGlzLmZvcm1zID0gWy4uLmZvcm1zXTtcblxuICAgIEFycmF5LmZyb20odGhpcy5mb3JtcykuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgRm9ybURhdGFWYWxpZGF0b3IudmFsaWRhdGVGb3JtKGZvcm0sIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlRm9ybShmb3JtLCBvcHRpb25zID0ge30pIHtcbiAgICBmb3JtLm5vVmFsaWRhdGUgPSB0cnVlO1xuXG4gICAgZm9ybS5pc1ZhbGlkID0gKCkgPT4gdGhpcy5pc1ZhbGlkKGZvcm0sIG9wdGlvbnMpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoZm9ybSwgb3B0aW9ucyk7XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZm9ybS5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGlzVmFsaWQoZm9ybSwgb3B0aW9ucykge1xuICAgIGxldCBmb3JtdmFsaWQgPSB0cnVlO1xuXG4gICAgQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksc2VsZWN0LHRleHRhcmVhJykpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmb3JtdmFsaWQgPSAhRm9ybURhdGFWYWxpZGF0b3JcbiAgICAgICAgLnZhbGlkYXRlRmllbGQoZmllbGQsIG9wdGlvbnMucnVsZXMsIGZvcm0pID8gZmFsc2UgOiBmb3JtdmFsaWQ7XG5cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIGZvcm12YWxpZCA9ICFGb3JtRGF0YVZhbGlkYXRvclxuICAgICAgICAgIC52YWxpZGF0ZUZpZWxkKGZpZWxkLCBvcHRpb25zLnJ1bGVzLCBmb3JtKSA/IGZhbHNlIDogZm9ybXZhbGlkO1xuICAgICAgfSk7XG4gICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGZvcm12YWxpZCA9ICFGb3JtRGF0YVZhbGlkYXRvclxuICAgICAgICAgIC52YWxpZGF0ZUZpZWxkKGZpZWxkLCBvcHRpb25zLnJ1bGVzLCBmb3JtKSA/IGZhbHNlIDogZm9ybXZhbGlkO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybXZhbGlkO1xuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlRmllbGQoZmllbGQsIG9wdGlvbnMgPSB7IG1ldGhvZHM6IHt9LCBydWxlczoge30gfSwgZm9ybSkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIC8vIEZpcnN0IGNoZWNrIG5hdGl2ZSBodG1sIDUgdmFsaWRhdGlvblxuICAgIGlmICh0eXBlb2YgZmllbGQud2lsbFZhbGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGZpZWxkLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGZpZWxkLnR5cGUgIT09IGZpZWxkLmdldEF0dHJpYnV0ZSgndHlwZScpKSB7XG4gICAgICAgIC8vIGlucHV0IHR5cGUgbm90IHN1cHBvcnRlZCEgVXNlIGxlZ2FjeSBKYXZhU2NyaXB0IHZhbGlkYXRpb25cbiAgICAgIH1cbiAgICAgIGZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbmF0aXZlIHZhbGlkYXRpb24gbm90IGF2YWlsYWJsZVxuICAgIH1cblxuICAgIGlmICghZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgY3VzdG9tIG1ldGhvZHMgdG8gb3ZlcnJpZGUgYnJvd3NlciBkZWZhdWx0IGNoZWNrXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5tZXRob2RzKS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIGlmIChmaWVsZC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gbWV0aG9kKSB7XG4gICAgICAgIGlzVmFsaWQgPSAhb3B0aW9ucy5tZXRob2RzW21ldGhvZF0oZmllbGQpID8gZmFsc2UgOiBpc1ZhbGlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfSk7XG5cbiAgICAvLyBMb29wIG92ZXIgY3VzdG9tIHJ1bGVzIHRvIG92ZXJyaWRlIGJyb3dzZXIgZGVmYXVsdCBjaGVja1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMucnVsZXMpLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGlmIChmaWVsZC5pZCA9PT0gcnVsZSkge1xuICAgICAgICBpc1ZhbGlkID0gIW9wdGlvbnMucnVsZXNbcnVsZV0oZmllbGQpID8gZmFsc2UgOiBpc1ZhbGlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgRm9ybURhdGFWYWxpZGF0b3IucmVtb3ZlRXJyb3IoZmllbGQsIGZvcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb29wIG92ZXIgdGhlIGVycm9ycyBhbmQgZ2V0IHRoZSBmaXJzdCBvbmVcbiAgICAgIGxldCBlcnJvclRleHQgPSAnJztcbiAgICAgIGZvciAoY29uc3QgcnVsZSBpbiBmaWVsZC52YWxpZGl0eSkge1xuICAgICAgICBpZiAoZmllbGQudmFsaWRpdHlbcnVsZV0pIHtcbiAgICAgICAgICBjb25zdCBrZWJhYlJ1bGUgPSBydWxlLnJlcGxhY2UoL1tBLVpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwREVdL2csIG1hdGNoID0+IGAtICR7bWF0Y2gudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgICBlcnJvclRleHQgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZWJhYlJ1bGV9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEZvcm1EYXRhVmFsaWRhdG9yLnNob3dFcnJvcihmaWVsZCwgZm9ybSwgZXJyb3JUZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHN0YXRpYyBzaG93RXJyb3IoZmllbGQsIGZvcm0pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBmaWVsZC5wYXJlbnROb2RlO1xuXG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPSR7ZmllbGQuaWR9XTpub3QoOmVtcHR5KWApO1xuICAgIGlmIChsYWJlbCAhPSBudWxsKSBsYWJlbC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUVycm9yKGZpZWxkLCBmb3JtKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZmllbGQucGFyZW50Tm9kZTtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9JHtmaWVsZC5pZH1dOm5vdCg6ZW1wdHkpYCk7XG4gICAgaWYgKGxhYmVsICE9IG51bGwpIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIH1cblxuICB2YWxpZGF0ZUFsbEZvcm1zKHNlbGVjdG9yID0gJ2Zvcm0nLCBvcHRpb25zID0geyBtZXRob2RzOiB7fSwgcnVsZXM6IHt9IH0pIHtcbiAgICB0aGlzLmdldEFsbEZvcm1zKHNlbGVjdG9yLCBvcHRpb25zKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==