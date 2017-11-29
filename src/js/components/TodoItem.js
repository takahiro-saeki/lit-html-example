import { html } from 'lit-html';
import deleteChild from 'domain/deleteChild';

const TodoItem = (title, id) => html`
  <li id="${id}" class="">
    <input class="toggle" type="checkbox" checked>
    <label>${title}</label>
    <button class="destroy" on-click="${(e) => deleteChild(e)}"></button>
  </li>
`

export default TodoItem;