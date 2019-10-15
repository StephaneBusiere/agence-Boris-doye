import React from 'react';


import './contact.scss';

const Contact= () => {

    return <div>
        <div className="form_contact">
        <form>
        <h1 className="contact__h1">Contactez nous</h1>
            <input className="contact-input" type="text"/>
            <input type="text"/>
            <button type="submit">Bye</button>
        </form>
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