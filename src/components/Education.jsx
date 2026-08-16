import { education } from '../data/portfolioData';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation.</h2>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article key={`${item.degree}-${item.school}`} className="panel education-card">
              <span className="small-label">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="degree-meta">{item.field}</p>
              <p>{item.school}</p>
              <p className="muted">{item.board}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
