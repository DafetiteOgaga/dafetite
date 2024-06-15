import { Heading, HStack, Image, Text, VStack, Stack, useBreakpointValue } from "@chakra-ui/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import React from "react"; 
 
const Card = ({ title, description, imageSrc }) => { 
  const isMobile = useBreakpointValue({ base: true, md: false });
   return ( 
     <VStack 
       color="black" 
       backgroundColor="white" 
       cursor="pointer" 
       borderRadius="xl"
       boxShadow="lg"
       transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "xl",
        }}
     > 
       <Image borderRadius="xl" src={imageSrc} alt={title} /> 
       <VStack spacing={{ base: 2, md: 8 }} p={4} alignItems="flex-start"> 
         <HStack justifyContent="space-between" alignItems="center"> 
           <Heading as="h3" size={ isMobile ? 'xs' : 'md' }> 
             {title} 
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize={ isMobile ? 'xs' : 'lg' }> 
           {description} 
         </Text> 
         <HStack spacing={{ base: 4, md: 8 }} alignItems="center"> 
           <p className="paragraph">See more</p> 
           <FontAwesomeIcon icon={faArrowRight} size={ isMobile ? 'xs' : '1x' } /> 
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 
