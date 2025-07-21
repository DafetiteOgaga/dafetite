import React from "react";
import { Helmet } from "react-helmet";

// Certifications object
const certifications = {
	fe: {
		spec: "Front-End (Meta)",
		info: "Specialization in Front-End Development, including modern web technologies.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	be: {
		spec: "Back-End (Meta)",
		info: "Specialization in Back-End Development, including server-side frameworks and databases.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	react: {
		spec: "Advanced React (Meta)",
		info: "Comprehensive knowledge of React for building dynamic web applications.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	uiux: {
		spec: "Principles of UX/UI Design (Meta)",
		info: "Expertise in designing user-centered interfaces with strong UX principles.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	htmlcss: {
		spec: "HTML and CSS in depth (Meta)",
		info: "Proficiency in building responsive and accessible web pages using HTML and CSS.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	js: {
		spec: "Programming with JavaScript (Meta)",
		info: "In-depth knowledge of JavaScript for building dynamic web applications.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	api: {
		spec: "APIs (Meta)",
		info: "Expertise in creating and consuming APIs for seamless data integration.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	django: {
		spec: "Django Web Framework (Meta)",
		info: "Advanced knowledge of building robust web applications with Django.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	python: {
		spec: "Programming in Python (Meta)",
		info: "Comprehensive skills in Python programming for various applications.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	vc: {
		spec: "Version Control (Meta)",
		info: "Proficiency in using Git for collaborative software development.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Meta" }
	},
	alx: {
		spec: "ALX Africa",
		info: "Completion of ALX Software Engineering Program, focused on full-stack development.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "ALX Africa" }
	},
	automation: {
		spec: "IT Automation with Python (Google)",
		info: "Expertise in automating IT tasks using Python scripting.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Google" }
	},
	itsupport: {
		spec: "IT Support (Google)",
		info: "Comprehensive knowledge of IT support tools and practices.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Google" }
	},
	security: {
		spec: "IT Security (Google)",
		info: "Understanding of IT security practices and systems for safeguarding data.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Google" }
	},
	sysadmin: {
		spec: "System Administration and IT Infrastructure (Google)",
		info: "Knowledge of system administration and IT infrastructure management.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Google" }
	},
	configmgt: {
		spec: "Configuration Management and the Cloud (Google)",
		info: "Expertise in managing configurations and deploying cloud solutions.",
		level: "Specialization",
		recognizedBy: { "@type": "Organization", name: "Google" }
	},
	c: {
		spec: "C Programming (Dartmouth College)",
		info: "Proficiency in C programming for systems and application development.",
		level: "Specialization",
		recognizedBy: { "@type": "CollegeOrUniversity", name: "Dartmouth College" }
	},
	container: {
		spec: "Container and Kubernetes Essentials V2 (IBM)",
		info: "Foundational skills in working with containers and Kubernetes for deployment.",
		level: "Internediate",
		recognizedBy: { "@type": "Organization", name: "IBM" }
	},
	linkedin: {
		spec: "LinkedIn",
		info: "Certification in Front-End Development Specialization.",
		level: "Beginner",
		recognizedBy: { "@type": "Organization", name: "LinkedIn" }
	}
};

// Transform to Schema.org format
const credentialList = Object.values(certifications).map(cert => ({
	"@type": "EducationalOccupationalCredential",
	name: cert.spec,
	description: cert.info,
	educationalLevel: cert.level,
	recognizedBy: cert.recognizedBy
}));

