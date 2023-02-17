// This page will render the About Me page when it is set to active

// Imported React
import React from "react";

// Imports CSS Styling for this page
import '../styles/pages-css/AboutMe.css';

// Imports all images used for the About Me page
import imageOfMe from '../images/AboutMe/fresh-grad.jpeg';
import interestImage from '../images/AboutMe/interests-image.JPG';
import teamPicture from '../images/AboutMe/teamPicture.JPG';
import outGoingPicture from '../images/AboutMe/outGoing.jpg';

// Returns all HTML for the About Me page
function AboutMe() {
    return (
        <div className="aboutMyself setVertical">
            <div className="setHorizontal rightMarign">
                <div className="cardContent">
                    <h3 className="cardHeader">About Me</h3>
                    <p className="customText">
                        I'm Ricky Medina, an 18-year-old, ambitious, Full-Stack Web Developer. I'm a fresh graduate from West Wendover High School, 
                        it's been only six months since I graduated and have already completed a Coding Bootcamp from the esteemed college of the University of Utah. 
                        I've been actively learning about software development for the past two years now, and I'm finally getting into the groove of being a Full-Stack Software Developer.
                        While I spent my time learning from the University of Utah, I have done projects which demonstrate my abilities as a Full-Stack Software Developer.
                        Though, this is only the beginning of my journey I am fully prepared to take on any opportunity I am given.
                    </p>
                </div>
                <div className="imageContainer aboutMeSecImages">
                    <img className="pictureAboutMe" src={imageOfMe} alt="Ricky Medina after high school graduation"/>
                    <img className="happyRicky" src={outGoingPicture} alt="Having fun at a game"/>
                </div>
            </div>
            
            <div className="reversedHorizontal">
                <div className="cardContent leftMargin">
                    <h3 className="cardHeader">My Interest</h3>
                    <p className="customText">
                        Through the life I've lived, I've come to understand that people are a big part in my life. Whether these same people have similar or
                        different goals than I do, I always tend to build a positive relationship with those around me and make the most I can with these people.
                        Meeting, building, and savoring these relationships with others is an interest of mine that I value deeply. I enjoy the aspect of meeting different
                        people, understanding their thought processes, and learning from them. I'm a lifelong learner that will not give up a chance to meet others.
                    </p>
                </div>
                <div className="imageContainer interestSecImages">
                    <img className="teamWorkPicture" src ={teamPicture} alt="Team with plaques of acheivements"/>
                    <img className="hobbyImage" src={interestImage} alt="Hobby of meeting new people"/>
                </div>
            </div>
        </div>
    );
}

// Exports AboutMe function
export default AboutMe;