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
iFrame=<iframe width="1905" height="1000" src="https://www.youtube.com/embed/PEwa4Eehfpk?autoplay=1&loop=1&controls=0&showinfo=0&playlist=PEwa4Eehfpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

const Home= () => {

 
  return <div>
    <div> 
    <Link to="#quisommesnous"> <div className="ensavoirplus">En savoir plus</div></Link>
    <div className="iframeHome">{iFrame}</div>
    </div>
  
    <div className="presentationAgenceTitle" >REALISATEUR AUDIO-VISUEL</div>
     
 
    {AgencyPresentation}
    {Skills}
    {Teaser}
  
  </div>
 
  

};



export default Home;