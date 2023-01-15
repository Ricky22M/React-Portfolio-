import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from '../pages/AboutMe';
import ContactMe from '../pages/ContactMe';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

export default function PortfolioContent() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

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

    return (
        <div>
            <NavBar currentPage={currentPage} renderPageSwitch={renderPageSwitch} />
            {renderActivePage()}
            <Footer />
        </div>
    );
}