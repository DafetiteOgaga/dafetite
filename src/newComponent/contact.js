import React from 'react';
// import './css/bootstrap.min.css';
// import './fontawesome/css/all.min.css';
// import './css/templatemo-diagoona.css';
import { BackgroundSlideshow, ManualBackgroundSelector, BackgroundSlideshowProvider } from './hooks/backgroundSlideshow';
// import testimage from './img/diagoona-bg-1.jpg';

function Contact () {
	console.log("Contact component loaded");
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
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="services.html">Services</a>
                                </li>                            
                                <li className="nav-item active">
                                    <a className="nav-link tm-nav-link" href="contact.html">Contact <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>                            
                        </div>                        
                    </nav>
                </div>
            </div>
            
            <div className="tm-row">
                <div className="tm-col-left"></div>
                <main className="tm-col-right tm-contact-main">
					{/* <!-- Content --> */}
                    <section className="tm-content tm-contact">
                        <h2 className="mb-4 tm-content-title">Contact Us</h2>
                        <p className="mb-85">Etiam et egestas arcu. Fusce congue quis elit vitae commodo. Cras neque mauris, vehicula in ipsum sit amet, faucibus aliquam arcu.</p>
                        <form id="contact-form" action="" method="POST">
                            <div className="form-group mb-4">
                                <input type="text" name="name" className="form-control" placeholder="Name" required="" />
                            </div>
                            <div className="form-group mb-4">
                                <input type="email" name="email" className="form-control" placeholder="Email" required="" />
                            </div>
                            <div className="form-group mb-5">
                                <textarea rows="6" name="message" className="form-control" placeholder="Message..." required=""></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-big btn-primary">Send It</button>
                            </div>
                        </form>
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

        {/* <div className="tm-bg"> <!-- Diagonal background design -->
            <div className="tm-bg-left"></div>
            <div className="tm-bg-right"></div>
        </div> */}
    </div>
			</BackgroundSlideshowProvider>
			
		</>
	)
}
export {Contact}
