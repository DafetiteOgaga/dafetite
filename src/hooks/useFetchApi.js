import { useState } from "react";

const getBaseURL = () => {
	const host = window.location.hostname;
	if (host === 'localhost' || host === '127.0.0.1') {
		console.log('Running in development mode');
		// /dafetite_brevo_api_key/dafetite_brevo_api
		return 'http://127.0.0.1:8000/';
	}
	console.log('Running in production mode');
	return 'https://dafetiteapiendpoint.pythonanywhere.com/';
};

function buildFormData(formData, data, parentKey = '') {
	if (data === undefined || data === null) {
		return null;
	}
	if (data && typeof data === 'object' && !(data instanceof File)) {
		if (Array.isArray(data)) {
			data.forEach((value, index) => {
				buildFormData(formData, value, `${parentKey}[${index}]`);
			});
		} else {
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
				}
			}
		}
	} else {
		// For primitives or File objects
		formData.append(parentKey, data ?? '');
	}
	return formData;
}

const serverOrigin = getBaseURL();
async function fetchBrevoKeyFromBackend(endpoint, method = 'GET', body = null) {
	// const [stateData, setStateData] = useState(null);
	// console.log('fetchBrevoKeyFromBackend called')
	const finalUrl = `${serverOrigin}${endpoint}/`;
	// console.log('finalUrl:', finalUrl);
	try {
		let options = {
			method: method.toUpperCase(),
		};

		// Set headers and body based on method and body content

		if (!body) {
			// if GET method, no body is sent, headers are set
			options.headers = {
				'Accept': 'application/json',
				// add auth or other headers here...
			};
		} else {
			// if POST, PATCH or PUT method, body is sent, headers are handled by browser
			const formData = buildFormData(new FormData(), body);
			options.body = formData;
			// browser will handles headers..
		}
		// make the fetch request
		const response = await fetch(finalUrl, options);

		// Check if the response is ok (status in the range 200-299)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Parse the JSON response
		const data = await response.json();
		// console.log('Success:', data);
		return data;

	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

export { fetchBrevoKeyFromBackend, serverOrigin };
