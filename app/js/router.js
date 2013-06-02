Movies.Router.map(function () {
  this.resource('list', { path: '/list' }, function() {
    this.route('add');
    this.resource('movies', { path: '/:list_id/movies' }, function() {
      //No routes yet
    });
  });
});

