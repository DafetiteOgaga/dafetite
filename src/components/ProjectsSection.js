import React, {useRef, useState} from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Card from "./Card";
// import { HStack, Image, VStack, useBreakpointValue } from "@chakra-ui/react";

const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);
const videos = require.context('../altavizVideos', false, /\.(mp4|webm|ogg|png|jpe?g|svg)$/);

const getImage = (name) => (images(`./${name}`))
const getVideo = (name) => (videos(`./${name}`))

const versionNumber = require('../../package.json').version;
const projectheadings = ['Development in progress...', 'My WebApps', 'My Mobile Apps', 'My Websites', 'My Projects', 'Videos'];
const cardContents = {
	inDevelopment: [
		{
			title: "StuddieBudie",
			description:
				`A Web Application designed and developed for students in basic and secondary schools. The
				application covers all the subjects of every class, allowing students to take online tests
				and get graded accordingly. Teachers/Tutors can equally contribute questions to the
				database to improve students learning experiences. Schools/Teachers/Tutors also have a
				scramble question section, which allows the type/upload questions and download a scrambled
				questions and answers in varying types (upto 26 types). Created using Express, MongoDB,
				and ReactJS.`,
			url: "https://dafetiteogaga.github.io/studdiebudie_frontend/",
			getImageSrc: getImage("studdiebudie.png"),
		},
	],
	webapps: [
		{
			title: "Altaviz Support Limited",
			description:
				`A Web Application that manages the workflow for Altaviz Support Limited. A Role based
				Access Control application with support for Custodians, Workshop staff, Engineers, Help Desk
				staff, Supervisors, and Human resource. It is a fast, reliable and effective solution for
				managing the workflow of the company. Created using Django, ReactJS, and MySQL.`,
			url: "https://altaviz-frontend.vercel.app/",
			getImageSrc: getImage("altaviz-support-ltd.png"),
		},
		{
			title: "Article Hive (The WebApp)",
			description:
				`A fully functional online Book club and a perfect place to gain knowledge. Register as a member to
				have access to write and post articles, setup Author profile for yourself and acquire
				popularity. Yes! we publish and showcase your work. Created using Django, Html, CSS,
				Vanilla JavaScript, and MySQL.`,
			url: "https://dafetite.pythonanywhere.com/",
			getImageSrc: getImage("article-hive-app.png"),
		},
	],
	mobileapps: [
		{
			title: "Altaviz Support Limited (Mobile App)",
			// title: versionNumber,
			description:
				`A Mobile Application to complete the Altaviz app. It manages the workflow for Altaviz
				Support Limited. Implemented in it are the same features as the Web App such as Role based
				Access Control with support for Custodians, Workshop staff, Engineers, Help Desk staff,
				Supervisors, and Human resource. It is also fast, reliable and effective for managing the
				workflow of the company. Created using Expo(React Native), Django, and MySQL.`,
			url: `https://github.com/DafetiteOgaga/altavizMobileReleases/releases/download/${versionNumber}/altavizMobile-${versionNumber}.apk`,
			getImageSrc: getImage("altaviz_mobile.png"),
		},
	],
	websites: [
		{
			title: "TechFlows Engineering",
			description:
				`A tech company that provides solutions to engineering problems including Software
				development, Computer Hardwares, Security solutions, ATM services, Cloud solutions and
				IT trainings. We are a team of professionals that are dedicated to providing the best
				services to our clients. Created using ReactJS.`,
			url: "https://dafetiteogaga.github.io/techflows/",
			getImageSrc: getImage("techflows.png"),
		},
		{
			title: "Jimmy Ayodele",
			description:
				`A personal portfolio website for Jimmy Ayodele. A dedicated space showcasing his works,
				projects, achievements, skills, and experiences. This platform highlights his expertise,
				creative journey, and professional accomplishments, providing visitors with insights into
				his	background, technical abilities, and notable contributions. The website also includes
				a contact page for collaboration opportunities. Created using ReactJS.`,
			url: "https://fijimi65.github.io/fijimiayodele/",
			getImageSrc: getImage("jimmy_ayodele.png"),
		},
		{
			title: "The Article Hive",
			description:
				`An online Book club and a perfect place to gain knowledge. Register as a member to
				have access to write and post articles, setup Author profile for yourself and acquire
				popularity. Yes! we publish and showcase your work. Created using Html, CSS, and
				Vanilla JavaScript.`,
			url: "https://dafetiteogaga.github.io/article-hive/",
			getImageSrc: getImage("article-hive.png"),
		},
		{
			title: "Creonovo Restaurant Website",
			description:
				`An online restaurant and a perfect place in Lagos, Nigeria. Book a reservation, go to
				relax and eat your favorite African meals. Such as Afang, Edikang-Ikong and Atama
				soups with Fufu, Pounded yam, Eba, etc. Created using ReactJS.`,
			url: "https://creonovo-restaurant.web.app/",
			getImageSrc: getImage("creonovo-website.png"),
		},
	],
	projects: [
		{
			title: "Custom Commands",
			description:
			`This project aims to help with the creation of various commands to automate basic
			tasks that are used everyday by users of the Unix-like Environments. Create using
			Python, Bash and C language.`,
			url: "https://github.com/DafetiteOgaga/custom_commands",
			getImageSrc: getImage("custom_commands2.png"),
		},
		{
			title: "A Creonovo 'Reserve a table' Backend-component feature",
			description:
				`A 'Reserve a table' feature for the creonovo backend website 🔥️.
				Created using Django web framework and Django Rest framework.`,
				url: "https://github.com/DafetiteOgaga/creonovo_restaurant-backend-component",
			getImageSrc: getImage("creonovo_restaurant-backend-component.png"),
		},
		{
			title: "Creonovo Gardens",
			description:
				`A One-stop garden for the lovers of nature. Come and enjoy the beauty,
				calmness and feel of nature. Created using HTML and CSS.`,
				url: "https://github.com/DafetiteOgaga/creonovo-gardens",
			getImageSrc: getImage("creonovo-gardens.png"),
		},
		{
			title: "DSA-LinkedList",
			description:
			`This program is written in C and creates a linked list based on user input.
			Then prints out the elements of the list.S. Created using C language.`,
			url: "https://github.com/DafetiteOgaga/dsa-linkedlist",
			getImageSrc: getImage("dsa-linkedlist.png"),
		},
		{
			title: "Binary Search Game",
			description:
			`This program is a game and aims to demonstrates the working principle of
			Binary Search Algorithm while you have fun with it. Created using Python.`,
			url: "https://github.com/DafetiteOgaga/Binary_search_in_a_game",
			getImageSrc: getImage("Binary_search_in_a_game.png"),
		},
		{
			title: "Creonovo Restaurant",
			description:
			`An online restaurant well known for its delicious African dishes.
			Created using Django web framework and Django Rest framework.`,
			url: "https://github.com/DafetiteOgaga/creonovo_restaurant",
			getImageSrc: getImage("creonovo_restaurant.png"),
		},
		{
			title: "PDF2docx Converter",
			description:
			`Converts pdf files to docx file format. Saves it on your desktop
			as well. Created using Python.`,
			url: "https://github.com/DafetiteOgaga/pdf2docx_converter",
			getImageSrc: getImage("pdf2docx Converter.png"),
		},

		{
			title: "Figma Design for My Little Lemon Capstone Project",
			description:
			`Figma prototype design and wireframes for an imaginary online restaurant where you can make
			reservtions for you and your loved ones. A well known place for its delicious dishes.
			Created using Figma.`,
			url: "https://www.figma.com/design/Jo78tKGLI9UtpjAV1VFX8w/Capstone-project?node-id=25-378&t=YkVTrjlAuomzVeLG-1",
			getImageSrc: getImage("little-lemon-capstone-project-figma-design.png"),
		},
		{
			title: "The figma design for my imaginary little lemon project",
			description:
			`This is the figma prototype design and wireframes for an imaginary online restaurant well known
			for its delicious dishes. Created using Figma.`,
			url: "https://www.figma.com/design/u7zbSHNIFWE0rwz6fZt178/high-fidelity-visual-design?node-id=0-1&t=3uFdohozHKiRJpxq-1",
			getImageSrc: getImage("little-lemon-figma-designs.png"),
		},
	],
	videos: [
		{
			thumbnail: getVideo("profilePage.png"),
			videoSrc: getVideo("altavizWeb.mp4"),
			title: "Altaviz Web App",
		},
		{
			thumbnail: getVideo("mobileHome.png"),
			videoSrc: getVideo("altavizMobile.mp4"),
			title: "Altaviz Mobile App",
		},
	],
}

