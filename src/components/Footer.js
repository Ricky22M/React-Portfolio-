// Will render the footer of the page

// Imports React
import React from "react";

// Imports CSS styling for the footer
import '../styles/comp-css/Footer.css';

// Imports images used in the footer
import GitHub from '../images/Footer/GitHub.png';
import linkedIn from '../images/Footer/linkedIn.png';

// Returns the HTML used in the footer
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

// Exports the footer function
export default Footer;