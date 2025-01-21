// Callbacks, Promises, Thenables, and Async/Await

// Callbacks leads to "callback hell"

// Promises: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false
//   if (!error) {
//     resolve('Yes, resolved the promise!')
//   } else {
//     reject('No, rejected the promise.')
//   }
// })

// console.log(myPromise)

// myPromise
//   .then(value => {
//     return value + 1
//   })
//   .then(newValue => {
//     console.log(newValue)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('myNextPromise resolved!')
//   }, 3000)
// })

// myNextPromise.then(value => {
//   console.log(value)
// })

// console.log('This will print 3 seconds before.')

// const users = fetch('https://jsonplaceholder.typicode.com/users')

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     data.forEach(user => {
//       console.log(user)
//     })
//   })

// console.log(users) // this will log pending...

const myUsers = {
  userList: []
}

const asyncFunc = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonUserData = await response.json()
  return jsonUserData
}

const nextAsyncFunc = async () => {
  const data = await asyncFunc()
  myUsers.userList = data
  console.log(data)
}

nextAsyncFunc()
console.log(myUsers.userList) // This will be empty

const getDadJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  const jsonJokeData = await response.json()

  console.log(jsonJokeData)
}

getDadJoke()

const jokeObject = {
  id: 'A5MCY821gib',
  joke: 'What kind of bagel can fly? A plain bagel.'
}

const postData = async jokeObj => {
  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jokeObj)
  })
  const jsonResponse = await response.json()
  console.log(jsonResponse.headers)
}

postData(jokeObject)
