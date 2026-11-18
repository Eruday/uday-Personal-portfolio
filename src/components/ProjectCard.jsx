import './ProjectCard.css'

function ProjectCard({ project }) {
  const {
    name,
    description,
    icon = '✦',
    iconBackground = '#eaf0f6',
    liveUrl,
    githubUrl,
  } = project

  const details = (
    <>
      <span
        className="directory-icon"
        style={{ backgroundColor: iconBackground }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="directory-copy">
        <span className="directory-name">{name}</span>
        <span className="directory-description">{description}</span>
      </span>
      {liveUrl && <span className="directory-arrow" aria-hidden="true">↗</span>}
    </>
  )

  return (
    <article className="directory-project">
      {liveUrl ? (
        <a
          className="directory-project-link"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} website`}
        >
          {details}
        </a>
      ) : (
        <div className="directory-project-link directory-project-disabled">
          {details}
        </div>
      )}

      {githubUrl && (
        <a
          className="directory-github"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      )}
    </article>
  )
}

export default ProjectCard
