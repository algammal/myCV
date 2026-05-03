interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="contact-item" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--color-border)' }}>
      <span style={{ fontSize: 16, marginTop: 1 }}>{icon}</span>
      <div>
        <div className="text-xs text-muted" style={{ marginBottom: 2 }}>{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{content}</a>;
  }
  return content;
}
