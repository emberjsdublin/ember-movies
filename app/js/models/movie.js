Movies.Movie = DS.Model.extend({
  list: DS.belongsTo('Movies.List'),
  notes: DS.hasMany('Movies.Note'),

  name: DS.attr('string'),
  watched: DS.attr('boolean')
});
