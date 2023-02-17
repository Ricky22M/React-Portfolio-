// Will render the entire profolio

// Imports React and useState object from React
import React, { useState } from 'react';

// Gets all exports from all components and pages and imports them
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from '../pages/AboutMe';
import ContactMe from '../pages/ContactMe';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

// Displays full page of the portfolio
export default function PortfolioContent() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // Seting routes
    const renderActivePage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        } else if (currentPage === 'Projects') {
            return <Projects />;
        } else if (currentPage === 'Resume') {
            return <Resume />;
        } else if ( currentPage === 'ContactMe') {
            return <ContactMe />;
        }
    }

    const renderPageSwitch = (page) => setCurrentPage(page);

    // Used to return the NavBar, the current page, and the footer
    return (
        <div>
            <NavBar currentPage={currentPage} renderPageSwitch={renderPageSwitch} />
            {renderActivePage()}
            <Footer />
        </div>
    );
}