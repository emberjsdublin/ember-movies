Movies.Boxoffice = Em.Object.extend({
  boxOfficeMovies: null,

  init: function() {
    var movies = [];

    model = this;
    jQuery.ajax("/api/movies/boxoffice", {
      type: 'GET',
      success: function(json) {
        _.each(json.movies, function(movie) {
          movies.push({title: movie.title, year: movie.year});
        });

        model.set('boxOfficeMovies', movies);
      }
    });
  }
});
