import React from 'react';
import styles from './ExperienceStyles.module.css';
import { FaBuilding, FaChalkboardTeacher, FaCameraRetro, FaLaptopCode, FaCode, FaRobot } from 'react-icons/fa';

const experienceData = [
  {
    title: 'Data Analyst Intern',
    company: 'Chicago Transit Authority',
    duration: 'May 2024 – Present',
    icon: <FaLaptopCode />,
    responsibilities: [
      'Developed a Training Information System web application using Django, streamlining training operations for CTA Bus Maintenance, resulting in a 70% improvement in planning efficiency and a 50% reduction in scheduling errors.',
      'Designed and implemented an ETL pipeline with Python and Pandas, processing and cleaning 30+ years of historical data, which increased data accuracy by 35% and reduced manual data validation efforts by 40%.',
      'Optimized PostgreSQL database models to manage over 100,000 training records, improving query performance by 50% and reducing data retrieval time from minutes to seconds.',
      'Created interactive dashboards using Plotly, visualizing key metrics such as training completion rates, attendance, and participation trends, enabling data-driven decisions and improving resource allocation by 25%.',
      'Built a user-centric web interface with Django, integrated seamlessly with PostgreSQL, reducing registrar workload by 60%, eliminating paper-based workflows, and enhancing productivity for 100+ users.'
    ],
    skills: ['Django', 'Python', 'Pandas', 'PostgreSQL', 'Plotly', 'Data Analysis'],
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
    title: 'Web Development Intern',
    company: 'Internshala',
    duration: 'Aug 2022 – Dec 2022',
    icon: <FaCode />,
    responsibilities: [
      'Designed and implemented responsive user interfaces using modern JavaScript frameworks (React.js), HTML5, and CSS3, resulting in a 31% increase in user satisfaction and a 12% boost in audience engagement.',
      'Developed and optimized object-oriented code in Node.js, ensuring 100% compliance with industry and company standards, which improved code maintainability and scalability by 25%.',
      'Analyzed and applied multithreading, concurrency, and design patterns to enhance application performance, reducing processing time for high-traffic operations by 20%.'
    ],
    skills: ['React.js', 'HTML5', 'CSS3', 'Node.js', 'JavaScript', 'Multithreading', 'Concurrency', 'Design Patterns'],
  },

  {
    title: 'AI-ML Virtual Internship',
    company: 'AICTE',
    duration: 'Mar 2022 – May 2022',
    icon: <FaRobot />,
    responsibilities: [
      'Worked with a team of 4 interns to design, train, and optimize a Convolutional Neural Network (CNN) for real-time sign language image recognition using Python, TensorFlow, and OpenCV, achieving 86% accuracy.',
      'Collaborated on data collection, preprocessing, and annotation to ensure high-quality training data for the model.'
    ],
    skills: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Data Preprocessing', 'Team Collaboration'],
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
