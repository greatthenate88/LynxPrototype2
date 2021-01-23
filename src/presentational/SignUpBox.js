import React, {useState}  from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';




const SignUpThing = styled.div`
    .UN {
        padding-top:10px;
        padding-right:10px;
    }
    .PW {
        padding-top:10px;
        padding-right:15px;
    }
    .FormBox1 {
        background-color:azure;
        margin-right:15px;
        border-radius:5px;
    }
    .FormButton1 {
        justify-content:center;
        border-radius:10px;
        border-color:lightsteelblue;
        border-width:.15rem;
        font-size:20px;
        background-color:azure;
        padding-bottom:1px;
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
                    <label class='UN'>Username:</label>
                    <input placeholder="Username" class='FormBox1' type='text'></input>
                    <br/>
                    <label class='PW'>Password:</label>
                    <input placeholder="Password" class='FormBox1' type='text'></input>
                    <br/>
                    <br/>
                    <button class='FormButton1'><a href="/" class="SI">Start Linking!</a></button>

                </Col>    
            </Row>    
            <Row>

            </Row>
            </SignUpThing>
        </Container>
    
  );
}
export default SignInBox;