import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

export default ProjectsSection = ({ projects }) => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projetos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};
