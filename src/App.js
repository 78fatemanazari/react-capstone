import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Messions from './components/missions/Missions';
import MyProfile from './components/MyProfile';

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/messions" element={<Messions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  </Router>
);

export default App;
