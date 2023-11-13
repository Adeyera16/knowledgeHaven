import React from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { SideBar } from './components/SideBar';
import { Dashboard } from './pages/Dashboard';
import { BookReports } from './pages/BookReports';
import MyAccount from './pages/MyAccount';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/sidebar" element={<SideBar />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/bookreports" element={<BookReports />} />
       <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
      
     
     
    </>
  )
}

export default App
