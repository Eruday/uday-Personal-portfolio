function ProjectCard({ project }) {
  const { name, description, image, category, technologies, liveUrl, githubUrl } =
    project

  return (
    <article className="project-card">
      <div className="project-card-image">
        <img src={image} alt={`${name} screenshot`} loading="lazy" />
      </div>

      <div className="project-card-body">
        {category && <span className="project-card-category">{category}</span>}

        <h3 className="project-card-name">{name}</h3>
        <p className="project-card-description">{description}</p>

        {technologies && technologies.length > 0 && (
          <ul className="project-card-tags">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}

        <div className="project-card-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live site
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard