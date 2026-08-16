
import { contact, personalInfo } from '../data/portfolioData';

function Contact() {
  const email = contact.email && !contact.email.startsWith('TODO:')
    ? `mailto:${contact.email}`
    : 'mailto:hello@example.com';

  const linkedin = contact.linkedin && !contact.linkedin.startsWith('TODO:')
    ? contact.linkedin
    : '#';

  const github = contact.github && !contact.github.startsWith('TODO:')
    ? contact.github
    : '#';

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="panel contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something intelligent.</h2>
          <p className="contact-copy">
            Interested in data analytics, machine learning, generative AI, or AI engineering? Let&apos;s connect.
          </p>

          <div className="cta-row contact-actions">
            <a href={email} className="btn btn-primary">
              Email
            </a>

            {linkedin === '#' ? (
              <button type="button" className="btn btn-secondary disabled" disabled>
                LinkedIn
              </button>
            ) : (
              <a href={linkedin} className="btn btn-secondary" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}

            {github === '#' ? (
              <button type="button" className="btn btn-secondary disabled" disabled>
                GitHub
              </button>
            ) : (
              <a href={github} className="btn btn-secondary" target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>

          <div className="contact-meta">
            <span>{personalInfo.location}</span>
            <span>{personalInfo.availability}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;