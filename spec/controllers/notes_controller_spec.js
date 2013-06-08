describe('Movies.NotesController', function() {
  var notesController;

  beforeEach(function() {
    notesController = Movies.NotesController.create({
      model: Movies.Movie.createRecord({name: 'my movie', watched: false}),
      store: jasmine.createSpyObj('store', ['commit'])
    });
  });

  afterEach(function() {
    notesController.destroy();
  });

  it ('sets a new note name', function() {
    notesController.set('newNote', 'new note');
    expect(notesController.get('newNote')).toBe('new note');
  });

  it('.create stores a new note', function() {
    notesController.set('newNote', 'new note');

    notesController.create();
    var models = notesController.get('notes');
    expect(models.get('length')).toBe(1);
  });

  describe ('#total', function() {
    it('returns the number of notes', function() {
      expect(notesController.get('total')).toBe(0);
    });

    it('increments when notes are added', function() {
      notesController.set('newNote', 'new note');
      notesController.create();

      expect(notesController.get('total')).toBe(1);
    });
  });
});
