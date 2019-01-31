/**
 * It will keep user state.
 */

var initialState = {
  userForm: {},
  userList: []
};

var appState = initialState;

var store = {
  updateForm: function(form) {
    appState.userForm = form;
  },

  getUserForm : function ( ) {
      return appState.userForm;
  }
};
