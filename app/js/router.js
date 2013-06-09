Movies.Router.map(function () {
  this.resource('lists');
  this.resource('list', { path: '/lists/:list_id' });
  this.route('boxoffice');
  // TODO: Notes Demo Step #4
  // this.resource('notes', {path: 'movies/:movie_id/notes'});
});

