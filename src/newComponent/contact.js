import React from 'react';

function Contact () {
	console.log("Contact component loaded");
	return (
		<>
			<main className="tm-col-right fade-in-from-bottom tm-contact-main">
				{/* <!-- contact --> */}
				<section className="tm-content tm-contact">
					<h2 className="mb-4 tm-content-title">Contact Us</h2>
					{/* <p className="mb-85">
						Etiam et egestas arcu. Fusce congue quis elit vitae commodo. Cras neque mauris,
						vehicula in ipsum sit amet, faucibus aliquam arcu.
					</p> */}
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
		</>
	)
}
export {Contact}
