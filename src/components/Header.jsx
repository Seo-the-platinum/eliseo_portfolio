import React from 'react'
import './styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Display from '../features/display/Display'
import { useSelector } from 'react-redux'
import SoundButton from '../features/sound/SoundButton'

const Header = () => {
  const audio = new Audio('sounds/Cursor-Move.mp3')
  const setAudio = new Audio('sounds/Cursor-Set.mp3')
  const sound = useSelector(state=> state.sound.value.payload)
  console.log(sound)
  const mouseOver = () => {
    if (sound === true) {
      audio.play()
    }
  }

  const onSet = () => {
    if (sound === true) {
      setAudio.play()
    }
  }
  return (
    <div className='header'>
        <Display/>
        <div className='icons'>
            <a href='https://www.linkedin.com/in/eliseo-aegon-flores/'>
                <LinkedInIcon className='iconButton' id='linkedInId' fontSize='large' onClick={onSet} onMouseOver={mouseOver}/>
            </a>
            <a href='https://github.com/Seo-the-platinum'>
                <GitHubIcon className='iconButton' id='githubId' fontSize='large' onClick={onSet} onMouseOver={mouseOver}/>
            </a>
            <SoundButton pos={'header'}/>
        </div>
    </div>
  )
}

export default Header