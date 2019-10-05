import React from 'react';

import showreel from 'src/assets/images/Showreel.png'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.png'

import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import vietnam from 'src/assets/images/Vietnam.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'


import './styles.sass';

const Work= () => {
  
  const iconPlay1 = <FontAwesomeIcon className="iconPlay1" icon={faPlay}/>
  const iconPlay2 = <FontAwesomeIcon className="iconPlay2" icon={faPlay}/>
  
  let sectionStyle1={
    width: "100%",
    height: "600px",
   
    backgroundImage: `url(${bigPictureReal})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }

  let sectionStyle2={
   
    
    width: "900px", 
    height: "600px",
    margin: "0% 8% 0% 5%",
   
    backgroundImage: `url(${showreel})`,
    backgroundSize: "cover",
    display:"inline-block"

  }

  let sectionStyle3={
   
    
    width: "900px", 
    height: "600px",
    margin: "0% 0% 0% 7%",
   
    backgroundImage: `url(${queyras})`,
    backgroundSize: "cover",
    display:"inline-block"

  }
  let sectionStyle4={
   
    
    width: "900px", 
    height: "600px",
    margin: "1% 0% 80% 5%",
   
    backgroundImage: `url(${vietnam})`,
    backgroundSize: "cover",
    display:"inline-block"

  }

  let sectionStyle5={
   
    
    width: "900px", 
    height: "600px",
    margin: "1% 0% 80% 7%",
   
    backgroundImage: `url(${outdoormix})`,
    backgroundSize: "cover",
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
  <div className="showReelContent"><p>Show reel</p>
  <p>Best-off</p>
  <image >{iconPlay1}</image>
  </div>
  </div>
  </div>
  
  <div className="queyrasContainer">
  <div className="queyras" style={sectionStyle3}  >
  <div className="queyrasContent"><p>Queyras-été</p>
  <p>Office du tourisme du Queyras</p>
  <image className="iconPlay2">{iconPlay2}</image>
  </div>
  </div>
  </div>

  <div className="vietnamContainer">
  <div className="vietnam" style={sectionStyle4} >
  <div className="vietnamContent"><p>Fasboa</p>
  <p>Marque de vêtement</p>
  <image className="iconPlay2">{iconPlay2}</image>
  </div>
  </div>
  </div>
  
  
  <div className="outdoormixContainer">
  <div className="outdoormix" style={sectionStyle5} >
  <div className="outdoormixContent"><p>Outdoormix</p>
  <p>Festival</p>
  <image className="iconPlay2">{iconPlay1}</image>
  </div>
  </div>
  </div>
  
  
  
  </div>
  
  </div>
};



export default Work;