<div class="list">
  {{!--  TODO: Notes Demo Step #6 --}}
  <h4 class="text-center">Notes for '{{name}}'</h4>

  {{!-- TODO: Notes Demo Step #9 --}}
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


  {{!-- TODO: Notes Demo Step #11 --}}
  <ul>
  {{#each notes}}
    <li>{{text}}</li>
  {{/each}}
  </ul>

  {{!-- TODO: Notes Demo Step #8 --}}
  <div class="count">
    <span><strong>{{count}}</strong> note(s) made</span>
  </div>
</div>