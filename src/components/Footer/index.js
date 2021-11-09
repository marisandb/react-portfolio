import React from "react";
import { Button } from "@chakra-ui/react"
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {BsStackOverflow} from "react-icons/bs";
function Footer () {

    return(
       <div className="footer flex-row">
            <Button m="5px" type="button" colorScheme="linkedin" leftIcon={<AiFillLinkedin/>}className="button"><a href="https://www.linkedin.com/in/marisa-bartelt-28119b20a/" target="_blank">LinkedIn</a></Button>
            <Button m="5px" type="button" leftIcon={<BsStackOverflow/>} className="button"><a href="https://stackoverflow.com/users/15465628/marisa" target="_blank">Stack Overflow</a></Button>
            <Button m="5px" type="button" leftIcon={<AiFillGithub/>} className="button"><a href="https://github.com/marisandb" target="_blank">Github</a></Button>
       </div>
    );
}

export default Footer;

