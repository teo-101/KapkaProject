const imagine = document.getElementById('headerImg');
const nav = document.getElementById('navigare');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = scrollTop / maxScroll;
  const translateY = scrollPercentage * 100;
  imagine.style.transform = `translateY(${translateY}%)`;

  if (scrollPercentage*100 > 39) {
    nav.style.opacity = '100%';
  }
  else if (scrollPercentage*100 < 39) {
    nav.style.opacity = `0%`;
  }
});