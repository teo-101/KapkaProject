const imagine = document.getElementById('headerImg');
const nav = document.getElementById('navigare');
const navTitle = document.querySelector('nav h2');
const menuImg = document.getElementById('menuImg');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = scrollTop / maxScroll;
  const translateY = scrollPercentage * 100;
  imagine.style.transform = `translateY(${translateY}%)`;

  if (scrollPercentage*100 > 39) {
    nav.style.opacity = '1';
    navTitle.style.opacity = '1';
    menuImg.style.opacity = '1';
  } else {
    nav.style.opacity = '0';
    navTitle.style.opacity = '0';
    menuImg.style.opacity = '0';
  }
    
});