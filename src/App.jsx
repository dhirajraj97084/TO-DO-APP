import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from './pages/todoPage/TodoPage';
import HomePage from './pages/home/HomePage';


function App() {
  return (
    <div>     
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todopage" element={<TodoPage />} />       
      </Routes>
      </Router>
    </div>
  )
}

export default App