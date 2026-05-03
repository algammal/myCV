'use client';

import HeroLayout from '@/layouts/HeroLayout';
import AboutLayout from '@/layouts/AboutLayout';
import ExperienceLayout from '@/layouts/ExperienceLayout';
import SkillsLayout from '@/layouts/SkillsLayout';
import ProjectsLayout from '@/layouts/ProjectsLayout';
import SidebarLayout from '@/layouts/SidebarLayout';
import { useEffect } from 'react';

export default function CVPage() {
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cv-page">
      {/* ===== Hero full-width ===== */}
      <div className="hero-wrapper">
        <HeroLayout />
      </div>

      {/* ===== Main 2-col grid ===== */}
      <div className="main-grid">
        {/* Left column: main content */}
        <main className="main-col">
          <AboutLayout />
          <ExperienceLayout />
          <SkillsLayout />
          <ProjectsLayout />
        </main>

        {/* Right column: sidebar */}
        <SidebarLayout />
      </div>
    </div>
  );
}
