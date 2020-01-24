import React from 'react';
import clients from 'src/assets/images/clientsPicture.jpg'
import clientsPictureMobile from 'src/assets/images/clientsPictureMobile.jpg'
import annecy from 'src/assets/images/Kinaphoto-Photo-gallerie-accueil.jpg'
import skoda from 'src/assets/images/skoda.png'
import tulipes from 'src/assets/images/tulipes.png'
import redbull from 'src/assets/images/regbull.png'
import audi from 'src/assets/images/audi.png'
import addidas from 'src/assets/images/addidas.png'
import faction from 'src/assets/images/Faction.png'
import seat from 'src/assets/images/seat.png'
import betc from 'src/assets/images/betc.png'
import './clients.sass';

const Clients= () => {
  

let sectionStyle1
if (window.innerWidth<475) {
  sectionStyle1={ 
    width: "100%",
    height: "210px",
   
    backgroundImage: `url(${clients})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
 
  } else {
    sectionStyle1={ 
      width: "100%",
      height: "540px",
     
      backgroundImage: `url(${annecy})`,
      backgroundSize: 'cover',
      backgroundPosition: '25%',
      overflow: 'hidden',
    }
  }
  
  
    return <div> 
    <div className="clientsPictureContainer">
    <div className="clientsPicture" style={sectionStyle1}  >
    <div className="presentationVideos5" >Ils nous ont fait confiance
    
    </div>
    </div>
     </div>
     <div className="clientsContainer1">
     <img  className="clientsLogos" src={addidas} />
     <img className="clientsLogos" src={audi} />
     <img className="clientsLogos" src={redbull} />
     <img className="clientsLogos" src={skoda} />
     </div>
     <div className="clientsContainer1">
     <img className="clientsLogos" src={tulipes} />
     <img className="clientsLogos" src={seat} />
     <img className="clientsLogos" src={faction} />
     <img  className="clientsLogos"src={betc} />
     </div>
  </div>
  
};



export default Clients;