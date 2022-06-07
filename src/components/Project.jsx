import React from 'react'
import './styles.css'

const Project = (props) => {
    const { data } = props
    const audio = new Audio('sounds/Cursor-Set.mp3')

    const handleClick=()=> audio.play()
  return (
    <div className='project'>
        <h1 className='projectName'>{data.name}</h1>
        <img src={`${data.source}`}/>
        <div className="projectDescription">
          <p>{data.description}</p>
        </div>
        <div className='projectLinks'>
          <a className='projectLink' href={data.github} onClick={handleClick}> Github</a>
          {
            data.site &&
              <a className='projectLink' href={data.site} onClick={handleClick}>Website</a>
          }
        </div>
    </div>
  )
}

export default Project