Movies.ListsAddController = Ember.ArrayController.extend({
  createList: function () {
    console.log('here2');
    // Get the todo title set by the "New Todo" text field
    var title = this.get('newList');
    if (!title.trim()) { return; }

    // Create the new Todo model
    var list = Movies.List.createRecord({
      title: title,
    });

    // Clear the "New Todo" text field
    this.set('newList', '');

    // Save the new model
    list.save();
  }
});
