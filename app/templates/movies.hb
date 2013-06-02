<div class="row">
  <div class="large-6 large-offset-3 columns">
    <h4 class="text-center">{{title}}({{movieCount}})</h4>
    {{view Ember.TextField
      id="right-label"
      placeholder="Add New Movie"
      valueBinding="newMovie"
      action="createMovie"}}

      <ul class="moviesList no-bullet">
        {{#each movie in movies}}
          <li>
            <span class="title">{{movie.name}}</span>
            <input type="checkbox" />
          </li>
        {{/each}}
      </ul>

    <div class="movieCount">
      <span>TODO movie(s) left</span>
    </div>
  </div>
</div>

