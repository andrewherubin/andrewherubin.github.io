import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const projects = [
    {
      title: "TaskFlow API",
      description: "Full-stack task management API built with Spring Boot and Postgres.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal website built with React and Vite.",
      link: "#",
    },
    {
      title: "Machine Learning Model",
      description: "Python ML project using Jupyter notebooks.",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
