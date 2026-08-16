import { personalInfo } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>© {new Date().getFullYear()} {personalInfo.name}</p>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
