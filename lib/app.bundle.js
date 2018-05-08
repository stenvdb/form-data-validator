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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormDataValidator =
/*#__PURE__*/
function () {
  function FormDataValidator() {
    _classCallCheck(this, FormDataValidator);
  }

  _createClass(FormDataValidator, null, [{
    key: "getAllForms",
    value: function getAllForms(selector, options) {
      Array.prototype.slice.call(document.querySelectorAll(selector)).forEach(function (form) {
        FormDataValidator.validateForm(form, options);
      });
    }
  }, {
    key: "validateAllForms",
    value: function validateAllForms() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'form';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      FormDataValidator.getAllForms(selector, options);
    }
  }, {
    key: "validateForm",
    value: function validateForm(el) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var form = el;

      if (typeof form === 'string') {
        form = document.querySelector(el);
      }

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
      Array.prototype.slice.call(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach(function (field) {
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


      if (typeof options.customTypes !== 'undefined') {
        options.customTypes.forEach(function (pattern) {
          if (field.getAttribute('type') === pattern.type) {
            isValid = !pattern.rule(field) ? false : isValid;
          }

          return isValid;
        });
      } // Loop over custom rules to override browser default check


      if (typeof options.rules !== 'undefined') {
        options.rules.forEach(function (pattern) {
          // Support for ie11
          if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector;
          }

          if (field.matches(pattern.field)) {
            isValid = !pattern.rule(field) ? false : isValid;
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