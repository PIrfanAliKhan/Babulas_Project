import React from 'react'
import pic1 from './Projectimages/img3.jpg';
import pic2 from './Projectimages/img4.jpg';
import './Project.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project1">
        <div className="image-box">
          <img src={pic1} alt="Image 1 of the project" />
        </div>
        <div className="text-box">
          <p>Write about this project.</p>
        </div>
      </div>

      <div className="project2">
        <div className="image-box">
          <img src={pic2} alt="Image 2 of the project" />
        </div>
        <div className="text-box">
          <p>Write some matter.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;