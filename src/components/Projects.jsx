import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const projects = [
    {
      title: "Placeholder Project",
      description: "Work in progress...",
      link: "#",
    },
    {
      title: "Placeholder Project",
      description: "Work in progress...",
      link: "#",
    },
    {
      title: "Placeholder Project",
      description: "Work in progress...",
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
