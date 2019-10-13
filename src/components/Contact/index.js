import React from 'react';
import './contact.sass';

import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import logoBorisNoirPetit from 'src/assets/images/LogoBorisNoirPetit.png'


const Contact= () => {
  let sectionStyle={//
    width: "100%",
    height: "1000px",
    
    backgroundImage: `url(${bigPictureReal2})`,
    backgroundSize: 'cover',
    overflow: 'hidden', 
  }

  return <div className="contact" style={sectionStyle}  >


<body class="contactBody">   
        <div class="wrapper">
        <div class="title">
        <p>BORIS DOYE FILM<br />
         Impasse Saint-Guillaume<br />
         05600 Eygliers<br />
        <a class='mail' href="boris.doye.films@gmail.com">boris.doye.films@gmail.com</a><br />
        <a class='tel' href="tel:+33609614477">+33609614477</a></p>
      
        </div>
      

        <form class="form">
          <input type="text" class="name entry " placeholder="Your Name"/>
          
          <input type="text" class="email entry" placeholder="Email"/>
          
          <textarea class="message entry" placeholder="Message"></textarea> 
          
          <button class="submit entry" onclick="thanks()">Envoyer</button>
        </form>  
        
        <div class="shadow"></div>
      </div>
      
    <script src="app.js"></script>
</body>

  </div>
};



export default Contact;