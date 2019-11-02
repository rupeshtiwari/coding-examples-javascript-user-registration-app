const { ADD_USER_SUCCESS } = require('../model/messages');

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(ADD_USER_SUCCESS, showUserInTable);

function showUserInTable(message, user) {
  // get the body of table
  const $tableBody = $('#userList').find('tbody');

  // create a tr
  const $tr = $(`<tr> <td> ${user.id} </td>  <td> ${user.name} </td></tr>`);

  // append tr
  $tableBody.append($tr);
}

exports.module = { showUserInTable };
