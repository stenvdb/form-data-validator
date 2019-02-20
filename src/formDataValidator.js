import defaultConfig from './config';

export default class FormDataValidator {
  static getAllForms(selector, options = {}) {
    Array.prototype.slice.call(document.querySelectorAll(selector)).forEach((form) => {
      FormDataValidator.validateForm(form, options);
    });
  }

  static validateAllForms(selector = 'form', options = {}) {
    FormDataValidator.getAllForms(selector, options);
  }

  static validateForm(el, options = {}) {
    const config = Object.assign(defaultConfig, options);

    let form = el;
    if (typeof form === 'string') {
      form = document.querySelector(el);
    }

    form.noValidate = true;

    form.isValid = () => this.isValid(form, config);
    form.getErrors = () => this.getErrors(form, config);

    form.addEventListener('submit', (event) => {
      const isValid = this.isValid(form, config);
      if (!isValid) {
        event.preventDefault();

        if (config.scrollToFirstError) window.scrollTo(0, form.querySelector('.error').getBoundingClientRect().top);
      }
    });
  }

  static getErrors(form, options = {}) {
    const errors = [];

    if (form.isValid()) return [];

    Array.prototype.slice.call(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach((field) => {
      if (options.ignoreFields.indexOf(field.getAttribute('name')) === -1) {
        if (!FormDataValidator.validateField(field, options, form)) {
          // Filter out only the ones that are true
          const validityErrors = {};
          for (const rule in field.validity) {
            if (field.validity[rule]) {
              validityErrors[rule] = field.validity[rule];
            }
          }

          const error = {
            id: field.id,
            validityErrors
          };

          errors.push(error);
        }
      }
    });

    return errors;
  }

  static isValid(form, options = {}) {
    let formvalid = true;

    Array.prototype.slice.call(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach((field) => {
      if (options.ignoreFields.indexOf(field.getAttribute('name')) === -1) {
        formvalid = !FormDataValidator.validateField(field, options, form) ? false : formvalid;

        field.addEventListener('blur', () => {
          formvalid = !FormDataValidator
            .validateField(field, options, form) ? false : formvalid;
        });
        field.addEventListener('change', () => {
          formvalid = !FormDataValidator
            .validateField(field, options, form) ? false : formvalid;
        });
      }
    });

    return formvalid;
  }

  static validateField(field, options, form) {
    let isValid = true;
    field.setCustomValidity('');

    // First check native html 5 validation
    if (typeof field.willValidate !== 'undefined') {
      if (field.nodeName === 'INPUT' && field.type !== field.getAttribute('type')) {
        // input type not supported! Use legacy JavaScript validation
      }
      field.checkValidity();
    } else {
      // native validation not available
    }

    if (!field.validity.valid) {
      isValid = false;
    }

    // Loop over custom methods to override browser default check
    if (typeof options.customTypes !== 'undefined') {
      options.customTypes.forEach((pattern) => {
        if (field.getAttribute('type') === pattern.type) {
          isValid = !pattern.rule(field) ? false : isValid;
          if (!isValid) field.setCustomValidity(pattern.message || 'This field is invalid');
        }
        return isValid;
      });
    }

    // Loop over custom rules to override browser default check
    if (typeof options.rules !== 'undefined') {
      options.rules.forEach((pattern) => {
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
      FormDataValidator.showError(field, form, options);

      // Check if there are custom validity message overrides
      for (const rule in field.validity) {
        const override = options.customValidityMessages.find(validity => validity.error === rule);
        if (typeof override !== 'undefined') {
          field.setCustomValidity(override.message);
        }
      }
    }

    return isValid;
  }

  static showError(field, form, options) {
    const parent = field.closest(options.parentSelector);
    if (parent) parent.classList.add(options.errorClass);

    const label = form.querySelector(`label[for=${field.id}]:not(:empty)`);
    if (label != null) label.classList.add(options.errorClass);
  }

  static removeError(field, form, options) {
    const parent = field.closest(options.parentSelector);
    if (parent) parent.classList.remove(options.errorClass);

    const label = form.querySelector(`label[for=${field.id}]:not(:empty)`);
    if (label != null) label.classList.remove(options.errorClass);
  }
}
