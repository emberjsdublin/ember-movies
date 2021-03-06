Movies.ListController = Ember.ObjectController.extend({

  create: function () {
     // Get the movie title set by the 'Add New Movie' text field
    var name = this.get('newMovie');
    if (!name.trim()) { return; }

    // Create the new Movie model
    var movie = Movies.Movie.createRecord({
      name: name,
      watched: false
    });

    // Clear the 'Add New Movie' text field
    this.set('newMovie', '');

    // Add movie to our list of movies
    this.get('movies').pushObject(movie);
    this.get('model').save();
    this.get('store').commit();
  },

  total: function() {
    return this.get('movies').get('length');
  }.property('movies.length'),

  remaining: function () {
    return this.get('movies').filterProperty('watched', false).get('length');
  }.property('movies.@each.watched'),

  watched: function () {
    return this.get('movies').filterProperty('watched', true).get('length');
  }.property('movies.@each.watched'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'movie' : 'movies';
  }.property('remaining')

});
