'use client';

import { useState, useRef, useEffect } from 'react';

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const PdfIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ImageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export default function DownloadButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<'pdf' | 'image' | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const downloadPDF = (theme: 'website' | 'basic') => {
    setOpen(false);
    setLoading('pdf');

    const body = document.body;
    const themeClass = theme === 'website' ? 'print-theme-website' : 'print-theme-basic';
    body.classList.add(themeClass);

    const restorePrintTheme = () => {
      body.classList.remove('print-theme-website', 'print-theme-basic');
      setLoading(null);
      window.removeEventListener('afterprint', restorePrintTheme);
    };

    window.addEventListener('afterprint', restorePrintTheme);
    window.print();
  };

  const downloadImage = async () => {
    setOpen(false);
    setLoading('image');

    const body = document.body;
    body.classList.add('export-show-urls');

    try {
      const html2canvas = (await import('html2canvas')).default;
      const element = document.querySelector('.cv-page') as HTMLElement;
      if (!element) return;

      const computedStyle = getComputedStyle(element);
      const backgroundColor = computedStyle.getPropertyValue('--color-bg').trim() || '#0d0f14';

      const canvas = await html2canvas(element, {
        backgroundColor,
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        foreignObjectRendering: true,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        width: element.scrollWidth,
        height: element.scrollHeight,
        onclone: (clonedDoc) => {
          clonedDoc.body.style.backgroundColor = backgroundColor;
        },
      });

      const link = document.createElement('a');
      link.download = 'Ahmed-Nader-AlGammal-CV.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Image export failed:', err);
    } finally {
      body.classList.remove('export-show-urls');
      setLoading(null);
    }
  };

  return (
    <div className="download-btn-wrapper no-print" ref={wrapperRef}>
      <button
        id="download-cv-btn"
        className="download-btn"
        onClick={() => setOpen((prev) => !prev)}
        disabled={!!loading}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {loading ? (
          <>
            <span className="download-btn-spinner" />
            {loading === 'pdf' ? 'Preparing PDF…' : 'Generating Image…'}
          </>
        ) : (
          <>
            <DownloadIcon />
            Download CV
            <ChevronIcon />
          </>
        )}
      </button>

      {open && (
        <div className="download-dropdown" role="menu">
          <button
            id="download-pdf-option"
            className="download-dropdown-item"
            role="menuitem"
            onClick={() => downloadPDF('website')}
          >
            <PdfIcon />
            Download as PDF (website theme)
          </button>
          <button
            id="download-pdf-basic-option"
            className="download-dropdown-item"
            role="menuitem"
            onClick={() => downloadPDF('basic')}
          >
            <PdfIcon />
            Download as PDF (basic white theme)
          </button>
          <button
            id="download-image-option"
            className="download-dropdown-item"
            role="menuitem"
            onClick={downloadImage}
          >
            <ImageIcon />
            Download as Image
          </button>
        </div>
      )}
    </div>
  );
}
