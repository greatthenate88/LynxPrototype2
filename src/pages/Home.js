
import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SFMCard from '../presentational/SFMCard.js';
import CustomCarousel from '../presentational/CustomCarousel';
import CustomHeader from '../presentational/CustomHeader.js';



export default function Home(props) {
  return (
    <div>
        
        <Container>
        <br/>
        <Row>
          <Col>
<br/>
            <Card></Card>
          </Col>
          <Col>
          <br/>
            <CustomCarousel></CustomCarousel>
          </Col>
        </Row>
        <Row>
          <Col>
          <br/>
            <SFMCard></SFMCard>
          </Col>
          <Col>
            <br/>
            <Card></Card>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>

        <Row>

        </Row>
        </Container>


    </div>
  );
}


