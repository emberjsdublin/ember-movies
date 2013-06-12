Movies.NotesRoute = Ember.Route.extend({
  model: function (params) {
    return Movies.Movie.find(params.movie_id);
  }
});
