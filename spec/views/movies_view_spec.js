describe('MoviesView', function() {
  var controller;
  beforeEach(function() {
    $('.movieLists').empty();
    controller = Movies.MoviesController.create({
      model: Movies.List.createRecord({title: 'test list'})
    });
    Em.run.sync();
  });

  afterEach(function() {
    controller.destroy();
  });

  describe ('updating the UI', function() {
    beforeEach(function() {
      // Create 10 movies
      _.each(_.range(10), function(elem, index) {
        controller.set('newMovie', 'new movie ' + index);
        controller.createMovie();
      });

      // Mark 5 of them as watched
      // controller.get('movies').forEach(function(item, index) {
      //   if (index < 5) item.set('watched', true);
      // });

      Em.run.sync();
    });

    // it ('shows 10 movies', function() {
    //   expect($('.title').length).toEqual(10);
    // });
  });
});
