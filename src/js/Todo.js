import 'todomvc-app-css';
import uuid from 'uuid';
import { render } from '@lit/lit-extended.js';
import App from 'containers/App';
import mock from 'mock/mock';
import './style';

export default class Todo extends HTMLElement {
  static get observedAttributes() {
    return ['update', 'delete', 'change', 'filter'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'change') {
      const newState = this.state.map(item => {
        if(item.id === newValue) {
          const merge = Object.assign({}, item, { isChecked: !item.isChecked })
          return merge
        }
        return item;
      })
      this.state = newState;
      this.generate(this.state)
    }
    if(name === 'update') {
      this.generate(this.state)
    }
    if(name === 'delete') {
      const newState = this.state.filter(item => item.id !== newValue);
      this.state = newState;
      this.generate(this.state)
    }
    if(name === 'filter') {
      switch(newValue) {
        case 'all': return {}
        case 'active': return {}
        case 'completed': return {}
        default: return {}
      }
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
  
  generate(item) {
    const el = document.querySelector('custom-todo')
    render(App(item), el);
  }
  
  createTodo(data) {
    const param = {
      id: uuid.v4(),
      title: data,
      isChecked: false
    }
    this.state.push(param);
    this.setAttribute('update', '')
  }
  
  connectedCallback() {
    this.generate(this.state)
    const input = document.querySelector('[inputField]');
    input.addEventListener('keypress', e => {
      if(e.keyCode === 13) {
        this.createTodo(e.target.value)
        e.target.value = ''
      }
    })
  }
}