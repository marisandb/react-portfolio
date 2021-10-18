import React from "react";


function Resume () {

    return(
       <div>
           <h2> I am proficient in: </h2>
           <ul>
               <li> HTML </li>
               <li> CSS </li>
               <li> JavaScript </li>
               <li> Express.js </li>
               <li> Node.js </li>
               <li> React.js </li>
               <li> SQL </li>
               <li> NOSQL </li>
            </ul>
           <button data-testid="button" type="submit">Dowload Full Resume</button>
       </div>
    );
}

export default Resume;