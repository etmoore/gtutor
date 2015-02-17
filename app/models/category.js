import DS from 'ember-data';

var Category = DS.Model.extend({
  name: DS.attr('string'),
  topics: DS.hasMany('topic')
});

Category.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Ruby'},
    {id: 2, name: 'Rails'},
    {id: 3, name: 'Javascript'},
    {id: 4, name: 'Ember'},
  ]
});

export default Category;
