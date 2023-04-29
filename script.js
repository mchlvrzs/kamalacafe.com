let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Preload image before displaying it
  let img = slides[slideIndex-1].getElementsByTagName("img")[0];
  img.src = img.getAttribute("data-src");
  img.onload = function() {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  };
  
  // Clear the automatic slideshow interval
  clearInterval(slideInterval);
}

// Manual Slideshow
slideInterval = setInterval(function() {
  plusSlides(1);
}, 3000);

// Show first slide automatically
window.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
});


