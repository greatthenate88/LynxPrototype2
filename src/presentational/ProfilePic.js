import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import FABULOUS from './images/FABULOUS.jpg';



const PP = styled.a`
border-width:0px;
color:black;
position:sticky;
margin:1rem;

:visited{
  color:slateblue;
}

.image{
  opacity:1;
  height:150px;
  width:150px;
  border-radius:50%;
  position:sticky;
}

.overlay {
  position: absolute;
  border-radius:10px;
  opacity: 0;
  transition: .5s ease;
  top:10%;
  left:45%;
}
&:hover .image {
  opacity:.5;
}
&:hover .overlay{
  opacity:.8;
}
.text {
  color: black;
  font-size: 35px;
}
`;

const element = <FontAwesomeIcon icon={faEdit} />

export const ProfilePic = (props) => {
    return (

      <PP href="/profile">
         <img alt="sfmimg" src={FABULOUS} className="image"/>
          <div className="overlay">
            <FontAwesomeIcon className="text" icon={faEdit}/>
          </div>
      </PP>

    );
    }
export default ProfilePic;