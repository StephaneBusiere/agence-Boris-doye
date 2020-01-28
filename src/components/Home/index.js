import React from 'react';
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import FadeIn from "react-lazyload-fadein";
import { Player } from 'video-react';
import YouTubeVideo from 'src/components/YoutubeVideo'
import YouTubeVideoResponsive from 'src/components/YoutubeVideoResponsive'
//assets

import logoBorisNoirPetit from 'src/assets/images/LogoBorisNoirPetit.png'
import annecyPhoto from 'src/assets/images/Kinaphoto-Photo-gallerie-accueil.jpg'


//sub-components

import slider from 'src/components/Home/Slider'
import AgencyPresentation from 'src/components/Home/AgencyPresentation'
import Skills from 'src/components/Home/SkillsPresentation'
import Teaser from 'src/components/Home/TeaserContainer'

//SASS

import './home.sass';

let iFrame
if (window.innerWidth<475) {
iFrame=<YouTubeVideoResponsive/>
} else {
iFrame=<YouTubeVideo/>
}


const Home= () => {

 
  return <div>
    <div> 
    <Link to="#quisommesnous"> <div className="ensavoirplus">En savoir plus</div></Link>
    
    <div className="iframeHome">
    
    {iFrame}
    </div>
  
    
     
  
    {AgencyPresentation}
    
    {Skills}
    {Teaser}
  
  </div>
  </div>
  

};



export default Home;