Movies.BoxofficeRoute = Ember.Route.extend({
  model: function () {
    model = Movies.Boxoffice.create();
    return model;
  },

  renderTemplate: function() {
    this.render('boxoffice', {   // the template to render
      into: 'application' // template outlet to render into (will mess up your back button)
    });
  }
});
