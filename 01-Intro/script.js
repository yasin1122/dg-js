// String Methods
const myVariable = 'Mathmematics'

console.log(myVariable.length)
console.log(
  myVariable.charAt(0),
  myVariable.indexOf('at'),
  myVariable.lastIndexOf('at'),
  myVariable.slice(1, 3),
  myVariable.toUpperCase(),
  myVariable.includes('mat'),
  myVariable.split('m')
)

// Number Methods
const myNumber = 42
const myFloat = 42.01
const myString = '42'

console.log(
  Number(myString) === myNumber,
  Number.isInteger(myString),
  Number.parseFloat(myString),
  Number.parseFloat('42.22abc'),
  myFloat.toFixed(1),
  Number.parseInt(myString),
  typeof myFloat.toString(),
  Number('Hello')
)

// Math Methods and Properties
console.log(
  Math.PI,
  Math.trunc(Math.PI),
  Math.round(Math.PI),
  Math.ceil(Math.PI),
  Math.floor(Math.PI),
  Math.pow(2, 10),
  Math.min(2, 5, 9, 3),
  Math.max(55, 333, -12),
  Math.floor(Math.random() * 10) + 1 /* Random Number 1-10 */
)

// Coding Challange: Return a random letter from string
let testString = 'ThisIsATest'
console.log(testString.charAt(Math.floor(Math.random() * testString.length)))

//
