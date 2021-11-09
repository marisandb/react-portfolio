import React from "react";
import { Heading, ListItem, Button, UnorderedList, Center} from "@chakra-ui/react"

function Resume () {
const link = "https://docs.google.com/document/d/1ll7l9QNPNN-B6B7QjztGFvHVe8LUcibsvgvXOGY-IrY/view"
    return(
       <div>
            <Center>
            <Heading borderStyle="solid" borderBottom="2px" borderBottomColor="#f4a261" color="#e9c46a"> I am knowledgable in: </Heading>
            </Center>
            <Center>
            <UnorderedList>
                <ListItem> HTML </ListItem>
                <ListItem> CSS </ListItem>
                <ListItem> JavaScript </ListItem>
                <ListItem> Express.js </ListItem>
                <ListItem> Node.js </ListItem>
                <ListItem> React.js </ListItem>
                <ListItem> SQL </ListItem>
                <ListItem> NoSQL </ListItem>
                <ListItem> GraphQL </ListItem>
                </UnorderedList>
            </Center>
            <Center>
           <Button backgroundColor="#f4a261"m="15px"> 
           <a href={link}>View My Full Resume</a>
            </Button>
            </Center>
       </div>
    );
}

export default Resume;