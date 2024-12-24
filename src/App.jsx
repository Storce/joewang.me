import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import About from './About.jsx';
import Project from './Project.jsx';
import Home from './Home.jsx'; // Create Home.jsx similar to About and Project

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
      </nav>
      <div style={{ padding: '0.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;