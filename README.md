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

The easiest way to validate your forms is to parse your entire page and run each form through the validator. Form Data Validator has a built in function that does this for you.

```
FormDataValidator.validateAllForms('.js-validate', { /* options */ }); // defaults to 'form'
```

Alternatively you validate your own form.

```
FormDataValidator.validateForm(document.querySelector('.js-validate', { /* options */ });
```

## Options

Docs coming soon

## Methods

Docs coming soon
