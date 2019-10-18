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
 <body className="contactBody">   
        <div className="wrapper">
        <form className="contact" action="#" method="POST" enctype="multipart/form-data">
        <div className="title">
        <p>BORIS DOYE FILM<br />
         Impasse Saint-Guillaume<br />
         05600 Eygliers<br />
        <a className='mail' href="boris.doye.films@gmail.com">boris.doye.films@gmail.com</a><br />
        <a className='tel' href="tel:+33609614477">+33609614477</a></p>
        </div>
          <input type="text" className="name entry " placeholder="Nom Prénom" required/>
          
          <input type="text" className="email entry" placeholder="Email" required/>
          
          <textarea className="message entry" placeholder="Message" required></textarea> 
          
          <button className="submit entry" type="submit" onclick="Merci">Envoyer</button>
        </form>  
        
        <div className="shadow"></div>
      </div>
    <script src="app.js"></script>
</body>
</div>
}; 
export default Contact;