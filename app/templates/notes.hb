<div class="list">
  <h4 class="text-center">Notes for '{{name}}'</h4>
  <p class="text-center">
    {{view Ember.TextArea
      cols="100"
      rows="5"
      id="addNote"
      placeholder="Enter your note"
      valueBinding="newNote"
    }}
  </p>
  <p class="text-center">
    <button {{action create}}>Add</button>
  </p>

  <ul>
    {{#each notes}}
      <li>{{text}}</li>
    {{/each}}
  </ul>

  <div class="count">
    <span><strong>{{count}}</strong> note(s) made</span>
  </div>
</div>
