// This will render the contact me page

// Imports React and useState object from React
import React, { useState } from 'react';

// Imports CSS styling for this page
import '../styles/pages-css/ContactMe.css';

// Imports helper to validate email
import { validateEmail } from '../utils/verifyForm';

// Returns Contact Me page
function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // This will handle any of the input that has been changed or affected in the texboxes
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    // This will inform the user that their input has errors
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid or missing');
            return;
        }
        
        if (!userName) {
            setErrorMessage('Please provide your name in the textbox');
            return;
        }
        
        if (!message) {
            setErrorMessage('Please provide the reason of contact in the textbox below');
            return;
        } else {
            setErrorMessage('Thank you for reaching out! We will be in contact soon!');
        }

        setUserName('');
        setMessage('');
        setEmail('');
    }

    // This will return the Contact Me page in HTML
    return (
        <div className='contactContainer'>
            <h2 className='contactHeader d-flex justify-content-center'>Contact Me!</h2>
            <form className='contactForm row d-flex justify-content-center'>
                <div className='mb-3 pb-4'>
                    <input
                        value={email}
                        name='email'
                        type='email'
                        onChange={handleInputChange}
                        className="form-control"
                        id="email"
                        placeholder='Please Enter Your Email Here'>
                    </input>
                </div>
                <div className='mb-3 pb-4'>
                    <input
                        value={userName}
                        name='userName'
                        type='text'
                        onChange={handleInputChange}
                        className="form-control"
                        id="userName"
                        placeholder='Please Enter Your Name Here'>
                    </input>
                </div>
                <div className='mb-3 pb-4'>
                    <input
                        value={message}
                        name='message'
                        type='text'
                        onChange={handleInputChange}
                        className="form-control"
                        id="message"
                        placeholder='Please Provide Reason of Contact Here'>
                    </input>
                </div>
                <button type='submit' className='btn btn-dark' id="contactSubmit" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div className='d-flex justify-content-center pt-3'>
                    <p className='text-danger'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

// Exports the Form function
export default Form;