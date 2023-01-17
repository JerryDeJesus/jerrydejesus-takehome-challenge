import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Participants from './pages/Participants/Participants';
import WinnerPage from './pages/WinnerPage';
import RaffleDetailsAndSignUp from './pages/RaffleDetailsAndSignUp/RaffleDetailsAndSignUp';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  
  return (
    <Router>
      <main >
        <div>
         {/* <NavBar /> */}
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
