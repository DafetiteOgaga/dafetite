import React from "react";
import { Helmet } from "react-helmet";

const organizationSchema = () => (
	<Helmet>
		<script type="application/ld+json">
			{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Altaviz Support Limited",
			"url": "https://altavizsupport.com",
			"logo": "https://altavizsupport.com/logo.png",
			"sameAs": [
				"https://linkedin.com/company/altaviz-support"
			],
			"founder": {
				"@type": "Person",
				"name": "Dafetite Ogaga"
			}
			})}
		</script>
	</Helmet>
);

export default organizationSchema;
