import React from 'react';

import videoHome from 'src/assets/images/captureHomeBoris.png'
import './home.sass';
import borisPhoto from 'src/assets/images/boris-doye.png'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import logoBorisNoir from 'src/assets/images/logoBorisNoir.png'
import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import './home.sass';

const Home= () => {

  let sectionStyle={
    width: "100%",
    
    backgroundImage: `url(${bigPictureReal2})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
    return <div><div className="main" style={sectionStyle}  >
 
    <div className="presentationAgenceTitle" >AGENCE DE PRODUCTION DIGITALE</div>
    <img className="logoBorisNoir" src={logoBorisNoir} alt="logoBorisNoir"/>
    <h2 className="hautesAlpesTitle">Hautes-Alpes</h2>
   

  
  </div>
<h2>hhhhh</h2>
  </div>
 
  

};



export default Home;