import { HStack, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, type=null }) => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	const numOfWords = isMobile?15:100
	// const link = (title.split(' ').some(word=>word.toLowerCase()==='(mobile'))?'download it':'see more'
	const link = (!type)?'see more':(type==='mobile')?'download':'watch'
	const video = type==='video'
	const mobileOrWeb = type==='mobile'||!type
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
			style={{objectFit: 'cover', ...(isMobile&&video)?{height: 200}:{}}}
			className="box-photo" />
			<VStack p={isMobile?2:4} alignItems="flex-start">
				{(mobileOrWeb) &&
					<>
						<HStack justifyContent="space-between" alignItems="center">
								<h1 className="box-main" style={isMobile?{fontSize: 16, textAlign: 'center'}:{}}>{title}</h1>
						</HStack>
						<h1 className="box-sub" style={{color: "#64748b", fontSize: isMobile?13:15}}>
							{(description?.split(' ').length>numOfWords)?
							(description?.split(' ').slice(0, numOfWords).join(' ')+'...'):
							description}
						</h1>
					</>}
				<HStack
				alignItems="center"
				h={video?0:10}
				>
					<p style={{
					color: 'black',
					fontWeight: 'bold',
					fontStyle: 'italic',
					fontSize: isMobile?14:'',
					}} className="paragraph">Click here to {link}</p>
					<FontAwesomeIcon icon={faArrowRight} size={ isMobile ? 'xs' : '1x' } />
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Card;
