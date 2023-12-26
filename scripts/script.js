const slider = document.querySelector('.infoSlider>div>ul')
const stickyBar = document.querySelector('.productHeader')
const sidebar = document.querySelector('.productGrid>aside')
const sidebarButton = document.querySelector('.productHeader>ul>li>button')

let currentIndex = 0

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slider.children.length
  updateSlider()
}

const updateSlider = () => {
  const translateValue    = -currentIndex * 100 + '%'
  slider.style.transition = 'transform 0.6s'
  slider.style.transform  = 'translateX(' + translateValue + ')'
}

setInterval(nextSlide, 6000)

const handleScrollDirection = () => {
  const currentPosition = window.scrollY

  if (currentPosition >= 164) {
    stickyBar.classList.add('sticky')
  } else {
    stickyBar.classList.remove('sticky')
  }
}

window.addEventListener('scroll', handleScrollDirection)

const slideOutSidebar = () => {
  sidebar.classList.toggle('slideOut')
}

sidebarButton.addEventListener('click', slideOutSidebar)

