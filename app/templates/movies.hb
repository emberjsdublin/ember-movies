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
        {{#each movie in movies itemController="movies"}}
          <li {{bindAttr class="movie.watched:checked"}}> <!-- this seems to lose it's bindings -->
            {{#if isEditing}}
              {{view Movies.EditMovieView valueBinding="movie.name"}}
            {{else}}
              <!-- Problem below is that the bindAttr is uni-directional -->
              <!-- <input type='checkbox' {{bindAttr checked="movie.watched"}} {{action 'toggleWatched' movie movie.watched}} /> -->
              <!-- Using custom view -->
              {{view Movies.ToggleWatchedView checkedBinding="movie.watched" contentBinding="movie"}}
              <span class='title' {{action "editMovie" on="doubleClick"}}>{{movie.name}}</span>
            {{/if}}
          </li>
        {{/each}}
      </ul>

    <div class="movieCount">
      <span><strong>{{remaining}}</strong> {{inflection}} left</span>
    </div>
  </div>
</div>

