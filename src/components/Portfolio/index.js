import React from 'react';
import Projects from '../Projects';
import { Heading, Box } from "@chakra-ui/react"

function Portfolio ({currentCategory}) {
  const { name } = currentCategory;
  return (
    <div>
    <section>
      <Heading ml="10px" color="#264653"> My Work </Heading>
      <Projects category={currentCategory.name}/>
    </section>
    </div>
  );
}
export default Portfolio;