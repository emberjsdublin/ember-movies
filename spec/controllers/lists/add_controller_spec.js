describe('Movies.ListsAddController', function() {
  var controller;
  beforeEach(function() {
    controller = Movies.ListsAddController.create();
  });

  it ('sets a new list name', function() {
    controller.set('newList', 'my list');
    expect(controller.get('newList')).toBe('my list');
  });

  it('save a new list', function() {
    controller.set('newList', 'my list');

    controller.createList(); // save is throwing an error
    var models = controller.get('model');
    expect(models.get('length')).toBe(1);
  });
});
