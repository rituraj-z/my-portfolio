import React from 'react';

const ProjectCard = ({ title, description, tags }) => (
  <div className="project-card">
    <h4>{title}</h4>
    <p>{description}</p>
    <div className="tags">{tags}</div>
  </div>
);

export default ProjectCard;