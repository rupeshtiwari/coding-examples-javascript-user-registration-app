/**
 * All user validations
 */
$.subscribe(message.addUserFormUpdated, validate);

function validate() {
  console.log('user-validator received: ', message.addUserFormUpdated);
  // get the form
  var form = getUserFormFromStore();

  // validage the form
  var valid = isFormValid(form);

  // publish
  afterValidation(valid);
}

function getUserFormFromStore() {
  return store.getUserForm();
}

function afterValidation(valid) {
  if (valid) {
    console.log(
      'user-validator received: ',
      message.addUserFormSuccessfullyValidated
    );
    $.publish(message.addUserFormSuccessfullyValidated);
  } else {
    console.log(
      'user-validator received: ',
      message.addUserFormValidationFailed
    );

    $.publish(message.addUserFormValidationFailed);
  }
}

function isFormValid(form) {
  var isFormValid = isNameValid(form.name) && isEmailValid(form.emailId);

  return isFormValid;
}

function isNameValid(name) {
  return !(name == null || name.trim() === '');
}

function isEmailValid(email) {
  return !(email == null || email.trim() === '');
}
