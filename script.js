let firstCard;
let secondCard;
let hasCardFlipped = false;
let cardsLocked = false;
let min = 0;
let sec = 0;
let stopTime = true;

const timer = document.querySelector('.stop-watch');
const todayDate = new Date();
console.log(todayDate);
document.querySelector('.new-date').innerHTML = todayDate.toLocaleString();;


const cards = document.querySelectorAll('.card-container');


//function added to allow a toggle switch for a card clicked
function flipCard() {
    if (cardsLocked) return;
    this.classList.add('flip');
    if (this === firstCard) return;
    if(!hasCardFlipped) {
        hasCardFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasCardFlipped = false;

    doCardsMatch();
}

//function to check if cards match with data-set added into html
function doCardsMatch() {
    if(firstCard.dataset.icon === secondCard.dataset.icon) {
        removeCards();
        disable();
        return;
    }
    unflippingCards();
}

//this removes the cards on a match
function removeCards() {
    firstCard.style.visibility = 'hidden'
    secondCard.style.visibility = 'hidden'
}

function disable() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflippingCards() {
    cardsLocked = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        cardsLocked = false;
    }, 1000);
}
function timerFlow() {
    if (stopTime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        sec++;
        if (sec === 60) {
            min = min +1;
            sec = 0;
        }
        if (sec < 10 || sec === 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min === 0) {
            min = '0' + sec;
        }
        timer.innerHTML = `${min}:${sec}`;
        setTimeout('timerFlow()', 1000);
    }
}

function startTimer() {
    if (stopTime === true) {
        stopTime = false;
        timerFlow();
    }
}
function stopTimer() {
    if(stopTime === false) {
        stopTime = true;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));