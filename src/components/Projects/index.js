import React, { useState } from 'react';

const Projects = ({ category }) => {

  const [photos] = useState([
    {
        name: `The Chef's Kiss`,
        category: 'ProjectPics',
        description: `A website that allows the user to upload, browse, comment, and vote on recipe's.`,
    },
    {
        name: `My Mood Tracker`,
        category: 'ProjectPics',
        description: `A website that allows the user to track their mood throughout their day.`,
      },

  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
