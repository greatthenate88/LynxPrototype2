
import React from 'react';
import styled from 'styled-components';
import {Row, Col, Container, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CommentBox1 from '../presentational/CommentBox1';
import ProfilePic from '../presentational/ProfilePic';
import PW from '../presentational/images/PW.png';

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
  .RS{
    height:130px;
    width:70px;
    margin:0px 8px;
  }
`;


export default function ProfilePage(props) {
  return (
    <UserProfile>
        
        <Container>
          <Row>
            <div className="UN">
              <ProfilePic></ProfilePic>
              ElvishPiper420
            </div>
            <div className="rating">Rating:<img className="RS" alt="ratingsymbolimage" src={PW}/></div>
          </Row>
          <Row>
            
            <h1 className="ProfileHeader">Recent Links</h1>
          </Row>
          <Row>
            <Col> 
              <div className="LI">
                <div className="LD">2/1/21 (date)</div>
                <div className="LS">95% (strength)</div>
                <div className="LR">+100 (rating)</div>
              </div>
              <div className="UserLinks">
                Uro x Growth Spiral
              </div>
            </Col>
            <Col>
              <div className="LI">
                <div className="LD">(date)</div>
                <div className="LS">(strength)</div>
                <div className="LR">(rating)</div>
              </div>
              <div className="UserLinks">
                Shock x Lightning Bolt
              </div>
            </Col>
            <Col>
              <div className="LI">
                <div className="LD">(date)</div>
                <div className="LS">(strength)</div>
                <div className="LR">(rating)</div>
              </div>
              <div className="UserLinks">
                Black Lotus x Ancestral Recall
              </div>
            </Col> 
          </Row>
          <Row>
            <h1 className="ProfileHeader">Recent Comments</h1>
            <CommentBox1></CommentBox1>
          </Row>
        </Container>


    </UserProfile>
  );
}


