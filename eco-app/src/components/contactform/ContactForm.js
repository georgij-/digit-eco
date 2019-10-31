import React from 'react';
import '../contactpage/ContactPage.css';

function ContactForm() {
    return(
        <div id="ContactForm" className="container">
            <div id="form">
            <h4>Контакт</h4>
            <p>Пополнете ја оваа контакт форма ако имате дополнителни прашања околу рециклирањето.</p>
                <form class="cf">
                <div class="half left cf">
                    <input type="text" id="input-name" placeholder="Вашето Име" />
                    <input type="email" id="input-email" placeholder="Вашата маил адреса" />
                    <input type="text" id="input-subject" placeholder="Наслов" />
                </div>
                <div class="half right cf">
                    <textarea name="message" type="text" id="input-message" placeholder="Порака"></textarea>
                </div>  
                <input type="submit" value="Испрати" id="input-submit" />
                </form>
            </div>
        </div>
    );
}

export default ContactForm;