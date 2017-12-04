import { trim } from 'lodash';

const filterChange = event => {
  const parent = document.querySelector('custom-todo')
  const flag = trim(event.target.textContent)
  console.log(flag)
  parent.setAttribute('filter', flag)
}

export default filterChange;