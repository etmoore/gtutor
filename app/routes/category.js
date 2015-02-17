import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('category', params.category_id);
  },
  // serialize: function(model) {
  //   return {name: model.get('name')};
  // }
});
