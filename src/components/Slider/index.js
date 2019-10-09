import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import showreel from 'src/assets/images/Showreel.jpg'
import video from 'src/assets/images/fasboaVideo.mp4'
//import video2 from 'https://www.youtube.com/watch?v=PEwa4Eehfpk'
import { Player } from 'video-react';
import AwsSliderStyles from './slider.scss';
import './slider.scss';
let video2= <Player>
<source src={video} />
</Player>
const Slider = (
    <AwesomeSlider  cssModule={AwsSliderStyles}>
      <div data-src={bigPictureReal2}>
      <p></p> </div>
      <div data-src={showreel}>
      <p>Sometimes science is more art than science.</p>
      </div>
      <div data-src={video} />
      
    </AwesomeSlider>
  );

  export default Slider;