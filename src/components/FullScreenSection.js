import * as React from "react"; 
import { VStack } from "@chakra-ui/react"; 
 
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => { 
 return ( 
   <VStack 
     backgroundColor={boxProps.backgroundColor} 
     color={isDarkBackground ? "white" : "black"} 
   > 
     <VStack maxWidth="1280px" {...boxProps}> 
       {children} 
     </VStack> 
   </VStack> 
 ); 
}; 
 
export default FullScreenSection;
