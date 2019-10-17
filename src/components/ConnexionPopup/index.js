import React, {Component} from "react";
import { connect } from 'react-redux';
import "./connexionPopup.scss";
import axios from 'axios';

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

class ConnexionPopup extends Component {
	
	state = {
		name: null,
		email: null,
		password: null,
		passwordConfirmation: null,
		emailConnexion: null,
		pwdConnexion: null,
		borderColorName: "form__input",
		borderColorEmail: "form__input",
		borderColorPassword: "form__input",
		borderColorEmailConnexion: "form__input",
		borderColorPwdConnexion: "form__input",
		borderColorPasswordConfirmation: "form__input",
		message: '',
		formErrors: {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: ''},
		formErrors2: {
			emailConnexion: '',
			pwdConnexion: ''
		}
	}

handleChange = event => {
	event.preventDefault();
	const {name, value} = event.target;

	let formErrors = this.state.formErrors;
	let borderColorName = this.state.borderColorName;
	let borderColorEmail = this.state.borderColorEmail;
	let borderColorPassword = this.state.borderColorPassword;
	let borderColorPasswordConfirmation = this.state.borderColorPasswordConfirmation;

	// console.log("name : ", name);
	// console.log("value : ", value);

	switch (name) {
		case "name" :
			formErrors.name = value.length < 3 ? "3 caractères minimum." : "";
			borderColorName = value.length > 0 && value.length < 3 ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "email" :
			formErrors.email = emailRegex.test(value) ? "" : "Merci de remplir une adresse email valide.";
			borderColorEmail = value.length > 0 && !emailRegex.test(value) ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "password" :
			formErrors.password = value.length < 6 ? "6 caractères minimum." : "";
			borderColorPassword = value.length > 0 && value.length < 6 ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "passwordConfirmation" :
			formErrors.passwordConfirmation = value.length < 6 ? "6 caractères minimum." : "";
			borderColorPasswordConfirmation = value.length > 0 && value.length < 6 ? "form__input errorBorder" : "form__input";
		break;
		default:
		break;
		}
	
	this.setState({ formErrors, [name]: value, borderColorName, borderColorEmail, borderColorPassword, borderColorPasswordConfirmation });

}

handleChange2 = event => {
	event.preventDefault();
	const {name, value} = event.target;

	let formErrors2 = this.state.formErrors2;
	let borderColorEmailConnexion = this.state.borderColorEmailConnexion;
	let borderColorPwdConnexion = this.state.borderColorPwdConnexion;

	switch (name) {
		case "emailConnexion" :
			formErrors2.emailConnexion = emailRegex.test(value) ? "" : "Merci de remplir une adresse email valide.";
			borderColorEmailConnexion = value && !emailRegex.test(value) ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "pwdConnexion" :
			formErrors2.pwdConnexion = value.length < 6 ? "6 caractères minimum requis." : "";
			borderColorPwdConnexion = value && value.length < 6 ? "form__input errorBorder" : "form__input";
		break;
		default:
		break;
		}
	
	this.setState({ formErrors2, [name]: value, borderColorEmailConnexion, borderColorPwdConnexion });

}
// ################################################## CREATION DE COMPTE ##########################################################
// valide l'absence d'erreur dans le formulaire de création
formCreaValid = () => {
	let valid = false;
	// console.log(`dans formValidation : ${this.state.formErrors}`);
	let errors = this.state.formErrors;

	for (var property in errors) {
		valid = errors[property].length > 0 ? false : true;
	}
	// console.log("valid = " + valid);
	return valid;
};

// valide que le formulaire de création est bien rempli
validateCreation = () => {
	let validForm = false;
	const {
		name,
		email,
		password,
		passwordConfirmation} = this.state;
	
	validForm = (this.formCreaValid() 
	&& (password === passwordConfirmation) 
	&& password !== null 
	&& email !== null 
	&& name !== null) ? 
	true : false;

	// console.log("validForm = " + validForm);
	return validForm;
}

sendRequest = (event) => {
	event.preventDefault();
	// console.log("formulaire de création de compte envoyé");
	//console.log(`dans sendRequest : ${this.state.formErrors}`)
	if (this.validateCreation()) {
		const promise = axios.post("http://localhost:27017/api/users", {	
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		});
		promise.then(this.handleResponse);
	}
}

handleResponse = (response) => {
		console.log(response);
}

// ################################################## CONNEXION AU COMPTE #########################################################

// valide l'absence d'erreur dans le formulaire de connexion
formConnectValid = () => {
	let valid2 = false;
	// console.log(`dans formValidation : ${this.state.formErrors}`);
	let errors = this.state.formErrors2;

	for (var property in errors) {
		valid2 = errors[property].length > 0 ? false : true;
	}
	// console.log("valid2 = " + valid2);
	return valid2;
};

validateConnexion = () => {
	let validFormConnexion = false;
	const {
		emailConnexion,
		pwdConnexion} = this.state;
	
	validFormConnexion = (this.formConnectValid() 
	&& emailConnexion !== null
	&& pwdConnexion !== null
	// && (pwdConnexion === /*todo*/) 
	)? true : false;

	// console.log("validFormConnexion = " + validFormConnexion);
	return validFormConnexion;
}

sendRequestConnexion = (event) => {
	event.preventDefault();
	const {pwdConnexion} = this.state;
	// console.log("formulaire de création de compte envoyé");
	//console.log(`dans sendRequest : ${this.state.formErrors}`)
	if (this.validateConnexion()) {
			axios
  		.post("http://localhost:27017/api/users")
  		.then((resp) => {
			console.log(resp);
		// if (users.map(user => {
		// 		let passwordUser = user.password;
		// 		return passwordUser;
		// 	}).filter(passwordUser => {
		// 		let connect = passwordUser === pwdConnexion ? true : false;
		// 		return connect;
		// })) { 
		// 		return user;
	// 	} else {
	// 		console.log('non valide');
	// }
})}}

// ############################################### FONCTIONS DU SLIDER ############################################################

