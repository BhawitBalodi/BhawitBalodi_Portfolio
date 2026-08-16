import { publication } from '../data/portfolioData';

function Publication() {
  const hasLink = publication.link && !publication.link.startsWith('TODO:');

  return (
    <section id="publication" className="section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Publication</p>
          <h2>Research and applied machine learning work.</h2>
        </div>

        <article className="panel publication-card">
          <div className="publication-meta">
            <span className="mini-pill">Academic work</span>
            <span>{publication.conference}</span>
          </div>
          <h3>{publication.title}</h3>
          <p className="publication-author">{publication.authors}</p>
          <p>{publication.description}</p>

          {hasLink ? (
            <a href={publication.link} className="btn btn-primary" target="_blank" rel="noreferrer">
              View publication
            </a>
          ) : (
            <button type="button" className="btn btn-primary disabled" disabled>
              View publication
            </button>
          )}
        </article>
      </div>
    </section>
  );
}

export default Publication;
