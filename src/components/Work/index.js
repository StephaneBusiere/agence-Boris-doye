import React from 'react';

import showreel from 'src/assets/images/Showreel.png'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.png'
import ski from 'src/assets/images/Ski.png'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import vietnam from 'src/assets/images/Vietnam.png'


import './styles.sass';

const Work= () => {
  let sectionStyle1={
    width: "100%",
    height: "600px",
   
    backgroundImage: `url(${bigPictureReal})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }

  let sectionStyle2={
   
    
    width: "1000px", 
    height: "600px",
    margin: "0% 8% 0% 5%",
   
    backgroundImage: `url(${showreel})`,
    backgroundSize: "",
    display:"inline-block"

    
    
    
  }
    return <div>
    <div className="mainPicture" style={sectionStyle1}  >
    <div className="presentationVideos" >NOS VIDEOS</div>
  
  </div>
  <div className="falseMargin"></div>
  <div className="videoPresentContainer">
  <div className="showReelContainer">
  <div className="showReel" style={sectionStyle2}  >
  <div className="showReelContent"><p>Show reel</p></div>
  </div>
  </div>
  
  <img className="queyras" src={queyras} alt="queyras"/>
  <img className="ski" src={ski} alt="ski"/>
  <img className="outdoormix" src={outdoormix} alt="outdoormix"/>
  </div>
  
  </div>
};



export default Work;