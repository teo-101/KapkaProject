let cnt = 1;
const left = document.getElementById('arrowLeft');
const right = document.getElementById('arrowRight');
const cards = [
  document.getElementById('card0'),
  document.getElementById('card1'),
  document.getElementById('card2')
];

let cnt1 = 0; // Initialize the cnt variable to 0
const indicators = [
  document.getElementById('indicator0'),
  document.getElementById('indicator1'),
  document.getElementById('indicator2')
];

function updateIndicators() {
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
  }
  indicators[cnt1].classList.add('active');
}

function cardSwapRight() {
  const lastCard = cards[cards.length - 1];
  cards.pop(); // Remove the last card from the array
  cards.unshift(lastCard); // Insert the last card at the beginning of the array

  // Update the positions of the cards
  if (cnt !== 2) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `translateX(100%)`;
    }
    cnt = 2;
  } else {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `translateX(0%)`;
    }
    cnt = 1;
  }
  updateIndicators();
}

function cardSwapLeft() {
  const firstCard = cards.shift(); // Remove the first card from the array
  cards.push(firstCard); // Insert the first card at the end of the array

  // Update the positions of the cards
  if (cnt != 2) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `translateX(${-100}%)`;
    }
    cnt = 2;
  }
  else {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `translateX(${0}%)`;
    }
    cnt = 1;
  }
  updateIndicators();
}

