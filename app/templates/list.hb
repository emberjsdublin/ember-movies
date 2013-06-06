<div class="actionBar">
  {{#linkTo "list.add" classNames="btn btn-primary btn-small addButton"}}Add New List{{/linkTo}}
</div>

{{outlet}}

<ul class="lists">
  <li>{{#linkTo "boxoffice"}}Box office{{/linkTo}}</li>

  {{#each list in controller}}
    <li>
      {{#linkTo "movies.index" list}}{{list.title}}{{/linkTo}}
    </li>
  {{/each}}
</ul>
