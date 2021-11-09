import React, { useState } from 'react';
import Modal from '../Modal';
import { Image, Box, HStack} from "@chakra-ui/react"

const Projects = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
        name: `My Mood Tracker`,
        category: 'Portfolio',
        description: `A website that allows the user to track their mood throughout their day.`,
        deployed: `https://zimmermanc6588.github.io/mood-tracker/`,
        github: `https://github.com/zimmermanc6588/mood-tracker`
      },
    {
        name: `The Chef's Kiss`,
        category: 'Portfolio',
        description: `A website that allows the user to upload, browse, comment, and vote on recipe's.`,
        deployed: `https://rocky-dusk-49928.herokuapp.com/`,
        github: `https://github.com/ksore85/daily-recipes`
    },
    {
      name: `Shop-Shop`,
      category: 'Portfolio',
      description: `A functional ecommerce website.`,
      deployed: `https://gory-zombie-50794.herokuapp.com/`,
      github: `https://github.com/marisandb/shop-shop`
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
        <Box boxSize="lg">
          <HStack>
        {currentPhotos.map((image, i) => (
          <Image
            src={require(`../../assets/Portfolio/${i}.png`).default}
            alt={image.name}
            onClick={() => toggleModal(image, i)}
            key={image.name}
            m="10px" p="5px" border="5px" borderColor="#2a9d8f" borderStyle="solid"
          />
        ))}
        </HStack>
        </Box>  
    </>
  );
};

export default Projects;

