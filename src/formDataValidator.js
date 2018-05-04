// import isEmail from 'validator/lib/isEmail';

export default class FormDataValidator {
  static getAllForms(selector, options) {
    Array.from([...document.querySelectorAll(selector)]).forEach((form) => {
      FormDataValidator.validateForm(form, options);
    });
  }

  static validateForm(form, options = {}) {
    form.noValidate = true;

    form.isValid = () => this.isValid(form, options);

    form.addEventListener('submit', (event) => {
      const isValid = this.isValid(form, options);
      if (!isValid) {
        event.preventDefault();

        window.scrollTo(0, form.querySelector('.error').getBoundingClientRect().top);
      }
    });
  }

  static isValid(form, options = {}) {
    let formvalid = true;

    Array.from(form.querySelectorAll('input:not([type="hidden"]),select,textarea')).forEach((field) => {
      formvalid = !FormDataValidator
        .validateField(field, options, form) ? false : formvalid;

      field.addEventListener('blur', () => {
        formvalid = !FormDataValidator
          .validateField(field, options, form) ? false : formvalid;
      });
      field.addEventListener('change', () => {
        formvalid = !FormDataValidator
          .validateField(field, options, form) ? false : formvalid;
      });
    });

    return formvalid;
  }

  static validateField(field, options = {}, form) {
    let isValid = true;

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
    if (typeof options.methods !== 'undefined') {
      Object.keys(options.methods).forEach((method) => {
        if (field.getAttribute('type') === method) {
          isValid = !options.methods[method](field) ? false : isValid;
        }
        return isValid;
      });
    }

    // Loop over custom rules to override browser default check
    if (typeof options.rules !== 'undefined') {
      Object.keys(options.rules).forEach((rule) => {
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
      let errorText = '';
      for (const rule in field.validity) {
        if (field.validity[rule]) {
          const kebabRule = rule.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, match => `- ${match.toLowerCase()}`);
          errorText = field.getAttribute(`data-${kebabRule}`);
          break;
        }
      }
      FormDataValidator.showError(field, form, errorText);
    }

    return isValid;
  }

  static showError(field, form) {
    const parent = field.parentNode;

    parent.classList.add('error');

    const label = form.querySelector(`label[for=${field.id}]:not(:empty)`);
    if (label != null) label.classList.add('error');
  }

  static removeError(field, form) {
    const parent = field.parentNode;
    parent.classList.remove('error');

    const label = form.querySelector(`label[for=${field.id}]:not(:empty)`);
    if (label != null) label.classList.remove('error');
  }

  static validateAllForms(selector = 'form', options = {}) {
    FormDataValidator.getAllForms(selector, options);
  }
}
