// Functions

// Methods = Built in Functions

console.log('hello'.toUpperCase(), Math.random().toPrecision(4))

// Function Declaration Syntax:

function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf('@'))
}

console.log(getUserNameFromEmail('someRandomEmail@mail.com'))

// Anonymous Function Definition

const autoCompleteEmail = function (username = 'helloWorld') {
  return username + '@mail.com'
}

console.log(autoCompleteEmail('playerOne'))

// Arrow Functions

const toProperCase = name => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase('JORDAN'))

// var, let, and const
let x = 5
if (true) {
  x = 8
}
console.log(x)
