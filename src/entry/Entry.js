// projects and videos component
const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);
const getImage = (name) => (images(`./${name}`))
const versionNumber = require('../../package.json').version;
// videos component
const videos = require.context('../altavizVideos', false, /\.(mp4|webm|ogg|png|jpe?g|svg)$/);
const getVideo = (name) => (videos(`./${name}`))

// index component
const names = '1Dafetite O. Ogaga';
const email = 'ogagadafetite@gmail.com'
const skills = [
	'Software and Automation Engineer', 'Fullstack (Web and Mobile) Developer', 'IT Support',
	'Automated Software Tester', 'Programming Tutor', 'ATM and Technical Engineer'
]

// home component
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
	},
	{
		status: 'Mobile Apps',
		content: [
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
	},
	{
		status: 'Websites',
		content: [
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
	},
	{
		status: 'Projects',
		content: [
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
				description: `A comprehensive browser-based platform for managing ATM support, user profiles,
					service requests, and performance dashboards — built with React and Django for seamless
					operations.`
			},
			{
				thumbnail: getVideo("mobileHome.png"),
				videoSrc: getVideo("altavizMobile.mp4"),
				title: "Altaviz Mobile App",
				description: `A mobile-first solution that empowers engineers and custodians to track, update,
					and resolve ATM service tasks on the go — designed for speed, clarity, and real-time updates.`
			},
		],
	},
	{
		status: 'In development...',
		content: [
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
	},
]

export {
		names,
		email,
		skills,
		professionalSummary,
		professionalExperience,
		professionalProjects,
		professionalCertification,
		professionalSkills,
		education,
		projectCardsContent,
		videoCardsContent
}