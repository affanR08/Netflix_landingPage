
function scrollLeft() {
  const container = document.getElementById('filmScroll');
  container.scrollBy({
    left: -400,
    behavior: 'smooth'
  });
}


function scrollRight() {
  const container = document.getElementById('filmScroll');
  container.scrollBy({
    left: 400,
    behavior: 'smooth'
  });
}