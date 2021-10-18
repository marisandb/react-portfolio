import React from "react";


function Footer () {

    return(
       <div className="footer flex-row">
            <button type="button" className="button"><a href="https://stackoverflow.com/users/15465628/marisa" target="_blank">Stack Overflow</a></button>
            <button type="button" className="button"><a href="https://www.linkedin.com/in/marisa-bartelt-28119b20a/" target="_blank">LinkedIn</a></button>
            <button type="button" className="button"><a href="https://github.com/marisandb" target="_blank">Github</a></button>
       </div>
    );
}

export default Footer;