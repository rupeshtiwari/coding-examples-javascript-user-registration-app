import { DELETE_USER_SUCCESS } from '../model/messages';

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(DELETE_USER_SUCCESS, deleteUserFromTable);

export function deleteUserFromTable(message, userId) {
  $('#userList')
    .find(`tr[data-userid="${userId}]"`) // get the row of user
    .remove(); //remove row
}
