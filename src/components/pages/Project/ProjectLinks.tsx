import React from 'react';
import { ProjectItem } from '../../../utilities/models';

interface ProjectLinksProps {
  project: ProjectItem | undefined;
}

export const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <>
      <div className="ProjectLinks_linkContainer">
        {project?.website_link && (
          <a
            href={project.website_link}
            className="visitWebsite_btn global__button global__smallButton"
            style={{
              marginBottom: '20px',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit this website!
          </a>
        )}
        {project?.github_link && (
          <a
            href={project.github_link}
            className="githubLink_btn global__button global__smallButton"
            style={{
              marginBottom: '20px',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it on Github!
          </a>
        )}
      </div>
    </>
  );
};
