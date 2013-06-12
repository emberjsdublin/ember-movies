# Ember Movies

Create and save lists of movies you have to watch using [lineman](https://github.com/testdouble/lineman)
& [ember](http://emberjs.com).

## Notes

> "Toto, I've a feeling we're not in Kansas anymore."

This application is loosely based on TodosMVC application created as part of the the
new Ember [Getting Started](http://emberjs.com/guides/getting-started/) guide. However
there are some differences outlined below.

### Models
* Ember Movies has some one-to-many relationship
  * A list has many movies.
  * A movie belongs to one list.
  * A movie can have many notes.
  * A note belongs to one movie.

This makes editing the nested set of movies for a given list a little different than for the regular Todos application.

### Persistence
  * The model relationships above are made possible through the use of Ember Data.
  * The [local storage adaptor](https://github.com/rpflorence/ember-localstorage-adapter) is used.
  * Fixtures are not used.

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

## Lineman

You can read all about lineman [here](https://github.com/testdouble/lineman). If you are looking for a
empty lineman-ember template then check out [this](https://github.com/emberjsdublin/lineman-ember-template) project.

