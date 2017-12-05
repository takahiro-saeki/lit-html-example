import 'todomvc-app-css';
import uuid from 'uuid';
import { render } from '@lit/lit-extended.js';
import { upperFirst, isEmpty } from 'lodash';
import App from 'containers/App';
import mock from 'mock/mock';
import defaultFilter from 'mock/defaultFilter';
import './style';

export default class Todo extends HTMLElement {
  static get observedAttributes() {
    return ['update', 'delete', 'change', 'filter', 'all-check', 'init'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'change':
        return this.change(newValue);
      case 'update':
        return this.update();
      case 'delete':
        return this.delete(newValue);
      case 'filter':
        return this.filterState(newValue);
      case 'all-check':
        return this.allCheckState();
      case 'init':
        return this.init(newValue);
    }
  }

  constructor() {
    super();
    this.state = {
      data: mock,
      filter: defaultFilter,
      currentFilter: 'All'
    };
  }

  change(newValue) {
    const { data, currentFilter, filter } = this.state;
    const newState = data.map(item => {
      if (item.id === newValue) {
        const merge = Object.assign({}, item, {
          isChecked: !item.isChecked
        });
        return merge;
      }
      return item;
    });
    this.setState({ data: newState });
    const filterData = this.filter(currentFilter);
    this.generate(filterData, filter);
    this.store();
  }

  update() {
    const { currentFilter, filter } = this.state;
    const filterData = this.filter(currentFilter);
    this.generate(filterData, filter);
    this.store();
  }

  delete(newValue) {
    const { data, currentFilter, filter } = this.state;
    const newState = data.filter(item => item.id !== newValue);
    this.setState({data: newState})
    const filterData = this.filter(currentFilter);
    this.generate(filterData, filter);
    this.store();
  }

  filterState(newValue) {
    const { currentFilter, filter } = this.state;
    const optimize = filter.map(item => {
      const param = {
        type: item.type,
        isSelected: item.type === newValue ? true : false
      };
      return param;
    });
    const state = {
      filter: optimize,
      currentFilter: newValue
    };
    this.setState(state);
    const filterData = this.filter(currentFilter);
    this.generate(filterData, filter);
  }

  allCheckState() {
    const { data, currentFilter, filter } = this.state;
    const optimize = data.map(item => {
      const merge = Object.assign({}, item, { isChecked: true });
      return merge;
    });
    this.setState({ data: optimize });
    const filterData = this.filter(currentFilter);
    this.generate(filterData, filter);
    this.store();
  }

  init(newValue) {
    const { data, currentFilter, filter } = this.state;
    if (!this.read()) {
      const optimize = filter.map(item => {
        const param = {
          type: item.type,
          isSelected: item.type === newValue ? true : false
        };
        return param;
      });
      const state = {
        filter: optimize,
        currentFilter: newValue
      };
      this.setState(state);
      const filterData = this.filter(currentFilter);
      this.generate(filterData, filter);
      return;
    }
    this.setState({ data: this.read() });
    let flag = newValue
    if(!flag) {
      flag = 'All'
    }
    const optimize = filter.map(item => {
      const param = {
        type: item.type,
        isSelected: item.type === flag ? true : false
      };
      return param;
    });
    const state = {
      filter: optimize,
      currentFilter: newValue
    };
    this.setState(state);
    if (isEmpty(newValue)) {
      this.setState({ currentFilter: 'All' });
    }
    const filterData = this.filter(currentFilter);
    this.generate(filterData, filter);
  }

  setState(option = {}) {
    this.state = Object.assign({}, this.state, option);
  }
  
  generate(data, filter) {
    const el = document.querySelector('custom-todo');
    render(App(data, filter), el);
  }

  filter(flag) {
    switch (flag) {
      case 'All':
        return this.state.data;
      case 'Active': {
        const param = this.state.data.filter(item => item.isChecked === false);
        return param;
      }
      case 'Completed': {
        const param = this.state.data.filter(item => item.isChecked === true);
        return param;
      }
      default:
        return this.state.data;
    }
  }

  createTodo(data) {
    const param = {
      id: uuid.v4(),
      title: data,
      isChecked: false
    };
    this.state.data.push(param);
    this.setAttribute('update', '');
  }

  store() {
    sessionStorage.setItem('data', JSON.stringify(this.state.data));
  }

  read() {
    const data = JSON.parse(sessionStorage.getItem('data'));
    return data;
  }

  connectedCallback() {
    const filterFlag = upperFirst(location.hash.split('/')[1]);
    this.setAttribute('init', filterFlag);
    const input = document.querySelector('[inputField]');
    input.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.createTodo(e.target.value);
        e.target.value = '';
      }
    });
  }
}
