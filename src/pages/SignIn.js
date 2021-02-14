import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NaviBar from '../presentational/NaviBar';
import Footer from '../presentational/Footer';
import SignInBox from '../presentational/SignInBox';
import SignUpBox from '../presentational/SignUpBox';



export default function SignIn(props) {
  return (
    <div>
      <NaviBar></NaviBar>
        <br/>
        <br/>
          <Container>
            <Row>
              <Col>
                <SignInBox></SignInBox>
              </Col>
              <Col>
                <SignUpBox></SignUpBox>
              </Col>
            </Row>
          </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <Footer></Footer>
    </div>
  );
}