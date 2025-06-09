import React from "react";
import { Helmet } from "react-helmet";

const PersonSchema = () => (
	<Helmet>
		<script type="application/ld+json">
			{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				"name": "Dafetite Ogaga",
				"jobTitle": "Software and Automation Engineer",
				"url": "https://dafetiteogaga.github.io/dafetite/",
				"sameAs": [
				"https://www.linkedin.com/in/ogagadafetite/",
				"https://github.com/DafetiteOgaga"
				]
			})}
		</script>
	</Helmet>
);

export default PersonSchema;
