const slider = document.querySelector('.infoSlider>div>ul')
let currentIndex = 0

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length
  updateSlider()
}

function updateSlider() {
  const translateValue    = -currentIndex * 100 + '%'
  slider.style.transition = 'transform 0.6s'
  slider.style.transform  = 'translateX(' + translateValue + ')'
}

setInterval(nextSlide, 6000)

const stickyBar = document.querySelector('.productHeader')

const handleScrollDirection = () => {
  const currentPosition = window.scrollY

  if (currentPosition >= 164) {
    stickyBar.classList.add('sticky')
  } else {
    stickyBar.classList.remove('sticky')
  }
}

window.addEventListener('scroll', handleScrollDirection)
