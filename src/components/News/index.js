import React from 'react';
import skipicture from 'src/assets/images/Ski.jpg'

import './news.sass';

const News= () => {
  let sectionStyle1={ 
    width: "100%",
    height: "620px",
   
    backgroundImage: `url(${skipicture})`,
    backgroundSize: 'cover',
    overflow: 'hidden',

  }
    return <div> 
    <div className="skiPictureContainer">
    <div className="skiPicture" style={sectionStyle1}  >
    <div className="presentationVideos3" ><h2 ClassName="newsTitle">NEWS</h2>
    
    </div>
    </div>
     </div>

     <div className="newsContainer1">
     <div className="articleText">
     
     <h2 className="caphornTitle">Tuto: comment bien piloter un drone</h2>
     <p className="caphornAutor">de Boris Doye Films, le 20 décembre 2018</p>
     <p className="caphornGender">Genre: Tuto </p>
     <p className="caphornDuration">Catégorie : cadrage</p>
     <p className="caphornDispo">Disponibilité : Monde</p>
     <p className="caphornPresentationTexte">Embarquez avec nous dans nos kayaks chargés à plus de 80 kg, venez pagayer de longues heures en regardant autour de nous ces grands espaces vierges de civilisation, nos rencontres avec les pingouins, les baleines, les dauphins, les lions de mer.
    
     Vous participerez aux différents choix que prendra l’équipe en pleine tempête, aux difficultés que nous rencontrerons, au choix des bivouacs et aux montages des tentes parfois catastrophiques à cause du vent. Venez vous balader sur les îles de la Terre de Feu avec nous.
     
     Venez craquer avec nous lorsque nous aurons du vent de face, de l’eau plein la figure et juste une envie : retrouver nos familles et se mettre au chaud.
     
     Venez frissonner avec nous lorsque nous verrons se dessiner à l’horizon le Cap Horn et exploser de joie lorsque nous le franchirons.</p>
     
     </div>
     
     <div className="articleText">
     
     <h2 className="caphornTitle">le tournage d'Appurimac est terminé !</h2>
     <p className="caphornAutor">de Boris Doye Films, le 20 décembre 2018</p>
     <p className="caphornGender">Genre: tournage  </p>
     <p className="caphornDuration">Catégorie : news</p>
     <p className="caphornDispo">Disponibilité : Monde</p>
     <p className="caphornPresentationTexte">Embarquez avec nous dans nos kayaks chargés à plus de 80 kg, venez pagayer de longues heures en regardant autour de nous ces grands espaces vierges de civilisation, nos rencontres avec les pingouins, les baleines, les dauphins, les lions de mer.
    
     Vous participerez aux différents choix que prendra l’équipe en pleine tempête, aux difficultés que nous rencontrerons, au choix des bivouacs et aux montages des tentes parfois catastrophiques à cause du vent. Venez vous balader sur les îles de la Terre de Feu avec nous.
     
     Venez craquer avec nous lorsque nous aurons du vent de face, de l’eau plein la figure et juste une envie : retrouver nos familles et se mettre au chaud.
     
     Venez frissonner avec nous lorsque nous verrons se dessiner à l’horizon le Cap Horn et exploser de joie lorsque nous le franchirons.</p>
     
     </div>
    
     
     </div>

  </div>
  
};



export default News;