document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.infoSlider>div>ul');
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transition = 'transform 0.6s'; // Set the transition duration to 0.3 seconds (adjust as needed)
    slider.style.transform = 'translateX(' + translateValue + ')';
  }

  setInterval(nextSlide, 6000);
});
