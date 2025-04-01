import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box } from "@chakra-ui/react";
import Card from "./Card";

const webapps = [
	{
		title: "Altaviz Support Limited",
		description:
			`A Web Application that manages the workflow for Altaviz Support Limited. A Role based
			Access Control application with support for Custodians, Workshop staff, Engineers, Help Desk
			staff, Supervisors, and Human resource. It is a fast, reliable and effective solution for
			managing the workflow of the company. Created using Django, ReactJS, and MySQL, `,
		url: "https://altaviz-frontend.vercel.app/",
		getImageSrc: () => require("../images/altaviz-support-ltd.png"),
	},
	{
		title: "Article Hive (The WebApp)",
		description:
			`A fully functional online Book club and a perfect place to gain knowledge. Register as a member to
			have access to write and post articles, setup Author profile for yourself and acquire
			popularity. Yes! we publish and showcase your work. Created using Django, Html, CSS,
			Vanilla JavaScript, and MySQL, `,
		url: "https://dafetite.pythonanywhere.com/",
		getImageSrc: () => require("../images/article-hive-app.png"),
	},
]

const versionNumber = require('../../package.json').version;
const mobileapps = [
	{
		title: "Altaviz Support Limited (Mobile App)",
		// title: versionNumber,
		description:
			`A Mobile Application to complete the Altaviz app. It manages the workflow for Altaviz
			Support Limited. Implemented in it are the same features as the Web App such as Role based
			Access Control with support for Custodians, Workshop staff, Engineers, Help Desk staff,
			Supervisors, and Human resource. It is also fast, reliable and effective for managing the
			workflow of the company. Created using Expo(React Native), Django, and MySQL, `,
		url: `https://github.com/DafetiteOgaga/altavizMobileReleases/releases/download/${versionNumber}/altavizMobile-${versionNumber}.apk`,
		getImageSrc: () => require("../images/altaviz_mobile.png"),
	},
]

const websites = [
	{
		title: "TechFlows Engineering",
		description:
			`A tech company that provides solutions to engineering problems including Software
			development, Computer Hardwares, Security solutions, ATM services, Cloud solutions and
			IT trainings. We are a team of professionals that are dedicated to providing the best
			services to our clients. Created using ReactJS`,
		url: "https://dafetiteogaga.github.io/techflows/",
		getImageSrc: () => require("../images/techflows.png"),
	},
	{
		title: "Jimmy Ayodele",
		description:
			`A personal portfolio website for Jimmy Ayodele. A dedicated space showcasing his works,
			projects, achievements, skills, and experiences. This platform highlights his expertise,
			creative journey, and professional accomplishments, providing visitors with insights into
			his	background, technical abilities, and notable contributions. The website also includes
			a contact page for collaboration opportunities. Created using ReactJS`,
		url: "https://dafetiteogaga.github.io/jimmy/",
		getImageSrc: () => require("../images/jimmy_ayodele.png"),
	},
	{
		title: "The Article Hive",
		description:
			`An online Book club and a perfect place to gain knowledge. Register as a member to
			have access to write and post articles, setup Author profile for yourself and acquire
			popularity. Yes! we publish and showcase your work. Created using Html, CSS, and
			Vanilla JavaScript`,
		url: "https://dafetiteogaga.github.io/article-hive/",
		getImageSrc: () => require("../images/article-hive.png"),
	},
	{
		title: "Creonovo Restaurant Website",
		description:
			`An online restaurant and a perfect place in Lagos, Nigeria. Book a reservation, go to
			relax and eat your favorite African meals. Such as Afang, Edikang-Ikong and Atama
			soups with Fufu, Pounded yam, Eba, etc. Created using ReactJS`,
		url: "https://creonovo-restaurant.web.app/",
		getImageSrc: () => require("../images/creonovo-website.png"),
	},
]

