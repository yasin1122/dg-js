// Handling Errors
'use strict'

const makeError = () => {
  try {
    // throw new customError('This is a custom error!')
    throw new Error('This is a generic error!')
    const msg = 'Hello'
    msg = 'World'
  } catch (err) {
    console.table(err)
    console.warn(err)
    console.error(err.name, err.message, err.stack)
  } finally {
    console.log('Finally block always executes!')
  }
}

makeError()

function customError(message) {
  this.message = message
  this.name = 'customError'
  this.stack = `${this.name}" ${this.message}`
}
