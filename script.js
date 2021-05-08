let firstCard;
let SecondCard;
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
    SecondCard = this;
    hasCardFlipped = false;

    doCardsMatch();
}

//function to check if cards match with data-set added into html
function doCardsMatch() {
    if(firstCard.dataset.icon === SecondCard.dataset.icon) {
        disable();
        return;
    }
    unflippingCards();
}

function disable() {
    firstCard.removeEventListener('click', flipCard);
    SecondCard.removeEventListener('click', flipCard);
}

function unflippingCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        SecondCard.classList.remove('flip');
    }, 2000);
}

cards.forEach(card => card.addEventListener('click', flipCard));