import DS from 'ember-data';

var Resource = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  topic: DS.attr('string'),
  url: DS.attr('string'),
});

Resource.reopenClass({
  FIXTURES: [
    {id: 1, title: "Ruby Monk Objects", description: 'Lorem ipsum dolor sit hello world', category: 'ruby', topic: 'objects', url: 'http://rubymonk.com/learning/books/1-ruby-primer/chapters/6-objects/lessons/35-introduction-to-objects'},
  ]
});

export default Resource;
