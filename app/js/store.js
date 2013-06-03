Movies.Store = DS.Store.extend({
  revision: 12,
  adapter: 'Movies.LSAdapter'
});

Movies.LSAdapter = DS.LSAdapter.extend({
  namespace: 'movies-emberjs'
});
