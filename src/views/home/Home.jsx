import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import About from '../../components/About';
import './Home.css';

const Home = () => {
  const display = useSelector(state=> state.display.value.payload);
  return (
    <div className='homeContainer'>
      <Header/>
    {
      display === 'Projects' ? 
        <Projects/> : 
        display === 'Contact' ?
        <Contact/>  :
        <About/>
    }
    </div>
  )
}

export default Home