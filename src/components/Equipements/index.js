import React from 'react';

import avion from 'src/assets/images/avion.jpg'
import phantom from 'src/assets/images/Phantom.jpg'
import camera from 'src/assets/images/camera.jpg'
import gimbal from 'src/assets/images/gimbal.jpg'
import lens from 'src/assets/images/Lens.jpg'
import filtres from 'src/assets/images/filtres.jpg'
import slider from 'src/assets/images/slider.jpg'
import micro from 'src/assets/images/micros.jpg'
import goPro from 'src/assets/images/Go-pro.jpg'
import equipementVideo from 'src/assets/images/StuffVideo.jpg'






import './equipements.sass';

const Equipements= () => {

  let sectionStyle1={
    width: "100%",
    height: "480px",
   
    backgroundImage: `url(${equipementVideo})`,
    backgroundSize: 'cover',
    overflow: 'hidden',

  }
    return <div>
    <div className="stuffPictureContainer">
    <div className="stuffPicture" style={sectionStyle1}  >
  
     </div>
     </div>
     <div className="stuffTitleContainer">
     <h2 className="stuffTitle">Equipement de pro pour vidéos de pro</h2>
     <div className="separationLigne2"></div>
     </div>
     
     <div className="stuffContainer">
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={phantom} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Phamtom 4 pro</h3>
     <p className="phantomTexte">Homologué avec 5 batteries…
     Enregistre en 4k 60fps.</p>
     </div>
     
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={camera} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Sony FS7</h3>
     <p className="phantomTexte">Caméra Sony FS7, avec le capteur Exmor CMOS 4K Super 35 mm. Permet de filmer en 180 FPS ou encore en 4K 60P.</p>
     </div>

     </div>
      
     <div className="stuffContainer">
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={gimbal} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Movi M10</h3>
     <p className="phantomTexte">Le Movi M10 est un stabilisateur sur 3 axes pour caméra. Il est d’une grande flexibilité et très facile d’utilisation. Ultra léger, il permet d’embarquer des boîtiers type GH5 jusqu’à notre red EPIC W.
     Il est fourni avec 6 batteries</p>
     </div>
     
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={lens} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Lens DJI X7</h3>
     <p className="phantomTexte">Kit de d’optique pour DJI X7 :
     1 x Objectif DL-S 16 mm F2.8 ND ASPH
     1 x Objectif DL 24 mm F2.8 
     1 x Objectif DL 35 mm F2.8 
     1 x Objectif DL 50 mm F2.8 
     4 x Protection d’objectif
     </p>
     </div>

     </div>
     <div className="stuffContainer">
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={filtres} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Filtres</h3>
     <p className="phantomTexte">Différents types de filtres sont dispos ( circulaire, 4X5.5 ) , nous consulter pour la liste.
     Ainsi que des zip box et matebox wooden.</p>
     </div>
     
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={slider} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Slider Edelkrone</h3>
     <p className="phantomTexte">Version de 1m avec déport, nous possédons l’option motorisée, qui permet de contrôler le temps et l’axe de la caméra.
     Idéal pour un timelapse ou des plans studios très lents.
     </p>
     </div>

     </div>
     <div className="stuffContainer">
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={micro} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="phantomTitle">Micros</h3>
     <p className="phantomTexte">
     Plusieurs type de solution micros disponible :
     Micro HF, directionnel, enregistreur, micros gopro…
     etc…</p>
     </div>
     
     
     <div className="stuffContainer1">
     
     <img className="phantom" src={goPro} />
     </div>
     <div className="stuffText">
     
     
     <h3 className="goproTitle">Gopro 7 Black edition</h3>
     <p className="phantomTexte">
     Plusieurs GOpro 7 black dispos, nous consulter pour les accessoires…
     fixations, karma, batteries… </p>
     </div>

     </div>


  </div>;
  
};



export default Equipements;