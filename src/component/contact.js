import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import { useIsMobile } from '../hooks/IsMobile';

const formInputValues = [
	{
		type: "text",
		name: "name",
		id: "name",
		placeholder: "Your Name",
	},
	{
		type: "email",
		name: "email",
		id: "email",
		placeholder: "Email",
	}
]
const formValues = {
	name: "",
	email: "",
	message: ""
}

function Contact () {
	const isMobile = useIsMobile();
	const [isSending, setIsSending] = useState(false);
	const { scrollRef, isOverlayed } = useOutletContext();
	const [formData, setFormData] = useState(formValues);
	const handleInputChange = (e) => {
		// toast.success(<div><strong>Success:</strong> Message sent successfully!</div>);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSending(true);

		// First, send the message youself, site owner (you)
		emailjs.send(
			'service_2x0u2dm',      // your service ID
			'template_ddksigd',     // Template A - message to you
			formData,
			'qQE_DwjBJWwq6sEOg'     // your public key
			).then(() => {
				// Then send acknowledgment to the sender
				emailjs.send(
					'service_2x0u2dm',    // same service
					'template_5w7eds8',   // Template B - thank-you to user
					formData,
					'qQE_DwjBJWwq6sEOg'   // your public key
				).then(() => {
					toast.success(
						<div>
							<strong>Success:</strong> Message sent successfully!
						</div>);
					setFormData(formValues);
				}).catch((error) => {
					toast.error(
						<div>
							<strong>Failed:</strong> {error.text}
						</div>);
				});

			}).catch((error) => {
				alert('Failed to send message: ' + error.text);
			}).finally(() => {
				setIsSending(false);
			});
	};
	// console.log("Contact component loaded");
	return (
		<>
			<main className="tm-col-right tm-contact-main">
				{/* <!-- contact --> */}
				<section className={`tm-content tm-contact fade-in-from-bottom scroll-container-mobile ${isOverlayed ? 'overlay' : ''}`}
				ref={scrollRef}
				>
					<h2 className="mb-4 tm-content-title fade-in-from-bottom">Contact Us</h2>
					{/* <p className="mb-85">
						Etiam et egestas arcu. Fusce congue quis elit vitae commodo. Cras neque mauris,
						vehicula in ipsum sit amet, faucibus aliquam arcu.
					</p> */}
					<form onSubmit={handleSubmit}>
							{formInputValues.map((input, index) => (
								<fieldset className="form-group mb-4" key={index}>
									<input
										key={index}
										type={input.type}
										name={input.name}
										className="form-control"
										id={input.id}
										placeholder={input.placeholder}
										value={formData[input.name]}
										onChange={handleInputChange}
										required
									/>
								</fieldset>
							))}
						{/* </fieldset> */}
						<fieldset className="form-group mb-4">
							<textarea
							name="message"
							rows="6"
							className="form-control"
							id="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleInputChange}
							required
							></textarea>
						</fieldset>
						<fieldset className="text-right">
							<button
							type="submit"
							// id="form-submit"
							className="btn btn-primary submit"
							disabled={isSending}>
								{isSending ? "Sending..." : "Send Message"}
							</button>
						</fieldset>
						{/* <div className="text-right">
							<button type="submit" className="btn btn-big btn-primary">Send It</button>
						</div> */}
					</form>
				</section>
			</main>
		</>
	)
}
export {Contact}
