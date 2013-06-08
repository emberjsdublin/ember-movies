<h1>{{total}} note(s) for '{{name}}'</h1>

New Note:
  {{view Ember.TextArea
    cols="80"
    rows="5"
    id="addNote"
    placeholder="Enter your note"
    valueBinding="newNote"
  }}

<button {{action create}}>Add</button>

<h2>Notes:</h2>
{{#if total}}
  {{#each notes}}
    <div>{{text}}</div>
  {{/each}}
{{else}}
  <p>No notes yet.</p>
{{/if}}



