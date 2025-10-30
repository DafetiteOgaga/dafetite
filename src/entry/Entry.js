// projects and videos component
const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);
const getImage = (name) => (images(`./${name}`))
const versionNumber = require('../../package.json').version;
// videos component
const videos = require.context('../altavizVideos', false, /\.(mp4|webm|ogg|png|jpe?g|svg)$/);
const getVideo = (name) => (videos(`./${name}`))

// index component.
const names = 'Dafetite O. Ogaga';
const email = 'ogagadafetite@gmail.com'
const skills = [
	'Software and Automation Engineer', 'Fullstack (Web and Mobile) Developer', 'IT Support',
	'Automated Software Tester', 'Programming Tutor', 'ATM and Technical Engineer'
]

// site icon and socials component
const wrblo = "we rise by lifting others..."

// home component.
const professionalSummary = [
	{
		text: `
			I am a results-driven Software and Automation Engineer with a comprehensive background
			in software development, IT support, software testing, and systems engineering. My
			expertise spans across frontend, backend, mobile app development, and automation,
			allowing me to build full-stack, cross-platform, and testable solutions using modern
			technologies.
		`
	},
	{
		text: `
			Proficient in Python, JavaScript (ES6+), SQL, C, HTML5, and CSS, and experienced with
			frameworks such as React.js, React Native, Express, MongoDB, Expo, Django, Django REST
			Framework, and Selenium. I specialize in developing responsive, maintainable, and
			user-centric applications. My workflow also integrates DevOps practices using Bash,
			and PowerShell to streamline development and enhance system performance.
		`
	},
]
const professionalExperience = [
	{
		experience: 'Professional Experiences',
		roles: [
			{
				title: 'Programming Tutor',
				company: 'Tech for Girls',
				duration: '2025 - Present',
				description: `Provided hands-on training in HTML, CSS, JavaScript, React, Python, and Django to
					beginner and intermediate learners. Conducted both in-person and online workshops, helping over
					50 young women build fully functional web applications and gain confidence to enter the tech
					industry.`,
			},
			{
				title: 'Software and Automation Engineer',
				company: 'Freelance',
				duration: '2023 - 2025',
				description: `Provided end-to-end software and automation solutions to clients, leveraging
					technologies such as Python, JavaScript, and Django. Streamlined business workflows, automated
					manual processes, and built user-friendly applications across web and mobile platforms.`,
			},
			{
				title: 'Software and Automation Engineer',
				company: 'Alx Africa',
				duration: '2021 - 2023',
				description: `Built a Betty linter wrapper compatible with Android. Created "Custom Commands," a
					modular Python CLI tool, and developed "Article Hive," a robust publishing platform featuring
					role-based access control, content management, and a user-friendly interface.`,
			},
			{
				title: 'Software Engineer',
				company: 'Altaviz Support Limited',
				duration: '2018 - 2021',
				description: `Designed and implemented a workflow management system that streamlined internal
					communications, automated support processes, and improved task tracking across departments.
					Significantly enhanced operational efficiency and team collaboration.`,
			},
		]
	},
]
const professionalProjects = [
	{
		keyProjects: 'Key Projects:',
		projects: [
			{
				name: 'Custom Commands',
				description: `A modular and extensible Python-based CLI tool that bundles frequently used
					commands across multiple languages and frameworks into a unified interface.
					Custom Commands automates repetitive tasks in Git, Django, React, Python, C, and more.
					enhancing developer productivity through streamlined workflows, built-in templates,
					and intuitive scripting. Designed for flexibility, portability, and rapid daily
					development.`
			},
			{
				name: 'Altaviz Support Limited',
				description: `A cross-platform workflow management solution built with React (frontend),
					Django REST FRAMEWORK (backend), and EXPO-A React Native framework (mobile). It enables
					seamless internal communication, task tracking, and support automation across departments,
					featuring role-based access, real-time updates, interactive dashboards, and mobile
					support workflows.`
			},
			{
				name: 'Article Hive',
				description: `A full-stack publishing app with React and Django REST, supporting
					JWT-authenticated users, role-based permissions, rich-text editing, and comment
					capabilities, all to facilitate seamless content creation and reader engagement.`,
			},
		]
	},
]
const professionalCertification = [
	{
		certifications: 'Certifications:',
		certificates: [
			{
				name: 'Software Engineering',
				provider: 'ALX',
				url: 'https://savanna.alxafrica.com/certificates/6exFhM7XH2'
			},
			{
				name: 'Meta Front-End Developer (Specialization)',
				provider: 'Coursera (Meta)',
				url: 'https://www.coursera.org/account/accomplishments/specialization/DSXC9QJ7M7QJ'
			},
			{
				name: 'Meta Back-End Developer (Specialization)',
				provider: 'Coursera (Meta)',
				url: 'https://www.coursera.org/account/accomplishments/specialization/QVGBHJYXC242'
			},
			{
				name: 'IT Automation with Python (Specialization)',
				provider: 'Coursera (Google)',
				url: 'https://www.coursera.org/account/accomplishments/specialization/5THLV85F3WSC'
			},
			{
				name: 'Google IT Support (Specialization)',
				provider: 'Coursera (Google)',
				url: 'https://www.coursera.org/account/accomplishments/specialization/VXHWQ5YKJMFC'
			},
			{
				name: 'C Programming: Using Linux Tools and Libraries',
				provider: 'Coursera (DARTMOUTH)',
				url: 'https://www.coursera.org/account/accomplishments/verify/MSS9PWHEJLGS'
			},
			{
				name: 'Container & Kubernetes Essentials',
				provider: ' Coursera (IBM)',
				url: 'https://www.coursera.org/account/accomplishments/verify/ECLMLL3X3QXT'
			},
		]
	},
]
const professionalSkills = [
		{
			title: 'Web Development (Frontend)',
			detail: `I craft responsive, accessible, and dynamic websites using HTML, CSS, JavaScript,
				and modern frameworks like React. I follow best practices in UI/UX, ensuring pixel-perfect
				layouts and mobile-first design.`,
		},
		{
			title: 'Backend Development & APIs',
			detail: `I build scalable RESTful APIs using Django and Django REST Framework, handling data
				modeling, authentication, business logic, and third-party integrations. SQLite is used for
				development and MySQL for production.`,
		},
		{
			title: 'Automation & Productivity Tools',
			detail: `I design command-line automation tools like Custom Commands using Python to streamline
				repetitive tasks and boost developer productivity with modular, extensible CLI solutions.`,
		},
		{
			title: 'IT Support, Deployment & DevOps',
			detail: `With hands-on experience in deployment and automation, I use CI/CD pipelines and platforms
				like Vercel, Railway, GitHub Pages, and PythonAnywhere to manage staging, hosting, and delivery
				of full-stack web applications.`,
		},
		{
			title: 'Tutoring, Mentorship & Advocacy',
			detail: `As a tech advocate, I've taught foundational programming, web development, and automation
				to underrepresented groups through programs like Tech for Girls, helping young learners gain
				real-world skills and confidence.`,
		},
		{
			title: 'Mobile App Development',
			detail: `I develop performant, cross-platform mobile applications using React Native and Expo,
				focusing on native-like experiences, efficient state management, and REST API consumption.`,
		},
		{
			title: 'Software Testing & QA',
			detail: `I implement automated testing with Selenium and other frameworks to validate functionality,
				performance, and usability, enabling confident, high-quality software delivery.`,
		},
];
const education = [
	{
		title: 'Education:',
		educationInfo: [
			{
				school: 'Federal University of Technology Akure, Ondo State.',
				course: 'Metallurgical and Materials Engineering',
				degree: 'Bachelor of Engineering (B.Eng)',
				year: '2014'
			},
			{
				school: ' Lagos State Model College Badore.',
				course: 'West African Examination Council (WAEC)',
				degree: 'Senor Secondary School Certificate Examination (SSCE)',
				year: '2005'
			},
		]
	},
]

