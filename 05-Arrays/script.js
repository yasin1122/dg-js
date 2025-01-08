// Arrays

let myArray = [0, 1, 2, 3]

myArray.push(44)
const lastItem = myArray.pop()
myArray.unshift(44) // Returns the Lenght of the Array
const firstItem = myArray.shift()
// delete myArray[1] // The deleted element is replaced by undefined
myArray.splice(1, 1) // Removes element without undefined leftover
myArray.splice(1, 0, 11) // Adds element without deleting

console.log(firstItem, lastItem, myArray)

myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myArray.slice(3, -3))
console.log(myArray.reverse())

let joinedString = myArray.join() // Joins array elements
let splitArray = joinedString.split(',').map(Number)
console.log(splitArray) // We're back to myArray

console.log(myArray.concat([11, 22, 33]))
console.log([...myArray, ...[11, 22, 33]]) // Spread Operator
