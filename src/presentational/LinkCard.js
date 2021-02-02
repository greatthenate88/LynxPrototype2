import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'
import manadrain from './images/manadrain.png'


const LC = styled.div`
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

export const LinkCard = (props) => {
    return (
             <LC>
                 <img alt="imageresult1" src={props.image}/>
            </LC>
    );
}
    export default LinkCard;