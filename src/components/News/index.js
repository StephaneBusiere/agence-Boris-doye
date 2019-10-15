import React from 'react';
import skipicture from 'src/assets/images/Ski.jpg'
import skipictureMobile from 'src/assets/images/SkiMobile.jpg'
import pilotageDrone from 'src/assets/images/pilotageDrone.jpg'
import appurimacPhoto from 'src/assets/images/AppurimacGrand.jpg'

import './news.sass';

const News= () => {
  
  let sectionStyle1
if (window.innerWidth<475) {
  sectionStyle1={ 
    width: "100%",
    height: "230px",
   
    backgroundImage: `url(${skipictureMobile})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
 
  } else {
    sectionStyle1={ 
      width: "100%",
      height: "600px",
     
      backgroundImage: `url(${skipicture})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }
  }
  
  
  
  

  
    return <div> 
    <div className="skiPictureContainer">
    <div className="skiPicture" style={sectionStyle1}  >
    <div className="presentationVideos3" ><div ClassName="newsTitle">NEWS</div>
    
    </div>
    </div>
     </div>

     <div className="newsContainer1">
     <div className="articleText">
     <div className="articleTitleContainer">
     <h2 className="articleTitle">Tuto: comment bien piloter un drone</h2>
     <div className="descriptionContainer">
     <p className="articleAutor">Auteur: Boris Doye Films, le 20 décembre 2018</p>
     <p className="articleGender">Genre: cadrage </p>
     <p className="articleCatégorie">Catégorie :Tuto  </p>
     </div>
     </div>
     <img className="pilotageDronePicture" src={pilotageDrone} />
     
    <p className="articlePresentationTexte"><p className="introArticle">Pilote de drone – D’après une étude réalisée en 2014 par Systèmes télécommandés Canada, le potentiel du marché du drone (approvisionnement et exploitation) se situerait entre 100 et 260 M$ sur dix ans. Déjà très présent dans le domaine militaire, le drone devrait connaître un essor fulgurant dans le secteur commercial. Attention, piloter un drone ne ressemble en rien à téléguider un avion. Aperçu des exigences pour exercer ce métier, des compétences recherchées, du salaire ainsi que des évolutions et opportunités.
    </p>
    <p className="firstP">Exigences pour piloter un drone
    À l’heure actuelle, piloter un drone dans un but ludique ne nécessite pas de permis, à condition que le drone pèse moins de 35 kg, qu’il évolue loin des foules, des édifices… et que la protection de la vie privée et que la sécurité aérienne soit respectée. En revanche, le pilote d’un drone commercial – utilisé à des fins professionnelles – doit être en possession d’un certificat d’opérations aériennes spécialisées (COAS) à quelques exceptions près (drone de moins de 2 kg guidé en visibilité directe, drone de moins de 25 kg volant à moins de 87 nœuds en visibilité directe). Enfreindre la loi expose le pilote à une amende pouvant aller jusqu’à 25 000 $ par Transports Canada.
    
    Compétences et aptitudes variées
    Piloter un drone n’est pas donné à tout le monde. Le pilote doit démontrer des aptitudes et des compétences importantes : facultés à guider en mode gyroscopique avec GPS, maîtrise de l’orientation dans l’espace, connaissances en météorologie, sens de la rigueur (respecter le plan de vol et le Règlement de l’aviation canadien), aisance avec la technique (vérifier l’appareil entre chaque vol, relever les paramètres de navigation, maîtriser les logiciels du secteur d’activité), disposition à écouter (comprendre le mandat) et à communiquer (remettre les informations prélevées et rédiger des rapports de vols).
    </p>
    <p className="secondP"> Rémunération pouvant être très généreuse
    La rémunération d’un pilote de drone est excessivement variable, car elle dépend du mandataire (Google/agent immobilier), du type de la mission (évènement festif/turbines d’éoliennes), du site (zone de guerre/zone pacifiée), etc. Une chose est certaine, les entreprises aujourd’hui sont prêtes à mettre la main à la poche pour bénéficier de pilotes compétents. Le pilote de drone peut ainsi espérer être rémunéré 50 $/h ou environ 100 000 $/an, voire 200 000 $ s’il travaille dans une zone à risque ou difficilement accessible.
    
    Évolution de carrière et opportunités
    Le pilote de drone peut évoluer vers un poste à responsabilité (chef d’une équipe de pilotes), devenir formateur ou encore créer sa propre structure. Il peut également bifurquer vers un autre secteur d’activité, qui répondrait davantage à ses aspirations. Aujourd’hui, et encore plus demain, les opportunités sont très nombreuses : organisations fédérales (GRC, Bureau de la sécurité des transports), agents immobiliers (photos des propriétés), entreprises pétrolières (repérage et réparation), agriculture (pulvérisation d’insecticide localisée, analyse de l’état des cultures), surveillance (frontière, campus), recherche et sauvetage (détecteurs à infrarouge pour repérer des signatures thermiques), livraison de colis (Google, Amazon), arpentage (analyses plus rapides et moins risquées), etc.
    
    Après une première phase de croissance tous azimuts à une vitesse fulgurante (1672 COAS délivrés en 2014 contre 345 en 2012 par Transport Canada), le temps est peut-être venu de concevoir des drones de 2e génération. Et pourquoi pas des drones silencieux pour respecter l’environnement des populations humaines et animales survolées?
    </p>
    ARTICLES RÉCENTS PAR AMÉLIE VAN DE WYNCKELE
    La basse technologie ou comment innover en respectant la nature et l’homme
    Cocktail d’innovations pour juguler la contrefaçon d’alcool
    Neom : projet d’un prince saoudien mégalomane ou visionnaire?
    Une industrie forestière appelée à miser sur les innovations technologiques
    Des innovations en architecture toujours plus surprenantes</p>
     
 
     </div>
     
     <div className="articleText">
     <div className="articleTitleContainer">
     <h2 className="articleTitle">le tournage d'Appurimac est terminé !</h2>
     
     <div className="descriptionContainer">
     <p className="articleAutor">Auteur: Boris Doye Films, le 20 décembre 2018</p>
     <p className="articleGender">Genre: tournages  </p>
     <p className="articleCatégorie">Catégorie : news</p>
     </div>
     </div>
     <img className="appurimacPicture" src={appurimacPhoto} />
     <p className="articlePresentationTexte">
     
     <p className="introArticle"> Apurimac, le dieu rugissant, lance ses eaux furieuses contre les kayakistes téméraires. Sur les pas de l’expédition de 1975 de Calvin Giddings, ils sont six à empoigner fermement leurs pagaies, bien décidés à se laisser avaler par l’impressionnant Abysmo qui doit les recracher quelques centaines de kilomètres en aval. Revenus parmi les mortels, ils racontent leur voyage avec le plein d’image et un film : Apurimac, l’appel de la rivière</p>
     
     
     <p className="firstP"> Des sources les plus lointaines de l’Amazone jusqu’aux eaux calmes de la jungle péruvienne, 6 kayakistes français s’élancent pour une descente de 17 jours en autonomie sur le Rio Apurimac. Guidés par leur passion pour la rivière et leur désir d’aventure, les 6 amis vont s’enfoncer progressivement dans les profondeurs de la cordillère des Andes. Un parcours à travers les eaux tourmentées de la rivière sacrée des Incas. Ce voyage interrogent la possibilité de vivre avec peu, ensemble, dans un environnement resté intact, inexploité par l’Homme. Des montagnes péruviennes jusqu’aux prémices de la forêt Amazonienne, ce film retrace un long et difficile parcours à travers les entrailles des Andes, là où seul les kayakistes peuvent aller.

     C’est là !! Juste derrière ce virage. La porte d’Abysmo ! Imaginez un mur vertical où la roche dessine d’immenses lignes blanches, une croix géante  qui barre le passage. La montagne nous prévient : attention n’allez pas plus loin ! En 1975, Calvin Giddings et son équipe campèrent à l’entrée de ces gorges pendant trois jours, avant d’enfin oser s’engager dans cette faille abyssale, maintenant connue comme l’entrée de l’Abyssmo ! Grâce à leur courage et leur engagement, ils réussirent la première descente du Rio Apurimac. En 1975 leurs kayaks étaient en fibres. Ils ont mis trente jours pour réaliser cette première. Un exploit qui inspire.</p>

     <p className="secondP">  Aujourd’hui après déjà huit jours de descente sur l’Apurimac c’est à notre tour de nous retrouver au pied de cette muraille intimidante. Et pour épicer la situation, la nuit va tomber dans 1h. Nous nous sommes engagés dans cette gorge un peu précipitamment. Plus de demi tour possible et aucun bivouac avant la sortie dans quelques kilomètres. Alors on y est, on y va. Il faut progresser et vite.
L’esquive et le siphon
     Sur l’Apurimac, et au Pérou en général, il faut garder son sang froid et avancer méthodiquement. Nous nous sommes fixé une règle dès le début : “Nous ne passerons aucun rapide à vue si la sortie n’est pas clairement visible ! ” La rivière est bourrée de siphons et bien souvent de très beaux rapides ne sont pas franchissables à cause d’un de ces pièges mal placé. Ici les montagnes montent très haut au dessus de la rivière, et les blocs qui s’en détachent s’empilent de façon anarchique. La grosseur de ces rochers forment des siphons monstrueux qui pourraient avaler un bateau et son kayakiste… easy !
     
     Le rapide qui mène droit dans la faille est totalement infranchissable. Toute l’eau finit dans une cave creusée dans la paroi, formant un véritable coupe gorge. Nous sommes bon pour deux portages difficiles à travers un labyrinthe de blocs gigantesques.
     
     </p>
     </p>
     
     </div>
    
     
     </div>

  </div>
  
};



export default News;