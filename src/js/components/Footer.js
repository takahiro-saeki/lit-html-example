import { html } from 'lit-html';
import count from 'domain/count';
import FooterItem from './FooterItem';

const Footer = (item, filter = []) => html`
  <footer class="footer">
    <span class="todo-count">${count(item)} items left</span>
    <div class="filters">
      ${filter.map(item => FooterItem(item))}
    </div>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
`;

export default Footer;
