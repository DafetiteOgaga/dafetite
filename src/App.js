import './App.css';
import './global.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
// import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
// import { AlertProvider } from "./context/alertContext";
// import Alert from "./components/Alert";

function App() {
 return (
  <ChakraProvider>
    <main>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="ogagadafetite" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/ogagadafetite?trk=profile-badge">Dafetite Ogaga</a></div>
      <Footer />
    </main>
  </ChakraProvider>
 );
}

export default App;
