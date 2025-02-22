import { HStack, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
				}}>
			 {/* <Image borderRadius="xl" src={imageSrc} alt={title} />  */}
			 <img
			 src={imageSrc}
			 alt={title}
			 className="box-photo" />
			 <VStack p={4} alignItems="flex-start">
				 <HStack justifyContent="space-between" alignItems="center">
						 <h1 className="box-main">{title}</h1>
				 </HStack>
				 <h1 className="box-sub" style={{color: "#64748b"}}>
					 {description}
				 </h1>
				 <HStack alignItems="center">
					 <p style={{
						color: 'black',
						fontWeight: 'bold',
					 }} className="paragraph">Click here to see more</p>
					 <FontAwesomeIcon icon={faArrowRight} size={ isMobile ? 'xs' : '1x' } />
				 </HStack>
			 </VStack>
		 </VStack>
	 );
};

export default Card;
