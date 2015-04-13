import Ember from 'ember';

const { get: get } = Ember;

export default Ember.Route.extend({
  activate() {
    const flashMessages = get(this, 'flashMessages');

    flashMessages.success('This is a flash message');
  }
});
