Movies.NotesRoute = Ember.Route.extend({
  model: function(params) {
    return Movies.Movie.find(params.movie_id);
  },

  renderTemplate: function() {
    this.render('notes', {   // the template to render
      into: 'application' // template outlet to render into (will mess up your back button)
    });
  }
});
