import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('categories', { path: '/'}, function() {
    this.resource('category', { path: ':category_id'}, function() {
      this.resource('topics', { path: ':topic_id'}, function() {
        this.route('new',     { path: 'new'});
      });
    });
  });
});

export default Router;
