// Web Storage API

const myObject = {
  name: 'Dave',
  logName: function () {
    console.log(this.name)
  }
}
const myArray = ['eat', 'sleep', 'code']

sessionStorage.setItem('mySessionStore', JSON.stringify(myArray))
const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'))
console.log(typeof mySessionData, myArray)

localStorage.setItem('mySessionStore', JSON.stringify(myArray))
