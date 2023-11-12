import React from 'react';
import { Home } from './pages/Home';
import { SideBar } from './components/SideBar';
import { Dashboard } from './pages/Dashboard';
import { BookReports } from './pages/BookReports';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/sidebar" element={<SideBar />} />
      </Routes>
      
     <Dashboard />
     <BookReports />
    </>
  )
}

export default App
