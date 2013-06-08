Movies.Note = DS.Model.extend({
  text: DS.attr('string'),

  movies: DS.belongsTo('Movies.Movie')
});
