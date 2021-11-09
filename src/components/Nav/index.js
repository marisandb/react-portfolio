import React from 'react';
import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box} from "@chakra-ui/react"

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    setContactSelected,
  } = props;

  return (
    <header>
    <Box bg="#264653">
    <Heading color="#2a9d8f">
      <a href="/">
        Marisa Bartelt - Full Stack Web Developer
      </a>
    </Heading>
    <nav>
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
    </nav>
    </Box>
  </header>
);
}


export default Nav;