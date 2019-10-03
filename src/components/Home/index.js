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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './home.sass';

const Home= () => {

  const iconPen = <FontAwesomeIcon className="iconPen" icon={faPencilAlt}/>
  const iconCalendar = <FontAwesomeIcon className="iconClendar" icon={faCalendarAlt}/>
  const iconMan = <FontAwesomeIcon className="iconMan" icon={faUser}/>



  let sectionStyle={
    width: "100%",
    height: "1000px",
    
    backgroundImage: `url(${bigPictureReal2})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
    return <div>
    <div className="main" style={sectionStyle}  >
 
    <div className="presentationAgenceTitle" >AGENCE DE PRODUCTION DIGITALE</div>
    <img className="logoBorisNoir" src={logoBorisNoirPetit} alt="logoBorisNoir"/>
    <h2 className="presentationAgenceServices1"> Clips Promotionnels – Vues Aériennes </h2>
    <h2 className="presentationAgenceServices2">Drone – Reportages – Documentaires TV </h2>
    <h2 className="presentationAgenceServices3">Vidéos d’évènements</h2>


  
  </div>
 <div class="quisommesnous">

    <img className="iconeMontagne" src={iconMontagne} alt="iconeMontagne"/>
    
    <div className="photosPresentations">
    
   
    <img className="borisPhotocarre" src={borisPhotoCarre} alt="borisPhotocarre"/>
    <img className="borisBateau" src={borisBateau} alt="borisBateau"/>
    <img className="borisDrone" src={borisDrone} alt="borisDrone"/>
    
    <div className="titrepresentation">
    <h2 className="quitexte"> QUI</h2>
    <h2 className="sommestexte"> SOMMES</h2>
    <h2 className="noustexte">NOUS</h2>
    </div>
    
    <div className="smallTitrePresentation">
    
    <h3 className="videoTitle" >Vidéo</h3>
    <h3 className="conseilsTitle">Conseils</h3>
    <h3 className="dronesTitle">Drones</h3>
    </div>

    <div className="textPresentation">
    
    <p className="videoTitleText" >Avec une touche artistique et créative, Boris Doye Films vous offre un service global professionnel de conception et de réalisation de films au coeur des Hautes-Alpes.

    Réalisateur, mais aussi concepteur du scénario de votre vidéo, une idée, une envie ? Nous vous aiderons à réaliser votre projet, du scénario au montage de votre film. Nous maîtrisons l’image et nous savons la rendre esthétique. À l’aide de nombreuses caméras, drones, stabilisateurs, nous avons la capacité de filmer partout et de monter vos images sur une station de montage professionnel 4K.</p>
    <p className="conseilsTitleText">Envie d’originalité ? L’agence vous propose de l’animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue aérienne en drone… Avec le grand réseau professionnel qui nous entoure, nous réalisons tout support audiovisuel.Nous amorçons ensemble une réflexion cohérente pour une production réalisable et conforme à vos attentes.

    </p>
    <p className="dronesTitleText">Envie d’originalité ? L’agence vous propose de l’animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue aérienne en drone… Avec le grand réseau professionnel qui nous entoure, nous réalisons tout support audiovisuel.Tous les formats sont réalisables. De la promotion institutionnelle, format court corporate pour les réseaux sociaux, au films d’entreprise, prise de vues en drone reportages TV mais l’agence sait aussi créer de fabuleux documentaires télévisés.</p>
    </div>
    
 </div>



</div>
    <div className="compétences">
      <h2 className="competencesTitle">Compétences</h2>
      <img className="iconCamera" src={iconCamera} alt="iconCamera"/>
      <div className="separationLigne"></div>
      
      <div className="compétencesGauche">
      
    
      <h2 className="scenarisation-title">Scénarisation - Story-telling</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nos idées sont au service d’histoires et de projets uniques : les vôtres.</p>
      <image >{iconPen}</image>
      </div>
      </div>
      <div className="compétencesGauche2">
      
    
      <h2 className="scenarisation-title">Gestion de projet</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nous créons et réalisons des projets sur mesure en sélectionnant nos figurants de manière rigoureuse.</p>
      <image >{iconCalendar}</image>
      </div>
      </div>

      <div className="compétencesGauche3">
      
    
      <h2 className="scenarisation-title">Expertise</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Nos 6 années d’expérience nous aident à cerner au mieux votre stratégie, vos besoins et vos enjeux de communication</p>
      <image >{iconMan}</image>
      </div>
      </div>
      <div className="compétencesGauche4">
      
    
      <h2 className="scenarisation-title">Cadrage</h2>
      <div className="scenarisation">
      <p className="scenarisation-text">Captation 4K jusqu’à 100im/s sur tous les terrains : découvrir notre matériel.</p>
      <image >{iconPen}</image>
      </div>
      </div>


    </div>
  </div>
 
  

};



export default Home;