import React, {Component} from "react";
import { connect } from 'react-redux';
import "./connexionPopup.scss";
import axios from 'axios';

const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/);

const formValidation = formErrors => {
	let valid = true;
	Object.values(formErrors).forEach(val => 
		val.length > 0 && (valid = false));
		return valid;
};

class ConnexionPopup extends Component {
	state = {
		name: null,
		email: null,
		password: null,
		formErrors: {
			name: '',
			email: '',
			password: ''
		}
	}

handleChange = event => {
	event.preventDefault();
	const {name, value} = event.target;
	let formErrors = this.state.formErrors;

	// console.log("name : ", name);
	// console.log("value : ", value);

	switch (name) {
		case "name" :
			formErrors.name =
				value.length < 3 ?
				"3 caractères minimum." : "";
		break;
		case "email" :
			formErrors.email =
			emailRegex.test(value) ?
			"" : "Merci de remplir une adresse email valide.";
		break;
		case "password" :
			formErrors.password =
			value.length < 6 ? 
				"6 caractères minimum." : "";
		break;
		default:
		break;
		}
	
	this.setState({ formErrors, [name]: value }, () => console.log(this.state));

}

	sendRequest = (event) => {
		event.preventDefault();
		// console.log("formulaire de création de compte envoyé");

		if (formValidation(this.state.formErrors)) {
			console.log(`email : ${this.state.email}, name : ${this.state.name}, pwd : ${this.state.password}`);
		} else {
			console.error("Formulaire invalide.");
		}
	}
	
	// axios
  // .get("/Users/gillettiphaine/Documents/Dev/Titan/Dossier_partage_VB/projet-BorisDoye/src/data/users.js")
  // .then((response) => {
  //   console.log(response.data)})
	// const promise = axios.post("../../data/users.js", {
	// 	axios.post("http://localhost:27017/api/users", {	
	// 		name: this.state.name,
	// 		email: this.state.email,
	// 		password: this.state.password
	// });
	// promise.then(this.handleResponse);


	// handleResponse = (response) => {
	// 		this.setState({
	// 		message: 'Identifiants invalides'
	// 	})
	// }

	sendRequestConnexion = (event) => {
		event.preventDefault();
		// console.log("formulaire de connexion envoyé");
		console.log(this.state.email + ' ' + this.state.password);
	}	

	onClickAdd = () => {
		container.classList.add("right-panel-active");
	}

	onClickRemove = () => {
		container.classList.remove("right-panel-active");
	}

	render() {
		// console.log('we\'re in connexionpopup');
		const {formErrors} = this.state;
		
  return (
		<div className="overAll">
		<a className="close" href="/">X</a>
		<div className="form-div-container" id="container">
	    <div className="form-container sign-up-container">
		    <form className="connexionForm" onSubmit={this.sendRequest} method="">
			    <h1 className="form__h1">Créez votre compte</h1>
						<input 
						className={formErrors.name.length > 0 ? "form__input errorBorder" : "form__input"}
						type="text" 
						name="name" 
						placeholder="Identifiant" 
						onChange={this.handleChange}/>
						{formErrors.name.length > 0 && (
							<span className="errorMessage">{formErrors.name}</span>
						)}
						<input 
						className={formErrors.email.length > 0 ? "form__input errorBorder" : "form__input"} 
						type="email" 
						name="email" 
						placeholder="Email" 
						onChange={this.handleChange}/>
						{formErrors.email.length > 0 && (
							<span className="errorMessage">{formErrors.email}</span>
						)}
						<input 
						className={formErrors.password.length > 0 ? "form__input errorBorder" : "form__input"} 
						type="password" 
						name="password" 
						placeholder="Mot de passe"
						onChange={this.handleChange} />
						{formErrors.password.length > 0 && (
							<span className="errorMessage">{formErrors.password}</span>
						)}
			    <button className="form__button create" type="submit">Créer mon compte</button>
		    </form>
	    </div>
	    <div className="form-container sign-in-container">
		    <form className="connexionForm" onSubmit={this.sendRequestConnexion} method="post">
			    <h1 className="form__h1">Connectez-vous</h1>
						<input 
						className="form__input"
						type="email" 
						placeholder="Email" 
						name="emailConnexion"
						onChange={this.handleChange2}/>
						<input 
						className="form__input" 
						type="password" 
						placeholder="Mot de passe" 
						name="pwdConnexion"
						onChange={this.handleChange2} 
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