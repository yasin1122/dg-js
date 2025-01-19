// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  // Hide all views
  document.getElementById('view1').style.display = 'none'
  document.getElementById('view3').style.display = 'none'

  // Show only view 2
  document.getElementById('view2').style.display = 'flex'
})

// Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//   alert('doing something')
// }

// h2.addEventListener('click', doSomething, false)
// h2.removeEventListener('click', doSomething, false)

// h2.addEventListener('click', event => {
//   if (event.target.textContent != 'Clicked!') {
//     event.target.textContent = 'Clicked!'
//   } else {
//     event.target.textContent = 'My 2nd View'
//   }
// })

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'complete') {
    console.log('readyState: complete')
    initApp()
  }
})

const initApp = () => {
  const view = document.querySelector('#view2')
  const div = view.querySelector('div')
  const h2 = div.querySelector('h2')

  view.addEventListener('click', event => {
    // event.stopPropagation()
    view.classList.toggle('purple')
    view.classList.toggle('darkblue')
  })

  div.addEventListener('click', event => {
    div.classList.toggle('blue')
    div.classList.toggle('black')
  })

  h2.addEventListener('click', event => {
    const myText = event.target.textContent
    myText === 'My 2nd View'
      ? (event.target.textContent = 'Clicked')
      : (event.target.textContent = 'My 2nd View')
  })
}
