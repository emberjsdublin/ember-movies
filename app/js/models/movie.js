Movies.Movie = DS.Model.extend({
  list: DS.belongsTo('Movies.List'), // important!

  name: DS.attr('string'),
  watched: DS.attr('boolean')
});
