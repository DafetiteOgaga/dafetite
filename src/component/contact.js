import React, {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBrevoEmail } from '../hooks/useBrevoEmail';
import { fetchBrevoKeyFromBackend } from '../hooks/useFetchApi';
// import { useIsMobile } from '../hooks/IsMobile';

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

async function getKey(apiKey, setApiKey, setApiEmail) {
	if (!apiKey) {
		// console.log('Fetching API key...');
		try {
			const endpoint = 'dafetite_brevo_api_key/dafetite_brevo_api'
			const response = await fetchBrevoKeyFromBackend(endpoint);
			if (response?.success && response?.key) {
				setApiKey(response.key);
				setApiEmail(response.email);
			} else {
				console.error('Failed to fetch API key:', response);
			}
		} catch (err) {
			console.error('Error while fetching API key:', err);
		}
	} else {
		// console.warn('Using existing API key');
	}
}

function Contact () {
	// console.log("Contact component loaded");
	const { sendContactEmails, success, loading, error, clearInfo } = useBrevoEmail(); // useBrevoEmail hook
	const { scrollRef, isOverlayed } = useOutletContext();
	const [formData, setFormData] = useState(formValues);
	const [apiKey, setApiKey] = useState(null);
	const [apiEmail, setApiEmail] = useState(null);

	const handleInputChange = (e) => {
		getKey(apiKey, setApiKey, setApiEmail);
		// console.log('apiKey:', apiKey);
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	// fetch API key on component mount
	useEffect(() => {
		if (!apiKey) getKey(apiKey, setApiKey, setApiEmail);
	}, []);

	const handleSubmit = async (e) => {
		// console.log("handleSubmit called");
		e.preventDefault();
		// console.warn('success before clearing:', success)
		clearInfo();
		// console.warn('success after clearing:', success)

		const config = {
			apiKey: apiKey, // 'brevo-api-key',
			apiEmail: apiEmail, // brevo email address
			ownerEmail: 'ogagadafetite@gmail.com', // your-email',
			senderName: 'Dafetite Ogaga', // 'Your Website Name'
		};

		const cleanedData = {...formData, subject: 'Message Received! - Email confirmation'};
		try {
			// passed formData and config to the hook
			await sendContactEmails(cleanedData, config);
			// Success
			toast.success(
				<div>
					{/* use success response */}
					Success! {success}
					<br />
					Kindly check your inbox
					<br />
					(or spam folder) for email
				</div>);
				setFormData(formValues); // Resets the form data
			// console.log("Emails sent successfully");
		} catch (err) {
			// Error
			toast.error(
				<div>
					{/* use error response */}
					Error: :::{error} ::::: {err.message}
				</div>);
			console.error("Failed to send emails:", error);
			console.error("Failed to send emails:", err);
		}
	};

	return (
		<>
			<main className="tm-col-right tm-contact-main">
				{/* <!-- contact --> */}
				<section className={`tm-content tm-contact fade-in-from-bottom scroll-container-mobile ${isOverlayed ? 'overlay' : ''}`}
				ref={scrollRef}>
					<h2 className="mb-4 tm-content-title fade-in-from-bottom">Contact Me</h2>
					<form onSubmit={handleSubmit}>
						{/* name and email */}
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
						{/* message */}
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
						{/* submit button */}
						<fieldset className="text-right">
							<button
							type="submit"
							// use loading responses to dynamically disable, add style, render texts on button
							style={loading ? styles.isSending : {}}
							className="btn btn-primary submit"
							disabled={loading}>
								{loading ? "Sending..." : "Send Message"}
							</button>
						</fieldset>
					</form>
				</section>
			</main>
		</>
	)
}

const styles = {
	isSending: {
		backgroundColor: '#9CC',
	}
}
export {Contact}
