Movies.Movie = DS.Model.extend({
  list: DS.belongsTo('Movies.List'),

  name: DS.attr('string'),
  watched: DS.attr('boolean')
});

Movies.Movie.FIXTURES = [{
  id: 1,
  name: 'Heat',
  watched: true
},
{
  id: 2,
  name: 'Raging Bull',
  watched: false
}];
