const deleteChild = (e) => {
  const parent = document.querySelector('custom-todo')
  console.log(parent)
  parent.setAttribute('delete', e.target.parentNode.getAttribute('id'))
}

export default deleteChild;