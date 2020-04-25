const promise = result => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!result) throw new Error('Deu erro')
      resolve('Promise foi resolvida')
    }, 3000)
  })
}


promise(true)
  .then(result => result)
  .then(result => console.info(result + ' mesmo cara'))
  .catch(reason => console.error(reason))
