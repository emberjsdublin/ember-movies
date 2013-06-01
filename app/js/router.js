Movies.Router.map(function () {
  this.resource('lists', { path: '/' }, function() {
    this.route('add');
    this.route('movies', { path: '/:list_id/movies' });
  });
});

