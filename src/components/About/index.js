import React from 'react';
import coverImage from "../../assets/AboutMe.jpg";


function About() {
  return (
    <section className="my-5">
        <img src={coverImage} className="about-me" alt="cover" />
        <h1 id="about">Who am I?</h1>
        <p>
        For five years I worked in animal welfare before I made a career jump and enrolled in a 6 month intensive UW Coding Bootcamp. 
        I now have experience in the following programs: HTML, CSS, JavaScript, Express.js, Node.js, SQL, NOSQL, React.js and more. I am also equipped with the
        ability to learn a wide variety of coding languages. I enjoy front-end developing but I am capable of working full-stack.
        </p>
    </section>
  );
}

export default About;