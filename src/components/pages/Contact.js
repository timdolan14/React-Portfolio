import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'

var regTest = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

export default function Contact() {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            if (regTest.test(inputValue)) {
                setErrorMessage('Email address is valid!')
                return setEmail(inputValue);
            } else setErrorMessage('Please input a validate Email!')
        }

        if (inputType === 'text') {
            if (inputValue == '') {
                setErrorMessage('Message is required!')
                return setText(inputValue);
            } else setErrorMessage('Thank you for the message!')
        }
    }

    return (
        <section className='contact-page'>
            <div className="my-ci">
                <h3>Looking to Get in Contact?</h3>
                <p>
                    <ul>Call me: (516) 304-9241</ul>
                    <ul>Email me: timmydolan14@gmail.com</ul>
                    <ul>Or send me a message below!</ul>
                </p>
            </div>
            <div>
                <form className='form'>
                    <div className="form-name mb-3">
                        <label htmlFor="nameFormControlInput">Name</label>
                        <input type="text" className="form-control" id="nameFormControlInput" placeholder="Name:" />
                    </div>
                    <div className="form-email mb-3">
                        <label htmlFor="emailFormControlInput">Email Address</label>
                        <input type="email" name="email" className="form-control" id="emailFormControlInput" placeholder="name@example.com" onChange={handleInputChange} />
                    </div>
                    <div className="form-message mb-3">
                        <label htmlFor="messageFormControlInput">Message</label>
                        <input type="text" name="text" className="form-control" id="messageFormControlInput" rows="3" onChange={handleInputChange}></input>
                    </div>
                    <div className="form-submit-btn mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    );
}