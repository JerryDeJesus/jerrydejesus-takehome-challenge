import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Participants from './pages/Participants/Participants';
import WinnerPage from './pages/WinnerPage/WinnerPage';
import RaffleDetailsAndSignUp from './pages/RaffleDetailsAndSignUp/RaffleDetailsAndSignUp';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

export default function App() {
  
  return (
    <Router>
        <Header />
      <main >
        <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<RaffleDetailsAndSignUp />} />
            <Route path="/:id/participants" element={<Participants />} />
            <Route path="/:id/winner" element={<WinnerPage />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
        </div>
        <ToastContainer />
      </main>
    </Router>
  );
}
