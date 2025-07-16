import './App.css';
import './global.css';
import './newComponent/css/bootstrap.min.css';
import './newComponent/fontawesome/css/all.min.css';
import './newComponent/css/templatemo-diagoona.css';
import './newComponent/css/motion.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
// import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import DafetiteSchema from './schemas/dafetiteSchema';
// import WebsiteSchema from './schemas/websiteSchema';
// import { AlertProvider } from "./context/alertContext";
// import Alert from "./components/Alert";
import { useSetHeadTag } from './hooks/useSetHeadTag'
import AppRoutes from './newComponent/routes/Route';
import { useLocation } from 'react-router-dom';

function App() {
  useSetHeadTag()
  const path = useLocation().pathname;
  console.log("Current path:", path); // Debugging line to check the current path
  const isMainSite = path === '/';
  return (
    <>
      <AppRoutes />
      {isMainSite && <ChakraProvider>
        <DafetiteSchema />
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ogagadafetite" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/ogagadafetite?trk=profile-badge">Dafetite Ogaga</a></div> */}
          <Footer />
        </main>
      </ChakraProvider>}
    </>
  );
}

export default App;
