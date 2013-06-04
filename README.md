# Ember Movies

Create and save lists of movies you have to watch using [lineman](https://github.com/testdouble/lineman)
& [ember](http://emberjs.com).

## Notes

> "Toto, I've a feeling we're not in Kansas anymore."

This application is loosely based on TodosMVC application created as part of the the 
new Ember [Getting Started](http://emberjs.com/guides/getting-started/) guide. However 
there are some differences outlined below.

### Models
* Ember Movies has proper one-to-many relationship
  * A list has many movies.
  * A movie belongs to one list.

This makes editing the nested set of movies for a given list a little different than for the regular Todos application.

### Persistence
  * The model relationships above are made possible through the use of Ember Data.
  * The [local storage adaptor](https://github.com/rpflorence/ember-localstorage-adapter) is used. 
  * Fixtures are not used.

### Nested Resources
  * Since movies are a property of a list, they are treated as nested resources for routing purposes. 
  * This is also unlike the Todos application, and leads to some side-effects. 

### Testing
  * Tests for one of the more complex controllers is included.
  * Jasmine is used for testing.


## Setup
* If you haven't already done so, first: install [node.js](http://nodejs.org).
* Next, install lineman:

`$ npm install -g lineman`

* Clone this project, change into the project directory and run:

```
$ npm install
$ lineman run
```

And then visit the page at [localhost:8000](http://localhost:8000) - you should see the application.

To run the tests, open a new terminal window, change into the project directory and run:
```
$ lineman spec
```

## Troubleshooting

There is an [outstanding issue](https://github.com/searls/lineman-ember-template/issues/2)
with the lineman template this project was built on. It can result is no content being rendered on first run.

To fix simply make a trivial edit to any handlebars template and reload the browser. From then on you
should be fine unless you run `lineman clean` which will cause the issue to re-occur.

You can read all about lineman [here](https://github.com/testdouble/lineman).

