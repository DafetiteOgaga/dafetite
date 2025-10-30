import React, {useState, useRef, useEffect, Fragment} from 'react';
// import '../App.css';
// import '../global.css';
import { Outlet } from 'react-router-dom';
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from '../hooks/backgroundSlideshow';
import { SiteIconAndSocials, Socials } from './siteIconAndSocials';
import { NavigationBar } from './navigationBar';
import { Footer } from './footer';
import dafetite from '../dafetite.png';
import resume from '../components/Dafetite_Ogaga.pdf';
import { useIsMobile } from '../hooks/IsMobile';
import { names, email, skills } from '../entry/Entry';
import { DafetiteSchema } from '../schemas/dafetiteSchema';

function MainIndex () {
	const isMobile = useIsMobile();
	// console.log("Index component loaded");
	const scrollRef = useRef(null); // Still passing for other usage
	const [isOverlayed, setIsOverlayed] = useState(false);
	const lastScrollTop = useRef(0);
	// const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const st = window.pageYOffset || document.documentElement.scrollTop;
		
			const scrollingUp = st < lastScrollTop.current;
			const scrollingDown = st > lastScrollTop.current;
			// const dots = '.';
			// console.log(
			// 	dots.repeat(15),
			// 	'\nscrollingUp:', scrollingUp,
			// 	'\nscrollingDown:', scrollingDown,
			// 	'\nisOverlayed:', isOverlayed,
			// 	'\nscrollTop:', st,
			// 	dots.repeat(15),
			// )
		
			const threshold = 150; // Adjust to taste
		
			// if (scrollingUp && st > threshold) {
			// 	setIsOverlayed(true);
			// } else if (scrollingDown) {
			// 	setIsOverlayed(false);
			// }
			if (scrollingDown && st > threshold) {
				setIsOverlayed(true);
			} else if (scrollingUp && st < threshold) {
				setIsOverlayed(false);
			}
			// else if (st !== 0 && scrollingUp) {
			// 	setIsOverlayed(true);
			// }
		
			lastScrollTop.current = st <= 0 ? 0 : st;
		};
	
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<>
			<DafetiteSchema />
			<BackgroundSlideshowProvider>
				<BackgroundSlideshow />
				<div className="tm-container">
					<div>
						<div
						// className='tm-row-baseline-align'
						>
						<div className="tm-row">
							<div style={{display: 'flex', justifyContent: isMobile?'space-around':'space-between', width: '100%'}}>
								<SiteIconAndSocials />
								<NavigationBar />
							</div>
							{isMobile && <Socials />}
						</div>
						</div>
						<div className="tm-row">
							{/* left box */}
							{isMobile ?
							// mobile view
							<div className='top-container-mobile'>
								<LeftBox />
							</div>
							:
							// desktop view
							// <div style={{display: 'flex', flexDirection: 'column'}}>
								<LeftBox />
								
							// </div>
							}
							
							<div id="is_contact" className='main-container'>
								{/* right box (component) */}
								<Outlet context={{ scrollRef, isOverlayed, setIsOverlayed }} />
								<div>
									<Footer />
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</BackgroundSlideshowProvider>
		</>
	)
}

function LeftBox() {
	const isMobile = useIsMobile();
	return (
		<div className="tm-col-left">
			<div className='profile-container'>
				<img src={dafetite} alt="Dafetite Ogaga" className="dafetite-profile image-fade slide-in-from-bottom" />
				{isMobile && <ManualBackgroundSelector />}
				<div className="tm-col-left-content">
					<PersonalInfo />
					{skills.map((skill, index) => {
						const animetionDelay = `${0.4 + index * 0.4}s`;
						return (
							<p key={index}
							className="tm-slogon skill-slogon skill-fade-in-from-top" style={{
								animationDelay: animetionDelay,
							}}>|| {skill}</p>
						)
					})}
					{/* <p className="tm-slogon">a personal portfolio</p>
					<p className="tm-slogon">a ReactJS project</p>
					<p className="tm-slogon">a template by <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-text-link">TemplateMo</a></p> */}
				</div>
				{!isMobile &&
				<div className='resume-container slide-in-from-bottom'>
					<GetResume />
				</div>}
			</div>
		</div>
	)
}

function PersonalInfo() {
	const isMobile = useIsMobile();
	return (
		<div>
				<h1 style={{animationDelay: '0.s'}}
				className="tm-sitename text-uppercase tm-profile-name flip-and-fade-in">
					{names}
				</h1>
				<p className='italiced underlined right-slide-in tm-email'>Email: <strong>{email}</strong></p>
			{isMobile &&
				<div className='left-slide-in' style={{marginBottom: '1.3rem'}}>
					<GetResume />
				</div>}
		</div>
	)
}

function GetResume() {
	return (
		<a
		href={resume}
		// download
		target="_blank"
		rel="noopener noreferrer"
		className="btn resume">
			<span>
				Get Resume
			</span>
		</a>
	)
}
export {MainIndex}
