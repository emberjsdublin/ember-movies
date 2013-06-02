Movies.MoviesRoute = Ember.Route.extend({
  model: function(params) {
    return Movies.List.find(params.list_id);
  },

  renderTemplate: function() {
    this.render('movies', {   // the template to render
      into: 'application' // template outlet to render into (will mess up your back button)
    });
  }
});
