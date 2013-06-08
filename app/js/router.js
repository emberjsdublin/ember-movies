Movies.Router.map(function () {
  this.resource('list', { path: '/list' });
  // TODO: Resource routes with placeholders seems to require the empty function
  this.resource('movies', { path: 'list/:list_id/movies' }, function() {});
  this.resource('notes', { path: 'movies/:movie_id/notes' }, function() {});
  this.route('boxoffice');
});

