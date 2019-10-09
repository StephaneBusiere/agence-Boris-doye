import React from 'react';
import './contact.sass';

import bigPictureReal2 from 'src/assets/images/montagne.jpg'
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'


const Contact= () => {
  let sectionStyle={//
    width: "100%",
    height: "1000px",
    
    backgroundImage: `url(${bigPictureReal2})`,
    backgroundSize: 'cover',
    overflow: 'hidden', 
  }

    return <div className="contact" style={sectionStyle}  >
  
  <div class='coordonnées'>
  <p>Nous contacter:<br />
  Impasse Saint-Guillaume<br />
  05600 Eygliers<br />
  <a href="boris.doye.films@gmail.com">boris.doye.films@gmail.com</a><br />
  <a href="tel:+33609614477">+33609614477</a></p>
  </div>
  <div class='form'>
  <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
    <div class="row">
      <label class="required" for="name">Votre nom:</label><br />
      <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
      <span id="name_validation" class="error_message"></span>
    </div>
    <div class="row">
      <label class="required" for="email">Votre email:</label><br />
      <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
      <span id="email_validation" class="error_message"></span>
    </div>
    <div class="row">
      <label class="required" for="message">Votre message:</label><br />
      <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
      <span id="message_validation" class="error_message"></span>
      </div>
      
      <input id="submit_button" type="submit" value="Send email" />
  </form>
  </div>
  </div>
};



export default Contact;