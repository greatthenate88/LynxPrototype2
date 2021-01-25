import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from '../presentational/SearchBox';
import LinkCard1 from '../presentational/LinkCard1';
import LinkCard2 from '../presentational/LinkCard2';
import DNA from '../presentational/DNA';
import CommentBox1 from '../presentational/CommentBox1';
import CommentBox2 from '../presentational/CommentBox2';
import useMTGSDK from '../hooks/useMTGSDK';
import LinkSearchBox from '../containers/LinkSearchBox';


export default function Links(props) {
    const test= useMTGSDK('Shock');
    console.log(test);
  
    return (
        <Container>
            <LinkSearchBox></LinkSearchBox>
            <Row>
                <Col>
                    <LinkCard1></LinkCard1>
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