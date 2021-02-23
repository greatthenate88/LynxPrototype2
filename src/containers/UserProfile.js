
import React from 'react';
import styled from 'styled-components';
import {Row, Col, Container, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CommentBox1 from '../presentational/CommentBox';
import ProfilePic from '../presentational/ProfilePic';
import PW from '../presentational/images/PW.png';
import StaticLink from '../presentational/StaticLink';
import LinkDescription from '../presentational/LinkDescription';

const UP = styled.div`
  .ProfileHeader{
    width:25rem;
    border-style:dashed;
    border-width:1px;
    border-radius:2px;
    border-color:black;
    margin:auto;
    padding:10px;
  }
  .UN{
    margin:auto;
  }
  .rating{
    margin:auto;
    font-size:1.2rem;
    font-weight:bold;
    display:block;
    position:relative;
    top:5px;
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
  .SubHeader{
    font-size:2rem;
    border-style:none none double none;
    border-width:1px;
  }
  .LI{
    display:flex;
    width:100%;
    border-bottom:solid 1px;
    margin-bottom:1px;
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
    margin:0px 10px;
  }
`;



export const UserProfile = (props) => {
    return (
<UP>
<Container>
<Row>
  <div className="ProfileHeader">
    <div className="UN">
      <ProfilePic></ProfilePic>
      ElvishPiper420
    </div>
    <div className="rating"><img className="RS" alt="ratingsymbolimage" src={PW}/><br/>Common (user rank)</div>
  </div>
</Row>
<br/>
<Row>  
  <h1 className="SubHeader">Recent Links</h1>
</Row>
<Row>
  <Col> 
    <StaticLink></StaticLink>
  </Col>
  <Col>
    <div className="UserLinks">
      Shock x Lightning Bolt
    </div>
    <LinkDescription></LinkDescription>
  </Col>
  <Col>
    <div className="UserLinks">
      Black Lotus x Ancestral Recall
    </div>
    <LinkDescription></LinkDescription>
  </Col> 
</Row>
<br/>
<Row>
  <h1 className="SubHeader">Recent Comments</h1>
  <CommentBox1></CommentBox1>
</Row>
</Container>
</UP>
    )
}
export default UserProfile;