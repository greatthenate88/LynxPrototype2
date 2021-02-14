import React from 'react';
import {Row, Col, Container, Card, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LinkSearchBox from '../containers/LinkSearchBox';
import NaviBar from '../presentational/NaviBar';
import Footer from '../presentational/Footer';


export default function Links(props) {
    return (
      <div>
        <NaviBar></NaviBar>
        <br/>
        <br/>
        <LinkSearchBox></LinkSearchBox>   
        <br/>
        <br/>
        <Footer></Footer>
      </div>
        );
    }