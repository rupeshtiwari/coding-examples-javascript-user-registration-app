const {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS
} = require('../model/messages');
const { store } = require('../model/store');

$.subscribe(ADD_USER, saveUserInStore);

function saveUserInStore(message, user) {
  if (store.list.has(user.id)) {
    $.publish(ADD_USER_FAIL, `${user.id} already exist`);
  }

  store.list.set(user.id, user);

  $.publish(ADD_USER_SUCCESS, store.list.get(user.id));
}

exports.module = { saveUserInStore };
