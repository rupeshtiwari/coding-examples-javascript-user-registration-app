$ = new Proxy($, {
  get(target, prop) {
    console.log(prop);
    return Reflect.get(...arguments);
  }
});

export * from './alerts';
export * from './model';
export * from './add-user';
export * from './delete-user';
export * from './validate-add-user-form';

import { HIDE_ALL_ALERTS } from './model/messages';

import '../favicon.ico';

$(() => {
  $.publish(HIDE_ALL_ALERTS);
});
