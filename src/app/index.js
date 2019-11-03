export * from './alerts';
export * from './model';
export * from './add-user';
export * from './delete-user';
export * from './validate-add-user-form';

import { HIDE_ALL_ALERTS } from './model/messages';

$(() => {
  $.publish(HIDE_ALL_ALERTS);
});
