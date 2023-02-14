// This page will render the resume page

// Imports React
import react from "react";

// Imports CSS for the resume page
import '../styles/pages-css/Resume.css';

// need to add a downloadable resume file document
import resume from '../resume/'

// Returns the content on the Resume page
function Resume() {
    return(
        <div className="resumeContainer">
            <div>
                <h2 className="header">
                    Coding Languages
                </h2>
                <div className="contentBody">
                    <ul className="row main d-flex justify-content-evenly codeList">
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                        <li className="col-2 languageItem">
                            Add language HERE
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className="header">
                    Current Employment
                </h2>
                <div className="contentCard">
                    <h4>official title here</h4>
                    <h6>2022 - Current</h6>
                    <div className="contentBody">
                        <ul className="row main d-flex justify-content-evenly">
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                Certifications: <ul>
                                    <li>Full-Stack Web Developer</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="header">
                    Previous Employment
                </h2>
                <div className="contentCard">
                    <h4>official job title</h4>
                    <h6>from when to when</h6>
                    <div className="contentBody">
                        <ul className="row main d-flex justify-content-evenly">
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contentCard">
                    <h4>official job title</h4>
                    <h6>from when to when</h6>
                    <div className="contentBody">
                        <ul className="row main d-flex justify-content-evenly">
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
                            </li>
                            <li>
                                A brief description of what we do at our current employment
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