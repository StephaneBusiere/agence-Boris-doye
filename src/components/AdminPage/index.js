import React from 'react';
import queyras from 'src/assets/images/Queyras.jpg'

import './adminPage.sass';

const AdminPage= () => {

  let sectionStyle1
  if (window.innerWidth<475) {
    sectionStyle1={ 
      width: "100%",
      height: "100%",
      backgroundImage: `url(${queyras})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }
   
    } else {
      sectionStyle1={ 
        width: "100%",
        height: "60em",
       
        backgroundImage: `url(${queyras})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
      }
    }
  
    return <div className="login">
      <div className="avionContainer">
        <div style={sectionStyle1}  >
        <div ClassName="accountTitle">PAGE ADMIN</div>
        </div>
      </div>
  
    <div className="login-info">  
    <div className="yours">
    <table>
    <thead>
        <tr>
            <th colspan="2">Les vidéos</th>
            <th colspan="2">Les articles</th>
            <th colspan="2">Les images</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nom1</td>
            <td>Nom2</td>
            <td>Nom1</td>
            <td>Nom2</td>
            <td>Nom1</td>
            <td>Nom2</td>
        </tr>
        <tr>
            <td>Lien1</td>
            <td>Lien2</td>
            <td>Lien1</td>
            <td>Lien2</td>
            <td>Lien1</td>
            <td>Lien2</td>
        </tr>
    </tbody>
  </table>

    </div> 
    </div>;
    </div>
  };




export default AdminPage;