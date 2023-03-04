let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex++;

  if (slideIndex === slides.length) {
    slideIndex = 0;
  }

  setTimeout(showSlides, 5000);
}

showSlides();