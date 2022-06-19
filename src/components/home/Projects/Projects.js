import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.module.scss';
import ProjectList from './ProjectList/ProjectList';
import Project from './Project';

const projectList = [

];

const Projects = () => (
  <div className={styles.Projects}>
    <h1>Projects</h1>
    <ProjectList projects={projectList} />
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
