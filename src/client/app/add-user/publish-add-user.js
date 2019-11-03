/**
 *
 * Controller : abastraction is DOM
 */
import { ADD_USER, HIDE_ALL_ALERTS } from '../model/messages';
import { User } from '../model/user';

$(function() {
  $('#addUser').on('click', publishAddUser);
});

export function publishAddUser() {
  $.publish(HIDE_ALL_ALERTS);

  const name = $('#name').val();
  const email = $('#email').val();
  const user = new User(name, email);
  $.publish(ADD_USER, user);
}
