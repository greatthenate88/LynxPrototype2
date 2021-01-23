import React from 'react'
import styled from 'styled-components'
import {Row, Container} from 'react-bootstrap';


const CustomNavBar = styled.div`
    width: 25%;
    height: 50px;
    padding:8px;
    background-color: lightsteelblue;
    border-width:1px;
    border-style:solid;
    border-color:lightcyan;
    transition: .25s;
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
   /*&:hover {
    height: 60px;
    background-color: lightskyblue;
}*/
`;
export const NavigationBar = (props) => {
    return (
    
        <Container>
        <Row>
        <CustomNavBar>Home</CustomNavBar>
        <CustomNavBar>Profile</CustomNavBar>
        <CustomNavBar>Links</CustomNavBar>
        <CustomNavBar>Articles</CustomNavBar>
        </Row>
        </Container>
    );
    }
export default NavigationBar;