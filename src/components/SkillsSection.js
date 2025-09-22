// import SkillCard from "./SkillCard";

// export default function SkillsSection() {
//   return (
//     <section>
//       <h3>Minhas Habilidades</h3>
//       <SkillCard title="Skill 1" score={9} maxScore={10} />
//       <SkillCard title="Skill 2" score={8} maxScore={10} />
//     </section>
//   );
// }
import React from "react";
import SkillCard from "./SkillCard";
import styles from "./SkillsSection.module.css";

export default SkillsSection = ({ skills }) => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, idx) => (
          <SkillCard key={idx} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
};
