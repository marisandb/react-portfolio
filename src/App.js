import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from  './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  const [categories] = useState([
    {
      name: `Portfolio`,
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <ChakraProvider>
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
            <About />
            <Portfolio currentCategory={currentCategory} />
            <Resume />
          </>
        ) : (
            <Contact />
          )}
      </main>
    </div>
        <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
