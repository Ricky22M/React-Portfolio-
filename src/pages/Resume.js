// This page will render the resume page

// Imports React
import React from "react";

// Imports CSS for the resume page
import '../styles/pages-css/Resume.css';

// need to add a downloadable resume file document
import resume from '../resume/RickyMedinaResume.pdf';

// Returns the content on the Resume page
function Resume() {
    return(
        <div className="resumeContainer">
            <div>
                <h2 className="header">
                    Coding Proficiencies
                </h2>
                <div className="contentBody">
                    <ul className="row main d-flex justify-content-between codeList">
                        <li className="col-2 languageItem">
                            Git
                        </li>
                        <li className="col-2 languageItem">
                            HTML5
                        </li>
                        <li className="col-2 languageItem">
                            CSS
                        </li>
                        <li className="col-2 languageItem">
                            JavaScript
                        </li>
                        <li className="col-2 languageItem">
                            Node.JS
                        </li>
                        <li className="col-2 languageItem">
                            Express.JS
                        </li>
                        <li className="col-2 languageItem">
                            SQL
                        </li>
                        <li className="col-2 languageItem">
                            MongoDB
                        </li>
                        <li className="col-2 languageItem">
                            GraphQL
                        </li>
                        <li className="col-2 languageItem">
                            React
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="header">
                    Current Employment
                </h2>
                <div className="contentCard">
                    <h4>Big 5 Sporting Goods Sales Associate</h4>
                    <h6>July 2022 - Current</h6>
                    <div className="contentBody">
                        <ul className="row main d-flex justify-content-evenly">
                            <li>
                                I proform sales and service throughout the store and ensure a productive shopping experience for all customers.
                            </li>
                            <li>
                                Other responsibilities include, but are not limited to, directing customers, answering telephones, providing product descriptions, 
                                proposing add-on sales to customers, checking and retrieving merchandise from storage areas, cleaning, restocking, 
                                and organizing merchandise on the sales floor.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="header">
                    Education
                </h2>
                <div className="contentCard">
                    <h4>Graduated from the University of Utah</h4>
                    <h6>July 2022 - January 2023</h6>
                    <div className="contentBody">
                        <ul className="row main d-flex justify-content-evenly">
                            <li>
                                A 24-week intestive bootcamp program focused on programming skills.
                            </li>
                            <li>
                                Engaged with teams to build and code an application together to gain team-working experience.
                            </li>
                            <li>
                                Learned to use cloud based technologies such as GitHub, Heroku, etc.
                            </li>
                            <li>
                                Learned to build a reactive, responive, and accessible website.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contentCard">
                    <h4>Graduated from West Wendover High School</h4>
                    <h6>Graduated July 2022</h6>
                    <div className="contentBody">
                        <ul className="row main d-flex justify-content-evenly">
                            <li>
                                Learned to work most effectively with all different kinds of people giving me better perspectives of strategy.
                            </li>
                            <li>
                                Learned to prioritize tasks and manage my time adequately.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="downloadResume">
                <a href={resume}><button className="resumeButton" type="button">Download My Resume</button></a>
            </div>
        </div>
    );
}

export default Resume;