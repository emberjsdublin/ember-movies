<!--
We have to add this link as we broke the back button when
we rendered into the application template rather than the default lists
template. This seems to be something to do with the fact that movies are
nested resources but we are not displaying them as such.
-->

<div class="actionBar">
  {{#linkTo "index" classNames="backLink"}}&laquo; All Lists{{/linkTo}}
</div>

<div class="list">
  <h4 class="text-center">{{title}} (Watched {{seen}} of {{total}})</h4>

  {{view Ember.TextField id="addMovie" placeholder="Add New Movie"
      valueBinding="newMovie" action="createMovie"}}

  <ul>
    {{#each mov in movies itemController="movies"}}
      <li {{bindAttr class="mov.watched:checked"}}> <!-- this seems to lose it's marbles/bindings if I change local mov to movie -->
        {{#if isEditing}}
          {{view Movies.EditMovieView valueBinding="mov.name"}}
        {{else}}
          <!-- Using custom view becuase we cannot bind to the model.movies with regular Checkbox -->
          {{view Movies.ToggleWatchedView checkedBinding="mov.watched" contentBinding="mov"}}
          <span class='title' {{action "editMovie" on="doubleClick"}}>{{mov.name}}</span>
        {{/if}}
      </li>
    {{/each}}
  </ul>

  <div class="count">
    <span><strong>{{remaining}}</strong> {{inflection}} left</span>
  </div>
</div>
