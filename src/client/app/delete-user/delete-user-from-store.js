import {
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS
} from '../model/messages';
import { store } from '../model/store';

$.subscribe(DELETE_USER, deleteUserFromStore);

export function deleteUserFromStore(message, userId) {
  store.list.delete(userId);
  $.publish(DELETE_USER_SUCCESS, {userId});
}
