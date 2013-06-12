Movies.NotesController = Ember.ObjectController.extend({
  count: function() {
    return this.get('notes').get('length');
  }.property('notes.length'),

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
