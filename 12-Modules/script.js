// Modules

// import * as Mods from './mods.js'
// console.log(Mods.exportedFunction())

import defaultFunction from './mods.js'
import { exportedFunction as expoFunc } from './mods.js'

console.log(defaultFunction())
console.log(expoFunc())

import User from './user.js'

const dave = new User('email@email.com', 'Dave')
console.log(dave, dave.greeting())
