import { useState } from 'react';
import './homepage.css';
import Credits from './credits';
import Legal from './legal';
import Contact from './contact';

function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const links = [
    { label: '→ LinkedIn', action: () => { window.location.href = 'https://linkedin.com/in/simon-hergott'; } },
    { label: '→ GitHub', action: () => { window.location.href = 'https://github.com/SimonHergott'; } },
    {
      label: '→ Curriculum Vitae',
      action: () => {
        const link = document.createElement('a');
        link.href = '/HERGOTT_CV_Web.pdf';
        link.download = 'HERGOTT_CV_Web.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
    { label: '→ Contact', action: () => setIsContactModalOpen(true) },
    { label: '→ Credits', action: () => setIsCreditsModalOpen(true) },
    { label: '→ Legal', action: () => setIsLegalModalOpen(true) },
  ];

  return (
    <div className="app-container">
      <div className="homepage">
        <h1 className="homepage-name">Simon Hergott</h1>
        <p className="homepage-subtitle">Software Engineer · Data Scientist</p>
        <div className="homepage-links">
          {links.map((link) => (
            <button key={link.label} className="homepage-link" onClick={link.action}>
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      {(isContactModalOpen || isCreditsModalOpen || isLegalModalOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsContactModalOpen(false);
            setIsCreditsModalOpen(false);
            setIsLegalModalOpen(false);
          }}
        />
      )}

      {isContactModalOpen && (
        <div className="credits-modal open">
          <button className="back-button" onClick={() => setIsContactModalOpen(false)}>← Back</button>
          <Contact />
        </div>
      )}

      {isCreditsModalOpen && (
        <div className="credits-modal open">
          <button className="back-button" onClick={() => setIsCreditsModalOpen(false)}>← Back</button>
          <Credits />
        </div>
      )}

      {isLegalModalOpen && (
        <div className="credits-modal open">
          <button className="back-button" onClick={() => setIsLegalModalOpen(false)}>← Back</button>
          <Legal />
        </div>
      )}
    </div>
  );
}

export default HomePage;
