import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'coolstory/tests/helpers/start-app';

var application;

module('Acceptance: Test', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok(find('.alert.alert-success'));
  });
});
