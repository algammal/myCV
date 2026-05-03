'use client';

import SectionHeading from '@/components/SectionHeading';
import ProjectRow from '@/components/ProjectRow';
import { projects } from '@/data/cv-data';

export default function ProjectsLayout() {
  return (
    <section className="card fade-in" id="projects">
      <SectionHeading label="Projects" icon="🚀" />

      {/* Table header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: 12,
          padding: '6px 0 10px',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: 4,
        }}
      >
        <span className="text-xs text-muted font-semibold" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Project Name
        </span>
        <span className="text-xs text-muted font-semibold" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Dev
        </span>
        <span className="text-xs text-muted font-semibold" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Design
        </span>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow
            key={project.name}
            name={project.name}
            tech={project.tech}
            design={project.design}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
