Movies.ListController = Ember.ArrayController.extend({
  create: function () {
    // Get the list title set by the "New List" text field
    var title = this.get('newList');
    if (!title.trim()) { return; }

    // Create the new List model
    var list = Movies.List.createRecord({
      title: title
    });

    // Clear the "New List" text field
    this.set('newList', '');
    this.get('store').commit();
  }
});
