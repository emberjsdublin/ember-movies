// TODO: Notes Demo Step #7
Movies.NotesController = Ember.ObjectController.extend({

  // TODO: Notes Demo Step #8
  count: function() {
    return this.get('notes').get('length');
  }.property('notes.length'),

  // TODO: Notes Demo Step #11

  create: function () {
    var text = this.get('newNote') || '';
    if (!text.trim()) { return; }

    var note = Movies.Note.createRecord({
      text: text
    });

    this.set('newNote', '');

    this.get('notes').pushObject(note);
    this.get('model').save();
    this.get('store').commit();
  }
});
