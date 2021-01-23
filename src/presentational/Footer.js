import React from 'react'
import styled from 'styled-components'
import {Row, Container} from 'react-bootstrap';
import FooterList from '../presentational/FooterList'


const CustomFooter = styled.footer`
    width: 100%;
    height: 100%;
    padding:0px;
    /*background-color: lightsteelblue;
    border-width:2px;
    border-style:solid;
    border-color:lightcyan;
*/
  border-top: 2px solid #f1f1f1;
  padding: 0 25px;
  display: flex;
  background-image: linear-gradient(235deg, whitesmoke, #009fa8);
  font-weight:bold;
  color:#006bbf;
  justify-content:center;
`;

export const Footer = (props) => {
    return (



        <CustomFooter>
            <FooterList></FooterList>
        </CustomFooter>


    );
    }
export default Footer;