import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, title, description, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} src={src} alt={`${title} logo`} />
      <div className={styles.projTitle}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;