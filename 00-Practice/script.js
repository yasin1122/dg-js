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

//////////////////////////////////////

let obj1 = {
  value: 11
}

let obj2 = obj1
obj1.value = 22
console.log(obj2)

//////////////////////////////////////
