import { HStack, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, type=null }) => {
	const isMobile = useBreakpointValue({ base: true, md: false });
	const numOfWords = 15
	const link = (title.split(' ').some(word=>word.toLowerCase()==='(mobile'))?'download it':'see more'
	// console.log({link})
	// console.log(title.split(' '))
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
			style={{objectFit: 'cover', ...(isMobile&&type==='video')?{height: 200}:{}}}
			className="box-photo" />
			<VStack p={isMobile?2:4} alignItems="flex-start">
				{!type &&
					<>
						<HStack justifyContent="space-between" alignItems="center">
								<h1 className="box-main" style={isMobile?{fontSize: 16, textAlign: 'center'}:{}}>{title}</h1>
						</HStack>
						<h1 className="box-sub" style={{color: "#64748b", ...(isMobile?{fontSize: 14}:{})}}>
							{isMobile?(description.split(' ').length>numOfWords)?(description.split(' ').slice(0, numOfWords).join(' ')+'...'):description:description}
						</h1>
					</>}
				<HStack
				alignItems="center"
				h={type==='video'?0:10}
				>
					<p style={{
					color: 'black',
					fontWeight: 'bold',
					fontStyle: 'italic',
					fontSize: isMobile?14:'',
					}} className="paragraph">Click here to {type==='video'?'Watch':link}</p>
					<FontAwesomeIcon icon={faArrowRight} size={ isMobile ? 'xs' : '1x' } />
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Card;
