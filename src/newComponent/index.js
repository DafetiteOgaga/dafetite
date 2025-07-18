import React from 'react';
// import '../App.css';
// import '../global.css';
import { Outlet } from 'react-router-dom';
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from './hooks/backgroundSlideshow';
import { SiteIconAndSocials } from './siteIconAndSocials';
import { NavigationBar } from './navigationBar';
import { Footer } from './footer';
import dafetite from '../dafetite.png';

const skills = [
	'Software and Automation Engineer', 'Fullstack (Web and Mobile) Developer', 'IT Support',
	'Automated Software Tester', 'Programming Tutor', 'ATM and Technical Engineer'
]
function Index () {
	console.log("Index component loaded");
	return (
		<>
			<BackgroundSlideshowProvider>
				<BackgroundSlideshow />
				<div className="tm-container">
					<div>
						<div
						// className='tm-row-baseline-align'
						>
						<div className="tm-row pt-4">
							<SiteIconAndSocials />
							<NavigationBar />
						</div>
						</div>
						<div className="tm-row">
							{/* left box */}
							<div className="tm-col-left">
								<div className='profile-container'>
									<img src={dafetite} alt="Dafetite Ogaga" className="dafetite-profile image-fade fade-in-from-top" />
									<div className="tm-col-left-content">
										<h1 style={{animationDelay: '0.s', margin: 0, fontSize: 36}}
										className="tm-sitename text-uppercase flip-and-fade-in">Dafetite O. Ogaga</h1>
										<p className='italiced underlined' style={{marginTop: -10}}>Email: <strong>ogagadafetite@gmail.com</strong></p>
										{skills.map((skill, index) => {
											const animetionDelay = `${0.4 + index * 0.4}s`;
											return (
												<p key={index}
												className="tm-slogon skill-fade-in-from-top" style={{
													animationDelay: animetionDelay,
													lineHeight: '0.3rem',
												}}>|| {skill}</p>
											)
										})}
										{/* <p className="tm-slogon">a personal portfolio</p>
										<p className="tm-slogon">a ReactJS project</p>
										<p className="tm-slogon">a template by <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-text-link">TemplateMo</a></p> */}
									</div>
								</div>
							</div>
								{/* right box (component) */}
								<Outlet />
						</div>
					</div>

					<div className="tm-row">
						<ManualBackgroundSelector />
						<Footer />
					</div>
				</div>
			</BackgroundSlideshowProvider>
		</>
	)
}
export {Index}
