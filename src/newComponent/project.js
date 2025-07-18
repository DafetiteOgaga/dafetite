import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { projectCardsContent } from '../entry/Entry';

function Project () {
	console.log("Project component loaded");
	return (
		<>
			<main className="tm-col-right">
				<section id='section-projects-id' className="tm-content">
					{projectCardsContent.map((item, index) => {
						const animationDelay = '1s'
						return (
							<Fragment key={index}>
								<h2 style={{animationDelay: animationDelay}}
								className="tm-project-content-title underlined italiced">{item.status}</h2>
								{item.content.map((content, contentIndex) => {
									return (
											<Fragment key={`${index}${contentIndex}`}>
												<Link to={content.url}
												target="_blank"
												rel="noopener noreferrer"
												style={{color: 'inherit', animationDelay: animationDelay}}
												className="media my-3 mb-5 tm-service-media tm-service-media-img-l link-hover">
													{contentIndex%2 ?
													<>
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4}}>{content.description}</p>
														</div>
														<img src={content.getImageSrc} alt={content.getImageSrc} className={"tm-service-img-r"}/>
													</>
													:
													<>
														<img src={content.getImageSrc} alt={content.getImageSrc} className={"tm-service-img"}/>
														<div className="media-body tm-service-text">
															<h2 style={{marginTop: -7}} className="mb-0 tm-project-content-title"><strong>{content.title}</strong></h2>
															<p style={{lineHeight: 1.4}}>{content.description}</p>
														</div>
													</>}
												</Link>
											</Fragment>
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
export {Project}
