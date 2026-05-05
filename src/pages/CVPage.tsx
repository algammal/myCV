'use client';

import { useEffect, useRef } from 'react';
import HeroLayout from '@/layouts/HeroLayout';
import AboutLayout from '@/layouts/AboutLayout';
import ExperienceLayout from '@/layouts/ExperienceLayout';
import SkillsLayout from '@/layouts/SkillsLayout';
import ProjectsLayout from '@/layouts/ProjectsLayout';
import SidebarLayout from '@/layouts/SidebarLayout';
import FooterLayout from '@/layouts/FooterLayout';

export default function CVPage() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  // Intersection Observer — staggered fade-in for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.06 }
    );

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((el, i) => {
      // Stagger each section by 80ms
      (el as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax orb scroll effect
  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (orb1Ref.current) orb1Ref.current.style.transform = `translateY(${y * 0.18}px) translateX(${y * 0.04}px)`;
        if (orb2Ref.current) orb2Ref.current.style.transform = `translateY(${-y * 0.12}px) translateX(${-y * 0.03}px)`;
        if (orb3Ref.current) orb3Ref.current.style.transform = `translateY(${y * 0.08}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Fixed parallax background orbs */}
      <div className="parallax-bg no-print" aria-hidden="true">
        <div ref={orb1Ref} className="parallax-orb orb-1" />
        <div ref={orb2Ref} className="parallax-orb orb-2" />
        <div ref={orb3Ref} className="parallax-orb orb-3" />
        {/* Static subtle grid overlay */}
        <div className="parallax-grid" />
      </div>

      <div className="cv-page">
        {/* ===== Hero full-width ===== */}
        <div className="hero-wrapper fade-in">
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

      {/* ===== Footer ===== */}
      <FooterLayout />
    </>
  );
}
