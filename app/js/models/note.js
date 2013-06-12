Movies.Note = DS.Model.extend({
  text: DS.attr('string'),

  movie: DS.belongsTo('Movies.Movie')
});
