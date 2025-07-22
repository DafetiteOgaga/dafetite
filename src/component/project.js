import React, {Fragment} from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { projectCardsContent } from '../entry/Entry';
import { useIsMobile } from '../hooks/IsMobile';

function Project () {
	const isMobile = useIsMobile();
	const { scrollRef, isOverlayed } = useOutletContext();
	// console.log("Project component loaded");
	return (
		<>
			<main className="tm-col-right">
				<section id='section-projects-id'
				className={`tm-content scroll-container-mobile ${isOverlayed ? 'overlay' : ''} fade-in-from-bottom`}
				ref={scrollRef}
				>
					{projectCardsContent.map((item, index) => {
						const animationDelay = '1s'
						return (
							<Fragment key={index}>
								<h2 style={{animationDelay: animationDelay}}
								className="tm-project-content-title underlined italiced">{item.status}</h2>
								{item.content.map((content, contentIndex) => {
									return (
											<div key={`${index}${contentIndex}`} className="fade-in-from-bottom">
												<Link to={content.url}
												target="_blank"
												rel="noopener noreferrer"
												style={{color: 'inherit', animationDelay: animationDelay}}
												className="media my-3 mb-5 tm-service-media tm-service-media-img-l link-hover">
													{contentIndex%2 ?
													<>
														{/* {!isMobile && <RenderImage content={content} reverse={true}/>} */}
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4, marginBottom: 0}}>{content.description}</p>
															<p style={{lineHeight: 1.4}}><span className='text-uppercase bolded'>Stacks:</span> <span className='italiced underlined'>{content.stack}</span></p>
														</div>
														<RenderImage content={content.getImageSrc} reverse={true}/>
													</>
													:
													<>
														{!isMobile && <RenderImage content={content.getImageSrc} reverse={false}/>}
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4,  marginBottom: 0}}>{content.description}</p>
															<p style={{lineHeight: 1.4}}><span className='text-uppercase bolded'>Stacks:</span> <span className='italiced underlined'>{content.stack}</span></p>
														</div>
														{isMobile && <RenderImage content={content.getImageSrc} reverse={false}/>}
													</>}
												</Link>
											</div>
									)
								})}
							</Fragment>
						)
					})}
				</section>
			</main>
		</>
	)
}

function RenderImage({ content, reverse }) {
	return (
		<img src={content} alt={content} className={`tm-service-img${reverse?'-r':''}`}/>
	)
}
export {Project, RenderImage};
