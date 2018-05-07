🔧 **Bear in mind that although I use this myself on a number of sites in production, I'm still working on getting the documentation right.** 🔧

# form-data-validator
A helper for working with the HTML5 [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api). Providing some tools to easily extend or override native html5 form validation.

## Installation
Form Data Validator supports [npm](https://www.npmjs.com/package/form-data-validator)
```
npm install form-data-validator
```

## Usage
```
import FormDataValidator from 'form-data-validator';
```

Set up your form according to the [constraint validation api attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes). Then run your form through the validator.

The easiest way to do that for your forms is to parse your entire page and run each form through the validator. Form Data Validator has a built in function that does this for you.

```
FormDataValidator.validateAllForms('.js-validate', { /* options */ }); // defaults to 'form'
```

Alternatively you validate your own form.

```
FormDataValidator.validateForm('.js-validate', { /* options */ });
```

## Options

```customTypes```

You can override the built-in html5 validation rules for input types. This can come in handy to provide a better email validation. By default `
email@email` will validate because this is a valid email address format. You could implement your own email regular expression to override this. I reccomend the excellen [validator.js](https://github.com/chriso/validator.js/) library.

### Example
```
import isEmail from 'validator/lib/isEmail';

FormDataValidator.validateForm('form', { 
  customTypes: [{
    type: 'email',
    rule: field => isEmail(field.value)
  }]
});
```

This can also be used to provide a regular expression for password input fields, or a specific kind of url input type validation.

```rules```

Add extra validation rules. These rules are mapped to your field's id. A few use cases for this would be a password field that must match a password repeat field. For this example to work make sure your password input type has a `data-equal-to` attribute:

### Example
```
import equals from 'validator/lib/equals';

const form = document.querySelector('form');
FormDataValidator.validateForm(form, {
  rules: [{
    field: '#password',
    rule: field =>
      equals(field.value, form.querySelector(field.dataset.equalTo).value)
  }]
});
```

Another use case would be validating a chekcbox group where there has to be at least 1 checked input:

### Example
```
const form = document.querySelector('form');
FormDataValidator.validateForm(form, { 
  rules: [{
    field: '[type="checkbox"]',
    rule: (field) => {
      const checked = [...form.querySelectorAll('[type="checkbox"]')]
        .find(checkbox => checkbox.checked);
      if (typeof checked !== 'undefined) return true;
      return false;
    }
  }]
});
```

## Methods

```FormDataValidator.validateForm()```

```FormDataValidator.validateAllForms()```

```isValid()```
