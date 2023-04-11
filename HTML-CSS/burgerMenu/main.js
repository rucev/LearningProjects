const toggleButton = document.querySelector('.button-menu')
const nav = document.querySelector('.main-nav')
const page = document.querySelector('.page')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  nav.classList.toggle('show')
})

page.addEventListener('click',event => {
  console.log('clicked')
  nav.classList.remove('show')
  toggleButton.classList.remove('close')
})