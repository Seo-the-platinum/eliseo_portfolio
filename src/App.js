import './App.css';
import React, { useState, useEffect } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import NewGame from './views/newgame/NewGame'
import Home from './views/home/Home'

const App= ()=> {
  return (
    <Routes>
      <Route path='/' element={<NewGame/>} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
