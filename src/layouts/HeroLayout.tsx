'use client';

import { personalInfo } from '@/data/cv-data';
import DownloadButton from '@/components/DownloadButton';

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function HeroLayout() {
  return (
    <header
      className="hero-layout card hero-animate"
      id="hero"
      style={{
        background: 'linear-gradient(135deg, #13161d 0%, #1a1e28 60%, #1e1530 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 40px 36px',
      }}
    >
      {/* Animated background glow blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />

      {/* Shimmer line accent */}
      <div className="hero-shimmer-bar" aria-hidden="true" />

      {/* Top row: Avatar + Name + Download button */}
      <div
        className="flex items-center justify-between"
        style={{ position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: 16 }}
      >
        {/* Avatar + Name */}
        <div className="flex items-center gap-24">
          {/* Avatar with pulse ring */}
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-ring" aria-hidden="true" />
            <div className="hero-avatar">
              {/* {personalInfo.name.split(' ').slice(0, 2).map((n) => n[0]).join('')} */}
              <img className="hero-avatar-image" width={50}
                 height={50} src="/logo.png" alt="AN" />
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: 6,
              }}
            >
              Portfolio &amp; Resume
            </div>
            <h1
              style={{
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.15,
                background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.75) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 8,
              }}
            >
              {personalInfo.name}
            </h1>
            <div
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--color-text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              {personalInfo.title}
            </div>
          </div>
        </div>

        {/* Download button */}
        <DownloadButton />
      </div>

      {/* Quick info pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginTop: 24,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Static info pills */}
        {[
          { icon: '📍', text: personalInfo.location },
          { icon: '✉️', text: personalInfo.email, href: `mailto:${personalInfo.email}` },
          { icon: '📞', text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
          { icon: '🌍', text: personalInfo.nationality },
        ].map((item) =>
          item.href ? (
            <a key={item.text} href={item.href} className="info-pill" id={`hero-pill-${item.icon}`}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </a>
          ) : (
            <div key={item.text} className="info-pill" >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          )
        )}

        {/* LinkedIn — clickable link */}
        <a
          id="hero-linkedin-link"
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="info-pill info-pill-social"
          aria-label="LinkedIn profile"
        >
          <span className="social-icon"><LinkedInIcon /></span>
          <span className="social-label">LinkedIn</span>
          <span className="social-url">{personalInfo.linkedin}</span>
        </a>

        {/* GitHub — clickable link */}
        <a
          id="hero-github-link"
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="info-pill info-pill-social"
          aria-label="GitHub profile"
        >
          <span className="social-icon"><GitHubIcon /></span>
          <span className="social-label">GitHub</span>
          <span className="social-url">{personalInfo.github}</span>
        </a>
      </div>
    </header>
  );
}
