import './App.css';
import './global.css';
import './newComponent/css/bootstrap.min.css';
import './newComponent/fontawesome/css/all.min.css';
import './newComponent/css/templatemo-diagoona.css';
import './newComponent/css/motion.css';
import AppRoutes from './newComponent/routes/Route';
import { useLocation } from 'react-router-dom';

import { OldPortfolio } from './components/oldPortfolio';

function App() {
  const path = useLocation().pathname;
  // console.log("Current path:", path); // Debugging line to check the current path
  const isMainSite = path === '/';
  return (
    <>
      <AppRoutes />
      {isMainSite && <OldPortfolio />}
    </>
  );
}

export default App;
