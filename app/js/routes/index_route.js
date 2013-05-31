App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('hello', App.Hello.find(1));
  }
});

