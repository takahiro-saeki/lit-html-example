import { html } from 'lit-html';
import Header from 'components/Header';
import MainField from 'components/MainField';

const App = (data, filter) => html`
  ${Header('lit-todo', 'placeholder')}
  ${MainField(data, filter)}
`;

export default App;
