import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from './pages/todoPage/TodoPage';
import HomePage from './pages/home/HomePage';
import Todo2 from './pages/todo2/todo2';


function App() {
  return (
    <div>     
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todopage" element={<TodoPage />} /> 
        <Route path="/todopage2" element={<Todo2 />} />       
      </Routes>
      </Router>
    </div>
  )
}

export default App