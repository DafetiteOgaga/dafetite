import React from "react";
import { Helmet } from "react-helmet";

const WebsiteSchema = () => (
	<Helmet>
		<script type="application/ld+json">
			{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebSite",
				"name": "Dafetite Ogaga's Website",
				"url": "https://dafetiteogaga.github.io/dafetite/"
			})}
		</script>
	</Helmet>
);

export default WebsiteSchema;
