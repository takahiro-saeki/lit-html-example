import { html } from 'lit-html';
import count from 'domain/count';

const Footer = (item) => html`
  <footer class="footer">
    <span class="todo-count">${count(item)} items left</span>
    <div class="filters">
      <li>
        <a href="#/" class="selected">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </div>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
`

export default Footer;