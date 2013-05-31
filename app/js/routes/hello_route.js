App.HelloRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('content', model);
  }
});
