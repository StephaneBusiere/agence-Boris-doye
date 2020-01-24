import React from 'react';
import LazyLoad from 'react-lazy-load';
import FadeIn from "react-lazyload-fadein";
import iconDroneNew from 'src/assets/images/iconDroneFinal.svg'
import borisPhotoCarre from 'src/assets/images/photoBorisCarre.jpg'
import borisBateau from 'src/assets/images/BorisBateau.jpg'
import borisDrone from 'src/assets/images/photoBorisDrone.jpg'

import './agencyPresentation.sass';

const AgencyPresentation = (
    <div id="quisommesnous">

    <img className="iconDrone" src={iconDroneNew} alt="iconeMontagne"/>
    
    <div className="photosPresentations">
    
    <div className="textPresentation1">
    <FadeIn height={400} duration={200} easing={'ease-in'} offset={-200}>
            {onload => (
    <img className="borisPhotocarre" src={borisPhotoCarre} alt="borisPhotocarre"
    onLoad={onload}
                    
                />
            )}
        </FadeIn>
   
    <h2 className="quitexte"> Vidéos</h2>

    <div className="smallTitrePresentation1">
    
    <h3 className="videoTitle" >Proféssionnelles</h3></div>
    <p className="videoTitleText" >Avec une touche artistique et créative, Boris Doye Films vous offre un service global professionnel de conception et de réalisation de films au coeur des Hautes-Alpes.

    Réalisateur, mais aussi concepteur du scénario de votre vidéo, une idée, une envie ? Nous vous aiderons à réaliser votre projet, du scénario au montage de votre film. Nous maîtrisons l’image et nous savons la rendre esthétique. À l’aide de nombreuses caméras, drones, stabilisateurs, nous avons la capacité de filmer partout et de monter vos images sur une station de montage professionnel 4K.</p>
    </div>
    
    
    <div className="textPresentation2">
    
    <FadeIn height={400} duration={400} easing={'ease-in'} offset={-200} >
    {onload => (
    <img className="borisBateau" src={borisBateau} alt="borisBateau" onLoad={onload}
                    
    />
)}
</FadeIn>
    
    <h2 className="sommestexte"> Conseils</h2>

    <div className="smallTitrePresentation2">
    
    
    <h3 className="conseilsTitle">Personnalisés</h3></div>
    <p className="conseilsTitleText">Envie d’originalité ? L’agence vous propose de l’animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue aérienne en drone… Avec le grand réseau professionnel qui nous entoure, nous réalisons tout support audiovisuel.Nous amorçons ensemble une réflexion cohérente pour une production réalisable et conforme à vos attentes.
    </p>
    </div>
    
    <div className="textPresentation3">
    
    <FadeIn height={400} duration={600} easing={'ease-in'} offset={-200}>
    {onload => (
    <img className="borisDrone" src={borisDrone} alt="borisDrone" onLoad={onload}
                    
    />
)}
</FadeIn>
   
    <h2 className="noustexte">Drones</h2>
    <div className="smallTitrePresentation3">
    
   
    <h3 className="droneTitle">Spectaculaires</h3> </div>
    <p className="dronesTitleText">Envie d’originalité ? L’agence vous propose de l’animation 3D, des time-laps, du slow-motion, de stop-motion, de la prise de vue aérienne en drone… Avec le grand réseau professionnel qui nous entoure, nous réalisons tout support audiovisuel.Tous les formats sont réalisables. De la promotion institutionnelle, format court corporate pour les réseaux sociaux, au films d’entreprise, prise de vues en drone reportages TV mais l’agence sait aussi créer de fabuleux documentaires télévisés.</p>
    </div>
      </div>
          </div>
);

export default AgencyPresentation ;