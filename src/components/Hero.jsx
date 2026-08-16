import { expertise, personalInfo } from '../data/portfolioData';

function Hero() {
  const resumeHref = personalInfo.resume && personalInfo.resume !== 'TODO: Add resume URL' ? personalInfo.resume : '#';
  const resumeDisabled = !resumeHref || resumeHref === '#';

  return (
    <section id="top" className="hero section">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">AI • MACHINE LEARNING  • DATA ANALYTICS • GENERATIVE AI</p>
          <h1>
            Hi, I&apos;m <span className="gradient-text">Bhawit.</span>
          </h1>
          <p className="lead">
            I build data-driven, AI-enabled solutions that turn complex information into measurable business outcomes through analytics, machine learning, and GenAI systems.
          </p>

          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let&apos;s Connect
            </a>
            {resumeDisabled ? (
              <button type="button" className="btn btn-ghost disabled" aria-disabled="true" disabled>
                Download Resume
              </button>
            ) : (
              <a href={resumeHref} className="btn btn-ghost" target="_blank" rel="noreferrer" download>
                Download Resume
              </a>
            )}
          </div>

          <div className="hero-tags" aria-label="Core focus areas">
            {expertise.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

            {/* I have commented the below snippet and replaced it with my image class and also added the code in index.css */}

        {/* <div className="hero-visual" aria-hidden="true">
          <div className="visual-shell">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="grid-glow" />
            <svg viewBox="0 0 560 560" className="network-svg" role="img" aria-label="Abstract data network illustration">
              <defs>
                <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {[...
                Array(8)
              ].map((_, index) => (
                <line
                  key={index}
                  x1={70 + index * 54}
                  y1={110 + (index % 3) * 90}
                  x2={200 + index * 38}
                  y2={230 + (index * 53) % 200}
                  stroke="url(#lineGradient)"
                  strokeOpacity="0.28"
                  strokeWidth="1.5"
                />
              ))}
              {[...
                Array(10)
              ].map((_, index) => {
                const cx = 120 + ((index * 72) % 300);
                const cy = 140 + ((index * 89) % 260);
                return <circle key={index} cx={cx} cy={cy} r={index % 3 === 0 ? 5 : 4} fill="#dbeafe" fillOpacity="0.75" />;
              })}
              <path d="M110 410 C 180 300, 260 300, 330 220 S 460 140, 520 210" fill="none" stroke="url(#lineGradient)" strokeWidth="2.5" strokeOpacity="0.75" />
              <circle cx="110" cy="410" r="8" fill="#8b5cf6" />
              <circle cx="330" cy="220" r="8" fill="#38bdf8" />
              <circle cx="520" cy="210" r="8" fill="#c084fc" />
            </svg>
          </div>
        </div> */}

        <div className="hero-visual">
          <div className="visual-shell">
            <img
            src="/assets/bhawit_dp_v1.png"
            alt="Bhawit portfolio hero visual"
            className="hero-image"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
