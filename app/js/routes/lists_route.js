Movies.ListsRoute = Ember.Route.extend({
  model: function () {
    return Movies.List.find();
  }
});
