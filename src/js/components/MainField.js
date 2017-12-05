import { html } from 'lit-html';
import Footer from 'components/Footer';
import TodoItem from 'components/TodoItem';
import allCheck from 'domain/allCheck';

const MainField = (items, filter) => html`
  <section style="display: block;" class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all" on-click="${() =>
      allCheck()}">Mark all as complete</label>
    <ul class="todo-list">
      ${items.map(item => TodoItem(item))}
    </ul>
    ${Footer(items, filter)}
  </section>
`;

export default MainField;
