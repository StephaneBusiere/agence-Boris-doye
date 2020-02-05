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
      slidesToShow: 3,
      slidesToScroll: 5,
      accessibility: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
     
    
    };
    return (
      <Slider {...settings}>
        <div>
        <h3 className="vidéo1">
        <iframe  src="https://player.vimeo.com/video/377802996?autoplay=0&loop=1&title=0&byline=0&portrait=0" width="600" height="600"  frameborder="0"  allow="autoplay; fullscreen" allowfullscreen></iframe>
        </h3>
        </div>
        <div>
        <h3 className="vidéo2">
        <iframe src="https://player.vimeo.com/video/351352450?autoplay=0&loop=1" width="600" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </h3>
        </div>
        <div>
          <h3 className="vidéo3"><iframe src="https://player.vimeo.com/video/318212490?autoplay=0&loop=1&title=0&byline=0&portrait=0" width="600" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
        <div>
          <h3 className="vidéo4"><iframe src="https://player.vimeo.com/video/317049588?autoplay=0&loop=1" width="600" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
        <div>
          <h3 className="vidéo5"><iframe src="https://player.vimeo.com/video/263159851?autoplay=0&loop=1" width="600" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
        <div>
          <h3 className="vidéo6"><iframe src="https://player.vimeo.com/video/204153178?autoplay=0&loop=1" width="600" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></h3>
        </div>
       
      </Slider>
    );
  }
}
        
export default SimpleSlider

