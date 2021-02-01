import {useState, useEffect} from 'react';
const mtg = require('mtgsdk');



const useMTGSDK = (cardName) => {

    const [output, setOutput] = useState({})

        mtg.card.where({ name:cardName })
            .then(cards => {

                setOutput(cards[0]);
                //console.log(output); // {name:"Squee, Goblin Nabob"...}
                //console.log(cards[0].name); // "Keranos, God of Storms"
            })  

        return output;

    }

export default useMTGSDK;