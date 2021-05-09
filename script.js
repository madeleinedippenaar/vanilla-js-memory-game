const cards = document.querySelectorAll('.card-container');
let hasCardFlipped = false;
let cardsLocked = false;
let firstCard;
let secondCard;
let min = 0;
let sec = 0;
let interval;
let countMatches = 0;
let cardArray = [];

const timer = document.querySelector('.stop-watch');
const todayDate = new Date();
console.log(todayDate);
document.querySelector('.new-date').innerHTML = todayDate.toLocaleString();;

const frontSide = document.querySelectorAll('.front-face');
const backSide = document.querySelectorAll('.back-face');


//shuffles cards when function is called
function shuffle() {
    cards.forEach(card => {
        let randomCards = Math.floor(Math.random() * 12);
        card.style.order = randomCards;
    })
}


// function startGame() {
//     shuffle(cards);
//     startTimer();
// }

//function added to allow a toggle switch for a card clicked
function flipCard() {
    if (cardsLocked) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if(!hasCardFlipped) {
        hasCardFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    // hasCardFlipped = false;
    doCardsMatch();
}

//function to check if cards match with data-set added into html
function doCardsMatch() {
    if(firstCard.dataset.icon === secondCard.dataset.icon) {
        cardArray.push(firstCard);
        cardArray.push(secondCard);
        disable();
        return;
    }
    unflippingCards();
}

function disable() {
    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }, 1000)
}

function unflippingCards() {
    cardsLocked = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = min + ':' + sec;
        sec++
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (sec === 60) {
            min++
            sec = '0';
        }
    }, 1000);
};

function resetButton() {
    location.reload();
    startTimer();
}

function resetBoard() {
    hasCardFlipped = false;
    cardsLocked = false;
    firstCard = null;
    secondCard = null;
}

cards.forEach(card => card.addEventListener('click', flipCard));