import React from 'react';
import { connect } from 'react-redux';

import showreel from 'src/assets/images/Showreel.jpg'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import vietnam from 'src/assets/images/Vietnam.jpg'
import fasboa from 'src/assets/images/Fasboa.jpg'
import inde from 'src/assets/images/Inde.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


import './styles.sass';

const Work= ({onClick,videoShowreellOn,onClick2,onClick3,onClick4,onClick5,onClick6,onClick7,onClick8,videoQueyrasOn,videoVietnamOn,videoOutdoormixOn}) => {
  
  const iconPlay1 = <FontAwesomeIcon className="iconPlay1" icon={faPlay}/>
  const iconPlay2 = <FontAwesomeIcon className="iconPlay2" icon={faPlay}/>
  
  const cross = <FontAwesomeIcon className="iconCross" icon={faWindowClose}/>

  let sectionStyle1={
    width: "100%",
    height: "550px",
   
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
    display:"inline-block",
    position: "static"

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
    margin: "0% 0% 0% 5%",
   
    backgroundImage: `url(${vietnam})`,
    backgroundSize: "cover",
    display:"inline-bloc"

  }

  let sectionStyle5={
   
    
    width: "900px", 
    height: "600px",
    margin: "0% 0% 0% 7%",
   
    backgroundImage: `url(${outdoormix})`,
    backgroundSize: "cover",
    display:"inline-bloc"

  }

  let sectionStyle6={
   
    
    width: "900px", 
    height: "600px",
    margin: "0% 0% 0% 5%",
   
    backgroundImage: `url(${fasboa})`,
    backgroundSize: "cover",
    

  }

  let sectionStyle7={
   
    
    width: "900px", 
    height: "600px",
    margin: "0% 0% 0% 7%",
   
    backgroundImage: `url(${inde})`,
    backgroundSize: "cover",
    display:"inline-block",
    

  }
  let showReellShow;
  
  if (videoShowreellOn) {
    showReellShow = <div className="videoPresentContainer1"><div className="showReelContainer">
    <div className="showReel" style={sectionStyle2}  >
    <div className="showReelContent">
    <p>Show reel</p>
  
  <p>Best-off</p>
  <image onClick={onClick}>{iconPlay1}</image>
    
    </div>
    </div>
    </div>
    <div className="queyrasContainer">
    <div className="queyras" style={sectionStyle3}  >
    <div className="queyrasContent"><p>Queyras-été</p>
    <p>Office du tourisme du Queyras</p>
    <image onClick={onClick3} className="iconPlay2">{iconPlay2}</image>
    </div>
    </div>
    </div>
    
    </div>
  }  else   {
    showReellShow=<div className="showReelIframe"><iframe  src="https://player.vimeo.com/video/198345088?loop=1&autoplay=1&title=0&byline=0&portrait=0" width="1920" height="900"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <image onClick={onClick2}>  {cross} </image>
    </div>
    
  } 
  if (videoQueyrasOn){
    showReellShow=<div className="queyrasIframe"><iframe src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <image onClick={onClick4}>  {cross} </image>
    </div>
    
    
  } else {
    
  }
  let vietnamShow;
  
  if (videoVietnamOn) {
    vietnamShow = <div className="videoPresentContainer2">
  
  
    <div className="vietnamContainer">
    <div className="vietnam" style={sectionStyle4} >
    <div className="vietnamContent"><p>Vietnam</p>
    <p>Marque de vêtement</p>
    <image onClick={onClick5}className="iconPlay2">{iconPlay2}</image>
    </div>
    </div>
    </div>
    
    
    <div className="outdoormixContainer">
    <div className="outdoormix" style={sectionStyle5} >
    <div className="outdoormixContent"><p>Outdoormix</p>
    <p>Festival</p>
    <image onClick={onClick7} className="iconPlay2">{iconPlay1}</image>
    </div>
    </div>
    </div>
    
    </div>
  }  else   {
    showReellShow=<div className="vietnamIframe"><iframe src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <image onClick={onClick6}>  {cross} </image>
    </div>
    
  } 
  if (videoOutdoormixOn){
    showReellShow=<div className="outdoormixIframe"><iframe src="https://player.vimeo.com/video/62984978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <image onClick={onClick8}>  {cross} </image>
    </div>
    
    
  } else {
    
  }
  return <div>
    <div className="mainPicture" style={sectionStyle1}  >
    <div className="presentationVideos" >NOS PRODUCTIONS </div>
    <div className="presentationVideos2" >Filmées avec passion </div>
  
  </div>
  <div className="falseMargin"></div>
  
  <div className="videoPresentContainer1">
 {showReellShow}</div>
  
  <div className="videoPresentContainer2">
  
  {vietnamShow}</div>
  
  

  <div className="videoPresentContainer3">
  
  
  <div className="fasboaContainer">
  <div className="fasboa" style={sectionStyle6} >
  <div className="fasboaContent"><p>Fasboa</p>
  <p>Sports Extrêmes</p>
  <image className="iconPlay2">{iconPlay2}</image>
  </div>
  </div>
  </div>
  
  
  <div className="indeContainer">
  <div className="inde" style={sectionStyle7} >
  <div className="indeContent"><p>Inde</p>
  <p>Kayak Extrême</p>
  <image className="iconPlay2">{iconPlay1}</image>
  </div>
  </div>
  </div>
  
  </div>
  
  </div>
};
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      videoShowreellOn: state.videoShowreellOn,
      videoQueyrasOn: state.videoQueyrasOn,
      videoVietnamOn: state.videoVietnamOn,
      videoOutdoormixOn: state.videoOutdoormixOn,
    
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
    
    onClick: (event) => {
        console.log('ok')
        const action = {
          type: 'VIDEO1_ON'
        };
        dispatch(action);
      },
    onClick2:(event) => {
     
      const action = {
        type: 'VIDEO1_OFF'
      };
      dispatch(action);
    },
    onClick3:(event) => {
     
      const action = {
        type: 'VIDEO2_ON'
      };
      dispatch(action);
    },
    onClick4:(event) => {
     
      const action = {
        type: 'VIDEO2_OFF'
      };
      dispatch(action);
    },
    onClick5:(event) => {
     
      const action = {
        type: 'VIDEO3_ON'
      };
      dispatch(action);
    },
    onClick6:(event) => {
     
      const action = {
        type: 'VIDEO3_OFF'
      };
      dispatch(action);
    },
    onClick7:(event) => {
     
      const action = {
        type: 'VIDEO4_ON'
      };
      dispatch(action);
    },
    onClick8:(event) => {
     
      const action = {
        type: 'VIDEO4_OFF'
      };
      dispatch(action);
    },
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const WorkContainer = connectionStrategies(Work);

// Étape 3 : on exporte le composant connecté qui a été généré
//export default AppContainer;



export default WorkContainer;