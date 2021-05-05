import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Resume from './components/Resume'
import ContactForm from './components/Contact';
import Home from './components/Home'
import Footer from './components/Footer'


function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    //Switch statement that will return the appropriate component of the 'currentPage'
   switch (currentPage) {
     case 'Home': return <Home/>;
     case 'About': return <About/>;
     case 'Gallery': return <Gallery/>;
     case 'Contact': return <ContactForm/>;
     case 'Resume': return <Resume/>;
     default:
       break;
   }
  };
  
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)

        }
      </div>
      <Footer/>
    </div>
  );

}

export default App;
