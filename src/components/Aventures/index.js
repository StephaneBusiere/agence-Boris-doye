import React from 'react';

import showreel from 'src/assets/images/Showreel.jpg'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.jpg'
import ski from 'src/assets/images/ski-1.jpg'
import './aventures.sass';

const Aventures= () => {

    return <div className="aventure">
  Nos documentaires d'aventure!
  <img className="showReel" src={showreel} alt="showreel"/>
  <img className="queyras" src={queyras} alt="queyras"/>
  <img className="ski" src={ski} alt="ski"/>
  <img className="outdoormix" src={outdoormix} alt="outdoormix"/>
  </div>;
  
};



export default Aventures;