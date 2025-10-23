// Fungsi untuk scroll ke kiri
function scrollLeft() {
  const container = document.getElementById('filmScroll');
  container.scrollBy({
    left: -400,
    behavior: 'smooth'
  });
}

// Fungsi untuk scroll ke kanan
function scrollRight() {
  const container = document.getElementById('filmScroll');
  container.scrollBy({
    left: 400,
    behavior: 'smooth'
  });
}