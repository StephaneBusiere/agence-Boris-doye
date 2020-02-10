import React from 'react';

import teamDauphins from 'src/assets/images/teamdauphins.jpg'
import borisBureau from 'src/assets/images/borisBureau.jpg'
import cleo from 'src/assets/images/cleo.jpg'
import hugo from 'src/assets/images/HugoClouzeau.jpg'

import './team.sass';

const Team= () => {
  let sectionStyle1={
    width: "100%",
    height: "550px",
   
    backgroundImage: `url(${teamDauphins})`,
    backgroundSize: 'cover',
    backgroundposition: 'center',
    overflow: 'hidden',
    
  }
    return <div>
    <div className="teamPictureContainer">
    <div className="teamPicture" style={sectionStyle1}  >
    <div className="presentationTeam" >
    <div className="teamtitle">Notre équipe</div>
    
    </div>
    </div>
    </div>
     
     
     <div className="teamContainer">
    <div className="teamPresentationContainer">
    
    <div className="borisContainer">
     <img className="borisPhoto" src={borisBureau} />
     
     <p className="borisSmallTexteTitle">
     Boris Doye</p>
     <p className="borisSmallTexteDescription">Exécutive producer/Director</p>
     <p className="BorisTexteDescrition">Originaire de l’Isle sur Sorgue dans le Vaucluse, Boris est venu s’installer dans les Hautes-Alpes pour être au plus proche de ses passions. Car lorsqu’il n’est pas derrière sa caméra, Boris est dans un kayak, en train de dévaler les rivières de la Durance, du Guil, de l’Ubaye ; ou en train de survoler la vallée du Queyras sous sa voile de parapente.Un aventurier dans l’âme à la recherche de sensations et de nouvelles expériences, mais avant tout un homme qui aime partager des moments intenses. Dans chaque aventure il y a des risques, mais Boris sait qu’il peut compter sur ses camarades pour veiller sur lui, et de cette confiance jaillit de grands moments et aussi de belles amitiés.
     </p>
     </div>
     
     <div className="hugoContainer">
     <p className="hugoSmallTexteTitle">
     Hugo clouzeau</p>
     <p className="hugoSmallTexteDescription">Director/chef operator</p>
     <p className="hugoTexteDescrition">Hugo fait des films comme un artisan où chaque objet, chaque film est unique.
     Hugo est investi dans tout le processus de création et de production. Aujourd'hui, en parallèle de travailler pour le secteur du documentaire il réalise ses propres projets et fusionne sa passion pour la production avec celle pour le kayak et l'aventure.
     
     Le collectif vidéo « We are Hungry » est composé des kayakistes français : Stéphane Pion, Mathieu Coldebella, Louis Hétier, Guillaume Fievez et Hugo Clouzeau. Ils aiment mettre en image lerus virées kayak.Plus que jamais sur ce type de rivière il faut coopérer, communiquer, se faire confiance et bien se connaître pour éviter l’accident.</p>
     
     
     <img className="hugoPhoto" src={hugo } />
     
     </div>
     
     <div className="cleoContainer">
     <p className="cleoSmallTexteTitle">
     Cleo Lhote</p>
     <p className="cleoSmallTexteDescription">Videographer</p>
     <p className="cleoTexteDescrition">Hugo fait des films comme un artisan où chaque objet, chaque film est unique.
     Hugo est investi dans tout le processus de création et de production. Aujourd'hui, en parallèle de travailler pour le secteur du documentaire il réalise ses propres projets et fusionne sa passion pour la production avec celle pour le kayak et l'aventure.
     
     Le collectif vidéo « We are Hungry » est composé des kayakistes français : Stéphane Pion, Mathieu Coldebella, Louis Hétier, Guillaume Fievez et Hugo Clouzeau. Ils aiment mettre en image lerus virées kayak.</p>
     
     <img className="cleoPhoto" src={cleo} />
     </div>
     
     <div className="cleo2Container">
     <p className="cleo2SmallTexteTitle">
     cleo bis</p>
     <p className="cleo2SmallTexteDescription">Videographer</p>
     <p className="cleo2TexteDescrition">Hugo fait des films comme un artisan où chaque objet, chaque film est unique.
     Hugo est investi dans tout le processus de création et de production. Aujourd'hui, en parallèle de travailler pour le secteur du documentaire il réalise ses propres projets et fusionne sa passion pour la production avec celle pour le kayak et l'aventure.
     
     Le collectif vidéo « We are Hungry » est composé des kayakistes français : Stéphane Pion, Mathieu Coldebella, Louis Hétier, Guillaume Fievez et Hugo Clouzeau. Ils aiment mettre en image lerus virées kayak.</p>
     
     <img className="cleo2Photo" src={cleo} />
     
     </div>
     </div>
     </div>
     
     </div>
     
     
 
  
};



export default Team;