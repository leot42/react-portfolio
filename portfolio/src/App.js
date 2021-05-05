import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Resume from './components/Resume'
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Photos of projects',
    },
    // { name: 'about', description: 'Portraits of people in my life' },
    // { name: 'food', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  // const [navState] = useState(['About Me', 'Contact', 'Resume', 'Portfolio']);
  const [currentPage, handlePageChange] = useState('About');

  // const [currentNavState, setNavState] = useState(navState[0]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    //
   switch (currentPage) {
    //  case 'Home': return <Home/>;
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
          // YOUR CODE HERE
          //
          renderPage(currentPage)

        }
      </div>
    </div>
  );

}

export default App;
