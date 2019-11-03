import { ADD_USER_FORM_UPDATED } from '../model/messages';
import { User } from '../model/user';

$(() => {
  $('#userForm').delegate('input', 'input', publishValidUserForm);
});

let timeout;

export function publishValidUserForm() {
  const name = $('#name').val();
  const email = $('#email').val();

  const user = new User(name, email);

  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    $.publish(ADD_USER_FORM_UPDATED, user);
  }, 500);
}
