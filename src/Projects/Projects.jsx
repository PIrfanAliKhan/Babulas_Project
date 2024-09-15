import React from 'react'
import pic1 from './Projectimages/img3.jpg';
import pic2 from './Projectimages/img4.jpg'
import './Project.css'

const Projects = () => {
  return (
    <div className='projects'>
        <div className='project1'>
        <img src={pic1}alt="Image 1 of the project" />
        <p>write about this project</p>
        </div>
        <br/>
        <div className='project2'>
        <img src={pic2} alt="image 2 of the project" />
        <p>write a mater</p>
        </div>
    </div>
  )
}

export default Projects