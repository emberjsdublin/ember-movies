Movies.BoxofficeRoute = Ember.Route.extend({
  model: function () {
    model = Movies.Boxoffice.create();
    return model;
  }
});
