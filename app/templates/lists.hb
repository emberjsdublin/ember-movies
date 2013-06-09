<ul class="lists">
  <li>{{#linkTo "boxoffice"}}Box office{{/linkTo}}</li>
</ul>

<div class="addList">
  {{view Ember.TextField id="right-label" placeholder="Add New List" valueBinding="newList" action="create"}}
</div>

<ul class="lists">
  {{#each list in controller}}
    <li>
      {{#linkTo list list}}{{list.title}}{{/linkTo}}
    </li>
  {{/each}}
</ul>
