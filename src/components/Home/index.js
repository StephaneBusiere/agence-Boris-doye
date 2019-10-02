import React from 'react';

import videoHome from 'src/assets/images/captureHomeBoris.png'
import './home.sass';
import borisPhoto from 'src/assets/images/boris-doye.png'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'

import './home.sass';

const Home= () => {

  let sectionStyle={
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bigPictureReal})`
    
  }
    return <div className="main"   >
 
 
    <img className="bigPictureReal" src={bigPictureReal} alt="BorisDoyePhoto"/>
  <div className="presentationAgenceTitle" >Production Audiovisuelle</div>
  
  </div>
 
  

};



export default Home;