const ho = (param = 'test') => {
  return item => {
    console.log(param)
    return 'sample'
  }
}

export default ho;