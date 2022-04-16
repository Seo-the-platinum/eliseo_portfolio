import React from 'react'
import { useDispatch } from 'react-redux'
import { changeDisplay } from './displaySlice';
import './display.css'

const Display = () => {
  const dispatch = useDispatch()
  const audio = new Audio('sounds/Cursor-Set.mp3')
  const audioMove = new Audio('sounds/Cursor-Move.mp3')

  const handleDispatch= (e)=> {
    audio.play()
    dispatch(changeDisplay(e.target.name))
  }
  
  const mouseOver = ()=> {
    audioMove.play()
  }
  return (
    <div className="display">
        <button className='navButton' onClick={handleDispatch} onMouseOver={mouseOver} name='About' type='button'>About</button>
        <button className='navButton' onClick={handleDispatch} onMouseOver={mouseOver} name='Projects' type='button'>Projects</button>
        <button className='navButton' onClick={handleDispatch} onMouseOver={mouseOver} name='Contact' type='button'>Contact</button>
    </div>
  )
}

export default Display