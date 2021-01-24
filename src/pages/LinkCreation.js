import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBox from '../presentational/SearchBox';
import LinkCard1 from '../presentational/LinkCard1';
import LinkCard2 from '../presentational/LinkCard2';
import DNA from '../presentational/DNA';
import CommentBox1 from '../presentational/CommentBox1';
import CommentBox2 from '../presentational/CommentBox2';


export default function Links(props) {
    return (

        <Container>
            <Row>
{/*Col DNA and Col will be LinkSearchBox container*/}<Col><LinkCard1></LinkCard1><SearchBox></SearchBox></Col>
<DNA></DNA>
<Col><LinkCard2></LinkCard2><SearchBox></SearchBox></Col>
            </Row>
            <br/>
            <Row>
{/*Comment Boxes will be Comment Section container*/}<CommentBox1></CommentBox1>
            </Row>
            <Row>
{/*Comment Boxes will be Comment Section container*/}<CommentBox2></CommentBox2>
            </Row>
        </Container>
        );
    }