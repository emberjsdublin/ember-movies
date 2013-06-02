Movies.MoviesRoute = Ember.Route.extend({
  init: function() {
    console.log('MoviesRoute');
  },

  model: function(params) {
    console.log('MoviesRoute params:' + params.list_id);
    return Movies.List.find(params.list_id);
  },

  renderTemplate: function() {
    this.render('movies', {   // the template to render
      into: 'application'//,                // the template to render into
      //controller: 'movies'        // the controller to use for the template
    });
  }
});
