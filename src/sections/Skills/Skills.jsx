import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();

  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap","React.js","Node.js",
    "Python", "C", "Java", "Django","Flask",
    "SQL", "PostgreSQL", "DBeaver", "PGAdmin",
    "Power BI", "Tableau", "Pandas", "Matplotlib", "Plotly", "Git"
  ];

  // Split skills into rows with alternating numbers of bricks
  const rows = [];
  let index = 0;
  while (index < skills.length) {
    if (rows.length % 2 === 0) {
      rows.push(skills.slice(index, index + 4)); // Row with 4 bricks
      index += 4;
    } else {
      rows.push(skills.slice(index, index + 3)); // Row with 3 bricks
      index += 3;
    }
  }

  return (
    <section id='skills' className={styles.container}>
        <h1 className={styles.sectionTitle}>Skills</h1> 
        <div className={styles.wall}>
          {rows.map((rowSkills, rowIndex) => (
            <div
              key={rowIndex}
              className={styles.row}
              style={{ animationDelay: `${rowIndex * 0.3}s` }} // Staggered animation delay for rows
            >
              {/* For even rows, add a half brick at the beginning */}
              {rowIndex % 2 !== 0 && <div className={styles.brick}></div>}
              {rowSkills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.brick}>
                  {skill}
                </div>
              ))}
              {/* For even rows, add a half brick at the end */}
              {rowIndex % 2 !== 0 && <div className={styles.brick}></div>}
            </div>
          ))}
        </div>
    </section>
  );
}

export default Skills;
