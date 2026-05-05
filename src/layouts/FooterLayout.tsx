'use client';

import { personalInfo } from '@/data/cv-data';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function FooterLayout() {
  const socials = [
    { Icon: FacebookIcon, href: personalInfo.facebook, label: 'Facebook', id: 'footer-facebook-link' },
    { Icon: LinkedInIcon, href: personalInfo.linkedin, label: 'LinkedIn', id: 'footer-linkedin-link' },
    { Icon: GitHubIcon, href: personalInfo.github, label: 'GitHub', id: 'footer-github-link' },
  ];

  return (
    <footer className="site-footer no-print" id="footer">
      {/* Decorative top glow */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-avatar">
            {personalInfo.name.split(' ').slice(0, 2).map((n) => n[0]).join('')}
          </div>
          <div>
            <div className="footer-name">{personalInfo.name}</div>
            <div className="footer-title">{personalInfo.title}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Socials */}
        <div className="footer-socials">
          {socials.map(({ Icon, href, label, id }) => (
            <a
              key={label}
              id={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={`Visit ${label} profile`}
              title={label}
            >
              <Icon />
              <span className="footer-social-label">{label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          © {new Date().getFullYear()} Ahmed Nader Al-Gammal &nbsp;·&nbsp; Lead Frontend Developer &nbsp;·&nbsp; Cairo, Egypt
        </p>
      </div>
    </footer>
  );
}
