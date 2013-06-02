Movies.ListIndexRoute = Ember.Route.extend({
  //templateName: 'lists/index',

  model: function () {
    console.log('ListRoute');
    return Movies.List.find();
  }
});
