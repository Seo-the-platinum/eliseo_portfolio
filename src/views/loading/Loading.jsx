import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './loading.css'

const Loading = () => {
  const navigate = useNavigate()
  useEffect(()=> {
    setTimeout(()=> {
      navigate('/home')
    }, 750)
  })
  return (
    <div className='loading'>
        <div className='progress-bar'>
          <h3 className='limit'>LIMIT</h3>
          <div className='color'></div>
        </div>
    </div>
  )
}

export default Loading