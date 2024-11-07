import styles from './ExperienceStyles.module.css';
import ctaLogo from '../../assets/cta_logo.png';
import uicLogo from '../../assets/uic.png';
import intelLogo from '../../assets/intel.png';
import hyderabadLogo from '../../assets/intel.png';

const experienceData = [
  {
    title: 'Data Analyst Intern',
    company: 'Chicago Transit Authority',
    duration: 'May 2024 – Present',
    responsibilities: [
      'Performed data analysis and visualization for bus maintenance operations.',
      'Assisted in migrating the legacy registrar system to a Learning Management System.',
      'Collaborated with stakeholders to gather requirements for data projects.',
    ],
    skills: ['SQL', 'Python', 'Power BI', 'Data Analysis'],
    logo: ctaLogo,
  },
  {
    title: 'Assistant Video Producer',
    company: 'UIC - Creative and Design Services',
    duration: 'Feb 2024 – Present',
    responsibilities: [
      'Managed video production, editing, and equipment setup for university events and projects.',
      'Created engaging content for university social media channels.',
    ],
    skills: ['Video Production', 'Premiere Pro', 'Team Collaboration'],
    logo: uicLogo,
  },
  {
    title: 'Student Ambassador',
    company: 'Intel',
    duration: 'Sep 2023 – Present',
    responsibilities: [
      'Promoted Intel products and initiatives to students.',
      'Facilitated workshops on Intel’s latest technologies.',
      'Built relationships between Intel and university communities.',
    ],
    skills: ['Public Speaking', 'Event Planning', 'Technical Presentation'],
    logo: intelLogo,
  },
  {
    title: 'Computer Lab Assistant',
    company: 'Hyderabad, India',
    duration: 'Jun 2019 – Oct 2019',
    responsibilities: [
      'Assisted students with lab assignments.',
      'Provided technical support for lab equipment and troubleshooting.',
    ],
    skills: ['Technical Support', 'Customer Service'],
    logo: hyderabadLogo,
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceGrid}>
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className={`${styles.experienceCard} ${index % 2 === 0 ? styles.largeCard : ''}`}
            style={{ backgroundImage: `url(${experience.logo})` }}
          >
            <div className={styles.cardOverlay}>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{experience.title}</h3>
                <p className={styles.company}>
                  {experience.company} <span className={styles.duration}>({experience.duration})</span>
                </p>
                <ul className={styles.responsibilities}>
                  {experience.responsibilities.map((task, idx) => (
                    <li key={idx} className={styles.responsibilityItem}>{task}</li>
                  ))}
                </ul>
                <div className={styles.skills}>
                  {experience.skills.map((skill, idx) => (
                    <span key={idx} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
