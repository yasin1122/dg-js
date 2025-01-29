// Classes

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

// Pointers

let obj1 = {
  value: 11
}

let obj2 = obj1
obj1.value = 22
console.log(obj2)

// Linked Lists

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let pre = this.head
    let temp = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if (this.tail === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
}

let myLL = new LinkedList(11)
myLL.push(22)
myLL.pop()
console.log(myLL)
