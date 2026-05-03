interface SectionHeadingProps {
  label: string;
  icon?: string;
}

export default function SectionHeading({ label, icon }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {icon && <span>{icon}</span>}
      {label}
    </div>
  );
}
