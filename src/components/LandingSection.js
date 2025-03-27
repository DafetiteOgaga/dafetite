import React, {useState} from "react";
import dafe from "../dafetite.jpeg"
import cv from "./Dafetite_Ogaga.pdf"
import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";

const summary = {
	one: `I am a highly skilled Software and Automation Engineer with expertise
			in software	development, IT support, and technical engineering. My skills
			span frontend and backend development, using technologies like Python,
			JavaScript (ES6), SQL, C, HTML5, and CSS, alongside frameworks such
			as React.js, Django, and Django REST Framework. Projects like Altaviz
			Support Limited, a software solution that manages the workflow for the
			company, bringing all the departments in sync, Article Hive, a
			platform for readers and authors, and Creonovo Restaurant, a modern
			dining solution, highlight my ability to build functional, user-friendly
			applications.`,
	two: `In automation, I leverage Python, Bash, and PowerShell to streamline
			workflows and optimize processes. My IT support experience has
			equipped me to solve complex technical challenges while ensuring a
			positive user experience. Additionally, I have worked in DevOps,
			focusing on system administration, configuration management, and
			containerization with tools like Docker and Kubernetes.`,
	three: `As a Customer Service and ATM Engineer, I have managed advanced hardware
			and software systems while maintaining exceptional service delivery.
			This blend of technical expertise and communication skills defines my
			professional approach.`,
	four: `Certified by Meta, Google, IBM, and ALX Africa, I am committed to
			continuous learning in areas like IT Automation, Advanced React, and
			UX/UI Design. I thrive in collaborative environments, using technology
			to deliver impactful solutions and drive innovations.`

}
const data = {
	specializations: {
		title: "Specializations",
			// details: `Frontend, Backend, UI/UX, Automation, IT Support`,
		details: {
			frontend: {
				spec: 'Frontend',
				info: `Creating responsive, intuitive, and aesthetically
						pleasing user interfaces using React.js, Bootstrap,
						Figma, HTML5 and CSS.`
			},
			backend: {
				spec: 'Backend',
				info: `Developing robust and secure APIs and web
						applications using Django, Django REST Framework,
						and SQL for database management.`
			},
			uiux: {
				spec: 'UI/UX',
				info: `Expertise in translating complex requirements into
						seamless user experiences through Figma-based
						prototypes and wireframes.`
			},
			automationAndITSUpport: {
				spec: 'Automation and IT Support',
				info: `Designing scripts and automations using Python,
						Bash, and PowerShell for improved system
						performance and operational efficiency.`
			},
		},
	},
	project: {
		title: "Notable Projects",
			// details: `Frontend, Backend, UI/UX, Automation, IT Support`,
		details: {
			altavizSUpportLtd: {
				spec: 'Altaviz Support Limited',
				info: `Altaviz, a scalable web application for managing ATM sales, support, and services.
						Developed with Django for the backend with custom authentication, password reset workflows
						(using Brevo API), and advanced caching strategies. Built an intuitive React frontend
						with responsive design, reusable components, and dynamic features like dropdown
						notifications and form handling.

						Integrated RESTful APIs for seamless communication and deployed on PythonAnywhere and
						Vercel with serverless functions. Delivered key features such as dynamic role management
						and soft delete mechanisms.

						Altaviz showcases my expertise in full-stack development, API integration, and deploying
						innovative, user-focused solutions.`
			},
			articleHive: {
				spec: 'Article Hive',
				info: `A web platform allowing users to read and create
						articles, view author profiles, and interact with
						an intuitive content management system, make comments
						on articles and get author response, email notification for
						events such as sign up, first comment, password reset, etc.
						Built with HTML, CSS, Javascript and Django REST Framework.`
			},
			creonovoRestaurant: {
				spec: 'Creonovo Restaurant',
				info: `Built a dynamic restaurant management system with
						features for menu customization, order tracking,
						and customer feedback integration.`
			},
			customCmds: {
				spec: 'Custom Commands',
				info: `A collection of tailored upto 70+ Bash and Python commands
						to automate routine tasks, improving workflow
						efficiency.`
			},
			PDF2Docs: {
				spec: 'PDF2Docs',
				info: `Engineered a powerful tool to convert PDF files
						into editable Word documents, leveraging
						automation to simplify document handling.`
			},
			dasLinkedList: {
				spec: 'DSA-LinkedList',
				info: `Developed a data structure and algorithms library
						for linked list operations to aid developers in
						mastering DSA concepts.`
			},
			binarySearchGame: {
				spec: 'Binary Search Game',
				info: `Created an engaging gamified learning tool to
						teach binary search algorithms interactively.`
			},
		},
	},
	techExpertise: {
		title: "Technical Expertise",
		details: {
			langAndTech: {
				spec: 'Languages/Technologies',
				info: `Python, JavaScript (ES6), C, SQL, HTML5, CSS`
			},
			FrameWAndLib: {
				spec: 'Frameworks/Libraries',
				info: `React.js, Django, Django REST Framework, Bootstrap, Figma`
			},
			versionControl: {
				spec: 'Version Control',
				info: `Git and GitHub`
			},
			editors: {
				spec: 'Editors',
				info: `Visual Studio Code, Vim, Nano`
			},
			scripting: {
				spec: 'Scripting',
				info: `Python, Bash, Batch, PowerShell`
			},
			shells: {
				spec: 'Shells',
				info: `Linux CLI, Windows CLI`
			},
			otherTools: {
				spec: 'Other Tools',
				info: `Microsoft Office Suite (Word, Excel, PowerPoint)`
			},
		},
	},
}

