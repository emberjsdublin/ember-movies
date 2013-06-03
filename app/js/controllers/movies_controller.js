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
    // Save via the store
    this.get('movies').get('store').save();
  },

  total: function() {
    return this.get('movies').get('length');
  }.property('movies.length'),

  remaining: function () {
    return this.get('movies').filterProperty('watched', false).get('length');
  }.property('movies.@each.watched'),

  // Wanted to use 'watched' but choked, and threw:
  // Uncaught TypeError: Cannot call method 'filterProperty' of undefined.
  // This is probably becuase watched is a prop on our model and the controller
  // proxies model props to the model.
  seen: function () {
    return this.get('movies').filterProperty('watched', true).get('length');
  }.property('movies.@each.watched'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'movie' : 'movies';
  }.property('remaining'),

  isEditing: false,

  editMovie: function () {
    this.set('isEditing', true);
  },

  acceptChanges: function () {
    this.set('isEditing', false);
    this.get('model').save(); // throws a promise error
    this.get('movies').get('store').save();
  }
});
