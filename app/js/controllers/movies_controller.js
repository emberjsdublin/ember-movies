Movies.MoviesController = Ember.ObjectController.extend({
  // createMovie() is handled by this controller
  // because we do not have a movies/new route
  createMovie: function () {
     // Get the movie title set by the 'Add New Movie' text field
    var name = this.get('newMovie');
    if (!name.trim()) { return; }

    // Create the new Movie model
    var movie = Movies.Movie.createRecord({
      name: name,
      watched: false
    });

    // // Clear the 'Add New Movie' text field
    this.set('newMovie', '');

    // Add movie to our list of movies
    this.get('movies').pushObject(movie);

    this.get('movies').get('store').save();
  },

  total: function() {
    return this.get('movies').get('length');
  }.property('movies.length'),

  remaining: function () {
    return this.get('movies').filterProperty('watched', false).get('length');
  }.property('movies.@each.watched'),

  // wanted to use 'watched' has the pope name, but gave:
  // Uncaught TypeError: Cannot call method 'filterProperty' of undefined
  seen: function () {
    return this.get('movies').filterProperty('watched', true).get('length');
  }.property('movies.@each.watched'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'movie' : 'movies';
  }.property('remaining')
});
