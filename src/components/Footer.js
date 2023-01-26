// Will render the footer of the page

import React from "react";
import '../styles/comp-css/Footer.css';

import GitHub from '../images/Footer/GitHub.png';
import linkedIn from '../images/Footer/linkedIn.png';


function Footer({ }) {
    return (
        <div className="setFooter">
            <a target ='_blank' href="https://github.com/Ricky22M"><img className="setMargin logoSize" src={GitHub} alt='GitHub logo used to send the user to my GitHub profile'></img></a>
            <a target ='_blank' href="https://www.linkedin.com/in/ricky-medina-608634244/"><img className="setMargin logoSize" src={linkedIn} alt='LinkedIn logo used to send the user to my LinkedIn profile'></img></a>
        </div>
    );
}

export default Footer;