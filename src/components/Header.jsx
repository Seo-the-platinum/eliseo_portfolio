import React from 'react'
import './styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Display from '../features/display/Display'

const Header = () => {
  const audio = new Audio('sounds/Cursor-Move.mp3')
  const setAudio = new Audio('sounds/Cursor-Set.mp3')
  const notButtons = document.querySelectorAll('.iconButton')


  const mouseOver = () => {
    audio.play()
  }

  const onSet = () => {
    setAudio.play()
  }
  return (
    <div className='header'>
        <Display/>
        <div className='icons'>
            <a href='https://www.linkedin.com/in/eliseo-aegon-flores/'>
                <LinkedInIcon className='iconButton' fontSize='large' onClick={onSet} onMouseOver={mouseOver}/>
            </a>
            <a href='https://github.com/Seo-the-platinum'>
                <GitHubIcon className='iconButton' fontSize='large' onClick={onSet} onMouseOver={mouseOver}/>
            </a>
        </div>
    </div>
  )
}

export default Header