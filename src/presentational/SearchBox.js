import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const Searchy = styled.div`
    position:relative;
    input{
        margin:9px;
        height:35px;
    }
`;

const SearchButton = styled.button`
    height:35px;
    width:55px;
    padding:5px;
    border-radius:10px;
    border-color:skyblue;
    background-color:whitesmoke;
    .icon1{
        padding-bottom:5px;
        height:100%;
    }
`;

const element = <FontAwesomeIcon icon={faSearch} />
const SearchBox = (props) => {
    return (
        <div>
        <Searchy>
        <input type="search">

        </input>
        <SearchButton type="submit"><FontAwesomeIcon class="icon1"  icon={faSearch}/></SearchButton>
        </Searchy>
        </div>
    )
  }
  
  export default SearchBox