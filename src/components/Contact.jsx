import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Location from './Location'

const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1 className='contactHeader'>Contact</h1>
      <div className='contacts'>
        <div className='contact'>
          <PhoneIphoneIcon id='phoneIcon'/>
          <div className='bar'>
            <p>626-232-1450</p>
            <div className="gradientDiv"></div>
          </div>
        </div>
        <div className='contact'>
          <EmailIcon id='emailIcon'/>
          <div className='bar'>
            <p>eliseo_flores530@yahoo.com</p>
            <div className="gradientDiv" id='green'></div>
          </div>
        </div>
        <div className='contact' id='contactLinks'>
          <div className='contactLink'>
            <LinkedInIcon sx={{color: 'white', fontSize: 60}}/>
            <a href='https://www.linkedin.com/in/eliseo-aegon-flores/'>LinkedIn</a>
          </div>
          <div className='contactLink'>
            <GitHubIcon sx={{color: 'white', fontSize: 60}}/>
            <a href='https://github.com/Seo-the-platinum'>Github</a>
          </div>
        </div>
      </div>
      <Location/>
    </div>
  )
}

export default Contact