const links = {
	email: { title: "Email",
		url: `mailto: ogagadafetite@gmail.com`,
		linkName: "ogagadafetite@gmail.com",
		},
	projects: { title: "Projects (with codes)",
		url: `https://github.com/DafetiteOgaga/`,
		linkName: "View on Github",
		},
	certifications: { title: "Certifications",
		url: `https://www.linkedin.com/in/ogagadafetite/details/certifications/`,
		linkName: "View on LinkedIn",
		details: {
			fe: {
				spec: 'Front-End (Meta)',
				info: 'Specialization in Front-End Development, including modern web technologies.',
			},
			be: {
				spec: 'Back-End (Meta)',
				info: 'Specialization in Back-End Development, including server-side frameworks and databases.',
			},
			react: {
				spec: 'Advanced React (Meta)',
				info: 'Comprehensive knowledge of React for building dynamic web applications.',
			},
			uiux: {
				spec: 'Principles of UX/UI Design (Meta)',
				info: 'Expertise in designing user-centered interfaces with strong UX principles.',
			},
			htmlcss: {
				spec: 'HTML and CSS in depth (Meta)',
				info: 'Proficiency in building responsive and accessible web pages using HTML and CSS.',
			},
			js: {
				spec: 'Programming with JavaScript (Meta)',
				info: 'In-depth knowledge of JavaScript for building dynamic web applications.',
			},
			api: {
				spec: 'APIs (Meta)',
				info: 'Expertise in creating and consuming APIs for seamless data integration.',
			},
			django: {
				spec: 'Django Web Framework (Meta)',
				info: 'Advanced knowledge of building robust web applications with Django.',
			},
			python: {
				spec: 'Programming in Python (Meta)',
				info: 'Comprehensive skills in Python programming for various applications.',
			},
			vc: {
				spec: 'Version Control (Meta)',
				info: 'Proficiency in using Git for collaborative software development.',
			},
			alx: {
				spec: 'ALX Africa',
				info: 'Completion of ALX Software Engineering Program, focused on full-stack development.',
			},
			automation: {
				spec: 'IT Automation with Python (Google)',
				info: 'Expertise in automating IT tasks using Python scripting.',
			},
			itsupport: {
				spec: 'IT Support (Google)',
				info: 'Comprehensive knowledge of IT support tools and practices.',
			},
			security: {
				spec: 'IT Security (Google)',
				info: 'Understanding of IT security practices and systems for safeguarding data.',
			},
			sysadmin: {
				spec: 'System Administration and IT Infrastructure (Google)',
				info: 'Knowledge of system administration and IT infrastructure management.',
			},
			configmgt: {
				spec: 'Configuration Management and the Cloud (Google)',
				info: 'Expertise in managing configurations and deploying cloud solutions.',
			},
			c: {
				spec: 'C Programming (Dartmouth College)',
				info: 'Proficiency in C programming for systems and application development.',
			},
			container: {
				spec: 'Container and Kubernetes Essentials V2 (IBM)',
				info: 'Foundational skills in working with containers and Kubernetes for deployment.',
			},
			linkedin: {
				spec: 'LinkedIn',
				info: 'Certification in Front-End Development Specialization.',
			},
		}
		},
	cv: { title: "Resume",
		url: cv,
		linkName: "Resume",
		},
}

const StyledPhotoBox = styled.div`
// justify-self: center;
cursor: pointer;
box-shadow: large;
transition: all 0.3s ease;

&:hover {
	transform: translateY(-10px);
	box-shadow: xl;
}
`;

