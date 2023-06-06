import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Container () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Contact />;
      };

      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}