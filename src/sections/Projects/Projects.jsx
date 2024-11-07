import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import movie from '../../assets/movie.png';
import math from '../../assets/math.png';
import mathbg from '../../assets/handwrittenMath.jpg'
import ProjectCard from '../../common/ProjectCard';
import ProjectDetailsPopup from '../../common/ProjectDetailsPopup';

const projectData = [
  {
    bgim:mathbg,
    src: movie,
    link: 'https://github.com/',
    title: 'Movie Recommendation System',
    description: 'Streaming app',
    details: {
      work: 'Developed a recommendation system using collaborative filtering and content-based methods.',
      timeline: 'January 2023 - April 2023',
      skills: ['Python', 'TensorFlow', 'Scikit-Learn'],
    },
  },
  { 
    bgim:mathbg,
    src: math,
    link: 'https://github.com/',
    title: 'Fresh Burger',
    description: 'Hamburger Restaurant',
    details: {
      work: 'Built an interactive website for an e-commerce hamburger shop with an online ordering system.',
      timeline: 'May 2023 - August 2023',
      skills: ['React', 'JavaScript', 'CSS', 'Firebase'],
    },
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailsPopup
          project={selectedProject}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
}

export default Projects;
