import React from "react";
import "./connexionModal.sass";

const ConnexionModal = () => {
    return (
      <div className="modal">
        <div className="modal-form">
          <h1>Create Account</h1>
          <form noValidate>
          {/* onSubmit={handleSubmit} */}
            <div className="firstName">
              <label htmlFor="firstName">Prénom</label>
              <input 
                type="text" 
                className="" 
                placeholder="Prénom" 
                noValidate
                name="firstName"
                // onChange={handleChange} 
                />
            </div>
            <div className="laststName">
              <label htmlFor="lastName">Nom de famille</label>
              <input 
                type="text" 
                className="" 
                placeholder="Nom de famille" 
                noValidate
                name="lastName"
                // onChange={handleChange}
                />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                className="" 
                placeholder="Email" 
                noValidate
                name="email"
                // onChange={handleChange}
                />
            </div>
            <div className="password">
              <label htmlFor="password">Mot de passe</label>
              <input 
                type="password" 
                className="" 
                placeholder="Mot de passe" 
                noValidate
                name="password"
                // onChange={handleChange}
                />
            </div>
            <div className="createAccount">
              <button type="submit">Créez votre compte</button>
              <small>Vous avez déjà un compte ?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default ConnexionModal;