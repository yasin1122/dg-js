// Classes

class Car {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  toString() {
    console.log(`This ${this.make} is a model ${this.model} from ${this.year}.`)
  }
}

const myCar = new Car('Mercedes', 'E350 Coupe', 2014)
myCar.toString()

class ElectricCar extends Car {
  #range
  constructor(make, model, year, range) {
    super(make, model, year)
    this.#range = range
  }

  toString() {
    console.log(
      `This ${this.make} is a model ${this.model} from ${this.year} has ${
        this.#range
      } mile range.`
    )
  }

  static message() {
    console.log('Electric cars are good for the environment!')
  }
}

const newCar = new ElectricCar('Tesla', 'Model Y', 2025, 300)
newCar.toString()
ElectricCar.message()

// JSON
const sendJSON = JSON.stringify(myCar)
console.log(sendJSON, typeof sendJSON)
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON, typeof receiveJSON)
