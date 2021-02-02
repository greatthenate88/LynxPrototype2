
import React from 'react';
import styled from 'styled-components';
import {Row, Col, Container, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CommentBox1 from '../presentational/CommentBox1';

const UserProfile = styled.div`
  .UN{
    margin:auto;
  }
  .rating{
    margin:auto;
  }
  .UserLinks{
    width:100%;
    border-style:solid;
    border-width:1px;
    border-radius:2px;
    font-size:1rem;
    padding-left:5px;
    padding-right:5px;
  }
  .ProfileHeader{
    font-size:2rem;
    border-style:none none double none;
    border-width:1px;
  }
  .LI{
    display:flex;
    width:100%;
  }
  .LD{
    width:50%;
    border-style:none solid none none;
    border-width:1px;
    margin-right:1px;
    text-align:center;
  }
  .LS{
    width:50%;
    border-style:none solid none solid;
    border-width:1px;
    margin-right:1px;
    text-align:center;
  }
  .LR{
    width:50%;
    border-style:none none none solid;
    border-width:1px;
    padding-left:5px;
    text-align:center;
  }
`;


export default function Home(props) {
  return (
    <UserProfile>
        
        <Container>
          <Row>
            <div className="UN">ElvishPiper420</div>
            <div className="rating">Rating</div>
          </Row>
          <Row>
            
            <h1 className="ProfileHeader">Recent Links</h1>
          </Row>
          <Row>
            <Col> 
              <div className="LI">
                <div className="LD">2/1/21 (date)</div>
                <div className="LS">95% (strength)</div>
                <div className="LR">updoots or rating</div>
              </div>
              <div className="UserLinks">
                Uro x Growth Spiral
              </div>
            </Col>
            <Col></Col>
            <Col></Col> 
          </Row>
          <Row>
            <h1 className="ProfileHeader">Recent Comments</h1>
            <CommentBox1></CommentBox1>
          </Row>
        </Container>


    </UserProfile>
  );
}


