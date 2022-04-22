import React from 'react'
import { useDispatch } from 'react-redux'
import { changeDisplay } from './displaySlice';
import { useSelector } from 'react-redux'
import './display.css'

const Display = () => {
  const dispatch = useDispatch()
  const audio = new Audio('sounds/Cursor-Set.mp3')
  const audioMove = new Audio('sounds/Cursor-Move.mp3')
  const sound = useSelector(state=> state.sound.value.payload)
  const handleDispatch= (e)=> {
    if (sound) {
      audio.play()
    }
    dispatch(changeDisplay(e.target.name))
  }
  
  const mouseOver = ()=> {
    if (sound) {
      audioMove.play()
    }
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