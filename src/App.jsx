// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FullHomeCleaningService from './pages/FullHomeCleaningService';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceName" element={<FullHomeCleaningService />} />
      </Routes>
    </Router>
  );
};

export default App;
