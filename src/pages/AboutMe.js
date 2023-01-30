// This page will render the About Me page when it is set to active

import React from "react";

import '../styles/pages-css/AboutMe.css';

import imageOfMe from '../images/AboutMe/fresh-grad.jpeg';
import interestImage from '../images/AboutMe/interests-image.JPG'

function AboutMe() {
    return (
        <div className="aboutMyself setVertical">
            <div className="setHorizontal">
                <div className="card">
                    <h3 className="cardHeader">About Me</h3>
                    <p className="fillContent">
                        I'm Ricky Medina, an 18-year-old, ambitious, Full-Stack Web Developer. I'm a fresh graduate from West Wendover High School, 
                        it's been only six months since I graduated and have already completed a Coding Bootcamp from the esteemed college of the University of Utah.
                        Though, this is only the beginning of my journey I am fully prepared to take on any opportunity I am given.
                    </p>
                </div>
                <div>
                    <img className="pictureAboutMe" src={imageOfMe} alt="Ricky Medina after high school graduation"/>
                </div>
            </div>

            <br></br>

            <div className="reversedHorizontal">
                <div className="card leftMargin">
                    <h3 className="cardHeader">My Interest</h3>
                    <p className="fillContent">
                        Through the life I've lived, I've come to understand that people are a big part in my life. Whether these same people have similar or
                        different goals than I do, I always tend to build a positive relationship with those around me and make the most I can with these people.
                        Meeting, building, and savoring these relationships with others is an interest of mine that I value deeply. I enjoy the aspect of meeting different
                        people, understanding their thought processes, and learning from them. I'm a lifelong learner that will not give up a chance to meet others.
                    </p>
                </div>
                    <div>
                        <img className="hobbyImage" src={interestImage} alt="Hobby of meeting new people"/>
                    </div>
            </div>
        </div>
    );
}

export default AboutMe;