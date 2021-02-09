import React, {useState}  from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';




const SignUpThing = styled.div`

    .FormBox1 {
        background-color:#feffff;
        margin:0 0 2px 0;
        border-radius:5px;
        border-style:solid;
        height:25%;
        width:75%;
    }
    .FormButton1 {
        justify-content:center;
        border-radius:10px;
        border-color:#d1efff;
        border-width:.15rem;
        font-size:20px;
        background-color:#feffff;
        margin:3px 0 0 0;
    }
    .FormBox1:focus{
        
    }
    .SI {
        color:black;
    }
`;


export const SignInBox = (props) => {

return (
    
        <Container>
            <SignUpThing>
            <Row>
                <Col>

                    <h1>Sign Up</h1> 

                    <input placeholder="Username" className='FormBox1' type='text'></input>
                    <br/>

                    <input placeholder="Password" className='FormBox1' type='text'></input>
                    <br/>
                    <input placeholder="Confirm Password" className='FormBox1' type='text'></input>
                    <br/>
                    <button className='FormButton1'><a href="/createlink" className="SI">Start Linking!</a></button>


                </Col>    
            </Row>    
            <Row>

            </Row>
            </SignUpThing>
        </Container>
    
  );
}
export default SignInBox;