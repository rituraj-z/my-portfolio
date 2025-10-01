import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

const Projects = () => (
  <div id="projects" className="tabContents animate-fade-in">
    <div className="projects-grid">
      {projectsData.map(project => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  </div>
);

export default Projects;