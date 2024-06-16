import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const projects = [ 
 { 
   title: "Creonovo Website Restaurant", 
   description: 
     `An online restaurant and a perfect place to go eat your favorite African meals.
     Created using ReactJS`, 
    url: "https://creonovo-restaurant.web.app/",
   getImageSrc: () => require("../images/creonovo-website.png"), 
 }, 
 { 
   title: "A Creonovo 'Reserve a table' Backend-component feature", 
   description: 
     `A 'Reserve a table' feature for the creonovo backend website 🔥️.
     Created using Django web framework and Django Rest framework`, 
     url: "https://github.com/DafetiteOgaga/creonovo_restaurant-backend-component",
   getImageSrc: () => require("../images/creonovo_restaurant-backend-component.png"), 
 }, 
 { 
    title: "Creonovo Restaurant", 
    description: 
      `An online restaurant well known for its delicious African dishes.
      Created using Django web framework and Django Rest framework`, 
      url: "https://github.com/DafetiteOgaga/creonovo_restaurant",
    getImageSrc: () => require("../images/creonovo_restaurant.png"), 
  }, 
 { 
   title: "Creonovo Gardens", 
   description: 
     `A One-stop garden for the lovers of nature.
     Created using HTML and CSS`, 
     url: "https://github.com/DafetiteOgaga/creonovo-gardens",
   getImageSrc: () => require("../images/creonovo-gardens.png"), 
 }, 
]; 
 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#2f4f4f" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start"> 
     
     <h1 className="head-main"
     style={{color: "#e6e6fa",}}> 
       My Projects 
     </h1> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8}> 
       {projects.map((project, index) => ( 
         <a
         key={project.title}
         href={project.url}>
          <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           imageSrc={project.getImageSrc()}/></a>
           ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default ProjectsSection;
