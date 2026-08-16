import { achievements } from '../data/portfolioData';

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Achievements</p>
          <h2>Recognition beyond the technical work.</h2>
        </div>

        <div className="achievement-grid">
          {achievements.map((item) => (
            <article key={item} className="panel achievement-card">
              <span className="badge" aria-hidden="true">
                ✦
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
