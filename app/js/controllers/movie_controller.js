Movies.MovieController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function () {
    this.set('isEditing', true);
  },

  watched: function(key, value) {
    var model = this.get('model');

    if (value === undefined) {
      return model.get('watched');
    } else {
      model.set('watched', value);
      model.save();
      return value;
    }
  }.property('model.watched'),

  acceptChanges: function () {
    this.set('isEditing', false);
    this.get('store').commit();
  }
});
