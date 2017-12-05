const check = event => {
  const parent = document.querySelector('custom-todo');
  parent.setAttribute('change', event.target.parentNode.getAttribute('id'));
};

export default check;
