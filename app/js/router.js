Movies.Router.map(function () {
  this.resource('list', { path: '/list' }, function() {
    this.resource('movies', { path: '/:list_id/movies' }, function() {
    });
  });

  this.route('boxoffice');
});

