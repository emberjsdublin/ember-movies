# Ember Movies

A sample todos-like application using [lineman](https://github.com/testdouble/lineman)
& [ember](http://emberjs.com).

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

## Troubleshooting

There is an [outstanding issue](https://github.com/searls/lineman-ember-template/issues/2)
with the lineman template this project was built on. It can result is no content being rendered on first run.

To fix simply make a trivial edit to any handlebars template and reload the browser. From then on you
should be fine unless you run `lineman clean` which will cause the issue to re-occur.

You can read all about lineman [here](https://github.com/testdouble/lineman).

