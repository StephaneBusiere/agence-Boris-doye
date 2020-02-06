import React from 'react';
import { connect } from 'react-redux';
import SimpleSlider from 'src/components/Slider2';


import showreel from 'src/assets/images/Showreel.jpg'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import bigPictureRealmobile from 'src/assets/images/alpesRealisateurMobile.jpg'
import vietnam from 'src/assets/images/Vietnam.jpg'
import fasboa from 'src/assets/images/Fasboa.jpg'
import inde from 'src/assets/images/Inde.png'
import iconPlay from 'src/assets/images/play-button.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle as farPlayCircle } from '@fortawesome/fontawesome-free-regular'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'


import './styles.sass';
import './infos.sass';
import './svg.sass';

const Work= ({onClick,videoShowreellOn,onClick2,onClick3,onClick4,onClick5,onClick6,onClick7,onClick8,onClick9,onClick10,onClick11,onClick12,onClick13,onClick14,onClick15,onClick16,onClick17,onClick18,onClick19,onClick20,onClick21,videoQueyrasOn,videoVietnamOn,videoOutdoormixOn, videoFasboaOn,videoIndeOn,response,info1On,info2On,info3On,info4On}) => {
  
  const iconPlay1 = <FontAwesomeIcon className="iconPlay1" icon={farPlayCircle}/>
  const iconPlay2 = <FontAwesomeIcon className="iconPlay2" icon={farPlayCircle}/>
  const iconPlay3 = <FontAwesomeIcon className="iconPlay3" icon={farPlayCircle}/>
  const iconPlay4 = <FontAwesomeIcon className="iconPlay4" icon={farPlayCircle}/>
  const iconPlay5 = <FontAwesomeIcon className="iconPlay5" icon={farPlayCircle}/>
  const iconPlay6 = <FontAwesomeIcon className="iconPlay6" icon={farPlayCircle}/>
  const cross = <FontAwesomeIcon className="iconCross" icon={faWindowClose}/>
  const cross2 = <FontAwesomeIcon className="iconCross2" icon={faWindowClose}/>
  const cross3 = <FontAwesomeIcon className="iconCross3" icon={faWindowClose}/>
  const arrow1 = <FontAwesomeIcon className="iconArrow1" icon={faSortDown}/>
  const arrow2 = <FontAwesomeIcon className="iconArrow2" icon={faSortDown}/>
  const arrow3 = <FontAwesomeIcon className="iconArrow3" icon={faSortDown}/>
  const arrow4 = <FontAwesomeIcon className="iconArrow4" icon={faSortDown}/>



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
    margin: "0% 0% 5% 1%",
   
    backgroundImage: `url(${showreel})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    display:"inline-block",
   
    

  }

  let sectionStyle3={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 5% 0% 2%",
   
    backgroundImage: `url(${queyras})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    display:"inline-block"

  }
  let sectionStyle4={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 0.9%",
   
    backgroundImage: `url(${vietnam})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    display:"inline-bloc"

  }

  let sectionStyle5={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 2%",
   
    backgroundImage: `url(${outdoormix})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    display:"inline-bloc"

  }

  let sectionStyle6={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 1.3%",
   
    backgroundImage: `url(${fasboa})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    

  }

  let sectionStyle7={
   
    
    width: "100%", 
    height: "100%",
    margin: "0% 0% 0% 2.4%",
   
    backgroundImage: `url(${inde})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    display:"inline-block",
    }
    let sectionStyle8={
   
    
      width: "100%", 
      height: "100%",
      margin: "0% 0% 0% 2%",
     
      backgroundImage: `url(${queyras})`,
      backgroundSize: "cover",
      display:"inline-block"
  
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
    iFrameShowRellRes=<iframe  src="https://player.vimeo.com/video/198345088?loop=1&autoplay=1" width="1920" height="800"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
}

  
if (window.innerWidth<475) {

  iFrameQueyrasRes=<iframe src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1&transparent=false" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  
    } else {
      iFrameQueyrasRes=<iframe src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1&transparent=false" width="1920" height="800" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  } 
if (window.innerWidth<475) {

    iFrameVietnamRes=<iframe src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    
      } else {
        iFrameVietnamRes=<iframe src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0&transparent=false" width="1920" height="800" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    } 

    if (window.innerWidth<475) {

      iFrameOutdoormixRes=<iframe src="https://player.vimeo.com/video/62984978?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        } else {
          iFrameOutdoormixRes=<iframe src="https://player.vimeo.com/video/62984978?autoplay=1&loop=1&title=0&byline=0&portrait=0&transparent=false" width="1920" height="800" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      } 
if (window.innerWidth<475) {

        iFrameFasboaRes=<iframe src="https://player.vimeo.com/video/273483414?autoplay=1&loop=1" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          } else {
            iFrameFasboaRes=<iframe src="https://player.vimeo.com/video/273483414?autoplay=1&loop=1" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        } 
if (window.innerWidth<475) {

          iFrameIndeRes=<iframe src="https://player.vimeo.com/video/282989783?autoplay=1&loop=1" width="380" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            } else {
              iFrameIndeRes=<iframe src="https://player.vimeo.com/video/282989783?autoplay=1&loop=1&transparent=false" width="1920" height="900" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          } 

//////conditional className//////
let videoPresentContainer2Class
let queyrasIframeClass
let videoPresentContainer3Class
let videoSliderContainerClass

if (videoQueyrasOn) {
  videoPresentContainer2Class='videoPresentContainer2Overlay'
  queyrasIframeClass='playerQueyrasNormal'
} 


else if (videoShowreellOn) {
  videoPresentContainer2Class='videoPresentContainer2'
} else {
  videoPresentContainer2Class='videoPresentContainer2Overlay'
}

if (videoOutdoormixOn) {
  videoPresentContainer3Class='videoPresentContainer2Overlay'
  
} 


else if (videoVietnamOn) {
  videoPresentContainer3Class='videoPresentContainer3'
} else {
  videoPresentContainer3Class='videoPresentContainer2Overlay'
}

if (videoIndeOn) {
  videoSliderContainerClass='SliderContainerOverlay'
  
} 


else if (videoFasboaOn) {
  videoSliderContainerClass='SliderContainer'
} else {
  videoSliderContainerClass='SliderContainerOverlay'
}
//////bloc 1:showReellShow///////
let vietnamShow;
if (videoShowreellOn) {
    showReellShow = <div className="videoPresentContainer1"><div className="showReelContainer">
    <div  style={sectionStyle2}  >
    <div className="showReelContent">
    <div className="showReelTitle">
    <p>Show reel</p>
    <p>Best-off</p>
    </div>
  <image onClick={onClick}>{iconPlay1}</image>
  <div className="ensavoirPlus2"onClick={onClick13}>En savoir plus</div>
  
    </div>
    
  
    
    </div>
    </div>
    <div className="queyrasContainer">
    <div className="queyras" style={sectionStyle3}  >
    <div className="queyrasContent">
    <div className="queyrasTitle">
    <p>Queyras-été</p>
    <p>Office du tourisme du Queyras</p>
    </div>
    <image onClick={onClick3} className="iconPlay2">{iconPlay2}</image>
    <div className="ensavoirPlus3" onClick={onClick15}>En savoir plus</div>
    </div>
    </div>
    </div>
    
    </div>
  }  else   {
   showReellShow=
    
    <div className="showReelIframe">{iFrameShowRellRes}
    <image onClick={onClick2}>  {cross} </image>
    </div> 
    vietnamShow=(<div></div>)
    
  } 
  if (videoQueyrasOn){
    showReellShow=<div className={queyrasIframeClass}>{iFrameQueyrasRes}
    <image onClick={onClick4}>  {cross} </image>
    </div>
    
    
  } else {}
  
// bloc 2 : vietnamShow................ 
  
  //let vietnamShow;
  
  if (videoVietnamOn) {
    vietnamShow = <div className="videoPresentContainer2">
  
  
    <div className="vietnamContainer">
    <div className="vietnam" style={sectionStyle4} >
    <div className="vietnamContent"><p>Vietnam</p>
    <p>Vêtements</p>
    <image onClick={onClick5} className="iconPlay3">{iconPlay3}</image>
    <div className="ensavoirPlus4"onClick={onClick17}>En savoir plus</div>
    </div>
    </div>
    </div>
    
    
    <div className="outdoormixContainer">
    <div className="outdoormix" style={sectionStyle5} >
    <div className="outdoormixContent"><p>Outdoormix</p>
    <p>Festival</p>
    <image onClick={onClick7} className="iconPlay4">{iconPlay4}</image>
    <div className="ensavoirPlus5" onClick={onClick19}>En savoir plus</div>
    </div>
    </div>
    </div>
    
    </div>
  }  else   {
    vietnamShow=<div className="vietnamIframe">{iFrameVietnamRes}
    <image onClick={onClick6}>  {cross} </image>
    </div>} 
  
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
    <image onClick={onClick9} className="iconPlay5">{iconPlay5}</image>
    </div>
    </div>
    </div>
    
    
    <div className="indeContainer">
    <div className="inde" style={sectionStyle7} >
    <div className="indeContent"><p>Inde</p>
    <p>Kayak Extrême</p>
    <image onClick={onClick11} className="iconPlay6">{iconPlay6}</image>
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

  
  if (info1On){
    
    
    showReellShow =
    <div className="videoPresentContainer1">
    <div className="showReelContainer">
    <div  style={sectionStyle2}  >
    <div className="showReelContent">
    <p>Show reel</p>
  
  <p>Best-off</p>
  
  <image onClick={onClick}>{iconPlay1}</image>
  
    
    </div>
    </div>
    </div>
    <div className="infosContainer">
    <image  onClick={onClick14}>  {cross2} </image>
    <div className="infoShowreelContent"><p className="infoTitleShowReel">Show Reel 2016</p>
    <h3 className="infoDescriptionShowReel">Vidéo best-off de promotion de notre travail de l'année</h3>
    <div className="infodescriptionContainer">
    <p className="infoBloc">genre : généraliste</p>
    <p className="infoBloc">durée : 01:51</p>
    <p className="infoBloc">Lieux de tournages : Queyras, Briançon, Embrum, Lac de serre Ponçon, </p>
    <p className="infoBloc">Matériel utilisé : Caméra Sony FS7, drone phamtom 4, Movi M10 </p>
    </div>
    <p className="infoTexte">Si exhaustive que soit ma production de vidéos, je ne cesse jamais d’apprendre et de m’enrichir de nouvelles expériences dans l’audiovisuel. Chaque projet, chaque personne rencontrée est une source d’inspiration et de progrès dont je ne me lasse pas. J’attends avec impatience de vous rencontrer afin de mettre en commun nos connaissances.</p>
    </div>
    </div>
    </div>
    
    
    
  } else { };
/////BLOC 2 INFO/////
if (info2On){
    
    
  showReellShow =
  <div className="videoPresentContainer1">
  
  <div className="infosContainer2">
  <image className="infoCross2" onClick={onClick16}>  {cross3} </image>
  <div className="infoShowreelContent"><p className="infoTitleQueyras">Queyras été</p>
  <p className="infoDescriptionQueyras">Vidéo promotion office de tourisme du queyras</p>
  <div className="infodescriptionContainer">
  <p className="infoBloc">genre : promotion</p>
  <p className="infoBloc">durée : 02:19</p>
  <p className="infoBloc">Lieux de tournages : parc national du queyras, Abries, Moline en Queyras;</p>
  <p className="infoBloc">Matériel utilisé : Caméra Sony FS7, drone phamtom 4, Movi M10 </p>
  </div>
  <p className="infoTexte">Si exhaustive que soit ma production de vidéos, je ne cesse jamais d’apprendre et de m’enrichir de nouvelles expériences dans l’audiovisuel. Chaque projet, chaque personne rencontrée est une source d’inspiration et de progrès dont je ne me lasse pas. J’attends avec impatience de vous rencontrer afin de mettre en commun nos connaissances et construire ensemble une vidéo ou un film qui surpassera tous les autres.</p>
  </div>
  </div>
  <div className="queyrasContainer">
    <div className="queyrasInfos" style={sectionStyle8}  >
    <div className="queyrasContent"><p>Queyras-été</p>
    <p>Office du tourisme du Queyras</p>
    <image onClick={onClick3} className="iconPlay2">{iconPlay2}</image>
    
    </div>
    </div>
    </div>
  </div>
  
  
  
} else { }
 
///// BLOC 3 4 //////

if (info3On){
    
    
  vietnamShow =
  <div className="videoPresentContainer2">
  <div className="vietnamContainer">
    <div className="vietnam" style={sectionStyle4} >
    <div className="vietnamContent"><p>Vietnam</p>
    <p>Vêtements</p>
    <image onClick={onClick5} className="iconPlay3">{iconPlay3}</image>
    
    </div>
    </div>
    </div>
    
  <div className="infosContainer3">
  <image  onClick={onClick18}>  {cross2} </image>
  <div className="infoShowreelContent"><p className="infoTitleVietnam">Vietnam 2017</p>
  <p className="infoDescriptionVietnam">Reportage sur la fabrication des vétements Fasboa</p>
  <div className="infodescriptionContainer">
  <p className="infoBloc">genre : voyage</p>
  <p className="infoBloc">durée : 02:53</p>
  <p className="infoBloc">Lieux de tournages : Vietnam </p>
  <p className="infoBloc">Matériel utilisé : Caméra Sony FS7, drone phamtom 4, Movi M10 </p>
  </div>
  <p className="infoTexte">Si exhaustive que soit ma production de vidéos, je ne cesse jamais d’apprendre et de m’enrichir de nouvelles expériences dans l’audiovisuel. Chaque projet, chaque personne rencontrée est une source d’inspiration et de progrès dont je ne me lasse pas. J’attends avec impatience de vous rencontrer afin de mettre en commun nos connaissances et construire ensemble une vidéo ou un film qui surpassera tous les autres.</p>
  </div>
  </div>
  </div>
  
  
  
} else { 
  

};
/////BLOC 2 INFO/////
if (info4On){
  
  
vietnamShow =
<div className="videoPresentContainer2">

<div className="infosContainer2">
<image  onClick={onClick20}>  {cross3} </image>
<div className="infoShowreelContent"><p className="infoTitleOutdoormix">OUTDOORMIX FESTIVAL</p>
<p className="infoDescriptionOutdoormix">Vidéo teaser de l'outdoormix festival</p>
<div className="infodescriptionContainer">
<p className="infoBloc">genre : promotion</p>
<p className="infoBloc">durée : 01:12</p>
<p className="infoBloc">Lieux de tournages : Embrum, Chateau-ville-veille, lac de serre-ponçon</p>
<p className="infoBloc">Matériel utilisé : Caméra Sony FS7, drone djI Mavic, Movi M10 </p>
</div>
<p className="infoTexte">Si exhaustive que soit ma production de vidéos, je ne cesse jamais d’apprendre et de m’enrichir de nouvelles expériences dans l’audiovisuel. Chaque projet, chaque personne rencontrée est une source d’inspiration et de progrès dont je ne me lasse pas. J’attends avec impatience de vous rencontrer afin de mettre en commun nos connaissances et construire ensemble une vidéo ou un film qui surpassera tous les autres.</p>
</div>
</div>
<div className="outdoormixContainer">
    <div className="outdoormix" style={sectionStyle5} >
    <div className="outdoormixContent"><p>Outdoormix</p>
    <p>Festival</p>
    <image onClick={onClick7} className="iconPlay4">{iconPlay4}</image>
    
    </div>
    </div>
    </div>
</div>



} else { 


}
/////// RETURN /////////
  
  return <div className="mainContainer">
  
  <div className="mainpictureContainer">
    
    <div className="mainPicture" style={sectionStyle1}  >
    <div className="presentationVideos" >NOS PRODUCTIONS </div>
    <div className="presentationVideos2" >Filmées avec passion </div>
  </div>
  </div>
  
  <div className="falseMargin"></div>
  <div className="videoPresentContainer">
  <div className="videoPresentContainer1">
  
  {showReellShow}</div>
  
  <div className={videoPresentContainer2Class}>
  
  {vietnamShow}</div>
  
  <div className={videoPresentContainer3Class}>
  
  {fasboaShow}
  
  </div>
  
  <div className={videoSliderContainerClass}>
  <h2 className="moreVideo">Plus de vidéos</h2>
  <SimpleSlider />
  </div>
  
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
      info2On: state.info2On,
      info3On: state.info3On,
      info4On: state.info4On
    
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
        type: 'VIDEO3_ON',
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
    onClick17:(event) => {
     
      const action = {
        type: 'INFO3_0N',
        
      };
    
      dispatch(action);
    },
    onClick18:(event) => {
     
      const action = {
        type: 'INFO3_0FF'
      };
    
      dispatch(action);
    },
    onClick19:(event) => {
     
      const action = {
        type: 'INFO4_0N',
        
      };
    
      dispatch(action);
    },
    onClick20:(event) => {
     
      const action = {
        type: 'INFO4_0FF'
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