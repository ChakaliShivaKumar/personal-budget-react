import './App.css';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './HomePage/Homepage';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router className="App">
      <Menu />
      <Hero />
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
