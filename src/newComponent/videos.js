import React, {Fragment, useState, useRef } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useIsMobile } from '../hooks/IsMobile';
import { videoCardsContent } from '../entry/Entry';
import { RenderImage } from './project';

function Videos () {
	const { scrollRef, isOverlayed } = useOutletContext();
	// console.log("Videos component loaded");
	const [selectedVideo, setSelectedVideo] = useState(null);
	// console.log('BackgroundSlideshow is:', BackgroundSlideshow);
	const isMobile = useIsMobile();
	return (
		<>
			<main className="tm-col-right">
				<section id='section-videos-id'
				className={`tm-content scroll-container-mobile ${isOverlayed ? 'overlay' : ''}`}
				ref={scrollRef}
				>
				{videoCardsContent.map((item, index) => {
					const video = item.status.toLowerCase() === 'videos';
					const animationDelay = '0s'
					return (
						<Fragment key={index}>
							<h2 style={{animationDelay: animationDelay}}
							className="tm-project-content-title underlined italiced fade-in-from-bottom">{item.status}</h2>
							{item.content.map((content, contentIndex) => {
								const last = item.content.length - 1 === contentIndex;
								// (last&&video) && console.log("Last content:", content.title);
								return (
										<div key={`${index}${contentIndex}`} className="fade-in-from-bottom">
											{video ?
												<div
												style={{
													animationDelay: animationDelay,
													cursor: 'pointer',
												}}
												onClick={()=>setSelectedVideo(content.videoSrc)}
												className={`media my-3 mb-5 tm-service-media tm-service-media-img-l ${(last&&video) && 'remove-margin-bottom'} link-hover`}>
													{contentIndex%2 ?
													<>
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4}}>{content.description}</p>
														</div>
														<RenderImage content={content.thumbnail} reverse={true}/>
													</>
													:
													<>
														{!isMobile && <RenderImage content={content.thumbnail} reverse={false}/>}
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4}}>{content.description}</p>
														</div>
														{isMobile && <RenderImage content={content.thumbnail} reverse={false}/>}
													</>}
												</div>
												:
												<Link to={content.url}
												target="_blank"
												rel="noopener noreferrer"
												style={{color: 'inherit', animationDelay: animationDelay}}
												// className="media my-3 mb-5 tm-service-media tm-service-media-img-l fade-in-from-bottom">
												className="media my-3 mb-5 tm-service-media tm-service-media-img-l link-hover">
													{contentIndex%2 ?
													<>
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4}}>{content.description}</p>
														</div>
														<RenderImage content={content.getImageSrc} reverse={true}/>
													</>
													:
													<>
														{!isMobile && <RenderImage content={content.getImageSrc} reverse={false}/>}
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4}}>{content.description}</p>
														</div>
														{isMobile && <RenderImage content={content.getImageSrc} reverse={false}/>}
													</>}
												</Link>}
										</div>
								)
							})}
							{/* <br/> */}
						</Fragment>
					)
				})}
				</section>
			</main>
			<Modal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
		</>
	)
}

const Modal = ({selectedVideo, setSelectedVideo}) => {
	const isMobile = useIsMobile();
	const videoRef = useRef(null);
	const [isPortrait, setIsPortrait] = useState(false);
	const handleMetadata = () => {
		const video = videoRef.current;
		if (video) {
		const { videoWidth, videoHeight } = video;
		setIsPortrait(videoHeight > videoWidth);
		}
	};
	return (
		<>
		{/* Modal */}
		{selectedVideo && (
			<div
				onClick={() => setSelectedVideo(null)}
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100vh",
					backgroundColor: "rgba(0, 0, 0, 0.8)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					zIndex: 999,
				}}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					style={{
					width: isMobile ? "90%" : "70%",
					backgroundColor: "#000",
					borderRadius: "10px",
					overflow: "hidden",
					position: "relative",
					}}
				>
					<video
						ref={videoRef}
						src={selectedVideo}
						controls
						autoPlay
						onLoadedMetadata={handleMetadata}
						style={{
							width: (isPortrait&&isMobile)?"100":isPortrait?"35%":"100%",
							height: "auto",
							objectFit: "cover",
							display: 'flex',
							justifySelf: "center",
						}}
					/>
					<button
						onClick={() => setSelectedVideo(null)}
						style={{
							position: "absolute",
							top: "10px",
							right: "10px",
							// background: "#fff",
							border: "none",
							borderRadius: "4px",
							padding: "0.5rem",
							cursor: "pointer",
						}}
					>
						<span style={{
							fontSize: isMobile?12:17,
							// border: "1px solid #fff",
							// padding: '0px',
							borderRadius: 10,
							// backgroundColor: "rgba(0, 0, 0, 0.6)",
							}}>
							X
						</span>
					</button>
				</div>
			</div>
			)}
		</>
	)
}

export {Videos}
