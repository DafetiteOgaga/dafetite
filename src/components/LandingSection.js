import React from "react";
import dafe from "../dafetite.jpeg"
import cv from "./Dafetite_Ogaga.pdf"
import styled from "styled-components"

const data = {
	specializations: {
		title: "Specializations",
			// details: `Frontend, Backend, UI/UX, Automation, IT Support`,
		details: {
			frontend: {
				spec: 'Frontend',
				info: `Creating responsive, intuitive, and aesthetically
						pleasing user interfaces using React.js, Bootstrap,
						Figma, and HTML5/CSS.`
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
				info: `A modern day web application that handles the workflow of
						Altaviz Support Limited, a company that provides ATM services,
						sales, and support. The Apllication is built with Django and
						React.js, and it features a user-friendly interface.
						The application comes with a robust
						backend, and a secure database management system with role-based
						access control, chat section. The Aplllication is designed to enhance the company's
						workflow, improve client trust, and showcase services effectively.`
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
			customCmds: {
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
projects: { title: "Projects",
	url: `https://github.com/DafetiteOgaga/`,
	linkName: "Click to view on Github",
	},
certifications: { title: "Certifications",
	url: `https://www.linkedin.com/in/ogagadafetite/details/certifications/`,
	linkName: "Click to view on LinkedIn",
	details: {
		meta: {
			spec: 'Meta',
			info: 'Front-End and Back-End Development Specializations',
		},
		alx: {
			spec: 'ALX Africa',
			info: 'Software Engineering Program',
		},
		google: {
			spec: 'Google',
			info: 'IT Automation with Python',
		},
		ibm: {
			spec: 'IBM',
			info: 'nnnnnnnn',
		},
		linkedIn: {
			spec: 'LinkedIn',
			info: 'Front-End Development Specialization',
		}
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
const LandingSection = () => (
	<div className="pad display">
		<div style={{
			display: "flex",
			flexDirection: 'column',
			alignItems: "center",
			gap: '20px'
			}}>
		<StyledPhotoBox>
		<img
		className="photo"
			src={dafe}
			alt="Dafetite"
			/>
		</StyledPhotoBox>
		{/* </div> */}
		<div style={{textAlign: 'center'}}>
		<h2 className="head-main"
			style={{
			fontWeight: "bold",
			color: "#e6e6fa",
		}}>
			Hello, I am <span style={{color: "lightblue"}}>{name}</span></h2>
		<h3 className="head-sub"
		style={{
		fontWeight: "bold",
		color: "#2c3e50",
		}}>Full-Stack Developer | UI/UX Designer | Automation Specialist</h3>
		</div>
	</div>


	<div
	// alignItems="start"
	spacing={0}>
		<h3 className="head-sub aboutme"
		style={{paddingBottom: '12px',}}>
			I am a highly skilled and versatile software engineer with expertise
			in Software development, UI/UX design, Devops, and IT automation.
			I thrive on curiosity, problem-solving, and exploring new technologies
			to push the boundaries of what's possible. My passion for tech extends
			beyond development into system optimization, process automation, and
			creating user-focused solutions that deliver measurable value and
			builds into scalable, user-centric applications and innovative tech
			solutions.
		</h3>
		{/* specializations */}
		{Object.values(data).map((value, index) => {
			console.log(value)
			return(
			<h1 className="head-sub"
			style={{marginBottom: '30px',}}
			key={index+value}>
				<span
				style={{
					color: "turquoise",
					fontWeight: "bold",
					// padding: '50px'
					}}>
					{value.title.toUpperCase()+' ☄'}</span><br/> {Object.values(value.details).map((val, ind) =>  {
					console.log(val)
					return (
						<>
							<span
							key={ind+val}
							className="details1">
								🖇 {val.spec}:
									<div className="info1">
										<span
										style={{
											fontWeight: "normal",
											color: "honeydew",
										}}>
											{val.info}
										</span>
									</div>
							</span><br/>
						</>
					)
				})}
			</h1>
			)})}
		{Object.values(links).map(( value, index ) => (
			<h1 className="head-sub"
			key={index+value+index}
			style={{
			display: 'flex',
			fontWeight: "bold",
			color: "#e6e6fa",
			}}>
				<div>
					<div style={{display: 'flex'}}>
				<span style={{
					color: "turquoise",
					whiteSpace: 'pre',
					paddingTop: '5px',
					}}>{value.title.toUpperCase()}: </span>
				<div className="text-anime">
					<a
						key={index}
						href={value.url}
						target="_blank"
						rel="noopener noreferrer"
						style={{textDecoration: "underline", color: 'lightcyan'}}>
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
	</div>
</div>
);

export default LandingSection;
// xyz
