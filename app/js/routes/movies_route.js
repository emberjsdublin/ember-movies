Movies.MoviesRoute = Ember.Route.extend({
  model: function(params) {
    return Movies.List.find(params.list_id);
  }
});
