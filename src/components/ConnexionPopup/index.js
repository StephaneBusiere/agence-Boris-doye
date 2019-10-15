import React, {Component} from "react";
import { connect } from 'react-redux';
import "./connexionPopup.scss";
import axios from 'axios';

class ConnexionPopup extends Component {
	state = {
		name: '',
		email: '',
		password: ''
		}

updateField = fieldName => event => {
		this.setState({ [fieldName]: event.target.value });
	}

// répertorisation des erreurs:
formErrors = [];


	// sendRequest = (event) => {
	// 	event.preventDefault();
	// 	const promise = axios.post("../../data/users.js", {
	// 		name: this.state.name,
	// 		email: this.state.email,
	// 		password: this.state.password
	// 	});
	// 	promise.then(this.handleResponse);
	// 	}

	// handleResponse = (response) => {
	// 		this.setState({
	// 		message: 'Identifiants invalides'
	// 	})
	// }

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
		<a className="close" href="/">X</a>
		<div className="form-div-container" id="container">
	    <div className="form-container sign-up-container">
		    <form className="connexionForm" onSubmit={this.sendRequest} method="post">
			    <h1 className="form__h1">Créez votre compte</h1>
						<input 
						className="form__input"
						type="text" 
						name="name" 
						placeholder="Identifiant" 
						value={this.state.name}
						onChange={this.updateField("name")}/>
						<input 
						className="form__input"
						type="email" 
						name="email" 
						placeholder="Email" 
						value={this.state.email}
						onChange={this.updateField("email")}/>
						<input 
						className="form__input"
						type="password" 
						name="password" 
						placeholder="Mot de passe"
						value={this.state.password}
						onChange={this.updateField("password")} />
			    <button className="form__button create" type="submit">Créer mon compte</button>
		    </form>
	    </div>
	    <div className="form-container sign-in-container">
		    <form className="connexionForm" method="post">
			    <h1 className="form__h1">Connectez-vous</h1>
						<input 
						className="form__input"
						type="email" 
						placeholder="Email" 
						name="emailConnexion"
						value={this.state.email}
						onChange={this.updateField("email")}/>
						<input 
						className="form__input"
						type="password" 
						placeholder="Mot de passe" 
						name="pwdConnexion"
						value={this.state.password}
						onChange={this.updateField("password")} 
						/>
			      <a className="lost" href="#">Mot de passe perdu ?</a>
			    <button className="form__button connect" type="submit">Connexion</button>
		    </form>
	    </div>
	    <div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1 className="form__h1">Quel plaisir de vous revoir !</h1>
				<p className="form__p">Merci de vous identifier.</p>
				<button className="form__button ghost" id="signIn" onClick={this.onClickRemove}>Connexion</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1 className="form__h1">Bienvenu·e !</h1>
				<p className="form__p">Enregistrez-vous...</p>
				<button className="form__button ghost" id="signUp" onClick={this.onClickAdd}>Créer mon compte</button>
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