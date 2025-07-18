import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow,
	faFacebook, faFigma, faHashnode, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import logo from "../myLogos/dafeWhiteTransp.png"
// import { useIsmobile } from "../hooks/useIsmobile"

const socials = [
	{
		icon: faEnvelope,
		url: "mailto: ogagadafetite@gmail.com",
	},
	{
		icon: faGithub,
		url: "https://github.com/DafetiteOgaga",
	},
	{
		icon: faLinkedin,
		url: "https://www.linkedin.com/in/ogagadafetite/",
	},
	{
		icon: faTwitter,
		url: "https://x.com/dafetite_ogaga",
	},
	{
		icon: faFacebook,
		url: "https://web.facebook.com/ogaga01",
	},
	{
		icon: faStackOverflow,
		url: "https://stackoverflow.com/users/19809880/dafetite",
	},
	{
		icon: faMedium,
		url: "https://medium.com/@ogagadafetite",
	},
	{
		icon: faFigma,
		url: "https://www.figma.com/files/team/1371771369221734563/recents-and-sharing/recently-viewed?fuid=1371771366746349296",
	},
	{
		icon: faHashnode,
		url: "https://hashnode.com/@Dafetite",
	},
];

const Header = () => {
	const headerRef = useRef(null);
	const isMobile = useBreakpointValue({ base: true, md: false });
	// const customIsMobile = useIsmobile();

	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const headerElement = headerRef.current;
			if (!headerElement) {
				return;
			}
			if (prevScrollPos > currentScrollPos) {
				headerElement.style.transform = "translateY(0)";
			} else {
				headerElement.style.transform = "translateY(-200px)";
			}
			prevScrollPos = currentScrollPos;
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, []);

	const handleClick = (anchor) => () => {
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};
	return (
	<Box
		position="fixed"
		top={0}
		left={0}
		right={0}
		translateY={0}
		transitionProperty="transform"
		transitionDuration=".3s"
		transitionTimingFunction="ease-in-out"
		backgroundColor="#2c3e50"
		ref={headerRef}
		zIndex={1000}>
		<Box color="white" maxWidth="1280px" margin="0 auto" style={{ color: '#D3D3D3' }}>
		<HStack
			px={isMobile?4:16}
			py={4}
			justifyContent="center"
			alignItems="center">
			{/* <nav>
			<HStack>
				<a
				className="paragraph"
				href="#projects"
				style={{ fontSize: isMobile ? 'sm' : 'md' }}>
				Social Media and links:
				</a>
			</HStack>
			</nav>  */}
			<nav>
				<HStack spacing={{ base: 2.5, md: 5 }} justifyContent={"center"}>
				{/* <HStack><h1 style={{paddingLeft: isMobile?30:0}} className="paragraph">{isMobile?'': */}
					<img src={logo} alt="dafetite ogaga" className={isMobile?"dafetiteLogoMobile":"dafetiteLogo"} />
					{/* }</h1></HStack> */}
					{socials.map(({ icon, url }) => (
						<a
						key={url}
						href={url}
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon className="icons" icon={icon} size={isMobile ? "lg" : "2x"} key={url} />
						</a>
					))}
				</HStack>
			</nav>
			{/* <nav>
			["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]
			</nav> */}
		</HStack>
		</Box>
	</Box>
	);
};

export default Header;
