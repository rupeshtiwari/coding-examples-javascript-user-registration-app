import {
  ADD_USER_FORM_VALID,
  SHOW_SUCCESS,
  HIDE_ALL_ALERTS
} from '../model/messages';

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(ADD_USER_FORM_VALID, enableAddUserFormSubmit);

export function enableAddUserFormSubmit() {
  $.publish(HIDE_ALL_ALERTS);
  $('#addUser').removeAttr('disabled');
}
