import React from 'react';
import clients from 'src/assets/images/clientsPicture.jpg'
import clientsPictureMobile from 'src/assets/images/clientsPictureMobile.jpg'
import caphorn from 'src/assets/images/caphorn.jpg'

import './clients.sass';

const Clients= () => {
  let clientsPicture 
if (window.innerWidth<475) {

clientsPicture=caphorn
} else {
clientsPicture=clients
}
  
  
  
  let sectionStyle1={ 
    width: "100%",
    height: "620px",
   
    backgroundImage: `url(${clientsPicture})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
    return <div> 
    <div className="clientsPictureContainer">
    <div className="clientsPicture" style={sectionStyle1}  >
    <div className="presentationVideos5" ><div ClassName="clientsTitle">Ils nous ont fait confiance</div>
    
    </div>
    </div>
     </div>
  
  </div>
  
};



export default Clients;