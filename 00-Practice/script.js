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

// Pointers

let obj1 = {
  value: 11
}

let obj2 = obj1
obj1.value = 22

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
    if (this.length === 0) {
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
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    if (!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return temp
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)
    if (index < 0 || index > this.length) return false
    const newNode = new Node(value)
    const temp = this.get(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    if (index < 0 || index >= this.length) return undefined
    const before = this.get(index - 1)
    const temp = this.get(index)
    before.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  reverse() {
    let before = null
    let temp = this.head
    let after = temp.next
    this.head = this.tail
    this.tail = temp
    for (let i = 0; i < this.length; i++) {
      after = temp.next
      temp.next = before
      before = temp
      temp = after
    }
    return this
  }

  // find middle node
  findMiddleNode() {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  // does the LL loop around?
  hasLoop() {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) return true
    }
    return false
  }
}

console.log([1, 2, 3].slice(0, 0))
console.log(Array.from({ length: 10 }, (_, i) => i + 1))

const testing = new Set([1, 2, 3])
console.log(testing, [...testing])
