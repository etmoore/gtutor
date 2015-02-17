import DS from 'ember-data';

var Category = DS.Model.extend({
  name: DS.attr('string'),
  topics: DS.hasMany('topic', { async: true })
});

Category.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Ruby', topics: [1]},
    {id: 2, name: 'Rails', topics: [2]},
    {id: 3, name: 'Javascript', topics: [3]},
    {id: 4, name: 'Ember', topics: []},
  ]
});

export default Category;
