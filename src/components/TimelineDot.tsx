interface TimelineDotProps {
  color?: 'blue' | 'purple' | 'green';
}

export default function TimelineDot({ color = 'blue' }: TimelineDotProps) {
  const colorMap = {
    blue: 'var(--color-primary)',
    purple: 'var(--color-accent)',
    green: 'var(--color-green)',
  };

  return (
    <div
      className="timeline-dot"
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: colorMap[color],
        boxShadow: `0 0 8px ${colorMap[color]}`,
        flexShrink: 0,
        marginTop: 5,
      }}
    />
  );
}
