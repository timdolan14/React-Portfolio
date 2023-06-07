import React from 'react';

export default function Contact() {
    return (
        <section>
            <div className="my-contact-info">
                <p>Want to get into contact?</p>
                <p>
                    <ul>Mobile: (516)304-9241</ul>
                    <ul>Email: timmydolan14@gmail.com</ul>
                    <p>Or send me a message below!</p>
                </p>
            </div>

            <div>
                <form>
                    <div className="form-name mb-3">
                        <label htmlFor="nameFormControlInput">Name</label>
                        <input type="email" className="form-control" id="nameFormControlInput" placeholder="Name:" />
                    </div>
                    <div className="form-email mb-3">
                        <label htmlFor="emailFormControlInput">Email Address</label>
                        <input type="email" className="form-control" id="emailFormControlInput" placeholder="name@example.com" />
                    </div>
                    <div className="form-message mb-3">
                        <label htmlFor="messageFormControlInput">Message</label>
                        <textarea className="form-control" id="messageFormControlInput" rows="3"></textarea>
                    </div>
                </form>
                <div className="form-submit-btn mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div >
        </section>
    );
}