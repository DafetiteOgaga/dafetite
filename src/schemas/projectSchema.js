import React from "react";
import { Helmet } from "react-helmet";

const projectSchema = () => (
	<Helmet>
		<script type="application/ld+json">
			{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			"name": "Article Hive",
			"description": "A platform for authors and readers to publish and read articles.",
			"url": "https://github.com/dafetiteogaga/article-hive",
			"creator": {
				"@type": "Person",
				"name": "Dafetite Ogaga"
			},
			"programmingLanguage": "Python, JavaScript"
			})}
			</script>
	</Helmet>
);

export default projectSchema;
