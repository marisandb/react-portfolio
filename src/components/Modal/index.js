import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, deployed, github, index  } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`../../assets/Portfolio/${index}.png`)} alt="current category" />
        <p>
        {description}
        <a href="/">{deployed}</a>
        <a href="/">{github}</a>
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
