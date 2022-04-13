import React from 'react'
import './styles.css'

const Project = (props) => {
    const { data } = props

  return (
    <div className='project'>
        <h3>{data.name}</h3>
        <img src={`${data.source}`}/>
        <a href={data.github}> Github</a>
        {data.site ? 
            <a href={data.site}>Website</a> : null
        }
    </div>
  )
}

export default Project