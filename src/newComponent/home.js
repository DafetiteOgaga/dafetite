import React, { Fragment, useState } from "react";
import { Link } from 'react-router-dom';
import {
	professionalSummary,
	professionalExperience,
	professionalProjects,
	professionalCertification,
	professionalSkills,
	education
} from '../entry/Entry';

function Home() {
	console.log("Home component loaded");
	const [showMore, setShowMore] = useState(false);
	return (
		<main className="tm-col-right">
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<section className="tm-content">
				<h2 className="tm-content-title fade-in-from-bottom"><strong>Professional Summary</strong></h2>
					{/* Summary */}
					{professionalSummary.map((item, index) => {
						const last = professionalSummary.length - 1 === index;
						return (
							<Fragment key={index}>
								<p className="mb-5 fade-in-from-bottom" style={{lineHeight: 1.5}}>{item.text}</p>
								{!last && <hr className="mb-5"/>}
								{/* <p className="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p> */}
							</Fragment>
						)
					})}

					{/* Experiences */}
					{showMore &&
					professionalExperience.map((item, index) => {
						// const last = professionalExperience.length - 1 === index;
						return (
							<Fragment key={index}>
								<h4 className="underlined"><strong>{item.experience}</strong></h4>
								{item.roles.map((role, roleIndex) => {
									return (
										<div key={`${index}${roleIndex}`} className="mb-5">
											<h5 style={{margin: 0}}>{role.title}</h5>
											<p  className="italiced" style={{marginBottom: 0}}><strong>{role.company}</strong> - {role.duration}</p>
											<p style={{lineHeight: 1.4}}>{role.description}</p>
										</div>
									)
								})}
								{/* <p className="mb-5">{item.text}</p> */}
								{/* {!last && <hr className="mb-5"/>} */}
								{/* <p className="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p> */}
							</Fragment>
						)
					})
				}
				{/* Projects */}
				{showMore &&
					<>
					<br/>
					{professionalProjects.map((item, index) => {
						// const last = professionalProjects.length - 1 === index;
						return (
							<Fragment key={index}>
								<h4 className="underlined"><strong>{item.keyProjects}</strong></h4>
								{item.projects.map((project, projectIndex) => {
									return (
										<div key={`${index}${projectIndex}`} className="mb-5">
											<h5 style={{margin: 0}}>{project.name}:</h5>
											{/* <p  className="italiced" style={{marginBottom: 0}}><strong>{project.company}</strong> - {project.duration}</p> */}
											<p style={{lineHeight: 1.5}}>{project.description}</p>
										</div>
									)
								})}
								{/* <p className="mb-5">{item.text}</p> */}
								{/* {!last && <hr className="mb-5"/>} */}
								{/* <p className="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p> */}
							</Fragment>
						)
					})}
				</>}
				{/* Certifications */}
				{showMore &&
					<>
					<br/>
					{professionalCertification.map((item, index) => {
						// const last = professionalCertification.length - 1 === index;
						return (
							<Fragment key={index}>
								<h4 className="underlined"><strong>{item.certifications}</strong></h4>
								{item.certificates.map((certificate, certificateIndex) => {
									return (
										<div key={`${index}${certificateIndex}`} className="mb-5 link-hover">
											<Link to={certificate.url} className="underlined" style={{color: 'white'}}><h5 style={{margin: 0}}>{certificate.name}</h5></Link>
											{/* <p  className="italiced" style={{marginBottom: 0}}><strong>{project.company}</strong> - {project.duration}</p> */}
											<p style={{marginBottom: -15}}>Certified by: <strong>{certificate.provider}</strong></p>
										</div>
									)
								})}
								{/* <p className="mb-5">{item.text}</p> */}
								{/* {!last && <hr className="mb-5"/>} */}
								{/* <p className="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p> */}
							</Fragment>
						)
					})}
				</>}
				{/* Skills */}
				{showMore &&
					<>
					<br/><br/>
					<h4 className="underlined"><strong>Skills</strong></h4>
					{professionalSkills.map((item, index) => {
						// const last = professionalSkills.length - 1 === index;
						return (
							<Fragment key={index}>
								<h6 className="" style={{margin: 0}}><strong>{item.title}</strong></h6>
								<p style={{marginBottom: 20, lineHeight: 1.4}}>{item.detail}</p>
							</Fragment>
						)
					})}
				</>}
				{/* Education */}
				{showMore &&
					education.map((item, index) => {
						// const last = professionalExperience.length - 1 === index;
						return (
							<Fragment key={index}>
								<h4 className="underlined"><strong>{item.title}</strong></h4>
								{item.educationInfo.map((edu, eduIndex) => {
									return (
										<div key={`${index}${eduIndex}`} className="mb-5">
											<h5 style={{margin: 0}}>{edu.course}</h5>
											<p  className="italiced" style={{marginBottom: 0}}><strong>{edu.degree}</strong> - {edu.year}</p>
											<p style={{lineHeight: 1.4}}>{edu.school}</p>
										</div>
									)
								})}
								{/* <p className="mb-5">{item.text}</p> */}
								{/* {!last && <hr className="mb-5"/>} */}
								{/* <p className="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p> */}
							</Fragment>
						)
					})
				}
				</section>
				<div>
					<span style={{borderRadius: 5}}
					onClick={()=> setShowMore(prev=>!prev)}
					className="btn btn-primary right-fade-in">{showMore?'Collapse':'Read More...'}</span>
				</div>
			</div>
		</main>
	)
}
export { Home }
