import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ArticlePage from './Pages/ArticlePage';
import './App.css';

function App() {
  return (
    <Router basename="/assignment_newsportal">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/article/:url" element={<ArticlePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
