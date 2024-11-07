import React from 'react';
import styles from './ProjectDetailsPopupStyles.module.css';

function ProjectDetailsPopup({ project, onClose }) {
  // Handle closing pop-up when clicking on the overlay but not the card itself
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.card}>
        {/* Close button in the top right corner */}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div
          className={styles.card__top}
          style={{ backgroundImage: `url(${project.bgim})` }}
        >
          <div className={styles.profile__photo}>
            <img src={project.src} alt={`${project.title} project`} />
          </div>
        </div>
        <div className={styles.card__content } >
          <h2>{project.title}</h2>
          <p className={styles.description}>{project.details.work}</p>
          <div className={styles.detailsBlock}>
            <h3>Timeline</h3>
            <p>{project.details.timeline}</p>
          </div>
          <div className={styles.detailsBlock}>
            <h3>Skills & Technologies</h3>
            <ul className={styles.skills}>
              {project.details.skills.map((skill, index) => (
                <li key={index}><p><b>{skill}</b></p></li>
              ))}
            </ul>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <button>View on GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPopup;
