/**
 *
 * Controller : abastraction is DOM
 */
import { ADD_USER } from '../model/messages';
import { User } from '../model/user';

$(function() {
  $('#addUser').on('click', publishAddUser);
});

export function publishAddUser() {
  const name = $('#name').val();
  const email = $('#email').val();
  const user = new User(name, email);
  $.publish(ADD_USER, user);
}
