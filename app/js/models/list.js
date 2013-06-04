Movies.List = DS.Model.extend({
  title: DS.attr('string'),
  movies: DS.hasMany('Movies.Movie')
});