	onClickAdd = () => {
		container.classList.add("right-panel-active");
	}

	onClickRemove = () => {
		container.classList.remove("right-panel-active");
	}
	
// ###################################################### RENDER ##################################################################

	render() {
		// console.log('we\'re in connexionpopup');
		const {formErrors, formErrors2} = this.state;

  return (
		<div className="overAll" id="popup">
		<a className="close" href='' target="_self">X</a>
		<div className="form-div-container" id="container">
	    <div className="form-container sign-up-container">
		    <form className="connexionForm" onSubmit={this.sendRequest} method="post">
			    <h1 className="form__h1">Créez votre compte</h1>
						<input 
						className={this.state.borderColorName}
						type="text" 
						name="name" 
						placeholder="Identifiant" 
						novalidate
						onChange={this.handleChange}
						required/>
						{formErrors.name.length > 0 && (
							<span className="errorMessage">{formErrors.name}</span>
						)}
						<input 
						className={this.state.borderColorEmail}
						type="email" 
						name="email" 
						placeholder="Email" 
						onChange={this.handleChange}
						required/>
						{formErrors.email.length > 0 && (
							<span className="errorMessage">{formErrors.email}</span>
						)}
						<input 
						className={this.state.borderColorPassword} 
						type="password" 
						name="password" 
						placeholder="Mot de passe"
						onChange={this.handleChange} 
						required/>
						{formErrors.password.length > 0 && (
							<span className="errorMessage">{formErrors.password}</span>
						)}
						<input 
						className={this.state.borderColorPasswordConfirmation} 
						type="password" 
						name="passwordConfirmation" 
						placeholder="Confirmation"
						onChange={this.handleChange} 
						required/>
						{formErrors.passwordConfirmation.length > 0 && (
							<span className="errorMessage">{formErrors.passwordConfirmation}</span>
						)}
			    <button className="form__button create" type="submit">Créer mon compte</button>
		    </form>
	    </div>
	    <div className="form-container sign-in-container">
		    <form className="connexionForm" onSubmit={this.sendRequestConnexion} method="post">
			    <h1 className="form__h1">Connectez-vous</h1>
						<input 
						className={this.state.borderColorEmailConnexion}
						type="email" 
						placeholder="Email" 
						name="emailConnexion"
						onChange={this.handleChange2}
						required/>
						{formErrors2.emailConnexion.length > 0 && (
							<span className="errorMessage">{formErrors2.emailConnexion}</span>
						)}
						<input 
						className={this.state.borderColorPwdConnexion}
						type="password" 
						placeholder="Mot de passe" 
						name="pwdConnexion"
						onChange={this.handleChange2} 
						required/>
						{formErrors2.pwdConnexion.length > 0 && (
							<span className="errorMessage">{formErrors2.pwdConnexion}</span>
						)}
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