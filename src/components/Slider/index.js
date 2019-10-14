import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import showreel from 'src/assets/images/Showreel.jpg'


import { Player } from 'video-react';
import AwesomeSliderStyles from './slider.css';

let iFrame
if (window.innerWidth<475) {
iFrame=<iframe  src="https://player.vimeo.com/video/198345088?loop=1&title=0&byline=0&portrait=0" width="400" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
} else {
iFrame=<iframe  src="https://player.vimeo.com/video/198345088?loop=1&title=0&byline=0&portrait=0" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
}
const Slider = (
   console.log(window.innerWidth), 
  <AwesomeSlider 
  
  cssModule={AwesomeSliderStyles}
     >
      <div data-src={bigPictureReal2}>
      <p></p> </div>
     
      <div >{iFrame}
      </div>
    </AwesomeSlider>
  );

  export default Slider;
