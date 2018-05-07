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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9mb3JtRGF0YVZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJGb3JtRGF0YVZhbGlkYXRvciIsInNlbGVjdG9yIiwib3B0aW9ucyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJmb3JtIiwidmFsaWRhdGVGb3JtIiwiZ2V0QWxsRm9ybXMiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJub1ZhbGlkYXRlIiwiaXNWYWxpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJmb3JtdmFsaWQiLCJmaWVsZCIsInZhbGlkYXRlRmllbGQiLCJ3aWxsVmFsaWRhdGUiLCJub2RlTmFtZSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsImN1c3RvbVR5cGVzIiwicGF0dGVybiIsInJ1bGUiLCJydWxlcyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJyZW1vdmVFcnJvciIsImVycm9yVGV4dCIsImtlYmFiUnVsZSIsInJlcGxhY2UiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwic2hvd0Vycm9yIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsImxhYmVsIiwiaWQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuRXFCQSxpQjs7Ozs7Ozs7O2dDQUNBQyxRLEVBQVVDLE8sRUFBUztBQUNwQ0MsWUFBTUMsSUFBTixvQkFBZUMsU0FBU0MsZ0JBQVQsQ0FBMEJMLFFBQTFCLENBQWYsR0FBcURNLE9BQXJELENBQTZELFVBQUNDLElBQUQsRUFBVTtBQUNyRVIsMEJBQWtCUyxZQUFsQixDQUErQkQsSUFBL0IsRUFBcUNOLE9BQXJDO0FBQ0QsT0FGRDtBQUdEOzs7dUNBRXdEO0FBQUEsVUFBakNELFFBQWlDLHVFQUF0QixNQUFzQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUN2REYsd0JBQWtCVSxXQUFsQixDQUE4QlQsUUFBOUIsRUFBd0NDLE9BQXhDO0FBQ0Q7OztpQ0FFbUJTLEUsRUFBa0I7QUFBQTs7QUFBQSxVQUFkVCxPQUFjLHVFQUFKLEVBQUk7QUFDcEMsVUFBSU0sT0FBT0csRUFBWDs7QUFDQSxVQUFJLE9BQU9ILElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJBLGVBQU9ILFNBQVNPLGFBQVQsQ0FBdUJELEVBQXZCLENBQVA7QUFDRDs7QUFFREgsV0FBS0ssVUFBTCxHQUFrQixJQUFsQjs7QUFFQUwsV0FBS00sT0FBTCxHQUFlO0FBQUEsZUFBTSxNQUFLQSxPQUFMLENBQWFOLElBQWIsRUFBbUJOLE9BQW5CLENBQU47QUFBQSxPQUFmOztBQUVBTSxXQUFLTyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxVQUFDQyxLQUFELEVBQVc7QUFDekMsWUFBTUYsVUFBVSxNQUFLQSxPQUFMLENBQWFOLElBQWIsRUFBbUJOLE9BQW5CLENBQWhCOztBQUNBLFlBQUksQ0FBQ1ksT0FBTCxFQUFjO0FBQ1pFLGdCQUFNQyxjQUFOO0FBRUFDLGlCQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CWCxLQUFLSSxhQUFMLENBQW1CLFFBQW5CLEVBQTZCUSxxQkFBN0IsR0FBcURDLEdBQXhFO0FBQ0Q7QUFDRixPQVBEO0FBUUQ7Ozs0QkFFY2IsSSxFQUFvQjtBQUFBLFVBQWROLE9BQWMsdUVBQUosRUFBSTtBQUNqQyxVQUFJb0IsWUFBWSxJQUFoQjtBQUVBbkIsWUFBTUMsSUFBTixDQUFXSSxLQUFLRixnQkFBTCxDQUFzQiw0Q0FBdEIsQ0FBWCxFQUFnRkMsT0FBaEYsQ0FBd0YsVUFBQ2dCLEtBQUQsRUFBVztBQUNqR0Qsb0JBQVksQ0FBQ3RCLGtCQUNWd0IsYUFEVSxDQUNJRCxLQURKLEVBQ1dyQixPQURYLEVBQ29CTSxJQURwQixDQUFELEdBQzZCLEtBRDdCLEdBQ3FDYyxTQURqRDtBQUdBQyxjQUFNUixnQkFBTixDQUF1QixNQUF2QixFQUErQixZQUFNO0FBQ25DTyxzQkFBWSxDQUFDdEIsa0JBQ1Z3QixhQURVLENBQ0lELEtBREosRUFDV3JCLE9BRFgsRUFDb0JNLElBRHBCLENBQUQsR0FDNkIsS0FEN0IsR0FDcUNjLFNBRGpEO0FBRUQsU0FIRDtBQUlBQyxjQUFNUixnQkFBTixDQUF1QixRQUF2QixFQUFpQyxZQUFNO0FBQ3JDTyxzQkFBWSxDQUFDdEIsa0JBQ1Z3QixhQURVLENBQ0lELEtBREosRUFDV3JCLE9BRFgsRUFDb0JNLElBRHBCLENBQUQsR0FDNkIsS0FEN0IsR0FDcUNjLFNBRGpEO0FBRUQsU0FIRDtBQUlELE9BWkQ7QUFjQSxhQUFPQSxTQUFQO0FBQ0Q7OztrQ0FFb0JDLEssRUFBMkI7QUFBQSxVQUFwQnJCLE9BQW9CLHVFQUFWLEVBQVU7QUFBQSxVQUFOTSxJQUFNO0FBQzlDLFVBQUlNLFVBQVUsSUFBZCxDQUQ4QyxDQUc5Qzs7QUFDQSxVQUFJLE9BQU9TLE1BQU1FLFlBQWIsS0FBOEIsV0FBbEMsRUFBK0M7QUFDN0MsWUFBSUYsTUFBTUcsUUFBTixLQUFtQixPQUFuQixJQUE4QkgsTUFBTUksSUFBTixLQUFlSixNQUFNSyxZQUFOLENBQW1CLE1BQW5CLENBQWpELEVBQTZFLENBQzNFO0FBQ0Q7O0FBQ0RMLGNBQU1NLGFBQU47QUFDRCxPQUxELE1BS08sQ0FDTDtBQUNEOztBQUVELFVBQUksQ0FBQ04sTUFBTU8sUUFBTixDQUFlQyxLQUFwQixFQUEyQjtBQUN6QmpCLGtCQUFVLEtBQVY7QUFDRCxPQWY2QyxDQWlCOUM7OztBQUNBLFVBQUksT0FBT1osUUFBUThCLFdBQWYsS0FBK0IsV0FBbkMsRUFBZ0Q7QUFDOUM5QixnQkFBUThCLFdBQVIsQ0FBb0J6QixPQUFwQixDQUE0QixVQUFDMEIsT0FBRCxFQUFhO0FBQ3ZDLGNBQUlWLE1BQU1LLFlBQU4sQ0FBbUIsTUFBbkIsTUFBK0JLLFFBQVFOLElBQTNDLEVBQWlEO0FBQy9DYixzQkFBVSxDQUFDbUIsUUFBUUMsSUFBUixDQUFhWCxLQUFiLENBQUQsR0FBdUIsS0FBdkIsR0FBK0JULE9BQXpDO0FBQ0Q7O0FBQ0QsaUJBQU9BLE9BQVA7QUFDRCxTQUxEO0FBTUQsT0F6QjZDLENBMkI5Qzs7O0FBQ0EsVUFBSSxPQUFPWixRQUFRaUMsS0FBZixLQUF5QixXQUE3QixFQUEwQztBQUN4Q2pDLGdCQUFRaUMsS0FBUixDQUFjNUIsT0FBZCxDQUFzQixVQUFDMEIsT0FBRCxFQUFhO0FBQ2pDO0FBQ0EsY0FBSSxDQUFDRyxRQUFRQyxTQUFSLENBQWtCQyxPQUF2QixFQUFnQztBQUM5QkYsb0JBQVFDLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCRixRQUFRQyxTQUFSLENBQWtCRSxpQkFBOUM7QUFDRDs7QUFDRCxjQUFJaEIsTUFBTWUsT0FBTixDQUFjTCxRQUFRVixLQUF0QixDQUFKLEVBQWtDO0FBQ2hDVCxzQkFBVSxDQUFDbUIsUUFBUUMsSUFBUixDQUFhWCxLQUFiLENBQUQsR0FBdUIsS0FBdkIsR0FBK0JULE9BQXpDO0FBQ0Q7O0FBQ0QsaUJBQU9BLE9BQVA7QUFDRCxTQVREO0FBVUQ7O0FBRUQsVUFBSUEsT0FBSixFQUFhO0FBQ1hkLDBCQUFrQndDLFdBQWxCLENBQThCakIsS0FBOUIsRUFBcUNmLElBQXJDO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQSxZQUFJaUMsWUFBWSxFQUFoQjs7QUFDQSxhQUFLLElBQU1QLElBQVgsSUFBbUJYLE1BQU1PLFFBQXpCLEVBQW1DO0FBQ2pDLGNBQUlQLE1BQU1PLFFBQU4sQ0FBZUksSUFBZixDQUFKLEVBQTBCO0FBQ3hCLGdCQUFNUSxZQUFZUixLQUFLUyxPQUFMLENBQWEsa0NBQWIsRUFBaUQ7QUFBQSxpQ0FBY0MsTUFBTUMsV0FBTixFQUFkO0FBQUEsYUFBakQsQ0FBbEI7QUFDQUosd0JBQVlsQixNQUFNSyxZQUFOLGdCQUEyQmMsU0FBM0IsRUFBWjtBQUNBO0FBQ0Q7QUFDRjs7QUFDRDFDLDBCQUFrQjhDLFNBQWxCLENBQTRCdkIsS0FBNUIsRUFBbUNmLElBQW5DLEVBQXlDaUMsU0FBekM7QUFDRDs7QUFFRCxhQUFPM0IsT0FBUDtBQUNEOzs7OEJBRWdCUyxLLEVBQU9mLEksRUFBTTtBQUM1QixVQUFNdUMsU0FBU3hCLE1BQU15QixVQUFyQjtBQUVBRCxhQUFPRSxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixPQUFyQjtBQUVBLFVBQU1DLFFBQVEzQyxLQUFLSSxhQUFMLHFCQUFnQ1csTUFBTTZCLEVBQXRDLG1CQUFkO0FBQ0EsVUFBSUQsU0FBUyxJQUFiLEVBQW1CQSxNQUFNRixTQUFOLENBQWdCQyxHQUFoQixDQUFvQixPQUFwQjtBQUNwQjs7O2dDQUVrQjNCLEssRUFBT2YsSSxFQUFNO0FBQzlCLFVBQU11QyxTQUFTeEIsTUFBTXlCLFVBQXJCO0FBQ0FELGFBQU9FLFNBQVAsQ0FBaUJJLE1BQWpCLENBQXdCLE9BQXhCO0FBRUEsVUFBTUYsUUFBUTNDLEtBQUtJLGFBQUwscUJBQWdDVyxNQUFNNkIsRUFBdEMsbUJBQWQ7QUFDQSxVQUFJRCxTQUFTLElBQWIsRUFBbUJBLE1BQU1GLFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCLE9BQXZCO0FBQ3BCIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1EYXRhVmFsaWRhdG9yIHtcbiAgc3RhdGljIGdldEFsbEZvcm1zKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgQXJyYXkuZnJvbShbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICBGb3JtRGF0YVZhbGlkYXRvci52YWxpZGF0ZUZvcm0oZm9ybSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdmFsaWRhdGVBbGxGb3JtcyhzZWxlY3RvciA9ICdmb3JtJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgRm9ybURhdGFWYWxpZGF0b3IuZ2V0QWxsRm9ybXMoc2VsZWN0b3IsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlRm9ybShlbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGZvcm0gPSBlbDtcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgfVxuXG4gICAgZm9ybS5ub1ZhbGlkYXRlID0gdHJ1ZTtcblxuICAgIGZvcm0uaXNWYWxpZCA9ICgpID0+IHRoaXMuaXNWYWxpZChmb3JtLCBvcHRpb25zKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKGZvcm0sIG9wdGlvbnMpO1xuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGZvcm0ucXVlcnlTZWxlY3RvcignLmVycm9yJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpc1ZhbGlkKGZvcm0sIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBmb3JtdmFsaWQgPSB0cnVlO1xuXG4gICAgQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSksc2VsZWN0LHRleHRhcmVhJykpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmb3JtdmFsaWQgPSAhRm9ybURhdGFWYWxpZGF0b3JcbiAgICAgICAgLnZhbGlkYXRlRmllbGQoZmllbGQsIG9wdGlvbnMsIGZvcm0pID8gZmFsc2UgOiBmb3JtdmFsaWQ7XG5cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIGZvcm12YWxpZCA9ICFGb3JtRGF0YVZhbGlkYXRvclxuICAgICAgICAgIC52YWxpZGF0ZUZpZWxkKGZpZWxkLCBvcHRpb25zLCBmb3JtKSA/IGZhbHNlIDogZm9ybXZhbGlkO1xuICAgICAgfSk7XG4gICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGZvcm12YWxpZCA9ICFGb3JtRGF0YVZhbGlkYXRvclxuICAgICAgICAgIC52YWxpZGF0ZUZpZWxkKGZpZWxkLCBvcHRpb25zLCBmb3JtKSA/IGZhbHNlIDogZm9ybXZhbGlkO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybXZhbGlkO1xuICB9XG5cbiAgc3RhdGljIHZhbGlkYXRlRmllbGQoZmllbGQsIG9wdGlvbnMgPSB7fSwgZm9ybSkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIC8vIEZpcnN0IGNoZWNrIG5hdGl2ZSBodG1sIDUgdmFsaWRhdGlvblxuICAgIGlmICh0eXBlb2YgZmllbGQud2lsbFZhbGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGZpZWxkLm5vZGVOYW1lID09PSAnSU5QVVQnICYmIGZpZWxkLnR5cGUgIT09IGZpZWxkLmdldEF0dHJpYnV0ZSgndHlwZScpKSB7XG4gICAgICAgIC8vIGlucHV0IHR5cGUgbm90IHN1cHBvcnRlZCEgVXNlIGxlZ2FjeSBKYXZhU2NyaXB0IHZhbGlkYXRpb25cbiAgICAgIH1cbiAgICAgIGZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbmF0aXZlIHZhbGlkYXRpb24gbm90IGF2YWlsYWJsZVxuICAgIH1cblxuICAgIGlmICghZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBMb29wIG92ZXIgY3VzdG9tIG1ldGhvZHMgdG8gb3ZlcnJpZGUgYnJvd3NlciBkZWZhdWx0IGNoZWNrXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmN1c3RvbVR5cGVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0aW9ucy5jdXN0b21UeXBlcy5mb3JFYWNoKChwYXR0ZXJuKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gcGF0dGVybi50eXBlKSB7XG4gICAgICAgICAgaXNWYWxpZCA9ICFwYXR0ZXJuLnJ1bGUoZmllbGQpID8gZmFsc2UgOiBpc1ZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTG9vcCBvdmVyIGN1c3RvbSBydWxlcyB0byBvdmVycmlkZSBicm93c2VyIGRlZmF1bHQgY2hlY2tcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucnVsZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zLnJ1bGVzLmZvckVhY2goKHBhdHRlcm4pID0+IHtcbiAgICAgICAgLy8gU3VwcG9ydCBmb3IgaWUxMVxuICAgICAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkLm1hdGNoZXMocGF0dGVybi5maWVsZCkpIHtcbiAgICAgICAgICBpc1ZhbGlkID0gIXBhdHRlcm4ucnVsZShmaWVsZCkgPyBmYWxzZSA6IGlzVmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgRm9ybURhdGFWYWxpZGF0b3IucmVtb3ZlRXJyb3IoZmllbGQsIGZvcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb29wIG92ZXIgdGhlIGVycm9ycyBhbmQgZ2V0IHRoZSBmaXJzdCBvbmVcbiAgICAgIGxldCBlcnJvclRleHQgPSAnJztcbiAgICAgIGZvciAoY29uc3QgcnVsZSBpbiBmaWVsZC52YWxpZGl0eSkge1xuICAgICAgICBpZiAoZmllbGQudmFsaWRpdHlbcnVsZV0pIHtcbiAgICAgICAgICBjb25zdCBrZWJhYlJ1bGUgPSBydWxlLnJlcGxhY2UoL1tBLVpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwREVdL2csIG1hdGNoID0+IGAtICR7bWF0Y2gudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgICBlcnJvclRleHQgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZWJhYlJ1bGV9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEZvcm1EYXRhVmFsaWRhdG9yLnNob3dFcnJvcihmaWVsZCwgZm9ybSwgZXJyb3JUZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHN0YXRpYyBzaG93RXJyb3IoZmllbGQsIGZvcm0pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBmaWVsZC5wYXJlbnROb2RlO1xuXG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGZvcm0ucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPSR7ZmllbGQuaWR9XTpub3QoOmVtcHR5KWApO1xuICAgIGlmIChsYWJlbCAhPSBudWxsKSBsYWJlbC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUVycm9yKGZpZWxkLCBmb3JtKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZmllbGQucGFyZW50Tm9kZTtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9JHtmaWVsZC5pZH1dOm5vdCg6ZW1wdHkpYCk7XG4gICAgaWYgKGxhYmVsICE9IG51bGwpIGxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=