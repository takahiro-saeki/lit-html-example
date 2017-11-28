import { html } from 'lit-html';

const Footer = () => html`
  <footer class="footer">
    <span class="todo-count">3 items left</span>
    <div class="filters">
      <a href="#/" class="selected">All</a>
      <a href="#/active">Active</a>
      <a href="#/completed">Completed</a>
    </div>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
`

export default Footer;