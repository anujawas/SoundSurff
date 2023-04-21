import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login,Signup} from './components/Login';
import Categories from './components/Categories';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path="/login" Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/Categories' Component={Categories}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
