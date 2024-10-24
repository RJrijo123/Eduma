// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
