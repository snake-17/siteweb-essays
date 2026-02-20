let currentIndex = 0;

function updateCarousel() {
  const track = document.getElementById("track");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = document.querySelectorAll(".carrusel-slide").length;

  // Si por alguna razón el índice se sale, lo reseteamos
  if (currentIndex >= totalSlides) currentIndex = 0;
  if (currentIndex < 0) currentIndex = totalSlides - 1;

  // Movemos el track: -100% para la segunda imagen, -200% para la tercera, etc.
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Actualizamos los puntitos (dots)
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  updateCarousel();
}

function currentSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Auto-play opcional: se mueve solo cada 5 segundos
setInterval(() => {
  moveSlide(1);
}, 5000);
