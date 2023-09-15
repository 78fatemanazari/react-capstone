import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

import Messions from './components/missions/Missions';
import MyProfile from './components/profile/MyProfile';
import Rockets from './components/profile/rockets/Rockets';

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <hr />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/messions" element={<Messions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  </Router>
);

export default App;
