import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from  './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: `A compilation of personal and professionaly built websites`,
    },
    {
      name: 'About Me',
      description: `Information about me`,
    },
    {
      name: 'Resume',
      description: `A link to my resume with my qualifications`,
    },
    {
      name: 'Contact Me',
      description: `Fill out this form to contact me via email`,
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About currentCategory={currentCategory}></About>
          </>
        ) : (
            <Contact currentCategory={currentCategory}></Contact>
          )}
      </main>
    </div>
  );
}

export default App;
