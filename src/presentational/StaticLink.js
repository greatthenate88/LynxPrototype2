import React, {useState, useEffect}  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import DNA from '../presentational/DNA.js';
import LinkCard from '../presentational/LinkCard';


export const StaticLink = (props) => {


       const [searchTerm, setSearchTerm] = React.useState("Black Lotus");
       const [searchTerm2, setSearchTerm2] = React.useState("Shock");
       const [searchResults, setSearchResults] = React.useState([]);
       const [currentImage, setCurrentImage] = useState("");
       const [currentImage2, setCurrentImage2] = useState("");
       const mtg = require('mtgsdk');
     
  


        const fetchArt = async (cardName) => {

          mtg.card.where({ name:cardName })
          .then(cards => {
              console.log("fetchArt call"+'"'+cards[0].imageUrl+ '"'); 
              setCurrentImage(cards[0].imageUrl)
          })  
        //  console.log("Calling Card art" + )
        }

        const fetchArt2 = async (cardName) => {

          mtg.card.where({ name:cardName })
          .then(cards => {
              
              console.log("fetchArt call"+'"'+cards[0].imageUrl+ '"');
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
                <div className="LI">
                    <div className="LD">2/1/21</div>
                    <div className="LS">95%</div>
                    <div className="LR">+420</div>
                </div>
        </Row>
        <Row>
            <Col>
                <LinkCard id="box1" image={currentImage}></LinkCard>
            </Col>
            <DNA></DNA>
            <Col>
                <LinkCard id="box2" image={currentImage2}></LinkCard>
            </Col>
        </Row>
        <br/>
      </Container>
    
  );
}
export default StaticLink;