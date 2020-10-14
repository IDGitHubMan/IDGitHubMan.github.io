var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var maxwidth = window.innerWidth;
  var i;
  var slides = document.getElementsByClassName("trio");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (maxwidth <= 950) {
    slides[slideIndex - 1].style.display = "block";
  }
  else {
    slides[slideIndex - 1].style.display = "flex";
  }
}