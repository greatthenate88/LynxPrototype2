import React from 'react'
import styled from 'styled-components'
import {Row, Container} from 'react-bootstrap';
import sfm from './images/sfm.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';

const Comment = styled.div`

    padding-top:5px;
    padding-bottom:2px;
    width:80%;
    margin-top:auto;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:1rem;
    .title{
        margin-right:5px;
        height:10%;
        width:15%;
        padding-left:5px;
        display:flex;
    }
    a{
        color:black;
    }
    a:hover{
    color:#003a41;
    }
    .words{
        border-width:1px;
        border-style:none none double none;
        border-color:#008d8e;
        display:flex;
        background-color:#e8f4ff;
        border-radius:5px 5px 0px 0px;
        width:80%;
        text-align:left;
        padding:3px;
        margin-top:15px;
    }
    .UN{
        display:inline-block;        
        border-right:1px solid #d1efff;
        padding-right:7px;
        padding-left:5px;
    }
    img{
        border:1px solid #d1efff;
        border-radius:50%;
        height:45px;
        width:48px;
        margin-right:10px;
        margin-top:5px;
    }
    input{
        width:95%;
        border-style:inset;
        border-width:1px;
        border-color:whitesmoke;
        border-radius:3px;
        margin-right:2px;
        padding-left:5px;
    }
    button{
        width:5%;
        min-width:35px;
        border-color:skyblue;
        background-color:whitesmoke;
        color:#003a41;
        border-style:outset;
        border-width:.07rem;
        border-radius:5px;
        font-size:100%;
    }

`;


export const MakeComment = (props) => {
    return (
        <Container>
            <Row>
        <Comment>
            <div className="title">
                <div className="UN"><a href="/profile">ICantBlockWarriors</a>
                <img alt="profilepic" src={sfm}/>
                </div>
            </div>
            <div className="words">
                <input placeholder="Share your thoughts!"></input>
                <button><FontAwesomeIcon icon={faComment}/></button>
            </div>
        </Comment>
            </Row>
        </Container>
    );
    }
export default MakeComment;