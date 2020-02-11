import React from 'react';
import caphorn from 'src/assets/images/caphorn.jpg'
import caphornMobile from 'src/assets/images/caphornMobile.jpg'

import caphornPoster from 'src/assets/images/AfficheCaphorn.jpg'

import appurimacPoster from 'src/assets/images/Apurimac-Affiche-Print.jpg'

import './aventures.sass';

const Aventures= () => {
  
let caphornPicture 
if (window.innerWidth<475) {

caphornPicture=caphornMobile
} else {
caphornPicture=caphorn
}

let sectionStyle1={
    width: "100%",
    height: "550px",
   
    backgroundImage: `url(${caphornPicture})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    
  }

  
    return <div>
    <div className="aventurePictureContainer">
    <div className="aventurePicture" style={sectionStyle1}  >
    <div className="presentationVideos" ><h2 ClassName="aventureTitle">NOS AVENTURES</h2>
    <h3 className="documentaireTitle">Films documentaires</h3>
    </div>
     </div>
     </div>
 <div className="documentaireContainer1">
 <div className="caphornPosterContainer">
 <a className="voirFilm" href="https://vimeo.com/ondemand/projetcaphorn" target="_blank">Voir le film à partir de 4.99€</a>
 
 
 
 <img className="caphornPoster" src={caphornPoster} />
 </div>
 
 
 <div className="apurimacPosterContainer">
 <a className="voirFilm2" href="https://vimeo.com/ondemand/apurimac" target="_blank">Voir le film à partir de 2.69€</a>
 
 <img className="appurimacPoster" src={appurimacPoster} alt="borisDrone"/>
 </div>
 </div>
 </div>
  
};



export default Aventures;