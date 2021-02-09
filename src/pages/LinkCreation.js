import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from '../presentational/SearchBox';
import DNA from '../presentational/DNA';
import CommentBox1 from '../presentational/CommentBox1';
import MakeComment from '../presentational/MakeComment';
import useMTGSDK from '../hooks/useMTGSDK';
import LinkSearchBox from '../containers/LinkSearchBox';


export default function Links(props) {
    //const test= useMTGSDK('Shock');
    //console.log(test);
  
    return (
        <Container>
            <LinkSearchBox></LinkSearchBox>
        </Container>
        );
    }