// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import SkillsSection from "./components/SkillsSection";
import Testimonial from "./components/Testimonial";
import ProjectsSection from "./components/ProjectsSection";

import styles from "./styles/App.module.css";
import "./styles/globals.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const profile = {
    name: "Marcelo Sampaio",
    role: "Desenvolvedor Front-end",
    bio: "Apaixonado por tecnologia, desenvolvimento de interfaces modernas e soluções criativas.",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const skills = [
    { name: "React", level: "Avançado" },
    { name: "JavaScript", level: "Avançado" },
    { name: "CSS3", level: "Intermediário" },
    { name: "Objective-C", level: "Avançado" },
    { name: "Swift/Swift UI", level: "Avançado" },
  ];

  const testimonials = [
    {
      name: "Alice",
      message: "Excelente profissional e muito dedicado!",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      name: "Bruno",
      message: "Entrega sempre dentro do prazo e com qualidade.",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
  ];

  const projects = [
    {
      title: "Art Explorer",
      description:
        "Aplicativo iOS para explorar obras do The Met Museum usando sua API pública.",
      link: "https://github.com/usuario/art-explorer",
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      title: "Dashboard de Vendas",
      description:
        "Painel interativo em React com gráficos de vendas, filtros e exportação de relatórios.",
      link: "https://github.com/usuario/sales-dashboard",
      image: "https://picsum.photos/400/200?random=2",
    },
    {
      title: "ToDo App",
      description:
        "App de tarefas com persistência em LocalStorage e dark mode.",
      link: "https://github.com/usuario/todo-app",
      image: "https://picsum.photos/400/200?random=3",
    },
    {
      title: "Blog Tech",
      description:
        "Blog pessoal desenvolvido com React e CMS headless (Strapi).",
      link: "https://github.com/usuario/blog-tech",
      image: "https://picsum.photos/400/200?random=4",
    },
  ];

  return (
    <div className={`${styles.app} ${darkMode ? "dark" : ""}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <main className={styles.main}>
        <ProfileCard {...profile} />
        <SkillsSection skills={skills} />
        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>Depoimentos</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, idx) => (
              <Testimonial key={idx} {...t} />
            ))}
          </div>
        </section>
        <ProjectsSection projects={projects} />
      </main>
    </div>
  );
}
