import React from 'react'
import styled from 'styled-components'
import {Carousel, Card} from 'react-bootstrap';
import bluecards from './images/bluecards.png';
import lynx from './lynx.png'

const TheCarousel = styled.div`
position:sticky;
.Carousel {
    background:whitesmoke;
    height:400px;
    width:100%;
    padding:1px;
    color:black;
    font-weight:bolder;
    &:hover {
  background: lightgray;
  color:#002d32;
    animation: color-me-in 2s; /* other keywords like "infinite alternate" can be useful here */
}

@keyframes color-me-in {
  /* You could think of as "step 1" */
  0% {
    background: whitesmoke;
  }
  /* You could think of as "step 2" */
  100% {
    background: lightgray;
    color:#002d32;
  }
}
.slidethree{
  height:300px;

}
}
`; 

export const CustomCarousel = (props) => {
    return (
    <TheCarousel>
    <div class="Carousel">

<Carousel>
  <Carousel.Item>
    <img
      class="magicslide"
      height='90%'
      width="90%"
      padding='10px'
      src={bluecards}
      alt="First slide"
    />

      <h3>Link Commander Legends Cards Now!</h3>
      <p>Best Ways to Say No to Your Opponent</p>

    <br/>
  </Carousel.Item>
  <Carousel.Item>
    
      <h3>Second slide label</h3>
      <p></p>
<br/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      class="slidethree"
      height="90%"
      src={lynx}
      alt="Third slide"
    />

      <h3>Third slide label</h3>
      <p></p>
<br/>
  </Carousel.Item>
</Carousel>
</div>
    </TheCarousel>
    );
    }
export default CustomCarousel;