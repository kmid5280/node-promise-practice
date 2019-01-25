//console.log('before promise')

const testPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('success')
    }, 1000)
      
  })
  
  testPromise
    .then(msg => {
      console.log(msg)
      return 'value from first then'
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  
  
  //console.log('after promise')