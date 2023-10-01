const SUITS=["♠", "♥", "♣","♦"]
const VALUES=["A", "2","3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
export default class Deck{
    constructor(cards = freshDeck()){
        this.cards= []

        get NumberOfCards( {
            return this.cards.length
        })
shuffle(){
   for (let i = this.NumberOfCards - 1; i>0; i--) {
    const newIndex = Math.floor(Math.random() * (i+i))
    const OldValue = this.cards[newIndex]
    this.cards[newIndex] = this.cards[i]
    this.cards[i] = OldValue
   }
}
    }
}
class Card{
    constructor(suit,value){
        this.suit=suit
        this.value=value
    }
}
Function freshDeck(){
    return SUITS.flatMap(suit =>{
        return VALUES.map(value =>{
            return new Card (suit, value)
        })
    })
}