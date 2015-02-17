import DS from 'ember-data';

var Topic = DS.Model.extend({
  name: DS.attr('string'),
  category: DS.belongsTo('category')
});

Topic.reopenClass({
  FIXTURES: [
    {id: 1, name: "authentication", category: 1},
    {id: 2, name: "permissions", category: 2},
    {id: 3, name: "CRUD", category: 3},
  ]
});

export default Topic;
