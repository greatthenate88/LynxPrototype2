import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NaviBar from '../presentational/NaviBar';
import Footer from '../presentational/Footer';
import SignInBox from '../presentational/SignInBox';
import SignUpBox from '../presentational/SignUpBox';


export default function SignIn(props) {
  return (
    <div>
        
        <Container>
        <br/>
        <Row>
          <Col>
            <SignInBox></SignInBox>
          </Col>
          <Col>
            <SignUpBox></SignUpBox>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>

        <Row>

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

    </div>
  );
}