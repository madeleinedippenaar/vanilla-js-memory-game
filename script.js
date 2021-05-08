let firstCard;
let secondCard;
let hasCardFlipped = false;


const cards = document.querySelectorAll('.card-container');


//function added to allow a toggle switch for a card clicked
function flipCard() {
    // this.classList.toggle('flip');
    this.classList.add('flip');

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
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 2000);
}

cards.forEach(card => card.addEventListener('click', flipCard));