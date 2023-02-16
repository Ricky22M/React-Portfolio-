// This will render the projects age

// importing react
import React from 'react';

// importing CSS file
import '../styles/pages-css/Projects.css'

// importing images from my previous individual projects
import socialNetWork from '../images/Projects/Social-network-api-project.png';
import eCommerceBackend from '../images/Projects/E-commerce-Backedn-project.png';
import employeeTracker from '../images/Projects/Employee-tracker-project.png';
import teamProfileGen from '../images/Projects/Team-Profile-Generator-Screenshot.png';
import weatherDashboard from '../images/Projects/Weather-Dashboard-Webpage.png';
import workDayScheduler from '../images/Projects/Work-Day-Scheduler-project.png';
import passwordGen from '../images/Projects/Password-Generator.png';
import codeQuiz from '../images/Projects/Code-Quiz-project.png';

// importing more images from my previous group projects
import recipePicker from '../images/Projects/Recipe-Picker-project.png';
import musicBox from '../images/Projects/My-Musicbox-project.png';

// Returns projects page
function Projects() {
    return (
        <div className="projectsContainer">
            <h1 className="projectHeader">My Individual Projects</h1>
            <div className="row main d-flex justify-content-evenly">
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Social-Network-API">
                            <img className="projectImages" src={socialNetWork} alt="Shows a demo of the Social Network API project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Social Network API</h5>
                            <p>
                                This Social Network API project is based on the use of MongoDB, which in this case, was able to showcase 
                                a social network application. In this application, a new user can be created to add other users in the 
                                database. All users can make or remove thoughts, friends, and/or reactions.
                            </p>
                            <h6>
                                This project could only be shown through the backend of the application, and therefore could not be deployed.
                                Though if you are interested in this project, please refer to my GitHub repository link <a href='https://github.com/Ricky22M/Social-Network-API'>here</a>. 
                                I showcase the workings of this application through my video walkthrough in my README.
                            </h6>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/E-Commerce-Back-End">
                            <img className="projectImages" src={eCommerceBackend} alt="Shows a demo of the E-Commerce Backend project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>E-Commerce Backend</h5>
                            <p>
                                In this project, I was able to build a backend application with the use of MySQL for an E-Commerce Site.
                                This application allows the user to use GET routes to search for all categories, products, and tags.
                                As the user, you are also able to update a category, product, and tag using its specific ID for its classification.
                                The user is also able to create or delete their categories, products, or tags using the ID for its classification.
                            </p>
                            <h6>
                                This project could only be shown through the backend of the application, and therefore could not be deployed. However, 
                                if you are interested in this project, please refer to my GitHub repository link <a href='https://github.com/Ricky22M/E-Commerce-Back-End'>here</a>.
                                I showcase the workings of this application through my video walkthrough in my README.
                            </h6>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Employee-Tracker">
                            <img className="projectImages" src={employeeTracker} alt="Shows a demo of the Employee Tracker project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Employee Tracker</h5>
                            <p>
                                This project is made to be a command-line application which allows the user to manage a company's employee database. 
                                This application was built using MySQL as the main database to contain all employees and employees' statuses.
                            </p>
                            <h6>
                                This project could only be shown through the command-line of the application's terminal, and therefore could not be deployed.
                                However, if you are interested in this project, please refer to my GitHub repository link <a href='https://github.com/Ricky22M/Employee-Tracker'>here</a>. I
                                showcase the workings of this application through my video walkthrough in my README.
                            </h6>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Team-Profile-Generator">
                            <img className="projectImages" src={teamProfileGen} alt="Shows a demo of the Team Profile Generator project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Team Profile Generator</h5>
                            <p>
                                In this web application, the user can create a team by answering a few questions through the command-line of the application's terminal.
                                This will prompt the user to answer a few questions about their team to create a card for each person entering the team.
                                This application allows users to create a team of their own workforce to have an easier visual representation of their team on paper.
                            </p>
                            <h6>
                                This project could only be shown through the command-line of the application's terminal, and therefore could not be deployed.
                                However, if you are interested in this project, please refer to my GitHub repository link <a href='https://github.com/Ricky22M/Team-Profile-Generator'>here</a>.
                                I showcase the workings of this application through my video walkthrough in my README.
                            </h6>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Weather-Dashboard">
                            <img className="projectImages" src={weatherDashboard} alt="Shows a demo of the Weather Dashboard project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Weather Dashboard</h5>
                            <p>
                                This application is used to show the user the weather forecast for the area they have decided to look up in the search bar.
                                The user will be presented with multiple cards that show the weather for the current day as well as the weather forecast for
                                the next five days.
                            </p>
                            <a href="https://ricky22m.github.io/Weather-Dashboard/">
                                <h6>Click here to visit the deployed link to the web application.</h6>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Work-Day-Scheduler">
                            <img className="projectImages" src={workDayScheduler} alt="Shows a demo of the Work Day Scheduler project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Work Day Scheduler</h5>
                            <p>
                                This project is designed for users who work a 9:00 a.m. to 5:00 p.m. job and they need to constantly schedule their work
                                plans throughout their day for everyday use at work. This project will help those users to stay on track and meet their daily work assignments on time.
                                Here, users can type out their plans or notes for every time block of the day to help them keep try of their tasks.
                                They can also save these written notes or plans and they will not be deleted even after refreshing the page.
                            </p>
                            <a href="https://ricky22m.github.io/Work-Day-Scheduler/">
                                <h6>Click here to visit the deployed link to the web application.</h6>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Password-Generator-">
                            <img className="projectImages" src={passwordGen} alt="Shows a demo of the Password Generator project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Password Generator</h5>
                            <p>
                                In this project, a user can generate a random password off of the user's password preferences. When the user 
                                clicks to generate a new password, the code will then ask the user what kind of characters they would like in their
                                password. After getting the user's input, the code will then filter out what the user did not want and will output
                                a newly, generated random password for the user.
                            </p>
                            <a href="https://ricky22m.github.io/Password-Generator-/">
                                <h6>Click here to visit the deployed link to the web application.</h6>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/Ricky22M/Code-Quiz">
                            <img className="projectImages" src={codeQuiz} alt="Shows a demo of the Coding Quiz project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Coding Quiz</h5>
                            <p>
                                This simple project was made to test the knowledge of the user on simple coding questions. Upon visiting the web application,
                                the user will be presented with a page with a timer to start the quiz and to view the high scores that have been stored locally.
                                As you run through the test, the user will be prompted multiple questions with multiple answers. Each time the user answers the 
                                questions correctly then they will proceed to the next question, and if they answer incorrectly, they will have their timer subtract
                                ten seconds from their current time. The game will also end if the timer reaches zero. At the end of the quiz, the user can enter their 
                                name to show off their new high score.
                            </p>
                            <a href="https://ricky22m.github.io/Code-Quiz/">
                                <h6>Click here to visit the deployed link to the web application.</h6>
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <h1 className="projectHeader">My Group Projects</h1>
            <div className="row main d-flex justify-content-evenly">
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/zacfisher1990/Recipe_Picker">
                            <img className="projectImages" src={recipePicker} alt="Shows a demo of the Recipe Picker group project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>Recipe Picker</h5>
                            <p>
                                In this project, I worked with a team to help build a web application that would help users pick recipes for meals that they had ingredients for. 
                                When the user uses our application we have a "login" and "logout" function to help build a community with our app. We used a third-party API to help 
                                find the recipes for the user and have the users save their recipes to their accounts. My role in this project was to do the front end, more 
                                specifically what I did in this project was build and design the pages for our app while I had my other partner in the front end style the page with CSS. 
                                I also helped to create the routes for each page and some saving functionality for the recipes for each user.
                            </p>
                            <a href="https://recipe--picker.herokuapp.com/">
                                <h6>Click here to visit the deployed link to the web application.</h6>
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-12 col-sm-12 col-lg-12 col-xxl-5 cardBorder">
                    <figure className="setFigure">
                        <a href="https://github.com/brendansingerman/MyMusicBox">
                            <img className="projectImages" src={musicBox} alt="Shows a demo of the My Music Box group project"></img>
                        </a>
                        <figcaption className="figureCaption">
                            <h5>My Music Box</h5>
                            <p>
                                My Music Box is a MERN stack web application that allows users to search for music, favorite songs, and comment on songs.
                                In this project, we used a third-party API to look for music so that users could see their favorite artist's music come 
                                up when they search for their names or songs. Starting this project I was assigned to the backend with another partner, 
                                however, sometime starting this project we had many difficulties with the front end and therefore I went to the front end side.
                                I handled using a new CSS library inside an NPM package with React and helped to design and build the pages in our project.
                            </p>
                            <a href="https://my-music-box-app.herokuapp.com/">
                                <h6>Click here to visit the deployed link to the web application.</h6>
                            </a>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Projects;