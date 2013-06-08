Movies.NotesController = Ember.ObjectController.extend({
  create: function () {
    var text = this.get('newNote');
    if (!name.trim()) { return; }

    var note = Movies.Note.createRecord({
      text: text
    });

    this.set('newNote', '');

    this.get('notes').pushObject(note);
    this.get('model').save();
    this.get('store').commit();
  },

  total: function() {
    return this.get('notes').get('length');
  }.property('notes.length')
});
