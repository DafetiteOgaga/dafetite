import './App.css';
import './global.css';
import './component/css/bootstrap.min.css';
import './component/fontawesome/css/all.min.css';
import './component/css/styles.css';
import './component/css/responsive.css';
import './component/css/motion.css';
import { AppRoutes } from './routes/Route';
import { useSetHeadTag } from './hooks/useSetHeadTag';

function App() {
  useSetHeadTag()
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
