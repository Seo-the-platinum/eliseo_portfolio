import React, { useState } from 'react'
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

const NavButtons = () => {
  const [display, setDisplay] = useState('Projects')
  const handleDisplay= (e)=> {
    setDisplay(e.target.name)
  }
  return (
    <div>
          <button onClick={handleDisplay} name='Projects'>Projects</button>
          <button onClick={handleDisplay} name='Contact'>Contact</button>
          <button onClick={handleDisplay} name='About'>About</button>

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

export default NavButtons