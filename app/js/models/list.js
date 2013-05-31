Movies.List = DS.Model.extend({
  title: DS.attr('string'),
  movies: DS.hasMany('Movies.Movie')
});

// ... additional lines truncated for brevity ...
Movies.List.FIXTURES = [{
    id: 1,
    title: 'Robert De Niro Movies'
  }, {
    id: 2,
    title: 'James Cameron Movies'
  }, {
    id: 3,
    title: 'Schwarzenegger Classics'
  }
];
