import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const projects = [
    {
      title: "Cookbook API",
      description: "A comprehensive REST API for managing recipes and searching by ingredients. Built with Spring Boot 4.0.1, featuring CRUD operations, input validation, automatic ingredient deduplication, and interactive Swagger UI documentation.",
      link: "https://github.com/andrewherubin/cookbook-api",
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
