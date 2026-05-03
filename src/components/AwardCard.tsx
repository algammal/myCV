interface AwardCardProps {
  title: string;
  detail: string;
  url?: string;
}

export default function AwardCard({ title, detail, url }: AwardCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        padding: '14px 16px',
        background: 'var(--color-surface-2)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        cursor: url ? 'pointer' : 'default',
        textDecoration: 'none',
        color: 'inherit',
      }}
      onMouseEnter={(e) => {
        if (url) {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(167,139,250,0.3)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(167,139,250,0.1)';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      <div className="text-sm font-semibold" style={{ marginBottom: 4, color: 'var(--color-accent)' }}>{title}</div>
      {detail && <div className="text-xs text-muted">{detail}</div>}
    </a>
  );
}
