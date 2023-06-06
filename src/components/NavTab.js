import React, { useState } from 'react';
import Project from './Project';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';
import Header from './Header';

export default function Navtab () {
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
          <Header></Header>
          <Project currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
          <Footer></Footer>
        </div>
      );
}