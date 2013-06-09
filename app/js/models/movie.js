Movies.Movie = DS.Model.extend({
  name: DS.attr('string'),
  watched: DS.attr('boolean'),
  list: DS.belongsTo('Movies.List'),
  // TODO: Notes Demo Step #2
  // notes: DS.hasMany('Movies.Note')
});
