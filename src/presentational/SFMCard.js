import React from 'react'
import styled from 'styled-components'
import sfm from './images/sfm.jpg';
import {Card} from 'react-bootstrap';



const SFM = styled.a`
border-width:0px;
color:black;
padding-top:25px;
position:sticky;
:visited{
  color:slateblue;
}
div{
    border-width:1px;
    border-style:solid;
    border-radius:2px;
    border-color:lightsteelblue;
    transition: .25s;
}
div:hover{
  border-width:1px;
  border-color:steelblue;
  border-radius:4px;
  box-shadow:1px 1px 10px lightsteelblue;
  }
.image{
  opacity:1;
  height:350px;
  position:relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: whitesmoke;
}
&:hover .image {
  opacity:.3;
}
&:hover .overlay{
  opacity:.7;
}

.text {
  color: black;
  font-size: 20px;
  padding:1px 5px;
  position:relative;
  top:50%;
  left:50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: left;
}
`;

const SFMArticle = styled.div`
  color:black;

`;

export const SFMCard = (props) => {
    return (
    

      <SFM href="/dashboard">  
        <Card>

          <img alt="sfmimg" src={sfm} className="image"/>
          <div className="overlay">
            <div className="text">
            <h4>The Argument for Stoneforge Mystic in Standard 
               12/1 | by MTGLynx</h4>
            sTOnEfoRGe WoNt bE bROkeN iF THe EqUiPMentS ARe BaD :^)
            </div>
          </div>      

          <SFMArticle>          
          <Card.Footer>
            The Argument for Stoneforge Mystic in Standard | 12/1 | by MTGLynx
          </Card.Footer>
          </SFMArticle> 
        </Card>
      </SFM>

    );
    }
export default SFMCard;