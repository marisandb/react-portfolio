import React from 'react';
import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Center} from "@chakra-ui/react"
import "./style.css"

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    setContactSelected,
  } = props;

  return (
    <header>
    <Box>
      <Center>
        <Heading>
          <h1>
            Marisa Bartelt - Full Stack Web Developer
          </h1>
        </Heading>
      </Center>
    <nav>
      <Center>
      <Breadcrumb>
        <BreadcrumbItem color="#e76f51">
          <BreadcrumbLink href="#about" onClick={() => setContactSelected(false)}>About Me</BreadcrumbLink>
        </BreadcrumbItem>

        {categories.map((category) => (
          <BreadcrumbItem color="#e76f51">
          <BreadcrumbLink onClick={() => {
            setCurrentCategory(category);
            setContactSelected(false);
          }}>
            {category.name}

          </BreadcrumbLink>
          </BreadcrumbItem>
         
         ))}
        <BreadcrumbItem color="#e76f51">
        <BreadcrumbLink onClick={() => setContactSelected(true)}>Contact Me</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      </Center>
    </nav>
    </Box>
  </header>
);
}


export default Nav;