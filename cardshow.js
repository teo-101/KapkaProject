var currentCardIndex = 0;
  var cards = document.getElementsByClassName("card");
  var indicators = document.getElementsByClassName("indicator");

  function showCard(index) {
    if (index >= 0 && index < cards.length) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
        indicators[i].classList.remove("active");
      }
      cards[index].style.display = "block";
      indicators[index].classList.add("active");
      currentCardIndex = index;
    }
  }

  function cardSwapLeft() {
    var newIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showCard(newIndex);
  }

  function cardSwapRight() {
    var newIndex = (currentCardIndex + 1) % cards.length;
    showCard(newIndex);
  }

  // Show the initial card
  showCard(currentCardIndex);