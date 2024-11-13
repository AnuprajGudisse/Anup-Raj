import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import movie from '../../assets/movie.png';
import math from '../../assets/math.png';
import signpp from '../../assets/sign_lang.png';
import bankpp from '../../assets/bank.png';
import bankbg from '../../assets/bankbg.jpg';
import mathbg from '../../assets/handwrittenMath.jpg';
import moviesbg from '../../assets/moviesbg.jpg';
import signbg from '../../assets/signsbg.webp';
import ProjectDetailsPopup from '../../common/ProjectDetailsPopup';

const projectData = [
  {
    bgim: moviesbg,
    src: movie,
    link: 'https://github.com/',
    title: 'Movie Recommender',
    description: 'A movie recommendation system based on collaborative filtering.',
    details: {
      work: 'Developed a recommendation system using collaborative filtering and content-based methods.',
      timeline: 'January 2023 - April 2023',
      skills: ['Python', 'TensorFlow', 'Scikit-Learn'],
    },
  },
  {
    bgim: signbg,
    src: signpp,
    link: 'https://github.com/',
    title: 'HandSpeak',
    description: 'Sign language recognition system using CNN.',
    details: {
      work: 'Developed a sign language recognition system using convolutional neural networks (CNN).',
      timeline: 'May 2023 - July 2023',
      skills: ['Python', 'TensorFlow', 'Keras'],
    },
  },
  {
    bgim: bankbg,
    src: bankpp,
    link: 'https://github.com/',
    title: 'iBank',
    description: 'Interactive banking system for secure transactions.',
    details: {
      work: 'Built an interactive website for banking transactions with secure user authentication.',
      timeline: 'August 2023 - October 2023',
      skills: ['React', 'Node.js', 'MongoDB'],
    },
  },
  {
    bgim: mathbg,
    src: math,
    link: 'https://github.com/',
    title: 'Visi-Solve',
    description: 'Handwritten to typed math equation solver.',
    details: {
      work: 'Developed an application to recognize and solve handwritten math equations.',
      timeline: 'March 2023 - May 2023',
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
          <div
            key={index}
            className={styles.card}
            onClick={() => handleCardClick(project)}
          >
            <img src={project.src} alt={`${project.title} project`} />
            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
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
