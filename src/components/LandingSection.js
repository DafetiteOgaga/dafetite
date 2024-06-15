import React from "react"; 
import { Avatar, Heading, VStack, Image, Text } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
import dafe from "../dafetite.jpeg"
import cv from "./C_Dafetite_Ogaga_SE.pdf"

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
const name = "Dafetite O. Ogaga";  
const LandingSection = () => ( 
 <FullScreenSection 
    style={{paddingTop: "7rem"}}
    display="grid"
    gridTemplateColumns=".8fr 1fr"
    isDarkBackground 
    backgroundColor="#68859c"
    p={8}>
     <VStack
      spacing={{ base: 2, md: 4 }}> 
       <Image 
        borderRadius={{ base: 15, md: 30 }}
        border="3px solid #34495e"
        src={dafe}
         alt="Dafetite" 
         cursor="pointer" 
       boxShadow="lg"
       transition="all 0.3s ease"
      //  width={{ base: "100px", sm: "150px", md: "200px", lg: "250px", xl: "300px" }}
        _hover={{
          transform: "translateY(-10px)",
          boxShadow: "xl",
        }}/> 
     </VStack> 

     <VStack 
      alignItems="start"
      spacing={0}> 
      <h1 className="head-main"
        style={{
        // fontSize: "2.7rem",
        fontWeight: "bold",
        color: "#e6e6fa",
      }}
        >Hello, I am <span style={{color: "#00ced1"}}>{name}</span></h1>
      {Object.values(data).map((value, index) => {
        return(
          <h1 className="head-sub"
          key={index}
          style={{
            // fontSize: "1.1rem",
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
          // fontSize: "1.1rem",
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
     </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;
