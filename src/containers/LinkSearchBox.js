import React, {useState}  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import DNA from '../presentational/DNA.js';
import SearchBox from '../presentational/SearchBox.js';
import LinkCard1 from '../presentational/LinkCard1';
import LinkCard2 from '../presentational/LinkCard2';
import CommentBox1 from '../presentational/CommentBox1';
import CommentBox2 from '../presentational/CommentBox2';
import manadrain from '../presentational/images/manadrain.png';
import useMTGSDK from '../hooks/useMTGSDK';


export const LinkSearchBox = (props) => {

       const [box1validation, setbox1validation] = useState(false);
       const [box2validation, setbox2validation] = useState(false);
       const [searchTerm, setSearchTerm] = React.useState("");
       const [searchResults, setSearchResults] = React.useState([]);
       const [currentImage, setCurrentImage] = useState(manadrain);
  
       const handleChange = event => {
          //setSearchTerm(event.target.value);
         
        };
      
      
       
     

return (
    
     <Container>

          <div className="asdf">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        <Row>
          <Col>
            <LinkCard1 image={manadrain}></LinkCard1>
            <SearchBox></SearchBox>
          </Col>
            <DNA></DNA>
          <Col>
            <LinkCard2></LinkCard2>
            <SearchBox></SearchBox>
          </Col>
        </Row>
            <br/>
            <Row>
              <CommentBox1></CommentBox1>
            </Row>
            <Row>
                <CommentBox2></CommentBox2>
            </Row>
   
      </Container>
    
  );
}
export default LinkSearchBox;