import React from 'react';
import pic1 from './Projectimages/img3.jpg';
import pic2 from './Projectimages/img4.jpg';
import './Project.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="card">
        <img className="card-image" src={pic1} alt="Project Image 1" />
        <div className="card-content">
          <h3 className="card-title">Project Title 1</h3>
          <p className="card-description">Write about this project.</p>
        </div>
      </div>

      <div className="card">
        <img className="card-image" src={pic2} alt="Project Image 2" />
        <div className="card-content">
          <h3 className="card-title">Project Title 2</h3>
          <p className="card-description">Write some matter.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
