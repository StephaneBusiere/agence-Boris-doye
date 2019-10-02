import React from 'react';

import showreel from 'src/assets/images/Showreel.jpg'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.png'
import ski from 'src/assets/images/ski-1.jpg'
import './styles.sass';

const Work= () => {

    return <div className="work">
  Nos réalisations!
  <img className="showReel" src={showreel} alt="showreel"/>
  <img className="queyras" src={queyras} alt="queyras"/>
  <img className="ski" src={ski} alt="ski"/>
  <img className="outdoormix" src={outdoormix} alt="outdoormix"/>
  </div>;
  
};



export default Work;