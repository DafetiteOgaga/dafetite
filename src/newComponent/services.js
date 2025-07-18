import React from 'react';
import service1Image from './img/services-1.jpg';
import service2Image from './img/services-2.jpg';
import service3Image from './img/services-3.jpg';

function Services () {
	console.log("Services component loaded");
	// console.log('BackgroundSlideshow is:', BackgroundSlideshow);
	return (
		<>
			<main className="tm-col-right fade-in-from-bottom">
				<section className="tm-content">
					<div className="media my-3 mb-5 tm-service-media tm-service-media-img-l">
						<img src={service1Image} alt={service1Image} className="tm-service-img"/>
						<div className="media-body tm-service-text">
							<h2 className="mb-4 tm-content-title">Best Services for you</h2>
							<p>Our template is simple and effective. This is an alternating simple content with a squared size image. Menu hover is #9CC and text #FFF</p>
						</div>
					</div>
					<div className="media my-3 mb-5 tm-service-media">
						<div className="media-body tm-service-text">
							<h2 className="mb-4 tm-content-title">Customer Satisfaction</h2>
							<p>Feel free to contact TemplateMo for any kind of question. If you wish to support us, you can make a PayPal donation. Thank you.</p>
						</div>
						<img src={service2Image} alt={service2Image} className="tm-service-img-r"/>
					</div>
					<div className="media my-3 tm-service-media tm-service-media-img-l">
						<img src={service3Image} alt={service3Image} className="tm-service-img"/>
						<div className="media-body tm-service-text">
							<h2 className="mb-4 tm-content-title">Template Usage</h2>
							<p>You are free to use this template for your website either commercial or personal.</p>
							<p>You are NOT allowed to redistribute this template ZIP file for a download purpose on any template collection website.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
export {Services}
