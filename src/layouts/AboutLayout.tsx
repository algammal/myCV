'use client';

import SectionHeading from '@/components/SectionHeading';
import { aboutMe } from '@/data/cv-data';

export default function AboutLayout() {
  return (
    <section className="card fade-in" id="about">
      <SectionHeading label="About Me" icon="✨" />
      <p
        className="text-base"
        style={{
          lineHeight: 1.85,
          color: 'var(--color-text-muted)',
          borderLeft: '3px solid var(--color-primary)',
          paddingLeft: 16,
        }}
      >
        {aboutMe}
      </p>
    </section>
  );
}
