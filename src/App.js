import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  Routes,
  Route,
  } from "react-router-dom";
import Inicio from './components/Inicio';



function App() {
  return (
    <Routes> 
        <Route path='/' element={<Inicio/>}/>
    </Routes>
  );
}

export default App;
