{{#linkTo "list.add" classNames="btn btn-success addButton"}}Add New List{{/linkTo}}

{{outlet}}

<ul class="lists">
  <li>{{#linkTo "boxoffice"}}Box office{{/linkTo}}</li>

  {{#each list in controller}}
    <li>
      {{#linkTo "movies.index" list}}{{list.title}}{{/linkTo}}
    </li>
  {{/each}}
</ul>
