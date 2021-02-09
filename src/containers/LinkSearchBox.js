import React, {useState, useEffect}  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import DNA from '../presentational/DNA.js';
import SearchBox from '../presentational/SearchBox.js';
import LinkCard from '../presentational/LinkCard';
import CommentBox1 from '../presentational/CommentBox1';
import MakeComment from '../presentational/MakeComment';
import manadrain from '../presentational/images/manadrain.png';



export const LinkSearchBox = (props) => {

       const [box1validation, setbox1validation] = useState(false);
       const [box2validation, setbox2validation] = useState(false);
       const [searchTerm, setSearchTerm] = React.useState("Black Lotus");
       const [searchTerm2, setSearchTerm2] = React.useState("Shock");
       const [searchResults, setSearchResults] = React.useState([]);
       const [currentImage, setCurrentImage] = useState("");
       const [currentImage2, setCurrentImage2] = useState("");
       const mtg = require('mtgsdk');
     
  
       const handleChange = event => {
          setSearchTerm(event.target.value);
        };

        const handleChange2 = event => {
          setSearchTerm2(event.target.value);
        };

        const fetchArt = async (cardName) => {

          mtg.card.where({ name:cardName })
          .then(cards => {
              //console.log(output); // {name:"Squee, Goblin Nabob"...}
              console.log("fetchArt call"+'"'+cards[0].imageUrl+ '"'); // "Keranos, God of Storms"
              setCurrentImage(cards[0].imageUrl)
          })  
        //  console.log("Calling Card art" + )
        }

        const fetchArt2 = async (cardName) => {

          mtg.card.where({ name:cardName })
          .then(cards => {
              //console.log(output); // {name:"Squee, Goblin Nabob"...}
              console.log("fetchArt call"+'"'+cards[0].imageUrl+ '"'); // "Keranos, God of Storms"
              setCurrentImage2(cards[0].imageUrl)
          })  
        //  console.log("Calling Card art" + )
        }
        //Box one use effect
        useEffect(() => {
          fetchArt(searchTerm);
        }, [searchTerm]);
        //Box two use effect
        useEffect(() => {
          fetchArt2(searchTerm2);
        }, [searchTerm2]);

return (
    
     <Container>
        <Row>
          <Col>
            <LinkCard id="box1" image={currentImage}></LinkCard>
            <SearchBox   type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}>
            </SearchBox>
          </Col>
            <DNA></DNA>
          <Col>
            <LinkCard id="box2" image={currentImage2}></LinkCard>
            <SearchBox   type="text"
              placeholder="Search"
              value={searchTerm2}
              onChange={handleChange2}
              ></SearchBox>
          </Col>
        </Row>
            <br/>
            <Row>
              <MakeComment></MakeComment>
            </Row>
            <Row>
              <CommentBox1></CommentBox1>
            </Row>
   
      </Container>
    
  );
}
export default LinkSearchBox;