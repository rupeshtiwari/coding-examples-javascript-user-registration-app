import {
  ADD_USER_FORM_INVALID,
  ADD_USER_FORM_UPDATED,
  ADD_USER_FORM_VALID
} from '../model/messages';

$.subscribe(ADD_USER_FORM_UPDATED, validateAddUserForm);

export function validateAddUserForm(message, user) {
  const emailResult = isEmailValid(user.email);
  const nameResult = isNameValid(user.name);

  if (emailResult === true && nameResult === true) {
    $.publish(ADD_USER_FORM_VALID, user);
  } else {
    if (typeof nameResult === 'string') {
      return $.publish(ADD_USER_FORM_INVALID, nameResult);
    }
    if (typeof emailResult === 'string') {
      return $.publish(ADD_USER_FORM_INVALID, emailResult);
    }
  }
}

function isEmailValid(email) {
  if (
    email.trim() !== '' &&
    email.indexOf('@') > -1 &&
    email.indexOf('.') > -1
  ) {
    return true;
  }
  return 'Email is invalid';
}

function isNameValid(name) {
  if (name.trim() !== '' && name.length > 4) {
    return true;
  }
  return 'Name is invalid';
}
