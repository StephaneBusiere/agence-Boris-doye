import React from 'react';

import videoHome from 'src/assets/images/captureHomeBoris.png'
import './home.sass';
import borisPhoto from 'src/assets/images/boris-doye.png'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import logoBorisNoir from 'src/assets/images/logoBorisNoir.png'
import './home.sass';

const Home= () => {

  let sectionStyle={
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${bigPictureReal})`
    
  }
    return <div><div className="main" style={sectionStyle}  >
 
    <div className="presentationAgenceTitle" >Production Audiovisuelle</div>
    <img className="logoBorisNoir" src={logoBorisNoir} alt="logoBorisNoir"/>
    <h2 className="hautesAlpesTitle">Hautes-Alpes</h2>
   

  
  </div>
<h2>hhhhh</h2>
  </div>
 
  

};



export default Home;