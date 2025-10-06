import { HashRouter as Router, Route, Routes } from 'react-router';

import './App.css';
import Home from './pages/Home';
import Bar from './pages/Bar';
import Box from './pages/Box';
import Expo from './pages/Expo';
import NavBar from './components/NavBar';
import BookingBox from './pages/BookingBox';
import BookingBar from './pages/BookingBar';
import ScrollToTop from './components/ScrollToTop';
import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar-pilar" element={<Bar />} />
        <Route path="/pilar-box" element={<Box />} />
        <Route path="/pilar-expo" element={<Expo />} />
        <Route path="/box-booking" element={<BookingBox />} />
        <Route path="/bar-booking" element={<BookingBar />} />
      </Routes>
    </Router>
  );
};

export default App;
