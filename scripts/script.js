const body             = document.body
const sidebar          = document.querySelector('.productGrid>aside')
const sidebarButton    = document.querySelector('.productHeader ul li:first-of-type button')
const productGrid      = document.querySelector('.productGrid>section')
const productSlider    = document.querySelector('.productSlider ul:nth-child(2)')
const prevButton       = document.querySelector('.productSlider li:last-child li:first-child button:first-child')
const nextButton       = document.querySelector('.productSlider li:last-child li:last-child button:last-child')
const sideBarMenu      = document.querySelector('header > nav > aside')
const closeMenuButton  = document.querySelector('header > nav > aside > button')
const openMenuButton   = document.querySelector('header > nav > ul > li:last-child > ul > li:last-child')
const modal            = document.querySelector('.modal')
const closeModalButton = document.querySelector('.modal button')

/////////////// MENU TOGGLE ///////////////
const toggleMenu = () => {
  sideBarMenu.classList.toggle('showMenu')
  body.classList.toggle('showMenu')
}

openMenuButton.addEventListener('click', toggleMenu)
closeMenuButton.addEventListener('click', toggleMenu)

body.addEventListener('click', (event) => {
  if (event.target === body) {
    toggleMenu()
  }
})

if (modal) {
  const toggleModal = () => {
    modal.classList.toggle('showModal')
    body.classList.toggle('showMenu')
  }

  closeModalButton.addEventListener('click', toggleModal)

  if (localStorage.getItem('modalShown') !== 'true') {
    setTimeout(() => {
      toggleModal()
      localStorage.setItem('modalShown', 'true')
    }, 5000)
  }
}

/////////////// FILTER SIDEBAR TOGGLE ///////////////

if (sidebar) {
  const slideOutSidebar = () => {
    sidebar.classList.toggle('slideOut')
    productGrid.classList.toggle('slideOut')
  }

  sidebarButton.addEventListener('click', slideOutSidebar)
}

let currentIndex = 0
const maxIndex   = productSlider.children.length - 1

const updateSlider = () => {
  productSlider.scrollLeft = currentIndex * 500
}

const updateButtons = () => {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled')
    nextButton.classList.remove('disabled')
  } else if (currentIndex === maxIndex) {
    prevButton.classList.remove('disabled')
    nextButton.classList.add('disabled')
  } else {
    prevButton.classList.remove('disabled')
    nextButton.classList.remove('disabled')
  }
}

updateButtons()

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1)
  updateSlider()
  updateButtons()
})

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % (maxIndex + 1)
  updateSlider()
  updateButtons()
})