// projects component
const projectCardsContent = [
	{
		status: 'WebApps',
		content: [
			{
				title: "FamousPropertiesNG",
				description: `
					An innovative decluttering and e-commerce platform that connects sellers looking to part
					with property items to buyers seeking quality deals. Designed to streamline the property
					resale process, the platform offers a seamless experience for discovering and
					purchasing items. Built with modern web technologies, FamousPropertiesNG emphasizes speed,
					scalability, and intuitive navigation, ensuring that users can browse listings,
					view detailed product information and make orders with ease.`,
				url: "https://dafetiteogaga.github.io/famepropertiesng_repo/",
				getImageSrc: getImage("famouspropertiesng.png"),
				stack: "ReactJS",
			},
			{
				title: "StuddieBudie",
				description: `
					An EdTech platform designed to enhance learning for students in basic and secondary schools.
					The application offers curriculum-aligned subject materials, auto-graded tests, and dynamic
					question pools. Teachers can contribute and scramble custom questions for download in up to
					26 formats, ideal for both digital learning and physical classroom use. Built using ReactJS,
					Express, and MongoDB.`,
				url: "https://dafetiteogaga.github.io/studdiebudie_frontend/",
				getImageSrc: getImage("studdiebudie.png"),
				stack: "ReactJS, Django REST Framework, SQLite and previously used Express, MongoDB",
			},
			{
				title: "Altaviz Support Limited",
				description: `
					A robust role-based workflow management system built for Altaviz Support Limited. This
					web application streamlines operations across multiple departments, including Custodians,
					Engineers, Workshop staff, Help Desk, HR, and Supervisors. Developed using Django (backend),
					ReactJS (frontend), and MySQL (database), the platform is designed to be fast, scalable,
					and reliable, providing a seamless interface for day-to-day company operations.`,
				url: "https://altaviz-frontend.vercel.app/",
				getImageSrc: getImage("altaviz-support-ltd.png"),
				stack: "Django, ReactJS, MySQL",
			},
			{
				title: "Article Hive (The WebApp)",
				description: `
					An interactive web platform for readers, writers, and knowledge seekers. Article Hive
					functions as an online book club where users can register as members, publish articles,
					build an author profile, and grow their audience. Built with Django, Vanilla JavaScript,
					HTML, CSS, and MySQL, it offers a clean, intuitive user experience for both anonymous
					readers and contributing authors.`,
				url: "https://dafetite.pythonanywhere.com/",
				getImageSrc: getImage("article-hive-app.png"),
				stack: "Django, Html, CSS, Vanilla JavaScript, MySQL",
			},
		],
	},
	{
		status: 'Mobile Apps',
		content: [
			{
				title: "Altaviz Support Limited (Mobile App)",
				description:
					`The mobile companion to the Altaviz Web App. Offers all the core features in a portable
					experience, role-based access for all departments, real-time updates, and workflow tracking.
					Built for speed, reliability, and seamless integration with the web platform.`,
				url: `https://github.com/DafetiteOgaga/altavizMobileReleases/releases/download/${versionNumber}/altavizMobile-${versionNumber}.apk`,
				getImageSrc: getImage("altaviz_mobile.png"),
				stack: "Expo(React Native), Django RESTFramework, and MySQL",
			},
		],
	},
	{
		status: 'Websites',
		content: [
			{
				title: "TechFlows Engineering",
				description:
					`TechFlows Engineering is a technology company that offers innovative solutions across
					various sectors including software development, computer hardware, security systems, ATM
					servicing, cloud solutions, and IT training. This company portfolio site reflects its
					commitment to professional excellence and client satisfaction.`,
				url: "https://dafetiteogaga.github.io/techflows/",
				getImageSrc: getImage("techflows.png"),
				stack: "ReactJS",
			},
			{
				title: "Jimmy Ayodele",
				description:
					`A professional portfolio website for Jimmy Ayodele, showcasing his projects, skills,
					achievements, and career journey. This site provides insights into his background, technical
					expertise, and offers a contact page for collaboration or job opportunities.`,
				url: "https://fijimi65.github.io/fijimiayodele/",
				getImageSrc: getImage("jimmy_ayodele.png"),
				stack: "ReactJS",
			},
			{
				title: "The Article Hive",
				description:
					`An online book club and writing platform where members can register to publish articles,
					build author profiles, and gain recognition. It promotes knowledge sharing and community
					growth by showcasing original works from contributors.`,
				url: "https://dafetiteogaga.github.io/article-hive/",
				getImageSrc: getImage("article-hive.png"),
				stack: "Html, CSS, and Vanilla JavaScript",
			},
			{
				title: "Creonovo Restaurant Website",
				description:
					`An online presence for Creonovo Restaurant in Lagos, Nigeria. Visitors can explore African
					cuisine, make reservations, and discover traditional dishes such as Afang, Edikang-Ikong,
					and Atama soups with Fufu, Pounded Yam, and Eba.`,
				url: "https://creonovo-restaurant.web.app/",
				getImageSrc: getImage("creonovo-website.png"),
				stack: "ReactJS",
			},
		],
	},
	{
		status: 'Projects',
		content: [
			{
				title: "Custom Commands",
				description:
				`A Unix-like command utility project that simplifies repetitive terminal tasks. It features a
				collection of custom commands created to automate everyday operations for developers and power
				users.`,
				url: "https://github.com/DafetiteOgaga/custom_commands",
				getImageSrc: getImage("custom_commands2.png"),
				stack: "Python, Bash, C",
			},
			{
				title: "A Creonovo 'Reserve a table' Backend-component feature",
				description:
					`A backend microservice for Creonovo Restaurant that handles table reservations. This component
					is built using RESTful practices and seamlessly integrates with the main application.`,
					url: "https://github.com/DafetiteOgaga/creonovo_restaurant-backend-component",
				getImageSrc: getImage("creonovo_restaurant-backend-component.png"),
				stack: "Django, Django REST Framework",
			},
			{
				title: "Creonovo Gardens",
				description:
					`A simple and elegant web page for nature lovers. Promotes the tranquility and beauty of a
					botanical garden, showcasing a peaceful retreat built with clean, semantic code.`,
					url: "https://github.com/DafetiteOgaga/creonovo-gardens",
				getImageSrc: getImage("creonovo-gardens.png"),
				stack: "HTML, CSS",
			},
			{
				title: "DSA-LinkedList",
				description:
					`An educational C program that dynamically creates a singly linked list based on user input and
					prints its elements. A basic data structures and algorithms (DSA) demonstration.`,
				url: "https://github.com/DafetiteOgaga/dsa-linkedlist",
				getImageSrc: getImage("dsa-linkedlist.png"),
				stack: "C",
			},
			{
				title: "Binary Search Game",
				description:
					`A fun, interactive terminal-based game that teaches the binary search algorithm in an engaging
					way. Play while learning how this efficient search strategy works.`,
				url: "https://github.com/DafetiteOgaga/Binary_search_in_a_game",
				getImageSrc: getImage("Binary_search_in_a_game.png"),
				stack: "Python",
			},
			{
				title: "Creonovo Restaurant",
				description:
					`The backend API powering Creonovo Restaurant, an online food-ordering platform specializing in
					African cuisine. Built using robust, scalable practices.`,
				url: "https://github.com/DafetiteOgaga/creonovo_restaurant",
				getImageSrc: getImage("creonovo_restaurant.png"),
				stack: "Django, Django REST Framework",
			},
			{
				title: "PDF2docx Converter",
				description:
					`A desktop automation tool that converts PDF files to editable DOCX format. Simple and
					lightweight, built for quick personal document transformation.`,
				url: "https://github.com/DafetiteOgaga/pdf2docx_converter",
				getImageSrc: getImage("pdf2docx Converter.png"),
				stack: "Python",
			},
			{
				title: "Figma Design for My Little Lemon Capstone Project",
				description:
					`A high-fidelity prototype and wireframe for a fictional restaurant app called Little Lemon.
					Designed with a user-friendly reservation system and modern aesthetics.`,
				url: "https://www.figma.com/design/Jo78tKGLI9UtpjAV1VFX8w/Capstone-project?node-id=25-378&t=YkVTrjlAuomzVeLG-1",
				getImageSrc: getImage("little-lemon-capstone-project-figma-design.png"),
				stack: "Figma",
			},
			{
				title: "The figma design for my imaginary little lemon project",
				description:
					`Another iteration of the Little Lemon restaurant design concept. This version focuses on
					advanced UI/UX principles and user interactions for an intuitive dining reservation experience.`,
				url: "https://www.figma.com/design/u7zbSHNIFWE0rwz6fZt178/high-fidelity-visual-design?node-id=0-1&t=3uFdohozHKiRJpxq-1",
				getImageSrc: getImage("little-lemon-figma-designs.png"),
				stack: "Figma",
			},
		],
	},
]

