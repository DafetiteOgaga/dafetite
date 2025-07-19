// hooks/BackgroundSlideshow.jsx
import React, { useContext, useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import bg1 from '../newComponent/img/diagoona-bg-1.jpg';
import bg2 from '../newComponent/img/diagoona-bg-2.jpg';
import bg3 from '../newComponent/img/diagoona-bg-3.jpg';
// import bg from '../newComponent/img/diagoona-bg-4.jpg'; // Assuming this is the correct path for bg4

const BackgroundContext = createContext(null);

const BackgroundSlideshowProvider = ({children, autoplay = true}) => {
//   const bgImgs = [bg1, bg2, bg3]; // Add more images as needed
  const bgImgs = [bg3]; // Add more images as needed

	const [currentIndex, setCurrentIndex] = useState(0);
	const [paused] = useState(!autoplay);
	const [bgHeight, setBgHeight] = useState(window.innerHeight);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 	// autoplay slideshow
	useEffect(() => {
		if (paused) return;

		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % bgImgs.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [paused, bgImgs.length]);

	// resize logic for overlay
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setBgHeight(document.body.offsetHeight);
		};

		handleResize(); // set initial

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// call "after" logic manually when image changes
	useEffect(() => {
		// console.log('Slide changed to index:', currentIndex);
		// You can fire events here like jQuery's 'backstretch.after'
	}, [currentIndex]);

	// console.log("\nCurrent background image:", bgImgs[currentIndex], "\nat index:", currentIndex);
	const value = {
		current: bgImgs[currentIndex],
		currentIndex,
		setCurrentIndex,
		isLast: currentIndex === bgImgs.length - 1,
		allBackgrounds: bgImgs,
		displayHeight: bgHeight,
		displayWidth: windowWidth,
	};
	return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>
};

const BackgroundSlideshow = () => {
	const path = useLocation().pathname.split('/').pop();
	// console.log("Current path in BackgroundSlideshow:", path); // Debugging line to check the current path
	let extendDiagonal;
	if (path.toLowerCase() === 'projects') {
		extendDiagonal = {LRwidth: '40%', Rwidth: '60%', tmMarginLeft: '-150px', tmMaxWidth: '60%', tmMaxHeight: '550px'};
	} else if (path.toLowerCase() === 'contact') {
		extendDiagonal = {LRwidth: '60%', Rwidth: '40%', tmMarginLeft: 'auto', tmMaxWidth: '525px', tmMaxHeight: '510px'};
	} else if (path.toLowerCase() === 'videos') {
		console.log("Videos path detected");
		extendDiagonal = {LRwidth: '50%', Rwidth: '50%', tmMarginLeft: 'auto', tmMaxWidth: '525px', tmMaxHeight: '550px'};
	} else {
		extendDiagonal = {LRwidth: '50%', Rwidth: '50%', tmMarginLeft: 'auto', tmMaxWidth: '525px', tmMaxHeight: '510px'};
	}
	const { current, displayHeight, displayWidth } = useBackground()
	const tmBgLeftStyle = displayWidth > 768
    ? {
        borderLeft: '0',
        borderTop: `${displayHeight}px solid transparent`,
	}
    : {
        borderLeft: `${displayWidth}px solid transparent`,
        borderTop: '0',
	};
	// adjust section element dynamically
	useEffect(() => {
		// console.log("Applying styles for path:", path);
		const sectionElementProjects = document.getElementById('section-projects-id');
		const sectionElementVideos = document.getElementById('section-videos-id');
	
		// Reset any previously applied styles
		if (sectionElementProjects) {
			sectionElementProjects.style.marginLeft = '0';
			sectionElementProjects.style.maxWidth = '100%';
			sectionElementProjects.style.maxHeight = 'initial';
		}
	
		// Now apply current path-specific styles
		if (sectionElementProjects && path === 'projects') {
			sectionElementProjects.style.marginLeft = extendDiagonal.tmMarginLeft;
			sectionElementProjects.style.maxWidth = extendDiagonal.tmMaxWidth;
			sectionElementProjects.style.maxHeight = extendDiagonal.tmMaxHeight;
		}
		if (sectionElementVideos && path === 'videos') {
			sectionElementVideos.style.maxHeight = extendDiagonal.tmMaxHeight;
		}
	}, [path]);
	
	return (
		<>
			{/* <div style={slideshowStyle}></div> */}
			<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				zIndex: -20,
			}}
			>
				<img
					src={current}
					alt="Background Slideshow"
					style={{
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				/>
			</div>

			{/* Diagonal background */}
			<div className="tm-bg right-slide-in">
				<div className="tm-bg-left" style={{...tmBgLeftStyle, ...{width: extendDiagonal.LRwidth}}}></div>
				<div className="tm-bg-right" style={{...{width: extendDiagonal.Rwidth}}}></div>
			</div>
		</>
	)
}

const ManualBackgroundSelector = () => {
	const { allBackgrounds, setCurrentIndex, currentIndex } = useBackground()
	const handleControlClick = (index) => {
		setCurrentIndex(index);
	};
	return (
		<>
			{/* Manual background selectors */}
			<div className="tm-col-left text-center">
				<ul className="tm-bg-controls-wrapper">
					{allBackgrounds.map((_, idx) => (
						<li	key={idx}
							className='tm-bg-control'
							onClick={() => handleControlClick(idx)}
							style={{
							// 	display: 'inline-block',
							// 	width: 10,
							// 	height: 10,
							// 	margin: 5,
							// 	borderRadius: '50%',
								backgroundColor: idx === currentIndex ? 'white' : 'gray',
							// 	cursor: 'pointer',
							}}
						/>
					))}
				</ul>
			</div>
		</>
	)
}

const useBackground = () => useContext(BackgroundContext);
export {
	useBackground,
	BackgroundSlideshowProvider,
	BackgroundSlideshow,
	ManualBackgroundSelector
};
