import React, {useState}  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SearchBox from '../presentational/SearchBox.js';



const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];


export const LinkSearchBox = (props) => {

       const [box1validation, setbox1validation] = useState(false);
       const [box2validation, setbox2validation] = useState(false);
       const [searchTerm, setSearchTerm] = React.useState("");
       const [searchResults, setSearchResults] = React.useState([]);

       const handleChange = event => {
          setSearchTerm(event.target.value);
        };
       React.useEffect(() => {
          const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
          );
          setSearchResults(results);
        }, [searchTerm]);
      
       


return (

     <Container>
       <Row>
       <div className="asdf">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
            />
            <ul>
               {searchResults.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <Col>
            <SearchBox onSubmit={() => setbox1validation(true)}></SearchBox>
          </Col>

          <Col>
            <SearchBox></SearchBox>
          </Col>

        </Row>     
      </Container>
    
  );
}
export default LinkSearchBox;