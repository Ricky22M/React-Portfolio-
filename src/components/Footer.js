// Will render the footer of the page

import React from "react";
import '../styles/comp-css/Footer.css';

// import GitHub from '../images/Footer/GitHub.png';
// import linkedIn from '../images/Footer/linkedIn.png';


function Footer() {
    return (
        <footer className="bg-light text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                <a  className="btn btn-primary btn-floating m-1"
                    href="#!"
                    role="button">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a  className="btn btn-primary btn-floating m-1"
                    href="#!"
                    role="button">
                    <i className="fab fa-twitter"></i>
                </a>
                <a  className="btn btn-primary btn-floating m-1"
                    href="#!"
                    role="button">
                    <i className="fab fa-google"></i>
                </a>
                <a  className="btn btn-primary btn-floating m-1"
                    href="#!"
                    role="button">
                    <i className="fab fa-instagram"></i>
                </a>
                <a  className="btn btn-primary btn-floating m-1"
                    href="#!"
                    role="button">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a  className="btn btn-primary btn-floating m-1"
                    href="#!"
                    role="button">
                    <i className="fab fa-github"></i>
                </a>
                </section>
            </div>
            <div className="text-center, 0, 0.2);">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
}

export default Footer;