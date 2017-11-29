const count = (data = []) => {
  const param = data.filter(item => item.isChecked === false).length
  return param
}

export default count;