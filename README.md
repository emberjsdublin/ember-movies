# Ember Quickstart Application

## What is this?
This application pulls [lineman](https://github.com/testdouble/lineman) & [ember](http://emberjs.com) together and provides a simple
project shell to get started with Ember development quickly.

The app is cloned from [lineman-ember-template](https://github.com/searls/lineman-ember-template) and adjusted
so that the Ember application files are in JavaScript rather than CoffeeScript. Please see the original project
if you would prefer to a base Ember project in CoffeeScript.

## Setup
If you haven't already done so, first: install [node.js](http://nodejs.org); next, install lineman:

`$ npm install -g lineman`

To work from this example, just clone it, change into the project directory and run:

```
$ npm install
$ lineman run
```

And then visit the page at [localhost:8000](http://localhost:8000) to verify that it works.

## Lineman?

Lineman is a great project that will:
  * Watch your application during development for changing files and re-compile/concatenate the files as required.
  * Run your tests as you change them.
  * Provide a way to package and deploy your project.

In other words lineman will support a lot of common JavaScript tasks required while developing fat client JavaScript applications
without the need for a seperate backend server, such as Rails. However, it will not get in the way should you move to using Rails or similar.

You can read all about lineman [here](https://github.com/testdouble/lineman).

