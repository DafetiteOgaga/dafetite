import React, {useState, useRef, useEffect} from 'react';
// import '../App.css';
// import '../global.css';
import { Outlet } from 'react-router-dom';
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from '../hooks/backgroundSlideshow';
import { SiteIconAndSocials, Socials } from './siteIconAndSocials';
import { NavigationBar } from './navigationBar';
import { Footer } from './footer';
import dafetite from '../dafetite.png';
import resume from '../Dafetite_Ogaga.pdf';
import { useIsMobile } from '../hooks/IsMobile';

const skills = [
	'Software and Automation Engineer', 'Fullstack (Web and Mobile) Developer', 'IT Support',
	'Automated Software Tester', 'Programming Tutor', 'ATM and Technical Engineer'
]
function Index () {
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
			const dots = '.';
			console.log(
				dots.repeat(15),
				'\nscrollingUp:', scrollingUp,
				'\nscrollingDown:', scrollingDown,
				'\nisOverlayed:', isOverlayed,
				'\nscrollTop:', st,
				dots.repeat(15),
			)
		
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
							{isMobile && <Socials />}
						</div>
						</div>
						<div className="tm-row">
							{/* left box */}
							{isMobile ?
							<div className='top-container-mobile'>
								<LeftBox />
							</div>
							:
							<LeftBox />}
								{/* right box (component) */}
								<Outlet context={{ scrollRef, isOverlayed, setIsOverlayed }} />
						</div>
					</div>

					<div className="tm-row">
						{!isMobile && <ManualBackgroundSelector />}
						<Footer />
					</div>
				</div>
			</BackgroundSlideshowProvider>
		</>
	)
}

function LeftBox() {
	return (
		<div className="tm-col-left">
			<div className='profile-container'>
				<img src={dafetite} alt="Dafetite Ogaga" className="dafetite-profile image-fade fade-in-from-top" />
				<div className="tm-col-left-content">
					<div className='flex-display'>
						<h1 style={{animationDelay: '0.s'}}
						className="tm-sitename text-uppercase tm-profile-name flip-and-fade-in">
							Dafetite O. Ogaga
						</h1>
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
					</div>
					<p className='italiced underlined' style={{marginTop: -10}}>Email: <strong>ogagadafetite@gmail.com</strong></p>
					{skills.map((skill, index) => {
						const animetionDelay = `${0.4 + index * 0.4}s`;
						return (
							<p key={index}
							className="tm-slogon skill-slogon skill-fade-in-from-top" style={{
								animationDelay: animetionDelay,
								// lineHeight: '1rem',
							}}>|| {skill}</p>
						)
					})}
					{/* <p className="tm-slogon">a personal portfolio</p>
					<p className="tm-slogon">a ReactJS project</p>
					<p className="tm-slogon">a template by <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-text-link">TemplateMo</a></p> */}
				</div>
			</div>
		</div>
	)
}
export {Index}
