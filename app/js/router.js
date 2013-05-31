Movies.Router.map(function () {
  this.resource('lists', { path: '/' }, function() {
    this.route('add');
  });
});

