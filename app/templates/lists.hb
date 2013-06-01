<div class="row">
  <div class="large-6 large-offset-3 columns">
    {{#linkTo "lists.add" classNames="button small right"}}Add New List{{/linkTo}}
  </div>
</div>
{{outlet}}
<div class="row">
  <div class="large-6 large-offset-3 columns">
    <ul class="movieLists no-bullet">
      {{#each list in controller}}
        <li>
          {{#linkTo "lists.movies" list}}{{list.title}}{{/linkTo}}
        </li>
      {{/each}}
    </ul>
  </div>
</div>
