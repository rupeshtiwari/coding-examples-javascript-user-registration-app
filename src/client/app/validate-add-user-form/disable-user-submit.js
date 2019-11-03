import {
  ADD_USER_FORM_INVALID,
  SHOW_SUCCESS,
  SHOW_ERROR
} from '../model/messages';

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(ADD_USER_FORM_INVALID, disableAddUserFormSubmit);

export function disableAddUserFormSubmit(message, error) {
  $.publish(SHOW_ERROR, error);
  $('#addUser').attr('disabled', 'disabled');
}
