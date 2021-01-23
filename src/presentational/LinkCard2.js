import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import sphinxofsecondsun from './images/sphinxofsecondsun.png'


const LC2 = styled.div`
    border-color:#009999;
    border-width:1px;
    border-style:solid;
    border-radius:10px;
    padding:3px;
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    margin-bottom:10px;
    position:sticky;
    display:inline-block;
`;

export const LinkCard2 = (props) => {
    return (
             <LC2>
                 <img alt="imageresult2" src={sphinxofsecondsun}/>
            </LC2>
    );
}
    export default LinkCard2;