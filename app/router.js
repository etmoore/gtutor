import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('categories', {path: '/'}, function() {
    this.resource('category', {path: ':name'}, function() {
      this.resource('topics'), {path: ':topic_id'}
    });
  });
});

export default Router;
