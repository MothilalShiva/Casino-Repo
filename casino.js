
let cards=[]
let sum=0
let hasBlackJack= false
let isAlive=false 
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let player={
    playerName : "Per" ,
    playerChips: 142

};
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.playerName + ": $" + player.playerChips;
console.log(cards)
console.log(sumEl)
console.log(messageEl)
console.log(cardsEl)

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1


    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}

function rendergame(){
    startGame()
}

function startGame()
{
    isAlive=true 
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    cardsEl.textContent="Cards:" 
    for(let i=0; i<cards.length; i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="sum: "+ sum;
    if(sum<=20){
        message="Do you want to draw a new card"
    }
    else if(sum==21){
        message=" You've got Blackjack"
    }
    else{
        message="You're out of the game"
        isAlive=false
    }
    messageEl.textContent=message

 

}
function newCard(){
    if(isAlive===true && hasBlackJack===false){ 
     let card = getRandomCard()
     sum+=card
     cards.push(card)
     console.log(cards)
     rendergame()
    }
 }
