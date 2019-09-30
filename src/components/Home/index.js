import React from 'react';

import videoHome from 'src/assets/images/captureHomeBoris.png'
import './home.sass';
import borisPhoto from 'src/assets/images/boris-doye.png'
import './home.sass';
const Home= () => {

    return <div className="main">
 
  <img className="videoHome" src={videoHome} alt="videoHome"/>
  <div className="separationLine"> </div>
  <h2 className="presentationAgenceTitle" >Production Audiovisuelle</h2>
  <h2 className="hautesAlpesTitle">Hautes-Alpes</h2>
  
  <h2 className="presentationAgenceServices1"> Clips Promotionnels – Vues Aériennes </h2>
  <h2 className="presentationAgenceServices2">Drone – Reportages – Documentaires TV </h2>
  <h2 className="presentationAgenceServices3">Vidéos d’évènements</h2>
  <img className="borisDoye" src={borisPhoto} alt="BorisDoyePhoto"/>
  </div>;

};



export default Home;