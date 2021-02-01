import React, {useState}  from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';



const SignInThing = styled.div`
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
            <SignInThing>
            <Row>
                <Col>
                <form>
                    <h1>Sign In</h1> 
                    <label className='UN'>Username:</label>
                    <input placeholder="Username"  className='FormBox1' type='text'></input>
                    <br/>
                    <label className='PW'>Password:</label>
                    <input placeholder="Password" className='FormBox1' type='text'></input>
                    <br/>
                    <br/>
                    <button className='FormButton1'><a href="/" className="SI">Sign In!</a></button>
                </form>
                </Col>    
            </Row>    
            <Row>

            </Row>
            </SignInThing>
        </Container>
    
  );
}
export default SignInBox;