import Ember from 'ember';

export default Ember.Route.extend({
  serialize: function(model) {
    return {name: model.get('name')};
  }
});
