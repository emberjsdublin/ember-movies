Movies.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('lists');
  }
});
