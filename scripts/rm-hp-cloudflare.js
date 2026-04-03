const fs = require("fs");

/*
- If Cloudflare → REMOVE homepage
- If not (GitHub Pages or local) → KEEP it
*/

const isCloudflare = !!process.env.CF_PAGES;

console.log("🔍 Checking environment...");

if (!isCloudflare) {
	console.log("🟢 Not Cloudflare → Keep homepage (GitHub Pages will use it)");
	process.exit(0);
}

console.log("🟡 Cloudflare detected → Removing homepage...");

try {
	const packagePath = "./package.json";
	const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));

	if (packageData.homepage) {
		delete packageData.homepage;

		fs.writeFileSync(
		packagePath,
		JSON.stringify(packageData, null, 2)
		);

		console.log("✅ homepage removed for Cloudflare");
	} else {
		console.log("ℹ️ No homepage found. Nothing to remove.");
	}
} catch (err) {
	console.error("❌ Error editing package.json:", err);
}