import 'todomvc-app-css';
import uuid from 'uuid';
import { render } from '@lit/lit-extended.js';
//import { repeat } from '@lit/repeat.js';
import App from 'containers/App';
import mock from 'mock/mock';
import './style';

export default class Todo extends HTMLElement {
  static get observedAttributes() {
    return ['sort', 'update', 'delete'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'update') {
      this.generate()
    }
    if(name === 'delete') {
      const newState = this.state.filter(item => item.id !== newValue);
      this.state = newState;
      this.generate()
    }
  }

  constructor() {
    super()
    this.state = mock;
  }
  
  setState(param) {
    const paramState = this.state.filter(item => item.id !== param)
    this.state = paramState
    this.setAttribute('update', '')
  }
  
  static deleteChild(e) {
    const deleteId = e.target.parentNode.getAttribute('id')
    new Todo().setState(deleteId)
  }
  
  generate() {
    const el = document.querySelector('custom-todo')
    render(App(this.state), el);
  }
  
  createTodo(data) {
    const param = {
      id: uuid.v4(),
      title: data
    }
    this.state.push(param);
    this.setAttribute('update', '')
  }
  
  connectedCallback() {
    this.generate()
    const input = document.querySelector('[inputField]');
    input.addEventListener('keypress', e => {
      if(e.keyCode === 13) {
        this.createTodo(e.target.value)
        e.target.value = ''
      }
    })
  }
}