const deleteChild = (event) => {
  const parent = document.querySelector('custom-todo')
  const id = event.target.parentNode.getAttribute('id')
  parent.setAttribute('delete', id)
}

export default deleteChild;