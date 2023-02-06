// Will render the footer of the page

import React from "react";
import '../styles/comp-css/Footer.css';

import GitHub from '../images/Footer/GitHub.png';
import linkedIn from '../images/Footer/linkedIn.png';


function Footer() {
    return (
        <footer className="text-center text-white setFotter">
            <div className="container p-2">
                <a  className="m-1"
                    href="https://www.linkedin.com/in/ricky-medina-608634244/">
                    <img className="linkedInSize setMargin" src={linkedIn} alt="Uses LinkedIn logo to send the user to my LinkedIn profile"></img>
                </a>
                <a  className="m-1"
                    href="https://github.com/Ricky22M">
                    <img className="gitHubSize setMargin" src={GitHub} alt="Uses GitHub logo to send the user to my GitHub profile"></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;