import DS from 'ember-data';

var Topic = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.belongsTo('category')
});

Topic.reopenClass({
  {id: 1, name: authentication, category: 2},
  {id: 2, name: permissions, category: 2},
  {id: 3, name: CRUD, category: 2},
});

export default Topic;
