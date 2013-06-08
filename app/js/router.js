Movies.Router.map(function () {
  this.resource('lists', function() {
    this.resource('list', { path: '/:list_id' });
  });

  this.route('boxoffice');
});

