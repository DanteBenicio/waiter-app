import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Orders from './components/Orders';

export default function App() {
  return (
    <>
      <ToastContainer position='bottom-center' />
      <Header />
      <Orders />
    </>
  );
}
