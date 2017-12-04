import 'todomvc-app-css';
import uuid from 'uuid';
import { render } from '@lit/lit-extended.js';
import App from 'containers/App';
import mock from 'mock/mock';
import defaultFilter from 'mock/defaultFilter';
import './style';


export default class Todo extends HTMLElement {
  static get observedAttributes() {
    return ['update', 'delete', 'change', 'filter', 'all-check'];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'change') {
      const newState = this.state.data.map(item => {
        if(item.id === newValue) {
          const merge = Object.assign({}, item, { isChecked: !item.isChecked })
          return merge
        }
        return item;
      })
      this.state.data = newState;
      const filterData = this.filter(this.state.currentFilter)
      this.generate(filterData, this.state.filter)
    }
    if(name === 'update') {
      const filterData = this.filter(this.state.currentFilter)
      this.generate(filterData, this.state.filter)
    }
    if(name === 'delete') {
      const newState = this.state.data.filter(item => item.id !== newValue);
      this.state.data = newState;
      const filterData = this.filter(this.state.currentFilter)
      this.generate(filterData, this.state.filter)
    }
    if(name === 'filter') {
      const optimize = this.state.filter.map(item => {
        const param = {
          type: item.type,
          isSelected: item.type === newValue ? true : false
        }
        return param
      })
      this.state.filter = optimize
      this.state.currentFilter = newValue
      const filterData = this.filter(this.state.currentFilter)
      this.generate(filterData, this.state.filter)
    }
    if(name === 'all-check') {
      const optimize = this.state.data.map(item => {
        const merge = Object.assign({}, item, {isChecked: true})
        return merge;
      })
      this.state.data = optimize
      const filterData = this.filter(this.state.currentFilter)
      this.generate(filterData, this.state.filter)
    }
  }

  constructor() {
    super()
    this.state = {
      data: mock,
      filter: defaultFilter,
      currentFilter: 'All'
    }
  }
  
  setState(param) {
    const paramState = this.state.data.filter(item => item.id !== param)
    this.state.data = paramState
    this.setAttribute('update', '')
  }
  
  generate(data, filter) {
    const el = document.querySelector('custom-todo')
    render(App(data, filter), el);
  }
  
  initFilter() {
    /*
    const hash = window.location.hash.split('/')[1]
    return hash;
    */
  }
  
  filter(flag) {
    switch(flag) {
      case 'All': return this.state.data
      case 'Active': {
        const param = this.state.data.filter(item => item.isChecked === false)
        return param
      }
      case 'Completed': {
        const param = this.state.data.filter(item => item.isChecked === true)
        return param
      }
      default: return this.state.data
    }
  }
  
  createTodo(data) {
    const param = {
      id: uuid.v4(),
      title: data,
      isChecked: false
    }
    this.state.data.push(param);
    this.setAttribute('update', '')
  }
  
  connectedCallback() {
    this.generate(this.state.data, this.state.filter)
    const input = document.querySelector('[inputField]');
    input.addEventListener('keypress', e => {
      if(e.keyCode === 13) {
        this.createTodo(e.target.value)
        e.target.value = ''
      }
    })
  }
}