import 'todomvc-app-css';
import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { repeat } from '../../node_modules/lit-html/lib/repeat.js';
import App from './containers/App';
import mock from './mock/mock';
import './style';
/*
const todo = items => {
  return html`
    <h1>My Todos</h1>
    <ul>
      ${repeat(
        items,
        item => item.id,
        item => html`
          <li class="${item.done ? 'done' : ''}">${item.value}</li>
        `
      )}
    </ul>
  `;
};

const someTodos = [
  { id: 1, value: 'Mop the floor', done: false },
  { id: 2, value: 'Prepare fancy salad', done: true },
  { id: 3, value: 'Get a funky haircut', done: false }
];

const el = document.querySelector('#container');

render(todo(someTodos), el);
*/

//document
//https://alligator.io/web-components/lit-html/
//render(App, document.querySelector('.todoapp'))