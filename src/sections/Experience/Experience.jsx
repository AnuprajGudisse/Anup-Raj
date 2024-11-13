import React from 'react';
import styles from './ExperienceStyles.module.css';
import { FaBuilding, FaChalkboardTeacher, FaCameraRetro, FaLaptopCode } from 'react-icons/fa';

const experienceData = [
  {
    title: 'Data Analyst Intern',
    company: 'Chicago Transit Authority',
    duration: 'May 2024 – Present',
    icon: <FaLaptopCode />,
    responsibilities: [
      'Performed data analysis and visualization for bus maintenance operations.',
      'Assisted in migrating the legacy registrar system to a Learning Management System.',
      'Collaborated with stakeholders to gather requirements for data projects.',
    ],
    skills: ['SQL', 'Python', 'Power BI', 'Data Analysis'],
  },
  {
    title: 'Assistant Video Producer',
    company: 'UIC - Creative and Design Services',
    duration: 'Feb 2024 – Present',
    icon: <FaCameraRetro />,
    responsibilities: [
      'Managed video production, editing, and equipment setup for university events and projects.',
      'Created engaging content for university social media channels.',
    ],
    skills: ['Video Production', 'Premiere Pro', 'Team Collaboration'],
  },
  {
    title: 'Student Ambassador',
    company: 'Intel',
    duration: 'Sep 2023 – Present',
    icon: <FaChalkboardTeacher />,
    responsibilities: [
      'Promoted Intel products and initiatives to students.',
      'Facilitated workshops on Intel’s latest technologies.',
      'Built relationships between Intel and university communities.',
    ],
    skills: ['Public Speaking', 'Event Planning', 'Technical Presentation'],
  },
  {
    title: 'Computer Lab Assistant',
    company: 'Hyderabad, India',
    duration: 'Jun 2019 – Oct 2019',
    icon: <FaBuilding />,
    responsibilities: [
      'Assisted students with lab assignments.',
      'Provided technical support for lab equipment and troubleshooting.',
    ],
    skills: ['Technical Support', 'Customer Service'],
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        {experienceData.map((experience, index) => (
          <div key={index} className={`${styles.experienceCard} ${styles.fadeIn}`}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{experience.icon}</span>
              <div className={styles.headerContent}>
                <h3 className={styles.title}>{experience.title}</h3>
                <p className={styles.company}>
                  {experience.company} <span className={styles.duration}>({experience.duration})</span>
                </p>
              </div>
            </div>
            <ul className={styles.responsibilities}>
              {experience.responsibilities.map((task, idx) => (
                <li key={idx} className={styles.responsibilityItem}>
                  {task}
                </li>
              ))}
            </ul>
            <div className={styles.skills}>
              {experience.skills.map((skill, idx) => (
                <span key={idx} className={styles.skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
