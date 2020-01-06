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

const Home= () => {

 

 
  
    return <div>
    <div> 
    <Link to="#quisommesnous"> <div className="ensavoirplus">En savoir plus</div></Link>
     {slider}
    </div>
  
    <div className="presentationAgenceTitle" >AGENCE DE PRODUCTION DIGITALE</div>
  <img className="logoBorisNoir" src={logoBorisNoirPetit} alt="logoBorisNoir"/>	    <img className="logoBorisNoir" src={logoBorisNoirPetit} alt="logoBorisNoir"/>
 
    {AgencyPresentation}
    {Skills}
    {Teaser}
  
  </div>
 
  

};



export default Home;