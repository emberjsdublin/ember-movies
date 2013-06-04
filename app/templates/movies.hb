<!-- We have to add this link we broke the back button when
we rendered into the application template rather than the default lists
template -->
<div class="row">
  <div class="large-6 large-offset-3 columns">
  {{#linkTo "index"}}All Lists{{/linkTo}}
  </div>
</div>

<div class="row">
  <div class="large-6 large-offset-3 columns">
    <h4 class="text-center">{{title}} (Watched {{seen}} of {{total}})</h4>
    {{view Ember.TextField id="right-label" placeholder="Add New Movie"
      valueBinding="newMovie" action="createMovie"}}

      <ul class="moviesList no-bullet">
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

    <div class="movieCount">
      <span><strong>{{remaining}}</strong> {{inflection}} left</span>
    </div>
  </div>
</div>

