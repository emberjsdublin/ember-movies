<div class="actionBar">
  {{#linkTo "index" classNames="backLink"}}&laquo; All Lists{{/linkTo}}
</div>

<div class="list">
  <h4 class="text-center">Box Office Top 10</h4>
  <ol>
    {{#each movie in boxOfficeMovies}}
      <li>
        <span class="title">{{movie.title}}</span> ({{movie.year}})
      </li>
    {{/each}}
  </ol>
</div>
