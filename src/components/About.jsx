import { aboutContent, expertise, personalInfo } from '../data/portfolioData';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">About</p>
          <h2>Building analytical and AI solutions for business growth.</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="panel expertise-panel" aria-label="Core expertise">
            <div className="panel-header">
              <span className="panel-kicker">What I work with</span>
              <h3>Core expertise</h3>
            </div>
            <div className="tag-grid">
              {expertise.map((item) => (
                <span key={item} className="tag soft-tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="mini-metadata">
              <span>{personalInfo.availability}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;
