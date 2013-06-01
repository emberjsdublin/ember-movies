Movies.List = DS.Model.extend({
  title: DS.attr('string'),
  movies: DS.hasMany('Movies.Movie')
});

Movies.List.FIXTURES = [{
    id: 1,
    title: 'Robert De Niro Movies',
    movie_ids: [1, 2]
  }, {
    id: 2,
    title: 'James Cameron Movies'
  }, {
    id: 3,
    title: 'Schwarzenegger Classics'
  }
];
