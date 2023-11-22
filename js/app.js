const board = document.querySelector('.board');

const values_array = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let randomizedArray = shuffle(values_array);
let isMyTurn = true;
let firstCardFlipped = false;
let firstCard, secondCard;
let score_player_one = 0;
let score_player_two = 0;
let disableCards = false;

(renderCards = () => {
    for(let i = 0; i < randomizedArray.length; i++){
        const card = document.createElement('div');
        card.className = `card ${randomizedArray[i]}`
        const innerCard = document.createElement('div');
        innerCard.className = `card-inner`
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front'
        const cardBack = document.createElement('div');
        cardBack.className =`card-back ${randomizedArray[i]}`
        innerCard.appendChild(cardFront);
        innerCard.appendChild(cardBack);
        card.appendChild(innerCard);
        board.appendChild(card);
    }
})();

//Fisher-Yates Shuffle
function shuffle(array){
    let currentIndex = array.length,  randomIndex;

    while(currentIndex > 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]];
    }
    return array
}

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard(){
    if(disableCards) return;
    this.classList.add('flipCard');
    if(!firstCardFlipped){
        firstCardFlipped = true;
        firstCard = this;
        return
    }
    if(this === firstCard) return;
    secondCard = this;
    firstCardFlipped = false;
    checkMatch();
}

function checkMatch() {
    firstCard.className == secondCard.className ? removeCards() : flipBack();
}

function removeCards(){
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
}

function flipBack(){
    disableCards = true;
    setTimeout(() => {
        firstCard.classList.remove('flipCard')
        secondCard.classList.remove('flipCard')

        disableCards = false;
    }, 1500)
}