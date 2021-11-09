import React, { useState } from 'react';
import { Heading, Center, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,} from "@chakra-ui/react"
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'


import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <Heading color="#2a9d8f">Contact Me</Heading>
      <Center>
      <Table variant="simple">
      <Tbody>
        <Tr>
          <Td><EmailIcon /> Email:</Td>
          <Td>marisandb@yahoo.com</Td>
        </Tr>
        <Tr>
        <Td><PhoneIcon /> Phone:</Td>
          <Td>608-323-0979</Td>
        </Tr>
      </Tbody>
    </Table>
      </Center>
    </section>
  );
}

export default Contact;
