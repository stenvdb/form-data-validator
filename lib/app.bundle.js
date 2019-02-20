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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "pK4p");
/******/ })
/************************************************************************/
/******/ ({

/***/ "NToG":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "SDJZ":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "pK4p":
/*!******************************************!*\
  !*** ./formDataValidator.js + 1 modules ***!
  \******************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@babel/runtime/helpers/createClass.js (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("SDJZ");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("NToG");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./config.js
var config_config = {
  scrollToFirstError: true,
  parentSelector: 'div',
  errorClass: 'error',
  customTypes: [],
  rules: [],
  ignoreFields: []
};
/* harmony default export */ var config_0 = (config_config);
// CONCATENATED MODULE: ./formDataValidator.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formDataValidator_FormDataValidator; });




var formDataValidator_FormDataValidator =
/*#__PURE__*/
function () {
  function FormDataValidator() {
    classCallCheck_default()(this, FormDataValidator);
  }

  createClass_default()(FormDataValidator, null, [{
    key: "getAllForms",
    value: function getAllForms(selector) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
      var config = Object.assign(config_0, options);
      var form = el;

      if (typeof form === 'string') {
        form = document.querySelector(el);
      }

      form.noValidate = true;

      form.isValid = function () {
        return _this.isValid(form, config);
      };

      form.getErrors = function () {
        return _this.getErrors(form, config);
      };

      form.addEventListener('submit', function (event) {
        var isValid = _this.isValid(form, config);

        if (!isValid) {
          event.preventDefault();
          if (config.scrollToFirstError) window.scrollTo(0, form.querySelector('.error').getBoundingClientRect().top);
        }
      });
    }
  }, {
    key: "getErrors",
    value: function getErrors(form) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var errors = [];
      if (form.isValid()) return [];
      Array.prototype.slice.call(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach(function (field) {
        if (options.ignoreFields.indexOf(field.getAttribute('name')) === -1) {
          if (!FormDataValidator.validateField(field, options, form)) {
            // Filter out only the ones that are true
            var validityErrors = {};

            for (var rule in field.validity) {
              if (field.validity[rule]) {
                validityErrors[rule] = field.validity[rule];
              }
            }

            var error = {
              id: field.id,
              validityErrors: validityErrors
            };
            errors.push(error);
          }
        }
      });
      return errors;
    }
  }, {
    key: "isValid",
    value: function isValid(form) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var formvalid = true;
      Array.prototype.slice.call(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach(function (field) {
        if (options.ignoreFields.indexOf(field.getAttribute('name')) === -1) {
          formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;
          field.addEventListener('blur', function () {
            formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;
          });
          field.addEventListener('change', function () {
            formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;
          });
        }
      });
      return formvalid;
    }
  }, {
    key: "validateField",
    value: function validateField(field, options, form) {
      var isValid = true;
      field.setCustomValidity(''); // First check native html 5 validation

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
            if (!isValid) field.setCustomValidity(pattern.message || 'This field is invalid');
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
            if (!isValid) field.setCustomValidity(pattern.message || 'This field is invalid');
          }

          return isValid;
        });
      }

      if (isValid) {
        FormDataValidator.removeError(field, form, options);
      } else {
        // Loop over the errors and get the first one
        FormDataValidator.showError(field, form, options); // Check if there are custom validity message overrides

        var _loop = function _loop(rule) {
          var override = options.customValidityMessages.find(function (validity) {
            return validity.error === rule;
          });

          if (typeof override !== 'undefined') {
            field.setCustomValidity(override.message);
          }
        };

        for (var rule in field.validity) {
          _loop(rule);
        }
      }

      return isValid;
    }
  }, {
    key: "showError",
    value: function showError(field, form, options) {
      var parent = field.closest(options.parentSelector);
      if (parent) parent.classList.add(options.errorClass);
      var label = form.querySelector("label[for=".concat(field.id, "]:not(:empty)"));
      if (label != null) label.classList.add(options.errorClass);
    }
  }, {
    key: "removeError",
    value: function removeError(field, form, options) {
      var parent = field.closest(options.parentSelector);
      if (parent) parent.classList.remove(options.errorClass);
      var label = form.querySelector("label[for=".concat(field.id, "]:not(:empty)"));
      if (label != null) label.classList.remove(options.errorClass);
    }
  }]);

  return FormDataValidator;
}();



/***/ })

/******/ })["default"];
});