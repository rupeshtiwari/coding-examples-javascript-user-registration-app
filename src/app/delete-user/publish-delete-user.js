import { DELETE_USER } from '../model/messages';

$(() => {
  $('#userList').delegate('.delete-user', 'click', publishDeleteUser);
});

export function publishDeleteUser() {
  debugger;
  const deleteSure = confirm('Are you sure?');

  if (!deleteSure) {
    return false;
  }

  const userId = $(this).data('userid');

  $.publish(DELETE_USER, userId);
}
