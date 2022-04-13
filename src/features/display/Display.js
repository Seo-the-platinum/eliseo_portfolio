import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import About from '../../components/About';
import { changeDisplay } from './displaySlice';

const Display = () => {
  const dispatch = useDispatch()
  const display = useSelector(state=> state.display.value.payload)

  const handleDispatch= (e)=> {
    dispatch(changeDisplay(e.target.name))
  }
  return (
    <div>
        <button onClick={handleDispatch} name='Projects'>Projects</button>
        <button onClick={handleDispatch} name='Contact'>Contact</button>
        <button onClick={handleDispatch} name='About'>About</button>
    </div>
  )
}

export default Display