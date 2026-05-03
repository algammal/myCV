'use client';

import SectionHeading from '@/components/SectionHeading';
import SkillBar from '@/components/SkillBar';
import { designTools, devTools } from '@/data/cv-data';

export default function SkillsLayout() {
  return (
    <section className="card fade-in" id="skills">
      <SectionHeading label="Skills" icon="⚡" />

      <div className="grid-2" style={{ gap: 32 }}>
        {/* Design Tools */}
        <div>
          <div
            className="text-xs font-semibold"
            style={{
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 16,
            }}
          >
            Design Tools
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {designTools.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* Dev Tools */}
        <div>
          <div
            className="text-xs font-semibold"
            style={{
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              marginBottom: 16,
            }}
          >
            Dev Tools
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {devTools.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
