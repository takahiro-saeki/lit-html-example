import { html, directive } from 'lit-html';
import filterChange from '../domain/filterChange';

const FooterItem = filter => html`
  <li>
    <a href="#/${filter.type === 'All' ? '' : filter.type.toLowerCase()}" 
      className="${directive(() => filter.isSelected ? 'selected' : '')}"
      on-click="${e => filterChange(e)}">
      ${filter.type}
    </a>
  </li>
`

export default FooterItem;