<div class="list">
  <h4 class="text-center">{{title}} (Watched {{watched}} of {{total}})</h4>

  {{view Ember.TextField id="addMovie" placeholder="Add New Movie" valueBinding="newMovie" action="create"}}

  <ul>

    {{#each movies itemController="movie"}}
      <li {{bindAttr class="watched:checked"}}>
        {{#if isEditing}}
          {{view Movies.EditMovieView valueBinding="name"}}
        {{else}}
          {{view Ember.Checkbox checkedBinding="watched" class="toggle"}}
          <span class='title' {{action "edit" on="doubleClick"}}>{{name}}</span>
          {{!--  TODO: Notes Demo Step #3 --}}
          <span class='notes'>{{#linkTo "notes" this}}Notes{{/linkTo}}</span>
        {{/if}}
      </li>
    {{/each}}

  </ul>

  <div class="count">
    <span><strong>{{remaining}}</strong> {{inflection}} left</span>
  </div>
</div>
