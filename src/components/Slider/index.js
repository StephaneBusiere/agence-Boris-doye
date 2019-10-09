import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import showReelVideo from 'src/assets/images/showReelVideo.mp4'
import showreel from 'src/assets/images/Showreel.jpg'
import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  
  render() {
    
    let sectionStyle={
      width: "100%",
      height: "1000px",
      
      backgroundImage: `url(${bigPictureReal2})`,
      backgroundSize: 'cover',
      
    }
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      arrows: true
    
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={bigPictureReal2} ></img>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
        
export default SimpleSlider
    


 

