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
						<input class="input2" type="text" name="name"/>
						<span class="focus-input2" data-placeholder="NOM/PRENOM"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input2" type="text" name="email"/>
						<span class="focus-input2" data-placeholder="EMAIL"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate = "Message is required">
						<textarea class="input2" name="message"></textarea>
						<span class="focus-input2" data-placeholder="MESSAGE"></span>
					</div>

					<div class="container-contact2-form-btn">
						<div class="wrap-contact2-form-btn">
							<div class="contact2-form-bgbtn"></div>
							<button class="contact2-form-btn">
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