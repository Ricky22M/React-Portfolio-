import React from 'react';
import '../styles/NavBar.css';

function NavBar({ currentPage, renderPageSwitch }) {
    return (
        <header className='headerStyle'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand textStyle nameOnHeader" href="#about" onClick={() => renderPageSwitch}>Ricky Medina</a>
                    <button className="navbar-toggler onTogCollapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='#about' onClick={() => renderPageSwitch} className={currentPage === 'AboutMe' ? 'nav-link activeNav' : 'nav-link textStyle'}>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a href='#projects' onClick={() => renderPageSwitch('Projects')} className={currentPage === 'Projects' ? 'nav-link activeNav' : 'nav-link textStyle'}>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href='#resume' onClick={() => renderPageSwitch('Resume')} className={currentPage === 'Resume' ? 'nav-link activeNav' : 'nav-link textStyle'}>Resume</a>
                            </li>
                            <li className="nav-item">
                                <a href='#contact' onClick={() => renderPageSwitch('ContactMe')} className={currentPage === 'ContactMe' ? 'nav-link activeNav' : 'nav-link textStyle'}>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;