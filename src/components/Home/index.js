import React from 'react';

import vietnam from 'src/assets/images/vietnam.jpg'
import './home.sass';

const Home= () => {

    return <div className="main">
  Notre agence est super top!
  <img className="vietnam" src={vietnam} alt="vietnam"/>;
  
  </div>;

};



export default Home;