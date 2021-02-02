
const mtg = require('mtgsdk');



export default function cardArt (cardName) {

  var currentCard ="";

        mtg.card.where({ name:cardName })
            .then(cards => {

              currentCard = cards[0].imageUrl;
                //console.log(output); // {name:"Squee, Goblin Nabob"...}
                console.log(cards[0].imageUrl); // "Keranos, God of Storms"
            })  

        return currentCard;

    }

