import {
  HIDE_ERROR,
  SHOW_ERROR,
  SHOW_SUCCESS,
  HIDE_SUCCESS,
  HIDE_ALL_ALERTS,
  SHOW_INFO
} from '../model/messages';

$.subscribe(SHOW_ERROR, (message, error) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-danger')
    .show()
    .html(error);
});
$.subscribe(HIDE_ERROR, () => {
  $('#alertMsg')
    .hide()
    .html('');
});
$.subscribe(SHOW_SUCCESS, (message, payload) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-success')
    .show()
    .html(payload);
});
$.subscribe(HIDE_SUCCESS, () => {
  $('#alertMsg')
    .hide()
    .html('');
});
$.subscribe(SHOW_INFO, (message, payload) => {
  $('#alertMsg')
    .removeClass()
    .addClass('alert alert-info')
    .show()
    .html(payload);
});
$.subscribe(HIDE_SUCCESS, () => {
  $('#alertMsg')
    .hide()
    .html('');
});
$.subscribe(HIDE_ALL_ALERTS, () => {
  $('#alertMsg')
    .hide()
    .html('');
});
