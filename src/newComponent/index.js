import React from 'react';
// import './css/bootstrap.min.css';
// import './fontawesome/css/all.min.css';
// import './css/templatemo-diagoona.css';
import { Link } from 'react-router-dom'
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from './hooks/backgroundSlideshow';
// import testimage from './img/diagoona-bg-1.jpg';

function Index () {
	console.log("Index component loaded");
	// console.log('BackgroundSlideshow is:', BackgroundSlideshow);
	return (
		<>
			<BackgroundSlideshowProvider>
				<BackgroundSlideshow />
				<div className="tm-container">
					<div>
						<div className="tm-row pt-4">
							<div className="tm-col-left">
								<div className="tm-site-header media left-slide-in">
									<i className="fas fa-umbrella-beach fa-3x mt-1 tm-logo"></i>
									<div className="media-body">
										<h1 className="tm-sitename text-uppercase">diagoona</h1>
										<p className="tm-slogon">new bootstrap template</p>
									</div>        
								</div>
							</div>
							<div className="tm-col-right">
								<nav className="navbar navbar-expand-lg" id="tm-main-nav">
									<button className="navbar-toggler toggler-example mr-0 ml-auto" type="button" 
										data-toggle="collapse" data-target="#navbar-nav" 
										aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
										<span><i className="fas fa-bars"></i></span>
									</button>
									<div className="collapse navbar-collapse tm-nav" id="navbar-nav">
										<ul className="navbar-nav text-uppercase">
											<li className="nav-item active">
												<a className="nav-link tm-nav-link" href="##">Home <span className="sr-only">(current)</span></a>
											</li>
											<li className="nav-item">
												<a className="nav-link tm-nav-link" href="about.html">About</a>
											</li>
											<li className="nav-item">
												<a className="nav-link tm-nav-link" href="services.html">Services</a>
											</li>                            
											<li className="nav-item">
												<a className="nav-link tm-nav-link" href="contact.html">Contact</a>
											</li>
										</ul>                            
									</div>                        
								</nav>
							</div>
						</div>
						
						<div className="tm-row">
							<div className="tm-col-left"></div>
							<main className="tm-col-right">
								<section className="tm-content">
									<h2 className="mb-5 tm-content-title">Diagoona HTML Template</h2>
									<p className="mb-5">Diagoona is provided by TemplateMo website. You are allowed to use this template for your websites. You are NOT allowed to redistribute this template ZIP file for a download purpose on any template collection website.</p>
									<hr className="mb-5"/>
									<p className="mb-5">Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You can set the background images auto play settings (true or false in line number 33) in templatemo-script.js file in js folder.</p>                        
									<Link to="/projects" className="btn btn-primary">Continue...</Link>
								</section>
							</main>
						</div>
					</div>

					<div className="tm-row">
						<ManualBackgroundSelector />
						<div className="tm-col-right tm-col-footer">
							<footer className="tm-site-footer text-right">
								<p className="mb-0">Copyright 2020 Diagoona Co. 
								
								| Design: <a rel="nofollow" target="_parent" href="https://templatemo.com" className="tm-text-link">TemplateMo</a></p>
							</footer>
						</div>  
					</div>

					{/* <!-- Diagonal background design --> */}
					{/* <div className="tm-bg">
						<div className="tm-bg-left"></div>
						<div className="tm-bg-right"></div>
					</div> */}
				</div>
			</BackgroundSlideshowProvider>
			
		</>
	)
}
export {Index}
