import React from 'react';
import { skillsData } from '../data/portfolioData';

const Skills = () => (
  <div id="skills" className="tabContents animate-fade-in">
    {skillsData.map((skillCategory) => (
      <div key={skillCategory.title}>
        <h3 className="skills-heading">{skillCategory.title}</h3>
        <div className="skills-tags">
          {skillCategory.tags.map(tag => (
            <span key={tag} className={`skill-tag ${skillCategory.tagClass}`}>{tag}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skills;