import React from 'react';

import showreel from 'src/assets/images/Showreel.png'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.png'
import ski from 'src/assets/images/Ski.png'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import vietnam from 'src/assets/images/Vietnam.png'


import './styles.sass';

const Work= () => {
  let sectionStyle={
    width: "100%",
    height: "600px",
    
    backgroundImage: `url(${bigPictureReal})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
    return <div>
    <div className="mainPicture" style={sectionStyle}  >
    <div className="presentationVideos" >NOS VIDEOS</div>
  
  </div>
  <img className="showReel" src={showreel} alt="showreel"/>
  <img className="queyras" src={queyras} alt="queyras"/>
  <img className="ski" src={ski} alt="ski"/>
  <img className="outdoormix" src={outdoormix} alt="outdoormix"/>
  </div>
};



export default Work;