interface SkillBarProps {
  name: string;
  level: number; /* 0-100 */
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="skill-item" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center" style={{ marginBottom: 6 }}>
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
