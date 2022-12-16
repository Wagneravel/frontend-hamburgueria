import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registrando from './pages/Register';
import Logando from './pages/Login';
import {useState} from "react"
import { Toaster } from 'react-hot-toast';
import { DashBoard } from './pages/DashBoard';

function App() {
  return (
    <>
    <Toaster/>
      
        <Routes>
        
          <Route path="/" element={ <Logando  /> } />
          <Route path="/register" element={ <Registrando />} />
          <Route path="/dashboard" element={ <DashBoard /> } />
          
        </Routes>
      
    </>
  );
}

export default App;
