Movies.ListsMoviesRoute = Ember.Route.extend({
   model: function(params) {
    return Movies.List.find(params.list_id);
  },
  // TODO: this is useful stuff: http://emberjs.com/guides/routing/rendering-a-template/
  renderTemplate: function() {
    this.render('movies', {into: 'application'});
  }
});
