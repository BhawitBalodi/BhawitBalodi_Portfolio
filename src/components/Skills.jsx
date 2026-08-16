import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">Skills</p>
          <h2>Capabilities across analytics, AI, and product execution.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="panel skill-panel">
              <h3>{group.category}</h3>
              <div className="tag-grid">
                {group.items.map((item) => (
                  <span key={item} className="tag soft-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
