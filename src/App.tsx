import { BrowserRouter as Router, Route, Routes } from 'react-router';

import './App.css';
import Home from './pages/Home';
import Bar from './pages/Bar';
import Box from './pages/Box';
import Expo from './pages/Expo';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar-pilar" element={<Bar />} />
        <Route path="/pilar-box" element={<Box />} />
        <Route path="/pilar-expo" element={<Expo />} />
      </Routes>
    </Router>
  );
}

export default App;
