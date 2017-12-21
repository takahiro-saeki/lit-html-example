import { html } from 'lit-html';
import deleteChild from 'domain/deleteChild';
import check from 'domain/check';

const TodoItem = item => html`
  <li id="${item.id}" className="${item.isChecked ? 'completed' : ''}">
    <input class="toggle" type="checkbox" on-click="${e =>
      check(e)}" checked="${item.isChecked}">
    <label>${item.title}</label>
    <button class="destroy" on-click="${e => deleteChild(e)}"></button>
  </li>
`;

export default TodoItem;
