'use client';

import SectionHeading from '@/components/SectionHeading';
import ContactItem from '@/components/ContactItem';
import AwardCard from '@/components/AwardCard';
import Badge from '@/components/Badge';
import { personalInfo, languages, awards, education } from '@/data/cv-data';

export default function SidebarLayout() {
  return (
    <aside
      className="sidebar-layout fade-in"
      style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
    >
      {/* Personal Info Card */}
      <div className="card" style={{ padding: 24 }}>
        <SectionHeading label="Personal Info" icon="👤" />
        <ContactItem icon="🎂" label="Date of Birth" value={personalInfo.dob} />
        <ContactItem icon="📍" label="Location" value={personalInfo.location} />
        <ContactItem icon="🌍" label="Nationality" value={personalInfo.nationality} />
        <ContactItem icon="✉️" label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
        <ContactItem icon="📞" label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
      </div>

      {/* Education Card */}
      <div className="card" style={{ padding: 24 }}>
        <SectionHeading label="Education" icon="🎓" />
        {education.map((edu, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <div className="text-sm font-semibold" style={{ marginBottom: 4 }}>{edu.degree}</div>
            <div className="text-xs text-muted">{edu.school}</div>
            <div className="text-xs" style={{ color: 'var(--color-primary)', marginTop: 4 }}>{edu.year}</div>
          </div>
        ))}
      </div>

      {/* Languages Card */}
      <div className="card" style={{ padding: 24 }}>
        <SectionHeading label="Languages" icon="🌐" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {languages.map((lang) => (
            <div key={lang.name} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <span className="text-sm font-medium">{lang.name}</span>
              <Badge variant={lang.name === 'Arabic' ? 'green' : 'blue'}>
                {lang.level === 'Native' ? 'Native' : 'Fluent'}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Certifications Card */}
      <div className="card" style={{ padding: 24 }}>
        <SectionHeading label="Awards & Certs" icon="🏆" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {awards.map((award, i) => (
            <AwardCard key={i} title={award.title} detail={award.detail} url={award.url} />
          ))}
        </div>
      </div>
    </aside>
  );
}
