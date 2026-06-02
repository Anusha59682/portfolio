function Projects() {
  const projects = [
    {
      title: "Healthcare Dashboard",
      tech: "Python, SQL, Power BI",
      description:
        "Developed a healthcare analytics dashboard to visualize and monitor healthcare-related data. Implemented data processing and reporting features to provide meaningful insights through interactive charts and reports.",
      features: [
        "Data visualization and reporting",
        "Healthcare data analysis",
        "Interactive dashboards and insights",
      ],
    },
    {
      title: "Prompt Workflow Prototype",
      tech: "JavaScript, AI APIs",
      description:
        "Designed and developed an AI-powered workflow prototype that automates tasks through prompt-based interactions. Focused on improving workflow efficiency and reducing manual effort.",
      features: [
        "Prompt-driven task automation",
        "Workflow optimization",
        "AI-assisted process execution",
      ],
    },
    {
      title: "WordPress PSD to Theme Conversion",
      tech: "WordPress, HTML, CSS, JavaScript",
      description:
        "Converted PSD design mockups into responsive WordPress themes while maintaining design consistency and usability. Customized layouts and styling to create a user-friendly website experience.",
      features: [
        "PSD to responsive WordPress theme conversion",
        "Custom page layouts",
        "Cross-device compatibility",
        "Modern UI implementation",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <div className="tech-stack">
  <span className="tech-label">Tech Stack:</span>
  <span>{project.tech}</span>
</div>

            <p style={{ color: "red" }}>
  {project.description}
</p>

            <h4>Key Features:</h4>

            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;