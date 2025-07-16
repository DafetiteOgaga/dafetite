import React from 'react';
// import './css/bootstrap.min.css';
// import './fontawesome/css/all.min.css';
// import './css/templatemo-diagoona.css';
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from './hooks/backgroundSlideshow';
// import testimage from './img/diagoona-bg-1.jpg';

function Project () {
	console.log("Project component loaded");
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
                                <li className="nav-item active">
                                    <a className="nav-link tm-nav-link" href="about.html">About <span className="sr-only">(current)</span></a>
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
                    <section className="tm-content tm-about">
                        <h2 className="mb-5 tm-content-title">About Diagoona Template</h2>
                        <hr className="mb-4"/>
                        <div className="media my-3">
                            <i className="fas fa-shapes fa-3x p-3 mr-4"></i>
                            <div className="media-body">
                                <p>Cras quam urna, interdum at posuere ac, tincidunt ut ipsum. Nam condimentum placerat enim. Nullam euismod sapien.</p>
                            </div> 
                        </div>
                        <div className="media my-3">
                            <i className="fas fa-draw-polygon fa-3x p-3 mr-4"></i>
                            <div className="media-body">
                                <p>Nunc id hendrerit nunc. Etiam ultricies arcu sem, vel dapibus lacus lacinia quis. Nunc auctor placerat nisi ac ultrices.</p>
                            </div> 
                        </div>
                        <div className="media my-3">
                            <i className="fab fa-creative-commons-share fa-3x p-3 mr-4"></i>
                            <div className="media-body">
                                <p>Vestibulum imperdiet hendrerit nibh. Integer sit amet lacus et nunc auctor tincidunt eu ac sapien. Ut suscipit velit eget faucibus finibus.</p>
                            </div> 
                        </div>
                        <div className="media my-3">
                            <i className="fas fa-bookmark fa-3x p-3 mr-4"></i>
                            <div className="media-body">
                                <p>Prasent eget enim vitae sapien egestas aliquet non quis neque. Duis pharetra varius massa, ut bibendum tortor sodales ac.</p>
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
export {Project}
