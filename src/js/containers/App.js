import { html, render, repeat } from 'lit-html';
import Header from 'components/Header';
import MainField from 'components/MainField';

const App = item => html`
  ${Header('title', 'placeholder')}
  ${MainField(item)}
`

export default App;