/**
 * All of the DOM manipulation / access
 */
$(function() {
  $('.form').on('keyup', onFormUpdate);
});

var $name = $('#name');
var $emailId = $('#emailId');
$('#userSubmit').attr('disabled', true);
$.subscribe(message.addUserFormSuccessfullyValidated, onSuccessfullValidation);

function onSuccessfullValidation() {
  $('#userSubmit').attr('disabled', false);
}

function onFormUpdate(event) {
  var user = new UserForm($name.val(), $emailId.val());

  console.log('onkeyup', user);

  store.updateForm(user);

  afterUpdateForm();
}

function afterUpdateForm() {
  console.log('user-controller published: ', message.addUserFormUpdated);
  $.publish(message.addUserFormUpdated);
}
