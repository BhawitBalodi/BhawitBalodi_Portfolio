import { experience, featuredWork } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Applied analytics and AI work across research, industry, and product thinking.</h2>
        </div>

        <div className="featured-stack">
          {featuredWork.map((item) => (
            <article key={item.title} className="panel feature-card">
              <div className="feature-topline">
                <span className="mini-pill">Selected work</span>
              </div>
              <h3>{item.title}</h3>
              <p>
                <strong>Problem:</strong> {item.problem}
              </p>
              <p>
                <strong>Approach:</strong> {item.solution}
              </p>
              <p>
                <strong>Impact:</strong> {item.impact}
              </p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag small-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="timeline-item panel">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="job-header">
                  <div>
                    <span className="job-company">{job.company}</span>
                    <h3>{job.role}</h3>
                  </div>
                  <div className="job-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="job-summary">{job.summary}</p>

                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="tag-row">
                  {job.stack.map((tech) => (
                    <span key={tech} className="tag small-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
