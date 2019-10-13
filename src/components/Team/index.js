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
    overflow: 'hidden',
    
  }
    return <div>
    <div className="teamPictureContainer">
    <div className="teamPicture" style={sectionStyle1}  >
    <div className="presentationTeam" ><div className="teamtitle">Notre équipe</div>
    
    </div>
     </div>
     </div>
     <div className="teamContainer1">
     
     <div className="caphornPosterContainer">
     
     <img className="borisPhoto" src={borisBureau} />
     </div>
     <div className="borisText">
     
     <h2 className="borisTitle">Boris Doye</h2>
     
     <p className="borisPresentationTexte">Originaire de l’Isle sur Sorgue dans le Vaucluse, Boris est venu s’installer dans les Hautes-Alpes pour être au plus proche de ses passions. Car lorsqu’il n’est pas derrière sa caméra, Boris est dans un kayak, en train de dévaler les rivières de la Durance, du Guil, de l’Ubaye ; ou en train de survoler la vallée du Queyras sous sa voile de parapente.

     Un aventurier dans l’âme à la recherche de sensations et de nouvelles expériences, mais avant tout un homme qui aime partager des moments intenses. Dans chaque aventure il y a des risques, mais Boris sait qu’il peut compter sur ses camarades pour veiller sur lui, et de cette confiance jaillit de grands moments et aussi de belles amitiés.
     
     Par ailleurs notre aventurier ne se contente pas de vivre des moments extraordinaires, il les capture, prenant des risques parfois considérables dans le but de nous offrir un spectacle inoubliable. Lorsqu’on regarde ses films, on ne se rend pas toujours compte que le reporter se rend dans des endroits très reculés, loin de toute civilisation et souvent inaccessibles à n’importe quels secours. C’est donc au péril de sa vie que Boris enregistre ses images, et c’est ce qui rend ses films encore plus puissants.</p>
     
     </div>
     </div>
     
     <div className="teamContainer1">
     
     <div className="caphornPosterContainer">
     
     <img className="hugoPhoto" src={hugo } />
     </div>
     <div className="borisText">
     
     <h2 className="borisTitle">Hugo Clouzeau</h2>
     
     <p className="borisPresentationTexte">Hugo fait des films comme un artisan où chaque objet, chaque film est unique.
     Hugo est investi dans tout le processus de création et de production. Aujourd'hui, en parallèle de travailler pour le secteur du documentaire il réalise ses propres projets et fusionne sa passion pour la production avec celle pour le kayak et l'aventure.
     
     Le collectif vidéo « We are Hungry » est composé des kayakistes français : Stéphane Pion, Mathieu Coldebella, Louis Hétier, Guillaume Fievez et Hugo Clouzeau. Ils aiment mettre en image lerus virées kayak.</p>
     
     </div>
     
    
     
     </div>
     <div className="teamContainer1">
     
     <div className="caphornPosterContainer">
     
     <img className="cleoPhoto" src={cleo} />
     </div>
     <div className="borisText">
     
     <h2 className="borisTitle">Cléo Lhote</h2>
     
     <p className="borisPresentationTexte">Originaire de l’Isle sur Sorgue dans le Vaucluse, Boris est venu s’installer dans les Hautes-Alpes pour être au plus proche de ses passions. Car lorsqu’il n’est pas derrière sa caméra, Boris est dans un kayak, en train de dévaler les rivières de la Durance, du Guil, de l’Ubaye ; ou en train de survoler la vallée du Queyras sous sa voile de parapente.

     Un aventurier dans l’âme à la recherche de sensations et de nouvelles expériences, mais avant tout un homme qui aime partager des moments intenses. Dans chaque aventure il y a des risques, mais Boris sait qu’il peut compter sur ses camarades pour veiller sur lui, et de cette confiance jaillit de grands moments et aussi de belles amitiés.
     
     Par ailleurs notre aventurier ne se contente pas de vivre des moments extraordinaires, il les capture, prenant des risques parfois considérables dans le but de nous offrir un spectacle inoubliable. Lorsqu’on regarde ses films, on ne se rend pas toujours compte que le reporter se rend dans des endroits très reculés, loin de toute civilisation et souvent inaccessibles à n’importe quels secours. C’est donc au péril de sa vie que Boris enregistre ses images, et c’est ce qui rend ses films encore plus puissants.</p>
     
     </div>
     
    
     
     </div>
  </div>;
  
};



export default Team;