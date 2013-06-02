Movies.ListRoute = Ember.Route.extend({
  //templateName: 'lists/index',
  init: function() {
    console.log('list index route');
  },
  model: function () {
    console.log('ListRoute');
    return Movies.List.find();
  }
});
