Movies.Router.map(function () {
  this.resource('list', { path: '/list' }, function() {
    this.resource('movies', { path: '/:list_id/movies' }, function() {
    });
  });
  this.resource('notes', { path: 'movies/:movie_id/notes' }, function() {
  });
  this.route('boxoffice');
});

