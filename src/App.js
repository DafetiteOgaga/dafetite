import './App.css';
import './global.css';
import './component/css/bootstrap.min.css';
import './component/fontawesome/css/all.min.css';
import './component/css/styles.css';
import './component/css/responsive.css';
import './component/css/motion.css';
import { AppRoutes } from './routes/Route';
import { useSetHeadTag } from './hooks/useSetHeadTag';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useIsMobile } from './hooks/IsMobile';

function App() {
  useSetHeadTag()
  const isMobile = useIsMobile();
  return (
    <>
      <AppRoutes />
      <ToastContainer
      toastClassName="custom_toast"
      position={isMobile?"top-center":"top-right"}
      autoClose={false} //{3000} // 3 seconds (you can increase if needed)
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      // rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </>
  );
}

export default App;
