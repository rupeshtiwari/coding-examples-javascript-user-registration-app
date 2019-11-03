import { ADD_USER_FORM_UPDATED } from '../model/messages';
import { User } from '../model/user';

$(() => {
  $('#userForm').delegate('input', 'input', publishValidUserForm);
});

export function publishValidUserForm() {
  const name = $('#name').val();
  const email = $('#email').val();

  const user = new User(name, email);

  $.publish(ADD_USER_FORM_UPDATED, user);
}
