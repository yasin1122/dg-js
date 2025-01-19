// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  // Hide all views
  document.getElementById('view1').style.display = 'none'
  document.getElementById('view3').style.display = 'none'

  // Show only view 2
  document.getElementById('view2').style.display = 'flex'
})

const view = document.querySelector('#view2')
const div = view.querySelector('div')
const h2 = div.querySelector('h2')

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
  alert('doing something')
}

h2.addEventListener('click', doSomething, false)
h2.removeEventListener('click', doSomething, false)

h2.addEventListener('click', event => {
  if (event.target.textContent != 'Clicked!') {
    event.target.textContent = 'Clicked!'
  } else {
    event.target.textContent = 'My 2nd View'
  }
})