const personalProjects = {
	customCommands: {
		name: "Custom Commands",
		description: `A Unix-like command utility project that simplifies repetitive terminal tasks. It features a
				collection of custom commands created to automate everyday operations for developers and power
				users.`,
		url: "https://github.com/DafetiteOgaga/custom_commands",
		keywords: [
			"shell",
			"cli-tools",
			"automation",
			"productivity",
			"bash",
			"python",
			"scripts",
			"bash-scripts",
			"python-scripts",
			"c-programming",
			"git",
			"version-control",
			"git-commands",
			"github",
			"unix-like",
			"linux",
			"git-bash",
			"command",
			"terminal-utilities",
		],
	},
	altaviz: {
		name: "Altaviz Support Limited",
		description: `
					A robust role-based workflow management system built for Altaviz Support Limited. This
					web application streamlines operations across multiple departments, including Custodians,
					Engineers, Workshop staff, Help Desk, HR, and Supervisors. Developed using Django (backend),
					ReactJS (frontend), and MySQL (database), the platform is designed to be fast, scalable,
					and reliable, providing a seamless interface for day-to-day company operations.`,
		url: "https://altaviz-frontend.vercel.app/",
		keywords: [
			"workflow-management",
			"role-based-access",
			"django",
			"reactjs",
			"mysql",
			"enterprise-app",
			"departmental-tools",
			"staff-portal",
			"company-operations",
			"helpdesk-system",
			"hr-management",
			"engineer-tools",
			"custodian-portal",
			"scalable-web-app",
			"business-automation"
		],
	},
}
// Transform to Schema.org format
const personalProjectsList = Object.values(personalProjects).map(project => ({
	"@type": "CreativeWork",
	name: project.name,
	description: project.description,
	url: project.url,
	keywords: project.keywords,
	author: {
		"@type": "Person",
		name: "Dafetite Ogaga"
	},
}));

const dafe = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Dafetite Ogaga",
	"url": "https://dafetiteogaga.github.io/dafetite/",
	"image": "https://dafetiteogaga.github.io/dafetite/dafeWhiteBlack180pxy.png",
	"jobTitle": "Software and Automation Engineer",
	"description": "Software and Automation Engineer skilled in fullstack (web and mobile) development, IT support, automated software testing, and programming tutoring.",
	"sameAs": [
		"https://www.linkedin.com/in/ogagadafetite/",
		"https://github.com/DafetiteOgaga",
		"https://x.com/dafetite_ogaga",
		"https://web.facebook.com/ogaga01",
		"https://www.instagram.com/ogagadafetite/",
		"https://www.youtube.com/@ogagadafetite9847",
		"https://stackoverflow.com/users/19809880/dafetite",
		"https://medium.com/@ogagadafetite",
		"https://hashnode.com/@Dafetite",
		"https://www.upwork.com/freelancers/~01b8518a3f4c591e32",
	],
	knowsAbout: [
		"Software Development",
		"Automation Engineering",
		"Web Development",
		"Mobile Development",
		"IT Support",
		"Programming Tutoring",
		"ReactJS",
		"Python",
		"JavaScript",
		"HTML",
		"CSS",
		"SQL",
		"Django",
		"Git",
		"Linux",
		"APIs",
		"Software Testing",
		"Version Control",
		"Front-End Development",
		"Back-End Development",
		"Responsive Design",
		"Continuous Integration",
		"Continuous Deployment",
		"bash Scripting",
		"Command Line Tools",
		"Software Deployment",
		"C Programming",
	],
	"hasCredential": credentialList,
	"subjectOf": personalProjectsList,
}
const website = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Dafetite Ogaga's Website",
	"url": "https://dafetiteogaga.github.io/dafetite/"
}

const DafetiteSchema = () => (
	<Helmet>
		<script type="application/ld+json">
			{JSON.stringify(dafe)}
		</script>
		<script type="application/ld+json">
			{JSON.stringify(website)}
		</script>
	</Helmet>
);





// #################################
const organizationAndPerson = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Dafetite Ogaga",
	"url": "https://dafetiteogaga.github.io/dafetite/",
	"logo": "https://dafetiteogaga.github.io/dafetite/dafeWhiteBlack180pxy.png",
	"sameAs": [
		"https://www.linkedin.com/in/ogagadafetite/",
		"https://github.com/DafetiteOgaga"
	],
	"founder": {
		"@type": "Person",
		"name": "Dafetite Ogaga",
		"jobTitle": "Software and Automation Engineer",
		"sameAs": [
			"https://www.linkedin.com/in/ogagadafetite/",
			"https://github.com/DafetiteOgaga"
		]
	}
}



export {DafetiteSchema};
