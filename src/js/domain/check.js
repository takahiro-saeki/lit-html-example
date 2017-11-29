const check = event => {
  const parent = document.querySelector('custom-todo')
  const id = event.target.parentNode.getAttribute('id')
  parent.setAttribute('change', event.target.parentNode.getAttribute('id'))
} 

export default check;