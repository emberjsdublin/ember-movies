<div class="row">
  <div class="large-6 large-offset-3 columns">
    <div class="small-3 columns">
      <label for="right-label" class="right inline">List Name:</label>
    </div>
    <div class="small-7 columns">
       {{view Ember.TextField id="right-label" placeholder="Movie List Name"
       valueBinding="newList" action="createList"}}
    </div>
    <div class="small-2 columns">
    </div>
  </div>
</div>
