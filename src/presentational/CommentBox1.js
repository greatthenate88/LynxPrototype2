import React, { useState } from 'react'
import styled from 'styled-components'
import {Row, Container} from 'react-bootstrap';
import FABULOUS from './images/FABULOUS.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';


const Comment = styled.div`
    border-width:1px;
    border-style:none none double none;
    border-color:#008d8e;
    padding-top:5px;
    padding-bottom:2px;
    width:90%;
    margin-top:auto;
    margin-right:auto;
    margin-left:auto;
    margin-bottom:1rem;
    a{
        color:black;
    }
    a:hover{
    color:#003a41;
    }
    .title{
        margin-right:5px;
        height:10%;
        width:15%;
        padding-left:5px;
        display:flex;
    }
    .words{
        display:flex;
        background-color:#e8f4ff;
        border-radius:5px;
        width:80%;
        text-align:left;
        padding:10px;
        margin-top:30px;
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
    .up{
        all:initial;
        cursor:pointer;
        height:5px;
        padding:0px;
        border-radius:999px;
        border-color:skyblue;
        border-width:1px;
        background-color:transparent;
        color:#003a41;
        font-size:30px;

    }
    .up:focus{
        color:#ff5000;
    }
    .icon{
        margin:auto;
    }
    .down{
        all:initial;
        cursor:pointer;
        height:5px;
        padding:0px;
        border-radius:999px;
        border-color:skyblue;
        border-width:1px;
        background-color:transparent;
        color:#003a41;
        font-size:30px;

    }
    .down:focus{
        color:#00afff;
    }
    .info{
        padding-left:5px;
        margin-top:auto;
        border-left:1px solid #008d8e;
        font-size:10px;
    }
    .count{
        color:#003a41;
        font-weight:bolder;
    }
`;

const element = <FontAwesomeIcon icon={faCaretUp, faCaretDown} />


export const CommentBox1 = (props) => {
    const [count, setCount] = useState(0);
    return (
        <Container>
            <Row>
        <Comment>
            <div className="title">
                <div>
                    <button className="up" type="submit" onClick={() => setCount(count+1)}><FontAwesomeIcon className="icon" icon={faCaretUp}/></button>
                    <div className="count">{count}</div>
                    <button className="down" type="submit" onClick={() => setCount(count-1)}><FontAwesomeIcon icon={faCaretDown}/></button>
                </div>
                <div className="UN"><a href="/Links">ElvishPiper420</a>
                <img alt="profilepic" src={FABULOUS}/>
                </div>
            </div>
            <div className="words">Tenetur dolores nostrum rerum et. Ratione quis quaerat vitae. Consequatur assumenda qui reprehenderit sit. Aliquam explicabo nobis rerum quia.
                <div className="info">2/1/21</div>
            </div>
            
        </Comment>
            </Row>
        </Container>
    );
    }
export default CommentBox1;