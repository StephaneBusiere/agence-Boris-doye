import React from 'react';
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

//assets

import logoBorisNoirPetit from 'src/assets/images/LogoBorisNoirPetit.png'



//sub-components

import slider from 'src/components/Home/Slider'
import AgencyPresentation from 'src/components/Home/AgencyPresentation'
import Skills from 'src/components/Home/SkillsPresentation'
import Teaser from 'src/components/Home/TeaserContainer'

//SASS

import './home.sass';

let iFrame
if (window.innerWidth<475) {
iFrame=<iframe  src="https://player.vimeo.com/video/198345088?loop=1&title=0&byline=0&portrait=0&background=1" width="400" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
} else {
iFrame=<iframe  className="iframeSlider" src="https://player.vimeo.com/video/198345088?loop=1&title=0&byline=0&portrait=0&background=1" width="1900" height="1070" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
}

const Home= () => {

 
  return <div>
    <div> 
    <Link to="#quisommesnous"> <div className="ensavoirplus">En savoir plus</div></Link>
    <div className="iframeHome">{iFrame}</div>
    </div>
  
    <div className="presentationAgenceTitle" >REALISATEUR AUDIO-VISUEL</div>
  <img className="logoBorisNoir" src={logoBorisNoirPetit} alt="logoBorisNoir"/>	   
 
    {AgencyPresentation}
    {Skills}
    {Teaser}
  
  </div>
 
  

};



export default Home;