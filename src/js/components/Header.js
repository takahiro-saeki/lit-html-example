import { html } from 'lit-html';

const Header = (title, placeholder) => html`
  <header class="header">
    <h1>${title}</h1>
    <input class="new-todo" placeholder="${placeholder}" autofocus="">
  </header>
`

export default Header;