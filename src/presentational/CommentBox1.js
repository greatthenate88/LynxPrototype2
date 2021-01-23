import React from 'react'
import styled from 'styled-components'
import {Row, Container} from 'react-bootstrap';
import FABULOUS from './images/FABULOUS.jpg';

const Comment = styled.div`
    border-width:1px;
    border-style:none none double none;
    border-color:#008d8e;
    padding-top:5px;
    width:90%;
    margin-top:auto;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:1rem;
    .title{
        margin-right:5px;
        height:20%;
        width:100px;
        padding-left:5px;
        border-right:1px solid #d1efff;
        display:flex;
    }
    .words{
        display:flex;
        background-color:#e8f4ff;
        border-radius:5px;
        width:80%;
        text-align:left;
        padding:10px;
        margin:30px;
    }
    .UN{
        display:inline-block;
    }
    img{
        border:1px solid #d1efff;
        border-radius:1.5rem;
        height:35px;
        width:45px;
        margin-right:10px;
        margin-top:5px;

    }
    @media (max-width: 1px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

export const CommentBox1 = (props) => {
    return (
        <Container>
            <Row>
        <Comment>
            <div class="title">
                <div class="UN">Username
                <img alt="profilepic" src={FABULOUS}/>
                </div>
            </div>
            <div class="words">Tenetur dolores nostrum rerum et. Ratione quis quaerat vitae. Consequatur assumenda qui reprehenderit sit. Aliquam explicabo nobis rerum quia.</div>
        </Comment>
            </Row>
        </Container>
    );
    }
export default CommentBox1;