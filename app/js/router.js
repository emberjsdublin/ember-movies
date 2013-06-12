Movies.Router.map(function () {
  this.resource('lists');
  this.resource('list', { path: '/lists/:list_id' });
  this.route('boxoffice');
  this.resource('notes', {path: 'movies/:movie_id/notes'});
});

