import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'


const LC = styled.div`
    box-shadow:0 1px 1px 2px #d9dfee;
    border-width:1px;
    border-radius:10px;
    padding:1px;
    margin-left:auto;
    margin-right:auto;
    margin-top:10px;
    margin-bottom:10px;
    position:sticky;
    display:inline-block;
    img{
        width:100%;
    }
`;

export const LinkCard = (props) => {
    return (
             <LC>
                 <img alt="imageresult1" src={props.image}/>
            </LC>
    );
}
    export default LinkCard;