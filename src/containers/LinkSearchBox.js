import React, {useState}  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SearchBox from './presentational/SearchBox.js';





export const Searchy = (props) => {
       const [box1validation, setbox1validation] = useState(false);
       const [box2validation, setbox2validation] = useState(false);


return (
    
        <Container>
            <Row>
<Col><SearchBox onSubmit={() => setbox1validation(true)}></SearchBox></Col>

<Col><SearchBox></SearchBox></Col>
            </Row>
        </Container>
    
  );
}
export default Searchy;