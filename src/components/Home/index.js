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
import slider from 'src/components/Slider'

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

  const iconPen = <FontAwesomeIcon className="iconPen" icon={faPencilAlt}/>
  const iconCalendar = <FontAwesomeIcon className="iconCalendar" icon={faCalendarAlt}/>
  const iconMan = <FontAwesomeIcon className="iconMan" icon={faUser}/>
  const iconVideo = <FontAwesomeIcon className="iconVideo" icon={faVideo}/>
  const iconDrone = <FontAwesomeIcon className="iconDrone" icon={faFighterJet}/>
  const iconMontage = <FontAwesomeIcon  icon={faLaptopCode}/>
  const iconMotion = <FontAwesomeIcon className="iconMotion" icon={faPhotoVideo}/>
  const iconMusic = <FontAwesomeIcon className="iconMusic" icon={faMusic}/>
  const iconSocial = <FontAwesomeIcon className="iconSocial" icon={ faThumbsUp}/>
  const iconPhoto = <FontAwesomeIcon className="iconPhoto" icon={faCameraRetro}/>

 
  let sectionStyle={
    width: "100%",
    height: "1000px",
    
    backgroundImage: `url(${bigPictureReal2})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
    return <div>
    <div> 
    <Link to="#quisommesnous"> <div className="ensavoirplus">En savoir plus</div></Link>
      {slider}
  </div>
  <div className="presentationAgenceTitle" >AGENCE DE PRODUCTION DIGITALE</div>
  <img className="logoBorisNoir" src={logoBorisNoirPetit} alt="logoBorisNoir"/>	    <img className="logoBorisNoir" src={logoBorisNoirPetit} alt="logoBorisNoir"/>
 
<div id="quisommesnous">

    <img className="iconeMontagne" src={iconMontagne} alt="iconeMontagne"/>
    
    <div className="photosPresentations">
    
    <div className="textPresentation1">
    <img className="borisPhotocarre" src={borisPhotoCarre} alt="borisPhotocarre"/>
    <h2 className="quitexte"> QUI</h2>

    <div className="smallTitrePresentation1">
    
    <h3 className="videoTitle" >Vidéo</h3></div>
    <p className="videoTitleText" >Avec une touche artistique et créative, Boris Doye Films vous offre un service global professionnel de conception et de réalisation de films au coeur des Hautes-Alpes.

    Réalisateur, mais aussi concepteur du scénario de votre vidéo, une idée, une envie ? Nous vous aiderons à réaliser votre projet, du scénario au montage de votre film. Nous maîtrisons l’image et nous savons la rendre esthétique. À l’aide de nombreuses caméras, drones, stabilisateurs, nous avons la capacité de filmer partout et de monter vos images sur une station de montage professionnel 4K.</p>
    </div>
    
    
    <div className="textPresentation2">
    <img className="borisBateau" src={borisBateau} alt="borisBateau"/>
    <h2 className="sommestexte"> SOMMES</h2>

    <div className="smallTitrePresentation2">
    
    
    <h3 className="conseilsTitle">Conseils</h3></div>
    <p className="conseilsTitleText">Envie d’originalité ? L’agence vous propose de l’animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue aérienne en drone… Avec le grand réseau professionnel qui nous entoure, nous réalisons tout support audiovisuel.Nous amorçons ensemble une réflexion cohérente pour une production réalisable et conforme à vos attentes.
    </p>
    </div>
    
    <div className="textPresentation3">
    <img className="borisDrone" src={borisDrone} alt="borisDrone"/>
    <h2 className="noustexte">NOUS</h2>
    <div className="smallTitrePresentation3">
    
   
    <h3 className="conseilsTitle">Drones</h3> </div>
    <p className="dronesTitleText">Envie d’originalité ? L’agence vous propose de l’animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue aérienne en drone… Avec le grand réseau professionnel qui nous entoure, nous réalisons tout support audiovisuel.Tous les formats sont réalisables. De la promotion institutionnelle, format court corporate pour les réseaux sociaux, au films d’entreprise, prise de vues en drone reportages TV mais l’agence sait aussi créer de fabuleux documentaires télévisés.</p>
    </div>
    
    
   
    
    </div>
    
    
  

</div>
    <div className="competences">
    
      <h2 className="competencesTitle">Compétences</h2>
      <img className="iconCamera" src={iconCamera} alt="iconCamera"/>
      <div className="separationLigne"></div>
      
      <div className="competencesGauche">
      
      <div className="compétencesGauche1">
      
      <h2 className="scenarisation-title">Scénarisation - Story-telling</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nos idées sont au service d’histoires et de projets uniques : les vôtres.</p>
      <image >{iconPen}</image>
     
      </div>
      </div>
      <div className="compétencesGauche2">
      
    
      <h2 className="scenarisation-title2">Gestion de projet</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nous créons et réalisons des projets sur mesure en sélectionnant nos figurants de manière rigoureuse.</p>
      <image >{iconCalendar}</image>
      </div>
      </div>

      <div className="compétencesGauche3">
      
    
      <h2 className="scenarisation-title3">Expertise</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nos 6 années d’expérience nous aident à cerner au mieux votre stratégie, vos besoins et vos enjeux de communication</p>
      <image >{iconMan}</image>
      </div>
      </div>
      
      <div className="compétencesGauche4">
      
      <h2 className="scenarisation-title4">Cadrage</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Captation 4K jusqu’à 100im/s sur tous les terrains : découvrir notre matériel.</p>
      <image >{iconVideo}</image>
      </div>
      </div>

      <div className="compétencesGauche5">
      
      <h2 className="scenarisation-title5">Drone</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nous sommes agréés par la DGAC et assurés pour réaliser les prises de vues aériennes les plus complexes.</p>
      <image >{iconDrone}</image>
      </div>
      </div>
      </div>
      <img className="photoCadrage" src={photoCadrage} alt="borisDrone"/>
      
      <div className="competencesDroite">
      
      <div className="competencesDroite1">
      <h2 className="title-droite1">Montage</h2>
      <div className="scenarisationDroite">
      <image className="iconMontage">{iconMontage}</image>
      
      
      <p className="text-droite1">Post-production moderne : colorimétrie, transitions dynamiques, montage captivant dès les premières secondes de vidéo.</p>
      
     
      </div>
      </div>
      <div className="competencesDroite2">
      
    
      <h2 className="title-droite2">Motion design</h2>
      <div className="scenarisation">
      <image >{iconMotion }</image>
      <p className="text-droite2">Ajout d’éléments graphiques animés dans nos réalisations (titrages, dessins animés).</p>
      
      </div>
      </div>

      <div className="competencesDroite3">
      
    
      <h2 className="title-droite3">Sound Design</h2>
      <div className="scenarisation">
      <image >{iconMusic}</image>
      <p className="text-droite2">Création d’une ambiance sonore immersive pour plonger le spectateur dans votre univers.</p>
      
      </div>
      </div>
      
      <div className="competencesDroite4">
      
      <h2 className="title-droite4">Réseaux sociaux</h2>
      <div className="scenarisation">
      <image >{iconSocial }</image>
      <p className="text-droite2">Production de contenu optimisé pour les réseaux sociaux et adapté aux attentes de votre communauté.</p>
      
      </div>
      </div>

      <div className="competencesDroite5">
      
      <h2 className="title-droite5">Photographie</h2>
      <div className="scenarisation">
      <image >{iconPhoto}</image>
      <p className="text-droite2">Des sommets aux open-spaces, nous captons les émotions et les instants les plus intenses.</p>
      
      </div>
      </div>
      </div>
     
    </div>
  
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