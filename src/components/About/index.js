import React from 'react';
import coverImage from "../../assets/AboutMe.jpg";
import { Image, Heading, Container, Box, Center } from "@chakra-ui/react"
import "./style.css"

function About() {
  return (
    <section id="about">
    <Center>
        <Image  m="20px" boxSize="250px" objectFit="cover"src={coverImage} className="about-me" alt="cover" />
        <Box className="my-5">
        <Container border="5px" borderColor="#f4a261" borderStyle="solid">
        <Heading>Who am I?</Heading>
        <p>
        The majority of my working career has been spent in animal welfare, until recently when I enrolled in a 6 month coding bootcamp through UW-Extension. 
        In those 6 months I learned a variety of coding languages but most importantely I learned how to think like a web developer. 
        The course taught me how to problem solve, how to write clean code, and how to read documentation so that I can find answers to my coding problems.
        </p>
        </Container>
        </Box>
    </Center>
    </section>
  );
}

export default About;