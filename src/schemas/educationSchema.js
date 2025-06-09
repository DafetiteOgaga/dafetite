import React from "react";
import { Helmet } from "react-helmet";

const educationSchema = () => (
	<Helmet>
		<script type="application/ld+json">
			{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "EducationalOccupationalCredential",
			"credentialCategory": "ProfessionalCertificate",
			"educationalLevel": "Professional",
			"name": "Meta Advanced React",
			"awardedBy": {
				"@type": "Organization",
				"name": "Meta"
			}
			})}
		</script>
	</Helmet>
);

export default educationSchema;
