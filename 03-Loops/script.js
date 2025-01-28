// while Loop

let myNumber = 0
while (myNumber < 50) {
  myNumber++
  if (myNumber == 50) {
    console.log(myNumber)
  }
}

// do while Loop

do {
  myNumber++
  console.log(myNumber)
} while (myNumber < 50)

// for Loop
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue
  if (i == 5) break
  console.log(i)
}

/////////////////////////////////////

class Cookie {
  constructor(color) {
    this.color = color
  }
  getColor() {
    return this.color
  }
  setColor(color) {
    this.color = color
  }
}

let cookieOne = new Cookie('green')
cookieOne.setColor('yellow')
console.log(cookieOne)