// videos component
const videoCardsContent = [
	{
		status: 'Videos',
		content: [
			{
				thumbnail: getVideo("profilePage.png"),
				videoSrc: getVideo("altavizWeb.mp4"),
				title: "Altaviz Web App",
				description: `A full-featured web platform engineered for Altaviz Support Limited to streamline ATM
					operations, service requests, and performance reporting. Built with Django and React, the system integrates
					user management, real-time service tracking, and admin dashboards—delivering seamless coordination between
					field teams and back-office support.`,
			},
			{
				thumbnail: getVideo("mobileHome.png"),
				videoSrc: getVideo("altavizMobile.mp4"),
				title: "Altaviz Mobile App",
				description: `A cross-platform mobile solution tailored for engineers and custodians to manage ATM service
					tickets, updates, and resolutions in the field. Built with responsiveness and speed in mind, it enables
					on-the-go reporting, status updates, and real-time task tracking, complementing the Altaviz Web platform.`,
			},
		],
	},
	// {
	// 	status: 'In development...',
	// 	content: [
	// 		{
	// 			title: "StuddieBudie",
	// 			description:
	// 				`An EdTech platform designed to enhance learning for students in basic and secondary schools. The application
	// 				offers curriculum-aligned subject materials, auto-graded tests, and dynamic question pools. Teachers can
	// 				contribute and scramble custom questions for download in up to 26 formats, ideal for both digital learning and
	// 				physical classroom use. Built using ReactJS, Express, and MongoDB.`,
	// 			url: "https://dafetiteogaga.github.io/studdiebudie_frontend/",
	// 			getImageSrc: getImage("studdiebudie.png"),
	// 			stack: "ReactJS, Django REST Framework, SQLite and previously used Express, MongoDB",
	// 		},
	// 	],
	// },
]

export {
		names,
		email,
		skills,
		wrblo,
		professionalSummary,
		professionalExperience,
		professionalProjects,
		professionalCertification,
		professionalSkills,
		education,
		projectCardsContent,
		videoCardsContent
}