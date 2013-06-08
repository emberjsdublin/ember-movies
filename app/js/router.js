Movies.Router.map(function () {
  this.resource('lists');
  this.resource('list', { path: '/lists/:list_id' })

  this.route('boxoffice');
});

