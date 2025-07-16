import React from 'react';
// import './css/bootstrap.min.css';
// import './fontawesome/css/all.min.css';
// import './css/templatemo-diagoona.css';
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from './hooks/backgroundSlideshow';
// import testimage from './img/diagoona-bg-1.jpg';
import service1Image from './img/services-1.jpg';
import service2Image from './img/services-2.jpg';
import service3Image from './img/services-3.jpg';

function Services () {
	console.log("Services component loaded");
	// console.log('BackgroundSlideshow is:', BackgroundSlideshow);
	return (
		<>
			<BackgroundSlideshowProvider>
				<BackgroundSlideshow />
				<div className="tm-container">        
        <div>
            <div className="tm-row pt-4">
                <div className="tm-col-left">
                    <div className="tm-site-header media">
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
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link tm-nav-link" href="services.html">Services <span className="sr-only">(current)</span></a>
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
export {Services}
