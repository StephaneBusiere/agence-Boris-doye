import React from 'react';


import './contact.scss';

const Contact= () => {

    return <div>
        <div className="form_contact">
        <form
        className="contact2-form validate-form">
					<span className="contact2-form-title">
						Contactez nous
					</span>

					<div className="wrap-input2 validate-input" data-validate="Name is required">
						<input className="input2" type="text" name="name"/>
						<span className="focus-input2" data-placeholder="NOM/PRENOM"></span>
					</div>

					<div className="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input2" type="text" name="email"/>
						<span className="focus-input2" data-placeholder="EMAIL"></span>
					</div>

					<div className="wrap-input2 validate-input" data-validate = "Message is required">
						<textarea className="input2" name="message"></textarea>
						<span className="focus-input2" data-placeholder="MESSAGE"></span>
					</div>

					<div className="container-contact2-form-btn">
						<div className="wrap-contact2-form-btn">
							<div className="contact2-form-bgbtn"></div>
							<button className="contact2-form-btn">
								Envoyez votre message
							</button>
						</div>
					</div>
        </form>
        <div className="emailsContainer">
        <a className='mail' href="boris.doye.films@gmail.com">boris.doye.films@gmail.com</a><br />
        <a className='tel' href="tel:+33609614477">+33609614477</a>
        </div>
        
        </div>
        
        <div class="wrapper">
            <div class="snow layer1 a"></div>
            <div class="snow layer1"></div> 
            <div class="snow layer2 a"></div>
            <div class="snow layer2"></div>
            <div class="snow layer3 a"></div>
            <div class="snow layer3"></div>
        </div>
    </div>
};



export default Contact;