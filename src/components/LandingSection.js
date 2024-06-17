import React from "react"; 
import dafe from "../dafetite.jpeg"
import cv from "./C_Dafetite_Ogaga_SE.pdf"
import styled from "styled-components"

const data = {
  specializations: { title: "Specializations",
        details: `Frontend, Backend, UI/UX, Automation, IT Support`,
      },
  languages: { title: "Languages/Technologies",
        details: `Python, JavaScript(ES6), C, SQL, HTML5, and CSS`,
      },
  frameworks: { title: "Frameworks/Libraries",
        details: `React.JS, Django (Web Framework), Django RESTframework,
                  Bootstrap, and Figma`,
      },
  editors: { title: "Editors",
        details: `VScode, Vim, Nano`,
      },
  shells: { title: "Shells",
      details: `Linux and Windows CLIs,`,
      },
  scripts: { title: "Scripts",
        details: `Python, Bash, Batch, PowerShell`,
      },
  versionControls: { title: "Version Control",
      details: `Git and Github`,
      },
  editors: { title: "Editors",
      details: `VScode, Vim, Nano`,
      },
  msoffice: { title: "Microsoft Office Package",
      details: `Microsoft Word, Microsoft Excel, and Microsoft PowerPoint`,
      },
}

const links = {
  email: { title: "Email",
      url: `mailto: ogagadafetite@gmail.com`,
      linkName: "ogagadafetite@gmail.com",
      },
  projects: { title: "Projects",
      url: `https://github.com/DafetiteOgaga/`,
      linkName: "Click to view on Github",
      },
  certifications: { title: "Certifications",
      url: `https://www.linkedin.com/in/ogagadafetite/details/certifications/`,
      linkName: "Click to view on LinkedIn",
      },
  cv: { title: "Resume",
      url: cv,
      linkName: "Resume",
      },
}

const StyledPhotoBox = styled.div`
  cursor: pointer;
  box-shadow: large;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: xl;
  }
`;

const name = "Dafetite O. Ogag";  
const LandingSection = () => ( 
  <div className="pad display">
     <StyledPhotoBox> 
       <img 
       className="photo"
        src={dafe}
         alt="Dafetite" 
         /> 
     </StyledPhotoBox> 

     <div 
      alignItems="start"
      spacing={0}
      > 
      <h1 className="head-main"
        style={{
        fontWeight: "bold",
        color: "#e6e6fa",
      }}>
        Hello, I am <span style={{color: "#00ced1"}}>{name}</span></h1>
      {Object.values(data).map((value, index) => {
        return(
          <h1 className="head-sub"
          key={index}
          style={{
            fontWeight: "bold",
            color: "#e6e6fa",
          }}>
            <span style={{color: "#90ee90"}}>{value.title.toUpperCase()}:</span> {value.details}
          </h1>
        )})}
      {Object.values(links).map(( value, index ) => ( 
        <h1 className="head-sub"
        key={index}
          style={{
          fontWeight: "bold",
          color: "#e6e6fa",
          }}>
          <span style={{color: "#90ee90"}}>{value.title.toUpperCase()}: </span> 
          <a 
            key={index} 
            href={value.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{textDecoration: "underline"}}> 
            {value.linkName}
          </a> 
        </h1>
      ))} 
     </div> 
 </div>
); 
 
export default LandingSection;
