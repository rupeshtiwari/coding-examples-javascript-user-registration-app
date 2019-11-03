import {
  ADD_USER_SUCCESS,
  SHOW_SUCCESS,
  ADD_USER_FAIL,
  SHOW_ERROR
} from '../model/messages';

/**
 * CONTROLLER
 * abstraction over DOM : Update dom to show user
 */
$.subscribe(ADD_USER_FAIL, showErrorMessage);

export function showErrorMessage(message, error) {
  $.publish(SHOW_ERROR, `${error}`);
}
