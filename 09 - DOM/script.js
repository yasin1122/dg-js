// DOM - Document Object Model

const view1 = document.getElementById('view1')
console.log(view1)

const view2 = document.querySelector('#view2')
console.log(view2)

view1.style.display = 'flex'
view2.style.display = 'none'

const views = document.getElementsByClassName('view')
console.log(views)
const sameViews = document.querySelectorAll('.view')
console.log(sameViews)

const divs = view1.querySelectorAll('div')
console.log(divs)

const sameDivs = view1.getElementsByTagName('div')
console.log(sameDivs)

const evenDivs = view1.querySelectorAll('div:nth-of-type(2n')
console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = 'darkblue'
}

const navText = document.querySelector('nav h1')
console.log(navText)
navText.textContent = 'Hello World'

const navBar = document.querySelector('nav')
navBar.innerHTML = `<h1>DOM Demo</h1> <p>This should align right.</p>`
console.log(navBar)
navBar.style.justifyContent = 'space-between'

console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.firstElementChild)
console.log(evenDivs[0].parentElement.nextElementSibling)
console.log(evenDivs[0].parentElement.previousSibling)
