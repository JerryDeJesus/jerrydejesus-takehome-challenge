import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Participants from './pages/Participants';
import WinnerPage from './pages/WinnerPage';
import RaffleDetailsAndSignUp from './pages/RaffleDetailsAndSignUp';
import './App.css';

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
      </main>
        {/* <Footer /> */}
    </Router>
  );
}
