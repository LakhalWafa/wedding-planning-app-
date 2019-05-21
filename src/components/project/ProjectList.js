import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list mx-4 my-4">
      {projects &&
        projects.map(project => {
          return (
            <Link
              to={'project/' + project.id}
              key={project.id}
              style={{ textDecoration: 'none', color: '#383838' }}
            >
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
