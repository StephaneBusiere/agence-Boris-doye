import React from 'react';
import caphorn from 'src/assets/images/caphorn.jpg'
import caphornMobile from 'src/assets/images/caphornMobile.jpg'

import caphornPoster from 'src/assets/images/AfficheCaphorn.jpg'

import appurimacPoster from 'src/assets/images/Apurimac-Affiche-Print.jpg'

import './aventures.sass';

const Aventures= () => {
  
let caphornPicture 
if (window.innerWidth<475) {

caphornPicture=caphornMobile
} else {
caphornPicture=caphorn
}

let sectionStyle1={
    width: "100%",
    height: "550px",
   
    backgroundImage: `url(${caphornPicture})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    
  }

  
    return <div>
    <div className="aventurePictureContainer">
    <div className="aventurePicture" style={sectionStyle1}  >
    <div className="presentationVideos" ><h2 ClassName="aventureTitle">NOS AVENTURES</h2>
    <h3 className="documentaireTitle">Films documentaires</h3>
    </div>
     </div>
     </div>
 <div className="documentaireContainer1">
 <a className="voirFilm" href="https://vimeo.com/ondemand/projetcaphorn" target="_blank">Voir le film à partir de 4.99€</a>
 <a className="voirFilm2" href="https://vimeo.com/ondemand/apurimac" target="_blank">Voir le film à partir de 2.69€</a>
 <div className="caphornText">
 
 <h2 className="caphornTitle">Projet Cap Horn</h2>
 
 <div className="descriptionContainer2">
 <p className="caphornAutor">Réalisateur/monteur: Boris Doye Films, le 20 décembre 2018</p>
 <p className="caphornGender">Genre: Action et Aventure, Sports </p>
 <p className="caphornDuration">Durée : 47 minutes</p>
 <p className="caphornDispo">Disponibilité : Monde</p>
 </div>
 
 <p className="caphornPresentationTexte">Embarquez avec nous dans nos kayaks chargés à plus de 80 kg, venez pagayer de longues heures en regardant autour de nous ces grands espaces vierges de civilisation, nos rencontres avec les pingouins, les baleines, les dauphins, les lions de mer.

 Vous participerez aux différents choix que prendra l’équipe en pleine tempête, aux difficultés que nous rencontrerons, au choix des bivouacs et aux montages des tentes parfois catastrophiques à cause du vent. Venez vous balader sur les îles de la Terre de Feu avec nous.
 
 Venez craquer avec nous lorsque nous aurons du vent de face, de l’eau plein la figure et juste une envie : retrouver nos familles et se mettre au chaud.
 
 Venez frissonner avec nous lorsque nous verrons se dessiner à l’horizon le Cap Horn et exploser de joie lorsque nous le franchirons.</p>
 
 </div>
  
  
 <div className="caphornPosterContainer">
 
 <img className="caphornPoster" src={caphornPoster} />
 </div>
 
 
 

 <div className="caphornText">
 
 <h2 className="AppurimacTitle">Appurimac-l'appel de la rivière</h2>
 
 <div className="descriptionContainer2">
 <p className="caphornAutor">Auteurs: Hugo Clouzeau, Stéphane Pion, Boris Doye, Mathieu Coldebella, Guillaume Fievez, le 25 avril 2019</p>
 <p className="caphornGender">Genre: Action et Aventure, documentaire </p>
 <p className="caphornDuration">Durée : 54 minutes</p>
 <p className="caphornDispo">Disponibilité : Monde</p>
 </div>
 
 <p className="caphornPresentationTexte">Des sources les plus lointaines de l’Amazone jusqu’aux eaux calmes de la jungle péruvienne, 6 kayakistes français s’élancent pour une descente de 17 jours en autonomie sur le Rio Apurimac.
 Guidés par leur passion pour la rivière et leur désir d’aventure, les 6 amis vont s’enfoncer progressivement dans les profondeurs de la cordillère des Andes. Un parcours à travers les eaux tourmentées de la rivière sacrée des Incas. Ce voyage interrogent la possibilité de vivre avec peu, ensemble, dans un environnement resté intact, inexploité par l’Homme.
 Des montagnes péruviennes jusqu’aux prémices de la forêt Amazonienne, ce film retrace un long et difficile parcours à travers les entrailles des Andes, là où seul les kayakistes peuvent aller.</p>
 
 <div classNamme="appurimacVideoContainer">
 
 </div>
 </div>
 
 <div className="caphornPosterContainer">
 
 <img className="appurimacPoster" src={appurimacPoster} alt="borisDrone"/>
 </div>
 
 </div>
  </div>
};



export default Aventures;