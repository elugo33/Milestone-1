import Deck from "./deck.js"

const computerCard = document.querySelector(".computer-card-slot")

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)
computerCardSlot.appendChild(deck.cards[0].getHTML())