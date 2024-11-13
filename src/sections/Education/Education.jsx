import React from 'react';
import styles from './EducationStyles.module.css';

const educationData = [
  {
    institution: 'University of Illinois Chicago',
    degree: 'Master of Science in Computer Science',
    fieldOfStudy: 'Computer Science',
    dates: 'Expected August 2025',
    details: [
      'Current GPA: 3.8/4.0',
      'Relevant Coursework: Natural Language Processing, Big Data Analytics, Query Processing on Database Systems',
    ],
  },
  {
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering',
    fieldOfStudy: 'Information Technology',
    dates: 'June 2019 – May 2023',
    details: [
      'GPA: 8.15/10',
      'Achievements: Member of the college tech club, led projects in web development and AI/ML.',
    ],
  },
];

function Education() {
  return (
    <section id="education" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.educationGrid}>
        {educationData.map((education, index) => (
          <div key={index} className={`${styles.educationCard} ${styles.tiltedCard}`}>
            <div className={styles.cardContent}>
              <h3 className={styles.institution}>{education.institution}</h3>
              <p className={styles.degree}>
                {education.degree} in {education.fieldOfStudy}
              </p>
              <p className={styles.dates}>{education.dates}</p>
              <ul className={styles.details}>
                {education.details.map((detail, idx) => (
                  <li key={idx} className={styles.detailItem}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
