interface ProjectRowProps {
  name: string;
  tech: string;
  design: boolean;
  index: number;
}

export default function ProjectRow({ name, tech, design, index }: ProjectRowProps) {
  return (
    <div
      className="project-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        alignItems: 'center',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid var(--color-border)',
        animationDelay: `${index * 50}ms`,
        opacity: 0,
        animation: 'fadeSlideIn 0.4s ease forwards',
      }}
    >
      <span className="text-sm font-medium">{name}</span>
      <span
        style={{
          fontSize: 11,
          padding: '2px 8px',
          borderRadius: 100,
          background: tech === 'React' ? 'rgba(79,156,249,0.12)' : 'rgba(74,222,128,0.12)',
          color: tech === 'React' ? 'var(--color-primary)' : 'var(--color-green)',
          fontWeight: 600,
          border: `1px solid ${tech === 'React' ? 'rgba(79,156,249,0.2)' : 'rgba(74,222,128,0.2)'}`,
          whiteSpace: 'nowrap',
        }}
      >
        {tech}
      </span>
      {design && (
        <span
          style={{
            fontSize: 11,
            padding: '2px 8px',
            borderRadius: 100,
            background: 'rgba(167,139,250,0.12)',
            color: 'var(--color-accent)',
            fontWeight: 600,
            border: '1px solid rgba(167,139,250,0.2)',
            whiteSpace: 'nowrap',
          }}
        >
          Design
        </span>
      )}
      {!design && <span />}
    </div>
  );
}
