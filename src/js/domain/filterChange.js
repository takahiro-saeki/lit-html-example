import { trim } from 'lodash';

const filterChange = event => {
  const parent = document.querySelector('custom-todo')
  const flag = trim(event.target.textContent)
  parent.setAttribute('filter', flag)
}

export default filterChange;