const projects = [
	{
	title: "A Creonovo 'Reserve a table' Backend-component feature",
	description:
		`A 'Reserve a table' feature for the creonovo backend website 🔥️.
		Created using Django web framework and Django Rest framework`,
		url: "https://github.com/DafetiteOgaga/creonovo_restaurant-backend-component",
	getImageSrc: () => require("../images/creonovo_restaurant-backend-component.png"),
	},
	{
		title: "Custom Commands",
		description:
		`This project aims to help with the creation of various commands to automate basic
		tasks that are used everyday by users of the Unix-like Environments. Create using
		Python, Bash and C language`,
		url: "https://github.com/DafetiteOgaga/custom_commands",
		getImageSrc: () => require("../images/custom_commands2.png"),
	},
	{
	title: "Creonovo Gardens",
	description:
		`A One-stop garden for the lovers of nature. Come and enjoy the beauty,
		calmness and feel of nature. Created using HTML and CSS`,
		url: "https://github.com/DafetiteOgaga/creonovo-gardens",
	getImageSrc: () => require("../images/creonovo-gardens.png"),
	},
	{
		title: "DSA-LinkedList",
		description:
		`This program is written in C and creates a linked list based on user input.
		Then prints out the elements of the list.S. Created using C language.`,
		url: "https://github.com/DafetiteOgaga/dsa-linkedlist",
		getImageSrc: () => require("../images/dsa-linkedlist.png"),
	},
	{
		title: "Binary Search Game",
		description:
		`This program is a game and aims to demonstrates the working principle of
		Binary Search Algorithm while you have fun with it. Created using Python.`,
		url: "https://github.com/DafetiteOgaga/Binary_search_in_a_game",
		getImageSrc: () => require("../images/Binary_search_in_a_game.png"),
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
		title: "PDF2docx Converter",
		description:
		`Converts pdf files to docx file format. Saves it on your desktop
		as well. Created using Python`,
		url: "https://github.com/DafetiteOgaga/pdf2docx_converter",
		getImageSrc: () => require("../images/pdf2docx Converter.png"),
	},

	{
		title: "Figma Design for My Little Lemon Capstone Project",
		description:
		`Figma prototype design and wireframes for an imaginary online restaurant where you can make
		reservtions for you and your loved ones. A well known place for its delicious dishes.
		Created using Figma`,
		url: "https://www.figma.com/design/Jo78tKGLI9UtpjAV1VFX8w/Capstone-project?node-id=25-378&t=YkVTrjlAuomzVeLG-1",
		getImageSrc: () => require("../images/little-lemon-capstone-project-figma-design.png"),
	},
	{
		title: "The figma design for my imaginary little lemon project",
		description:
		`This is the figma prototype design and wireframes for an imaginary online restaurant well known
		for its delicious dishes. Created using Figma`,
		url: "https://www.figma.com/design/u7zbSHNIFWE0rwz6fZt178/high-fidelity-visual-design?node-id=0-1&t=3uFdohozHKiRJpxq-1",
		getImageSrc: () => require("../images/little-lemon-figma-designs.png"),
	},
];

const ProjectsSection = () => {
	return (
	<FullScreenSection
	backgroundColor="#2f4f4f"
	isDarkBackground
	p={4}
	alignItems="flex-start">

		<h1 className="head-main"
		style={{color: "#e6e6fa",}}>
			My WebApps
		</h1>
		<Box
		display="grid"
		gridTemplateColumns="repeat(2,minmax(0,1fr))"
		gridGap={2}
		style={{paddingBottom: "2rem"}}>
			{webapps.map((project, index) => (
				<a
				key={project.title}
				href={project.url}>
					<Card
					key={project.title}
					title={project.title}
					description={project.description}
					imageSrc={project.getImageSrc()}/>
				</a>
			))}
		</Box>
		{/* ..................................... */}
		<h1 className="head-main"
		style={{color: "#e6e6fa",}}>
			My Mobile Apps
		</h1>
		<Box
		display="grid"
		gridTemplateColumns="repeat(2,minmax(0,1fr))"
		gridGap={2}
		style={{paddingBottom: "2rem"}}>
			{mobileapps.map((project, index) => (
				<a
				key={project.title}
				href={project.url}>
					<Card
					key={project.title}
					title={project.title}
					description={project.description}
					imageSrc={project.getImageSrc()}/>
				</a>
			))}
		</Box>
		{/* ..................................... */}
		<h1 className="head-main"
		style={{color: "#e6e6fa",}}>
			My Websites
		</h1>
		<Box
		display="grid"
		gridTemplateColumns="repeat(2,minmax(0,1fr))"
		gridGap={2}
		style={{paddingBottom: "2rem"}}>
			{websites.map((project, index) => (
				<a
				key={project.title}
				href={project.url}>
					<Card
					key={project.title}
					title={project.title}
					description={project.description}
					imageSrc={project.getImageSrc()}/>
				</a>
			))}
		</Box>
		{/* ..................................... */}
		<h1 className="head-main"
		style={{color: "#e6e6fa",}}>
			My Projects
		</h1>
		<Box
		display="grid"
		gridTemplateColumns="repeat(2,minmax(0,1fr))"
		gridGap={2}>
			{projects.map((project, index) => (
				<a
				key={project.title}
				href={project.url}>
					<Card
					key={project.title}
					title={project.title}
					description={project.description}
					imageSrc={project.getImageSrc()}/>
				</a>
			))}
		</Box>
	</FullScreenSection>

	);
};

export default ProjectsSection;
