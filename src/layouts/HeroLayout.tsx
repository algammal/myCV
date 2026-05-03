'use client';

import { personalInfo } from '@/data/cv-data';

export default function HeroLayout() {
  return (
    <header
      className="hero-layout card"
      style={{
        background: 'linear-gradient(135deg, #13161d 0%, #1a1e28 60%, #1e1530 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px 40px 36px',
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,156,249,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          left: -40,
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Avatar + Name */}
      <div className="flex items-center gap-24" style={{ position: 'relative', zIndex: 1 }}>
        {/* Avatar placeholder with initials */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 700,
            color: '#fff',
            flexShrink: 0,
            boxShadow: '0 0 30px rgba(79,156,249,0.3)',
          }}
        >
          {personalInfo.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
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
            Portfolio & Resume
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
        {[
          { icon: '📍', text: personalInfo.location },
          { icon: '✉️', text: personalInfo.email },
          { icon: '📞', text: personalInfo.phone },
          { icon: '🌍', text: personalInfo.nationality },
        ].map((item) => (
          <div
            key={item.text}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--color-border)',
              borderRadius: 100,
              fontSize: 12,
              color: 'var(--color-text-muted)',
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
