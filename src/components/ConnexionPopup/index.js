import React, {Component} from "react";
import { connect } from 'react-redux';
import "./connexionPopup.scss";

class ConnexionPopup extends Component {
	onClickAdd = () => {
		container.classList.add("right-panel-active");
	}
	onClickRemove = () => {
		container.classList.remove("right-panel-active");
	}
	render() {
		console.log('we\'re in connexionpopup');
  return (
		<div className="overAll">
		<div className="overlay"
		className="container" id="container">
	    <div className="form-container sign-up-container">
		    <form action="#">
			    <h1>Créez votre compte</h1>
			      <input type="text" placeholder="Identifiant" />
			      <input type="email" placeholder="Email" />
			      <input type="password" placeholder="Mot de passe" />
			    <button className="create">Créer mon compte</button>
		    </form>
	    </div>
	    <div className="form-container sign-in-container">
		    <form action="#">
			    <h1>Connectez-vous</h1>
			      <input type="email" placeholder="Email" />
			      <input type="password" placeholder="Mot de passe" />
			      <a href="#">Mot de passe perdu ?</a>
			    <button className="connect">Connexion</button>
		    </form>
	    </div>
	    <div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Quel plaisir de vous revoir !</h1>
				<p>Merci de vous identifier.</p>
				<button className="ghost" id="signIn" onClick={this.onClickRemove}>Connexion</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Bienvenu·e !</h1>
				<p>Enregistrez-vous...</p>
				<button className="ghost" id="signUp" onClick={this.onClickAdd}>Créer mon compte</button>
			</div>
		</div>
	</div>
</div>
</div>);
	}
}

const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      
		}
	}
		);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const PopupContainer = connectionStrategies(ConnexionPopup);

export default PopupContainer;