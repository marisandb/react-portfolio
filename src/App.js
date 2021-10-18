import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from  './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'About Me', description: 'Short description about Marisa B' },
    { name: 'Resume', description: 'My qualifications as an employee' },
    { name: 'Portfolio', description: 'My personal and professional projects' },
    { name: 'Contact', desription: 'Contact me with any questions/comments.'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {currentCategory.name === "Portfolio" && <Portfolio currentCategory={currentCategory}></Portfolio>}
        {currentCategory.name === "About Me" &&  <About currentCategory={currentCategory}></About> }
        {currentCategory.name === "Resume" &&  <Resume currentCategory={currentCategory}></Resume>}
        {currentCategory.name === "Contact" &&  <Contact currentCategory={currentCategory}></Contact>}

        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
