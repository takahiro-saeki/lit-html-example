import { html, render, repeat } from 'lit-html';
import Header from '../components/Header';
import MainField from '../components/MainField';

import mock from '../mock/mock';
/*
const App = () => html`
  ${Header('title', 'placeholder')}
  ${MainField()}
`
*/

const App = html`
  <ul>
    ${repeat(mock, i, index) => html`
      <li>${i.id}: ${i.name}</li>`)}
  </ul>
`
export default App;