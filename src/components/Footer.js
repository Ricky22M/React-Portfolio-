// Will render the footer of the page

// Imports React
import React from "react";

// Imports CSS styling for the footer
import '../styles/comp-css/Footer.css';

// Imports images used in the footer
import GitHub from '../images/Footer/gitHub.png';
import linkedIn from '../images/Footer/linkedIn.png';
import stackOverFlow from '../images/Footer/stackOF.png';

// Returns the HTML used in the footer
function Footer() {
    return (
        <footer className="text-center setFotter">
            <div className="container p-2">
                <a  className="m-1"
                    href="https://www.linkedin.com/in/ricky-medina-608634244/">
                    <img className="logoSize setMargin" src={linkedIn} alt="Uses LinkedIn logo to send the user to my LinkedIn profile"></img>
                </a>
                <a  className="m-1"
                    href="https://github.com/Ricky22M">
                    <img className="logoSize setMargin" src={GitHub} alt="Uses GitHub logo to send the user to my GitHub profile"></img>
                </a>
                <a  className="m-1"
                    href="https://stackoverflow.com/users/19522844/ricky-m?tab=profile">
                    <img className="logoSize setMargin" src={stackOverFlow} alt="Uses Stack Overflow logo to send the user to my Stack Overflow profile"></img>
                </a>
            </div>
        </footer>
    );
}

// Exports the footer function
export default Footer;