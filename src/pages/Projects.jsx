import React from 'react';
import styles from '/src/components/Projects.module.css'; // import as module

const projects = [
  {
    title: "Menu Sidebar App",
    description: "A cool app I built using React.",
    image: "/src/assets/design 6.JPG",
    link: "https://hevanx.github.io/React-App-1/",
    repo: "https://github.com/hevanx/React-App-1"
  },
  {
    title: "Exercise App",
    description: "An exercise app to track your workouts.",
    image: "/src/assets/exercise.WEBP",
    link: "https://hevanx.github.io/updated-exercise-app/",
    repo: "https://github.com/hevanx/updated-exercise-app"
  },
  {
    title: "Roll For Group App Interface",
    description: "My UX case study project made in Figma.",
    image: "/src/assets/RFG.PNG",
    link: "https://www.figma.com/proto/h0bhoNnM1klGR7qAMNiEyB/Roll-for-group?node-id=1-2&p=f&t=c1s8MpkISChLBoAc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    repo: ""
  }
];

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <h1>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image && (
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.projectLinks}>
              <a href={project.link} target="_blank" rel="noreferrer">
                 Live Demo
              </a>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer">
                   GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


