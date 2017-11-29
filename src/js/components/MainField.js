import { html } from 'lit-html';
import Footer from 'components/Footer';
import TodoItem from 'components/TodoItem';

const MainField = items => html`
  <section style="display: block;" class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      ${items.map(item => TodoItem(item.title, item.id))}
    </ul>
    ${Footer()}
  </section>
`

export default MainField;