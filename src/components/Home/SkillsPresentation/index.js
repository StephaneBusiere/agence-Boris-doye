import { Parallax, Background } from 'react-parallax'


import iconCamera from 'src/assets/images/iconCamera.png'
import photoCadrage from 'src/assets/images/photoCadrage.jpg'
import photoDrone from 'src/assets/images/pilotageDrone.jpg'
import BorisBureau from 'src/assets/images/borisBureau.jpg'
import Micros from 'src/assets/images/micros.jpg'
import BorisCarre from 'src/assets/images/photoBorisCarre.jpg'
import BorisDrone from 'src/assets/images/photoBorisDrone.jpg'

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

import './skillsPresentation.sass'

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
  
  
  const Skills = (
    
    
 <div className="competences">
    
    <h2 className="competencesTitle">Savoir faire</h2>
    <img className="iconCamera" src={iconCamera} alt="iconCamera"/>
   
   <Parallax 
   
   bgImage={require('src/assets/images/borisPluie.jpg')}
   bgImageAlt="the cat"
   strength={1200}>
   <div style={{ height: '400px' }} />
   </Parallax>
   <div className="competencesPresentContainer">
    <div className="competencesGauche">
    
    <div className="competencesGauche1">
    
    <h2 className="scenarisation-title">Scénarisation - Story-telling</h2>
    <div className="scenarisation">
    <p className="scenarisation-text">Nos idées sont au service d’histoires et de projets uniques : les vôtres.</p>
    <image >{iconPen}</image>
   
    </div>
    </div>
    <div className="competencesGauche2">
    
  
    <h2 className="scenarisation-title2">Gestion de projet</h2>
    <div className="scenarisation">
    <p className="scenarisation-text">Nous créons et réalisons des projets sur mesure en sélectionnant nos figurants de manière rigoureuse.</p>
    <image >{iconCalendar}</image>
    </div>
    </div>

    <div className="competencesGauche3">
    
  
    <h2 className="scenarisation-title3">Expertise</h2>
    <div className="scenarisation">
    <p className="scenarisation-text">Nos 6 années d’expérience nous aident à cerner au mieux votre stratégie, vos besoins et vos enjeux de communication</p>
    <image >{iconMan}</image>
    </div>
    </div>
    
    <div className="competencesGauche4">
    
    <h2 className="scenarisation-title4">Cadrage</h2>
    <div className="scenarisation">
    <p className="scenarisation-text">Captation 4K jusqu’à 100im/s sur tous les terrains : découvrir notre matériel.</p>
    <image >{iconVideo}</image>
    </div>
    </div>

    <div className="competencesGauche5">
    
    <h2 className="scenarisation-title5">Drone</h2>
    <div className="scenarisation">
    <p className="scenarisation-text">Nous sommes agréés par la DGAC et assurés pour réaliser les prises de vues aériennes les plus complexes.</p>
    <image >{iconDrone}</image>
    </div>
    </div>
    </div>
    <div className="videoSkillsContainer">
    <iframe  src="https://player.vimeo.com/video/198345088?loop=1&autoplay=0" width="100%" height="100%"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

    </div>
    
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
  </div>
  

)

export default Skills;