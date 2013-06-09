Movies.Movie = DS.Model.extend({
  name: DS.attr('string'),
  watched: DS.attr('boolean'),
  list: DS.belongsTo('Movies.List')
});
