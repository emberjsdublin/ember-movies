describe('Movies.MoviesController', function() {
  var controller;
  beforeEach(function() {
    controller = Movies.MoviesController.create({
      model: Movies.List.createRecord({title: 'empty list'})
    });
  });

  it ('sets a new list name', function() {
    controller.set('newMovie', 'new movie');
    expect(controller.get('newMovie')).toBe('new movie');
  });

  it('createMovie stores a new movie', function() {
    controller.set('newMovie', 'new movie');

    controller.createMovie();
    // Note how the controller proxies to the model for the 'movies' prop
    var models = controller.get('movies');
    expect(models.get('length')).toBe(1);
  });

  describe ('#total', function() {
    it('returns the number of movies', function() {
      expect(controller.get('total')).toBe(0);
    });

    it('increments when movies are added', function() {
      controller.set('newMovie', 'new movie');
      controller.createMovie();

      expect(controller.get('total')).toBe(1);
    });
  });

  describe ('#remaining', function() {
    beforeEach(function() {
      controller.set('newMovie', 'movie 1');
      controller.createMovie();
      controller.set('newMovie', 'movie 2');
      controller.createMovie();
    });
    it('returns the number of movies left to watch', function() {
      expect(controller.get('remaining')).toBe(2);
    });

    it('decrements when movies are watched', function() {
      controller.get('movies').setEach('watched', true);
      expect(controller.get('remaining')).toBe(0);
    });
  });

  describe ('#seen', function() {
    beforeEach(function() {
      controller.set('newMovie', 'movie 1');
      controller.createMovie();
      controller.set('newMovie', 'movie 2');
      controller.createMovie();
    });
    it('returns the number of movies watched', function() {
      expect(controller.get('seen')).toBe(0);
    });

    it('increments when movies are watched', function() {
      controller.get('movies').forEach(function(item, index, enumerable) {
        if (index === 0) item.set('watched', true);
      });
      expect(controller.get('seen')).toBe(1);
    });
  });

  describe ('#inflection', function() {
    it('returns "movies" as a plural', function() {
      expect(controller.get('inflection')).toEqual('movies');
    });

    it('returns "movie" as a singular', function() {
      controller.set('newMovie', 'movie 1');
      controller.createMovie();
      expect(controller.get('inflection')).toEqual('movie');
    });
  });
});
