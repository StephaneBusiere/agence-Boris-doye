import React, { Component } from 'react';
import ReactDOM from 'react-dom';



import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import Slider from "react-slick";

import './slider2.sass';

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
      slidesToShow: 5,
      slidesToScroll: 5,
      accessibility: true,
      arrows: true,
     
    
    };
    return (
      <Slider {...settings}>
        <div>
        <h3 className="vidéo1">
        <iframe  src="https://player.vimeo.com/video/198345088?loop=1&autoplay=0" width="320" height="300"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </h3>
        </div>
        <div>
        <h3 className="vidéo2">
        <iframe src="https://player.vimeo.com/video/282989783?autoplay=0&loop=1" width="320" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </h3>
        </div>
        <div>
          <h3><iframe src="https://player.vimeo.com/video/176137978?autoplay=0&loop=1&title=0&byline=0&portrait=0" width="320" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
        <div>
          <h3><iframe src="https://player.vimeo.com/video/273483414?autoplay=0&loop=1" width="320" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
        <div>
          <h3><iframe src="https://player.vimeo.com/video/282989783?autoplay=0&loop=1" width="320" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
        
export default SimpleSlider