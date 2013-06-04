Movies.ToggleWatchedView = Ember.Checkbox.extend({
  click: function (event) {
    this.get('controller').saveWatched(this.get('content'));
  }
});
