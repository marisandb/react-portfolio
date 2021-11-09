import React from 'react';
import { Heading, Image, Container, Link, UnorderedList, ListItem, CloseButton} from "@chakra-ui/react"

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, deployed, github, index  } = currentPhoto;

  return (
    <div>
      <Container backgroundColor="#264653">
        <Heading color="#f4a261">{name}</Heading>
        <UnorderedList color="#e9c46a">
          <ListItem>{description} </ListItem>
          <ListItem><Link href={deployed} isExternal> Deployed Link</Link></ListItem>
          <ListItem><Link href={github} isExternal> GitHub Link</Link></ListItem>
        </UnorderedList>
        <CloseButton size="lg" onClick={onClose}/>
      </Container>
    </div>
  );
};

export default Modal;
