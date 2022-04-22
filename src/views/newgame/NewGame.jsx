import React, { useState, useEffect } from 'react'
import Loading from '../loading/Loading'
import SoundButton from '../../features/sound/SoundButton'
import { useSelector } from 'react-redux'

import './newgame.css'

const NewGame = () => {
  const[view, setView]= useState('newGame')
  const audio = new Audio('sounds/Cursor-Set.mp3')
  const moveAudio = new Audio('sounds/Cursor-Move.mp3')
  const sound = useSelector(state=> state.sound.value.payload)

  const newGame=()=> {
    if (sound === true) {
      moveAudio.play()
      setTimeout(()=> {
        audio.play()
      }, 300)
    }
    setView('Loading')
  }


  return (
    <div className='newGameContainer'>
      {
        view === 'newGame' ?
      <div className='newGame'>
        <div className="newGameBtnContainer">
          <button className='newGameBtn' onClick={newGame} name='newGame'> New Game</button>
        </div>
        <div className='busterBladeContainer'>
          <img className='busterBlade' src={'img/Keyboard_clip_art_medium.png'}/>
        <div className='lighting'></div>
        <div className='shadow'></div>
        </div>
        <SoundButton/>
      </div> :
      <Loading/> 
      }
      
    </div>
    
  )
}

export default NewGame