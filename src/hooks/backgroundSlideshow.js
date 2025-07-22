// hooks/BackgroundSlideshow.jsx
import React, { useContext, useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import bg1 from '../bgImages/bg_pc3.jpg';
import { useIsMobile } from './IsMobile';
const images = require.context('../bgImages', false, /\.(png|jpe?g|svg)$/);
// const getBGImage = (name) => (images(`./${name}`)) // to get a specific image by name
const getBGImages = () => images.keys().map((key) => images(key)); // to get all images in the folder
const imageDuration = 21000; // 21 seconds for each image
const imageVisibleDuration = 20000; // 20 seconds for each image to be visible
const transitionDuration = `opacity ${(imageDuration - imageVisibleDuration) / 1000}s ease-in-out` // 1 second for transition

const BackgroundContext = createContext(null);

const BackgroundSlideshowProvider = ({children, autoplay = true}) => {
	const isMobile = useIsMobile();
	const bgImagesArr = getBGImages().filter(img =>
		isMobile ? img.includes('bg_phone') : true);
	const bgImgs = [bg1]; // Add more images as needed

	const [currentIndex, setCurrentIndex] = useState(0);
	const [paused] = useState(!autoplay);
	const [bgHeight, setBgHeight] = useState(window.innerHeight);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 	// autoplay slideshow
	useEffect(() => {
		if (paused) return;

		const interval = setInterval(() => {
			setCurrentIndex(prev => (prev + 1) % bgImagesArr.length);
		}, imageDuration);

		return () => clearInterval(interval);
	}, [paused, bgImagesArr.length]);

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
		current: bgImagesArr[currentIndex],
		currentIndex,
		setCurrentIndex,
		isLast: currentIndex === bgImagesArr.length - 1,
		allBackgrounds: bgImagesArr,
		displayHeight: bgHeight,
		displayWidth: windowWidth,
	};
	return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>
};

const BackgroundSlideshow = () => {
	const isMobile = useIsMobile();
	const path = useLocation().pathname.split('/').pop();
	// console.log("Current path in BackgroundSlideshow:", path); // Debugging line to check the current path
	let extendDiagonal;
	if (path.toLowerCase() === 'projects') {
		extendDiagonal = {LRwidth: '50%', Rwidth: '50%', tmMarginLeft: '-150px', tmMaginLeft: '5%'};
	} else if (path.toLowerCase() === 'contact') {
		extendDiagonal = {LRwidth: '58%', Rwidth: '42%', tmMarginLeft: 'auto', tmMaginLeft: '15%'};
	} else if (path.toLowerCase() === 'videos') {
		extendDiagonal = {LRwidth: '47%', Rwidth: '53%', tmMarginLeft: 'auto', tmMaginLeft: '5%'};
	} else {
		extendDiagonal = {LRwidth: '48%', Rwidth: '52%', tmMarginLeft: 'auto', tmMaginLeft: '5%'};
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

	const [fade, setFade] = useState(false);
	const [prevImage, setPrevImage] = useState(null);

	// Watch for current background image change and trigger fade
	useEffect(() => {
		if (!current) return;

		setPrevImage(current);       // Keep a copy of the last image
		setFade(true);               // Start fade effect

		const timeout = setTimeout(() => {
			setFade(false)}, imageVisibleDuration); // End fade after 1s
		return () => clearTimeout(timeout);
	}, [current]);


	// adjust element dynamically
	useEffect(() => {
		if (!isMobile) {
			const divElementContact = document.getElementById('is_contact');
			// console.log("divElementContact:", divElementContact);
			// console.log('path:', path);

			// Reset any previously applied styles
			if (divElementContact) {
				divElementContact.style.marginLeft = '5%';
			}
			if (divElementContact && path === 'contact') {
				divElementContact.style.marginLeft = extendDiagonal.tmMaginLeft;
			}
		}
	}, [path]);
	return (
		<>
			<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100vh',
				width: '100%',
				overflowX: 'hidden',
				zIndex: -20,
			}}
			>
				{/* <img
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
				/> */}
				{/* Previous image fades out */}
				{/* {prevImage && (
					<img
						src={prevImage}
						alt="Previous"
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'cover',
							position: 'absolute',
							top: 0,
							left: 0,
							opacity: fade ? 1 : 0,
							transition: 'opacity 2s ease-in-out',
						}}
					/>
				)} */}

				{/* Current image fades in */}
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
						opacity: fade ? 1 : 0,
						transition: transitionDuration,
					}}
				/>
			</div>

			{/* Diagonal background */}
			<div className="tm-bg right-slide-in">
				<div className="tm-bg-left" style={{...tmBgLeftStyle, ...{width: extendDiagonal.LRwidth}}}></div>
				<div className="tm-bg-right" style={{...{width: isMobile?'100%':extendDiagonal.Rwidth}}}></div>
			</div>
		</>
	)
}

const ManualBackgroundSelector = () => {
	const isMobile = useIsMobile();
	const [next, setNext] = useState(0);
	const { allBackgrounds, setCurrentIndex, currentIndex } = useBackground()
	const handleControlClick = (index) => {
		if (isMobile) return; // Disable manual control on mobile
		setCurrentIndex(index);
	};
	const itemOfSix = Array.from({ length: 6 }, (_, i) => i);
	useEffect(() => {
		const motionInterval = setInterval(() => {
			setNext(prev => (prev + 1) % itemOfSix.length);
		}, 1000);
		return () => clearInterval(motionInterval);
	}, []);
	// console.log('itemOfSix:', itemOfSix);
	return (
		<>
			{/* Manual background selectors */}
			<div className="tm-col-left text-center background-selector right-slide-in">
				<ul className="tm-bg-controls-wrapper">
					{itemOfSix.map((_, idx) => {
						// console.log('item:', _);
						const first = idx === 0;
						const third = idx === 2;
						const fourth = idx === 3;
						const last = idx === itemOfSix.length - 1;
						// console.log('first:', first, 'third:', third, 'fourth:', fourth, 'last:', last);
						return (
						<li	key={idx}
							className='tm-bg-control'
							onClick={() => handleControlClick(idx)}
							style={{
							// 	display: 'inline-block',
							// 	width: 10,
							// 	height: 10,
							// 	margin: 5,
							// 	borderRadius: '50%',
							borderTopLeftRadius: first ? 5 : 0,
							borderBottomLeftRadius: fourth ? 5 : 0,
							borderTopRightRadius: third ? 5 : 0,
							borderBottomRightRadius: last ? 5 : 0,
							backgroundColor: idx === next ? 'transparent' : 'snow',
							// backgroundColor: 'gray',
							// 	cursor: 'pointer',
							}}
						/>
					)})}
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
