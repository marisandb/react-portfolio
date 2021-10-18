import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, deployed, github, index  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/${category}/${index}.png`)} alt="current category" />
        <p>
        {description}
        {deployed}
        {github}
        </p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
