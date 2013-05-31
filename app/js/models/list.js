Movies.List = DS.Model.extend({
  name: DS.attr('string'),
  movies: DS.hasMany('Movies.Movie')
});
