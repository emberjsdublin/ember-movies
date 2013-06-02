Movies.Router.map(function () {
  this.resource('list', { path: '/list' }, function() {
    this.route('add');
    // Nexted resource example
    this.resource('movies', { path: '/:list_id/movies' }, function() {
    });
  });
});

