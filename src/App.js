import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login, Signup} from './components/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path="/login" Component={Login}/>
          <Route path='signup' Component={Signup}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
