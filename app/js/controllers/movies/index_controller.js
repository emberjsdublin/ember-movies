// Movies.MoviesIndexController = Ember.ObjectController.extend({
//   createMovie: function () {
//      // Get the movie title set by the 'Add New Movie' text field
//     var name = this.get('newMovie');
//     if (!name.trim()) { return; }

//     // Create the new Movie model
//     var movie = Movies.Movie.createRecord({
//       name: name,
//       watched: false
//     });

//     // // Clear the 'Add New Movie' text field
//     this.set('newMovie', '');

//     // Add movie to our list of movies
//     this.get('movies').pushObject(movie);

//     this.get('movies').get('store').save();
//   },

//   movieCount: function() {
//     return this.get('movies').get('length');
//   }.property('movies.length')
// });
