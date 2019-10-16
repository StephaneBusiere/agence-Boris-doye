import React from 'react';
import { connect } from 'react-redux';

import showreel from 'src/assets/images/Showreel.jpg'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import bigPictureRealmobile from 'src/assets/images/alpesRealisateurMobile.jpg'
import vietnam from 'src/assets/images/Vietnam.jpg'
import fasboa from 'src/assets/images/Fasboa.jpg'
import inde from 'src/assets/images/Inde.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


import './styles.sass';

const Work= ({onClick,videoShowreellOn,onClick2,onClick3,onClick4,onClick5,onClick6,onClick7,onClick8,onClick9,onClick10,onClick11,onClick12,onClick13,onClick14,onClick15,onClick16,videoQueyrasOn,videoVietnamOn,videoOutdoormixOn, videoFasboaOn,videoIndeOn,response,info1On,info2On}) => {
  
  const iconPlay1 = <FontAwesomeIcon className="iconPlay1" icon={faPlay}/>
  const iconPlay2 = <FontAwesomeIcon className="iconPlay2" icon={faPlay}/>
  const cross = <FontAwesomeIcon className="iconCross" icon={faWindowClose}/>
  const cross2 = <FontAwesomeIcon className="iconCross2" icon={faWindowClose}/>
  const cross3 = <FontAwesomeIcon className="iconCross3" icon={faWindowClose}/>
  const arrow = <FontAwesomeIcon className="iconArrow" icon={faSortDown}/>
  const arrow2 = <FontAwesomeIcon className="iconArrow2" icon={faSortDown}/>
  let videoShowreelSource=(response.video_source)
  let sectionStyle1
  if (window.innerWidth<475) {
    sectionStyle1={ 
      width: "100%",
      height: "210px",
     
      backgroundImage: `url(${bigPictureRealmobile})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }
   
    } else {
      sectionStyle1={ 
        width: "100%",
        height: "600px",
       
        backgroundImage: `url(${bigPictureReal})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
      }
    }
  

  let sectionStyle2={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 8% 5% 5%",
   
    backgroundImage: `url(${showreel})`,
    backgroundSize: "cover",
    display:"inline-block",
    overflow: 'hidden',
    

  }

  let sectionStyle3={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 7%",
   
    backgroundImage: `url(${queyras})`,
    backgroundSize: "cover",
    display:"inline-block"

  }
  let sectionStyle4={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 5%",
   
    backgroundImage: `url(${vietnam})`,
    backgroundSize: "cover",
    display:"inline-bloc"

  }

  let sectionStyle5={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 7%",
   
    backgroundImage: `url(${outdoormix})`,
    backgroundSize: "cover",
    display:"inline-bloc"

  }

  let sectionStyle6={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 5%",
   
    backgroundImage: `url(${fasboa})`,
    backgroundSize: "cover",
    

  }

  let sectionStyle7={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 7%",
   
    backgroundImage: `url(${inde})`,
    backgroundSize: "cover",
    display:"inline-block",
    

  }
  
//affichage conditionnel des blocs d'image
  


let showReellShow;
let iFrameShowRellRes
let iFrameQueyrasRes
let iFrameVietnamRes
let iFrameOutdoormixRes
let iFrameFasboaRes
let iFrameIndeRes

  if (window.innerWidth<475) {

iFrameShowRellRes=<iframe  src="https://player.vimeo.com/video/198345088?loop=1&autoplay=1" width="370" height="300"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


  } else {
    iFrameShowRellRes=<iframe src= {videoShowreelSource} width="1920" height="1080"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  }
if (window.innerWidth<475) {

  iFrameQueyrasRes=<iframe src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  
    } else {
      iFrameQueyrasRes=<iframe src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  } 
if (window.innerWidth<475) {

    iFrameVietnamRes=<iframe src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    
      } else {
        iFrameVietnamRes=<iframe src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    } 

    if (window.innerWidth<475) {

      iFrameOutdoormixRes=<iframe src="https://player.vimeo.com/video/62984978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        } else {
          iFrameOutdoormixRes=<iframe src="https://player.vimeo.com/video/62984978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      } 
if (window.innerWidth<475) {

        iFrameFasboaRes=<iframe src="https://player.vimeo.com/video/273483414?autoplay=1&loop=1" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          } else {
            iFrameFasboaRes=<iframe src="https://player.vimeo.com/video/273483414?autoplay=1&loop=1" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        } 
if (window.innerWidth<475) {

          iFrameIndeRes=<iframe src="https://player.vimeo.com/video/282989783?autoplay=1&loop=1" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            } else {
              iFrameIndeRes=<iframe src="https://player.vimeo.com/video/282989783?autoplay=1&loop=1" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          } 
//////bloc 1:showReellShow///////

if (videoShowreellOn) {
    showReellShow = <div className="videoPresentContainer1"><div className="showReelContainer">
    <div  style={sectionStyle2}  >
    <div className="showReelContent">
    <p>Show reel</p>
  
  <p>Best-off</p>
  
  <image onClick={onClick}>{iconPlay1}</image>
  <div className="ensavoirplus2" onClick={onClick13}>En savoir plus{arrow}</div>
    
    </div>
    </div>
    </div>
    <div className="queyrasContainer">
    <div className="queyras" style={sectionStyle3}  >
    <div className="queyrasContent"><p>Queyras-été</p>
    <p>Office du tourisme du Queyras</p>
    <image onClick={onClick3} className="iconPlay2">{iconPlay2}</image>
    <div className="ensavoirplus3" onClick={onClick15}>En savoir plus{arrow2}</div>
    </div>
    </div>
    </div>
    
    </div>
  }  else   {
    showReellShow=
    
    <div className="showReelIframe">{iFrameShowRellRes}
    <image onClick={onClick2}>  {cross} </image>
    </div>
    
    
  } 
  if (videoQueyrasOn){
    showReellShow=<div className="queyrasIframe">{iFrameQueyrasRes}
    <image onClick={onClick4}>  {cross} </image>
    </div>
    
    
  } else {}
  
// bloc 2 : vietnamShow................ 
  
  let vietnamShow;
  
  if (videoVietnamOn) {
    vietnamShow = <div className="videoPresentContainer2">
  
  
    <div className="vietnamContainer">
    <div className="vietnam" style={sectionStyle4} >
    <div className="vietnamContent"><p>Vietnam</p>
    <p>Marque de vêtement</p>
    <image onClick={onClick5}className="iconPlay1">{iconPlay1}</image>
    </div>
    </div>
    </div>
    
    
    <div className="outdoormixContainer">
    <div className="outdoormix" style={sectionStyle5} >
    <div className="outdoormixContent"><p>Outdoormix</p>
    <p>Festival</p>
    <image onClick={onClick7} className="iconPlay2">{iconPlay2}</image>
    </div>
    </div>
    </div>
    
    </div>
  }  else   {
    vietnamShow=<div className="vietnamIframe">{iFrameVietnamRes}
    <image onClick={onClick6}>  {cross} </image>
    </div>
    
  } 
  if (videoOutdoormixOn){
    vietnamShow=<div className="outdoormixIframe">{iFrameOutdoormixRes}
    <image onClick={onClick8}>  {cross} </image>
    </div>
    
    
  } else {}
/////// Bloc 3: fasboaShow  
  let fasboaShow;
  
  if (videoFasboaOn) {
    fasboaShow =  <div className="videoPresentContainer3">
  
  
    <div className="fasboaContainer">
    <div className="fasboa" style={sectionStyle6} >
    <div className="fasboaContent"><p>Fasboa</p>
    <p>Sports Extrêmes</p>
    <image onClick={onClick9} className="iconPlay2">{iconPlay2}</image>
    </div>
    </div>
    </div>
    
    
    <div className="indeContainer">
    <div className="inde" style={sectionStyle7} >
    <div className="indeContent"><p>Inde</p>
    <p>Kayak Extrême</p>
    <image onClick={onClick11} className="iconPlay2">{iconPlay1}</image>
    </div>
    </div>
    </div>
    
    </div>

  }  else   {
    fasboaShow=<div className="fasboaIframe"><image onClick={onClick10}>  {cross} </image>
    {iFrameFasboaRes}
    </div>
    
  } 
  if (videoIndeOn){
    fasboaShow=<div className="indeIframe"><image onClick={onClick12}>  {cross} </image>
    {iFrameIndeRes}
    
    </div>
    } else {}
/////// BlOC INFOS 1 ////////  
/*   let iconeInfo;
  if (info1On){ 
    iconeInfo={cross}
  
  } else {
    iconeInfo={arrow}
  } */
  
  if (info1On){
    
    
    showReellShow =
    <div className="videoPresentContainer1">
    <div className="showReelContainer">
    <div  style={sectionStyle2}  >
    <div className="showReelContent">
    <p>Show reel</p>
  
  <p>Best-off</p>
  
  <image onClick={onClick}>{iconPlay1}</image>
  <div className="ensavoirplus2" onClick={onClick13}>En savoir plus {arrow}</div>
    
    </div>
    </div>
    </div>
    <div className="infosContainer">
    <image className="infoCross2" onClick={onClick14}>  {cross2} </image>
    <div className="infoShowreelContent"><p className="infoTitle">Show Reel 2016</p>
    <p className="infoDescription">Vidéo best-off de promotion de notre travail de l'année</p>
    <div className="infodescriptionContainer">
    <p className="infoBloc">genre : généraliste</p>
    <p className="infoBloc">durée : 01:51</p>
    <p className="infoBloc">Lieux de tournages : Queyras, Briançon, Embrum, Lac de serre Ponçon, </p>
    <p className="infoBloc">Matériel utilisé : Caméra Sony FS7, drone phamtom 4, Movi M10 </p>
    </div>
    <p className="infoTexte">Si exhaustive que soit ma production de vidéos, je ne cesse jamais d’apprendre et de m’enrichir de nouvelles expériences dans l’audiovisuel. Chaque projet, chaque personne rencontrée est une source d’inspiration et de progrès dont je ne me lasse pas. J’attends avec impatience de vous rencontrer afin de mettre en commun nos connaissances et construire ensemble une vidéo ou un film qui surpassera tous les autres.</p>
    </div>
    </div>
    </div>
    
    
    
  } else { 
    

  }
/////BLOC 2 INFO/////
if (info2On){
    
    
  showReellShow =
  <div className="videoPresentContainer1">
  
  <div className="infosContainer2">
  <image className="infoCross2" onClick={onClick16}>  {cross3} </image>
  <div className="infoShowreelContent"><p className="infoTitle">Queyras été</p>
  <p className="infoDescription">Vidéo promotionnelle pour l'oofice de tourisme du queyras</p>
  <div className="infodescriptionContainer">
  <p className="infoBloc">genre : promotion</p>
  <p className="infoBloc">durée : 02:19</p>
  <p className="infoBloc">Lieux de tournages : parc national du queyras, Abries, Moline en Queyras; Arvieux</p>
  <p className="infoBloc">Matériel utilisé : Caméra Sony FS7, drone phamtom 4, Movi M10 </p>
  </div>
  <p className="infoTexte">Si exhaustive que soit ma production de vidéos, je ne cesse jamais d’apprendre et de m’enrichir de nouvelles expériences dans l’audiovisuel. Chaque projet, chaque personne rencontrée est une source d’inspiration et de progrès dont je ne me lasse pas. J’attends avec impatience de vous rencontrer afin de mettre en commun nos connaissances et construire ensemble une vidéo ou un film qui surpassera tous les autres.</p>
  </div>
  </div>
  <div className="queyrasContainer">
    <div className="queyras" style={sectionStyle3}  >
    <div className="queyrasContent"><p>Queyras-été</p>
    <p>Office du tourisme du Queyras</p>
    <image onClick={onClick3} className="iconPlay2">{iconPlay2}</image>
    <div className="ensavoirplus3" onClick={onClick15}>En savoir plus{arrow2}
    </div>
    </div>
    </div>
    </div>
  </div>
  
  
  
} else { 
  

}

/////// RETURN /////////
  
  return <div>
  
  <div className="mainpictureContainer">
    
    <div className="mainPicture" style={sectionStyle1}  >
    <div className="presentationVideos" >NOS PRODUCTIONS </div>
    <div className="presentationVideos2" >Filmées avec passion </div>
  </div>
  </div>
  
  <div className="falseMargin"></div>
  
  <div className="videoPresentContainer1">
  
  {showReellShow}</div>
  
  <div className="videoPresentContainer2">
  
  {vietnamShow}</div>
  
  <div className="videoPresentContainer3">
  
  {fasboaShow}
  
  
  </div>
  
  </div>
};

/////// Connexion stratégies .................

const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      videoShowreellOn: state.videoShowreellOn,
      videoQueyrasOn: state.videoQueyrasOn,
      videoVietnamOn: state.videoVietnamOn,
      videoOutdoormixOn: state.videoOutdoormixOn,
      videoFasboaOn: state.videoFasboaOn,
      videoIndeOn: state.videoIndeOn,
      response: state.response,
      info1On: state.info1On,
      info2On: state.info2On
    
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
// bloc 1: ////////////    
    
    onClick: (event) => {
        console.log('ok')
        const action = {
          type: 'VIDEO1_ON'};
        const action2 ={
          type: 'INFO1_0FF'
        }  
        dispatch(action);
      },

      
    onClick2:(event) => {
     
      const action = {
        type: 'VIDEO1_OFF',
     
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
///// bloc 2 : ///////    
    
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
/////// Bloc 3 : ///////
    
    onClick9:(event) => {
     
      const action = {
        type: 'VIDEO5_ON'
      };
      dispatch(action);
    },
    onClick10:(event) => {
     
      const action = {
        type: 'VIDEO5_OFF'
      };
      dispatch(action);
    },
    onClick11:(event) => {
     
      const action = {
        type: 'VIDEO6_ON'
      };
      dispatch(action);
    },
    onClick12:(event) => {
     
      const action = {
        type: 'VIDEO6_OFF'
      };
    
      dispatch(action);
    },
    onClick13:(event) => {
     
      const action = {
        type: 'INFO1_0N',
        
      };
    
      dispatch(action);
    },
    onClick14:(event) => {
     
      const action = {
        type: 'INFO1_0FF'
      };
    
      dispatch(action);
    },
    onClick15:(event) => {
     
      const action = {
        type: 'INFO2_0N',
        
      };
    
      dispatch(action);
    },
    onClick16:(event) => {
     
      const action = {
        type: 'INFO2_0FF'
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