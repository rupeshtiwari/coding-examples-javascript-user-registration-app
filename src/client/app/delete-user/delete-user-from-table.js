import { DELETE_USER_SUCCESS, SHOW_INFO } from '../model/messages';

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(DELETE_USER_SUCCESS, deleteUserFromTable);

export function deleteUserFromTable(message, { userId }) {
  $('#userList tbody') // go to body of table
    .find(`tr[data-userid=${userId}]`) // find row by userid
    .remove(); // remove entry

  $.publish(SHOW_INFO, `User deleted successfully!`);
}
