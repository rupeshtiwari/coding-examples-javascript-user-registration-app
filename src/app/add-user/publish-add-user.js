/**
 *
 * Controller : abastraction is DOM
 */
const { ADD_USER } = require('../model/messages');
const { User } = require('../model/user');

$(function() {
  $('#addUser').on('click', publishAddUser);
});

function publishAddUser() {
  const userName = $('#name').val();
  const user = new User(userName);
  $.publish(ADD_USER, user);
}

exports.module = { publishAddUser };
