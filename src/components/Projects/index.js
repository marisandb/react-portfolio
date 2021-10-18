import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
        name: `The Chef's Kiss`,
        category: 'Portfolio',
        description: `A website that allows the user to upload, browse, comment, and vote on recipe's.`,
        deployed: `https://rocky-dusk-49928.herokuapp.com/`,
        github: `https://github.com/ksore85/daily-recipes`
    },
    {
        name: `My Mood Tracker`,
        category: 'Portfolio',
        description: `A website that allows the user to track their mood throughout their day.`,
        deployed: `https://zimmermanc6588.github.io/mood-tracker/`,
        github: `https://github.com/zimmermanc6588/mood-tracker`
      },

  ]);
  const [currentPhoto, setCurrentPhoto] = useState();
  const currentPhotos = photos.filter((photo) => photo.category === category);
  
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/Portfolio/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

