const infoSlider    = document.querySelector('.infoSlider>div>ul')
const stickyBar     = document.querySelector('.productHeader')
const sidebar       = document.querySelector('.productGrid>aside')
const sidebarButton = document.querySelector('.productHeader>ul>li>button')
const header        = document.querySelector('header>nav')
const topBar        = document.querySelector('header>section')
const productSlider = document.querySelector('.productSlider ul:nth-child(2)')
const product = document.querySelector('.productSlider ul:nth-child(2) li')
const prevButton    = document.querySelector('.productSlider li:last-child li:first-child button:first-child')
const nextButton    = document.querySelector('.productSlider li:last-child li:last-child button:last-child')

let currentIndex = 0
const maxIndex   = productSlider.children.length - 1

const updateSlider = () => {
  console.log(productSlider.clientWidth)
  productSlider.scrollLeft = currentIndex * 500
}

console.log(product.clientWidth)

const updateButtons = () => {
  if (currentIndex === 0) {
    prevButton.classList.add('disabled');
    nextButton.classList.remove('disabled');
  } else if (currentIndex === maxIndex) {
    prevButton.classList.remove('disabled');
    nextButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
    nextButton.classList.remove('disabled');
  }
};

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


// let currentIndex = 0
//
// const nextSlide = () => {
//   currentIndex = (currentIndex + 1) % infoSlider.children.length
//   updateSlider()
// }
//
// const updateSlider = () => {
//   const translateValue    = -currentIndex * 100 + '%'
//   infoSlider.style.transition = 'transform 0.6s'
//   infoSlider.style.transform  = 'translateX(' + translateValue + ')'
// }
//
// setInterval(nextSlide, 6000)
//
// // const handleScrollDirection = () => {
// //   const currentPosition = window.scrollY
// //
// //   if (currentPosition >= 164) {
// //     stickyBar.classList.add('sticky')
// //   } else {
// //     stickyBar.classList.remove('sticky')
// //   }
// // }
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
// window.addEventListener('scroll', handleScroll)
//
// const slideOutSidebar = () => {
//   sidebar.classList.toggle('slideOut')
// }
//
// sidebarButton.addEventListener('click', slideOutSidebar)
//
//
//
