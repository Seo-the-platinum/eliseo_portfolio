import React, { useState, useEffect } from 'react'
import Loading from '../loading/Loading'
import './newgame.css'

const NewGame = () => {
  const[view, setView]= useState('newGame')
  const audio = new Audio('sounds/Cursor-Set.mp3')
  const moveAudio = new Audio('sounds/Cursor-Move.mp3')
  
  const newGame=()=> {
    moveAudio.play()
    setView('Loading')
    setTimeout(()=> {
      audio.play()
    }, 300)
    
  }

  return (
    <div className='newGameContainer'>
      {
        view === 'newGame' ?
      <div className='newGame'>
        <button className='newGameBtn' onClick={newGame} name='newGame'>NEW GAME</button>
        <div className='busterBladeContainer'>
          <img className='busterBlade' src='img/Keyboard_clip_art_medium.png'/>
        </div>
        <div className='lighting'></div>
        <div className='shadow'></div>
      </div> :
      <Loading/> 
      }
    </div>
    
  )
}

export default NewGame