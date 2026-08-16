import { projects } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projects</p>
          <h2>Featured work blending data, ML, and GenAI.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const hasGithub = project.github && !project.github.startsWith('TODO:');
            const hasDemo = project.demo && !project.demo.startsWith('TODO:');

            return (
              <article key={project.title} className="panel project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="arrow-badge" aria-hidden="true">
                    →
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <p>
                    <strong>Problem:</strong> {project.problem}
                  </p>
                  <p>
                    <strong>Solution:</strong> {project.solution}
                  </p>
                  <p>
                    <strong>Impact:</strong> {project.impact}
                  </p>
                </div>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag small-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  {hasGithub ? (
                    <a href={project.github} className="btn btn-secondary small" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : (
                    <button type="button" className="btn btn-secondary small disabled" disabled>
                      GitHub
                    </button>
                  )}

                  {hasDemo ? (
                    <a href={project.demo} className="btn btn-primary small" target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  ) : (
                    <button type="button" className="btn btn-primary small disabled" disabled>
                      Demo
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
