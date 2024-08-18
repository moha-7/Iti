//we're gonna create object 
//player object
let player = {
    name: 'mohamed',
    chips: 120,
    // sayHello: function() {
    //     console.log('hello');
    // } method
}
playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let cardsM = Math.floor(Math.random() * 13) + 1
    if (cardsM === 1) { // ACE
        return 11
    } else if (cardsM > 10) { //checking if it's K,Q,J
        return 10
    } else {
        return cardsM // return the value if it is just a card *K,Q,J , *ACE
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard


    renderGame()
}

function renderGame() {

    cardsEl.textContent = " cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " , "

    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else {
        alert("Start New Game")

    }


}