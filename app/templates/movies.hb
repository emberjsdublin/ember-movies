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
          <li {{bindAttr class="movie.watched:checked"}}>
            <span class="title">{{movie.name}}</span>
            {{view Ember.Checkbox checkedBinding="watched" class="toggle"}}
          </li>
        {{/each}}
      </ul>

    <div class="movieCount">
      <span><strong>{{remaining}}</strong> {{inflection}} left</span>
    </div>
  </div>
</div>

