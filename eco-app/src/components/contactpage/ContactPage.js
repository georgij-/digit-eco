import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ContactForm from '../contactform/ContactForm';

function ContactPage() {
    return(
        <div id="contactPage" className="container">
            <Zoom><ContactForm/></Zoom>
        </div>
    );
}

export default ContactPage;