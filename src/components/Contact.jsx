import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <h1 className='contactHeader'>Contact</h1>
      <div className='contacts'>
        <div className='contact'>
          <PhoneIphoneIcon/>
          <p>Phone</p>
          <p>626-232-1450</p>
        </div>
        <div className='contact'>
          <EmailIcon/>
          <p>Email</p>
          <p>eliseo_flores530@yahoo.com</p>
        </div>
        <div className='contact'>
          <LinkedInIcon sx={{color: 'white', fontSize: 60}}/>
          <a href='https://www.linkedin.com/in/eliseo-aegon-flores/'>LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Contact