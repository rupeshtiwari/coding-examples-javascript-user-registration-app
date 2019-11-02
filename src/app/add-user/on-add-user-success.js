import { ADD_USER_SUCCESS } from '../model/messages';

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(ADD_USER_SUCCESS, showUserInTable);

export function showUserInTable(message, user) {
  // get the body of table
  const $tableBody = $('#userList').find('tbody');

  // create a tr
  const $tr = $(
    `<tr> <th scope="row"> ${user.id} </th>  <td> ${user.name} </td> <td>     <button type="button" class="btn btn-default">
    <span class="glyphicon glyphicon-remove delete-user" data-userid="${user.id}"></span> Trash 
  </button> </td></tr>`
  );

  // append tr
  $tableBody.append($tr);

  // clear input
  $('#name').val('');
}
