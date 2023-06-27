let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Hello",
  chips: 145
}
// let playerName = "Hello";
// let playerchips = 145;
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name+": $"+player.chips;
let message = "";

//  Start game function
function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

// getRandomCard function
function getRandomCard() {

  let randomNumber =  (Math.floor(Math.random() * 13) + 1);
  if(randomNumber === 1){
    return 11;
  }else if(randomNumber > 10 ){
    return 10;
  }else{
    return randomNumber;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card:";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You've got Blackjack!";
  } else {
    isAlive = false;
    message = "Sorry! You're out of the game";
  }

  messageEl.textContent = message;
}

function newCard() {
if(isAlive === true && hasBlackJack === false){  
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();}
}
