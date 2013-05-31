App.Router.map(function() {
  this.resource('hellos');
  this.resource('hello', {
    path: '/hellos/:hello_id'
  });
});
