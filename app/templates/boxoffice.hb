<div class="row">
  <div class="large-6 large-offset-3 columns">
    <h4 class="text-center">Box Office Top 10</h4>
    <ol>
      {{#each movie in boxOfficeMovies}}
        <li>
          {{movie.title}} ({{movie.year}})
        </li>
      {{/each}}
    </ol>
  </div>
</div>
