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

const DafetiteSchema = () => (
	<Helmet>
		<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Dafetite Ogaga",
			"jobTitle": "Software and Automation Engineer",
			"url": "https://dafetiteogaga.github.io/dafetite/",
			"sameAs": [
			"https://www.linkedin.com/in/ogagadafetite/",
			"https://github.com/DafetiteOgaga"
			],
			"hasCredential": credentialList
		})}
		</script>
		<script type="application/ld+json">
			{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": "Dafetite Ogaga's Website",
				"url": "https://dafetiteogaga.github.io/dafetite/"
			})}
		</script>
	</Helmet>
);

export default DafetiteSchema;
