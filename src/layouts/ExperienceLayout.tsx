'use client';

import SectionHeading from '@/components/SectionHeading';
import TimelineDot from '@/components/TimelineDot';
import Badge from '@/components/Badge';
import { experiences } from '@/data/cv-data';

export default function ExperienceLayout() {
  const colors: Array<'blue' | 'purple' | 'green'> = ['blue', 'purple', 'green', 'blue', 'purple'];

  return (
    <section className="card fade-in" id="experience">
      <SectionHeading label="Experience" icon="💼" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '90px 10px 1fr',
              gap: '0 16px',
              paddingBottom: i < experiences.length - 1 ? 24 : 0,
            }}
          >
            {/* Date */}
            <div
              className="text-xs text-muted font-medium"
              style={{ paddingTop: 4, textAlign: 'right' }}
            >
              {exp.date}
            </div>

            {/* Timeline line + dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TimelineDot color={colors[i % colors.length]} />
              {i < experiences.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    width: 1,
                    background: 'linear-gradient(to bottom, var(--color-border), transparent)',
                    marginTop: 6,
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: 4 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                <span className="text-base font-semibold">{exp.title}</span>
                {exp.company && (
                  <Badge variant={colors[i % colors.length]}>{exp.company}</Badge>
                )}
              </div>
              <p className="text-sm text-muted" style={{ lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
