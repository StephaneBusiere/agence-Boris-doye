import React from 'react';
import avion from 'src/assets/images/avion.jpg'

import './loginPage.sass';

const LoginPage = () => {

  let sectionStyle1
if (window.innerWidth<475) {
  sectionStyle1={ 
    width: "100%",
    height: "100%",
    backgroundImage: `url(${avion})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
 
  } else {
    sectionStyle1={ 
      width: "100%",
      height: "60em",
     
      backgroundImage: `url(${avion})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }
  }

  return <div className="login">
    <div className="avionContainer">
      <div style={sectionStyle1}  >
      <div ClassName="accountTitle">VOTRE COMPTE</div>
      </div>
    </div>

  <div className="login-info">  
  <div className="yours">
    <div className="yours__detail">
    <h2 className="thisName"> Votre nom : </h2>
      <p> Julius</p>
    </div>
    <div className="yours__detail">
    <h2 className="thisMail"> Votre email : </h2>
    <p> julius@gmail.com</p>
    </div>
    <div className="yours__detail">
    <h2 className="thisPwd"> Votre mot de passe : </h2>
    <a href="/"> Changer mon mot de passe</a>
    </div>
  </div>
  <div className="video_box">
    <h2 className="video__h2">Vos vidéos favorites</h2>
    <iframe src="https://player.vimeo.com/video/198345088?loop=1&autoplay=1" width="370" height="300"  frameborder="0" allow="autoplay; fullscreen" allowfullscreen  className="video_in"></iframe>
  </div>
  </div> 
  </div>;
  
};



export default LoginPage;