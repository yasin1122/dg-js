// Conditionals: If Statements

let soup = 'chicken noodle soup'
let reply
let customerIsBanned = false

if (customerIsBanned) {
  reply = `No ${soup} for you!`
} else if (soup) {
  reply = `Here's your order of ${soup}.`
} else {
  reply = `Sorry, we're out of ${soup}.`
}
console.log(reply)

// Conditionals: Switch Statements

switch (Math.floor(Math.random() * 10) % 2 === 0) {
  case true:
    console.log('Random number is even.')
    break
  case false:
    console.log('Random number is odd.')
    break
  default:
    console.log('Something went wrong!')
}

// Conditionals: Ternary Operator

// condition ? ifTrue : ifFalse;
let randNum = Math.floor(Math.random()) * 10
console.log(`${randNum} is ${randNum % 2 === 0 ? 'even' : 'odd'}.`)

// User Input

// alert('This is an alert message!') // pop up window
// console.log(confirm('Click OK = true\nCancel = false'))
// console.log(prompt('Please enter your name: ').trim() ?? 'No Input')

// Interactive Game: Rock, Paper, Scissors
let playGame = confirm('Would you like to play Rock, Paper, Scissor?')

if (playGame) {
  let choice = parseInt(
    prompt('ENTER 1 for Rock, 2 for Paper or 3 for Scissor: '),
    10 /* if 0x prefixed input is supplied it would be hexadecimal */
  )
  if (choice < 1 || choice > 3 || Number.isNaN(choice)) {
    alert('You did not ENTER a valid choice (1, 2 or 3)!')
  } else {
    let computer = Math.floor(Math.random() * 3) + 1
    switch (computer) {
      case 1:
        console.log('Computer chose ROCK:')
        if (choice === 1) {
          console.log('Tie Game!')
        } else if (choice === 2) {
          console.log('You Won!')
        } else if (choice === 3) {
          console.log('You Lost!')
        }
        break
      case 2:
        console.log('Computer chose PAPER:')
        if (choice === 2) {
          console.log('Tie Game!')
        } else if (choice === 3) {
          console.log('You Won!')
        } else if (choice === 1) {
          console.log('You Lost!')
        }
        break
      case 3:
        console.log('Computer chose SCISSOR:')
        if (choice === 3) {
          console.log('Tie Game!')
        } else if (choice === 1) {
          console.log('You Won!')
        } else if (choice === 2) {
          console.log('You Lost!')
        }
        break
      default:
        console.log('Something went wrong!')
        break
    }
  }
}