const name = "Dafetite O. Ogaga";
const images = require.context("../images/logos", false,  /\.(png|jpe?g|gif|svg)$/);
const LandingSection = () => {
	const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);
	const [isDataExpanded, setIsDataExpanded] = useState(false);
	const [isLinksExpanded, setIsLinksExpanded] = useState(false);

    // Function to toggle expansion
    const toggleExpandSummary = () => setIsSummaryExpanded(!isSummaryExpanded);
	const toggleExpandData = () => setIsDataExpanded(!isDataExpanded);
	const toggleExpandLinks = () => setIsLinksExpanded(!isLinksExpanded);

    // Function to get the shortened text
    const getShortText = (text, type=null, wordLimit = 12) => {
		let words = text.split(" ");
		console.log('length:1', words.length)
		console.log({words})
		words = words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text
		// console.log({words})
		console.log('length2:', words.length)
		if (type==='summary') {
			// words = text.split(" ");
			// return ;
			return (
				<>
						<h3 className="head-sub aboutme"
						style={{
							paddingBottom: '12px',
						...(isMobile?{fontSize: 22, textAlign: 'center'}:{})}}>
							{words}
							<div onClick={toggleExpandSummary}
							style={responsiveStyles.buttonContainer}>
								{!isSummaryExpanded && <p style={{...responsiveStyles.buttonText, ...responsiveStyles.buttonTextInactive}}>Read More <FiChevronDown size={20} /></p>}
							</div>
						</h3>
					</>
			)
		} else if (type==='data') {
			// words = text.split(" ");
			return (
				<>
						<h3 className="head-sub aboutme"
						style={{
							paddingBottom: '12px',
						...(isMobile?{fontSize: 16, textAlign: 'center'}:{})}}>
							{<h1 className="head-sub"
								// style={{marginBottom: '30px',}}
								>
									<span
									style={{
										color: "turquoise",
										fontWeight: "bold",
										fontSize: isMobile? 22: '',
										// padding: '50px'
										}}>
										{data.specializations.title.toUpperCase()+' ☄'}
											</span><br/><div>{
											<>
												<span
												
												className="details1"
												style={{fontSize: isMobile? 19: ''}}>
													🖇 {data.specializations.details.frontend.spec}:
														<div className="info1" style={isMobile?{display: 'flex'}:{}}>
															<span
															style={{
																fontWeight: "normal",
																color: "honeydew",
																...(isMobile?{fontSize: 16, textAlign: 'center'}:{})
																// fontSize: isMobile? 16: '',
															}}>
																{words}
															</span>
														</div>
												</span><br/>
											</>
										
									}</div>
								</h1>}
							{/* {getShortText(data)} */}
							<div onClick={toggleExpandData}
							style={responsiveStyles.buttonContainer}>
								{!isDataExpanded && <p style={{...responsiveStyles.buttonText, ...responsiveStyles.buttonTextInactive}}>Read More <FiChevronDown size={20} /></p>}
							</div>
						</h3>
					</>
			)
		} else if (type==='links') {
			return (
				<>
					<h3 className="head-sub aboutme"
						style={{
							paddingBottom: '12px',
						...(isMobile?{fontSize: 16, textAlign: 'center'}:{})}}>
						{<h1 className="head-sub"
						style={{
						display: 'flex',
						fontWeight: "bold",
						color: "#e6e6fa",
						// alignItems: 'center',
						}}>
							<div>
							<div style={{display: 'flex', alignItems: 'baseline'}}>
									<span style={{
										color: "turquoise",
										whiteSpace: 'pre',
										paddingTop: '5px',
										fontSize: isMobile? 15: '',
										}}>{links.email.title.toUpperCase()}:
									</span>
									<div className="text-anime">
										<a
											href={links.email.url}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "underline",
												color: 'lightcyan',
												fontSize: isMobile? 15: '',
												}}>
											{links.email.linkName}
										</a>
									</div>
								</div>
								<div style={{display: 'flex', alignItems: 'baseline'}}>
									<span style={{
										color: "turquoise",
										whiteSpace: 'pre',
										paddingTop: '5px',
										fontSize: isMobile? 15: '',
										}}>{links.projects.title.toUpperCase()}:
									</span>
									<div className="text-anime">
										<a
											href={links.projects.url}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "underline",
												color: 'lightcyan',
												fontSize: isMobile? 15: '',
												}}>
											{links.projects.linkName}
										</a>
									</div>
								</div>
								<div style={{display: 'flex', alignItems: 'baseline'}}>
									<span style={{
										color: "turquoise",
										whiteSpace: 'pre',
										paddingTop: '5px',
										fontSize: isMobile? 15: '',
										}}>{links.cv.title.toUpperCase()}:
									</span>
									<div className="text-anime">
										<a
											href={links.cv.url}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "underline",
												color: 'lightcyan',
												fontSize: isMobile? 15: '',
												}}>
											{links.cv.linkName}
										</a>
									</div>
								</div>
								<div style={{display: 'flex', alignItems: 'baseline'}}>
									<span style={{
										color: "turquoise",
										whiteSpace: 'pre',
										paddingTop: '5px',
										fontSize: isMobile? 15: '',
										}}>{links.certifications.title.toUpperCase()}:
									</span>
									<div className="text-anime">
										<a
											href={links.certifications.url}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: "underline",
												color: 'lightcyan',
												fontSize: isMobile? 15: '',
												}}>
											{links.certifications.linkName}
										</a>
									</div>
								</div>
								{(<span>
									{
											<div
											style={{
												padding: '0 10px',
												...(isMobile?{
													fontSize: 16,
													textAlign: 'center',
													marginTop: 10,
												}:{})
												// fontSize: isMobile? 16: '',
											}}
											>
												🔗 {links.certifications.details.fe.spec}: <span>{links.certifications.details.fe.info}</span>
											</div>
									}</span>)
								}
							</div>
						</h1>}
						<div onClick={toggleExpandLinks}
						style={responsiveStyles.buttonContainer}>
							{!isLinksExpanded && <p style={{...responsiveStyles.buttonText, ...responsiveStyles.buttonTextInactive}}>Read More <FiChevronDown size={20} /></p>}
						</div>
					</h3>
				</>
			)
		}
    };
	const isMobile = useBreakpointValue({ base: true, md: false });
	const imageSources = images.keys().map((key) => images(key));
	return (
		<div className="pad display">
			{/* image and title */}
			<div style={{
				display: "flex",
				flexDirection: 'column',
				alignItems: "center",
				gap: '20px'
				}}>
				{/* profile image */}
				<StyledPhotoBox>
					<img
					className="photo"
						src={dafe}
						alt="Dafetite"
						/>
				</StyledPhotoBox>
				{/* title */}
				<div style={{textAlign: 'center'}}>
					<h2 className="head-main"
						style={{
						fontWeight: "bold",
						color: "#e6e6fa",
						fontSize: isMobile? 25: '',
					}}>
						Hello, I am <span style={{color: "lightblue"}}>{name}</span>
					</h2>
					<h3 className="head-sub"
					style={{
					fontWeight: "bold",
					color: "#2c3e50",
					fontSize: isMobile? 20: '',
					}}>
						Software and Automation Engineer || IT Support || Frontend and Backend Deveoper || DevOps || Software Designer || Customer Service Engineer || ATM Engineer || Data Analyst || Technical Engineer
					</h3>
				</div>
			</div>


			<div
			spacing={0}>
				{/* summary */}
				{(isMobile && !isSummaryExpanded) ?
					<>
						{getShortText(summary.one, 'summary')}
					</>
					:
					<>
						{Object.values(summary).map((summaryData=>{
						return (
							<h3 className="head-sub aboutme"
							style={{
								paddingBottom: '12px',
							...(isMobile?{fontSize: 16, textAlign: 'center'}:{})}}>
								{summaryData}
								{/* Show truncated text if isMobile is true and not expanded */}
								{/* {isMobile && !isExpanded ? getShortText(summaryData) : summaryData} */}

								{/* Toggle Button */}
								{/* <span onClick={toggleExpand} style={{ cursor: "pointer", marginLeft: 5 }}>
									{isExpanded ? <FiChevronUp /> : <FiChevronDown />}
								</span> */}
							</h3>
						)
						}))}
						<h3 className="head-sub aboutme"
							style={{
								paddingBottom: '12px',
							...(isMobile?{fontSize: 16, textAlign: 'center'}:{})}}>
							<div onClick={toggleExpandSummary}
							style={responsiveStyles.buttonContainer}>
								{isSummaryExpanded && <p style={{...responsiveStyles.buttonText, ...responsiveStyles.buttonTextActive}}>Collapse <FiChevronUp size={20} /></p>}
							</div>
						</h3>
					</>
				}

				{/* specializations, projects, tech expertise */}
				{(isMobile && !isDataExpanded) ?
					<>
						{getShortText(data.specializations.details.frontend.info, 'data')}
					</>
					:
					<>
						{Object.values(data).map((value, index) => {
							// console.log(value)
							return(
								<h1 className="head-sub"
								// style={{marginBottom: '30px',}}
								key={index+value}>
									<span
									style={{
										color: "turquoise",
										fontWeight: "bold",
										fontSize: isMobile? 22: '',
										// padding: '50px'
										}}>
										{value.title.toUpperCase()+' ☄'}</span><br/><div>{Object.values(value.details).map((val, ind) =>  {
										// console.log(val)
										return (
											<>
												<span
												key={ind+val}
												className="details1"
												style={{fontSize: isMobile? 19: ''}}>
													🖇 {val.spec}:
														<div className="info1" style={isMobile?{display: 'flex'}:{}}>
															<span
															style={{
																fontWeight: "normal",
																color: "honeydew",
																...(isMobile?{fontSize: 16, textAlign: 'center'}:{})
																// fontSize: isMobile? 16: '',
															}}>
																{val.info}
															</span>
														</div>
												</span><br/>
											</>
										)
									})}</div>
								</h1>
							)
						})}
						<h3 className="head-sub aboutme"
							style={{
								paddingBottom: '12px',
							...(isMobile?{fontSize: 16, textAlign: 'center'}:{})}}>
							<div onClick={toggleExpandData}
							style={responsiveStyles.buttonContainer}>
								{isDataExpanded && <p style={{...responsiveStyles.buttonText, ...responsiveStyles.buttonTextActive}}>Collapse <FiChevronUp size={20} /></p>}
							</div>
						</h3>
					</>
				}
				
				{/* links */}
				{(isMobile && !isLinksExpanded) ?
					<>
						{getShortText(links.certifications.details.fe.info, 'links')}
					</>
					:
					<>
						{Object.values(links).map(( value, index ) => (
							<h1 className="head-sub"
							key={index+value+index}
							style={{
							display: 'flex',
							fontWeight: "bold",
							color: "#e6e6fa",
							// marginBottom: "10px",
							// alignItems: 'center',
							}}>
								<div>
									<div style={{display: 'flex', alignItems: 'baseline'}}>
								<span style={{
									color: "turquoise",
									whiteSpace: 'pre',
									paddingTop: '5px',
									fontSize: isMobile? 15: '',
									}}>{value.title.toUpperCase()}: </span>
								<div className="text-anime">
									<a
										key={index}
										href={value.url}
										target="_blank"
										rel="noopener noreferrer"
										style={{
											textDecoration: "underline",
											color: 'lightcyan',
											fontSize: isMobile? 15: '',
											}}>
										{value.linkName}
									</a>
									</div>
								</div>
								{value.details?(<span>{
									Object.values(value.details).map((val, ind)=>{
										return (
											<div
											style={{
												padding: '0 10px',
												...(isMobile?{
													fontSize: 16,
													textAlign: 'center',
													marginTop: 10,
												}:{})
												// fontSize: isMobile? 16: '',
											}}
											key={ind+val+val+ind}>
												🔗 {val.spec}: <span>{val.info}</span>
											</div>
										)
									})
								}</span>):null}
								</div>
							</h1>
						))}
						<h3 className="head-sub aboutme"
							style={{
								marginTop: '10px',
								paddingBottom: '12px',
							...(isMobile?{fontSize: 16, textAlign: 'center'}:{})}}>
							<div onClick={toggleExpandLinks}
							style={responsiveStyles.buttonContainer}>
								{isLinksExpanded && <p style={{...responsiveStyles.buttonText, ...responsiveStyles.buttonTextActive}}>Collapse <FiChevronUp size={20} /></p>}
							</div>
						</h3>
					</>
				}
			</div>
		</div>
)}
export default LandingSection;

const responsiveStyles = {
	buttonContainer: {
		cursor: "pointer",
		display: 'flex',
		justifyContent: 'center',
		paddingBottom: 10,
	},
	buttonText: {
		display: "flex",
		alignItems: "center",
		padding: '4px 6px',
		fontSize: 12,
		// backgroundColor: '#2c3e50',
		// border: '1px solid blue',
		borderRadius: 5,
	},
	buttonTextActive: {
		border: '1px solid #2c3e50',
		color: '#2c3e50'
		// backgroundColor: '#2c3e50',
	},
	buttonTextInactive: {
		backgroundColor: '#2c3e50',
	}
}