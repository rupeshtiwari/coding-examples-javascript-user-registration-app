import { ADD_USER, ADD_USER_FAIL, ADD_USER_SUCCESS } from '../model/messages';
import { store } from '../model/store';

$.subscribe(ADD_USER, saveUserInStore);

export function saveUserInStore(message, user) {
  if (store.list.has(user.id)) {
    $.publish(ADD_USER_FAIL, `${user.id} already exist`);
  }

  store.list.set(user.id, user);

  $.publish(ADD_USER_SUCCESS, store.list.get(user.id));
}
