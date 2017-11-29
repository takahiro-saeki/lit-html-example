import 'todomvc-app-css';
import { render } from '@lit/lit-extended.js';
import { repeat } from '@lit/repeat.js';
import App from 'containers/App';
import mock from 'mock/mock';
import './style';

export default class Todo extends HTMLElement {
  static get observedAttributes() {
    return ['sort', 'update'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    
  }
  
  connectedCallback() {
    const el = document.querySelector('custom-todo')
    render(App(mock), el);
  }
}

customElements.define('custom-todo', Todo);