import React from "react";
import '../App.css'
import '../global.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import LandingSection from "./LandingSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";
import DafetiteSchema from '../schemas/dafetiteSchema';
import { useSetHeadTag } from '../hooks/useSetHeadTag';

function OldPortfolio() {
	useSetHeadTag()
	return (
		<ChakraProvider>
			<DafetiteSchema />
			<main>
				<Header />
				<LandingSection />
				<ProjectsSection />
				{/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ogagadafetite" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/ogagadafetite?trk=profile-badge">Dafetite Ogaga</a></div> */}
				<Footer />
			</main>
		</ChakraProvider>
	)
}
export { OldPortfolio };
