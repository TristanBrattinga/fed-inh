const body             = document.body
const infoSlider       = document.querySelector('.infoSlider>ul')
const stickyBar        = document.querySelector('.productHeader')
const sidebar          = document.querySelector('.productGrid>aside')
const sidebarButton    = document.querySelector('.productHeader ul li button')
const productGrid = document.querySelector('.productGrid>section')
// const header          = document.querySelector('header>nav')
const topBar           = document.querySelector('header>section')
const productSlider    = document.querySelector('.productSlider ul:nth-child(2)')
const product          = document.querySelector('.productSlider ul:nth-child(2) li')
const prevButton       = document.querySelector('.productSlider li:last-child li:first-child button:first-child')
const nextButton       = document.querySelector('.productSlider li:last-child li:last-child button:last-child')
const shoeSlider       = document.querySelector('.shoeCategorySlider ul:nth-child(2)')
// const shoeListItems    = shoeSlider.querySelectorAll('ul li')
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
// closeMenuButton.addEventListener('click', toggleMenu)

body.addEventListener('click', (event) => {
  if (event.target === body) {
    toggleMenu()
  }
})

const toggleModal = () => {
  modal.classList.toggle('showModal')
  body.classList.toggle('showMenu')
}

// closeModalButton.addEventListener('click', toggleModal)

if (localStorage.getItem('modalShown') !== 'true') {
  setTimeout(() => {
    toggleModal()
    localStorage.setItem('modalShown', 'true')
  }, 5000)
}

/////////////// SIDEBAR TOGGLE ///////////////

const slideOutSidebar = () => {
  sidebar.classList.toggle('slideOut')
  productGrid.classList.toggle('slideOut')
}

sidebarButton.addEventListener('click', slideOutSidebar)




// shoeListItems.forEach(function(item, index) {
//   const span       = item.querySelector('figure span')
//   span.textContent = (index + 1) + '/' + shoeListItems.length
//
//   item.style.border = '2px solid red'
// })

// const prevShoeButton = document.querySelector('.shoeCategorySlider button:first-child');
// const nextShoeButton = document.querySelector('.shoeCategorySlider button:last-child');
//
// const itemWidth = shoeSlider.firstElementChild.offsetWidth; // Assumes all items have the same width
//
// prevShoeButton.addEventListener('click', () => {
//   shoeSlider.scrollBy({
//     left: itemWidth,
//     behavior: 'smooth'
//   });
// });
//
// nextShoeButton.addEventListener('click', () => {
//   shoeSlider.scrollBy({
//     left: itemWidth,
//     behavior: 'smooth'
//   });
// });

// let currentIndex = 0
// const maxIndex   = productSlider.children.length - 1

// const updateSlider = () => {
//   productSlider.scrollLeft = currentIndex * 500
// }
//
// const updateButtons = () => {
//   if (currentIndex === 0) {
//     prevButton.classList.add('disabled')
//     nextButton.classList.remove('disabled')
//   } else if (currentIndex === maxIndex) {
//     prevButton.classList.remove('disabled')
//     nextButton.classList.add('disabled')
//   } else {
//     prevButton.classList.remove('disabled')
//     nextButton.classList.remove('disabled')
//   }
// }
//
// updateButtons()
//
// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1)
//   updateSlider()
//   updateButtons()
// })
//
// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % (maxIndex + 1)
//   updateSlider()
//   updateButtons()
// })

// const handleScrollDirection = () => {
//   const currentPosition = window.scrollY
//
//   if (currentPosition >= 164) {
//     stickyBar.classList.add('sticky')
//   } else {
//     stickyBar.classList.remove('sticky')
//   }
// }
//
// let previousScrollPosition = 0
//
// const handleScroll = () => {
//   const rect = header.getBoundingClientRect()
//   const headerYTop = rect.top
//   const currentPosition = window.scrollY
//   const topBarRect = topBar.getBoundingClientRect()
//   const topBarYBottom = topBarRect.bottom
//
//   if (currentPosition - 38 > headerYTop) {
//     header.classList.add('slide-out')
//     header.classList.remove('fixed')
//   } else {
//     header.classList.remove('slide-out')
//   }
//
//   if (currentPosition < previousScrollPosition) {
//     header.classList.add('fixed')
//   } else {
//     header.classList.remove('fixed')
//   }
//
//   previousScrollPosition = currentPosition
//
// }
//
//
// window.addEventListener('scroll', handleScroll)