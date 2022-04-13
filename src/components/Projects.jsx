import React from 'react'
import './styles.css'
import Project from './Project'
import { Projects_Data } from '../utils/projects'

const Projects = () => {
  return (
    <div className='projects'>
        {Projects_Data.map(p=> {
            return <Project data={p} key={p.name}/>
        })}
        
    </div>
  )
}

export default Projects