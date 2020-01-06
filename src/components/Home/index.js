import React from 'react';

import videoHome from 'src/assets/images/captureHomeBoris.png'
import './home.sass';
import borisPhotoRond from 'src/assets/images/boris-doyeRond.png'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import logoBorisNoirPetit from 'src/assets/images/LogoBorisNoirPetit.png'
import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import iconMontagne from 'src/assets/images/iconeMontagne.png'
import iconCamera from 'src/assets/images/iconCamera.png'
import borisPhotoCarre from 'src/assets/images/photoBorisCarre.jpg'
import borisBateau from 'src/assets/images/BorisBateau.jpg'
import borisDrone from 'src/assets/images/photoBorisDrone.jpg'
import photoCadrage from 'src/assets/images/photoCadrage.jpg'
import { NavLink } from 'react-router-dom';
import slider from 'src/components/Home/Slider'
import AgencyPresentation from 'src/components/Home/AgencyPresentation'
import Skills from 'src/components/Home/SkillsPresentation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons'
import { faPhotoVideo} from '@fortawesome/free-solid-svg-icons'
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faCameraRetro} from '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from 'react-router-hash-link';


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
  <div className="latestVideosContainer">
  <div className="teaserTitleContainer">
  <h2 className="teaserTitle">Nos dernières vidéos</h2>
  </div>
  <div className="TeaserContainer">
  
  
  <div className="iframe">
  
  <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/198345088?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  
  <NavLink
  exact
  to="/work"
  
  activeClassName="nav-link--active"
>
 <div className="video-Link">
  <h3 className="videoLink-Regarder">regarder</h3>
 
  <h3 className="videoLink-Une">une</h3>   
  <h3 className="videoLink-Video">video</h3> 
  </div>
  </NavLink>
  
  <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <NavLink
  exact
  to="/work"
  
  activeClassName="nav-link--active"
>
 <div className="video-Link">
  <h3 className="videoLink-Regarder">regarder</h3>
 
  <h3 className="videoLink-Une">une</h3>   
  <h3 className="videoLink-Video">video</h3> 
  </div>
  </NavLink>
  <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/282989783?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  <NavLink
  exact
  to="/work"
  
  activeClassName="nav-link--active"
>
 <div className="video-Link">
  <h3 className="videoLink-Regarder">regarder</h3>
 
  <h3 className="videoLink-Une">une</h3>   
  <h3 className="videoLink-Video">video</h3> 
  </div>
  </NavLink>
  <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>
 
  </div>
  </div>
  </div>
 
  

};



export default Home;