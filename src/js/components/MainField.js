import { html, repeat } from 'lit-html';
import Footer from './Footer';
import mock from '../mock/mock';

const MainField = () => html`
  <section style="display: block;" class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      ${repeat( mock, (account) => html`
        <li data-id="${account.id}">${account.title}</li>
      `)}
      <li data-id="1511837465764" class="">
        <input class="toggle" type="checkbox" checked="">
        <label>eerrr</label>
        <button class="destroy"></button>
      </li>
    </ul>
    ${Footer()}
  </section>
`

export default MainField;