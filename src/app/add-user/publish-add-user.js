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
  const userName = $('#name').val();
  const user = new User(userName);
  $.publish(ADD_USER, user);
}
