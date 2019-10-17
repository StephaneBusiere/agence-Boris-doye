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
		formErrors: {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			emailConnexion: '',
			pwdConnexion: ''
		}
	}

handleChange = event => {
	event.preventDefault();
	const {name, value} = event.target;
	const {password, passwordConfirmation} = this.state;

	let formErrors = this.state.formErrors;
	let borderColorName = this.state.borderColorName;
	let borderColorEmail = this.state.borderColorEmail;
	let borderColorPassword = this.state.borderColorPassword;
	let borderColorPasswordConfirmation = this.state.borderColorPasswordConfirmation;

	// console.log("name : ", name);
	// console.log("value : ", value);

	switch (name) {
		case "name" :
			formErrors.name =
				value.length < 3 ?
				"3 caractères minimum." : "";
			borderColorName = value.length > 0 && value.length < 3 ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "email" :
			formErrors.email =
			emailRegex.test(value) ?
			"" : "Merci de remplir une adresse email valide.";
			borderColorEmail = value.length > 0 && !emailRegex.test(value) ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "password" :
			formErrors.password =
			value.length < 6 ? "6 caractères minimum." : "";
			borderColorPassword = value.length > 0 && value.length < 6 ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "passwordConfirmation" :
			formErrors.passwordConfirmation = 
				value.length < 6 ? "6 caractères minimum." : "";
			borderColorPasswordConfirmation = value.length > 0 && value.length < 6 ? "form__input errorBorder" : "form__input validBorder";
		break;
		default:
		break;
		}
	
	this.setState({ formErrors, [name]: value, borderColorName, borderColorEmail, borderColorPassword, borderColorPasswordConfirmation }, () => console.log(this.state));

}

handleChange2 = event => {
	event.preventDefault();
	const {name, value} = event.target;
	let formErrors = this.state.formErrors;
	let borderColorEmailConnexion = this.state.borderColorEmailConnexion;
	let borderColorPwdConnexion = this.state.borderColorPwdConnexion;

	switch (name) {
		case "emailConnexion" :
			formErrors.emailConnexion =
			emailRegex.test(value) ?
			"" : "Merci de remplir une adresse email valide.";
			borderColorEmailConnexion = value.length > 0 && !emailRegex.test(value) ? "form__input errorBorder" : "form__input validBorder";
		break;
		case "pwdConnexion" :
			formErrors.pwdConnexion =
			value.length < 6 ? 
				"6 caractères minimum requis." : "";
			borderColorPwdConnexion = value.length > 0 && value.length < 6 ? "form__input errorBorder" : "form__input validBorder";
		break;
		default:
		break;
		}
	
	this.setState({ formErrors, [name]: value, borderColorEmailConnexion, borderColorPwdConnexion }, () => console.log(this.state));

}

// valide que le formulaire est bien rempli
validate = () => {
	let valid = false;
	const {password, passwordConfirmation} = this.state;
	valid = this.formValidation() && (password === passwordConfirmation) ? true : false;
	console.log(valid);
	return valid;
}

formValidation = () => {
	let valid = true;
	console.log(`dans formValidation : ${this.state.formErrors}`);
	let errors = this.state.formErrors;

	// valide l'absence d'erreur
	for (var property in errors) {
		if((errors[property].length > 0) || (property == null)) {valid = false};
	}
	// console.log(valid);
	return valid;
};

sendRequest = (event) => {
	event.preventDefault();
	// console.log("formulaire de création de compte envoyé");
	//console.log(`dans sendRequest : ${this.state.formErrors}`)
	if (this.validate()) {
			// axios
  		// 	.get("http://localhost:27017/api/users")
  		// 	.then((response) => {
    	// 		console.log(response)})
		console.log("nouvelles données envoyées");
			// this.close();
	} else {
		"";
	}
}

	// const promise = axios.post("http://localhost:27017/api/users", {	
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

	close = () => {
		// popup.classList.add("hidden");
	}
	
	render() {
		// console.log('we\'re in connexionpopup');
		const {formErrors} = this.state;
		// console.log(`dans render : ${formErrors}`);
  return (
		<div className="overAll" id="popup">
		<a className="close" onClick={this.close}>X</a>
		<div className="form-div-container" id="container">
	    <div className="form-container sign-up-container">
		    <form className="connexionForm" onSubmit={this.sendRequest} method="">
			    <h1 className="form__h1">Créez votre compte</h1>
						<input 
						className={this.state.borderColorName}
						type="text" 
						name="name" 
						placeholder="Identifiant" 
						onChange={this.handleChange}/>
						{formErrors.name.length > 0 && (
							<span className="errorMessage">{formErrors.name}</span>
						)}
						<input 
						className={this.state.borderColorEmail}
						type="email" 
						name="email" 
						placeholder="Email" 
						onChange={this.handleChange}/>
						{formErrors.email.length > 0 && (
							<span className="errorMessage">{formErrors.email}</span>
						)}
						<input 
						className={this.state.borderColorPassword} 
						type="password" 
						name="password" 
						placeholder="Mot de passe"
						onChange={this.handleChange} />
						{formErrors.password.length > 0 && (
							<span className="errorMessage">{formErrors.password}</span>
						)}
						<input 
						className={this.state.borderColorPasswordConfirmation} 
						type="password" 
						name="passwordConfirmation" 
						placeholder="Confirmation"
						onChange={this.handleChange} />
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
						onChange={this.handleChange2}/>
						{formErrors.emailConnexion.length > 0 && (
							<span className="errorMessage">{formErrors.emailConnexion}</span>
						)}
						<input 
						className={this.state.borderColorPwdConnexion}
						type="password" 
						placeholder="Mot de passe" 
						name="pwdConnexion"
						onChange={this.handleChange2} 
						/>
						{formErrors.pwdConnexion.length > 0 && (
							<span className="errorMessage">{formErrors.pwdConnexion}</span>
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