const ProjectsSection = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);
	const isMobile = useBreakpointValue({ base: true, md: false });
	const videoRef = useRef(null);
	const [isPortrait, setIsPortrait] = useState(false);

	const handleMetadata = () => {
		const video = videoRef.current;
		if (video) {
		const { videoWidth, videoHeight } = video;
		setIsPortrait(videoHeight > videoWidth);
		}
	};
	// console.log({selectedVideo})
	return (
	<FullScreenSection
	backgroundColor="#2f4f4f"
	isDarkBackground
	p={4}
	alignItems="flex-start">
		{/* ..................................... */}
		{Object.entries(cardContents).map(([contentKey, contentValue], contentIndex) => {
			// console.log({contentKey})
			// console.log({contentValue})
			return (
			<div key={`${contentKey}-${contentIndex}`}>
				<h1 className="head-main"
				style={{color: "#e6e6fa", fontWeight: "bold", }}>
					{projectheadings[contentIndex]}
				</h1>
				<Box
				display="grid"
				gridTemplateColumns={isMobile?"repeat(2,minmax(0,1fr))":"repeat(3,minmax(0,1fr))"}
				gridGap={isMobile?2:10}
				style={{paddingBottom: "2rem"}}>
					{contentValue.map((project, index) => {
						// console.log({project})
						return (
							<div key={`${project.title}-${index}`}
							onClick={projectheadings[contentIndex]==='Videos'?()=>setSelectedVideo(project):undefined}>
								<a
								key={project.title}
								href={project.url}
								target="_blank"
								rel="noopener noreferrer">
									<Card
									key={project.title}
									title={project.title}
									description={project.description}
									imageSrc={project.getImageSrc??project.thumbnail}
									type={projectheadings[contentIndex]==='My Mobile Apps'?'mobile':
										(projectheadings[contentIndex]==='Videos'?'video':null)}
									/>
								</a>
							</div>
					)})}
				</Box>
			</div>
		)})}
		{/* ..................................... */}

		{/* Modal */}
		{selectedVideo && (
        <div
			onClick={() => setSelectedVideo(null)}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100vh",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 999,
			}}
        >
			<div
				onClick={(e) => e.stopPropagation()}
				style={{
				width: isMobile ? "90%" : "70%",
				backgroundColor: "#000",
				borderRadius: "10px",
				overflow: "hidden",
				position: "relative",
				}}
			>
				<video
					ref={videoRef}
					src={selectedVideo.videoSrc}
					controls
					autoPlay
					onLoadedMetadata={handleMetadata}
					style={{
						width: (isPortrait&&isMobile)?"100":isPortrait?"35%":"100%",
						height: "auto",
						objectFit: "cover",
						justifySelf: "center",
					}}
				/>
				<button
					onClick={() => setSelectedVideo(null)}
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
						// background: "#fff",
						border: "none",
						borderRadius: "4px",
						padding: "0.5rem",
						cursor: "pointer",
					}}
				>
					<span style={{
						fontSize: isMobile?12:17,
						border: "1px solid #fff",
						padding: '3px 5px',
						borderRadius: 10,
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						}}>
						Close
					</span>
				</button>
			</div>
        </div>
		)}
	</FullScreenSection>

	);
};

export default ProjectsSection;
