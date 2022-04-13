import React from 'react'
import './styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavButtons from './NavButtons';
import Display from '../features/display/Display'

const Header = () => {
  return (
    <div className='header'>
        <Display/>
        <div className='icons'>
            <a href='https://www.linkedin.com/in/eliseo-aegon-flores/'>
                <LinkedInIcon sx={{color: 'white'}} fontSize='large'/>
            </a>
            <a href='https://github.com/Seo-the-platinum'>
                <GitHubIcon sx={{color: 'white'}} fontSize='large'/>
            </a>
        </div>
    </div>
  )
}

export default Header